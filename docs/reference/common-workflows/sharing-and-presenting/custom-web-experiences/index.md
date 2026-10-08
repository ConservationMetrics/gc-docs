---
sidebar_position: 2
tags: [opu, tsp]
---

# Custom web experiences

When [GC Explorer](/reference/gc-toolkit/gc-explorer/) and [Superset](/reference/gc-toolkit/superset/) are not enough, Guardian Connector can host additional apps from the data lake — a fully custom static site via [GC HTTP Server](/reference/gc-toolkit/custom-applications/#-gc-http-server), or a camera-trap media explorer via [GC Wildlife Viewer](/reference/gc-toolkit/custom-applications/#-gc-wildlife-viewer).

:::important Technical workflow

These steps are for technical users (typically a [Technical Support Provider](/tags/tsp) or an [Organizational Power User](/tags/opu) working with them). They involve CapRover deployment, environment variables, and data-lake folder layout — not day-to-day Explorer or Superset use.

:::

:::tip

You may need help from a Technical Support Provider (TSP) or Guardian Connector system administrator to deploy or configure these apps. See [Custom Applications](/reference/gc-toolkit/custom-applications/) for the product overview.

:::

Optionally add a card on the [GC Landing Page](/reference/gc-toolkit/gc-landing-page/) (**Custom Apps**, Administrator) so the experience appears alongside Explorer and Superset.

---

## GC HTTP Server — custom static sites

The server exposes a folder from the Guardian Connector data lake over HTTPS. Build whatever static HTML/JS experience you need (Leaflet, Mapbox GL JS, OpenLayers, plain HTML, and so on); both the app and its data can live in the data lake under community control.

### Possible use cases

- **Custom dashboards** tailored to one audience or meeting — layout, language, and KPIs that Superset’s chart grid does not fit (for example a single-screen briefing view for a council session).
- **Data experiences / storytelling** — scrollable or chaptered pages that combine maps, photos, audio, and narrative text about territory monitoring, not just tables and charts.
- **Interactive maps beyond Explorer** — custom styling, multi-layer control, drawing/measure tools, clustered or time-animated layers, or UI in a local language when Explorer’s Map / Gallery / Alerts views are too constrained.
- **Public or partner-facing microsites** — a focused URL for a funder, government counterpart, or community event, optionally behind CapRover auth, without exposing the full Guardian Connector toolkit.
- **Lightweight tools around lake files** — small apps that read GeoJSON, CSVs, or media already stored via File Browser (for example a photo browser or printable field brief generator).

Prefer [Explorer](/reference/gc-toolkit/gc-explorer/) or [Superset](/reference/gc-toolkit/superset/) when a standard map, gallery, alerts dashboard, or chart dashboard is enough — see [Dashboards for stakeholders](/reference/common-workflows/sharing-and-presenting/dashboards-for-stakeholders/). Reach for GC HTTP Server when the product shape itself needs to be custom.

**Tools involved:**

- **[GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)** — ingest field or third-party data into the warehouse / data lake
- **[File Browser](/reference/gc-toolkit/filebrowser/)** — upload the built site (and optional data) into persistent storage
- **[GC HTTP Server](https://github.com/conservationmetrics/gc-http-server)** — serve those folders over HTTP

### Steps

1. **Ingest data** with GC Scripts Hub so datasets and any static GeoJSON/media sit in the data lake.
2. **Build a frontend** as a static app that loads files you control on the instance.
3. **Upload** the app folder (and any data folder it needs) into the data lake via File Browser.
4. **Deploy GC HTTP Server** and point it at that folder — follow the [gc-http-server README](https://github.com/conservationmetrics/gc-http-server/blob/main/README.md) for CapRover setup, `DIRECTORY` / `DATA_DIRECTORY`, and troubleshooting.

---

## GC Wildlife Viewer — camera trap media on a map

Use this when the team has annotated camera trap media in [Timelapse](/reference/core-integrations/timelapse/) and wants an interactive map with filters — without opening Timelapse for every review session. Typical use cases: reviewing a favorite or species-tagged selection with partners, checking which cameras produced media, and browsing images/videos by location and attributes in the browser.

**Tools involved:**

- **[Timelapse](/reference/core-integrations/timelapse/)** — annotate and export a selection of image/video data
- **[File Browser](/reference/gc-toolkit/filebrowser/)** — upload exports into the data lake
- **[GC Wildlife Viewer](https://github.com/conservationmetrics/gc-wildlife-viewer)** — R Shiny app (CapRover)

### Steps

1. **Export** the Timelapse selection and deployment metadata the app expects — see the [gc-wildlife-viewer README](https://github.com/conservationmetrics/gc-wildlife-viewer/blob/main/README.md) for required files and columns.
2. **Upload** those files into the data lake via File Browser (layout is documented in the README).
3. **Deploy GC Wildlife Viewer** following the same README for CapRover, volumes, and ports.

For the broader Timelapse project workflow, see the [Timelapse guide](/guides/biodiversity/guide-timelapse-project/).

## Related

- [Custom Applications](/reference/gc-toolkit/custom-applications/) — when to use these tools vs Explorer / Superset
- [Dashboards for stakeholders](/reference/common-workflows/sharing-and-presenting/dashboards-for-stakeholders/) — presentation views without a custom deploy
