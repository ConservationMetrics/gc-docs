---
sidebar_position: 5
tags: [idm, opu, tsp]
---

# Aplicaciones Personalizadas

Más allá del kit de herramientas principal, las instancias de Guardian Connector pueden incluir servicios adicionales que soportan flujos de trabajo especializados. Estas herramientas son opcionales: despliéguelas cuando un proyecto necesite una experiencia web personalizada, exploración de medios de vida silvestre, u otra capacidad que no esté cubierta solo por GC Explorer o Superset.

:::tip

Since these tools are not part of the regular Guardian Connector toolkit, you may require assistance from a Guardian Connector system administrator to deploy or configure them. 
:::

:::note

Es posible mostrar tarjetas para estas herramientas en la [Página de inicio](/reference/gc-toolkit/gc-landing-page/) accediendo a la página de **Aplicaciones Personalizadas** como usuario Administrador. Allí, puede añadir tarjetas para cada herramienta a la página de inicio.
:::

## 🌐 Servidor HTTP de GC

El [Servidor HTTP de GC](https://github.com/conservationmetrics/gc-http-server) es un servicio ligero para servir contenido estático directamente desde el lago de datos de Guardian Connector. Ejecuta un servidor web HTTPD mínimo y expone HTML, JavaScript, CSS, imágenes y otros activos estáticos a través de HTTP, sin una canalización de construcción o alojamiento separada.

Esto encaja con el objetivo de Guardian Connector de permitir que las comunidades controlen tanto sus datos como las aplicaciones construidas a su alrededor. Cargue una carpeta en el lago de datos con [Explorador de Archivos](/reference/gc-toolkit/filebrowser/), apunte el servidor a ese directorio, y el sitio estará disponible en la web. CapRover también puede proteger la aplicación con autenticación incorporada cuando el acceso deba ser restringido.

### Cuándo usarlo

GC Explorer y Superset cubren muchas necesidades de visualización. Use GC HTTP Server cuando un proyecto necesite una experiencia totalmente personalizada, por ejemplo, un mapa con calidad de presentación, un sitio de narración de historias o un panel de control a medida para una audiencia específica.

Un flujo de trabajo típico:

1. Ingerir datos de campo con el [Centro de Scripts de GC](/reference/gc-toolkit/gc-scripts-hub/) (por ejemplo, observaciones de CoMapeo).
2. Cree su propio frontend (Leaflet, Mapbox GL JS, OpenLayers u otro framework).
3. Suba la aplicación al lago de datos con el [Explorador de Archivos](/reference/gc-toolkit/filebrowser/).
4. Despliegue GC HTTP Server y configure la variable de entorno `DIRECTORY` con la ubicación de la carpeta subida.

Tanto los conjuntos de datos como la aplicación web residen entonces en el lago de datos, manteniendo la experiencia ligera y bajo el control de la comunidad.

:::caution

Una aplicación personalizada debe ser mantenida. Un socio de soporte técnico necesita mantenerla funcionando a medida que sus datos y Guardian Connector cambian, y dar soporte a las personas que la usan. Eso requiere el mayor esfuerzo continuo para una solución única construida para un solo proyecto. Una aplicación generada por una herramienta de IA conlleva el mismo costo y riesgo.

Antes de solicitar o añadir una, pregunte si [GC Explorer](/reference/gc-toolkit/gc-explorer/) o [Superset](/reference/gc-toolkit/superset/) ya pueden proporcionar la experiencia, o si una aplicación existente podría ser adoptada en su lugar.

:::

## 🐻 Visualizador de Vida Silvestre de GC

El [Visualizador de Vida Silvestre de GC](https://github.com/conservationmetrics/gc-wildlife-viewer) es una aplicación R Shiny para explorar medios de cámaras trampa anotados (imágenes y videos) en un mapa con filtros. Está diseñado para ser desplegado como parte de una instancia CapRover de Guardian Connector junto con el resto del kit de herramientas.

La aplicación funciona con exportaciones de [Timelapse](/reference/core-integrations/timelapse/) -- datos tabulares (CSV), imágenes o videos exportados y miniaturas generadas -- junto con datos de despliegue de cámaras trampa. Las comunidades pueden explorar medios de vida silvestre por ubicación y atributos sin necesidad de abrir Timelapse para cada sesión de revisión.

Consulte el [README del Visualizador de Vida Silvestre de GC](https://github.com/conservationmetrics/gc-wildlife-viewer/blob/main/README.md) para obtener más información sobre cómo desplegar y usar la aplicación.