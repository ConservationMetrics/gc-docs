---
sidebar_position: 3
---

# Metabase

Metabase is an open-source business intelligence platform. You can use Metabase to ask questions about your data, or embed Metabase in your app to let your customers explore their data on their own.

It can be installed locally and can be used to analyze local datasets, as well as datasets from a data-warehouse.

We are exploring Metabase as an Exploratory Data Analysis tool.

## 🛠️ Local Installation Guide: Metabase + DuckDB on Windows

This guide walks you through installing **Metabase** (open-source edition) on your Windows computer, setting it up to analyze data locally, and using **DuckDB** to read CSV files so Metabase can read.

### 1. Install Java (Required for Metabase)

Metabase runs on Java, so you must install it first.

1. Go to [Adoptium.net](https://adoptium.net/temurin/releases/) (or any other OpenJDK provider).
2. Download the **Temurin JDK** for your OS (e.g., Windows x64 installer).
3. Run the installer and complete installation with default options.
4. Verify installation:

   * Open a **Command Prompt** (press Windows key → type `cmd` → Enter).
   * Type:

     ```sh
     java -version
     ```
   * You should see a version number (e.g. `openjdk version "21.0.x"`).

### 2. Download Metabase

1. Go to [Metabase Downloads](https://www.metabase.com/start/oss).
2. Download the **Metabase JAR** file (`metabase.jar`).
3. Create a folder `metabase` in your Downloads directory (or any directory you prefer).
4. Move `metabase.jar` into that `metabase` folder.

### 3. Add DuckDB Metabase Driver

1. Visit the [DuckDB Metabase Driver Releases](https://github.com/dacort/metabase-duckdb-driver/releases).
2. Download the latest `.jar` file (driver).
3. Inside the `metabase` folder, create a subfolder called `plugins` (all lowercase).
4. Move the DuckDB driver `.jar` file into `metabase/plugins`.

Your folder structure should look like:

```
Downloads/
└── metabase/
    ├── metabase.jar
    ├── plugins/
    │   └── duckdb.metabase-driver.jar
    └── data/
```

(We'll create `data/` in the next step.)

### 4. Prepare Your Data

1. Download your CSV data (e.g., from Kobo Toolbox).
2. Create a `data` folder inside the `metabase` folder.
3. Place your CSV file in `data/`.
4. Rename it for consistency, e.g.:

   ```
   mydata.csv
   ```

### 5. Install DuckDB CLI (optional)

If you want to manipulate the data before loading it in Metabase, or to convert it to other formats, you can use the DuckDB CLI.

1. Go to [DuckDB CLI Releases](https://duckdb.org/docs/installation/).
2. Download the latest **CLI** for your OS (e.g., `duckdb_cli-windows-amd64.zip`).
3. Extract the file and move the executable (`duckdb.exe`) into the `data` folder.

Your `data` folder should now have:

```
data/
├── mydata.csv
└── duckdb.exe
```

### 6. Convert CSV to DuckDB Database (optional)

1. Open Command Prompt and navigate to the data folder:

   ```sh
   cd %HOMEPATH%\Downloads\metabase\data
   ```
2. Create a DuckDB database and import the CSV:

   ```sh
   duckdb mydata.db
   ```

   Inside the DuckDB shell, run:

   ```sql
   CREATE TABLE my_data AS
   SELECT * FROM read_csv_auto('mydata.csv');
   ```

   Confirm it worked:

   ```sql
   SELECT * FROM my_data LIMIT 10;
   ```

   Then quit:

   ```sql
   .quit
   ```

You now have a `mydata.db` file in your `data` folder.

### 7. Run Metabase

1. Open Command Prompt and navigate to your Metabase folder:

   ```sh
   cd %HOMEPATH%\Downloads\metabase
   ```
2. Start Metabase:

   ```sh
   java -jar metabase.jar
   ```
3. Wait until you see `Metabase Initialization COMPLETE`.

### 8. Open Metabase in Your Browser

1. Open a browser and go to:

   ```
   http://localhost:3000
   ```
2. Complete initial setup (one time only):

   * Select language.
   * Create a local admin account (any email/password, just remember them).
   * Skip analytics/usage tracking if you wish.

### 9. Connect the DuckDB Database

1. In Metabase, go to **Admin Settings → Databases → Add Database**.
2. Choose **DuckDB** from the list.
3. Fill in:

   * **Display Name:** `Your database name of preferrence`
   * **Database File Path:** full path to `mydata.db`
     (e.g. `C:\Users\YourName\Downloads\metabase\data\mydata.db`)
4. Save — you should now see your database and table in Metabase.

### 10. Explore Your Data

* Go to **Data → Browse Data → Your database name of preferrence**.
* Click **Explore** or use **X-Ray** to let Metabase auto-generate insights.
* Optionally, create **Models**, **Questions**, or **Dashboards**.
* You can also use the DuckDB driver, and create Models that query CSV files directly, like "SELECT * from 'mydata.csv'" will actually use DuckDB to query the CSV straight away.

✅ **You now have a full local analytics setup with Metabase + DuckDB!**
You can repeat steps 4–6 whenever you have new CSV data.
