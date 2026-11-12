---
sidebar_position: 1
tags: [itu-3, opu, tsp]
---

# Data Cleaning

Data cleaning usually happens outside Guardian Connector: you export a copy, clean it in a tool you trust, and bring the cleaned version back. This guide covers that round trip. It focuses on the Guardian Connector-specific decisions — where to get the data, how to protect record identity, and how to re-import without breaking charts or connector workflows.

For cleaning techniques — duplicates, missing values, typos, data types, outliers — see [Week 4: Data Cleaning](/guides/data-collection/syllabus-data-management-with-kobotoolbox/week-4). For the recommended tool, see [OpenRefine](/reference/companion-applications/openrefine/).

## Different ways to work with raw data

| Approach | Best for | Trade-off |
|---|---|---|
| Export → clean → import | One-off or occasional cleaning | Full control over every step, but you repeat the work each time |
| Query-time cleaning in Superset | Fixing how values appear in charts | Does not change the stored data |
| Direct cell edits in Windmill Database Manager | A handful of corrections | Bypasses import preview and identity checks; easy to break charts — use sparingly |

This guide focuses on the first approach. The other two are useful when you only need a quick fix, but they do not replace a cleaned dataset.

## 1. Get a copy out

The right route depends on whether the data is stored as a file or as a table in the warehouse.

### Data that is already a file

Use [File Browser](/reference/gc-toolkit/filebrowser/) to download the file.

If the dataset was uploaded through the [GC Dataset Importer](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/), the importer stores the original upload in the data lake under the dataset folder. Find it in [File Browser](/reference/gc-toolkit/filebrowser/) for downloads or share links.

Work on a duplicate, not on the only copy.

### Data that lives in a warehouse table

You have two main options. Both are valid for this task — use the one you feel more comfortable with.

#### Superset

In [Superset](/reference/gc-toolkit/superset/), you can either:

- open **SQL Lab**, run a `SELECT` query, and download the result as CSV; or
- build a **Table** chart and use the chart's download option.

Use SQL Lab when you need a subset, a join, or values from a companion table. See Superset's [exploring data documentation](https://superset.apache.org/user-docs/using-superset/exploring-data) and our [helpful SQL queries](/reference/gc-toolkit/superset/queries) for recipes.

#### Windmill Database Manager

Open the **PostgreSQL** resource in Windmill and click **Manager**. From there you can browse tables, inspect rows, and use the SQL REPL for a query. Copy the result into your cleaning tool, or use the query to identify the rows you need.

See Windmill's [Database Manager documentation](https://www.windmill.dev/docs/core_concepts/resources_and_types#database-manager).

:::tip Kobo choice labels
KoboToolbox responses store raw choice codes in the main table and human-readable labels in a companion table named `<table_name>__labels`. If you export only the main table, you may get codes such as `n_o` instead of the label. Export the labels too, or use the [label-join recipe](/reference/gc-toolkit/superset/queries) in Superset.
:::

### Data in a map or alert view

[GC Explorer](/reference/gc-toolkit/gc-explorer/) can export the current Map or Alerts view as CSV, GeoJSON, or KML. Active date and column filters are applied to the export. This is useful when the cleaning job is about a subset — for example one date range or one category — rather than the full table.

