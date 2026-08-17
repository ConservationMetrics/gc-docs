---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# 📸+🐾 Guide: Collecting Camera Trap Deployment Data

## Introduction

Putting a camera trap in the field is only one part of a deployment. A useful camera trap deployment also creates a reliable record of **which camera was placed where, during what period, and under what conditions**.

This metadata is what later allows images and videos to be connected back to a site, mapped correctly, compared across deployments, and analyzed over time.

This guide focuses primarily on **documenting camera trap deployments, maintenance, and retrievals**. It does not prescribe a particular ecological study design or tell you exactly where or how high to place cameras, since those decisions depend on the goals and target species of the project.

:::important

**Deployment metadata is essential camera trap data**. It is also one of the easiest parts of a camera trap project to overlook or reconstruct only after the fact.

If information such as the deployment ID, location, coordinates, camera ID, and deployment dates is missing or inconsistent, the images and videos collected by the camera may no longer be reliably connected to **where, when, and how they were collected**. This can severely limit their value for mapping, analysis, comparison between sites, and long-term reuse.

Collect this information **at the time of deployment, maintenance, and retrieval**, rather than relying on memory or trying to reconstruct it later.

:::

## 1. Understand cameras, locations, and deployments

Before collecting any data, it is important to distinguish between three things:

| Concept             | Example         | Meaning                                                         |
| ------------------- | --------------- | --------------------------------------------------------------- |
| **Location / Site** | `LOC-014`       | A physical place where cameras may be deployed repeatedly       |
| **Camera**          | `CAM-07`        | A physical camera device                                        |
| **Deployment**      | `DEP-2026-0014` | One camera placed at one location for a specific period of time |

These identifiers should **not be used interchangeably**.

For example:

```text
Project
└── Region: Upper Jatapu
    └── Location: LOC-014
        ├── Deployment DEP-2026-0014
        │   └── Camera CAM-07
        └── Deployment DEP-2026-0031
            └── Camera CAM-12
```

The same camera may later be moved to another location, while the same location may be monitored by several different cameras over the lifetime of a project.

### What about regions, villages, or territories?

Larger geographic groupings such as **region**, **village**, **territory**, **watershed**, or **management zone** are often very useful, but they are project-specific rather than required Camtrap DP fields.

For example:

```text
region: Upper Jatapu
locationID: LOC-014
locationName: Creek Crossing
```

Camtrap DP also provides a `deploymentGroups` field for grouping deployments spatially, temporally, or thematically:

```text
region:Upper Jatapu | season:dry | grid:A3
```

Choose a structure that makes sense locally and use it consistently.

---

## 2. What information should be recorded?

