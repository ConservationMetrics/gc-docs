---
sidebar_position: 3
tags: [itu-3, opu, tsp]
---

# Import from third-party platforms

Bring community or territorial data from external platforms — such as [GBIF](https://www.gbif.org/), [iNaturalist](https://www.inaturalist.org/), or [ArcGIS Online](https://www.arcgis.com/) — into your Guardian Connector data warehouse using [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/).

**Tools involved:**

- **[GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)** — connector scripts for GBIF, iNaturalist, ArcGIS, and many other sources
- **PostgreSQL** — where imported rows land for analysis and visualization
- **[File Browser](/reference/gc-toolkit/filebrowser/)** — optional path for reviewing exported files

## Steps

1. **Choose a connector** in GC Scripts Hub under `f/connectors/` (for example `gbif`, `inaturalist`, or `arcgis`). See the [Data Connectors](/reference/gc-toolkit/gc-scripts-hub/#-data-connectors) list for what each one supports.
2. **Create a Resource** in Windmill with the credentials or parameters the connector needs (API keys, project IDs, layer URLs, bounding boxes, and so on). Your Windmill [Admin](/reference/gc-toolkit/gc-scripts-hub/user-roles/#administrator) typically sets this up once per source account.
3. **Create a Schedule** that runs the connector script on an interval you choose. Name the schedule and path after the source so the Schedules page stays readable.
4. **Run once** from the schedule's **More options** menu, then open the run logs to confirm success.
5. **Confirm the table** in the warehouse (and, if you use them, create a [Superset](/reference/gc-toolkit/superset/) dataset or [GC Explorer](/reference/gc-toolkit/gc-explorer/) view on that table).

The same pattern applies to other Scripts Hub connectors (ODK, Global Forest Watch, SMART, and more). Platform-specific details live with each connector and, for biodiversity sources, in the guides linked below.

## Related

- [GBIF guide](/guides/biodiversity/guide-gbif/) — discovering and importing public biodiversity records
- [iNaturalist guide](/guides/biodiversity/guide-inaturalist/) — project observations and the **iNaturalist: Fetch Observations** script
- [From KoboToolbox to Superset](/reference/common-workflows/from-kobotoolbox-to-superset/) and [From CoMapeo to Explorer](/reference/common-workflows/from-comapeo-to-explorer/) — full end-to-end examples of the same schedule → warehouse → visualization pattern
