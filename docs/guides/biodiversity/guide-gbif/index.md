---
sidebar_position: 4
tags: [itu-3, opu, tsp]
---

# 🌍+🔍 Discovering Biodiversity Records with GBIF

[GBIF](https://www.gbif.org/) — the Global Biodiversity Information Facility — is an international network and open-data infrastructure for biodiversity occurrence records. Museums, herbaria, government agencies, research projects, and citizen-science platforms publish datasets to GBIF so that anyone can search, map, and download information about *where* and *when* species have been documented around the world.

For community organizations, GBIF is often the broadest public index of biodiversity records that may relate to a territory: not only recent community monitoring, but also historical specimen collections, survey data, and observations contributed by outside researchers and institutions over many decades.

:::tip

For a concise overview of GBIF's mission and network, see [What is GBIF?](https://www.gbif.org/what-is-gbif) on the GBIF website.

:::

GBIF's data is powerful, but it is also aggregated from many outside sources. Communities should treat it as a **discovery and inventory tool** first — a way to learn what exists in public archives — rather than as authoritative territory knowledge on its own. GBIF has established a [task group on Indigenous data governance](https://www.gbif.org/news/1Ke3Gk2USgdIW5OgDlBIKY/open-data-for-people-and-purpose-gbif-establishes-task-group-on-indigenous-data-governance), seeking to implement the [CARE Principles for Indigenous Data Governance](https://www.gida-global.org/care) in how GBIF operates and supports responsible data use.

## How does GBIF aggregate data?

GBIF does not collect field data itself. Instead, **publishers** — institutions, projects, and platforms — register **datasets** and share standardized occurrence records through GBIF's network. Each record typically includes a species name (or higher taxon), a date, a location, and metadata about how the record was collected (for example, whether it is a preserved specimen, a human observation, or a machine observation).

Data reaches GBIF through many channels, including:

- **Natural history collections** — specimen records from museums and herbaria
- **National and regional biodiversity portals** — government and NGO monitoring programs
- **Research projects** — field surveys, ecological studies, and monitoring networks
- **Citizen-science platforms** — including [iNaturalist](/guides/biodiversity/guide-inaturalist/), which exports eligible Research Grade observations to GBIF on a regular schedule

Because GBIF normalizes records from so many sources, a single search over your territory can surface datasets you may not have known existed — along with information about **who published them**, **when** observations were made, and **what kind of evidence** each record represents.

:::note

Records in GBIF reflect what publishers have chosen to share under their own data policies and licenses. They may be incomplete, duplicated across datasets, georeferenced imprecisely, or include culturally sensitive species locations. Always interpret GBIF results in community context and alongside your own governance frameworks.

:::

### Why might community organizations want to share with GBIF (or not)?

Whether your community's observations should appear in GBIF, for example by way of using [iNaturalist](/guides/biodiversity/guide-inaturalist/), is a governance choice, not a technical requirement. Both outcomes are valid depending on your goals.

**Reasons to keep observation data out of GBIF**

- **Privacy and community data.** Some records document species or places that are culturally sensitive, tied to harvesting rights, or meant to stay within the community. For example, a guardian program might log useful plant locations or without wanting precise coordinates discoverable worldwide. A restrictive observation license (for example All Rights Reserved) keeps data available to your iNaturalist project while excluding it from GBIF export.
- **Territorial stewardship.** A nation or community may prefer that biodiversity knowledge from their territory is accessed through their own protocol—not pooled globally without consent. Keeping data out of GBIF can align with [Indigenous data sovereignty](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/) principles while still using iNaturalist for internal mapping, training, and reporting.

**Reasons to share observation data through GBIF**

- **Recognition in global research.** When you want your territory's biodiversity documented in scientific literature, species distribution models, or conservation assessments, GBIF makes your records citable and discoverable. For example, community observations of a rarely recorded orchid or a range extension for a migratory bird can fill gaps that researchers use in IUCN Red List reviews or peer-reviewed studies.
- **Visibility in global processes.** Governments and NGOs draw on GBIF for Convention on Biological Diversity (CBD) reporting, protected-area planning, and invasive-species monitoring. Contributing Research Grade observations under an open license helps ensure your community's monitoring effort is counted in the datasets that shape regional and international conservation decisions—not only on iNaturalist.

## Why might community organizations want GBIF data?

GBIF is most useful when a community wants to understand the **existing public record** of biodiversity documentation in or near their territory, before deciding whether to request data, contact publishers, or import records for deeper analysis.

### 🔍 Inventory and discovery

Before downloading individual occurrence records, it helps to see what GBIF already knows about your territory — who published data, what species appear, and over what time period. CMI makes a free browser tool available that makes that summary quick and easy:

:::tip GBIF Geometry Inventory

**[Open the tool →](https://conservationmetrics.github.io/gbif-geometry-inventory/)** 

Draw a box or drop a GeoJSON boundary of a community area to summarize occurrences, species, datasets, publishers, years, and basis of record. Runs in your browser; no GBIF account required.

:::

That summary helps answer questions such as:

- Who collected data here, and when?
- What species were they documenting?
- Which institutions hold specimens or observations from our territory?
- Are culturally sensitive species being published?
- Are there datasets we didn't know existed?
- Are records about our territory accurate?

Export the summary tables to spreadsheet format to share results in a meeting or attach them to a data-governance review.

### 📥 Data import

When a community needs the underlying records — not just counts — GBIF's [Downloads API](https://techdocs.gbif.org/en/data-use/api-downloads) can retrieve all occurrence data within a territory polygon (or other filter), subject to GBIF's terms of use and the licenses on each dataset. Downloads are typically delivered as Darwin Core Archive (DwC-A) or similar tabular formats suitable for mapping and analysis in GIS or database tools.

Possible use cases include:

1. **Mapping occurrence records** — for example, filtering a download to see where jaguar (*Panthera onca*) records fall relative to community boundaries, protected areas, or recent monitoring sites.
2. **Comparing against current community programs** — in principle, imported GBIF records could be overlaid with recent Guardian Connector or partner datasets to see whether historical public records align with present-day field effort. In practice, older GBIF records are often sparse, inconsistently identified, or poorly georeferenced, so this comparison is exploratory rather than a rigorous baseline.
3. **Exploring broad patterns** — species lists by year, record-type breakdowns (specimen vs. observation), or publisher contributions, in a similar spirit to exploring trends on iNaturalist — though GBIF aggregates many dataset types and time periods, so patterns reflect the combined public archive rather than a single community project.

:::tip

We can make GBIF download workflows available through the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) when a community has a clear use case: for example, scheduled imports into a Guardian Connector warehouse or repeatable exports for a territory polygon. Reach out to us with your goals and we can discuss what makes sense.

:::

## 📚 Further reading

- [GBIF Pilot Using TK and BC Labels](https://localcontexts.org/gbif-pilot-using-tk-and-bc-labels/)
- Pankararu, C.J., Teixidor-Toneu, I., Odonne, G. et al. [A global biodiversity use data infrastructure acknowledging indigenous and local knowledge.](https://www.nature.com/articles/s44185-026-00121-0) npj biodivers 5, 7 (2026). https://doi.org/10.1038/s44185-026-00121-0
- [Darwin Core Archive Quick Reference Guide](https://dwc.tdwg.org/terms/)
