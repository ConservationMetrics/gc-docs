---
sidebar_position: 3
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# GC Explorer

[Guardian Connector Explorer (GC Explorer)](https://github.com/conservationmetrics/gc-explorer) es una herramienta de visualización de datos basada en la web que transforma los datos tabulares de su comunidad en mapas interactivos, galerías y paneles de control. Creado específicamente para Guardian Connector, se conecta directamente a su base de datos PostgreSQL para mostrar los datos recopilados de herramientas como CoMapeo, KoboToolbox y otras plataformas de recopilación de datos.

## 🗺️ Vistas disponibles

**📍 Vista de Mapa**: Visualice sus datos geoespaciales en un mapa interactivo con paneles de información emergentes y archivos adjuntos de medios incrustados.

**📸 Vista de Galería**: Explore el contenido de fotos, audio y video recopilado en el campo, organizado por fecha o ubicación.

**⚠️ Panel de Alertas**: Supervise los cambios y amenazas ambientales con alertas de detección de cambios e imágenes satelitales de antes y después; cree [incidentes](/reference/gc-toolkit/gc-explorer/incidents/) para agrupar una serie de alertas con fuentes de datos secundarias.

## 🔄 Integración de datos

GC Explorer funciona automáticamente con datos de:
- **CoMapeo**: Datos de mapeo y observación comunitarios
- **KoboToolbox/ODK**: Respuestas a encuestas y formularios  
- **Alertas ambientales**: Datos de detección de cambios por satélite
- **Fuentes de datos personalizadas**: Cualquier dato tabular compatible con PostgreSQL

![GC Explorer Alerts Dashboard](/img/reference/gc-toolkit/gc-explorer/alerts-dashboard.jpg)
_Example of an Alerts Dashboard in GC Explorer_

GC Explorer transforma los datos brutos en formatos visuales accesibles que ayudan a las comunidades a comprender, compartir y actuar sobre la información recopilada.

:::note Limitaciones de datos

Para que la visualización sea receptiva, GC Explorer muestra como máximo **10.000 registros de datos** en una vista. Si un conjunto de datos es más grande, aparece una notificación emergente y solo se muestran los primeros 10.000 registros.

:::

## 📤 Exportación de Datos {#exporting-data}

### Exportación de datos desde la Vista de Mapa

GC Explorer le permite exportar datos directamente desde la Vista de Mapa en una variedad de formatos para su uso en otras herramientas y flujos de trabajo.

Los formatos de exportación actualmente admitidos incluyen:

* **CSV**: Exporte sus datos en formato tabular para hojas de cálculo, bases de datos o análisis posteriores.
* **GeoJSON**: Exporte datos geoespaciales en un formato abierto moderno ampliamente compatible con herramientas GIS y aplicaciones de mapas web.
* **KML**: Exporte datos geoespaciales para su uso en aplicaciones como Google Earth y otras plataformas de mapas.

Estas exportaciones facilitan la continuación del trabajo con sus datos fuera de GC Explorer utilizando las herramientas y formatos que mejor se adapten a las necesidades de su comunidad.

:::tip Conversión de formato y compatibilidad con GIS

Una vez que haya exportado sus datos como CSV, GeoJSON o KML, es posible convertirlos a muchos otros formatos compatibles con GIS si es necesario.

Algunos formatos comúnmente solicitados incluyen:

* **Shapefile (.shp)**
* **GeoPackage (.gpkg)**
* **Geodatabase de archivos (.gdb)**

Tanto QGIS como ArcGIS admiten la importación de datos GeoJSON y KML y su exportación a estos formatos adicionales.

Aunque los shapefiles son ampliamente compatibles, también tienen limitaciones importantes, que incluyen:

* Un límite máximo de 10 caracteres para los nombres de columna
* Soporte limitado para la codificación de caracteres no latinos
* Restricciones en los tipos de campo y la complejidad de la estructura de datos

Si estas limitaciones afectan su flujo de trabajo, generalmente se recomienda usar los formatos **GeoPackage** o **File Geodatabase** en su lugar.

En ArcGIS, los archivos CSV que contienen información de coordenadas también se pueden cargar directamente usando la función **"Add XY Data"**.

:::

### Exportación de datos desde el Panel de Alertas

El Panel de Alertas le ofrece varias formas de descargar alertas e información relacionada.

#### 📥 Exportación de alertas

Puede descargar alertas utilizando los mismos formatos CSV, GeoJSON y KML que la Vista de Mapa:

- **Descargue todas las alertas en lote** a la vez en uno de los formatos admitidos.
- **Descargue una alerta individual** haciendo clic en ella en el mapa.
- **Cree un incidente** que agrupe una serie de alertas con fuentes de datos secundarias y luego descargue ese incidente. Consulte [Incidentes](/reference/gc-toolkit/gc-explorer/incidents/) para obtener más información.

#### 📊 Exportación de estadísticas

El Panel de Alertas también muestra estadísticas sobre las alertas, como el número total de alertas o el número total de hectáreas afectadas. También puede descargar esas estadísticas.

#### 🕒 Uso del filtro de tiempo

El **filtro de tiempo** en el Panel de Alertas se aplica a ambas descargas. Úselo para descargar en lote un subconjunto de alertas en lugar del conjunto completo; el mismo filtro también actualiza las estadísticas, por lo que una descarga de estadísticas refleja el rango de fechas filtrado.

## ⚙️ Configuración de vistas

Puede crear una nueva vista de **Mapa**, **Galería** o **Panel de Alertas**, y posiblemente otros tipos de vistas en el futuro.

Al crear una vista, elige un **conjunto de datos principal** y, si el tipo de vista lo admite, un **conjunto de datos secundario** opcional. Las opciones que aparecen a continuación dependen del tipo de vista; el formulario en sí es la mejor guía para cada campo.

Para un **mapa** o **panel de alertas**, puede configurar cosas como:

- Un **token de acceso de Mapbox**
- Un **estilo de mapa**
- **Parámetros del mapa** como el nivel de zoom

Si la vista incluye **medios**, puede configurar cosas como:

- Una **URL base** para cargar medios
- **Filtros**
- Un **fondo de encabezado**, como una imagen en miniatura

Si otra vista ya tiene muchas de las mismas configuraciones, puede **copiar la configuración de esa vista** para iniciar la nueva en lugar de rellenar todo desde cero.

