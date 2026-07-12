---
tags: [opu, tsp]
sidebar_position: 1
---

# Updating a Mapbox Tileset

Guardian Connector includes a connector script that keeps a **Mapbox tileset** in sync with a GeoJSON file stored on Guardian Connector. It runs on [Windmill](/reference/gc-toolkit/gc-scripts-hub/) and can either **create** a new tileset or **update** an existing one, then publishes it so your maps show the latest data.

When it runs, the script:

1. checks whether the tileset already exists,
2. creates it if it's missing, or updates its source data if it already exists, and
3. publishes the tileset so the tiles are rebuilt from the current data.

## When to use it

This is most useful when a dataset changes regularly and you want your Mapbox map to reflect those changes automatically. A typical workflow looks like this:

- A government agency maintains a protected-areas layer in ArcGIS Online and updates it quarterly.
- You display that layer on a Mapbox map in Guardian Connector and want it to always show the latest version.
- You schedule an [ArcGIS connector](/reference/gc-toolkit/gc-scripts-hub/) to download the updated data and save it as a GeoJSON file.
- You then schedule this Mapbox script to create or update the tileset from that file.
- Your Mapbox map updates on its own once the publish step finishes.

### Example use cases

- **Concessions and land use** — keep a Mapbox layer in sync with a concessions dataset (mining, logging, oil, and gas) that is updated regularly, so your maps always show the current boundaries.
- **Protected and territorial areas** — reflect changes to protected areas, Indigenous territories, or community boundaries as they are revised.
- **Field-collected data** — publish the newest observations gathered with tools like [CoMapeo](/reference/connected-applications/comapeo/) or survey apps so partners can see recent fieldwork.
- **Infrastructure and monitoring points** — keep layers such as monitoring stations, water points, or roads up to date as they change on the ground.

:::warning Wait between requests

The Mapbox Tiling Service limits how many requests you can make per minute. If you run this script for several tilesets at once, or schedule many updates close together, you may hit that limit and see some requests fail. Space your jobs out over time rather than running them all at the same moment, and avoid scheduling updates more often than your data actually changes.

:::

:::warning Mapbox billing

Tileset processing and hosting are billed separately by Mapbox. The free tier includes only a limited amount, and beyond that Mapbox charges per processed km² and per stored km²·day.

Before scheduling this script to run on a recurring basis, review the [Mapbox tileset processing pricing](https://www.mapbox.com/pricing#tileset-processing) and [tileset billing metrics](https://docs.mapbox.com/help/glossary/tileset-billing-metrics/). Afterwards, keep an eye on your Mapbox usage so that frequent or large updates don't lead to unexpected charges.

:::

## Getting a Mapbox secret access token

For the script to work, you need to provide a Mapbox **secret access token** that has permission to work with tilesets. To create one in Mapbox Studio:

1. Go to **Admin > Tokens**.
2. Click **+ Create a token**.
3. Add the following secret scopes:
   - `tilesets:write`
   - `tilesets:read`
   - `tilesets:delete`
4. Copy the secret access token (it starts with `sk.ey...`) and save it somewhere safe — you won't be able to view it again after closing the dialog.

## Choosing a zoom level

When a tileset is first created, a [tileset recipe](https://docs.mapbox.com/mapbox-tiling-service/guides/tileset-recipes/) defines settings such as zoom levels:

- The minimum zoom level is always `0`.
- The maximum zoom level is set with the `max_zoom` parameter (default: `11`, valid range: `0–16`).
- `max_zoom` only applies when **creating** a tileset — it's ignored when updating an existing one.

:::tip

If you're not sure what maximum zoom level to pick, [OpenStreetMap's Zoom Levels guide](https://wiki.openstreetmap.org/wiki/Zoom_levels) can help you choose a value that suits your data.

:::