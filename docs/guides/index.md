---
sidebar_position: 0
tags: [itu-2, itu-3, idm, opu, tsp]
---

# Introduction

Welcome to the guides & tutorials section of the Guardian Connector documentation! This section provides comprehensive, step-by-step guidance to help Indigenous community organizations make the most of the tools and workflows available across the Guardian Connector ecosystem.

## What You'll Find Here

Our guides & tutorials are crafted with community needs in mind, focusing on practical skills that support Indigenous guardianship objectives: environmental monitoring, data sovereignty, and conservation advocacy. Whether you're new to digital data collection or looking to expand your technical capabilities, these guides provide clear, accessible instruction.

:::note
Most of these guides are actually not about Guardian Connector itself! Rather, they are about tools and workflows that are integrated with Guardian Connector, or about the principles of Indigenous data sovereignty and guardianship.
:::

## Available Learning Resources

### 📱+📋 [Data Management with KoboToolbox](./data-collection/syllabus-data-management-with-kobotoolbox/)

A comprehensive 4-week self-paced learning program that takes you from KoboToolbox basics to advanced data management techniques. Perfect for communities looking to establish robust mobile data collection workflows.

**What you'll learn:**
- Creating and deploying surveys for field data collection
- Managing data quality and validation
- Advanced form design with skip logic and calculations
- Data analysis and export strategies
- Integration workflows with other Guardian Connector tools

**Format:** Weekly modules with video tutorials, reading materials, and practical exercises.

### 📸+🐾 [Collecting Camera Trap Deployment Data](./biodiversity/guide-camera-trap-deployment/)

A practical guide for documenting camera trap deployments, maintenance, and retrievals. Includes a field protocol for preparing equipment, deploying and servicing cameras, and processing SD cards. Designed to help communities keep a reliable record of which camera was placed where, during what period, and under what conditions — so later imagery can still be mapped, compared, and reused.

**What you'll learn:**
- Distinguishing Monitoring Sessions, locations, cameras, and deployments so identifiers stay consistent
- Which deployment metadata to record, including Camtrap DP fields
- Choosing a data collection tool such as CoMapeo, ODK, KoboToolbox, or a simple form
- Following a field protocol for deployment, maintenance, retrieval, and SD card handling
- Organizing photos and videos by project, Monitoring Session, and camera

**Format:** Multi-page guide (concepts, metadata, tools, field protocol, and media organization) with tables, practical examples, and a ready-to-use CoMapeo category set.

### 🖼️+🏷️ [Setting up a Project in Timelapse for Camera Trap Annotation](./biodiversity/guide-timelapse-project/)

A detailed, hands-on guide for setting up camera trap data analysis projects using Timelapse software. Designed to help communities document wildlife presence and biodiversity in their territories.

**What you'll learn:**
- Organizing camera trap imagery for efficient analysis
- Creating custom annotation templates with community-specific species names
- Metadata management and folder organization
- Image review and tagging workflows
- Exporting data for further analysis and reporting

**Format:** Step-by-step tutorial with screenshots, practical examples, and downloadable resources.

### 🔊+🦉 [Bioacoustics Basics with AudioMoth Sensors](./biodiversity/guide-audiomoth/)

An overview of the AudioMoth sensor workflow, covering the full lifecycle of deploying, maintaining, and managing data from AudioMoth bioacoustic sensors.

**What you'll learn:**
- Preparing AudioMoth devices and microSD cards before deployment
- Programming recording schedules, gain, sampling rate, and time sync
- Field deployment, mounting, and LED checks
- Mid-season checks, redeployment, and required deployment metadata
- Offloading SD cards and organizing audio for project storage

**Format:** Step-by-step guide covering sensor preparation through data management, plus testing and troubleshooting appendices.

### 🌿+🏷️ [Annotating Datasets with Local Contexts Labels](./data-sovereignty/guide-local-contexts/)

