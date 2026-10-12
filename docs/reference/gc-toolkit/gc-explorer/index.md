---
sidebar_position: 3
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# GC Explorer

[Guardian Connector Explorer (GC Explorer)](https://github.com/conservationmetrics/gc-explorer) is a web-based data visualization tool that transforms your community's tabular data into interactive maps, galleries, and dashboards. Built specifically for Guardian Connector, it connects directly to your PostgreSQL database to display data collected from tools like CoMapeo, KoboToolbox, and other data collection platforms.

## 🗺️ Available Views

**📍 Map View**: Visualize your geospatial data on an interactive map with pop-up information panels and embedded media attachments.

**📸 Gallery View**: Browse through photo, audio, and video content collected in the field, organized by date or location.

**⚠️ Alerts Dashboard**: Monitor environmental changes and threats with change detection alerts and before-and-after satellite imagery; create [incidents](/reference/gc-toolkit/gc-explorer/incidents/) to group a series of alerts with secondary data sources.

## 🔄 Data Integration

GC Explorer automatically works with data from:
- **CoMapeo**: Community mapping and observation data
- **KoboToolbox/ODK**: Survey responses and forms  
- **Environmental Alerts**: Satellite change detection data
- **Custom Data Sources**: Any PostgreSQL-compatible tabular data

![GC Explorer Alerts Dashboard](/img/reference/gc-toolkit/gc-explorer/alerts-dashboard.jpg)
_Example of an Alerts Dashboard in GC Explorer_

GC Explorer transforms raw data into accessible, visual formats that help communities understand, share, and act on their collected information.

:::note Data Limitations

To keep visualization responsive, GC Explorer loads up to a configured row limit, normally **10,000 records**. In Map and Alerts views, this limit applies separately to the primary and secondary datasets. When either dataset reaches the limit, a toast notification appears to indicate that more records may be available. Records without valid geometry are excluded from the map.

:::

## 📤 Exporting Data {#exporting-data}

### Exporting Data from the Map View

GC Explorer allows you to export data directly from the Map View into a variety of formats for use in other tools and workflows.

Bulk downloads include the primary dataset. If the map also displays a secondary dataset, those overlay records are not included in the primary dataset's bulk download.

Currently supported export formats include:

* **CSV**: Export your data in a tabular format for spreadsheets, databases, or further analysis.
* **GeoJSON**: Export geospatial data in a modern open format widely supported by GIS tools and web mapping applications.
* **KML**: Export geospatial data for use in applications such as Google Earth and other mapping platforms.

These exports make it easy to continue working with your data outside of GC Explorer using the tools and formats that best fit your community’s needs.

:::tip Format Conversion and GIS Compatibility

Once you have exported your data as CSV, GeoJSON, or KML, it is possible to convert it into many other GIS-compatible formats if needed.

Some commonly requested formats include:

* **Shapefile (.shp)**
* **GeoPackage (.gpkg)**
* **File Geodatabase (.gdb)**

Both QGIS and ArcGIS support importing GeoJSON and KML data and exporting it into these additional formats.

While shapefiles are widely compatible, they also have important limitations, including:

* A maximum 10-character limit for column names
* Limited support for non-Latin character encoding
* Restrictions on field types and data structure complexity

If these limitations affect your workflow, it is generally recommended to use **GeoPackage** or **File Geodatabase** formats instead.

In ArcGIS, CSV files containing coordinate information can also be loaded directly using the **"Add XY Data"** feature.

:::

### Exporting Data from the Alerts Dashboard

The Alerts Dashboard gives you several ways to download alerts and related information.

#### 📥 Exporting Alerts

You can download alerts using the same CSV, GeoJSON, and KML formats as the Map View:

- **Batch download all alerts** at once in one of the supported formats.
- **Download an individual alert** by clicking it on the map.
- **Create an incident** that groups a series of alerts with secondary data sources, then download that incident. See [Incidents](/reference/gc-toolkit/gc-explorer/incidents/) for more information.

#### 📊 Exporting Statistics

The Alerts Dashboard also shows statistics about the alerts, such as the total number of alerts or the total number of hectares affected. You can download those statistics as well.

#### 🕒 Using the Time Filter

The **time filter** on the Alerts Dashboard applies to both of these downloads. Use it to batch-download a subset of alerts instead of the full set; the same filter also updates the statistics, so a statistics download reflects the filtered date range.

## ⚙️ Configuring Views

You can create a new **Map**, **Gallery**, or **Alerts Dashboard** view — and possibly other view types in the future.

When you create a view, you choose a **primary dataset**. Map and Alerts views also support an optional **secondary dataset** containing geospatial data. For example, you can combine observations from two datasets or overlay mapping data with camera-trap deployment points. Both views display secondary points, lines, multipart lines, polygons, and multipart polygons. Click a secondary feature to open its information and supported media in the sidebar.

In Map View, the legend automatically includes a visibility toggle for each dataset with valid features. A toggle controls the whole dataset, including polygon outlines, and keeps its state when you change the basemap. You can also add specific Mapbox style layers to the legend through the view configuration.

Map category and date filters, statistics, and bulk downloads apply to the primary dataset. Filtering the primary dataset leaves the secondary overlay unchanged. In Alerts, configured secondary filter values can restrict which secondary records appear.

The options that appear next depend on the view type; the form itself is the best guide for each field.

For a **map** or **alerts dashboard**, you can set things like:

- A **Mapbox access token**
- A **map style**
- **Map parameters** such as zoom level

If the view includes **media**, you can set things like:

- A **base URL** for where to load media
- **Filters**
- A **header background**, such as a thumbnail image

If another view already has many of the same settings, you can **copy the config from that view** to bootstrap the new one instead of filling everything in from scratch.
