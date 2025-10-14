---
sidebar_position: 4
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# From KoboToolbox to Superset

This document describes how to move data from **KoboToolbox** to **Superset** using **Windmill** and the **PostgreSQL** data warehouse included in **Guardian Connector**.  
The goal is to preserve and visualize your survey data through dashboards — useful for monitoring ongoing surveys and creating clear visualizations for completed ones.

The workflow involves the following tools:

- **KoboToolbox** – The survey collection tool. Similar workflows can be adapted for ODK or Survey123, but here we’ll focus on KoboToolbox.  
- **Windmill** – Handles data ingestion and processing, transferring it from KoboToolbox to the data warehouse.  
- **PostgreSQL** – The database where Guardian Connector stores and makes your data available for analysis.  
- **Superset** – The visualization tool used to create dashboards and charts based on the stored data.

## 1. Data Collection: KoboToolbox

1. **Create a KoboToolbox account and project**  
   If you don’t have one yet, follow the official [KoboToolbox documentation](https://support.kobotoolbox.org/creating_account.html) to register and create a project.

2. **Add the replication user**  
   Add the user `kobouser` to your KoboToolbox project, here is the [documentation to sharing projects](https://support.kobotoolbox.org/managing_permissions.html).
   Make sure you provide it with `Manage project` permissions in order for it to be able to pull the data.
   This account allows Guardian Connector to replicate your data.

3. **Gather project details**  

   You’ll need the following information in the next step:
   - **KoboToolbox instance**: either `kf.kobotoolbox.org` or `kc.kobotoolbox.org`
   - **Project ID**: You can find the Project ID in the URL of your KoboToolbox project's Summary page.
   If the URL looks like this: https://kf.kobotoolbox.org/#/forms/a26w95BYpDoxBJbxDAaSbH/summary
   The Project ID would be in between "forms/" and "/summary". In this case it would be: a26w95BYpDoxBJbxDAaSbH

Once you have this information, continue to the Windmill configuration.

## 2. Data Processing: Windmill

Access your Windmill instance at:

<ParamLink template="https://windmill.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">
https://windmill.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/
</ParamLink>

In Windmill, **Schedules** are automated tasks that run at specific intervals — for example, regularly fetching new data from KoboToolbox.

### Create a new schedule

Configure a new schedule with the following parameters:

| Parameter | Description |
|------------|-------------|
| **Summary** | Short description of the task |
| **Path** | `/f/connectors/kobotoolbox/` |
| **Description** | Optional detailed explanation |
| **Schedule** | How often the task should run |
| **Runnable** | Choose **Script**, then select `f/connectors/kobotoolbox/kobotoolbox_responses` |
| **kobotoolbox** | A server and API key pair |
| **form_id** | Your Kobo form ID |
| **db_table_name** | The database table name for the imported data |

> **Note:**  
> If you use a `db_table_name` that already exists, new rows and columns will be appended to that table.  
> To avoid conflicts, we recommend using this naming scheme:  
> ```
> {schema} = {project_id}_{form_id}
> ```

Once saved, you’ll see your schedule in the **Schedules** page.

### Test your schedule

1. Open the **Schedules** page and locate your new schedule (use the search bar if needed).  
2. You’ll see:
   - A **chart of previous runs** (green = success, red = error)
   - A **list of runs** with detailed logs
   - A **More options** menu with a `Run now` button
3. Click **Run now** to manually test the schedule.  
   A notification will appear confirming that the run was scheduled.  
   Click **Go to run page** to view progress and logs.

Once the schedule completes successfully, your data will be available in the Guardian Connector PostgreSQL database.

## 3. Data Visualization: Superset

Access your Superset instance at:

<ParamLink template="https://superset.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">
https://superset.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/
</ParamLink>

After logging in, you can create **Datasets**, **Charts**, and **Dashboards** using the `+` button on the top-right corner.

### Step 1: Create a Dataset

1. Click the `+` button → **Data** → **Create dataset**  
2. Choose:
   - **Database:** `Warehouse`  
   - **Schema:** `public`  
   - **Table:** the same name as your `db_table_name` in Windmill  
3. Superset will display the table columns so you can confirm your selection.  
4. If correct, click **CREATE DATASET AND CREATE CHART**.

You’ll be redirected to the chart creation screen.

### Step 2: Create a Chart

1. From the Superset homepage, click the `+` button → **Chart**.  
2. Choose a dataset (the one you just created).  
3. Select a chart type — for example, **Big Number**.  
4. Click **CREATE NEW CHART**.

In the chart editor:

- **Name:** Choose how the chart will appear in listings.  
- **Metric:** Defines what data the chart displays.  
  For a Big Number chart, use the `COUNT(*)` metric by dragging it from *Chart source* to *Metric* in the **DATA** section.  

You can further customize your chart in the **DATA** and **CUSTOMIZE** tabs.  
When done, click **CREATE CHART**, then **SAVE** in the top-right corner.

## 4. Create a Dashboard

1. Click the `+` button → **Dashboard**.  
2. You’ll see an empty canvas where you can add charts and layout elements.  
3. Drag charts from the right pane into the dashboard canvas.  
4. Adjust their position and size as needed.  
5. Give your dashboard a name (top-left corner) and click **SAVE** (top-right).

By default, the dashboard is saved as a **draft**.  
To publish it for your team:

- Click the **Draft** label next to the title → it changes to **Published**.  
- The dashboard will now appear under **Dashboards** in your Superset instance.

---

✅ **You’ve completed the full workflow!**  
Your survey data now flows automatically from KoboToolbox → Windmill → PostgreSQL → Superset, ready for visualization and analysis.
