# Step 1: Organizing imagery

Organize your image dataset in a consistent folder structure before loading it into Timelapse. All images to be analyzed together should be placed under a common root folder, separated into subfolders as needed. Here's an example structure:

```
ProjectName/
├── Springfield_20240319/
│ ├── Camera1/
│ └── Camera2/
├── Springfield_20240425/
│ ├── Camera1/
```

Each retrieval event (e.g., Springfield_20240319) becomes its own folder under the project. Images from individual cameras go into their respective subfolders.

> **Important:** Once you begin analysis in Timelapse, do not rename, move, or reorganize any folders or files within the root folder. You *can* move or copy the root folder itself.