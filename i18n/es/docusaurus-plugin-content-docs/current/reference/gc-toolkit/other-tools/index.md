---
sidebar_position: 5
tags: [idm, opu, tsp]
---

# Otras herramientas

Más allá del kit de herramientas principal, las instancias de Guardian Connector pueden incluir servicios adicionales que soportan flujos de trabajo especializados. Estas herramientas son opcionales: despliégalas cuando un proyecto necesite una experiencia web personalizada, exploración de medios de vida silvestre u otra capacidad que no esté cubierta solo por GC Explorer o Superset.

:::tip

Since these tools are not part of the regular Guardian Connector toolkit, you may require assistance from a Guardian Connector system administrator to deploy or configure them. 
:::

## 🌐 GC HTTP Server

El [GC HTTP Server](https://github.com/conservationmetrics/gc-http-server) es un servicio ligero para servir contenido estático directamente desde el data lake de Guardian Connector. Ejecuta un servidor web HTTPD mínimo y expone HTML, JavaScript, CSS, imágenes y otros activos estáticos a través de HTTP, sin una canalización de compilación o alojamiento separada.

Esto encaja con el objetivo de Guardian Connector de permitir que las comunidades controlen tanto sus datos como las aplicaciones construidas a su alrededor. Sube una carpeta al data lake con [Filebrowser](/reference/gc-toolkit/filebrowser/), apunta el servidor a ese directorio, y el sitio estará disponible en la web. CapRover también puede proteger la aplicación con autenticación incorporada cuando el acceso deba ser restringido.

### Cuándo usarlo

GC Explorer y Superset cubren muchas necesidades de visualización. Usa GC HTTP Server cuando un proyecto necesite una experiencia totalmente personalizada, por ejemplo, un mapa con calidad de presentación, un sitio para contar historias o un panel de control a medida para una audiencia específica.

Un flujo de trabajo típico:

1. Ingresa datos de campo con el [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) (por ejemplo, observaciones de CoMapeo).
2. Crea tu propio frontend (Leaflet, Mapbox GL JS, OpenLayers u otro framework).
3. Sube la aplicación al data lake con [Filebrowser](/reference/gc-toolkit/filebrowser/).
4. Despliega GC HTTP Server y establece la variable de entorno `DIRECTORY` en la ubicación de la carpeta subida.

Tanto los conjuntos de datos como la aplicación web residen entonces en el data lake, manteniendo la experiencia ligera y bajo el control de la comunidad.

## 🐻 GC Wildlife Viewer

El [GC Wildlife Viewer](https://github.com/conservationmetrics/gc-wildlife-viewer) es una aplicación R Shiny para explorar imágenes de cámaras trampa y anotaciones relacionadas en un mapa con filtros. Está diseñada para ser desplegada como parte de una instancia de CapRover de Guardian Connector junto con el resto del kit de herramientas.

La aplicación funciona con exportaciones de [Timelapse](/reference/connected-applications/timelapse/): datos tabulares (CSV), imágenes o videos exportados y miniaturas generadas. Las comunidades pueden explorar medios de vida silvestre por ubicación y atributos sin necesidad de abrir Timelapse para cada sesión de revisión.

### Notas de datos y despliegue

- Prepara una exportación de **selección** de Timelapse (la exportación de conjunto de datos completo aún no es compatible). Consulta [Exportar imágenes para GC Wildlife Viewer](/guides/guide-timelapse-project/step-9-export-for-gc-wildlife/) para obtener una configuración paso a paso.
- Almacena los archivos exportados en el data lake de Guardian Connector para que la aplicación pueda leerlos desde un volumen montado.
- Despliega a través de CapRover como otros servicios de Guardian Connector; el puerto HTTP del contenedor para esta aplicación es `3838`.

Junto con Timelapse y el conector Scripts Hub Timelapse, GC Wildlife Viewer ayuda a convertir el monitoreo de cámaras trampa en una vista accesible y compartible para la revisión y toma de decisiones de la comunidad.
