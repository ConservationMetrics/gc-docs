---
sidebar_position: 3
tags: [itu-3, opu, tsp]
---

# 🐒+📱 Community Biodiversity Monitoring with iNaturalist

[iNaturalist](https://www.inaturalist.org/) is a free platform for recording and identifying plants, animals, fungi, and other organisms. Observations typically include a photo or sound, a date and location, and a species identification — either your own or one suggested and confirmed by the iNaturalist community.

For community monitoring programs, iNaturalist can help teams document biodiversity during fieldwork, train observers on species identification, and keep a shared, searchable record of sightings over time. Because observations are georeferenced and taxonomically structured, they can support mapping, reporting, and long-term comparison across sites and seasons.

:::tip

For step-by-step guidance on making observations, using projects, and other iNaturalist features, see the official [iNaturalist Help Center](https://help.inaturalist.org/en/support/home).

:::

## How iNaturalist integrates with GBIF

When an observation meets iNaturalist's quality criteria — generally, it has a date, coordinates, photos or sounds, and a community-verified identification — it may reach **Research Grade** status. iNaturalist shares eligible Research Grade observation **data** with [GBIF](https://www.gbif.org/) (the Global Biodiversity Information Facility), a global archive used by scientists and resource managers. Export happens about once a week; only observations whose **data license** is CC0, CC BY, or CC BY-NC are included. See [Which iNaturalist observations are exported for GBIF?](https://help.inaturalist.org/en/support/solutions/articles/151000170346-which-inaturalist-observations-are-exported-for-gbif-and-how-often-does-this-export-happen-) for the current criteria.

Participating in GBIF export is optional in practice: you control whether your observation data is licensed for that kind of reuse (see [What to know about data privacy and licensing](#what-to-know-about-data-privacy-and-licensing) below).

:::tip

You can check whether your project's observations have reached GBIF using GBIF's **Project ID** search. For iNaturalist projects, the value is always the full URL of your project page — for example:

> `https://www.gbif.org/occurrence/search?projectId=https%3A%2F%2Fwww.inaturalist.org%2Fprojects%2Fyour-project-name`

Replace `your-project-name` with your project slug, or simply paste your iNaturalist project URL into the Project ID parameter on [GBIF Occurrence Search](https://www.gbif.org/occurrence/search).

:::

## Community monitoring use cases

iNaturalist works well when a community or partner organization wants a lightweight way to aggregate biodiversity records from many observers in one place.

For example, a community-led monitoring program might run repeated field expeditions focused on understudied groups such as insects and other invertebrates, while still documenting better-known groups such as vertebrates. Guardians, visiting scientists, and other participants each upload observations from the field. On an iNaturalist **project page**, the program aggregates those records—along with identifications linked to collected specimens—so everyone can browse, map, and build on a shared dataset over time.

:::note

You do not need a formal expedition to use iNaturalist this way. A local monitoring program can create a project for a territory, season, or taxonomic focus and invite guardians, youth, or visiting scientists to contribute observations that roll up to the same place.

:::

## What to know about data privacy and licensing

By posting on iNaturalist, you agree to the platform's [Terms of Use](https://www.inaturalist.org/pages/terms). In plain terms: your photos, sounds, and observation records are **your intellectual property**, but you allow iNaturalist to display them on the site and use them to connect people to your observations—the same basic arrangement as most social platforms. 

Observations you submit are **public on iNaturalist**, although there are some built-in privacy options available (for example, obscured or private coordinates for sensitive species — see [What is Geoprivacy? What does it mean for an observation to be obscured?](https://help.inaturalist.org/en/support/solutions/articles/151000169938-what-is-geoprivacy-what-does-it-mean-for-an-observation-to-be-obscured-) for more information.).

Separately, iNaturalist applies a **default license** to your content so others can reuse it under stated conditions. As [iNaturalist's licensing FAQ](https://inaturalist.freshdesk.com/en/support/solutions/articles/151000173511-how-do-licenses-work-on-inaturalist-should-i-change-my-licenses-) explains:

- Photos and sounds are licensed **CC BY-NC** (Attribution, NonCommercial) by default: others may reuse them with credit, but not for commercial purposes, without asking each time.
- **Observation data** (metadata such as date, location, and description) can be licensed separately from media. The same defaults apply unless you change them.
- A license clarifies how you *prefer* your content to be used; enforcing it if someone ignores the terms is your responsibility.

You can change licenses **per observation** or set **account defaults** under your iNaturalist settings. Choosing a more permissive license (for example CC BY or CC0) makes reuse easier for Wikipedia and open-data platforms. Choosing a more restrictive option—including **All Rights Reserved**—signals that others need your explicit permission.

:::important

**To keep observation data out of GBIF or other data repositories**, set the **observation data license** to something other than CC0, CC BY, or CC BY-NC (for example All Rights Reserved). GBIF export follows the **observation license**, not the license on individual photos or sounds. Changing a license later does not revoke permission for uses that already happened under the earlier license.

:::

## Using iNaturalist with Guardian Connector

If your community uses Guardian Connector, you can pull iNaturalist data into your data warehouse alongside surveys, camera traps, and other sources. The [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) includes an **iNaturalist: Fetch Observations** connector (`inaturalist_pull.py`) that downloads public observations from a project or user via the [iNaturalist API](https://api.inaturalist.org/v1/docs/), saves raw JSON and GeoJSON, writes records to PostgreSQL, and stores photo attachments locally.

:::tip

Point the connector at an iNaturalist **project slug** (for example `https://www.inaturalist.org/projects/your-project-name`) to sync all observations, and multimedia content, associated with that project. The script only imports **publicly visible** observations; private or obscured coordinates require separate authentication and are not supported today.

:::

Once imported, observations can be mapped, filtered, and combined with other monitoring data in Guardian Connector workflows. For connector details and parameters, see the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) documentation and the [iNaturalist connector README](https://github.com/conservationmetrics/gc-scripts-hub/tree/main/f/connectors/inaturalist) in the repository.

## 📚 Further reading

- [How does iNaturalist protect the locations of sensitive species?](https://help.inaturalist.org/en/support/solutions/articles/151000233080-how-does-inaturalist-protect-the-locations-of-sensitive-species-)