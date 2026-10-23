---
tags: [opu, tsp]
sidebar_position: 2
---

# Descarga y reconstrucción de teselas vectoriales

Guardian Connector incluye un script conector (`mapbox_download_vector_tiles`) que descarga **teselas vectoriales de Mapbox** para un cuadro delimitador en una caché local y las convierte en una única **GeoJSON FeatureCollection** en el lago de datos de su implementación. Se ejecuta en [Windmill](/reference/gc-toolkit/gc-scripts-hub/) y, opcionalmente, puede reconstruir características que fueron cortadas a través de los límites de las teselas.

Cuando se ejecuta, el script:

1. planifica la cuadrícula de teselas para el cuadro delimitador y el nivel de zoom solicitados (con un límite de zoom para la seguridad de la cuota),
2. si `dry_run` está habilitado, devuelve el plan de descarga y se detiene sin realizar solicitudes de red, y
3. de lo contrario, descarga las teselas no cacheadas, convierte las teselas vectoriales cacheadas (`.pbf`) a GeoJSON (opcionalmente reconstruyendo las características cortadas) y escribe el resultado en el lago de datos.

## Cuándo usarlo

Utilice este script cuando necesite características vectoriales de un conjunto de teselas de Mapbox como GeoJSON para análisis, archivo, recuperación de datos o un flujo de trabajo posterior en Guardian Connector:

- **Recuperación de datos de conjuntos de teselas** — extraiga características GeoJSON de un conjunto de teselas de Mapbox cuando los archivos fuente originales o el conjunto de datos de Mapbox ya no estén disponibles.
- **Extracción de capas de referencia** — extraiga características vectoriales dentro del cuadro delimitador de su territorio de un conjunto de teselas de Mapbox para usar en [QGIS](/reference/companion-applications/qgis/), [GC Explorer](/reference/gc-toolkit/gc-explorer/) o su almacén de datos PostgreSQL.
- **Preparación de datos para flujos de trabajo posteriores** — guarde el GeoJSON reconstruido directamente en el lago de datos para que otros scripts o herramientas puedan ingerirlo.

### Flujo de trabajo de dos pasos recomendado

1. Ejecute el script primero con **`dry_run` establecido en `true`** para inspeccionar el recuento de teselas planificado (`tile_count` / `to_fetch_count`) y confirmar que se ajusta a su cuota de API de Mapbox.
2. Ejecute el script de nuevo con **`dry_run` establecido en `false`** para descargar las teselas y escribir el archivo GeoJSON combinado en el lago de datos.

## Parámetros de configuración

| Parameter | Default | Description |
| --- | --- | --- |
| `mapbox` | *(obligatorio)* | Recurso de credenciales de Mapbox (solo se usa `access_token`). |
| `bbox` | *(obligatorio)* | Cuadro delimitador como `minlon,minlat,maxlon,maxlat` en grados WGS84. |
| `tileset` | *(obligatorio)* | ID del conjunto de teselas de Mapbox (por ejemplo, `mapbox.mapbox-streets-v8` o `account.tileset-id`). |
| `zoom` | `12` | Nivel de zoom de la cuadrícula de teselas (`0–14`). |
| `reconstruct_column` | `""` | Propiedad de la característica utilizada para fusionar y reconstruir características cortadas a través de los límites de las teselas. Déjelo vacío para deshabilitar la reconstrucción. |
| `output_filename` | `my_filename` | Nombre base para el archivo GeoJSON de salida y la carpeta de caché de teselas. |
| `attachment_root` | `/persistent-storage/datalake/mapbox` | Directorio del lago de datos donde se almacenan los archivos de salida. |
| `delete_tiles` | `true` | Elimine la caché de teselas `.pbf` sin procesar después de una escritura GeoJSON exitosa para que solo quede el archivo `.geojson`. Establézcalo en `false` para mantener las teselas en caché para ejecuciones más rápidas. |
| `dry_run` | `false` | Devuelve el plan de descarga sin obtener teselas ni escribir GeoJSON. |

### Reconstrucción de características cortadas

Dado que las teselas vectoriales dividen las geometrías a lo largo de una cuadrícula, los polígonos o líneas grandes que cruzan los bordes de las teselas se cortan en piezas separadas. Si sus características comparten una propiedad de identificador único (como una columna `id`, `fid` o `name`), establezca `reconstruct_column` con el nombre de esa propiedad para que el script fusione las geometrías coincidentes en características completas en el GeoJSON de salida.

### Rutas de salida en el lago de datos

- **Salida GeoJSON**: `{attachment_root}/{output_filename}.geojson` (accesible a través de [Explorador de archivos](/reference/gc-toolkit/filebrowser/))
- **Caché de teselas**: `{attachment_root}/{output_filename}/tiles/{z}/{x}/{y}.pbf` (eliminado automáticamente cuando `delete_tiles` es `true`)

## Obtención de un token de acceso de Mapbox

A diferencia de [Actualizar un conjunto de teselas de Mapbox](/reference/gc-toolkit/externally-hosted/mapbox/update-tileset/), este script solo necesita permiso para leer teselas vectoriales. Un **token de acceso público** (`pk.ey...`) con acceso al conjunto de teselas de destino es suficiente, aunque un token secreto también funciona. Puede copiar o crear un token desde **Admin > Tokens** en [Mapbox Studio](https://console.mapbox.com/).

## Salvaguardas de cuota y niveles de zoom

:::warning Cuota de API de Mapbox

Cada solicitud de tesela vectorial cuenta para su cuota de API de Mapbox, y el número de teselas aumenta aproximadamente **4 veces por cada nivel de zoom adicional**.

Para evitar un uso inesperado:

- Ejecute siempre con **`dry_run = true`** primero para verificar cuántas teselas se solicitarán.
- Mantenga **`delete_tiles = false`** si planea volver a ejecutar el script en la misma área; las teselas ya descargadas (y las teselas vacías conocidas) se almacenan en caché localmente y se omiten en ejecuciones posteriores.
- El parámetro `zoom` está limitado a `14` en Windmill para evitar explosiones accidentales de teselas con zoom alto.

:::

:::tip Elección de un nivel de zoom

Un conjunto de teselas solo almacena geometría hasta su `maxzoom` configurado; solicitar un nivel de zoom más alto resulta en más solicitudes de API sin añadir detalles espaciales adicionales. Utilice la [guía de niveles de zoom de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Zoom_levels) para elegir un nivel de zoom adecuado para su cuadro delimitador.

:::
