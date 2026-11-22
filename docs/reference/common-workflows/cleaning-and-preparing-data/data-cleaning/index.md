---
sidebar_position: 1
tags: [itu-3, opu, tsp]
---

# Clean and re-import a dataset

Data cleaning usually happens outside Guardian Connector: you export a copy, clean it in a tool you trust, and bring the cleaned version back. This workflow covers that round trip. It focuses on the Guardian Connector-specific decisions — where to get the data, how to protect record identity, and how to re-import without breaking charts or connector workflows.

For cleaning techniques — duplicates, missing values, typos, data types, outliers — see [Week 4: Data Cleaning](/guides/data-collection/syllabus-data-management-with-kobotoolbox/week-4) in the KoboToolbox Data Management Syllabus. For the tool recommended there, see [OpenRefine](/reference/companion-applications/openrefine/).

## Different ways to work with raw data

| Approach | Best for | Trade-off |
|---|---|---|
| Export → clean → import | One-off or occasional cleaning | Full control over every step, but you repeat the work each time |
| Query-time cleaning in [Superset](/reference/gc-toolkit/superset/) | Fixing how values appear in charts | Does not change the stored data |
| Direct cell edits in Windmill Database Manager | A handful of corrections | Bypasses import preview and identity checks; easy to break charts — use sparingly |
| Clean the data in the upstream data source | Data collection is still ongoing; corrections should persist | Needs edit rights in the source tool; fixes happen outside Guardian Connector |

This workflow focuses on the first approach. The others are useful when you only need a quick fix or the source keeps changing, but they do not replace a cleaned dataset.

:::tip When not to clean a copy
If the data collection project is still running — for example an ongoing KoboToolbox survey — fix the data in the source tool instead. Corrections made in a copy will be overwritten or duplicated the next time the connector runs, and the source stays wrong for everyone else.

Clean in the upstream source when you can still edit submissions, choice labels, or observation fields there. Export → clean → import works best once the collection round is closed, or when the fix belongs to Guardian Connector only.
:::

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

### Tool Options

Any of these tools can work. Choose the one that fits the data and the skills you have.

#### OpenRefine

[OpenRefine](/reference/companion-applications/openrefine/) is built for tabular cleaning. It applies operations across whole columns, makes it easy to spot inconsistent values with facets and clustering, and records every step as a reusable recipe.

The companion page covers installation, the typical workflow, and links to OpenRefine's own documentation. Use it for the tool itself; use this workflow for the Guardian Connector round trip around it.

#### Spreadsheets

LibreOffice Calc, Microsoft Excel, or Google Sheets are enough for small datasets and one-off fixes. They are familiar and quick for a handful of corrections. With large tables or many repeated steps they become slow, and the steps are harder to reproduce later.

#### QGIS

[QGIS](/reference/companion-applications/qgis/) is the right tool when the cleaning involves geometry, coordinates, or spatial attributes — for example fixing invalid polygons, normalizing place names tied to locations, or checking that points fall inside the expected area. See [Use your data in QGIS](/reference/common-workflows/use-your-data-in-qgis/).

#### Other tools

- R or Python for scripted, repeatable cleaning on large or recurring datasets;
- SQL in Superset for query-time fixes that do not change the stored table.

Document which tool and which steps you used. If someone needs to reproduce or challenge the cleaning later, the record matters as much as the result.

### Protect the dataset structure

Column names and column types are the contract between the warehouse table and everything that reads it: Superset datasets and charts, GC Explorer views, and future imports.

- Do not rename columns unless the rename is the intended change.
- Do not change a column's type unless the type change is the intended change.
- Do not drop columns from a dataset that other tools depend on.

