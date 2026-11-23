---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# GC Dataset Importer

Upload a file and write it to a new or existing PostgreSQL table in your Guardian Connector data warehouse. You can import into a dataset created by the importer or by a connector script. The importer detects the file format automatically; you do not need to choose a data source.

![Choose what the import should do to existing data](/img/reference/gc-toolkit/gc-scripts-hub/dataset-importer-goals.png)
_Choose what the import should do in relation to an existing dataset._

## When to use the Dataset Importer {#when-to-use}

You should always prefer using a connector (script) whenever one is available for your source tool. Connectors keep data synchronized, handle source-specific structure, and preserve metadata such as translations and attachments.

Use the Dataset Importer when the data you need cannot be retrieved through a connector, for example:

- A backup of an archived or deleted data project.
- A historical export from a tool that no longer provides access to the data.
- A file that has no associated connector. (Either because the tool is not supported, or because it's just a plain spreadsheet, GeoJSON file, etc.)
- A [cleaned or modified copy](/reference/common-workflows/cleaning-and-preparing-data/data-cleaning/) of a dataset that originally came from a connector. For example, you exported a connector-generated table from Guardian Connector, cleaned it in a spreadsheet or QGIS, and now need to bring the cleaned version back in. The connector will re-fetch the upstream source, not your edited copy.

This applies to every source tool. If a connector can fetch the data, use the connector. The Dataset Importer is the fallback for files.

If you are bringing back a cleaned copy of an existing Guardian Connector dataset, and updating the existing data is the right decision instead of creating a new dataset (see [Clean and re-import a dataset](/reference/common-workflows/cleaning-and-preparing-data/data-cleaning/#3-upload-the-cleaned-data)), use **Merge** or **Sync** with a stable identity column so the cleaned rows update the existing table instead of creating duplicates.

:::note KoboToolbox and ODK
These exports include structure that is specific to those tools, such as repeat groups, translations, and media attachments. Use their connectors when the data is still available. If you import one as a file, use the submission UUID or ID (`_uuid`, `instanceID` / `instanceId`, or `__id`) as the identity column.
:::

## Import goals {#import-goals}

| Goal | What it does | Existing rows not in the upload |
| --- | --- | --- |
| **Create** | Creates a new dataset from the uploaded file. | Not applicable |
| **Append** | Adds every uploaded row without matching. | Kept |
| **Merge** | Matches and updates existing rows, and adds new rows. | Kept |
| **Sync** | Matches and updates existing rows, and adds new rows. | Deleted |

Choose a goal, upload a file, and review the preview before confirming. **Create** asks for a new dataset name. **Append**, **Merge**, and **Sync** ask you to select an existing dataset. **Merge** and **Sync** also ask you to choose identity columns and an update policy.

To replace a dataset, create a new one and then delete the old one.

No import goal removes columns. Columns remain in the dataset even if the uploaded file does not contain them.

## Supported files and limits {#supported-files}

The importer supports:

- CSV, Excel (`.xls`, `.xlsx`), JSON arrays, GeoJSON, GeoPackage, GPX, KML, SMART XML, and ZIP archives.
- Shapefile ZIPs and ZIPs containing other supported files.
- CyberTracker backup JSON and SMART XML, detected automatically.

Notes:

- Maximum upload size: **25 MiB** per file.
- Maximum uncompressed size for ZIP and Excel (`.xls`, `.xlsx`) uploads: **100 MiB**.
- Maximum **150 columns** per dataset.
- A ZIP archive can contain at most **1,000 files**.
- GeoPackages must contain one spatial layer.
- GeoJSON files containing `GeometryCollection` are not supported.

## Merging and syncing {#merging-and-syncing}

Merge and Sync match uploaded rows to existing rows using **record identity**.

### Choose identity columns

- Choose one to three columns from the uploaded file.
- The values must exist in both the upload and the target dataset.
- Every selected value must be complete and unique in the upload. Missing, empty, whitespace-only, or duplicate identities are rejected.
- The dropdown shows how uploaded fields map to stored columns and marks fields that are not in the target dataset.

### Identity guidance for common sources

When importing a file from a known tool, these fields usually make good identity columns:

| Source | Identity guidance |
| --- | --- |
| CoMapeo | Use the observation or track document ID (`docId`), or the GeoJSON feature ID. |
| eBird | Use `subId` with `speciesCode`; use `obsId` when present. |
| GBIF | Use the GBIF occurrence ID (`gbifID` / `gbif_id`). |
| iNaturalist | Use the observation `id` or `uuid`. |
| ArcGIS | Use `globalid` when present; otherwise use `objectid`. |
| CyberTracker | Use the record `uid` when present. |
| Timelapse | Use the image or media `id`. |
| Locus Map | Use a stable source ID if the export has one. Otherwise use a composite such as name + date/time, or choose **Append**. |
| SMART | Use the patrol ID with the waypoint ID, or choose **Append** if those are not available. |

If the export has no stable unique ID, prefer **Append** rather than Merge or Sync. If you need to match rows, use a combination of fields that together identify a row, such as site + date + observer.

### Choose an update policy

- **Imported records win**: matching rows are updated with the uploaded values. Omitted fields stay unchanged. Empty values in the upload can overwrite existing values.
- **Existing records win**: matching rows stay unchanged.

:::danger Sync deletes rows
Sync deletes every unmatched row in the entire selected table, including rows from other sources. This happens even when **Existing records win** is selected.

Sync deletes rows, not columns. Existing columns remain in the dataset even if the uploaded file does not contain them.
:::

## Safe preview and permanent changes {#preview-and-permanent-changes}

:::note Nothing is written yet
Choosing a goal, uploading a file, choosing identity, and generating a preview do not change your dataset.
:::

The **Review** step shows what will happen if you continue:

- The source file and detected format.
- The goal, target dataset, identity, and update policy.
- How many rows will be deleted, updated, and added.
- How many columns will be added.
- How many records are unchanged and the final record count.
- A warning when Sync will delete rows.
- **Field mappings** between uploaded fields and stored columns.
- How many imported records have valid map geometry.

:::warning Confirm import makes permanent changes
Clicking **Confirm import** writes the changes to your dataset. There is no undo in the app.
:::

If you leave before confirming, no changes are applied. If the dataset changes while you are reviewing, the app may ask you to review again before confirming.

:::note
An unconfirmed preview expires after 24 hours. If yours expires, upload the file again and review it.
:::

## After you import {#after-you-import}

### Use your new table in one of the GC data analysis tools

Your new table is a regular PostgreSQL table, so any Guardian Connector analysis tool can use it:

- **GC Explorer**: Add the table to a View to explore or publish it. See [GC Explorer](/reference/gc-toolkit/gc-explorer/).
- **Superset**: Connect to the warehouse database to build charts and dashboards. See [Superset](/reference/gc-toolkit/superset/).
- **Other PostgreSQL tools**: Any client that connects to PostgreSQL can query the table.

### Find the uploaded file in File Browser

The importer stores the original upload in the data lake under the dataset folder. Find it in [File Browser](/reference/gc-toolkit/filebrowser/) for downloads or share links.

:::tip Why might you want to download the file instead?
The stored original lets you work with exactly the file you uploaded — for example, to open it in QGIS, keep an offline copy, or re-import it later. See [Use your data in QGIS](/reference/common-workflows/use-your-data-in-qgis).
:::

### Upload media attachments

If the dataset refers to photos, audio, or video, upload those files with [File Browser](/reference/gc-toolkit/filebrowser/). Put them in a folder under the dataset folder.

This is a good practice to keep your media attachments together with your dataset. Additionally, you can generate a share link to embed them in a tool like GC Explorer. See [File Browser: generating share links](/reference/gc-toolkit/filebrowser/#generating-share-links).

## Troubleshooting {#troubleshooting}

- **Identity field is rejected.** Every selected identity value must be complete and unique in the upload, and must exist in the target dataset.
- **The import has no changes.** Check the preview counts. Create and Sync require at least one row; Append and Merge with no rows do nothing.
- **`GeometryCollection` is not supported.** Convert the file to a supported geometry type before uploading.
- **You need to replace a dataset.** Create a new dataset and delete the old one; the importer does not have a Replace mode.
- **A file is too large.** Uploads are limited to 25 MiB per file, and ZIP or Excel uploads must also be 100 MiB or less once uncompressed. Reduce the file size, or split the data into smaller imports.

## See also {#see-also}

- [File Browser](/reference/gc-toolkit/filebrowser/) — for the original upload and media attachments.
- [GC Explorer](/reference/gc-toolkit/gc-explorer/) — for exploring and publishing the imported data.
- [Clean and re-import a dataset](/reference/common-workflows/cleaning-and-preparing-data/data-cleaning/) — how to export, clean, and re-import without duplicating records.
- [Technical reference](https://github.com/ConservationMetrics/gc-scripts-hub/blob/main/f/apps/gc_dataset_importer_v2.raw_app/README.md) — implementation details for developers.
- [Feature specification and limits](https://github.com/ConservationMetrics/gc-scripts-hub/blob/main/f/apps/gc_dataset_importer_v2.raw_app/SPEC.md) — full requirements and constraints, including the limits above.
