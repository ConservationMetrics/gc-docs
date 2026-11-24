---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Create polygons from walked tracks

Walk the edge of an area with a GPS-enabled device (e.g. [CoMapeo](/reference/core-integrations/comapeo/) on a smartphone, Garmin GPS, etc.), then turn that track into a single polygon. The polygon gives you a shape you can share, and its area in hectares.

This works with any GPS track, whichever app recorded it.

:::tip You don't need Guardian Connector for this
This workflow only needs GeoJSON track files. If you already have the tracks downloaded (i.e. by exporting them directly from the device used to collect them), you can skip step 1. Follow step 1 when your tracks are already in Guardian Connector.
:::

## What you need

- [QGIS](/reference/companion-applications/qgis/) installed on your computer
- A GeoJSON file with your track (or one file per walk)
- A walk that goes all the way around the area

## 1. Get your tracks as GeoJSON

### Download from Guardian Connector

1. Open [File Browser](/reference/gc-toolkit/filebrowser/).
2. Go to the `comapeo` folder, then your project's folder. Project names are lowercase with underscores, for example `forest_expedition`.
3. Download the file named `<project>_tracks.geojson`.

The file only appears after the CoMapeo sync has run and the project has at least one track. See [From CoMapeo to Explorer](/reference/common-workflows/from-comapeo-to-explorer/) for how the sync is set up.

### Open the tracks in QGIS

Go to **Layer** → **Add Layer** → **Add Vector Layer**, select your GeoJSON file, and click **Add**.

## 2. Turn the track into a polygon

1. Open the **Processing Toolbox** (`Ctrl+Alt+T`).
2. Search for **Lines to polygons** and open it.
3. Set your track layer as the input layer and run it.

The result is a new polygon layer.

## 3. Fix geometry problems

GPS jitter can make a track cross over itself, which makes the polygon invalid.

1. In the Processing Toolbox, search for **Fix geometries**.
2. Set the polygon layer from step 2 as the input layer and run it.

The result is a new, repaired polygon layer.

## 4. Merge the polygons into one shape

1. Select the repaired layer in the **Layers** panel.
2. Click the **Toggle Editing** button (the pencil icon).
3. Press `Ctrl+A` to select all features.
4. Go to **Edit** → **Edit Geometry** → **Merge Selected Features**. Choose the attributes to keep, then click **OK**.
5. Click **Save Layer Edits**, then click **Toggle Editing** again to turn editing off.

:::warning If you see "Merge failed"
If the merge stops with the error `Merge failed: An error during the merge operation`, a polygon still has a problem that step 3 did not fix. Run **Fix geometries** again on the repaired layer, then repeat step 4.

If it still fails, go to **Vector** → **Geometry Tools** → **Check Validity** to find the features that are still invalid.
:::

## 5. Check the area in hectares

1. Go to **Project** → **Properties** → **General** → **Measurements** and set **Area units** to **Hectares**. Click **OK**.
2. Click the **Identify Features** tool and click the polygon.
3. In the results, open **Derived**. The **Area** value is your area in hectares.

## 6. Export as GeoJSON

1. Right-click the merged polygon layer and go to **Export** → **Save Features As...**.
2. Set **Format** to **GeoJSON**, choose a file name, and click **OK**.

:::tip Check your GeoJSON in another tool
You can open the exported file in [mapshaper](https://mapshaper.org/) or [geojson.io](https://geojson.io/) to check the shape without QGIS. Drag the file onto the page.
:::

:::tip Two people, two halves
One person can walk half of the boundary and another person can walk the other half. This works as long as the two tracks **overlap at both ends**. Each half becomes its own polygon in step 2, and the overlap lets the merge in step 4 join them into one closed shape.
:::

## Need help?

- **QGIS documentation**: Visit the [official QGIS documentation](https://docs.qgis.org/)
- **Other QGIS workflows**: See [Use your data in QGIS](/reference/common-workflows/use-your-data-in-qgis/)
