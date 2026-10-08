---
sidebar_position: 1
tags: [itu-2, itu-3, opu, tsp]
---

# Monitor data collection progress

Use [Apache Superset](/reference/gc-toolkit/superset/) to track an ongoing data collection project — whether the source is [KoboToolbox](/reference/core-integrations/kobotoolbox/), [CoMapeo](/reference/core-integrations/comapeo/), or another connector that lands rows in the warehouse.

**Tools involved:**

- **[GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)** — keeps the warehouse table up to date from your collection tool
- **[Apache Superset](/reference/gc-toolkit/superset/)** — charts and dashboards for counts, trends, and breakdowns

## Prerequisites

Your survey or observation data must already be flowing into a warehouse table. If it is not set up yet, follow [From KoboToolbox to Superset](/reference/common-workflows/from-kobotoolbox-to-superset/) or [From CoMapeo to Explorer](/reference/common-workflows/from-comapeo-to-explorer/) (and create a Superset dataset on the CoMapeo table), or [Import from third-party platforms](/reference/common-workflows/getting-data-in/import-from-third-party-platforms/) for other sources.

## Steps

1. **Create a Dataset** in Superset on the warehouse table for the project (Database: `Warehouse`, Schema: `public`).
2. **Total submissions** — create a **Big Number** chart with metric `COUNT(*)` so the dashboard shows how many records have arrived so far.
3. **Latest observation** — create another **Big Number** (or Big Number with Trendline) using `MAX()` on your date column (for example `created_at` or submission date) so you can see at a glance when the most recent record arrived.
4. **Trend over time** — create a line (or area) chart that groups by that date column (for example observations per month) so you can see whether collection is accelerating, stalling, or finished.
5. **Breakdown of important columns** — create a **Bar Chart** (horizontal works well for long labels) grouped by the fields that matter for this project:
   - **CoMapeo:** group by `category` to see which observation types are being recorded (and which are lagging).
   - **KoboToolbox / surveys:** group by key closed-ended fields (enumerator, village, form section, or status).
   - Optionally also break down by collector or device to spot gaps in who is collecting.
6. **Assemble a Dashboard** — add the charts (for example latest date and total as Big Numbers beside the monthly trend, with category bars below), publish it, and optionally enable auto-refresh so the team can leave the page open during an active campaign.

For chart type guidance, see [Useful Superset Charts](/reference/gc-toolkit/superset/charts/). For SQL recipes that reshape warehouse columns for charts, see [Helpful SQL Queries](/reference/gc-toolkit/superset/queries).

## Related

- [Multi-dimensional filtering in Superset](/reference/gc-toolkit/superset/charts/filtering) — slice the same data with combined filters (for example Gender = Female AND Age > 40)
- [Dashboards for stakeholders](/reference/common-workflows/sharing-and-presenting/dashboards-for-stakeholders/) — turn progress charts into presentation-ready views
