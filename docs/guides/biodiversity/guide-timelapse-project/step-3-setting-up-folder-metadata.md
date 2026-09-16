---
sidebar_position: 3
tags: [itu-3, opu, tsp]
---
# Step 3: Setting Up Folder-Level Metadata

:::note

Please see the [Timelapse Metadata Guide](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseMetadataGuide.pdf) for the most recent and accurate information

:::

Timelapse supports folder-level metadata, which allows you to associate project, station, or deployment information with entire folders of images. This helps avoid repetitive data entry and ensures consistency across related image files.

![Folder-level metadata](/img/guides/guide-timelapse-project/folder-level-metadata.jpg)
_Example of Timelapse project folder-level metadata, using the practice image set._

:::tip

Before enabling folder-level metadata, think through your folder hierarchy and naming conventions. Changes later can break links between data and folders, so it’s *important* to finalize your structure first.

:::

:::important Folder-level metadata is optional

Adding folder-level metadata into Timelapse is completely optional. If you already have a more sophisticated method for collecting station and deployment metadata and that information is already digitized, there is no need to add these types of metadata to the Timelapse itself.

:::

## How to set up Folder metadata

1. **Structure your folders** to reflect your metadata hierarchy. See [Step 1: Organizing Imagery](step-1-organizing-imagery.md)

2. **Start the Timelapse Template Editor** software. (This is the `TimelapseTemplateEditor.exe` file in your Timelapse directory.)

3. **Define folder-level metadata fields** in the Template Editor. You can create multiple levels (such as Project, Station, and Deployment) and assign specific fields to each. For example:
   - _Project_: Project name, lead researcher
   - _Station_: GPS coordinates, habitat type
   - _Deployment_: camera model, start date, field crew

4. **Open your image set** in the Timelapse software and navigate to **Folder Data** tab. You'll see tabs for each level (e.g., Project, Station, Deployment) based on the folder your image is in.

5. **Click “Edit data for this folder”** to fill in metadata. Each level's tab shows only the fields relevant to that folder. Fields may include dropdowns, numbers, free-text areas, or multi-select options.

6. **Metadata values automatically apply** to all images in that folder and are visible as you review. If you move between folders, the metadata tabs will update accordingly.

7. **Export folder metadata** using **File → Export all data to CSV**. Timelapse generates a CSV for each folder level (e.g., `Project.csv`, `Station.csv`, `Deployment.csv`), linking them via folder paths. This makes it easy to join with image-level data later.

:::warning
Timelapse does not have the ability to set custom field validations beyond what is made available in the user interface. 

For example, for Latitude and Longitude fields, these can be set up as Number fields of Decimal type to allow for positive and negative decimal coordinates. But it is **not** possible to set limits of 180 to -180 or 90 to -90; so basically _any_ decimal number can be entered. 

Hence, it is important to be very careful when doing data entry into Timelapse for these kinds of fields.
:::

## How to collect folder-level metadata to enter into Timelapse

Folder-level metadata is optional, but it enables richer, more structured datasets, especially when following standards like the [GBIF recommendations for standardized camera trap data](https://docs.gbif.org/camera-trap-guide/en/) (see in particular section 3.4.1), the [Alberta Metadata Standard](https://abmi.ca/publication/620.html) and the [Camtrap DP](https://camtrap-dp.tdwg.org/metadata/).

:point_right: Please refer to [Step 2: What information should be recorded?](/guides/biodiversity/guide-camera-trap-deployment/step-2-what-to-record) and [Step 3: Choosing a Tool](/guides/biodiversity/guide-camera-trap-deployment/step-3-choosing-a-tool) in the camera trap deployment guide for more information on how to retrieve this information.
