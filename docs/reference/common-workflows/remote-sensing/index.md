---
sidebar_position: 5
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# Remote Sensing Change Detection

This document describes how to set up automated change detection workflows using external data sources. The process enables real-time monitoring and notifications for territorial changes, combining external satellite data with Guardian Connector's visualization and alert systems.

The workflow involves the following tools:

- **An external data source** – providing change detection data
- **Windmill** – Handles data ingestion, processing, and automation of the change detection workflow
- **[Guardian Connector Explorer](/reference/gc-toolkit/gc-explorer/)** – The visualization tool for displaying change detection data and alerts
- **[CoMapeo](/reference/connected-applications/comapeo/)** – Where change detection data layers become visible for territory monitoring
- **WhatsApp** – For sending notifications when changes are detected

## What You'll Accomplish

By the end of this workflow, you'll have:

- Automated alerts when deforestation or other changes are detected in your monitored areas
- Change detection data visualized in Guardian Connector Explorer for analysis and reporting
- Change detection data layers visible within CoMapeo for territory monitoring
- WhatsApp notifications sent to designated recipients when changes are detected

## 1. Data Ingestion

Diferent ingestion methods will have processes specific to the data source being used.



This section explains how alerts are integrated, using Global Forest Watch deforestation alerts as an example. The process involves pulling external change detection data that will be processed and made available for visualization and alerts.

You will have to provide your Windmill Admin with the necessary information to set up the data ingestion.

