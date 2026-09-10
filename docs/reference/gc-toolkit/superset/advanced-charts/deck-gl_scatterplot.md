---
sidebar_position: 5
tags: [opu, tsp]
---

## The Deck.gl Scatterplot

### What it is

[deck.gl](https://deck.gl/docs) is a tool to visualize large datasets. Within Superset, it is used to visualize maps in a highly performant way.

The **deck.gl Scatterplot** chart draws each row of your query as a circle on a real map. It needs only three things: a **latitude**, a **longitude**, and **one numeric metric** per row. The metric can make the circle bigger and it can also decide the circle's color, so the map answers "where is it, and how bad is it?" at a glance.

This is the map version of the water example from the [Handlebars documentation](./handlebars). A Handlebars card answers *"can this village drink its water?"* — a deck.gl scatterplot answers *"which villages, and are they clustered along the same river?"*

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

As in the [Handlebars](./handlebars) documentation, treat these as a **starting point**: ask an LLM for the international standards for your metric, then confirm the thresholds your country or community actually uses.

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
