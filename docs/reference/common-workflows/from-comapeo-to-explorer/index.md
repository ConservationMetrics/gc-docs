import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# From CoMapeo to Explorer

This guide is for Guardian Connector operators to be able to create a data workflow from **CoMapeo** to an **GuardianConnector Explorer** map and gallery views. This process starts with CoMapeo data collection and ends with a configurable map and gallery visualizations.
The goal is to preserve your CoMapeo data, and to visualize it through interactive maps. This is useful for monitoring ongoing data collection and creating clear visualizations for analysis.

The workflow involves the following tools:

- **[CoMapeo](../../connected-applications/comapeo/)** – The territory monitoring & mapping application.
- **[Windmill](../../gc-toolkit/gc-scripts-hub/)** – Handles data ingestion and processing, transferring it from CoMapeo to the data warehouse.
- **PostgreSQL** – The database where Guardian Connector stores and makes your data available for analysis.
- **[GuardianConnector Explorer](../../gc-toolkit/gc-explorer/)** – The visualization tool used to create map views based on the stored data.

## 1. Data Collection: CoMapeo

### One time setup

You only need to do this once to set up the CoMapeo application.

1.  **Install CoMapeo**

    If you don’t have it yet, install it [from the Play Store](https://play.google.com/store/apps/details?id=com.comapeo).

2.  **Initialize your account**

    Open the application and follow the instructions to set up your user account.

### Data Collection workflow

We will defer to the official CoMapeo documentation for detailed instructions on how to create projects and collect data.
In summary, you need to:

1.  **Create a CoMapeo project**

    The project will contain all your observations, including images, audios, tracks, and points. It will allow you to collaborate with others on data collection. This project will be used to preserve the data within Guardian Connector.

2.  **Exchange CoMapeo project data with Guardian Connector**

To exchange data from a project with your Guardian Connector instance, you need to configure your Archive Server within CoMapeo.
    - Go to your Project Settings within CoMapeo.
    - Add your archive server using the URL of your CoMapeo archive server within Guardian Connector: <ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>

Once the CoMapeo app confirms that you successfully added your CoMapeo archive server, you can exchange your data with the archive server in the CoMapeo exchange screen.

:::info

**Don't share** your CoMapeo Archive Server URL with anyone you don't trust, as it provides access to all the data collected in your CoMapeo projects.

:::

## 2. Data Processing: Windmill

If you are the **Windmill Admin** within your Guardian Connector instance, there's an extra step that you need to do **one time per Guardian Connector instance**.

You need to configure your Windmill script to get your data from the CoMapeo archive server into your data warehouse.

Access your Windmill instance at:

**<ParamLink template="https://windmill.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://windmill.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

In Windmill, you will schedule a script to automatically fetch new data from the CoMapeo Archive Server and load it into your data warehouse.

### Create a Resource for CoMapeo credentials

You will need to set up a **Resource** of type `comapeo_server` with:
- Server URL: **<ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**
- Server Bearer Token: You can find this token in your Comapeo Archive Server's settings within Caprover in this link: **<ParamLink template="https://captain.{alias}.guardianconnector.net/#/apps/details/comapeo" paramName="alias" defaultValue="alias">https://captain.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/#/apps/details/comapeo</ParamLink>** , in the **App Configs** section, you will find the `SERVER_BEARER_TOKEN` Environment Variable.

### Create a new schedule

From the **Schedules** page, create a new schedule with the following parameters:

| Parameter | Description |
|------------|-------------|
| **Summary** | Short description of the task (e.g., `CoMapeo: fetch data`) |
| **Path** | `f/connectors/comapeo/fetch_data` |
| **Description** | Optional detailed explanation |
| **Schedule** | How often the task should run (you can use the "Simplified Builder" UI to easily set the schedule) |
| **Runnable** | Choose **Script**, then select `f/connectors/comapeo/comapeo_observations` |
| **comapeo**| The `comapeo_server` resource you previously defined |
| **db_table_prefix** |  The database table name for the imported data will have this prefix prepended |

Using the `Save` button on the top right to save your schedule.

### Test your schedule

1.  Open the **Schedules** page and locate your new schedule.
2.  You’ll see a list of previous runs and a **More options** menu (three dots) to the right of your schedule.
3.  Click the menu and select **Run now** to manually test the schedule.
4.  You can go to the **Runs** tab to see it running successfully.

Once your Windmill script is running, you will have your data available in a database table and your CoMapeo files available in your file browser.

The table name will be in the format: `{db_table_prefix}_{mapeo project name}`.

## 3. Data Visualization: Explorer

Access your Explorer instance at:

**<ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

:::info

To configure your Explorer view, your user needs to have admin access. You can ask your Guardian Connector administrator to set your role.

:::

### Configure Explorer View

1.  **Log in to Explorer**

    Use your admin credentials to sign in.

2.  **Access Configuration**

    Once you log in, you will find a **Configuration** button at the top of the Explorer window to begin setting up your views.

3.  **Create your new Views**

    -   Click on the **+ Add new table** button and choose a table from the list, then click on **Confirm**.
    -   Locate your newly available table and go into the configuration by clicking on the menu button to the right of it.
        Key configurations to be set are:

| Parameter | Description |
| :--- | :--- |
| **Views** | Map, Gallery |
| **Mapbox Style** | You will need a Mapbox account to access a Map Style. Get the Style URL in the format `mapbox://styles/{username}/{styleId}`. You can find this URL in your Mapbox Studio account, under the **Styles** section. Click the options menu for your desired style and select the **Style URL** option to copy it. |
| **Mapbox Access Token** | You can get this from your Mapbox account page. Go to the **Tokens** section and click **+ Create a token**. Give it a meaningful name, click **Create token**, and then copy the generated token to use in Explorer. |
| **Zoom level** | The zoom level for the map view (0-22). |
| **Center latitude** | The latitude of the center point for the map view. |
| **Center longitude** | The longitude of the center point for the map view. |
| **Base path for media** | This is the URL used to share images and audio files downloaded from CoMapeo. To get this URL, go to your Filebrowser at **<ParamLink template="https://filebrowser.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://filebrowser.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**, locate the folder configured in your Windmill instance, and click the **Share** button. Please see the [Filebrowser: generating share links](/reference/gc-toolkit/filebrowser/#generating-share-links) section for more guidance on how to format the share link for use in GC Explorer. |

:::info

To determine map parameters like the zoom level and center latitude/longitude, you can benefit from using [Mapbox's Location Helper](https://labs.mapbox.com/location-helper/) tool.

:::

5.  **Publish the Views**

    Once saved, your new map and gallery views will be visible to users who access the Explorer instance.

---

✅ **You’ve completed the full workflow!**

Your CoMapeo data now flows automatically from CoMapeo → Windmill → PostgreSQL → Explorer, ready for visualization and analysis.