If the cleaning really requires a different structure, stop and create a new **derived dataset** — a new table built from the original, leaving the original untouched — rather than reshaping the existing table. See [What a derived dataset looks like](#what-a-derived-dataset-looks-like).

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

If you do not have a reliable identity, do not force a merge. Create a new [derived dataset](#what-a-derived-dataset-looks-like) or use Append instead.

### If you only need cleaner charts

Sometimes the data is fine but a chart needs friendlier values — for example mapping `0` and `1` to “No” and “Yes”, or joining Kobo choice labels. Use a [Superset](/reference/gc-toolkit/superset/) virtual dataset or a calculated column instead of cleaning the stored table.

These recipes change the query, not the data. See [Helpful SQL Queries](/reference/gc-toolkit/superset/queries) for Superset. If the underlying data itself needs correcting, continue with the import step below.

## 3. Upload the cleaned data

Use the [GC Dataset Importer](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/) to upload the cleaned file. Its [import goals](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/#import-goals) section covers the step-by-step behavior; the important decision here is which goal fits the cleaning job.

For most in-place cleaning, **Merge** is the safer choice: it updates matching rows and leaves everything else alone.

| Goal | Cleaning use |
|---|---|
| **Create** | New dataset — for a new structure, a clean replacement under a new name, or a separate dated snapshot |
| **Append** | Add rows without matching — duplicates are possible |
| **Merge** | Update matching rows and keep everything else — the safe default for in-place cleaning |
| **Sync** | Update matching rows and **delete rows not in the upload** — only for a complete, authoritative file |

:::warning Sync is destructive
Sync deletes every unmatched row in the entire table, including rows added by other sources. Use it only when the upload is the complete authoritative set. See [Merging and syncing](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/#merging-and-syncing) for the full behavior. For routine cleaning of a connector-managed table, use **Create** to make a separate derived dataset instead.
:::

:::tip Keep the original intact
Before importing, consider leaving the source table as it is and creating a new dataset with a `_cleaned` marker in its name — for example `kobo_survey` → `kobo_survey_cleaned`. Charts and Explorer views can read the cleaned table while the raw values stay available for comparison or a later re-clean.

This is the safer default when a cleaning decision may need revisiting, and the only option when the source keeps changing. See [What a derived dataset looks like](#what-a-derived-dataset-looks-like) for the full naming convention.
:::

If you only remember one thing: **a re-upload does not delete rows unless you choose Sync.**

### Review before you confirm

The importer previews the changes before writing: rows deleted, updated, and added; columns added; unchanged records; and the final record count. Read it, especially before a Sync. See [Safe preview and permanent changes](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/#preview-and-permanent-changes).

There is no Replace goal, and no import removes columns from an existing table. If you need a true replacement — old columns gone, new structure in place — create a new dataset.

### Datasets managed by a connector

If the table is fed by a workflow such as KoboToolbox, CoMapeo, or another connector, the next workflow run can overwrite your cleaned values. Choose one of these approaches:

1. **Fix the data at the source.** Clean submissions, choice labels, or observations in the upstream tool so the next run brings the corrected values in. This is the only option that keeps the source and Guardian Connector in agreement.
2. **Keep the workflow running and create a separate derived dataset.** Use **Create** with a new name, then point your Superset charts and Explorer views at it. This is the safest option when the source keeps changing and the fix is not possible upstream.
3. **Pause or disable the workflow and treat the table as manually maintained.** Use Merge or Sync on the table itself, then re-enable the workflow when you are ready. See [GC Scripts Hub triggers](/reference/gc-toolkit/gc-scripts-hub/triggers/) for schedules and triggers.

Do not use Merge or Sync on a connector-managed table while the workflow is active unless you intend the next run to win.

:::tip Date connector-derived datasets
A clean made from a connector is a snapshot. The connector table keeps moving, so the clean will be outdated as soon as the workflow runs again. Record both dates in the dataset name — see [What a derived dataset looks like](#what-a-derived-dataset-looks-like) — so readers know which source snapshot it came from and when it was cleaned.
:::

### One-off analyses

Even if you cleaned the data for a single analysis, import the cleaned result as a [derived dataset](#what-a-derived-dataset-looks-like) with both dates in the name. It preserves the work and the decisions behind it for later reuse. If no chart uses it yet, that is fine — it is still available when someone needs it.

If the analysis is truly throwaway, keeping it local is acceptable, but importing it is the safer default.

### What updates automatically

[Superset](/reference/gc-toolkit/superset/) datasets and GC Explorer views read from the warehouse table. If you update the **same table** with Merge or Sync, charts and views that use it reflect the new values without being recreated — refresh the chart or dashboard if Superset has cached results.

If you create a **new [derived dataset](#what-a-derived-dataset-looks-like)**, you need to update the consumers:

- in Superset, edit the dataset to point at the new table, or create charts on the new dataset;
- in GC Explorer, edit the view's primary dataset to use the new table.

:::note “Secondary dataset” means something else in Explorer
In GC Explorer, a **secondary dataset** is an optional overlay layer in a Map or Alerts view. It is not a cleaned copy of a primary dataset. This workflow uses **derived dataset** for the cleaned result to avoid confusion.
:::

## What a derived dataset looks like

A **derived dataset** is a new table built from an existing one. It holds the cleaned values, leaves the original table untouched, and is created with the Dataset Importer's **Create** goal. Charts and Explorer views can point at it instead of the raw table.

Record both dates in the name: when the data was **exported** from Guardian Connector, and when the cleaning was **finished**.

```
<source>_export_YYYY_MM_DD_cleaned_YYYY_MM_DD
```

For example, a KoboToolbox survey exported on 10 November 2026 and cleaned on 12 November 2026 becomes:

```
kobo_survey_export_2026_11_10_cleaned_2026_11_12
```

A same-day clean of camera trap deployments exported on 1 March 2026 becomes:

```
camera_trap_deployments_export_2026_03_01_cleaned_2026_03_01
```

The export date identifies which snapshot of the source the clean is based on; the cleaning date records when the transformation was applied. Keep names lowercase, underscore-separated, and under 63 characters — shorten `<source>` if the full name would be too long.

## Choosing a path

| What you changed | Goal to choose | What updates |
|---|---|---|
| Values only; same records; identity preserved | **Merge** — or Sync only if the file is the complete table | Superset charts and Explorer views on that table |
| Added or removed columns, changed types, or removed rows | Create a new derived dataset | Repoint Superset datasets and Explorer views |
| Source is an active Kobo/CoMapeo workflow and the fix belongs upstream | Clean the data in the upstream data source | The next connector run brings the corrected values in |
| Source is an active Kobo/CoMapeo workflow and the fix is Guardian Connector-only | Create a separate derived dataset, or pause the workflow and use Merge/Sync | Depends on workflow state |
| One-off analysis only | Create a derived dataset | Nothing may use it yet, but the cleaned version is preserved |

## See also

- [OpenRefine](/reference/companion-applications/openrefine/) — tabular cleaning with reusable recipes
- [GC Dataset Importer](/reference/gc-toolkit/gc-scripts-hub/dataset-importer/) — Create, Append, Merge, and Sync
- [File Browser](/reference/gc-toolkit/filebrowser/) — download and upload files
- [Helpful SQL Queries for Superset](/reference/gc-toolkit/superset/queries) — query-time cleaning recipes
- [Download all of your data](/reference/common-workflows/download-all-of-your-data/) — backups and exits
- [Use your data in QGIS](/reference/common-workflows/use-your-data-in-qgis/) — spatial cleaning and analysis
- [Week 4: Data Cleaning](/guides/data-collection/syllabus-data-management-with-kobotoolbox/week-4) — cleaning concepts and techniques
