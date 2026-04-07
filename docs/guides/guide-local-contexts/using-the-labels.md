---
sidebar_position: 4
tags: [itu-3, idm, opu, tsp]
---

# Step 4: Using the Labels

After you [apply Labels to a dataset](annotations-app), Guardian Connector stores the mapping in the data warehouse so other tools can treat Local Contexts as first-class metadata—not only inside Windmill.

## Where Labels live in the warehouse

For each annotated dataset, the app writes rows to a companion table:

**`{dataset_name}__lc_labels`**

That table holds which Labels are associated with the dataset (for example, stable identifiers or label keys your stack uses for joins). The **full** Label definitions, display text, image URLs for icons, and related fields from the Hub live in the main Local Contexts Label-set table created by [**Local Contexts: Fetch Labels**](fetch-labels-script), named like:

**`localcontexts_<project_title>`**

Downstream queries or applications can **join** `{dataset_name}__lc_labels` to that Label-set table to resolve icons, long-form text, and anything else you need for display or reporting.

## How you can use this

The warehouse layout is intentionally generic: **any** client that can query the data warehouse—dashboards, custom apps, or catalog tools—can surface Local Contexts Labels for a dataset by joining these tables.

- 📊 **Data visualization** — [Apache Superset](/reference/gc-toolkit/superset/) can use datasets and SQL that join your dataset table, `{dataset_name}__lc_labels`, and the `localcontexts_…` table so charts and dashboards can reflect TK/BC Label context.
  - 🚧 Guardian Connector does not yet publish a dedicated Superset guide for this workflow; we plan to add documentation when recipes are ready.
- 🗺️ **Exploration and maps** — [GC Explorer](/reference/gc-toolkit/gc-explorer/) is a natural place to show Label-backed context next to community data. 
  - 🚧 Showing Local Contexts Labels in GC Explorer is a future objective; it is not available in the product today.
- 📚 **Broader metadata** — The same tables support **data cataloging**, **metadata tagging**, and **discovery** workflows you may adopt later, without locking you into a single UI.
