---
sidebar_position: 1
tags: [itu-2, itu-3, opu, tsp]
---

# Use your data in QGIS

[QGIS](/reference/recommended-applications/qgis) is a powerful open-source GIS application that can work with spatial data from Guardian Connector. This guide shows you how to download your data and open it in QGIS for analysis and visualization.

:::tip
This workflow works with any GIS software, including ArcGIS, QGIS, or other spatial analysis tools. The key is downloading your data as files and opening them in your preferred GIS application.
:::

## Overview

Guardian Connector stores spatial data in PostgreSQL databases, but the most user-friendly way to work with this data in QGIS is to download it as files and open them locally. This approach:

- **Keeps data safe**: The warehouse database remains read-only and protected
- **Simplifies workflows**: No need for SQL knowledge or database connections
- **Provides flexibility**: Work with your data offline and in familiar file formats

## Download your spatial data

### Method 1: Export as GeoJSON

Use the `postgres_to_geojson` script in the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) to export spatial data:

1. **Access GC Scripts Hub**: Navigate to your Guardian Connector instance
2. **Run the export script**: 
   - Select the `postgres_to_geojson` script
   - Choose your database connection
   - Specify the table containing spatial data
   - Set the export path (default: `/persistent-storage/datalake/exports`)
3. **Download the file**: Use [Filebrowser](/reference/gc-toolkit/filebrowser/) to download the generated GeoJSON file

### Method 2: Download via Filebrowser

For existing spatial files already stored in Guardian Connector:

1. **Navigate to Filebrowser**: Access your Guardian Connector file storage
2. **Locate spatial files**: Look for GeoJSON, Shapefile, or other GIS file formats
3. **Download files**: Select and download the files you need

## Open data in QGIS

Once you have your spatial data files:

1. **Launch QGIS**: Open QGIS on your computer
2. **Add vector layer**: 
   - Go to **Layer** → **Add Layer** → **Add Vector Layer**
   - Or use the **Add Vector Layer** button in the toolbar
3. **Select your file**: Browse to and select your downloaded GeoJSON or other spatial file
4. **Load the data**: Click **Open** to load your Guardian Connector data into QGIS

## Need help?

- **QGIS documentation**: Visit the [official QGIS documentation](https://docs.qgis.org/)