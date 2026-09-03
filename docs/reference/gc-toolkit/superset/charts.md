---
sidebar_position: 5
tags: [itu-3, opu, tsp]
---

# Useful Superset Charts and Visualizations

Superset comes with many built-in chart types — bar charts, line charts, maps, big numbers, tables, and more. Most of the time, one of these standard charts is exactly what you need. But sometimes you want something different: a page of KPI cards, a formatted report, or a status board with your own colors and layout.

This page is a growing collection of notes on how to get the most out of Superset's visualization options in the context of Guardian Connector projects. Each section covers one chart type, when to use it, and a recommended way of working. For a full list of built-in options, see the [official Superset documentation](https://superset.apache.org/docs/intro/).

## The Handlebars Chart

The **Handlebars** chart is a special chart type that lets you design your own visualization using plain HTML and CSS. Instead of choosing colors and axes like in a standard chart, you write (or generate) a small template, and Superset fills it with the results of your query.

You can use it for things like:

- **KPI dashboards** — a grid of status cards showing the latest reading per site, colored green or red depending on thresholds
- **Formatted reports** — a printable summary table with headers and styled rows
- **Leaderboards** — the top 10 of anything, ranked and styled however you like

The template language is called [Handlebars](https://handlebarsjs.com/), and Superset provides a set of built-in helpers for formatting numbers, dates, and conditions. All of them are documented in the official [Handlebars chart documentation](https://superset.apache.org/docs/using-superset/handlebars-chart).

:::tip
You do **not** need to know HTML, CSS, or Handlebars to use this chart. The workflow below is designed so that a language model (LLM) writes the code for you, and you just copy it into Superset.
:::

### Recommended workflow

The process has three steps:

1. **Generate the query** — get the data you want to display, as a table of results
2. **Describe it to an LLM with redacted sample data** — ask it to design the layout
3. **Copy the HTML and CSS back into Superset** — paste into the chart's template fields

#### Step 1: Generate the query

Build the data table you want to visualize. The easiest way is to write a SQL query in **SQL Lab** and save it as a [virtual dataset](https://docs.preset.io/docs/virtual-datasets), so you can reuse it. The [Helpful SQL Queries](/reference/gc-toolkit/superset/queries/) page has recipes for common tasks (converting text dates to timestamps, turning raw form codes into labels, grouping values into ranges).

For the water metrics example below, a query might return the **latest reading per monitoring station**:

```sql
SELECT 
    station,
    sample_date::timestamp AS sample_date,
    CAST(ph AS REAL) AS ph,
    CAST(turbidity_ntu AS REAL) AS turbidity_ntu
FROM water_quality
ORDER BY station, sample_date DESC
```

:::note
Handlebars charts work best in **raw** query mode (individual rows), which lets your template loop over each record — for example, one card per station. If you need data from several tables, join them in the query itself: the chart only ever sees the result of **one** query.
:::

Run the query and confirm the result looks right. Each column name you see here is a value your template can display, so keep the names simple and consistent (for example `ph`, not `PH value (avg)`).

#### Step 2: Share a redacted sample with an LLM

:::warning
Never paste real data into an LLM. Before sharing, **redact** the sample: replace station names, people, GPS coordinates, or any sensitive value with made-up ones. Column names and fake values are enough — the LLM is designing the layout, not analyzing the data.
:::

Give the LLM three things:

1. **The redacted sample** — 2 or 3 fake rows of your query result, like this:

   | station | sample_date | ph | turbidity_ntu |
   |---------|-------------|-----|---------------|
   | Station A | 2026-07-02 | 7.1 | 1.8 |
   | Station B | 2026-07-01 | 5.9 | 8.2 |

2. **A description of the layout you want** — for example: "a responsive grid of cards, one per station, each showing pH and turbidity, colored green when within range and red when outside it, with the test date at the bottom"

3. **The rules Superset needs** — copy this short instruction into your prompt:

   > Write a Superset Handlebars chart template. The query result is available as `data`, an array of row objects. Loop with `{{#each data}}` and access columns as `{{this.column_name}}`. You may use these helpers: `formatNumber`, `dateFormat` (option `format`), `stringify`, `groupBy`, and the comparison, logical, string, and math helpers like `eq`, `gt`, `lt`, `gte`, `lte`, `and`, `or`, `ifx` — comparisons must be wrapped in parentheses inside `{{#if}}`, e.g. `{{#if (and (gte this.ph 6.5) (lte this.ph 8.5))}}ok{{else}}bad{{/if}}`. No JavaScript, no external stylesheets or fonts — only HTML in the template and plain CSS in a separate Styles block. No empty newlines allowed in Superset's Handlebars implementation. You can use `just-handlebars-helpers` helpers as they are included as well as `handlebars-group-by`.

#### Step 3: Copy it into Superset

1. In Superset, click `+` → **Chart**, choose the dataset from Step 1, and select **Handlebars** as the visualization type.
2. Under **Customize**, paste the HTML into the **Handlebars Template** field.
3. Paste the CSS into the **CSS Styles** field.
4. Under Data → **Query**, choose **Raw records**, select the columns you need, and raise the **row limit** if you have many entries.
5. Click **Update chart** and check the preview, then save and add the chart to a dashboard.

:::tip
Where do the thresholds for your KPIs come from? You can ask the LLM: *"What are the global and typical national standards for drinking water pH and turbidity, such as the WHO Guidelines for Drinking-water Quality?"* — and it will suggest thresholds to build into the template. Treat these as a **starting point only**: confirm them actual regulations and standards your community actually uses, since safe limits vary by country, water source, and treatment.
:::

### Limitations to keep in mind

- **One query per chart.** The template can only show the columns returned by its own query. If you need data from multiple tables, join them in SQL first (see [Helpful SQL Queries](/reference/gc-toolkit/superset/queries/)).
- **No JavaScript.** The chart output is [sanitized](https://superset.apache.org/docs/using-superset/handlebars-chart) by Superset's HTML security settings: scripts, inline event handlers, external stylesheets, and remote fonts are stripped out. Everything must be plain HTML in the template and CSS in the Styles field — no interactive widgets or animations.
- **LLMs invent helpers that don't exist.** A model may use a formatting command Superset doesn't provide (it will render blank). Check any unfamiliar helper against the [official helper list](https://superset.apache.org/docs/using-superset/handlebars-chart), and paste the error or the helper name back into the LLM chat to get a fixed version.
- **Column names must match exactly.** `{{this.ph}}` only works if the query result column is really named `ph`. Columns with spaces or capital letters are awkward in templates — rename them in the query.
- **Values may arrive as text.** Numbers stored in survey form answers often come through as text, which breaks comparisons like `gte`. Cast them in the query (for example `CAST(ph AS REAL)`), as in the example above.
- **Fixed chart box.** On a dashboard, the chart lives in a rectangle of the size you drag out. If your content is taller, it will scroll inside the box — preview on a phone before sharing widely.
- **Keep the row count small.** The template re-renders every row. Hundreds of cards will be slow; aggregate or limit the query, and use standard charts for big data volumes.
- **Text in the template is not translated.** Superset's interface translation will not translate words you wrote inside the HTML. If your audience reads another language, ask the LLM to generate the version with labels in that language.
- **Sanitation.** HTML output is sanitized by default based on your Superset configuration (`HTML_SANITIZATION`).

---

## Suggest a chart type

This page covers the first of many visualizations. If you have found a good use for another chart type in your project — a map that tells a story, a funnel that tracks data quality, a cohort chart that standard users never discover — the Guardian Connector team would like to hear about it.
