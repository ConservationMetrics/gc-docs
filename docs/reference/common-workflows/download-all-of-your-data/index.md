---
sidebar_position: 2
---

# Download all of your data

As part of our commitment to [data sovereignty](/overview/design-principles/#-data-sovereignty-and-control), Guardian Connector provides multiple ways for users to retrieve their project data at any time. This ensures you maintain full control over your data and can export it when needed.

## Why download all of your data?

There are several scenarios where you might want to download all of your data:

- **Project completion**: You're finished with Guardian Connector and want to take your project data with you
- **Backup**: You want to create a local backup of your data for safekeeping
- **Migration**: You're planning to move to a different platform or hosting provider

## What data can you download?

Guardian Connector stores different types of data, and the export options vary depending on your needs:

### 📊 **Project Data** (Primary Export Focus)
- **Tabular data**: Survey responses, spatial data, and other structured data stored in the PostgreSQL warehouse database
- **Files**: Images, documents, media files, and exported data files stored in persistent storage

### ⚙️ **Configuration Data** (Available via VM Backup only)
- Guardian Connector Explorer metadata and Superset dashboards
- Windmill script configurations and scheduled workflows
- CapRover platform configuration
- CoMapeo Cloud raw data

## How to download your data

Guardian Connector provides several methods for downloading your data, each suited to different scenarios:

### Method 1: Download via GC Scripts Hub (Recommended)

The most comprehensive approach uses scripts in the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) to export your project data:

#### Download Tabular Data
The `download_all_postgres_data` script exports all project-specific tabular data from the PostgreSQL warehouse database:

- Survey data from KoboToolbox, CoMapeo, and other connectors
- Manually uploaded tabular data
- All data is exported as CSV files and compressed into a single ZIP archive
- Once created, you can download the archive using [Filebrowser](/reference/gc-toolkit/filebrowser/)

#### Download Files (Azure)
The `download_all_files_azure` script provides secure access to file-based data stored in Azure Blob Storage:

- Generates a secure [SAS (Shared Access Signature) URL](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview) with time-limited access
- Provides `azcopy` commands for different destinations:
  - Local disk (download to your computer)
  - AWS S3 bucket (cloud-to-cloud transfer)
  - Google Cloud Storage (cloud-to-cloud transfer)
  - Another Azure Storage account (cloud-to-cloud transfer)

:::tip
**Advantages of using the `download_all_files_azure` script:**
- Fast transfers, especially between cloud services
- Flexible destination options
- No additional load on your Guardian Connector deployment
- Resumable transfers if interrupted
:::

### Method 2: Download via Filebrowser

For smaller datasets, you can use [Filebrowser](/reference/gc-toolkit/filebrowser/) directly:

1. Navigate to Filebrowser in your Guardian Connector instance
2. Select the files or folders you want to download
3. Click the "Download" button to generate a ZIP archive

:::note
This method works well for smaller datasets but may be slow for large collections of files (several gigabytes or more).
:::

### Method 3: Complete System Backup (Advanced)

For scenarios where you need configuration data or plan to migrate your entire Guardian Connector instance, you can request a complete VM backup from your hosting provider. This includes:

- All project data
- Configuration settings
- Platform metadata
- Service configurations

Contact your Guardian Connector administrator or hosting provider for assistance with this option.

## Important considerations

### ⚠️ Timing your exports
- Avoid running exports while new data is actively being posted to the warehouse to prevent inconsistent snapshots
- Schedule exports during periods of low activity
- Consider running exports after major data collection campaigns are complete
- Export scripts should be run from within an active Guardian Connector deployment

### 💾 Storage and access
- Large exports may consume significant disk space
- Exported files are stored in persistent storage and may not be accessible after Guardian Connector shutdown

## Need help?

If you encounter issues or need assistance with data exports:

- Check the [GC Scripts Hub documentation](/reference/gc-toolkit/gc-scripts-hub/) for detailed script information
- Contact your Guardian Connector administrator

---

🌀 *This feature is part of Guardian Connector's commitment to **data sovereignty and user control**. Your data belongs to you, and we're committed to making it easy to access and export whenever you need it.*

