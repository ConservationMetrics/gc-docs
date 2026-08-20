---
sidebar_position: 3
tags: [itu-3, opu, tsp]
---

# Step 3: Choosing a tool for deployment data collection

There is no single best application for every camera trap project.

In many cases, **the best tool is one that the field team already knows and uses**, provided that it can collect the necessary metadata reliably.

| Tool                          | Good choice when…                                                   | Advantages                                                                                                                                                                               | Limitations                                                                                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CoMapeo**                   | The team already uses CoMapeo for mapping or territorial monitoring | Designed for offline mapping; automatically captures coordinates, accuracy, and timestamps; can document routes to cameras; reduces the number of applications field teams need to learn | Deployment, maintenance, and retrieval are separate observations rather than relational records; limited field validation; linking repeated visits requires careful IDs and later processing |
| **ODK**         | You need a structured, longitudinal camera-management workflow      | Powerful form logic and validation; excellent GPS support; offline data collection; ODK Entities can represent cameras, locations, and active deployments across multiple forms          | More setup and training; longitudinal workflows require careful form design; synchronization ultimately relies on a central server                                                           |
| **KoboToolbox**               | The team already uses Kobo and needs configurable deployment forms  | Familiar form builder; offline KoboCollect and web forms; GPS capture; validation and skip logic; projects can be linked using dynamic data attachments                                  | Longitudinal linking is less robust when teams remain offline for extended periods because linked data must periodically synchronize with the Kobo server                                    |
| **Spreadsheet or paper form** | The project is small or no suitable field application is available  | Simple and flexible                                                                                                                                                                      | IDs, timestamps, coordinates, spelling, and controlled values are easier to enter inconsistently; repeated visits are harder to manage                                                       |

## CoMapeo

CoMapeo can be particularly appropriate when community monitors are **already using it for mapping and territorial monitoring**. Introducing a second application solely for camera traps may create unnecessary training overhead.

:::tip Existing Category Set
We provide a ready-to-use [CoMapeo Camera Trap Deployment category set](/reference/connected-applications/comapeo/camera-trap-deployment.md) that includes categories for:

- Camera Trap Deployment
- Camera Trap Maintenance
- Camera Trap Retrieval
- Camera Trap Path

The fields use Camtrap DP / GBIF naming conventions where possible.
:::

## ODK

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

## KoboToolbox

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
