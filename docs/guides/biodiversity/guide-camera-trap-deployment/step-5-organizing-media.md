---
sidebar_position: 4
tags: [itu-3, opu, tsp]
---

# Step 5: Organizing camera trap photos and videos

Camera trap media should be organized carefully as soon as SD cards are downloaded. Use one project folder, the same folder levels for every retrieval, and the camera id already recorded in the deployment data.

The folder path is how the files are later matched to the deployment spreadsheet. `MS01/LC1` is monitoring session `MS01` and camera `LC1`, which together are deployment `MS01-LC1`.

:::important Keep the same folders for every retrieval

Choose the folder levels before the first SD card is copied, and use those levels on every card after that. Add a new Monitoring Session folder for the next retrieval. Leave folders that already contain media as they are.

Renaming or rearranging folders after copying breaks the connection between the files and the deployment records. If the media will be annotated in Timelapse, that connection is also stored in the Timelapse database. See [Step 1: Organizing Media](/guides/biodiversity/guide-timelapse-project/step-1-organizing-imagery).

:::

Inside the project folder, add a folder for each **Monitoring Session**, and a camera folder inside each Monitoring Session.

Take this project folder as an example:

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

## Example folder structure

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

- `Upper_Jatapu_Camera_Trap_Project` is the project.
- `MS01`, `MS02`, and `MS03` are Monitoring Sessions.
- `LC1`, `LC2`, `TC5`, and `TC8` are cameras.
- `MS01-LC1`, `MS01-LC2`, `MS02-LC1`, `MS02-TC5`, and `MS03-TC8` are deployments.

The same camera can therefore appear in several Monitoring Sessions without creating ambiguity:

```text
MS01/LC1/ → deploymentID MS01-LC1
MS02/LC1/ → deploymentID MS02-LC1
```

## Copying files from SD cards

When an SD card has a single folder of media, copy the files directly into the camera folder.

```text
Upper_Jatapu_Camera_Trap_Project/
└── MS01/
    └── LC1/
        ├── IMG_0001.JPG
        ├── IMG_0002.JPG
        └── IMG_0003.JPG
```

:::important SD cards with more than 10,000 images

Many cameras name files with a four-digit counter, from `IMG_0001.JPG` through `IMG_9999.JPG`. After 9,999 files, the camera creates another folder on the card and starts again at `IMG_0001.JPG`. Folder names look like `100MEDIA` and `101MEDIA`, or `100_BTCF` and `101_BTCF`, depending on the camera.

When the card has **two or more folders of media**, copy those folders into the camera folder exactly as they appear on the card.

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

Do **not** combine those folders into one. The filenames repeat, so merging them can:

- **Overwrite files**, and those images are gone, or
- Cause the operating system to rename files, for example `IMG_0001 (1).JPG`, so later it is unclear which files are duplicates and which are distinct images.

Copy the folders without changing their names or the filenames inside them.

:::

## What if a camera has two deployments in the same Monitoring Session?

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

## If the project needs another folder level {#extra-folder-level}

The recommended path is project, then Monitoring Session, then camera. That is enough when each camera id is unique.

If one project covers several areas, add one region folder under the project and use it for every Monitoring Session:

```text
Upper_Jatapu_Camera_Trap_Project/
└── Upper_River/
    └── MS01/
        └── LC1/
```

If the same camera id is used at more than one location, add a location folder under the Monitoring Session and use it for every camera:

```text
Upper_Jatapu_Camera_Trap_Project/
└── MS01/
    └── Creek_Crossing/
        └── LC1/
```

Each extra folder is another column when the path is matched to the deployment spreadsheet. Add a level only when the camera id alone cannot tell two deployments apart, and use that level on every card. A camera retrieved and redeployed during the same Monitoring Session is the other case, described [above](#what-if-a-camera-has-two-deployments-in-the-same-monitoring-session).