A practical workflow for communities that want to use [Local Contexts](https://localcontexts.org/) TK and BC labels with Guardian Connector: set up a Hub project, curate labels, sync them into your warehouse with Windmill, and apply chosen labels to specific datasets without altering the underlying data table.

**What you'll learn:**
- Creating a Local Contexts Hub Community project and curating TK/BC labels
- Configuring Windmill resources and running **Local Contexts: Fetch Labels**
- Using the **GC Local Contexts Annotations** app to map labels to warehouse tables
- How per-dataset label metadata (`__lc_labels`) is stored separately from dataset rows

**Format:** Multi-page guide (Hub project and labels, Fetch Labels script, Annotations app) plus links to official Local Contexts documentation.

### 🌿+🤝 [Data Sharing Protocols Grounded in Indigenous Data Sovereignty](./data-sovereignty/guide-data-sovereignty-and-protocols/)

A comprehensive guide for creating data sharing protocols grounded in Indigenous Data Sovereignty principles, designed for communities looking to establish ethical and community-controlled data governance frameworks.

**What you'll learn:**
- Understanding Indigenous Data Sovereignty and the CARE Principles
- Establishing community-controlled data sharing protocols
- Implementing Free, Prior, and Informed Consent (FPIC) frameworks
- Creating Memorandums of Understanding for data partnerships
- Protecting sensitive cultural and territorial information
- Building capacity for community data governance

### 🛰️+🖨️ [Preparing Mining Alert Field Briefings](./land-monitoring/guide-mining-alert-field-briefings/)

An example workflow for monitoring leads: review change detection alerts in GC Explorer, export them, analyze mining sites in QGIS (distance to river and village), and print per-site briefing maps to take to community meetings before a field visit.

**What you'll learn:**
- Reacting to alerts via WhatsApp notifications, or reviewing accumulated alerts in Explorer before planning a round
- Grouping related alerts into incidents and exporting alerts as GeoJSON/KML
- Combining new alerts with historical mining areas from File Browser
- Calculating distance from rivers and villages for each site in QGIS
- Designing per-site print layouts with labels, scale, and north indicator for field use

### 🛩️+🗺️ [From Mining Alerts to Drone Maps](./land-monitoring/guide-drone-photogrammetry-workflow/)

A workflow for monitoring teams to assess remote mining sites without costly expeditions: export alert areas as KML, fly an automated photogrammetry mission, stitch the photos into an orthomosaic with OpenDroneMap (locally) or Geostitch (cloud), and print the result into the same briefing packets and reports used for community visits.

**What you'll learn:**
- Exporting mining alerts as KML for import into a drone mission planner (MavenRoute as worked example)
- Setting overlap, altitude, and mission size so a site is captured in one battery
- Why automated flights guarantee photogrammetry success, and what to check before leaving the site
- Processing imagery on a beefy computer with WebODM, or in the cloud with Geostitch
- Loading the orthomosaic in QGIS and dropping it into existing briefing print layouts

### 🥾+📊 [Turning Monitoring Tracks into Round Reports](./land-monitoring/guide-monitoring-round-reports/)

A post-fieldwork workflow for monitoring teams: take the GPS tracks already recorded during a monitoring round and turn them into a one-page report for the community — surfacing the effort the round cost and backing up which planned sites were actually reached and verified.

**What you'll learn:**
- Recording rounds so GPX files stay usable (one track per team per day, site-named waypoints)
- Extracting distance, elevation gain, and moving/stopped time with in-browser tools (nothing uploaded)
- Verifying in QGIS which planned alert sites the tracks physically reached
- Building a one-page round report: route map, effort box, and per-site findings table
- Archiving tracks into the instance so cumulative effort per season accumulates automatically

## Support and Community

These tutorials are living documents that evolve based on community feedback and needs. If you have questions, suggestions, or would like to share how you've adapted these workflows for your community, we encourage you to reach out and contribute to the collective learning process.

---

*Ready to get started? Choose your learning path above and begin building the technical skills that support your community's monitoring, conservation, and advocacy work.*
