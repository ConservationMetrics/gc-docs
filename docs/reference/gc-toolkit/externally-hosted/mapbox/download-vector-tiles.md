---
tags: [opu, tsp]
sidebar_position: 2
---

# Downloading and Reconstructing Vector Tiles

Guardian Connector includes a connector script (`mapbox_download_vector_tiles`) that downloads **Mapbox vector tiles** for a bounding box into a local cache and converts them into a single **GeoJSON FeatureCollection** in your deployment's data lake. It runs on [Windmill](/reference/gc-toolkit/gc-scripts-hub/) and can optionally reconstruct features that were clipped across tile boundaries.

When it runs, the script:

1. plans the tile grid for the requested bounding box and zoom level (with a zoom cap for quota safety),
2. if `dry_run` is enabled, returns the download plan and stops without making network requests, and
3. otherwise downloads uncached tiles, converts the cached vector tiles (`.pbf`) to GeoJSON (optionally reconstructing clipped features), and writes the result to the data lake.

## When to use it

Use this script when you need vector features from a Mapbox tileset as GeoJSON for analysis, archival, data recovery, or a downstream workflow in Guardian Connector:

- **Recovering data from tilesets** — extract GeoJSON features from a Mapbox tileset when the original source files or Mapbox Dataset are no longer available.
- **Extracting reference layers** — pull vector features within your territory's bounding box from a Mapbox tileset for use in [QGIS](/reference/companion-applications/qgis/), [GC Explorer](/reference/gc-toolkit/gc-explorer/), or your PostgreSQL data warehouse.
- **Preparing data for downstream workflows** — save reconstructed GeoJSON directly to the data lake so other scripts or tools can ingest it.

### Recommended two-step workflow

1. Run the script first with **`dry_run` set to `true`** to inspect the planned tile count (`tile_count` / `to_fetch_count`) and confirm it fits within your Mapbox API quota.
2. Run the script again with **`dry_run` set to `false`** to download the tiles and write the combined GeoJSON file to the data lake.

## Configuration parameters

| Parameter | Default | Description |
| --- | --- | --- |
| `mapbox` | *(required)* | Mapbox credentials resource (only `access_token` is used). |
| `bbox` | *(required)* | Bounding box as `minlon,minlat,maxlon,maxlat` in WGS84 degrees. |
| `tileset` | *(required)* | Mapbox tileset ID (for example, `mapbox.mapbox-streets-v8` or `account.tileset-id`). |
| `zoom` | `12` | Zoom level of the tile grid (`0–14`). |
| `reconstruct_column` | `""` | Feature property used to merge and reconstruct features clipped across tile boundaries. Leave empty to disable reconstruction. |
| `output_filename` | `my_filename` | Base name for the output GeoJSON file and tile cache folder. |
| `attachment_root` | `/persistent-storage/datalake/mapbox` | Data lake directory where output files are stored. |
| `delete_tiles` | `true` | Delete the raw `.pbf` tile cache after a successful GeoJSON write so only the `.geojson` file remains. Set to `false` to keep cached tiles for faster re-runs. |
| `dry_run` | `false` | Return the download plan without fetching tiles or writing GeoJSON. |

### Reconstructing clipped features

Because vector tiles split geometries along a grid, large polygons or lines that cross tile edges are cut into separate pieces. If your features share a unique identifier property (such as an `id`, `fid`, or `name` column), set `reconstruct_column` to that property name so the script merges matching geometries back into complete features in the output GeoJSON.

### Output paths in the data lake

- **GeoJSON output**: `{attachment_root}/{output_filename}.geojson` (accessible via [File Browser](/reference/gc-toolkit/filebrowser/))
- **Tile cache**: `{attachment_root}/{output_filename}/tiles/{z}/{x}/{y}.pbf` (removed automatically when `delete_tiles` is `true`)

## Getting a Mapbox access token

Unlike [Updating a Mapbox Tileset](/reference/gc-toolkit/externally-hosted/mapbox/update-tileset/), this script only needs permission to read vector tiles. A **public access token** (`pk.ey...`) with access to the target tileset is sufficient, though a secret token also works. You can copy or create a token from **Admin > Tokens** in [Mapbox Studio](https://console.mapbox.com/).

## Quota guardrails and zoom levels

:::warning Mapbox API quota

Every vector tile request counts toward your Mapbox API quota, and the number of tiles increases by roughly **4× for each additional zoom level**.

To avoid unexpected usage:

- Always run with **`dry_run = true`** first to check how many tiles will be requested.
- Keep **`delete_tiles = false`** if you plan to re-run the script on the same area — already-downloaded tiles (and known empty tiles) are cached locally and skipped on subsequent runs.
- The `zoom` parameter is capped at `14` in Windmill to prevent accidental high-zoom tile explosions.

:::

:::tip Choosing a zoom level

A tileset only stores geometry up to its configured `maxzoom`; requesting a higher zoom level results in more API requests without adding extra spatial detail. Use [OpenStreetMap's Zoom Levels guide](https://wiki.openstreetmap.org/wiki/Zoom_levels) to pick an appropriate zoom level for your bounding box.

:::
