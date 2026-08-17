---
sidebar_position: 5
tags: [idm, opu, tsp]
---

# Other Tools

Beyond the core toolkit, Guardian Connector instances can include additional services that support specialized workflows. These tools are optional: deploy them when a project needs a custom web experience, wildlife media exploration, or another capability that is not covered by GC Explorer or Superset alone.

:::tip

Since these tools are not part of the regular Guardian Connector toolkit, you may require assistance from a Guardian Connector system administrator to deploy or configure them. 
:::

:::note

It is possible to show cards for these tools on the [Landing Page](/reference/gc-toolkit/gc-landing-page/) by accessing the **Custom Apps** page as an Administrator user. There, you can add cards for each tool to the landing page.
:::

## 🌐 GC HTTP Server

The [GC HTTP Server](https://github.com/conservationmetrics/gc-http-server) is a lightweight service for serving static content directly from the Guardian Connector data lake. It runs a minimal HTTPD web server and exposes HTML, JavaScript, CSS, images, and other static assets over HTTP—without a separate build or hosting pipeline.

This fits Guardian Connector's goal of letting communities control both their data and the applications built around it. Upload a folder into the data lake with [File Browser](/reference/gc-toolkit/filebrowser/), point the server at that directory, and the site is available on the web. CapRover can also protect the app with built-in authentication when access should be restricted.

### When to use it

GC Explorer and Superset cover many visualization needs. Use GC HTTP Server when a project needs a fully custom experience—for example a presentation-quality map, a storytelling site, or a bespoke dashboard for a specific audience.

A typical workflow:

1. Ingest field data with the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) (for example CoMapeo observations).
2. Build your own frontend (Leaflet, Mapbox GL JS, OpenLayers, or another framework).
3. Upload the application into the data lake with [File Browser](/reference/gc-toolkit/filebrowser/).
4. Deploy GC HTTP Server and set the `DIRECTORY` environment variable to the location of the uploaded folder.

Both the datasets and the web application then live in the data lake, keeping the experience lightweight and under community control.

## 🐻 GC Wildlife Viewer

The [GC Wildlife Viewer](https://github.com/conservationmetrics/gc-wildlife-viewer) is an R Shiny application for exploring annotated camera trap media (images and videos) on a map with filters. It is designed to be deployed as part of a Guardian Connector CapRover instance alongside the rest of the toolkit.

The app works with exports from [Timelapse](/reference/core-integrations/timelapse/) -- tabular data (CSV), exported images or video, and generated thumbnails -- along with camera trap deployment data. Communities can browse wildlife media by location and attributes without needing to open Timelapse for every review session.

See the [GC Wildlife Viewer README](https://github.com/conservationmetrics/gc-wildlife-viewer/blob/main/README.md) for more information on how to deploy and use the app.