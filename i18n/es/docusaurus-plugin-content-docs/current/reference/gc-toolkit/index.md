---
sidebar_position: 1
---

# Kit de herramientas de Guardian Connector

Cada instancia de Guardian Connector está equipada con un conjunto de herramientas diseñadas para ayudar a las comunidades a gestionar sus datos y flujos de trabajo:

### 🗄️ Almacén de datos privado 

Guardian Connector proporciona un almacenamiento de datos seguro y dedicado para cada usuario, utilizando una base de datos relacional PostgreSQL y almacenamiento privado de archivos. Todos los datos están aislados, asegurando que solo el usuario tenga acceso; los datos de nadie más se almacenan o son accesibles dentro del mismo entorno.

### 🤖 GC Scripts Hub

El [GC Scripts Hub](./gc-scripts-hub/) es una colección de scripts de automatización diseñados para ayudar a las comunidades a proteger y gestionar sus tierras a través de la integración de datos y la automatización de flujos de trabajo. Construidos sobre la plataforma [Windmill](https://www.windmill.dev/), estos scripts empoderan a las comunidades para conectar diferentes herramientas, automatizar la recopilación de datos y optimizar sus flujos de trabajo de conservación sin requerir una profunda experiencia técnica.

### 🗺️ GC Explorer

El [GC Explorer](./gc-explorer/) es una herramienta de visualización de datos basada en la web que transforma los datos tabulares de su comunidad en mapas interactivos, galerías y paneles. Construido específicamente para Guardian Connector, se conecta directamente a su base de datos PostgreSQL para mostrar los datos recopilados de herramientas como CoMapeo, KoboToolbox y otras plataformas de recopilación de datos.

### 📊 Superset

[Apache Superset](./superset/) es una plataforma de inteligencia de negocios moderna y lista para empresas que proporciona ricas capacidades de visualización y exploración de datos. Admite una amplia variedad de visualizaciones, desde gráficos simples hasta complejos, y permite a los usuarios crear paneles interactivos. Superset está diseñado para ser intuitivo tanto para usuarios técnicos como no técnicos, lo que lo hace ideal para compartir información entre diversos grupos de interés.

### 🗂️ Filebrowser

[Filebrowser](./filebrowser/) es un gestor de archivos basado en la web que permite a los usuarios navegar, cargar, descargar y compartir archivos desde su instancia de Guardian Connector.


### 🔧 Otras herramientas

Según sea necesario, puede agregar herramientas adicionales a una instancia de Guardian Connector. Por ejemplo, puede agregar un servidor HTTP personalizado para servir contenido estático desde el data lake. Consulte [Otras herramientas](/reference/gc-toolkit/other-tools/) para obtener más información.

## Servicios alojados externamente

Guardian Connector también depende de varios servicios de terceros (que no están alojados en una instancia) para proporcionar funcionalidad adicional:

- [Auth0](./externally-hosted/auth0/) - Plataforma de autenticación y autorización
- [Mapbox](./externally-hosted/mapbox/) - Plataforma de mapeo y visualización de datos geoespaciales
- [Twilio](./externally-hosted/twilio/) - Plataforma de comunicación por SMS y voz
- [Uptime Robot](./externally-hosted/uptime-robot/) - Monitoreo de sitios web y seguimiento de tiempo de actividad