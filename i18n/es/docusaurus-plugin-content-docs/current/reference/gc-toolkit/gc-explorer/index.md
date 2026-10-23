---
sidebar_position: 3
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# GC Explorer

[Guardian Connector Explorer (GC Explorer)](https://github.com/conservationmetrics/gc-explorer) es una herramienta de visualización de datos basada en la web que transforma los datos tabulares de tu comunidad en mapas interactivos, galerías y paneles de control. Diseñada específicamente para Guardian Connector, se conecta directamente a tu base de datos PostgreSQL para mostrar datos recopilados de herramientas como CoMapeo, KoboToolbox y otras plataformas de recopilación de datos.

## 🗺️ Vistas disponibles

**📍 Vista de mapa**: Visualiza tus datos geoespaciales en un mapa interactivo con paneles de información emergentes y archivos adjuntos multimedia incrustados.

**📸 Vista de galería**: Navega por contenido de fotos, audio y video recopilado en el campo, organizado por fecha o ubicación.

**⚠️ Panel de alertas**: Monitorea cambios y amenazas ambientales con alertas de detección de cambios e imágenes satelitales de antes y después; crea [incidentes](/reference/gc-toolkit/gc-explorer/incidents/) para agrupar una serie de alertas con fuentes de datos secundarias.

## 🔄 Integración de datos

GC Explorer funciona automáticamente con datos de:
- **CoMapeo**: Datos de mapeo y observación de la comunidad.
- **KoboToolbox/ODK**: Respuestas y formularios de encuestas.  
- **Alertas ambientales**: Datos de detección de cambios por satélite.
- **Fuentes de datos personalizadas**: Cualquier dato tabular compatible con PostgreSQL.

![GC Explorer Alerts Dashboard](/img/reference/gc-toolkit/gc-explorer/alerts-dashboard.jpg)
_Example of an Alerts Dashboard in GC Explorer_

GC Explorer transforma los datos sin procesar en formatos visuales accesibles que ayudan a las comunidades a comprender, compartir y actuar sobre la información recopilada.

:::note Limitaciones de datos

Para mantener la visualización receptiva, GC Explorer muestra un máximo de **10,000 registros de datos** en una vista. Si un conjunto de datos es más grande, aparece una notificación emergente y solo se muestran los primeros 10,000 registros.

:::

## 📤 Exportación de datos {#exporting-data}

### Exportando datos desde la vista de mapa

GC Explorer te permite exportar datos directamente desde la Vista de mapa a una variedad de formatos para su uso en otras herramientas y flujos de trabajo.

Los formatos de exportación actualmente admitidos incluyen:

* **CSV**: Exporta tus datos en formato tabular para hojas de cálculo, bases de datos o análisis posteriores.
* **GeoJSON**: Exporta datos geoespaciales en un formato abierto moderno ampliamente compatible con herramientas GIS y aplicaciones de mapas web.
* **KML**: Exporta datos geoespaciales para su uso en aplicaciones como Google Earth y otras plataformas de mapeo.

Estas exportaciones facilitan la continuación del trabajo con tus datos fuera de GC Explorer, utilizando las herramientas y formatos que mejor se adapten a las necesidades de tu comunidad.

:::tip Los filtros se aplican a las exportaciones.

Los filtros activos por **fecha** y **columna** en la Vista de mapa se incluyen en la solicitud de exportación. Primero, establece el rango de fechas y cualquier filtro de categoría/columna, luego descarga CSV, GeoJSON o KML — el archivo contendrá solo el subconjunto filtrado. Ese subconjunto está listo para trabajos posteriores en una hoja de cálculo o herramienta GIS; consulta [Usa tus datos en QGIS](/reference/common-workflows/use-your-data-in-qgis/) para abrir GeoJSON en QGIS.

:::

:::tip Conversión de formato y compatibilidad GIS

Una vez que hayas exportado tus datos como CSV, GeoJSON o KML, es posible convertirlos a muchos otros formatos compatibles con GIS si es necesario.

Algunos formatos comúnmente solicitados incluyen:

* **Shapefile (.shp)**
* **GeoPackage (.gpkg)**
* **Base de datos geográfica de archivos (.gdb)**

Tanto QGIS como ArcGIS admiten la importación de datos GeoJSON y KML y su exportación a estos formatos adicionales.

Aunque los shapefiles son ampliamente compatibles, también tienen limitaciones importantes, que incluyen:

* Un límite máximo de 10 caracteres para los nombres de columna.
* Soporte limitado para codificación de caracteres no latinos.
* Restricciones en los tipos de campo y la complejidad de la estructura de datos.

Si estas limitaciones afectan tu flujo de trabajo, generalmente se recomienda usar los formatos **GeoPackage** o **File Geodatabase** en su lugar.

En ArcGIS, los archivos CSV que contienen información de coordenadas también se pueden cargar directamente usando la función **"Add XY Data"**.

:::

### Exportar datos desde el panel de alertas

El Panel de alertas te ofrece varias formas de descargar alertas e información relacionada.

#### 📥 Exportación de alertas

Puedes descargar alertas utilizando los mismos formatos CSV, GeoJSON y KML que la Vista de mapa:

- **Descarga por lotes todas las alertas** a la vez en uno de los formatos admitidos.
- **Descarga una alerta individual** haciendo clic en ella en el mapa.
- **Crea un incidente** que agrupe una serie de alertas con fuentes de datos secundarias, luego descarga ese incidente. Consulta [Incidentes](/reference/gc-toolkit/gc-explorer/incidents/) para más información.

#### 📊 Exportando estadísticas

El Panel de alertas también muestra estadísticas sobre las alertas, como el número total de alertas o el número total de hectáreas afectadas. También puedes descargar esas estadísticas.

#### 🕒 Uso del filtro de tiempo

El **filtro de tiempo** en el Panel de alertas se aplica a ambas descargas. Úsalo para descargar un subconjunto de alertas en lotes en lugar del conjunto completo; el mismo filtro también actualiza las estadísticas, por lo que una descarga de estadísticas reflejará el rango de fechas filtrado.

## ⚙️ Configuración de vistas

Puedes crear una nueva vista de **mapa**, **galería** o **panel de alertas** — y posiblemente otros tipos de vista en el futuro.

Cuando creas una vista, eliges un **conjunto de datos principal** y, si el tipo de vista lo admite, un **conjunto de datos secundario** opcional. Las opciones que aparecen a continuación dependen del tipo de vista; el formulario mismo es la mejor guía para cada campo.

Para un **mapa** o **panel de alertas**, puedes configurar cosas como:

- Hasta tres **mapas de fondo de Mapbox**, cada uno con su propio **estilo de Mapbox** y **token de acceso**.
- **Parámetros del mapa** como coordenadas centrales, nivel de zoom, inclinación, rumbo, proyección y terreno 3D.
- **ID de capa de leyenda del mapa** para alternar capas de estilo de Mapbox personalizadas.

Si la vista incluye **medios** o **filtros**, puedes configurar cosas como:

- Una **URL base** (como un [enlace compartido del Navegador de archivos](/reference/gc-toolkit/filebrowser/#generating-share-links)) para cargar adjuntos de medios, imágenes de alerta o iconos de mapa personalizados.
- **Columnas de filtro** para menús desplegables de categoría y deslizadores de rango de fechas.

Si otra vista ya tiene muchas de las mismas configuraciones, puedes **copiar la configuración de esa vista** para iniciar la nueva en lugar de llenar todo desde cero.

### 🏷️ Identificación y marca de la vista {#view-identification}

Para que las vistas sean más fáciles de reconocer y navegar a medida que tu biblioteca de datos crece, puedes enriquecer cada vista de conjunto de datos con detalles de identificación:

- **Nombre de visualización de la vista**: Reemplaza el nombre de la tabla de la base de datos sin procesar por un título claro y legible para humanos.
- **Descripción de la vista**: Proporciona contexto y metadatos sobre el contenido, propósito o frecuencia de actualización del conjunto de datos.
- **Imagen de cabecera de la vista**: Proporciona una URL de imagen para mostrar como miniatura y fondo de cabecera, de modo que los usuarios puedan distinguir las vistas de un vistazo.
- **URL del logotipo**: Opcionalmente, muestra el logotipo de tu organización o comunidad en la barra lateral de la vista.

### 🔒 Control de visibilidad del conjunto de datos {#dataset-visibility-control}

Para cada vista de conjunto de datos en GC Explorer, debes establecer un nivel de **Visibilidad** que controle quién puede ver e interactuar con la vista. Esto te permite proteger información sensible o propietaria de la comunidad mientras sigues colaborando con socios o compartiendo vistas públicas cuando sea necesario.

Los niveles de visibilidad se corresponden directamente con los [roles de usuario de Guardian Connector](/reference/gc-toolkit/gc-landing-page/#user-management) asignados por los administradores en la Página de inicio:

| Nivel de visibilidad | Quién puede acceder a la vista |
| --- | --- |
| **Administradores** | Solo usuarios que han iniciado sesión con el rol de **Admin**. |
| **Miembros** | Usuarios que han iniciado sesión con el rol de **Member** o **Admin**. |
| **Invitado** | Usuarios que han iniciado sesión con los roles de **Invitado**, **Member** o **Admin**. |
| **Público — no se requiere iniciar sesión** | Cualquier persona con el enlace, incluidos los visitantes que no han iniciado sesión y los usuarios que han iniciado sesión con el rol de **Signed In**. |

Cada tarjeta de vista en la página de inicio de GC Explorer muestra su insignia de **Nivel de permiso** activa para que los administradores y miembros puedan verificar la configuración de acceso de un vistazo.

## ℹ️ ¿Qué versión de la aplicación estoy usando?

If you ever need to know which version of GC Explorer you are using — for example, when reporting a problem — open the `/_info` endpoint on the app. Add `/_info` to the end of the Explorer address in your browser (for example, <ParamLink template="https://explorer.{alias}.guardianconnector.net/_info" paramName="alias" defaultValue="alias">https://explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/_info</ParamLink>). You do not need to sign in.

Se verá así:

```json
{
  "tag": "20261012-189",
  "commit": "1234567890abcdef1234567890abcdef12345678",
  "buildId": "abcdef1234567890abcdef1234567890abcdef12",
  "startedAt": "2026-10-12T12:00:00.000Z"
}
```

La respuesta identifica la compilación en ejecución:

- **tag**: la versión desplegada, escrita como una fecha y número de compilación (`YYYYMMDD-<run>`)
- **commit**: la confirmación de origen a partir de la cual se construyó esa versión.
- **startedAt**: la fecha y hora en que se inició la aplicación.
