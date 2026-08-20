---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Step 2: What information should be recorded?

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

## Camtrap DP deployment fields

The table below summarizes the current [Camtrap DP](https://camtrap-dp.tdwg.org/data/#deployments) fields for deployments, which are also recommended by [GBIF](https://docs.gbif.org/camera-trap-guide/en/) and this guide.

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

## :globe_with_meridians: Coordinates are especially important

Always record the coordinates of the actual camera location when possible.

Coordinates should preferably include:

- Latitude
- Longitude
- Coordinate accuracy/uncertainty
- The coordinate reference system, normally WGS84

Phones and GPS receivers can provide an estimate of location accuracy, and tools such as [CoMapeo](/reference/core-integrations/comapeo/index.md), [KoboToolbox](/reference/core-integrations/kobotoolbox/index.md), and [ODK](https://docs.getodk.org/collect-intro/) can capture this automatically.
