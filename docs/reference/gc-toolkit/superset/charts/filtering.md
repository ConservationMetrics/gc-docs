---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Multi-dimensional filtering

Superset can restrict a chart or an entire dashboard to rows that match several conditions at once — for example a pie chart of **Traditional Knowledge Level** only where **Gender = Female** and **Age > 40**.

This page covers two approaches: filters on a single chart, and Native Filters on a dashboard that apply across many charts.

## Prerequisites

You already have a [Superset dataset](/reference/common-workflows/from-kobotoolbox-to-superset/#3-data-visualization-superset) on the warehouse table that contains the columns you want to filter (for example Gender, Age, Traditional Knowledge Level).

## Filter a single chart

1. Open (or create) a chart — for example a **Pie Chart** with **Traditional Knowledge Level** as the dimension and `COUNT(*)` as the metric.
3. For **Filters**, add a filter for each condition:
   - `Gender` **Equal to** `Female`
   - `Age` **Greater than** `40` (use the numeric operator that matches your column type)
4. Click **Update Chart** (or **Create Chart**), then **Save**.

Only rows that satisfy all filters are included in the pie.

## Filter a whole dashboard (Native Filters)

Use Native Filters when presenters or stakeholders should change the slice themselves without editing each chart.

1. Open the dashboard in edit mode.
2. For the **Filters and controls** sidebar, open the edit menu by clicking the gear icon, and then "Add or edit filters and controls."
3. Add filters for the columns you need. For example, for a gender column, first select the **Dataset**. Next, select "Value" as the **Filter type**, and then select the "Gender" in the **Column** dropdown. And provide a **Filter name** like "Gender".
4. Scope each filter to the charts that should respond to it.
5. **Save** the dashboard, then set filter values in view mode (Gender = Female, Age > 40). Every scoped chart updates together.

:::tip

Use Native Filters for stakeholder dashboards so the audience can explore without changing chart definitions. Use chart-level filters when a single chart should always stay locked to a fixed slice.

:::

## Related

- [Helpful SQL Queries](/reference/gc-toolkit/superset/queries) — when you need a virtual dataset or SQL expression instead of UI filters
- [Monitor data collection progress](/reference/common-workflows/monitoring-and-analysis/monitor-data-collection-progress/)
- [Dashboards for stakeholders](/reference/common-workflows/sharing-and-presenting/dashboards-for-stakeholders/)
