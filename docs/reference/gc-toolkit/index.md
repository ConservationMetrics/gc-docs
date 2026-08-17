---
sidebar_position: 1
---

# Guardian Connector Toolkit

Each Guardian Connector instance is equipped with a suite of tools designed to help communities manage their data and workflows:

### 🏠 GC Landing Page

The [GC Landing Page](/reference/gc-toolkit/gc-landing-page/) is the home page for a community's Guardian Connector instance and provides a central entry point to the tools and services available to users. From the Landing Page, users can open services such as GC Explorer, Superset, Windmill, and File Browser, while administrators can also manage user accounts and roles, configure theme settings, and add custom applications.

### 🤖 GC Scripts Hub

The [GC Scripts Hub](./gc-scripts-hub/) is a collection of automation scripts, flows, and apps designed to help communities manage and use their data through integration and workflow automation. Built on the [Windmill](https://www.windmill.dev/) platform, these tools enable communities and technical support partners to connect different systems, automate data collection and processing, and streamline monitoring workflows.

### 🗺️ GC Explorer

The [GC Explorer](./gc-explorer/) is a web-based data visualization tool that transforms tabular and spatial data into interactive maps, galleries, and dashboards. Built specifically for Guardian Connector, it connects directly to the PostgreSQL data warehouse to display data collected from tools such as CoMapeo, KoboToolbox, and other sources.

### 📊 Superset

[Apache Superset](./superset/) is a modern data visualization platform that provides rich data visualization and exploration capabilities. It supports a wide range of visualizations, from simple charts to interactive dashboards, and can be used to explore and communicate information stored in the Guardian Connector data warehouse.

### 🗂️ File Browser

[File Browser](./filebrowser/) is a web-based file manager that allows users to browse, upload, download, and manage files stored within their Guardian Connector instance.

### 🗄️ Private Data Warehouse and File Storage

Guardian Connector provides a secure, dedicated data store for each community organization, using a PostgreSQL relational database and private file storage. Organizations retain ownership and control over their information, including who can access it, how it is used, and where it is stored. Data is kept separate from that of other Guardian Connector servers.

:::note
The private data warehouse and file storage do not have their own user-facing interface. Instead, other Guardian Connector applications provide access to them. For example, GC Explorer and Superset can load data from the data warehouse, File Browser provides access to stored files, and Windmill can read from and write to both.
:::

### 🔧 Custom Applications

Additional tools can be added to a Guardian Connector instance as needed. For example, a custom HTTP server can be added to serve static content from file storage. See [Custom Applications](/reference/gc-toolkit/custom-applications/) for more information.

## Externally Hosted Services

Guardian Connector also relies on several third-party services that are not hosted as part of the Guardian Connector infrastructure but provide additional functionality to the platform:

- [Auth0](./externally-hosted/auth0/) - Authentication and authorization platform
- [Mapbox](./externally-hosted/mapbox/) - Mapping and geospatial data visualization platform
- [Twilio](./externally-hosted/twilio/) - SMS and voice communication platform