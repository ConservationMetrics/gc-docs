---
sidebar_position: 5
tags: [itu-3, opu, tsp]
---

# Useful Superset Charts and Visualizations

Superset comes with many built-in chart types — bar charts, line charts, maps, big numbers, tables, and more. Most of the time, one of these standard charts is exactly what you need. But sometimes you want something different: a page of KPI cards, a formatted report, or a status board with your own colors and layout.

This page is a growing collection of notes on how to get the most out of Superset's visualization options in the context of Guardian Connector projects. Each section covers one chart type, when to use it, and a recommended way of working. For a full list of built-in options, see the [official Superset documentation](https://superset.apache.org/docs/intro/).

## The Handlebars Chart

### What it is

The **Handlebars** chart is a special chart type that lets you design your own visualization using plain HTML and CSS. Instead of choosing colors and axes like in a standard chart, you write (or generate) a small template, and Superset fills it with the results of your query.

You can use it for things like:

- **KPI dashboards** — a grid of status cards showing the latest reading per site, colored green or red depending on thresholds
- **Formatted reports** — a printable summary table with headers and styled rows
- **Leaderboards** — the top 10 of anything, ranked and styled however you like

The template language is called [Handlebars](https://handlebarsjs.com/), and Superset provides a set of built-in helpers for formatting numbers, dates, and conditions. All of them are documented in the official [Handlebars chart documentation](https://superset.apache.org/docs/using-superset/handlebars-chart).

:::tip
You do **not** need to know HTML, CSS, or Handlebars to use this chart. The workflow below is designed so that a language model (LLM) writes the code for you, and you just copy it into Superset.
:::

### The problem standard charts didn't solve

Here is an example from one of our partners. They were taking water quality measurements — temperature, turbidity, oxygen levels, and pH — at sample sites around their territory, and they needed the value of this data to surface in two places: at the village level, where people depend directly on the water, and at a higher coordination level, where trends across sites matter.

Charts and maps were useful, but they didn't paint the whole picture of what the information was saying. In particular, there was no way for lay people to understand the implications of water at different levels of turbidity, for example. A bar chart of pH readings answers "what is the number?" — it does not answer "can my family drink this water?"

The Handlebars chart let us build a visualization that highlighted not only the data, but also the thresholds the measurements were passing. By pulling in the safe-consumption limits published by the WHO Guidelines for Drinking-water Quality and Guyana EPA — an LLM is a quick way to find these — the result was a traffic-light style visualization: green when a reading is within safe range, red when it is not. The village council could act on the *impact* of the data, instead of guessing what a pH of 5.9 means against generally accepted thresholds.

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

## The Deck.gl Scatterplot

### What it is

[deck.gl](https://deck.gl/docs) is a tool to visualize large datasets. Within Superset, it is used to visualize maps in a highly performant way.

The **deck.gl Scatterplot** chart draws each row of your query as a circle on a real map. It needs only three things: a **latitude**, a **longitude**, and **one numeric metric** per row. The metric can make the circle bigger and it can also decide the circle's color, so the map answers "where is it, and how bad is it?" at a glance.

This is the map version of the water example from the previous section. A Handlebars card answers *"can this village drink its water?"* — a deck.gl scatterplot answers *"which villages, and are they clustered along the same river?"*

### When it is useful

- When **location carries meaning**: water sources, sampling sites, health posts, incident reports, nesting trees.
- When you have **one number per place** and want hotspots, clusters, and gaps to stand out.
- When your audience reads maps naturally — a council or community often gets more from a map of colored dots than from a table of readings.
- When a Handlebars or table chart shows *what* the values are, and you want a companion chart to show *where* they are.

### Setting up longitude and latitude

Build a virtual dataset with one row per place, with coordinates as **separate numeric columns**. The [Helpful SQL Queries](/reference/gc-toolkit/superset/queries/) page (Geospatial Data Processing) has recipes for pulling `latitude` and `longitude` out of the single `Record_your_current_location` field that ODK/Kobo forms store. For the water example:

```sql
SELECT
    station,
    latitude,
    longitude,
    CAST(turbidity_ntu AS REAL) AS turbidity_ntu,
    sample_date
FROM water_quality
```

In the chart's **Data** tab, the **Longitude & Latitude** control opens a small popover with three ways to point at your coordinates:

- **Longitude & Latitude columns** — the usual case: pick the two columns separately, as in the query above.
- **Delimited long & lat single column** — when both numbers live in one text field (the Kobo format again). It accepts several orders, with a **Reverse lat/long** checkbox when your values land in the ocean. Splitting them in SQL instead is easier to debug and works in every chart, so prefer that when you can.

:::note
Rows with empty coordinates simply **do not appear on the map** — no error, just missing sites. Filter them out in your query (`WHERE latitude IS NOT NULL`) and compare the row count of your query with the number of circles you see; the difference is a data-quality gap worth fixing at the form level.
:::

### The metric

The single number per location is set under **Point Size → Point Size**, by switching the toggle from **Fixed** to **Based on a metric** (for example `MAX("turbidity_ntu")`). **This toggle is crucial:** if left on **Fixed**, Superset completely omits the numerical values from the query payload, leaving deck.gl with no values to evaluate and defaulting all map points to grey.

Because Superset groups scatterplot data by coordinate dimensions (`latitude` and `longitude`), your metric must use an aggregation function like `MAX`, `AVG`, or `SUM`. If each coordinate in your dataset represents a single row, functions like `MAX` or `AVG` return the exact raw value without altering it.

**Common technical pitfalls to watch for:**

* **Case Sensitivity:** Database engines like PostgreSQL convert unquoted column names to lowercase. If Superset throws a `column does not exist` error, open the **Custom SQL** tab in the metric picker and wrap the column name in double quotes: `MAX("Turbidity")`.
* **Data Types:** The column must be strictly numeric. Text responses or string-encoded decimals must be converted using `CAST("column" AS REAL)` or adjusted in the Dataset column settings.

Also check that **Row limit** covers all of your sites, and add the site name (and the reading date) under **Tooltip Contents** so hovering a circle tells people which station it is.

### Brackets: color breakpoints

The power feature for a non-technical audience is **Point Color → Color Scheme Type → Color breakpoints**: you define **ranges** ("brackets") of the metric, and give each range its own color. Each bracket row is a minimum value, a maximum value, and a color; a point is matched **inclusively** (min ≤ value ≤ max), and the **first bracket that matches** wins — so keep your ranges contiguous without gaps. Values that fall in no range get the **Default color** (grey), and the legend labels the ranges for you.

**What brackets require:** a **numeric** metric selected under **Point Size**. They cannot work from a text column. Additionally, if you previously selected **Categorical palette**, clear any column remaining in the **Dimension** box before switching back to **Color breakpoints**—a leftover dimension field forces deck.gl into category mode and ignores your numeric range rules.

If you instead want *one color per category* — river, village, source type — that is what **Categorical palette → Dimension** is for: pick a dimension and each category gets its own palette color. A quick way to remember it:

| Your column is... | Use |
| --- | --- |
| A number you want bucketed into ranges (turbidity, pH, count) | **Point Size:** Based on a metric<br>

<br>**Point Color:** Color breakpoints |
| A label (station, community, water source) | **Point Color:** Categorical palette + Dimension |

**Custom brackets for ranges.** Left on its own, Superset splits the data into evenly sized buckets, which almost never match a meaningful threshold. Set the ranges yourself so the colors change exactly where the real-world limits are. Ensure your highest range uses an explicit upper bound (e.g., `50.001 - 10000`) rather than leaving it open; points exceeding your defined maximum will otherwise fall back to the grey default color.

For turbidity (NTU), guided by the WHO Guidelines for Drinking-water Quality:

| Range | Color | Reading |
| --- | --- | --- |
| 0 – 1 | green | Clear; disinfection works well |
| 1.001 – 5 | yellow | Most people find it acceptable, but it shields germs |
| 5.001 – 50 | orange | Visibly dirty; treatment struggles |
| 50.001 – 10000 | red | Obvious problem — investigate and act |

As in the Handlebars section, treat these as a **starting point**: ask an LLM for the international standards for your metric, then confirm the thresholds your country or community actually uses.

### Choosing colors

How you pick the palette depends on who reads the map:

- If the map is read by **scientists, agencies, or regulators**, use colors and scales those audiences use worldwide for your metric — established sequential scales (viridis-style blues, blue-to-brown for turbidity), WHO-style traffic lights for thresholds — and prefer colorblind-safe palettes.
- If the map is read **exclusively by the community**, use colors people already relate to the condition — clear blue, muddy brown, red as danger — and check those associations with community members first, since color meanings are not universal.
- Either way, **keep colors concise across charts**: the same 3–5 colors, mapped to the same ranges, in the map, the Handlebars cards, and any table. If green means "safe" on the cards and "good" on the map, both say the same thing.

## Basemaps

The map behind your data layers is configured under the Map → Map Style dropdown panel:

* Standard OpenStreetMap Styles: If your instance does not have a Mapbox access token, Superset defaults to free OpenStreetMap options: Streets (OSM), Topography (OSM) (ideal for tracking rivers and terrain relief), and Dark (OSM).
* Official Mapbox Styles: If a Mapbox token is pre-configured on the backend, official basemaps like Light, Dark, Outdoors, and Satellite will seamlessly populate in the picker list.
* Contrast Tips: Use a dark basemap to make brightly colored data breakpoints pop on dashboard monitors. Switch to a light basemap if you need high contrast for readable town names or document exports.

Autozoom frames all active data coordinates automatically upon page load. To fix the camera position permanently over a single target territory, toggle Autozoom off, manually click-and-drag your map frame to the desired viewport, and click Save.

## 💡 Advanced: Using a Custom Mapbox Studio Style

If the standard dropdown selections don't meet your needs and you do not have administrative backend access to add a custom tile server, you can forcefully inject a custom Mapbox Studio URL (e.g., mapbox://styles/...) using a configuration export workaround:

   1. Export your chart: Navigate to your chart, click the action menu icon, and select Export. This downloads a .zip bundle of your configuration assets.
   2. Modify the configuration file: Unzip the folder, navigate to the /charts subfolder, and open your chart's .yaml file using a standard text editor.
   3. Inject your custom style: Find the parameter labeled mapbox_style: (located in both the raw params: block and nested within the stringified query_context: JSON blob). Swap out the default string with your precise Mapbox Studio link:
   
   mapbox_style: "mapbox://styles/your_username/your_custom_style_id"
   
   4. Re-import the bundle: Save the text file, re-compress the root folder into a .zip package, and upload it back into Superset using the cloud Import utility.

Note: Once imported, you can safely use Save as... inside the Explorer UI to clone this chart into new views without breaking your hidden custom basemap link.

:::tip
This section highlights the foundational configuration components. The map includes an extensive tray of advanced parameters—such as customizable tooltip templates, geometric legend sizing, click-through workflow actions, and explicit JavaScript payload callbacks—detailed thoroughly in the [Official Apache Superset Documentation](https://superset.apache.org/docs/using-superset/exploring-data).
:::

## Suggest a chart type

This page covers the first of many visualizations. If you have found a good use for another chart type in your project — a map that tells a story, a funnel that tracks data quality, a cohort chart that standard users never discover — the Guardian Connector team would like to hear about it.
