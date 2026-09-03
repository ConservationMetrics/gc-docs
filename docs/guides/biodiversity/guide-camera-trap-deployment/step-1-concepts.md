---
sidebar_position: 1
tags: [itu-3, opu, tsp]
---

# Step 1: Understand monitoring sessions, cameras, locations, and deployments

Before collecting any data, it is important to distinguish between four related concepts:

| Concept                | Example                         | Meaning                                                                                |
| ---------------------- | ------------------------------- | -------------------------------------------------------------------------------------- |
| **Monitoring Session** | `MS01`                          | A group of related camera deployments carried out during approximately the same period |
| **Location / Site**    | `Upper Jatapu - Creek Crossing` | A physical place where a camera is deployed                                            |
| **Camera**             | `LC1`                           | A physical camera used in the project                                                  |
| **Deployment**         | `MS01-LC1`                      | One camera placed at one location for a specific period of time                                                              |


These identifiers should not be used interchangeably.

## Deployment

This guide uses **deployment** in the sense used by [GBIF](https://docs.gbif.org/camera-trap-guide/en/) and [Camtrap DP](https://camtrap-dp.tdwg.org/): one camera placed at one location between a deployment start and deployment end.

For example:

```text
deploymentID: MS01-LC1
cameraID: LC1
locationName: Creek Crossing
deploymentStart: 2026-05-14
deploymentEnd: 2026-06-18
```

## Monitoring Session

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

## Naming Monitoring Sessions

Monitoring Sessions should be named sequentially and prefixed with `MS`:

```text
MS01
MS02
MS03
MS04
```

The number identifies the monitoring session within the project.

## Constructing the Deployment ID

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

:::tip
As long as you keep track of Monitoring Sessions and Camera IDs, you do not actually need to record deployment IDs at all. As they can be constructed from the other identifiers.
:::