---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Verify CoMapeo sync (missing media)

Confirm that a [CoMapeo](/reference/core-integrations/comapeo/) project has synced fully into Guardian Connector — including media attachments — and track down any observations with missing files.

**Tools involved:**

- **[GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)** — the `comapeo_pull` script (`f/connectors/comapeo/comapeo_pull`)
- **[File Browser](/reference/gc-toolkit/filebrowser/)** — where `*_observations_missing_attachments.geojson` reports are written
- **CoMapeo** — re-exchange from the device that still holds the media

## Prerequisites

A CoMapeo → warehouse schedule must already be configured. See [From CoMapeo to Explorer](/reference/common-workflows/from-comapeo-to-explorer/) for one-time setup.

## Steps

1. **Open Windmill Runs** for your CoMapeo schedule (or trigger **Run now**).
2. **Check the run result.** A successful run with no attachment failures means observations and media downloaded cleanly. If any attachment download fails, `comapeo_pull` raises an error and the Windmill run fails, with a message like: *N attachment(s) failed to download. M observation(s) affected. See `*_missing_attachments.geojson` files for details.* The error also includes a `per_project_stats=` JSON summary (observations fetched and attachments failed per project).
3. **Locate the report** in [File Browser](/reference/gc-toolkit/filebrowser/). Look under `comapeo/{project}/` for a file named `{project}_observations_missing_attachments.geojson` (project name is sanitized, for example `Forest Expedition` → `forest_expedition`).
4. **Open the GeoJSON** (in QGIS, a text editor, or similar) to see which observations failed. Each feature includes the observation `id` (`docId`) plus `attachment_download_url` and `attachment_download_error` in properties. Use that to identify what still needs to be exchanged from the field.
5. **Re-exchange** those observations from the CoMapeo device that still has the media to the Archive Server, then **re-run** the Windmill schedule until the run succeeds (green) with no attachment-failure error.

:::tip

Observation rows (and successfully downloaded attachments) are still written to the warehouse and data lake even when some attachments fail — the failure is raised after that save. Treat a red/failed Windmill run with a missing-attachments report as incomplete sync until a later run succeeds.

The missing-attachments GeoJSON is written only when there are failures. A later successful run does **not** delete a leftover report from a previous failure, so use the Windmill run status (not the presence of that file) as the source of truth.

:::

## Related

- [CoMapeo integration](/reference/core-integrations/comapeo/) — Archive Server role and sync statistics
- [From CoMapeo to Explorer](/reference/common-workflows/from-comapeo-to-explorer/) — full CoMapeo → Windmill → Explorer setup
