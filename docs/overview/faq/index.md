---
sidebar_position: 98
tags: [itu-1, itu-2, itu-3, idm, icm, opu, tsp]
---

# Frequently Asked Questions

## Why is Guardian Connector open source?

Guardian Connector manages sensitive community data: cultural knowledge, territorial monitoring, environmental observations. When software does this, trust needs to be verifiable, not assumed.

Open source means interested parties can inspect the actual code, not rely on privacy policies written by lawyers. You can audit how data flows through the system, verify that sovereignty principles are respected in practice, and adapt the platform to your own governance protocols. If Guardian Connector doesn't meet your needs, you can fork it and modify it.

Open source also means durability. Organizations change, funding shifts, partnerships evolve. But open source survives those changes. Guardian Connector can outlive the organizations that build it.

## How do I use Guardian Connector?

Currently, Guardian Connector is in a research and development (R&D) phase. We are working with a number of community organizations to test the platform, gather feedback, and co-create new features. While the tools are open-source and can be self-hosted (see [For Developers](/reference/for-developers)), we are not yet ready to support users that are not partners of [Nia Tero](https://niatero.org/). We hope to be able to support more users in the future, and make it even easier to set up and use Guardian Connector.

## How does Guardian Connector compare to other platforms?

Guardian Connector sits at the intersection of **Indigenous Guardianship, data sovereignty, environmental monitoring, data integration, and data management**. There is no direct equivalent, but several platforms overlap with parts of what Guardian Connector is designed to do.

These platforms are not necessarily direct competitors to Guardian Connector. Each has a different primary purpose, audience, and approach to data management and infrastructure.

#### [Earth Ranger](https://www.earthranger.com/) — Conservation operations and situational awareness

EarthRanger is a free and open-source platform developed by the Allen Institute for AI for wildlife conservation and protected-area management. It brings together field observations, ranger patrols, animal tracking, sensors, camera traps, and other real-time data to support monitoring, alerts, and operational decision-making. Its companion integration platform, Gundi, provides connections to more than 100 conservation technologies and data sources.

#### [Niiwin](https://niiwin.com/) — Indigenous data sovereignty and governance


Niiwin is a commercial platform developed by Animikii Indigenous Technology specifically around Indigenous Data Sovereignty. It supports customizable data structures, access and governance controls, and the ability to host data on-premises or in a chosen cloud environment. Its focus is broader than environmental monitoring, with an emphasis on enabling Indigenous organizations to structure, govern, manage, and build applications around their data according to their own protocols and ways of knowing.

#### [Sensing Clues](https://www.sensingclues.org/) — Conservation monitoring and analytics

Sensing Clues is a nonprofit conservation technology platform that combines offline field data collection, integration of existing apps and sensors, real-time monitoring, alerts, maps, analytics, and reporting. Its tools include the Cluey field application and Focus 360 situational-awareness platform, alongside integrations with camera traps, animal trackers, ODK, SMART, EarthRanger, and other systems. Sensing Clues provides free services alongside paid premium support and functionality, and explicitly states that organizations retain ownership and control of their data and should not be locked into proprietary data structures.

#### [ArcGIS Online](https://www.esri.com/en-us/arcgis/products/arcgis-online/overview) — General-purpose cloud GIS

ArcGIS Online is Esri's commercial software-as-a-service GIS platform. It provides extensive capabilities for hosting and managing geospatial data, creating maps and applications, spatial analysis, field workflows, dashboards, collaboration, and automation. Unlike the other platforms listed here, it is a general-purpose geospatial platform used across many sectors rather than a system specifically designed for conservation or Indigenous organizations. However, it is used by some conservation and Indigenous organizations. It is hosted on Esri-managed infrastructure and uses subscription licensing and usage credits; Esri offers ArcGIS Enterprise separately for organizations requiring self-hosted infrastructure.

### What is distinctive about Guardian Connector?

Guardian Connector does not aim to replace all of these capabilities or become an all-in-one monitoring system. Instead, it combines several priorities that are not commonly brought together in a single platform:

- **Indigenous Guardianship as a primary use case**, including territorial, biodiversity, and community monitoring.
- **Indigenous Data Sovereignty as a core design principle**, rather than an additional governance layer.
- **An open-source and self-hostable architecture**, designed to support community-owned infrastructure and avoid dependence on a proprietary Guardian Connector license.
- **An integration-first approach**, allowing organizations to continue using tools such as CoMapeo, KoboToolbox, Timelapse, QGIS, and other systems that already meet their needs.
- **A shared environment for diverse forms of data**, including spatial data, surveys, monitoring observations, media, biodiversity data, alerts, and files.
- **Different levels of community operation**, allowing organizational users to manage increasingly complex parts of the system while technical support partners assist where needed.

The distinction is therefore not that Guardian Connector is the only platform that supports data integration, conservation monitoring, open-source software, or Indigenous Data Sovereignty. Rather, it is being co-created to bring these priorities together specifically in support of Indigenous organizations and their guardianship goals.

## Is Guardian Connector free?

Yes and no. 

The Guardian Connector platform itself is free to use, and the code is open-source and free to modify and distribute. 

However, Guardian Connector needs to be hosted on a server, and so the cost of hosting has to be covered. Additionally, we strongly recommend also paying for extra services like automated backups, monitoring, and maintenance / upgrades. We are currently working on understanding the standard costs of hosting for a variety of different hosting providers, and will update this FAQ with more information as we learn more.