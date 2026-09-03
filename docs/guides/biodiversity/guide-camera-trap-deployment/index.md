---
sidebar_position: 0
tags: [itu-3, opu, tsp]
---

# 📸+🐾 Collecting Camera Trap Deployment Data

## Introduction

Putting a camera trap in the field is only one part of a deployment. A useful camera trap deployment also creates a reliable record of **which camera was placed where, during what period, and under what conditions**.

This metadata is what later allows images and videos to be connected back to a site, mapped correctly, compared across deployments, and analyzed over time.

This guide focuses primarily on **documenting camera trap deployments, maintenance, and retrievals**. It includes a practical field protocol for preparing equipment, deploying and servicing cameras, and processing SD cards after field visits. It does not prescribe a particular ecological study design or tell you exactly where or how high to place cameras, since those decisions depend on the goals and target species of the project.

:::important

**Deployment metadata is essential camera trap data**. It is also one of the easiest parts of a camera trap project to overlook or reconstruct only after the fact.

If information such as the deployment ID, location, coordinates, camera ID, and deployment dates is missing or inconsistent, the images and videos collected by the camera may no longer be reliably connected to **where, when, and how they were collected**. This can severely limit their value for mapping, analysis, comparison between sites, and long-term reuse.

Collect this information **at the time of deployment, maintenance, and retrieval**, rather than relying on memory or trying to reconstruct it later.

:::

## Guide overview

### [**1. Understand monitoring sessions, cameras, locations, and deployments**](step-1-concepts)

Distinguish four related concepts — Monitoring Session, location, camera, and deployment — and how to construct identifiers that stay compatible with GBIF and Camtrap DP.

### [**2. What information should be recorded?**](step-2-what-to-record)

The Camtrap DP deployment fields every project should collect, plus additional recommended fields such as Monitoring Session and SD Card ID, with special attention to coordinates.

### [**3. Choosing a tool for deployment data collection**](step-3-choosing-a-tool)

How to choose among CoMapeo, ODK, KoboToolbox, or a spreadsheet/paper form, depending on the team's existing workflow.

### [**4. Camera trap field protocol**](step-4-field-protocol)

Prepare equipment and the monitoring team, plan a Monitoring Session, standardize camera settings, and follow consistent procedures for deployment, maintenance, retrieval, and returning from the field.

### [**5. Organizing camera trap photos and videos**](step-5-organizing-media)

How to organize media by project, Monitoring Session, and camera, including SD cards with multiple media folders.

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

## What's next?

Once the camera trap media have been copied and organized, see the [Timelapse Camera Trap Annotation Guide](/guides/biodiversity/guide-timelapse-project/) for reviewing and annotating images and videos.

## 📚 Further reading

- [GBIF — Best Practices for Managing and Publishing Camera Trap Data](https://docs.gbif.org/camera-trap-guide/en/)
- [Camtrap DP — Camera Trap Data Package](https://camtrap-dp.tdwg.org/)
- [Camtrap DP — Deployment Fields](https://camtrap-dp.tdwg.org/data/#deployments)
- [CoMapeo Documentation](https://docs.comapeo.app/)
- [ODK — Introduction to Entities](https://docs.getodk.org/entities-intro/)
- [KoboToolbox — Dynamic Data Attachments](https://support.kobotoolbox.org/dynamic_data_attachment.html)
