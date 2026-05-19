---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# CoMapeo

[CoMapeo](https://www.comapeo.app/) is an offline-first mapping and data collection tool designed specifically for indigenous communities and grassroots organizations. Built with a focus on data sovereignty and community control, CoMapeo allows communities to map their territories, document environmental changes, and collect evidence of environmental impacts without relying on external internet infrastructure.

## Why CoMapeo is Integrated with Guardian Connector

- **Data Sovereignty**: Gives communities full control over their data and mapping processes
- **Offline-First Design**: Works completely offline, essential for remote areas without internet access
- **Territory Mapping**: Enables communities to map traditional territories and document land use patterns
- **Environmental Documentation**: Supports documentation of environmental changes, deforestation, and ecological impacts
- **Evidence Collection**: Facilitates gathering of evidence for advocacy and legal proceedings
- **Cultural Preservation**: Allows communities to document traditional ecological knowledge and cultural sites
- **Peer-to-Peer Sync**: Enables data sharing between devices without requiring central servers
- **Archive Server**: A CoMapeo archive server (a.k.a. Comapeo Cloud) can be deployed to synchronize data to and from devices, and provides an API to connect with Guardian Connector
- **Customizable**: Supports community-specific categories and data structures

## Category Collections

* For ready-to-use category collections, see the [Category Collections](./templates.md).

## CoMapeo Archive Server

The CoMapeo Archive Server acts both as a peer within a CoMapeo project and as a centralized API endpoint for accessing synchronized project data. Guardian Connector integrates directly with the Archive Server to support automated ingestion, visualization, and long-term storage of CoMapeo observations and media attachments.

Within Guardian Connector, the Archive Server can be hosted directly as part of a deployment. Guardian Connector also provides a script within the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub) that connects to the Archive Server API, fetches project data, and writes it into the Guardian Connector PostgreSQL data warehouse.

This integration makes it possible to:

* Automatically synchronize CoMapeo observations into Guardian Connector
* Store CoMapeo data in a centralized warehouse for analysis and visualization
* Use GC Explorer, dashboards, and external GIS tools with CoMapeo data
* Preserve project data and attachments for long-term access and backup workflows

:::note Monitoring Synchronization Status

The CoMapeo Archive Server fetch script in the GC Scripts Hub returns useful synchronization statistics, including:

* The total number of projects discovered
* The number of observations imported per project
* A list of failed attachments

Failed attachments are typically media files that were referenced by observations but were not successfully exchanged between local CoMapeo devices and the Archive Server. This can occur for several reasons, including intermittent connectivity, synchronization interruptions, or latency issues during peer-to-peer exchange.

These statistics can help administrators verify that all expected CoMapeo data and media attachments have been successfully synchronized to the Archive Server.

:::

:::tip Visualization-Friendly Fields

The CoMapeo fetch data script also generates several additional fields that are especially useful for visualization in tools like [GC Explorer](/reference/gc-toolkit/gc-explorer).

These include:

* **`category`**: The category assigned to each observation in CoMapeo. This can be useful for filtering and organizing observations in maps, dashboards, and galleries.
* **`color`**: A hexadecimal color value associated with the observation category. This can be used to style points consistently across maps and visualizations.
* **`category_icon`**: The filename of the icon associated with the observation category. In [GC Explorer](/reference/gc-toolkit/gc-explorer), this can be used to display observations as category-specific icons on the map.
* **`created_at`**: A timestamp representing when the observation was originally created. This can be useful for time-based filtering and temporal analysis, including within [GC Explorer](/reference/gc-toolkit/gc-explorer), which supports filtering map data by time.

These generated fields help preserve the visual organization and categorization structure originally defined within CoMapeo.

:::


## Other Resources

- [CoMapeo Config Spreadsheet Plugin](https://github.com/digidem/comapeo-config-spreadsheet-plugin) - Generate CoMapeo config directly from Google Spreadsheet
- [MapPacker](https://github.com/conservationmetrics/mappacker) - Generate offline maps in styled map package (`.smp`) format for use in CoMapeo (NOTE: CMI maintains MapPacker, and deploys a server for our users)
- [CoMapeo Icons Generator](https://icons.earthdefenderstoolkit.com/) - Generate icons for CoMapeo categories
- [CoMapeo KML Generator](https://rudokemper.github.io/comapeo-kml-generator/) - Generate a KML file (with images) from CoMapeo Whatsapp shares
- [QGIS SMP Plugin](https://github.com/digidem/qgis-smp-plugin) - Plugin for QGIS to generate styled map package (`.smp`) for use in CoMapeo