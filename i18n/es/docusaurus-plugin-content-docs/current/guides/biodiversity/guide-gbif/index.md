---
sidebar_position: 4
tags: [itu-3, opu, tsp]
---

# 🌍+🔍 Descubriendo registros de biodiversidad con GBIF

[GBIF](https://www.gbif.org/) —la Infraestructura Mundial de Información en Biodiversidad— es una red internacional y una infraestructura de datos abiertos para registros de ocurrencias de biodiversidad. Museos, herbarios, agencias gubernamentales, proyectos de investigación y plataformas de ciencia ciudadana publican conjuntos de datos en GBIF para que cualquiera pueda buscar, mapear y descargar información sobre *dónde* y *cuándo* se han documentado especies en todo el mundo.

Para las organizaciones comunitarias, GBIF es a menudo el índice público más amplio de registros de biodiversidad que pueden relacionarse con un territorio: no solo el monitoreo comunitario reciente, sino también colecciones históricas de especímenes, datos de encuestas y observaciones contribuidas por investigadores e instituciones externas durante muchas décadas.

:::tip

Para una visión concisa de la misión y la red de GBIF, consulte [¿Qué es GBIF?](https://www.gbif.org/what-is-gbif) en el sitio web de GBIF.

:::

Los datos de GBIF son potentes, pero también se agregan de muchas fuentes externas. Las comunidades deberían tratarlos primero como una **herramienta de descubrimiento e inventario** —una forma de aprender lo que existe en los archivos públicos—, en lugar de como conocimiento territorial autorizado por sí mismos. GBIF ha establecido un [grupo de trabajo sobre gobernanza de datos indígenas](https://www.gbif.org/news/1Ke3Gk2USgdIW5OgDlBIKY/open-data-for-people-and-purpose-gbif-establishes-task-group-on-indigenous-data-governance), buscando implementar los [Principios CARE para la Gobernanza de Datos Indígenas](https://www.gida-global.org/care) en cómo GBIF opera y apoya el uso responsable de los datos.

## ¿Cómo agrega GBIF los datos?

GBIF no recopila datos de campo por sí mismo. En cambio, los **publicadores** —instituciones, proyectos y plataformas— registran **conjuntos de datos** y comparten registros de ocurrencias estandarizados a través de la red de GBIF. Cada registro suele incluir un nombre de especie (o taxón superior), una fecha, una ubicación y metadatos sobre cómo se recopiló el registro (por ejemplo, si es un espécimen conservado, una observación humana o una observación de máquina).

Los datos llegan a GBIF a través de muchos canales, incluyendo:

- **Colecciones de historia natural** — registros de especímenes de museos y herbarios.
- **Portales nacionales y regionales de biodiversidad** — programas de monitoreo de gobiernos y ONG.
- **Proyectos de investigación** — encuestas de campo, estudios ecológicos y redes de monitoreo.
- **Plataformas de ciencia ciudadana** — incluyendo [iNaturalist](/guides/biodiversity/guide-inaturalist/), que exporta observaciones de Grado de Investigación elegibles a GBIF en un calendario regular.

Debido a que GBIF normaliza registros de tantas fuentes, una sola búsqueda sobre su territorio puede sacar a la luz conjuntos de datos que quizás no conocía que existían — junto con información sobre **quién los publicó**, **cuándo** se hicieron las observaciones y **qué tipo de evidencia** representa cada registro.

:::note

Los registros en GBIF reflejan lo que los publicadores han elegido compartir bajo sus propias políticas de datos y licencias. Pueden ser incompletos, duplicados entre conjuntos de datos, georreferenciados de forma imprecisa o incluir ubicaciones de especies culturalmente sensibles. Siempre interprete los resultados de GBIF en el contexto comunitario y junto con sus propios marcos de gobernanza.

:::

## ¿Por qué las organizaciones comunitarias querrían datos de GBIF?

GBIF es más útil cuando una comunidad quiere comprender el **registro público existente** de documentación de biodiversidad en o cerca de su territorio, antes de decidir si solicitar datos, contactar a los publicadores o importar registros para un análisis más profundo.

### 🔍 Inventario y descubrimiento

Antes de descargar registros de ocurrencia individuales, ayuda ver qué sabe GBIF sobre su territorio — quién publicó los datos, qué especies aparecen y durante qué período de tiempo. CMI ofrece una herramienta de navegador gratuita que hace ese resumen rápido y fácil:

:::tip Búsqueda en el Mapa de GBIF

**[Abrir la herramienta →](https://conservationmetrics.github.io/gbif-map-search/)** 

Dibuje un cuadro o suelte un límite GeoJSON de un área comunitaria para resumir ocurrencias, especies, conjuntos de datos, publicadores, años y base del registro. Funciona en su navegador y no se requiere una cuenta GBIF. Para ver y descargar los registros completos, haga clic en el botón "Ver en GBIF" después de la consulta.

:::

Ese resumen ayuda a responder preguntas como:

- ¿Quién recopiló datos aquí y cuándo?
- ¿Qué especies estaban documentando?
- ¿Qué instituciones tienen especímenes u observaciones de nuestro territorio?
- ¿Se están publicando especies culturalmente sensibles?
- ¿Hay conjuntos de datos que no conocíamos?
- ¿Son precisos los registros sobre nuestro territorio?

Exporte las tablas resumen a formato de hoja de cálculo para compartir los resultados en una reunión o adjuntarlos a una revisión de gobernanza de datos.

### 📥 Importación de datos

Cuando una comunidad necesita los registros subyacentes —no solo los recuentos—, la [API de Descargas](https://techdocs.gbif.org/en/data-use/api-downloads) de GBIF puede recuperar todos los datos de ocurrencia dentro de un polígono territorial (u otro filtro), sujetos a los términos de uso de GBIF y las licencias de cada conjunto de datos. Las descargas suelen entregarse como Darwin Core Archive (DwC-A) o formatos tabulares similares, adecuados para el mapeo y el análisis en herramientas SIG o de bases de datos.

Los posibles casos de uso incluyen:

1. **Mapeo de registros de ocurrencias** — por ejemplo, filtrando una descarga para ver dónde se encuentran los registros de jaguar (*Panthera onca*) en relación con los límites comunitarios, áreas protegidas o sitios de monitoreo recientes.
2. **Comparación con programas comunitarios actuales** — en principio, los registros importados de GBIF podrían superponerse con los datos recientes de Guardian Connector o de socios para ver si los registros públicos históricos se alinean con el esfuerzo de campo actual. En la práctica, los registros antiguos de GBIF suelen ser escasos, identificados de forma inconsistente o mal georreferenciados, por lo que esta comparación es exploratoria en lugar de una base rigurosa.
3. **Exploración de patrones amplios** — listas de especies por año, desgloses por tipo de registro (ejemplar vs. observación) o contribuciones de publicadores, con un espíritu similar a la exploración de tendencias en iNaturalist — aunque GBIF agrega muchos tipos de conjuntos de datos y períodos de tiempo, por lo que los patrones reflejan el archivo público combinado en lugar de un único proyecto comunitario.

:::tip

Use la herramienta [GBIF Map Search](https://conservationmetrics.github.io/gbif-map-search/) para buscar su área de interés en GBIF y luego presione el botón "Ver en GBIF" para descargar los registros completos.

Podemos hacer que los flujos de trabajo de descarga regulares de GBIF estén disponibles a través del [Hub de Scripts de GC](/reference/gc-toolkit/gc-scripts-hub/) cuando una comunidad tenga un caso de uso claro: por ejemplo, importaciones programadas a un almacén de Guardian Connector o exportaciones repetibles para un polígono territorial. Contáctenos con sus objetivos y podemos discutir qué tiene sentido.

:::

### ¿Por qué las organizaciones comunitarias querrían (o no) compartir con GBIF?

Si las observaciones de su comunidad deben aparecer en GBIF, por ejemplo, mediante el uso de [iNaturalist](/guides/biodiversity/guide-inaturalist/), es una elección de gobernanza, no un requisito técnico. Ambos resultados son válidos según sus objetivos.

**Razones para mantener los datos de observación fuera de GBIF**

- **Privacidad y datos de la comunidad.** Algunos registros documentan especies o lugares que son culturalmente sensibles, vinculados a derechos de cosecha o destinados a permanecer dentro de la comunidad. Por ejemplo, un programa de guardianes podría registrar ubicaciones de plantas útiles sin que las coordenadas precisas sean descubribles en todo el mundo. Una licencia de observación restrictiva (por ejemplo, Todos los Derechos Reservados) mantiene los datos disponibles para su proyecto de iNaturalist mientras los excluye de la exportación a GBIF.
- **Gestión territorial.** Una nación o comunidad puede preferir que el conocimiento de la biodiversidad de su territorio sea accedido a través de su propio protocolo —no compartido globalmente sin consentimiento. Mantener los datos fuera de GBIF puede alinearse con los principios de [soberanía de datos indígenas](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/) mientras se sigue utilizando iNaturalist para mapeo interno, capacitación e informes.

**Razones para compartir datos de observación a través de GBIF**

- **Reconocimiento en la investigación global.** Cuando desea que la biodiversidad de su territorio sea documentada en la literatura científica, modelos de distribución de especies o evaluaciones de conservación, GBIF hace que sus registros sean citables y descubribles. Por ejemplo, las observaciones comunitarias de una orquídea raramente registrada o una extensión de rango para un ave migratoria pueden llenar vacíos que los investigadores utilizan en las revisiones de la Lista Roja de la UICN o estudios revisados por pares.
- **Visibilidad en procesos globales.** Gobiernos y ONG recurren a GBIF para informes del Convenio sobre la Diversidad Biológica (CDB), planificación de áreas protegidas y monitoreo de especies invasoras. Contribuir con observaciones de Grado de Investigación bajo una licencia abierta ayuda a asegurar que el esfuerzo de monitoreo de su comunidad sea considerado en los conjuntos de datos que dan forma a las decisiones de conservación regionales e internacionales —no solo en iNaturalist.

## 📚 Lectura adicional

- [Piloto de GBIF usando etiquetas TK y BC](https://localcontexts.org/gbif-pilot-using-tk-and-bc-labels/)
- Pankararu, C.J., Teixidor-Toneu, I., Odonne, G. et al. [A global biodiversity use data infrastructure acknowledging indigenous and local knowledge.](https://www.nature.com/articles/s44185-026-00121-0) npj biodivers 5, 7 (2026). https://doi.org/10.1038/s44185-026-00121-0
- [Guía de Referencia Rápida de Darwin Core Archive](https://dwc.tdwg.org/terms/)
