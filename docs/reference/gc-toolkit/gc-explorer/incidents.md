---
sidebar_position: 4
tags: [itu-3, idm, opu, tsp]
---

# Incidents

Incidents in [GC Explorer](/reference/gc-toolkit/gc-explorer/) let you **group different alerts and secondary dataset observations together** when they are about the same event on the ground.

A single ongoing activity — for example gold mining or logging — often produces many separate alerts over time. On the map those alerts look like independent observations, even when they are really about the same thing. Incidents let you associate and link those alerts and observations so they are treated as related.

Once grouped, you can:

- **Share a link** to the incident with others.
- **Download all of the data at once.**
- **Add metadata** that describes the incident, such as a name, a description of the place, the type of activity, who is responsible, and a description of the impact.

Creating an incident does not change or delete the original alerts or observations. It only creates a named group that points to them.

Incidents are available from the **Alerts Dashboard**.

## 📍 Creating an Incident

On the right side of the Alerts Dashboard map, a set of incident tools lets you select features and save them as an incident.

### Selecting alerts and observations

You can mix alerts with secondary dataset observations in the same incident. Select features first, then create the incident:

- **Multi-select**: click features one by one on the map.
- **Bounding box**: hold **Ctrl** (Windows/Linux) or **⌘** (Mac) and drag to draw a box around the features you want. Dragging without that key still pans the map.
- **Clear selection**: deselect everything if you selected the wrong features.

The create-incident tool stays unavailable until at least one feature is selected.

### Adding details

After you have a selection, open the create-incident form. A name is required. You can also add:

- A **description** of the place or the incident
- An **incident type**, such as deforestation, illegal logging, mining, poaching, encroachment, fire, or other
- The **responsible party**
- An **impact description**

When you save, the selected alerts and observations are linked to that incident. The original data stays in place.

## 🔗 Viewing and Sharing Incidents

Open the incidents sidebar to see **saved incidents**. Click an incident to view its details, including the metadata you added and the list of linked alerts and observations.

From an incident's details you can **copy a link** and send it to others. Anyone with access to the Alerts Dashboard can open that link to go straight to the same incident.

You can also **remove** an incident. Removing it cannot be undone, but it only deletes the grouping — the original alerts and observations remain.

## 📤 Downloading an Incident

From an incident's details you can download everything in the group at once:

- **Incident metadata** as a **CSV**, including the details you added and a row for each linked alert or observation
- **Incident features** as **GeoJSON**, with all of the map features in the incident

These are the same kinds of formats used elsewhere in GC Explorer. See [Exporting Data](/reference/gc-toolkit/gc-explorer/#exporting-data) for more about using CSV and GeoJSON in other tools.

:::note Looking ahead

In the future, it may also be possible to export an incident as a map or a report.

:::