See [Exporting data from GC Explorer](/reference/gc-toolkit/gc-explorer/#exporting-data).

### Bulk export or exit

If you need everything — all files and all tables — use [Download all of your data](/reference/common-workflows/download-all-of-your-data/). That workflow is designed for backups and exits, not for routine data cleaning.

### Keep the raw copy

Always keep an untouched copy of the raw data. Give it a clear name and store it somewhere you can find later, such as the dataset folder in File Browser or a dated folder on your computer. Cleaning decisions are easier to revisit when the original is still available.

## 2. Clean the data

### Recommended: OpenRefine

[OpenRefine](/reference/companion-applications/openrefine/) is our recommended tool for tabular cleaning. It applies operations across whole columns, makes it easy to spot inconsistent values with facets and clustering, and records every step as a reusable recipe.

The companion page covers installation, the typical workflow, and links to OpenRefine's own documentation. Use it for the tool itself; use this guide for the Guardian Connector round trip around it.

### Other tools

You can use any tool that suits the data and your skills:

- spreadsheet software such as LibreOffice Calc, Microsoft Excel, or Google Sheets;
- R or Python for scripted or repeatable cleaning;
- [QGIS](/reference/companion-applications/qgis/) for geometry and spatial attribute cleanup;
- SQL in Superset for query-time fixes that do not change the stored table.

Document which tool and which steps you used. If someone needs to reproduce or challenge the cleaning later, the record matters as much as the result.

### Protect the dataset structure

Column names and column types are the contract between the warehouse table and everything that reads it: Superset datasets and charts, GC Explorer views, and future imports.

- Do not rename columns unless the rename is the intended change.
- Do not change a column's type unless the type change is the intended change.
- Do not drop columns from a dataset that other tools depend on.

If the cleaning really requires a different structure, stop and plan a new derived dataset rather than reshaping the existing table.

### Consider record identity

To update records instead of duplicating them, Guardian Connector needs to know which incoming row corresponds to which existing row. That is **record identity**, and it is not always `_id`.

Record identity can be:

- a single stable ID, such as the warehouse `_id`, a connector's `source_id`, or a KoboToolbox `_uuid`;
- a composite key, such as site + observation date + observer, or plot + species + visit;
- absent, which is fine for creating or appending data but not for merging or syncing it.

The Dataset Importer asks you to choose one to three identity columns when you use Merge or Sync. See [Choose identity columns](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/#choose-identity-columns) for the mechanics. From a cleaning perspective:

- choose columns that are stable across exports and present in both the upload and the target table;
- a composite key is fine when no single column is unique — for example site + date + observer;
- keep connector identifiers intact rather than regenerating them.

:::note Uploaded `_id` is not the warehouse `_id`
In the Dataset Importer, an uploaded `_id` normally maps to a stored column called `source_id`. It does not control the table's internal PostgreSQL `_id`. Choose identity columns based on the fields that actually identify a record in your data, not on the column name alone.
:::

If you do not have a reliable identity, do not force a merge. Create a new derived dataset or use Append instead.

### If you only need cleaner charts

Sometimes the data is fine but a chart needs friendlier values — for example mapping `0` and `1` to “No” and “Yes”, or joining Kobo choice labels. Use a Superset virtual dataset or a calculated column instead of cleaning the stored table.

These recipes change the query, not the data. See [Helpful SQL Queries](/reference/gc-toolkit/superset/queries). If the underlying data itself needs correcting, continue with the import step below.

## 3. Put the cleaned data back

Use the [GC Dataset Importer](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/) to upload the cleaned file. Its [import goals](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/#import-goals) section covers the step-by-step behavior; the important decision here is which goal fits the cleaning job.

For most in-place cleaning, **Merge** is the safer choice: it updates matching rows and leaves everything else alone.

| Goal | Cleaning use |
|---|---|
| **Create** | New dataset — for a new structure, a clean replacement under a new name, or a separate dated snapshot |
| **Append** | Add rows without matching — duplicates are possible |
| **Merge** | Update matching rows and keep everything else — the safe default for in-place cleaning |
| **Sync** | Update matching rows and **delete rows not in the upload** — only for a complete, authoritative file |

:::warning Sync is destructive
Sync deletes every unmatched row in the entire table, including rows added by other sources. Use it only when the upload is the complete authoritative set. See [Merging and syncing](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/#merging-and-syncing) for the full behavior. For routine cleaning of a connector-managed table, use **Create** to make a separate dated dataset instead.
:::

If you only remember one thing: **a re-upload does not delete rows unless you choose Sync.**

### Review before you confirm

The importer previews the changes before writing: rows deleted, updated, and added; columns added; unchanged records; and the final record count. Read it, especially before a Sync. See [Safe preview and permanent changes](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/#preview-and-permanent-changes).

There is no Replace goal, and no import removes columns from an existing table. If you need a true replacement — old columns gone, new structure in place — create a new dataset.

### Datasets managed by a connector

If the table is fed by a workflow such as KoboToolbox, CoMapeo, or another connector, the next workflow run can overwrite your cleaned values. Choose one of these approaches:

1. **Keep the workflow running and create a separate derived dataset.** Use **Create** with a new name, then point your Superset charts and Explorer views at it. This is the safest option when the source keeps changing.
2. **Pause or disable the workflow and treat the table as manually maintained.** Use Merge or Sync on the table itself, then re-enable the workflow when you are ready. See [GC Scripts Hub triggers](/reference/gc-toolkit/gc-scripts-hub/triggers/) for schedules and triggers.

Do not use Merge or Sync on a connector-managed table while the workflow is active unless you intend the next run to win.

:::tip Date connector-derived datasets
A clean made from a connector is a snapshot. The connector table keeps moving, so the clean will be outdated as soon as the workflow runs again. Date the export and the dataset name:

`<source>_clean_YYYY_MM_DD`, for example `kobo_survey_clean_2026_11_12`.

Keep the name lowercase, underscore-separated, and under 63 characters. The date tells readers which snapshot they are looking at; it is the cleaning date, not the collection date.
:::

### One-off analyses

Even if you cleaned the data for a single analysis, import the cleaned result as a dated derived dataset. It preserves the work and the decisions behind it for later reuse. If no chart uses it yet, that is fine — it is still available when someone needs it.

If the analysis is truly throwaway, keeping it local is acceptable, but importing it is the safer default.

### What updates automatically

Superset datasets and GC Explorer views read from the warehouse table. If you update the **same table** with Merge or Sync, charts and views that use it reflect the new values without being recreated — refresh the chart or dashboard if Superset has cached results.

If you create a **new derived dataset**, you need to update the consumers:

- in Superset, edit the dataset to point at the new table, or create charts on the new dataset;
- in GC Explorer, edit the view's primary dataset to use the new table.

:::note “Secondary dataset” means something else in Explorer
In GC Explorer, a **secondary dataset** is an optional overlay layer in a Map or Alerts view. It is not a cleaned copy of a primary dataset. This guide uses **derived dataset** for the cleaned result to avoid confusion.
:::

## Choosing a path

| What you changed | Goal to choose | What updates |
|---|---|---|
| Values only; same records; identity preserved | **Merge** — or Sync only if the file is the complete table | Superset charts and Explorer views on that table |
| Added or removed columns, changed types, or removed rows | Create a new dated derived dataset | Repoint Superset datasets and Explorer views |
| Source is an active Kobo/CoMapeo workflow | Create a separate dated dataset, or pause the workflow and use Merge/Sync | Depends on workflow state |
| One-off analysis only | Create a dated derived dataset | Nothing may use it yet, but the cleaned version is preserved |

## See also

- [OpenRefine](/reference/companion-applications/openrefine/) — the recommended cleaning tool
- [GC Dataset Importer](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/) — Create, Append, Merge, and Sync
- [File Browser](/reference/gc-toolkit/filebrowser/) — download and upload files
- [Helpful SQL Queries for Superset](/reference/gc-toolkit/superset/queries) — query-time cleaning recipes
- [Download all of your data](/reference/common-workflows/download-all-of-your-data/) — backups and exits
- [Use your data in QGIS](/reference/common-workflows/use-your-data-in-qgis/) — spatial cleaning and analysis
- [Week 4: Data Cleaning](/guides/data-collection/syllabus-data-management-with-kobotoolbox/week-4) — cleaning concepts and techniques
