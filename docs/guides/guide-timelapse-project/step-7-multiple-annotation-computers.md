# Enabling >1 computer for Labeling

Large Timelapse projects often involve multiple site folders, each containing its own copy (“child set”) of the project database (`.ddb`). Timelapse allows you to check out subsets of a project, annotate them independently (on a different computer or user), and then merge the changes back into the primary database. This workflow helps teams scale up annotation across many sites or observers.

This section describes how to work with an **existing master `.ddb` file**, how to create and manage child sets, and how to merge them safely back into the main project.

---

# Quick Start: Merging Timelapse Databases

If you are working on a large Timelapse project with multiple site folders, use the check-out / check-in workflow to keep all annotations synchronized with a single master `.ddb` file.

### Quick Workflow

1. **Open the master `.ddb`** in the project root.  
2. **Check out** a child set:  
   - Go to *File → Merge Datasets  → Check out (copy) a sub-folder database from the master database...*.  
   - Select a site or subfolder to create a child `.ddb`.  
3. **Annotators work only in the child `.ddb`** inside that subfolder.  
4. When annotation is complete, the child `.ddb` is returned to the project manager.  
5. **Check in the child `.ddb`**:  
   - Open the master `.ddb`.  
   - Go to *File → Merge Datasets  → Check in (merge) a sub-folder’s database into the master database...*.  
   - Select the child `.ddb` to merge changes back into the master.

### Key Rules

- **Do not annotate in the master `.ddb`** once child sets have been created.  
- **Do not change field definitions** in child sets.  
- Always **check out from the master** and **check in to the master**.  
- Use **consistent folder naming** for sites/stations to keep merges clean.

This workflow scales cleanly across many annotators and ensures the master database remains the authoritative source for all project metadata.


---
    
## Overview
    
Timelapse supports a *check-out / check-in* system designed for large datasets spread across multiple subfolders. The general workflow is:
    
1. **Start from the master `.ddb`** located in the root of the project.  
2. **Check out** child sets into site-level folders (or any subfolder structure you use).  
3. Annotators open and work only within the checked-out child `.ddb` files.  
4. After annotation is complete, the child `.ddb` files are **checked back in**, merging changes into the master.

This ensures that all metadata, annotations, and derived fields are consolidated into a single authoritative database.

---
    
## Preparing the Master Database
    
Before creating child sets:
    
1. Open the **master** project `.ddb` in Timelapse.
2. Confirm that:
    - The image root folder is correct.
    - Templates and field definitions are up-to-date.
    - The master `.ddb` opens without errors and displays all images as expected.

If needed, run **File → Expose Missing Images** or **Reindex Folders** to confirm the project structure is healthy.

---
    
## Checking Out Child Sets
    
### When to Create Child Sets
    
You should create child sets when:
    
- Annotators will work on different deployment or site folders independently.
- You want to avoid multiple users modifying the master `.ddb` simultaneously.
- The project contains thousands of images and needs to be split for performance.

### How to Check Out a Child Set

1. Open the **master `.ddb`**.
2. Go to **File → Merge Datasets  → Check out (copy) a sub-folder database from the master database...**.
3. In the folder tree, select the **subfolder** you want to create a child set for  
(e.g., individual camera stations or Deployments).
4. Timelapse creates:
    - A **child `.ddb` file** inside the selected folder.
    - A copy of the field definitions and metadata for only the images in that subfolder.

Each child set contains everything needed for annotators to work independently in Timelapse.

### What Annotators Do

Annotators should:
    
- Open the **child `.ddb`** directly from the subfolder.
- Annotate normally.
- Avoid moving or renaming image files during annotation.
- Avoid changing field definitions (these should be controlled from the master).

When finished, annotators return the `.ddb` to the project manager for check-in.

---
    
## Checking In Child Sets (Merging Back to Master)
    
When all annotations for a child set are complete:
    
1. Move or copy the **child `.ddb`** back to its original subfolder on the computer that manages the master `.ddb` (if it isn’t already there).
2. Open the **master `.ddb`**.
3. Go to **File → Merge Datasets  → Check in (merge) a sub-folder’s database into the master database...**.
4. Select the child `.ddb` to merge.

Timelapse will:
    
- Compare the child set’s annotations with the master.
- Merge new or updated metadata and annotations.
- Preserve existing data in the master where necessary.
- Flag conflicts if a record was edited in both the master and the child set.

### Typical Conflict Handling

Conflicts are rare if only annotators modify the child sets. When conflicts occur, Timelapse presents a dialog allowing you to choose which version to keep.

After check-in finishes, the master `.ddb` contains all updated annotations for that subfolder.

---
    
## Best Practices for Large Projects
    
- **Never annotate directly in the master database** once *child sets have been created*.  
- **Use consistent folder names** that already exist in the project folder structure for site or station-level child sets.  
- Always **check out** using the master and **check in** to the same master.  
- Do not alter field definitions inside child databases; manage fields only from the master.  
- After all child sets are checked in, **back up the master `.ddb`** and consider exporting CSVs for downstream processing.

---
    
## Summary
    
Timelapse’s check-out / check-in system provides a robust workflow for large camera-trap projects. By starting with a single master `.ddb`, distributing child sets across subfolders, and merging annotations back in, teams can annotate large datasets efficiently while maintaining a single unified project database.
