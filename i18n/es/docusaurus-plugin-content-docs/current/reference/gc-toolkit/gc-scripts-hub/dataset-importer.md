---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Importador de conjuntos de datos GC

Cargue un archivo de conjunto de datos y conviértalo en una tabla limpia de PostgreSQL en su almacén de datos de Guardian Connector. La aplicación le guía a través de la elección o asignación de un nombre al conjunto de datos, la carga de un archivo, el etiquetado opcional de la **fuente de datos** y la finalización de la importación. También guarda los archivos originales y transformados en el lago de datos de su implementación (accesible a través de [File Browser](/reference/gc-toolkit/filebrowser/)).

---

## 📦 What this tool does

* Converts and validates common **tabular** files (`.csv`, `.xlsx/.xls`, `.json`) to CSV for ingestion; or, to GeoJSON if the file has spatial data.
* Converts and validates common **spatial** files (`.geojson`, `.kml`, `.gpx`, `.kmz`, `.xml` (if it's a SMART XML file), Shapefiles (`.shp` and accompanying files)), GeoPackage files (`.gpkg`), and CyberTracker files (`.json`) to GeoJSON for ingestion.
* Optionally applies **source-specific** transformations (e.g., KoboToolbox, CoMapeo, ODK, Locus Map)
* Writes the result to a **new** or **existing** Postgres table and archives files to file storage

---

## Paso a paso: Importar un conjunto de datos

### 1. Abra la aplicación en Windmill

Desde **GC Scripts Hub → Aplicaciones**, haga clic en **Importador de conjuntos de datos GC**.

![Open the Importador de conjuntos de datos GC app](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-1.jpg)

### 2. Elija o asigne un nombre a su conjunto de datos

En el paso **Elija su conjunto de datos**, puede:

* **Seleccione un conjunto de datos existente** del menú desplegable interactivo —que busca y filtra tablas existentes en su almacén de datos mientras escribe— para añadir nuevos datos a ese conjunto de datos, o
* **Cree un nuevo conjunto de datos** introduciendo un nombre claro y legible por humanos en el campo **Nombre del conjunto de datos** a continuación.

![Choose an existing dataset or enter a new dataset name](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-2.jpg)

A medida que selecciona o introduce un nombre, el importador verifica automáticamente la base de datos en segundo plano y muestra el nombre de la tabla resultante en el almacén.

:::tip Añadir a una tabla existente

Si selecciona un conjunto de datos existente del menú desplegable (o introduce un nombre que coincide con una tabla existente), el importador le alertará de que se añadirán nuevos registros directamente a esa tabla.

:::

### 3. Cargue su archivo

Seleccione su archivo y haga clic en **Cargar archivo**. Cuando la carga se complete, pase al siguiente paso.

![Upload your file and confirm success](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-4.jpg)

**Formatos aceptados**: CSV, GeoJSON, GPX, JSON, KML, XLS, XLSX, KMZ, XML (SMART), GeoPackage (`.gpkg`) y Shapefiles.

### 4. (Opcional) Elija una fuente de datos conocida

Si el archivo proviene de una herramienta conocida, active **¿Este conjunto de datos proviene de una fuente o herramienta conocida?** y selecciónela. Esto añade una etiqueta `data_source` y, para algunas fuentes, aplica un formato inteligente.

![Choose a known data source](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-5.jpg)

**Ejemplos**

* **KoboToolbox**: estandariza las exportaciones de encuestas para nombres y tipos de columnas consistentes
* **CoMapeo / Mapeo / Locus Map**: normaliza los campos para observaciones y puntos de referencia

### 5. Revisar y finalizar

Confirme el resumen y haga clic en **Guardar y Finalizar** para escribir los datos.

![Review summary and save](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-6.jpg)

Verá un mensaje de éxito cuando la importación esté completa.

![Success confirmation](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-7.jpg)

---

## After You Import

### Use your new table in GC Explorer

Open **GC Explorer** and add your newly created table to a View to explore or publish.

![Add the new table in GC Explorer](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-9.jpg)

See: [GC Explorer](/reference/gc-toolkit/gc-explorer/)

:::info

If you are using [Superset](/reference/gc-toolkit/superset/), or any other tool that uses PostgreSQL as a data source, you can use also access the uploaded data there.

:::


### Access your uploaded files in File Browser

The importer saves both the **original** file and any **transformed** output in a folder named after your table (e.g., `my_kobo_toolbox_data`).

![Find original and transformed files in File Browser](/img/reference/gc-toolkit/gc-scripts-hub/dataset-uploader-8.jpg)

See: [File Browser](/reference/gc-toolkit/filebrowser/) for share links or downloads.

:::tip

If you uploaded a spatial data file, you can download it here to use in a tool like [QGIS](/reference/companion-applications/qgis/).

:::

### Upload media attachments in File Browser

Often, datasets from tools like CoMapeo, Mapeo, or Locus Map, include media attachments like photos, audio, or video files. You can upload these to File Browser.

1. Open File Browser.
2. Navigate to the dataset folder.
3. Create a new folder for the media attachments like `media`, `photos` or `attachments`. (It is recommended to use the same folder name as what was exported from the tool.)
4. Open the new folder, and upload the media files (either using the drag-and-drop interface, or by clicking the **Upload** button).

:::tip

You can now generate a share link for the media attachments folder and use it in a tool like [GC Explorer](/reference/gc-toolkit/gc-explorer/) to embed the media attachments in a view. See [File Browser: generating share links](/reference/gc-toolkit/filebrowser/#generating-share-links) for more details.

:::

---

## Consejos y solución de problemas

* **Tipo de archivo no compatible.** Conviértalo localmente a uno de los formatos admitidos y luego vuelva a cargarlo.
* **Archivos grandes.** Si la carga se detiene, el archivo podría ser demasiado grande. Intente cambiar el tamaño del archivo a uno menor. Un tamaño máximo recomendado para un archivo es de 5 MB en una computadora, o de 1 a 2 MB en un dispositivo móvil.
* **Carga accidental.** Si accidentalmente carga un archivo, pero no hizo clic en **Guardar y Finalizar**, simplemente puede actualizar la página. (Se limpiará automáticamente.) Si hizo clic en **Guardar y Finalizar**, la tabla de la base de datos tendrá que eliminarse manualmente. (En el futuro, añadiremos una forma de eliminar la tabla.)

_Para cualquier otro problema, contáctenos en [guardianconnector@conservationmetrics.com](mailto:guardianconnector@conservationmetrics.com) o presente un problema en [GitHub](https://github.com/ConservationMetrics/gc-scripts-hub/issues)._

---

## Ver también

* [**Explorador de archivos**](/reference/gc-toolkit/filebrowser/) - para compartir enlaces o descargas de los archivos originales y transformados, o para cargar archivos adjuntos multimedia asociados con el conjunto de datos.
* [**Descripción técnica y arquitectura**](https://github.com/ConservationMetrics/gc-scripts-hub/blob/main/f/apps/gc_dataset_importer.app/README.md) - para desarrolladores, e incluye una [lista de tareas pendientes](https://github.com/ConservationMetrics/gc-scripts-hub/blob/main/f/apps/gc_dataset_importer.app/README.md#todo) para futuras funciones.