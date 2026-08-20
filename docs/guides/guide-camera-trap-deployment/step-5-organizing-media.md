---
sidebar_position: 5
tags: [itu-3, opu, tsp]
---

# Step 5: Organizing camera trap photos and videos

Camera trap media should be organized carefully as soon as SD cards are downloaded.

We recommend organizing all media within a single **project folder**, with folders for each **Monitoring Session**, and camera folders inside each Monitoring Session.

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
