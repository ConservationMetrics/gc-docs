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

## 1. Understand monitoring sessions, cameras, locations, and deployments

Before collecting any data, it is important to distinguish between four related concepts:

| Concept                | Example                         | Meaning                                                                                |
| ---------------------- | ------------------------------- | -------------------------------------------------------------------------------------- |
| **Monitoring Session** | `MS01`                          | A group of related camera deployments carried out during approximately the same period |
| **Location / Site**    | `Upper Jatapu - Creek Crossing` | A physical place where a camera is deployed                                            |
| **Camera**             | `LC1`                           | A physical camera used in the project                                                  |
| **Deployment**         | `MS01-LC1`                      | One camera placed at one location for a specific period of time                                                              |


These identifiers should not be used interchangeably.

### Deployment

This guide uses **deployment** in the sense used by [GBIF](https://docs.gbif.org/camera-trap-guide/en/) and [Camtrap DP](https://camtrap-dp.tdwg.org/): one camera placed at one location between a deployment start and deployment end.

For example:

```text
deploymentID: MS01-LC1
cameraID: LC1
locationName: Creek Crossing
deploymentStart: 2026-05-14
deploymentEnd: 2026-06-18
```

### Monitoring Session

In practice, camera trap projects usually deploy and retrieve several cameras as part of the same period of fieldwork. We recommend grouping these related deployments into a **Monitoring Session**.

For example:

> During Monitoring Session `MS01`, the Upper Jatapu monitoring team deployed seven cameras across several locations.

The cameras do not need to be deployed or retrieved on exactly the same day. A Monitoring Session may include cameras deployed or collected over several days or weeks, provided they are understood locally as part of the same monitoring effort.

For example:

```text
Upper Jatapu Camera Trap Project

└── Monitoring Session MS01

    ├── Deployment MS01-LC1
    │   └── Camera LC1

    ├── Deployment MS01-LC2
    │   └── Camera LC2

    └── Deployment MS01-TC5
        └── Camera TC5
```

:::tip Recommended terminology

Use **Monitoring Session** when talking about the broader period of fieldwork, and **Deployment** for the individual camera record.

For example:

> Monitoring Session `MS01` included three deployments: `MS01-LC1`, `MS01-LC2`, and `MS01-TC5`.

This keeps the terminology compatible with GBIF and Camtrap DP while providing a grouping that is easier to use for fieldwork and file management.

:::

### Naming Monitoring Sessions

Monitoring Sessions should be named sequentially and prefixed with `MS`:

```text
MS01
MS02
MS03
MS04
```

The number identifies the monitoring session within the project.

### Constructing the deployment ID

When a camera is deployed only once during a Monitoring Session, we recommend constructing the `deploymentID` from:

```text
monitoringSessionID + cameraID
```

For example:

```text
monitoringSessionID: MS01
cameraID: LC1
deploymentID: MS01-LC1
```

Other deployments in the same Monitoring Session might therefore be:

```text
MS01-LC1
MS01-LC2
MS01-TC5
MS01-TC8
```

This makes deployment IDs easy to construct and interpret while still giving every deployment its own identifier.

### Representing Monitoring Sessions in Camtrap DP

`monitoringSessionID` is a project-level field recommended by this guide. It is not a dedicated Camtrap DP field.

We recommend keeping it in the project's source data:

```text
monitoringSessionID: MS01
deploymentID: MS01-LC1
cameraID: LC1
```

Camtrap DP also provides a `deploymentGroups` field that can be used to preserve groupings such as Monitoring Sessions when data are converted to Camtrap DP:

```text
monitoringSession:MS01
```

Other useful groupings might include region, season, village, watershed, or management zone:

```text
monitoringSession:MS01 | region:Upper Jatapu | season:dry
```

---

## 2. What information should be recorded?

GBIF recommends structuring camera trap data so that it can eventually be represented using [Camtrap DP](https://camtrap-dp.tdwg.org/).

At minimum, every deployment needs to answer:

1. **Which Monitoring Session does it belong to?**
2. **Which deployment is this?**
3. **Where was the camera?**
4. **When was it operating?**
5. **Which camera was used?**
6. **How was the camera configured and positioned?**

For example:

```text
monitoringSessionID: MS01
deploymentID: MS01-LC1
cameraID: LC1
locationName: Creek Crossing
deploymentStart: 2026-05-14
deploymentEnd: 2026-06-18
```

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

* Monitoring Session ID
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

Each time a camera is serviced, the SD card should be downloaded and safely backed up.

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

## 4. Organizing camera trap photos and videos

Camera trap media should be organized carefully as soon as SD cards are downloaded.

We recommend organizing all media within a single **project folder**, with folders for each **Monitoring Session**, and camera folders inside each Monitoring Session.

For the Upper Jatapu project:

```text
Upper_Jatapu_Camera_Trap_Project/
```

Inside the project folder:

```text
Upper_Jatapu_Camera_Trap_Project/
├── MS01/
├── MS02/
└── MS03/
```

Each Monitoring Session folder then contains a folder for every camera included in that session:

```text
MS01/
├── LC1/
├── LC2/
└── TC5/
```

Camera folders should use the **same camera ID recorded in the deployment data**.

For example, the folder:

```text
Upper_Jatapu_Camera_Trap_Project/MS01/LC1/
```

corresponds to:

```text
monitoringSessionID: MS01
cameraID: LC1
deploymentID: MS01-LC1
```

### Example folder structure

```text
Upper_Jatapu_Camera_Trap_Project/
│
├── MS01/
│   ├── LC1/
│   │   ├── IMG_0001.JPG
│   │   ├── IMG_0002.JPG
│   │   └── ...
│   │
│   └── LC2/
│       ├── IMG_0101.JPG
│       └── ...
│
├── MS02/
│   ├── LC1/
│   │   ├── IMG_0001.JPG
│   │   └── ...
│   │
│   └── TC5/
│       ├── IMG_0301.JPG
│       └── ...
│
└── MS03/
    └── TC8/
        └── ...
```

In this example:

* `Upper_Jatapu_Camera_Trap_Project` is the project.
* `MS01`, `MS02`, and `MS03` are Monitoring Sessions.
* `LC1`, `LC2`, `TC5`, and `TC8` are cameras.
* `MS01-LC1`, `MS01-LC2`, `MS02-LC1`, `MS02-TC5`, and `MS03-TC8` are deployments.

The same camera can therefore appear in several Monitoring Sessions without creating ambiguity:

```text
MS01/LC1/ → deploymentID MS01-LC1
MS02/LC1/ → deploymentID MS02-LC1
```

### Copying files from SD cards

Photos and videos can normally be copied directly into the appropriate camera folder.

For example:

```text
Upper_Jatapu_Camera_Trap_Project/
└── MS01/
    └── LC1/
        ├── IMG_0001.JPG
        ├── IMG_0002.JPG
        └── IMG_0003.JPG
```

However, some cameras create multiple folders on the SD card.

If there are **two or more folders containing media on a single SD card, preserve those folders exactly as they appear on the SD card** instead of combining their contents.

For example:

```text
Upper_Jatapu_Camera_Trap_Project/
└── MS01/
    └── LC1/
        ├── 100MEDIA/
        │   ├── IMG_0001.JPG
        │   └── ...
        │
        └── 101MEDIA/
            ├── IMG_0001.JPG
            └── ...
```

:::important Do not combine duplicate camera folders

Many cameras name files using a sequence such as:

```text
IMG_0001.JPG
IMG_0002.JPG
...
IMG_9999.JPG
```

After the camera reaches the end of the numbering sequence, it may create another folder on the SD card and begin using the same filenames again.

If the contents of these folders are combined, files can be overwritten or automatically renamed to filenames such as:

```text
IMG_0001 (1).JPG
```

This creates serious problems later when determining whether images are duplicates or reconstructing where the original files came from.

When a camera creates multiple media folders, **copy those folders into the camera folder without changing their internal structure or filenames**.

:::

### What if a camera has two deployments in the same Monitoring Session?

The normal folder structure assumes that each camera has one deployment per Monitoring Session.

If a camera is retrieved and redeployed during the same Monitoring Session, create separate deployment folders so that media from the two deployments cannot be mixed.

For example:

```text
Upper_Jatapu_Camera_Trap_Project/
└── MS01/
    └── LC1/
        ├── 01/
        │   └── ...
        └── 02/
            └── ...
```

These correspond to:

```text
MS01-LC1-01
MS01-LC1-02
```

For most projects this additional level should not be necessary.

---

## 5. Choosing a tool for deployment data collection

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
PROJECT
  ↓
MONITORING SESSION
  ↓
DEPLOYMENT
 ↙       ↘
CAMERA   LOCATION
  ↓
MEDIA
```

For example:

```text
Upper Jatapu Camera Trap Project
        ↓
       MS01
        ↓
     MS01-LC1
      ↙    ↘
    LC1   Creek Crossing
      ↓
    Photos
```

The corresponding file structure can remain much simpler:

```text
Upper_Jatapu_Camera_Trap_Project/
└── MS01/
    └── LC1/
        └── ...
```

The filesystem is therefore organized around concepts that are easy for people to work with — **project, Monitoring Session, and camera** — while the metadata retains the more precise scientific concept of an individual **deployment**.

If these relationships are preserved consistently, camera trap imagery can continue to be understood, mapped, analyzed, and reused long after it was originally collected.

## 📚 Further reading

* [GBIF — Best Practices for Managing and Publishing Camera Trap Data](https://docs.gbif.org/camera-trap-guide/en/)
* [Camtrap DP — Camera Trap Data Package](https://camtrap-dp.tdwg.org/)
* [Camtrap DP — Deployment Fields](https://camtrap-dp.tdwg.org/data/#deployments)
* [CoMapeo Documentation](https://docs.comapeo.app/)
* [ODK — Introduction to Entities](https://docs.getodk.org/entities-intro/)
* [KoboToolbox — Dynamic Data Attachments](https://support.kobotoolbox.org/dynamic_data_attachment.html)