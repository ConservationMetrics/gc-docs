---
sidebar_position: 5
tags: [itu-3, opu, tsp]
---
import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# De CoMapeo a Explorer

Esta guía es para [operadores](/reference/gc-toolkit/gc-scripts-hub/user-roles/#operator) de Guardian Connector para poder crear un flujo de trabajo de datos desde **CoMapeo** a un mapa y vistas de galería de **Guardian Connector Explorer**. Este proceso comienza con la recopilación de datos de CoMapeo y termina con un mapa configurable y visualizaciones de galería.
El objetivo es preservar sus datos de CoMapeo y visualizarlos a través de mapas interactivos. Esto es útil para monitorear la recopilación de datos en curso y crear visualizaciones claras para el análisis.

El flujo de trabajo involucra las siguientes herramientas:

- **[CoMapeo](../../core-integrations/comapeo/)** – La aplicación de monitoreo y mapeo de territorio.
- **[Windmill](../../gc-toolkit/gc-scripts-hub/)** – Gestiona la ingesta y el procesamiento de datos, transfiriéndolos de CoMapeo al almacén de datos.
- **PostgreSQL** – La base de datos donde Guardian Connector almacena y pone sus datos a disposición para el análisis.
- **[Guardian Connector Explorer](../../gc-toolkit/gc-explorer/)** – La herramienta de visualización utilizada para crear vistas de mapa basadas en los datos almacenados.

## 1. Recopilación de datos: CoMapeo

### Configuración inicial

Solo necesita hacer esto una vez para configurar la aplicación CoMapeo.

1.  **Instalar CoMapeo**

    Si aún no la tiene, instálela [desde Play Store](https://play.google.com/store/apps/details?id=com.comapeo).

2.  **Inicialice su cuenta**

    Abra la aplicación y siga las instrucciones para configurar su cuenta de usuario.

### Flujo de trabajo de recopilación de datos

Nos remitiremos a la documentación oficial de CoMapeo para obtener instrucciones detalladas sobre cómo crear proyectos y recopilar datos.
En resumen, usted necesita:

1.  **Crear un proyecto CoMapeo**

    El proyecto contendrá todas sus observaciones, incluyendo imágenes, audios, trayectorias y puntos. Le permitirá colaborar con otros en la recopilación de datos. Este proyecto se utilizará para preservar los datos dentro de Guardian Connector.

2.  **Intercambiar datos del proyecto CoMapeo con Guardian Connector**

Para intercambiar datos de un proyecto con su instancia de Guardian Connector, debe configurar su Servidor de Archivo dentro de CoMapeo.
    - Vaya a la configuración de su proyecto dentro de CoMapeo.
    - Add your archive server using the URL of your CoMapeo archive server within Guardian Connector: <ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>

Una vez que la aplicación CoMapeo confirme que ha agregado exitosamente su servidor de archivo de CoMapeo, puede intercambiar sus datos con el servidor de archivo en la pantalla de intercambio de CoMapeo.

:::info

**No comparta** la URL de su servidor de archivo de CoMapeo con nadie en quien no confíe, ya que proporciona acceso a todos los datos recopilados en sus proyectos de CoMapeo.

:::

## 2. Procesamiento de datos: Windmill

Si usted es el [administrador](/reference/gc-toolkit/gc-scripts-hub/user-roles/#administrator) de **Windmill** dentro de su instancia de Guardian Connector, hay un paso adicional que debe realizar **una única vez por instancia de Guardian Connector**.

Necesita configurar su script de Windmill para obtener sus datos del servidor de archivo de CoMapeo y llevarlos a su almacén de datos.

Acceda a su instancia de Windmill en:

**<ParamLink template="https://windmill.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://windmill.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

En Windmill, programará un script para obtener automáticamente nuevos datos del servidor de archivo de CoMapeo y cargarlos en su almacén de datos.

### Crear un Recurso para las credenciales de CoMapeo

Necesitará configurar un **Recurso** de tipo `comapeo_server` con:
- Server URL: **<ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**
- Server Bearer Token: You can find this token in your Comapeo Archive Server's settings within Caprover in this link: **<ParamLink template="https://captain.{alias}.guardianconnector.net/#/apps/details/comapeo" paramName="alias" defaultValue="alias">https://captain.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/#/apps/details/comapeo</ParamLink>** , in the **App Configs** section, you will find the `SERVER_BEARER_TOKEN` Environment Variable.

### Crear una nueva programación

Desde la página **Schedules**, cree una nueva programación con los siguientes parámetros:

| Parameter | Description |
|------------|-------------|
| **Resumen** | Breve descripción de la tarea (por ejemplo, `CoMapeo: fetch data`) |
| **Ruta** | `f/connectors/comapeo/fetch_data` |
| **Descripción** | Explicación detallada opcional |
| **Programación** | Con qué frecuencia debe ejecutarse la tarea (puede usar la interfaz de usuario de "Simplified Builder" para configurar fácilmente la programación). |
| **Ejecutable** | Elija **Script**, luego seleccione `f/connectors/comapeo/comapeo_observations` |
| **comapeo**| El recurso `comapeo_server` que definió previamente |
| **prefijo_tabla_db** |  El nombre de la tabla de la base de datos para los datos importados tendrá este prefijo antepuesto. |

Usando el botón `Save` en la parte superior derecha para guardar su programación.

### Probar su programación

1.  Abra la página **Schedules** y localice su nueva programación.
2.  Verá una lista de ejecuciones anteriores y un menú de **More options** (tres puntos) a la derecha de su programación.
3.  Haga clic en el menú y seleccione **Run now** para probar manualmente la programación.
4.  Puede ir a la pestaña **Runs** para verla ejecutándose con éxito.

Una vez que su script de Windmill esté en funcionamiento, tendrá sus datos disponibles en una tabla de base de datos y sus archivos de CoMapeo disponibles en su explorador de archivos.

El nombre de la tabla tendrá el formato: `{db_table_prefix}_{mapeo project name}`.

## 3. Visualización de datos: Explorer

Acceda a su instancia de Explorer en:

**<ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**

:::info

Para configurar su vista de Explorer, su usuario necesita tener acceso de administrador. Puede pedirle a su administrador de Guardian Connector que configure su rol.

:::

### Configurar la vista de Explorer

1.  **Iniciar sesión en Explorer**

    Use sus credenciales de administrador para iniciar sesión.

2.  **Acceder a la configuración**

    Una vez que inicie sesión, encontrará un botón de **Configuration** en la parte superior de la ventana de Explorer para comenzar a configurar sus vistas.

3.  **Cree sus nuevas Vistas**

    -   Haga clic en el botón **+ Add new table** y elija una tabla de la lista, luego haga clic en **Confirm**.
    -   Localice su tabla recién disponible y acceda a la configuración haciendo clic en el botón de menú a la derecha de la misma.
        Las configuraciones clave a establecer son:

| Parameter | Description |
| :--- | :--- |
| **Vistas** | Map, Gallery |
| **Estilo de Mapbox** | Necesitará una cuenta de Mapbox para acceder a un estilo de mapa. Obtenga la URL del estilo en el formato `mapbox://styles/{username}/{styleId}`. Puede encontrar esta URL en su cuenta de Mapbox Studio, en la sección **Styles**. Haga clic en el menú de opciones de su estilo deseado y seleccione la opción **Style URL** para copiarla. |
| **Token de acceso de Mapbox** | Puede obtenerlo desde la página de su cuenta de Mapbox. Vaya a la sección **Tokens** y haga clic en **+ Create a token**. Asígnele un nombre significativo, haga clic en **Create token** y luego copie el token generado para usarlo en Explorer. |
| **Nivel de zoom** | El nivel de zoom para la vista del mapa (0-22). |
| **Latitud central** | La latitud del punto central para la vista del mapa. |
| **Longitud central** | La longitud del punto central para la vista del mapa. |
| **Ruta base para medios** | This is the URL used to share images and audio files downloaded from CoMapeo. To get this URL, go to your File Browser at **<ParamLink template="https://files.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://files.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>**, locate the folder configured in your Windmill instance, and click the **Share** button. Please see the [File Browser: generating share links](/reference/gc-toolkit/filebrowser/#generating-share-links) section for more guidance on how to format the share link for use in GC Explorer. |

:::info

Para determinar parámetros del mapa como el nivel de zoom y la latitud/longitud del centro, puede ser útil utilizar la herramienta [Mapbox's Location Helper](https://labs.mapbox.com/location-helper/).

:::

5.  **Publicar las Vistas**

Una vez guardadas, sus nuevas vistas de mapa y galería serán visibles para los usuarios que accedan a la instancia de Explorer.

---

✅ **¡Ha completado el flujo de trabajo completo!**

Sus datos de CoMapeo ahora fluyen automáticamente de CoMapeo → Windmill → PostgreSQL → Explorer, listos para visualización y análisis.