GBIF recommends structuring camera trap data so that it can eventually be represented using [Camtrap DP](https://camtrap-dp.tdwg.org/).

At minimum, every deployment needs to answer:

1. **Which deployment is this?**
2. **Where was the camera?**
3. **When was it operating?**
4. **Which camera was used?**
5. **How was the camera configured and positioned?**

### Camtrap DP deployment fields

The table below summarizes the current Camtrap DP fields for deployments.

Fields marked **Required** are required by the Camtrap DP standard. The others are optional in the standard but may still be very important for your project.

| Field                   | Required | What it records                                                                                     |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `deploymentID`          | ✅        | Unique identifier for this deployment                                                               |
| `locationID`            |          | Stable identifier for the camera location/site                                                      |
| `locationName`          |          | Human-readable name for the location                                                                |
| `latitude`              | ✅        | Latitude in WGS84 decimal degrees                                                                   |
| `longitude`             | ✅        | Longitude in WGS84 decimal degrees                                                                  |
| `coordinateUncertainty` |          | Estimated uncertainty of the coordinates in meters                                                  |
| `deploymentStart`       | ✅        | Date and time the deployment began                                                                  |
| `deploymentEnd`         | ✅        | Date and time the deployment ended                                                                  |
| `setupBy`               |          | Person or team that deployed the camera                                                             |
| `cameraID`              |          | Identifier for the physical camera                                                                  |
| `cameraModel`           |          | Camera manufacturer and model                                                                       |
| `cameraDelay`           |          | Delay before another trigger can occur, in seconds                                                  |
| `cameraHeight`          |          | Camera height above ground, in meters                                                               |
| `cameraDepth`           |          | Camera depth below the surface for underwater deployments                                           |
| `cameraTilt`            |          | Vertical orientation from −90° downward to +90° upward                                              |
| `cameraHeading`         |          | Horizontal direction from 0–360°, clockwise from north                                              |
| `detectionDistance`     |          | Maximum reliable detection distance, in meters                                                      |
| `timestampIssues`       |          | Whether image/video timestamps have known problems                                                  |
| `baitUse`               |          | Whether bait or lure was used                                                                       |
| `featureType`           |          | Feature associated with the deployment, such as trail, road, water source, burrow, or fruiting tree |
| `habitat`               |          | Short description or category for habitat                                                           |
| `deploymentGroups`      |          | Spatial, temporal, or other deployment groupings                                                    |
| `deploymentTags`        |          | Additional structured or unstructured tags                                                          |
| `deploymentComments`    |          | Other notes about the deployment                                                                    |

See the [Camtrap DP deployment schema](https://camtrap-dp.tdwg.org/data/#deployments) for the complete definitions and allowed values.

### Coordinates are especially important

Always record the coordinates of the actual camera location when possible.

Coordinates should preferably include:

* Latitude
* Longitude
* Coordinate accuracy/uncertainty
* The coordinate reference system, normally WGS84

Phones and GPS receivers can provide an estimate of location accuracy, and tools such as [CoMapeo](/reference/connected-applications/comapeo/index.md), [KoboToolbox](/reference/connected-applications/kobotoolbox/index.md), and [ODK](https://docs.getodk.org/collect-intro/) can capture this automatically.

---

## 3. Deployment, maintenance, and retrieval

A deployment should be documented throughout its lifecycle rather than only when the camera is first installed.

### Deploying a camera

When installing a camera, record at least:

* Deployment ID
* Location ID and name
* Region or other relevant geographic grouping
* GPS coordinates and accuracy
* Deployment start date/time
* Camera ID
* Camera model
* Camera settings
* Camera height and orientation, when relevant
* Habitat and other relevant environmental information
* Whether bait or lure was used
* Who deployed the camera

Before leaving the location, also:

* Check the camera's **date, time, and timezone**
* Verify the intended camera settings
* Confirm batteries and SD card are installed correctly
* Trigger the camera and confirm it is detecting the intended area

You may also want to take a normal photograph showing how the camera was installed.

### Maintaining a camera

When visiting an active camera, record:

* Deployment ID
* Visit date/time
* Person performing the maintenance
* Camera condition
* Battery or SD card changes
* Changes to camera settings
* Problems discovered
* Actions taken

Whenever possible, select the **existing deployment** rather than manually retyping its identifiers.

### Retrieving a camera

When removing a camera:

* Identify the deployment
* Record the deployment end date/time
* Confirm the camera ID
* Record the SD card being retrieved, if SD cards are tracked
* Record any damage, clock problems, unexpected movement, or other issues
* Retrieve the camera and/or media

The resulting imagery should remain associated with its `deploymentID`.

Once the media have been copied and organized, see the [Timelapse Camera Trap Annotation Guide](/guides/guide-timelapse-project/) for reviewing and annotating images and videos.

---

## 4. Choosing a tool for deployment data collection

There is no single best application for every camera trap project.

In many cases, **the best tool is one that the field team already knows and uses**, provided that it can collect the necessary metadata reliably.

| Tool                          | Good choice when…                                                   | Advantages                                                                                                                                                                               | Limitations                                                                                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CoMapeo**                   | The team already uses CoMapeo for mapping or territorial monitoring | Designed for offline mapping; automatically captures coordinates, accuracy, and timestamps; can document routes to cameras; reduces the number of applications field teams need to learn | Deployment, maintenance, and retrieval are separate observations rather than relational records; limited field validation; linking repeated visits requires careful IDs and later processing |
| **ODK / ODK Central**         | You need a structured, longitudinal camera-management workflow      | Powerful form logic and validation; excellent GPS support; offline data collection; ODK Entities can represent cameras, locations, and active deployments across multiple forms          | More setup and training; longitudinal workflows require careful form design; synchronization ultimately relies on a central server                                                           |
| **KoboToolbox**               | The team already uses Kobo and needs configurable deployment forms  | Familiar form builder; offline KoboCollect and web forms; GPS capture; validation and skip logic; projects can be linked using dynamic data attachments                                  | Longitudinal linking is less robust when teams remain offline for extended periods because linked data must periodically synchronize with the Kobo server                                    |
| **Spreadsheet or paper form** | The project is small or no suitable field application is available  | Simple and flexible                                                                                                                                                                      | IDs, timestamps, coordinates, spelling, and controlled values are easier to enter inconsistently; repeated visits are harder to manage                                                       |

### CoMapeo

CoMapeo can be particularly appropriate when community monitors are **already using it for mapping and territorial monitoring**. Introducing a second application solely for camera traps may create unnecessary training overhead.

:::tip Existing Category Set
We provide a ready-to-use [CoMapeo Camera Trap Deployment category set](/reference/connected-applications/comapeo/camera-trap-deployment.md) that includes categories for:

* Camera Trap Deployment
* Camera Trap Maintenance
* Camera Trap Retrieval
* Camera Trap Path

The fields use Camtrap DP / GBIF naming conventions where possible.
:::


### ODK

For more complex workflows, ODK can model cameras, locations, and deployments as persistent records using [ODK Entities](https://docs.getodk.org/entities-intro/).

For example:

```text
Locations
└── LOC-014

Cameras
└── CAM-07

Deployments
└── DEP-2026-0014
    ├── locationID → LOC-014
    ├── cameraID → CAM-07
    ├── deploymentStart
    └── status → active
```

A **Maintenance** or **Retrieval** form can then let the user select an existing active deployment instead of re-entering its information.

This is especially useful for larger camera networks or projects where the same sites and cameras are visited repeatedly.

### KoboToolbox

A similar workflow can be implemented in KoboToolbox using [dynamic data attachments](https://support.kobotoolbox.org/dynamic_data_attachment.html).

For example:

```text
Camera Trap Deployments
        ↓
   deploymentID
        ↓
Camera Maintenance / Retrieval
```

The deployment project acts as the parent dataset, while maintenance and retrieval forms retrieve information using the selected `deploymentID`.

This can work well when KoboToolbox is already part of the team's workflow.

However, linked data must be uploaded to the Kobo server and downloaded to field devices before it becomes available for subsequent offline forms. For teams doing many related operations while completely disconnected, test this workflow carefully before deploying it at scale.

---

## Recommended approach

Whichever tool you choose, the most important thing is not the application itself. It is maintaining a consistent relationship between:

```text
LOCATION
   ↕
DEPLOYMENT
   ↕
CAMERA
   ↕
MEDIA
```

If those relationships are preserved, the imagery collected today can still be understood, mapped, analyzed, and reused years later.

## 📚 Further reading

* [GBIF — Best Practices for Managing and Publishing Camera Trap Data](https://docs.gbif.org/camera-trap-guide/en/)
* [Camtrap DP — Camera Trap Data Package](https://camtrap-dp.tdwg.org/)
* [Camtrap DP — Deployment Fields](https://camtrap-dp.tdwg.org/data/#deployments)
* [CoMapeo Documentation](https://docs.comapeo.app/)
* [ODK — Introduction to Entities](https://docs.getodk.org/entities-intro/)
* [KoboToolbox — Dynamic Data Attachments](https://support.kobotoolbox.org/dynamic_data_attachment.html)

[1]: https://camtrap-dp.tdwg.org/data/ "Data - Camtrap DP"
[2]: https://docs.comapeo.app/docs/reviewing-individual-observations-and-tracks/ "Reviewing Individual Observations & Tracks | Comapeo Documentation"
[3]: https://docs.getodk.org/entities-intro/?utm_source=chatgpt.com "Introduction to Entities"
[4]: https://support.kobotoolbox.org/dynamic_data_attachment.html?utm_source=chatgpt.com "Dynamic data attachments in XLSForm"
[5]: https://docs.gbif.org/camera-trap-guide/en/ "Best Practices for Managing and Publishing Camera Trap Data"
