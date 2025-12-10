# Deleting Files and Data

Timelapse provides several tools for removing images, records, and associated metadata from a project. Deletions are permanent, so these tools should be used with care—especially when working in a shared or multi-annotator project.

This section summarizes the recommended workflow for safely deleting files and data within an existing Timelapse project.

---

# Quick Start: Deleting Files and Data

Use Timelapse’s deletion tools to remove images, records, or empty folders while keeping the project database synchronized. Deletions are permanent, so always confirm before proceeding.

### Quick Workflow

1. **Delete files + records**  
   - Select images → *Edit → Delete → All selected image or video files marked for deletion and their data*  
   - Removes the image files from disk and deletes their metadata.

1. **Delete files**  
   - Select images → *Edit → Delete → All selected image or video files marked for deletion*  
   - Removes the image files from disk (or sends them to the "DeletedFiles" folder depending on your Preferences).

2. **Delete records only (keep files)**  
   - Select records → *Edit → Delete → Only the data associated with all selected image or video files marked for deletion…*  
   - Removes metadata from the `.ddb` but leaves image files untouched.

3. **Check for missing files first**  
   - Run *Edit → Try to find this (and anyother) missing files...* to ensure deletions are intentional.

### Key Rules

- Always **back up the master `.ddb`** before bulk deletions.  
- Perform deletions only in the **master database** (not child sets).  
- Use “Delete Records Only” if you are uncertain—files can be re-imported later.  
- Avoid deleting files that may be needed for QC, machine-learning workflows, or future annotation.

This  workflow helps maintain a clean, synchronized project while minimizing accidental data loss.

---

## Overview

There are many reasons that files may need to be deleted from a project:

- Duplicates Images are discovered in the data set.
- Images from before or after a deployment are made due to a camera recording after it is removed from a site.
- Pictures are of a sensitive nature: explicit, record illegal activity, show people without their consent.
- Images are empty and your organization/collaborators have no plans to train detection models in the future. 

We generally recommend to save all images collected by the cameras, however, each project will need to decide on their own policy and workflow. 

Timelapse allows you to delete:

- Image files
- Associated database records
- Empty folders that contain no remaining images
- Records only (while leaving image files untouched)

In all cases, Timelapse ensures that the project database stays synchronized with the underlying image folder structure.

To delete files, you must first mark the files you wish to delete with the "Delete?" flag.  Only images that have been marked with this flag AND are in your current selection will be deleted.  

The behavior of Timelapse delete functionality can be configured in the **Options → Preferences → How to deleted files are managed**.  By default, image files that are "deleted" and not actually removed from disk, but instead they are moved into a the root folder into a new subfolder called "DeletedFiles".  This way they are removed from the project but recoverable.

:::tip
To be able to use the delete functionality in Timelapse for >1 file at a time, you must have the "Delete?" flag field marked "Visible" in your Template.  
:::
---

## Deleting Image Files and Records

Use this option when you want to remove **both the files and the database entries**.

1. Select the image(s) you want to delete in the Filmstrip or Grid View.
2. Go to **Edit → Delete → All selected image or video files marked for deletion and their data**.
3. Review the confirmation dialog. Timelapse will list:
   - The number of files to be deleted
   - The number of database records that will be removed
4. Confirm to permanently delete the selected files from disk (or put them in the DeletedFiles folder depending on your settings) and remove their metadata from the `.ddb`.

This action cannot be undone. Only use it when you are certain the images should no longer be part of the project.

---

## Deleting Records Only (Keeping Files)

Use this option when the **image files should remain**, but their Timelapse metadata needs to be removed (e.g., when re-importing or reprocessing folders).

1. Select the records to remove.
2. Go to **Edit → Delete → Only the data associated with all selected image or video files marked for deletion…**.
3. Confirm the action in the dialog.

Timelapse will remove the metadata rows from the `.ddb`, but the image files remain in the folder.

This is useful when:
- A folder was annotated incorrectly and you want to start over.
- You are re-running import or template steps.
- You are cleaning up duplicate database entries.

---

## Handling Missing Files Before Deletion

Before deleting any records, validate that missing or moved files are intentional.

Use:

- **File → Expose Missing Files**  
  to highlight database entries that no longer match files on disk.

This helps ensure you are not deleting records accidentally created by path mismatches or folder restructuring.

---

## Best Practices

- **Back up the `.ddb` file** before doing large deletions.  
- For multi-user workflows, perform deletions only in the **master `.ddb`**, not in child sets.  
- Avoid deleting files if they may be needed for re-annotation, machine-learning extraction, or downstream QC.  
- Use “Delete Records Only” when you are unsure—files can be re-imported but deleted images cannot be restored.

---

## Summary

Timelapse provides flexible tools for permanently deleting files and records or cleaning up only the database entries. Use file deletion when the images truly do not belong in the project, and use record-only deletion when you need to reset or reorganize database entries while preserving the underlying files.
