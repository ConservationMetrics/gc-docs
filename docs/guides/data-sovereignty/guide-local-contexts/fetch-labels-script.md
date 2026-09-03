---
sidebar_position: 2
tags: [itu-3, idm, opu, tsp]
---

# Step 2: Fetch Labels from the Local Contexts Hub

After you have a [Hub project and approved labels](hub-project-and-labels), use Windmill (which is that powers the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)) to pull those labels into the data warehouse.

## Configure the Local Contexts resource in Windmill

Create or edit a **Local Contexts** resource that stores:

- **Server URL** — this should be `https://localcontextshub.org` (the default).
- **API key** — from your Community account.
- **Project ID** — the Project whose labels you will sync.

## Run **Local Contexts: Fetch Labels**

In Windmill, locate and run the script titled **Local Contexts: Fetch Labels**.

**What it does:**

- Calls the Local Contexts Hub API for your Project and retrieves TK and BC labels.
- Writes Label records into the same database as your warehouse data.
- Downloads **Label image assets** (e.g. icons) to your datalake.

**After a successful run**, you should see a Label-set table whose name follows the pattern:

> `localcontexts_<project_title>`

…where `<project_title>` comes from your Hub Project title. That table is the **source of available Labels** for the [annotations app](annotations-app).

## Run once, on a schedule, or when labels change

- **On demand** — Run the script whenever you change labels on the Hub or when you first set up the workflow.
- **Scheduled** — If your community wants the warehouse to stay aligned with the Hub without manual runs, schedule the script in Windmill to run periodically.

:::tip
Labels in the warehouse are meant to remain **stable** until you intentionally update them on the Hub and re-run this script.
:::

## Next

[**Apply Local Contexts Labels to a dataset**](annotations-app) using the Windmill annotations app.
