---
sidebar_position: 2
---

# Guardian Connector Toolkit

Each Guardian Connector instance is equipped with a suite of tools designed to help communities manage their data and workflows:

### 🗄️ Private Data Warehouse 

Guardian Connector provides a secure, dedicated data store for each user, utilizing a PostgreSQL relational database and private file storage. All data is isolated, ensuring that only the user has access — nobody else's data is stored or accessible within the same environment.

### 🤖 GC Scripts Hub

The [GC Scripts Hub](./gc-scripts-hub/) is a collection of automation scripts designed to help communities guard and manage their land through data integration and workflow automation. Built on the [Windmill](https://www.windmill.dev/) platform, these scripts empower communities to connect different tools, automate data collection, and streamline their conservation workflows without requiring deep technical expertise.

### 🗺️ GC Explorer

The [GC Explorer](./gc-explorer/) is a web-based data visualization tool that transforms your community's tabular data into interactive maps, galleries, and dashboards. Built specifically for Guardian Connector, it connects directly to your PostgreSQL database to display data collected from tools like CoMapeo, KoboToolbox, and other data collection platforms.

### 📊 Superset

[Apache Superset](./superset/) is a modern, enterprise-ready business intelligence platform that provides rich data visualization and exploration capabilities. It supports a wide variety of visualizations, from simple to complex charts, and allows users to create interactive dashboards. Superset is designed to be intuitive for both technical and non-technical users, making it ideal for sharing insights across diverse stakeholder groups.

### 🗂️ Filebrowser

[Filebrowser](./filebrowser/) is a web-based file manager that allows users to browse, upload, download, and share files from their Guardian Connector instance.

### 🔧 Other Tools

As needed, you can add additional tools to a Guardian Connector instance. For example, if you are using [CoMapeo](/reference/connected-applications/comapeo/) to collect data, you can add a CoMapeo archive server to your Guardian Connector instance to allow users to synchronize their data with the CoMapeo archive server and for Guardian Connector to access that server's API to fetch and store the data in the private data warehouse.

## Externally Hosted Services

Guardian Connector also relies on several third party services (that are not hosted on an instance) to provide additional functionality:

- [Auth0](./externally-hosted/auth0/) - Authentication and authorization platform
- [Mapbox](./externally-hosted/mapbox/) - Mapping and geospatial data visualization platform
- [Twilio](./externally-hosted/twilio/) - SMS and voice communication platform
- [Uptime Robot](./externally-hosted/uptime-robot/) - Website monitoring and uptime tracking