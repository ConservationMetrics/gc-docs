# Step 3: Set Up Folder-Level Metadata

:::note

Please see the [Timelapse Metadata Guide](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseMetadataGuide.pdf) for the most recent and accurate information

:::

Timelapse supports folder-level metadata, which allows you to associate project, station, or deployment information with entire folders of images. This helps avoid repetitive data entry and ensures consistency across related image files.

1. **Structure your folders** to reflect your metadata hierarchy. See [Step 1: Organizing Imagery](step-1-organizing-imagery.md)

2. **Define folder-level metadata fields** in the **Template Editor**. You can create multiple levels (such as Project, Station, and Deployment) and assign specific fields to each. For example:
   - _Project_: Project name, lead researcher
   - _Station_: GPS coordinates, habitat type
   - _Deployment_: camera model, start date, field crew

3. **Open your image set** in Timelapse and navigate to **Folder Data** tab. You'll see tabs for each level (e.g., Project, Station, Deployment) based on the folder your image is in.

4. **Click “Edit data for this folder”** to fill in metadata. Each level's tab shows only the fields relevant to that folder. Fields may include dropdowns, numbers, free-text areas, or multi-select options.

5. **Metadata values automatically apply** to all images in that folder and are visible as you review. If you move between folders, the metadata tabs will update accordingly.

6. **Export folder metadata** using **File → Export all data to CSV**. Timelapse generates a CSV for each folder level (e.g., `Project.csv`, `Station.csv`, `Deployment.csv`), linking them via folder paths. This makes it easy to join with image-level data later.

Folder-level metadata is optional, but it enables richer, more structured datasets, especially when following standards like the [GBIF recommendations for standardized camera trap data](https://docs.gbif.org/camera-trap-guide/en/) (see in particular section 3.4.1), the [Alberta Metadata Standard](https://abmi.ca/publication/620.html), or [Camtrap DP](https://camtrap-dp.tdwg.org/metadata/).

:::tip
Before enabling folder-level metadata, think through your folder hierarchy and naming conventions. Changes later can break links between data and folders, so it’s best to finalize your structure first.
:::