In the specific case of GFW deforestation alerts, the key information includes:
- type of alert: one of these options:
  - `gfw_integrated_alerts` for [Integrated Deforestation Alerts](https://data.globalforestwatch.org/datasets/gfw::integrated-deforestation-alerts/about)
  - `gfw_radd_alerts` for [Deforestation alerts](https://data.globalforestwatch.org/datasets/gfw::deforestation-alerts-radd/about)
  - `nasa_viirs_fire_alerts` for [VIIRS Active fires](https://data.globalforestwatch.org/documents/gfw::viirs-active-fires/about)
  - `umd_glad_landsat_alerts` and `umd_glad_sentinel2_alerts` for [GLAD forest loss alerts](https://glad.umd.edu/dataset/glad-forest-alerts)
- bounding_box: A bounding box defining the geographical area of interest for fetching alerts. This should be a list of coordinates forming a closed polygon, for example: `[[[-55.2308,5.6945],[-55.2158,5.6945],[-55.2158,5.7055],[-55.2308,5.7055],[-55.2308,5.6945]]]`.
- max_months_lookback: Number of months to look back when fetching alerts. For example, if set to 6, the script will fetch alerts from the last 6 months. This determines both the API query date range and the metadata records created.
- db_table_name
:::info

### For Windmill Admins only

If you are a **Windmill [Admin](/reference/gc-toolkit/gc-scripts-hub/user-roles/#-admin)**, you will use this data to to set up the Windmill ingestion flow.

This is done by creating a **Resource** within Windmill that stores the information needed to access to your KoboToolbox account.

In order to set it up, you need to:
1. Access your Windmill instance, as described below in [Data Processing: Windmill](#2-data-processing-windmill).
2. Go to the **Resources** section in the left tab menu.
3. Create a new Resource with the `+ New Resource` button in the top right corner of the page and add the following information in the form:
   

   | Parameter | Value |
   |------------|-------------|
   | **Resource type**|  KoboToolbox |
   | **Path** | `f/connectors/kobotoolbox` |
   | **Description** | Optional detailed explanation |
   | **server_url** | `https://kf.kobotoolbox.org` or `https://kc.kobotoolbox.org` |
   | **api_key** | The obtained API Key|

:::

### How Windmill Pulls GFW Data

[User will provide specific content on how Windmill pulls GFW Deforestation alerts data, following the pattern of reference documents]

The key aspects include:
- Setting up the connection to GFW data sources
- Configuring data extraction parameters
- Handling authentication and access to GFW APIs
- Scheduling regular data updates

## 2. Data Processing: Windmill Setup (OPU)

For Organizational Power Users (OPU), this section provides detailed instructions for setting up the automated change detection workflow in Windmill. This involves configuring resources, creating schedules, and setting up notifications.

Access your Windmill instance at:

**https://windmill.{alias}.guardianconnector.net/**

In Windmill, **Schedules** are automated tasks that run at specific intervals — for example, regularly fetching new change detection data from GFW, processing it, and sending notifications.

### Create Required Resources

Before creating the change detection workflow, you'll need to set up resources for:

#### GFW Data Source Resource
Create a resource for accessing GFW deforestation alerts:

| Parameter | Description |
|------------|-------------|
| **Resource type** | GFW (Global Forest Watch) |
| **Path** | `f/connectors/gfw` |
| **Description** | Access to Global Forest Watch deforestation alerts |
| **API Configuration** | [User will provide specific GFW API configuration details] |

#### WhatsApp Notification Resource
Create a resource for sending WhatsApp notifications:

| Parameter | Description |
|------------|-------------|
| **Resource type** | WhatsApp |
| **Path** | `f/notifications/whatsapp` |
| **Description** | WhatsApp notification service |
| **API Configuration** | [User will provide specific WhatsApp API configuration details] |

#### CoMapeo Integration Resource
Create a resource for pushing data layers to CoMapeo:

| Parameter | Description |
|------------|-------------|
| **Resource type** | CoMapeo Server |
| **Path** | `f/connectors/comapeo` |
| **Description** | CoMapeo server for data layer integration |
| **Server URL** | https://comapeo.{alias}.guardianconnector.net/ |
| **Bearer Token** | [Available in CoMapeo Archive Server settings] |

### Create the Change Detection Schedule

Configure a new schedule that combines all components of the change detection workflow:

| Parameter | Description |
|------------|-------------|
| **Summary** | `Change Detection: GFW Alerts Processing` |
| **Path** | `/f/remote-sensing/change-detection` |
| **Description** | Automated workflow for processing GFW deforestation alerts |
| **Schedule** | How often to check for new alerts (e.g., daily, weekly) |
| **Runnable** | Choose **Script**, then select the change detection script |
| **gfw_source** | The GFW resource you created |
| **whatsapp_notifications** | The WhatsApp notification resource |
| **comapeo_integration** | The CoMapeo integration resource |
| **database_table** | Name for the database table to store processed alerts |

### Test Your Workflow

1. Open the **Schedules** page and locate your new change detection schedule
2. You’ll see:
   - A **chart of previous runs** (green = success, red = error)
   - A **list of runs** with detailed logs
   - A **More options** menu with a `Run now` button
3. Click **Run now** to manually test the workflow
   - A notification will appear confirming that the run was scheduled
   - Click **Go to run page** to view progress and logs

Once the scheduled script runs successfully, your change detection data will be available in the Guardian Connector PostgreSQL database, WhatsApp notifications will be sent, and data layers will be available in CoMapeo.

## 3. Visualization: GC Explorer Setup (OPU)

After your change detection data is processed and stored, configure Guardian Connector Explorer to visualize the alerts and changes.

Access your Explorer instance at:

**https://explorer.{alias}.guardianconnector.net/**

### Configure Change Detection Views

1. **Log in to Explorer**
   Use your admin credentials to sign in.

2. **Access Configuration**
   Once logged in, you’ll find a **Configuration** button at the top of the Explorer window to begin setting up your views.

3. **Create Change Detection Views**
   - Click the **+ Add new table** button and choose your change detection table from the list
   - Locate your newly available table and configure it by clicking the menu button to the right

   Key configurations for change detection data:

   | Parameter | Description |
   | :--- | :--- |
   | **Views** | Map, Gallery, Alerts Dashboard |
   | **Mapbox Style** | You’ll need a Mapbox account to access a Map Style. Get the Style URL in the format `mapbox://styles/{username}/{styleId}`. |
   | **Mapbox Access Token** | Available from your Mapbox account page under the **Tokens** section. |
   | **Zoom level** | The zoom level for the map view (0-22). |
   | **Center latitude** | The latitude of the center point for the map view. |
   | **Center longitude** | The longitude of the center point for the map view. |
   | **Base path for media** | URL used to share images and files related to change detection alerts. |
   | **Alert thresholds** | Configure sensitivity for different types of changes (optional) |

   :::info

   To determine map parameters like zoom level and center coordinates, you can use [Mapbox’s Location Helper](https://labs.mapbox.com/location-helper/) tool.

   :::

4. **Publish the Views**
   Once saved, your change detection maps, galleries, and alert dashboards will be visible to users who access the Explorer instance.

## 4. End Product Visualization for ITU-1

This section describes what New Indigenous Tech Users (ITU-1) will see and experience when using the change detection system. It focuses on the benefits and features available for territory monitoring and awareness.

### What You’ll See in Guardian Connector Explorer

When you access Guardian Connector Explorer, you’ll find powerful visualization tools for monitoring changes in your territory:

#### Interactive Change Detection Maps
- **Real-time visualization**: See deforestation alerts and other changes displayed on an interactive map of your territory
- **Layered information**: View change detection data alongside your existing project data and observations
- **Geographic context**: Understand where changes are occurring relative to your community lands and monitoring areas
- **Historical tracking**: View patterns of change over time to identify trends and concerning areas

#### Alert Dashboard
- **Notification summary**: See a dashboard showing recent alerts and their status
- **Priority alerts**: Quickly identify high-priority changes that require immediate attention
- **Response tracking**: Monitor which alerts have been acknowledged or responded to
- **Detailed information**: Click on any alert to see detailed information about the detected change

#### Gallery View
- **Visual documentation**: Browse change detection alerts in a gallery format with images and details
- **Filter options**: Sort and filter alerts by date, type, severity, or location
- **Contextual information**: Each alert includes relevant details like coordinates, date detected, and type of change

### What You’ll See in CoMapeo

Within the CoMapeo application, you’ll have access to change detection data as additional layers for your territory monitoring:

#### Integrated Data Layers
- **Change alerts overlay**: See deforestation alerts and other changes displayed as additional layers in your CoMapeo maps
- **Territory context**: View change detection data alongside your existing CoMapeo observations, tracks, and points
- **Real-time updates**: Changes detected by the automated system appear automatically in your CoMapeo project
- **Field verification**: Use change detection alerts to guide your field verification activities

#### Enhanced Monitoring Capabilities
- **Proactive awareness**: Receive notifications about changes happening in your territory even when you’re not actively monitoring
- **Evidence gathering**: Use detected changes as starting points for documentation and response activities
- **Collaborative response**: Share change detection information with other community members and allies
- **Historical analysis**: Track patterns and trends in changes over time to inform long-term stewardship strategies

### How This Benefits Your Work

The change detection system provides several key benefits for Indigenous territorial monitoring:

#### Enhanced Situational Awareness
- **Early warning**: Receive alerts about potential threats to your territory before they become severe
- **Comprehensive coverage**: Monitor large areas that might be difficult to patrol regularly
- **24/7 monitoring**: The system operates continuously, providing constant vigilance

#### Improved Response Capabilities
- **Faster detection**: Changes are identified quickly, allowing for rapid response
- **Evidence-based decisions**: Make informed decisions about where to focus monitoring and response efforts
- **Documentation support**: Use change detection data to support documentation and advocacy efforts

#### Strengthened Sovereignty
- **Data ownership**: All change detection data is stored within your Guardian Connector instance, maintaining data sovereignty
- **Community control**: Control who has access to monitoring information and how it’s used
- **Integration with existing tools**: Change detection works seamlessly with your existing CoMapeo and Guardian Connector workflows

---

✅ **You’ve completed the full change detection workflow!**

Your automated change detection system now processes GFW deforestation alerts, sends WhatsApp notifications, displays data in Guardian Connector Explorer, and makes change detection layers available in CoMapeo. The system provides continuous monitoring capabilities while respecting data sovereignty and community control.