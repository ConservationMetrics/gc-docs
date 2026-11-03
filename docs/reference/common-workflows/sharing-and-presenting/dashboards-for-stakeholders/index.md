---
sidebar_position: 1
tags: [itu-2, itu-3, idm, opu, tsp]
---

# Dashboards for stakeholders

Use [GC Explorer](/reference/gc-toolkit/gc-explorer/) and [Apache Superset](/reference/gc-toolkit/superset/) to build views you can present in a public forum or share with key stakeholders — without exporting slides of static charts every time the data changes.

**Tools involved:**

- **[GC Explorer](/reference/gc-toolkit/gc-explorer/)** — maps, galleries, and alerts dashboards for spatial and media-rich data
- **[Apache Superset](/reference/gc-toolkit/superset/)** — charts and multi-chart dashboards for tabular analysis and KPIs

## Choosing a tool

| Need | Prefer |
| :--- | :--- |
| Interactive map, photo gallery, or change-detection alerts | **GC Explorer** |
| Counts, trends, pie/bar charts, filtered breakdowns | **Superset** |
| Fully custom layout, storytelling site, or bespoke UI | [Custom web experiences](/reference/common-workflows/sharing-and-presenting/custom-web-experiences/) (GC HTTP Server) |

Many presentations use both: Explorer for place-based storytelling, Superset for survey summaries and indicators.

## Steps (Superset)

1. Confirm the warehouse table is up to date (see [Monitor data collection progress](/reference/common-workflows/monitoring-and-analysis/monitor-data-collection-progress/) or your source workflow).
2. Build charts that tell the story (Big Numbers, bars, pies, maps). Use [multi-dimensional filtering](/reference/gc-toolkit/superset/charts/filtering) when the audience needs to slice by several attributes.
3. Assemble a **Dashboard**, arrange layout, and set it to **Published**.
4. Present from the live URL, or share a link with stakeholders who already have Guardian Connector access.

## Steps (GC Explorer)

1. Configure a Map, Gallery, or Alerts Dashboard view on the relevant table ([Configuring Views](/reference/gc-toolkit/gc-explorer/#️-configuring-views)).
2. Set Mapbox style, center/zoom, and media base path as needed.
3. Open the published view during the presentation so filters and pop-ups stay interactive.

## Presenting considerations

- If possible, use live dashboards presentations over screenshots so the latest submissions appear, and leverage the interactive functionality.
- Agree in advance who may see the instance; Stakeholder accounts should match community data-sharing protocols.
- For one-off exports after filtering, see [Exporting Data](/reference/gc-toolkit/gc-explorer/#exporting-data) and [Use your data in QGIS](/reference/common-workflows/use-your-data-in-qgis/).

## Related

- [Useful Superset Charts](/reference/gc-toolkit/superset/charts/)
- [Custom web experiences](/reference/common-workflows/sharing-and-presenting/custom-web-experiences/)
