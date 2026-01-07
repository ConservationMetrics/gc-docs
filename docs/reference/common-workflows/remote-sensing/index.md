---
sidebar_position: 5
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# Use change detection alerts in Guardian Connector

This document describes how the automated change detection workflows using external data sources works. The process enables real-time monitoring and notifications for territorial changes, combining external satellite data with Guardian Connector's visualization and alert systems.

The workflow involves the following parts:

- **An external data source** – providing change detection data
- **Windmill** – Handles data ingestion, processing, and automation of the change detection workflow
- **[Guardian Connector Explorer](/reference/gc-toolkit/gc-explorer/)** – The visualization tool for displaying change detection data and alerts
- **[CoMapeo](/reference/connected-applications/comapeo/)** – Where change detection data layers become visible for territory monitoring
- **WhatsApp** – For sending notifications when changes are detected

This process involves the following main steps:

## 1. Data Ingestion

Diferent ingestion methods will have processes specific to the data source being used.

These data sources will typically provide data regularly, which will be fetched and processed automatically.

For example, one possible integration is to fetch [Global Forest Watch deforestation alerts](https://www.globalforestwatch.org/blog/data-and-tools/drivers-deforestation-alerts/) into Guardian Connector. The process involves pulling external change detection data that will be processed and made available for visualization and alerts.

You will have to provide your Windmill Admin with the necessary information to set up the data ingestion.

In the case you want WhatsApp notifications on new alerts or to be able to see the alerts in your CoMapeo project, you will also need to let your Windmill Admin know.

Once the scheduled script runs successfully, your change detection data will be available in the Guardian Connector PostgreSQL database, WhatsApp notifications will be sent, and data layers will be available in CoMapeo.

## 3. Visualization: GC Explorer Setup

After your change detection data is processed and stored, configure Guardian Connector Explorer to visualize the alerts and changes.

Access your Explorer instance at: <ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>

### Configure Change Detection Views

1. **Log in to Explorer**
   Use your credentials to sign in.

2. **Access Configuration**
   Once logged in, you’ll find a **Configuration** button at the top of the Explorer window to begin setting up your views.

3. **Create Change Detection Views**
   - Click the **Manage datasets**, and then  **+ Add new dataset view** button and choose your change detection table from the list
   - Locate your newly available table and configure it by clicking the menu button to the right

   Key configurations for change detection data:

   | Parameter | Description |
   | :--- | :--- |
   | **Views** | Alerts Dashboard |
   | **Mapbox Style** | You’ll need a Mapbox account to access a Map Style. Get the Style URL from your new style in the Style Editor in the format `mapbox://styles/{username}/{styleId}`, that you can obtain in the Share screen, under Style URL. |
   | **Mapbox Access Token** | Available from your Mapbox account page under the **Tokens** section. |
   | **Zoom level** | The zoom level for the map view (0-22). |
   | **Center latitude** | The latitude of the center point for the map view. |
   | **Center longitude** | The longitude of the center point for the map view. |

:::tip
Zoom and center can be obtained by going to https://geojson.io, navigating to the view with the zoom level you desire, and obtaining it from the URL. For example, in this URL "https://geojson.io/#map=8.2/5.738/-60.213" the first number, 8.2, is the zoom level, 5.738 is latitude and -60.213 is longitude. 

You can also use https://demos.mapbox.com/location-helper/.
:::

4. **Publish the Views**
   Once saved, your change detection alert dashboard will be visible to users who access the Explorer instance.

### What You’ll See in Guardian Connector Explorer

When you access Guardian Connector Explorer, you’ll find powerful visualization tools for monitoring changes in your territory:

#### Interactive Change Detection Maps

- **Real-time visualization**: See deforestation alerts and other changes displayed on an interactive map of your territory
- **Layered information**: View change detection data alongside the data you might want, configurable in your Mapbox style.
- **Geographic context**: Understand where changes are occurring relative to your community lands and monitoring areas
- **Historical tracking**: View patterns of change over time to identify trends and concerning areas

#### Alert Dashboard

- **Notification summary**: See a dashboard showing recent alerts and their status
- **Priority alerts**: Quickly identify high-priority changes that require immediate attention
- **Detailed information**: Click on any alert to see detailed information about the detected change, including in some cases, before and after images

### What You’ll See in WhatsApp

If you opted for WhatsApp notifications, you’ll receive messages whenever new changes are detected in your territory. These messages will include:

- **Alert details**: Information about the amount of alerts detected
- **Direct links**: Links to view the alert in Guardian Connector Explorer for further investigation

### What You’ll See in CoMapeo

If you opted to integrate change detection data with your CoMapeo project, you’ll have access to change detection data as an additional layer for your territory monitoring.

This will allow you to:

- **Territory context**: View change detection data alongside your existing CoMapeo observations, tracks, and points
- **Real-time updates**: Changes detected by the automated system appear automatically in your CoMapeo project once you sync with your CoMapeo archive server

With this information in CoMapeo, you can enhance your territorial monitoring efforts by:

- **Field verification**: Use change detection alerts to guide your field verification activities
- **Proactive awareness**: Receive notifications about changes happening in your territory even when you’re not actively monitoring
- **Evidence gathering**: Use detected changes as starting points for documentation and response activities

### How This Benefits Your Work

The change detection system provides several key benefits for Indigenous territorial monitoring:

#### Enhanced Situational Awareness

- **Early warning**: Receive alerts about potential threats to your territory before they become severe
- **Comprehensive coverage**: Monitor large areas that might be difficult to patrol regularly

#### Improved Response Capabilities

- **Faster detection**: Changes are identified quickly, allowing for rapid response
- **Evidence-based decisions**: Make informed decisions about where to focus monitoring and response efforts
- **Documentation support**: Use change detection data to support documentation and advocacy efforts

#### Strengthened Sovereignty

- **Data ownership**: All change detection data is stored within your Guardian Connector instance, maintaining data sovereignty
- **Community control**: Control who has access to monitoring information and how it’s used
- **Integration with existing tools**: Change detection works seamlessly with your existing CoMapeo and Guardian Connector workflows
