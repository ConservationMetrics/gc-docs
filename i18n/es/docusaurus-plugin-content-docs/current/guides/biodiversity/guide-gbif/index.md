---
sidebar_position: 4
tags: [itu-3, opu, tsp]
---

# GBIF: Descubriendo y Publicando Registros de Biodiversidad

[GBIF](https://www.gbif.org/) — la Infraestructura Mundial de Información en Biodiversidad — es una red internacional y una infraestructura de datos abiertos para registros de ocurrencias de biodiversidad. Museos, herbarios, agencias gubernamentales, proyectos de investigación y plataformas de ciencia ciudadana publican conjuntos de datos en GBIF para que cualquiera pueda buscar, mapear y descargar información sobre *dónde* y *cuándo* se han documentado especies en todo el mundo.

Para las organizaciones comunitarias, GBIF es a menudo el índice público más amplio de registros de biodiversidad que pueden relacionarse con un territorio: no solo el monitoreo comunitario reciente, sino también colecciones históricas de especímenes, datos de encuestas y observaciones aportadas por investigadores e instituciones externas durante muchas décadas.

:::info

Para una descripción concisa de la misión y la red de GBIF, consulta [¿Qué es GBIF?](https://www.gbif.org/what-is-gbif) en el sitio web de GBIF.

:::

Los datos de GBIF son potentes, pero también se agregan de muchas fuentes externas. Las comunidades deberían tratarlos primero como una **herramienta de descubrimiento e inventario** — una forma de aprender lo que existe en los archivos públicos — en lugar de como conocimiento territorial autoritario por sí solos. GBIF ha establecido un [grupo de trabajo sobre gobernanza de datos indígenas](https://www.gbif.org/news/1Ke3Gk2USgdIW5OgDlBIKY/open-data-for-people-and-purpose-gbif-establishes-task-group-on-indigenous-data-governance), buscando implementar los [Principios CARE para la Gobernanza de Datos Indígenas](https://www.gida-global.org/care) en cómo opera GBIF y apoya el uso responsable de datos.

## ¿Cómo agrega GBIF los datos?

GBIF no recopila datos de campo por sí mismo. En cambio, los **publicadores** —instituciones, proyectos y plataformas— registran **conjuntos de datos** y comparten registros de ocurrencias estandarizados a través de la red de GBIF. Cada registro suele incluir un nombre de especie (o taxón superior), una fecha, una ubicación y metadatos sobre cómo se recopiló el registro (por ejemplo, si es un espécimen conservado, una observación humana o una observación de máquina).

Los datos llegan a GBIF a través de muchos canales, incluyendo:

- **Colecciones de historia natural** — registros de especímenes de museos y herbarios
- **Portales nacionales y regionales de biodiversidad** — programas de monitoreo de gobiernos y ONG
- **Proyectos de investigación** — encuestas de campo, estudios ecológicos y redes de monitoreo
- **Plataformas de ciencia ciudadana** — incluyendo [iNaturalist](/guides/biodiversity/guide-inaturalist/), que exporta observaciones elegibles de Grado de Investigación a GBIF en un calendario regular

Debido a que GBIF normaliza registros de tantas fuentes, una sola búsqueda sobre tu territorio puede mostrar conjuntos de datos que quizás no sabías que existían, junto con información sobre **quién los publicó**, **cuándo** se realizaron las observaciones y **qué tipo de evidencia** representa cada registro.

:::note

Los registros en GBIF reflejan lo que los publicadores han elegido compartir bajo sus propias políticas y licencias de datos. Pueden estar incompletos, duplicados en diferentes conjuntos de datos, georreferenciados de forma imprecisa o incluir ubicaciones de especies culturalmente sensibles. Siempre interpreta los resultados de GBIF en el contexto de la comunidad y junto con tus propios marcos de gobernanza.

:::

## ¿Por qué las organizaciones comunitarias querrían datos de GBIF?

GBIF es más útil cuando una comunidad quiere entender el **registro público existente** de la documentación de la biodiversidad en o cerca de su territorio, antes de decidir si solicitar datos, contactar a los publicadores o importar registros para un análisis más profundo.

### 🔍 Inventario y descubrimiento

Antes de descargar registros de ocurrencias individuales, es útil ver qué sabe GBIF sobre tu territorio —quién publicó los datos, qué especies aparecen y en qué período de tiempo. CMI ofrece una herramienta gratuita para el navegador que facilita y agiliza este resumen:

:::important Búsqueda en el Mapa de GBIF

**[Abrir la herramienta →](https://conservationmetrics.github.io/gbif-map-search/)** 

Dibuja un recuadro o suelta un límite GeoJSON de un área comunitaria para resumir ocurrencias, especies, conjuntos de datos, publicadores, años y base del registro. Se ejecuta en tu navegador y no se requiere una cuenta de GBIF. Para ver y descargar registros completos, haz clic en el botón "Ver en GBIF" después de la consulta.

:::

Ese resumen ayuda a responder preguntas como:

- ¿Quién recopiló datos aquí y cuándo?
- ¿Qué especies estaban documentando?
- ¿Qué instituciones poseen especímenes u observaciones de nuestro territorio?
- ¿Se están publicando especies culturalmente sensibles?
- ¿Hay conjuntos de datos que no sabíamos que existían?
- ¿Son precisos los registros sobre nuestro territorio?

Exporta las tablas de resumen a formato de hoja de cálculo para compartir los resultados en una reunión o adjuntarlos a una revisión de gobernanza de datos.

### 📥 Importación de datos

Cuando una comunidad necesita los registros subyacentes —no solo los recuentos—, la [API de Descargas](https://techdocs.gbif.org/en/data-use/api-downloads) de GBIF puede recuperar todos los datos de ocurrencia dentro de un polígono territorial (u otro filtro), sujetos a los términos de uso de GBIF y las licencias de cada conjunto de datos. Las descargas suelen entregarse como Darwin Core Archive (DwC-A) o formatos tabulares similares, adecuados para mapeo y análisis en GIS o herramientas de base de datos.

Posibles casos de uso incluyen:

1. **Mapeo de registros de ocurrencia** — por ejemplo, filtrar una descarga para ver dónde se encuentran los registros de jaguares (*Panthera onca*) en relación con los límites comunitarios, las áreas protegidas o los sitios de monitoreo recientes.
2. **Comparación con programas comunitarios actuales** — en principio, los registros importados de GBIF podrían superponerse con datos recientes de Guardian Connector o de socios para ver si los registros públicos históricos se alinean con el esfuerzo de campo actual. En la práctica, los registros más antiguos de GBIF suelen ser escasos, identificados de forma inconsistente o mal georreferenciados, por lo que esta comparación es exploratoria más que una base rigurosa.
3. **Explorar patrones amplios** — listas de especies por año, desgloses por tipo de registro (espécimen vs. observación) o contribuciones de publicadores, con un espíritu similar a la exploración de tendencias en iNaturalist — aunque GBIF agrega muchos tipos de conjuntos de datos y períodos de tiempo, por lo que los patrones reflejan el archivo público combinado en lugar de un único proyecto comunitario.

:::tip Cómo descargar datos de GBIF

Usa la herramienta [GBIF Map Search](https://conservationmetrics.github.io/gbif-map-search/) para buscar GBIF en tu área de interés y luego presiona el botón "Ver en GBIF" para descargar los registros completos.

También tenemos un conector para datos de GBIF disponible en [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/), que puede programarse para ejecutarse regularmente.

:::

## ¿Por qué las organizaciones comunitarias querrían (o no) compartir con GBIF?

Si las observaciones de tu comunidad deben aparecer en GBIF, por ejemplo, mediante el uso de [iNaturalist](/guides/biodiversity/guide-inaturalist/), es una elección de gobernanza, no un requisito técnico. Ambos resultados son válidos dependiendo de tus objetivos.

#### Razones para mantener los datos de observación fuera de GBIF:

- **Privacidad y datos comunitarios.** Algunos registros documentan especies o lugares que son culturalmente sensibles, vinculados a derechos de recolección o destinados a permanecer dentro de la comunidad. Por ejemplo, un programa de guardianes podría registrar ubicaciones de plantas útiles sin querer que las coordenadas precisas sean descubribles en todo el mundo. Una licencia de observación restrictiva (por ejemplo, All Rights Reserved) mantiene los datos disponibles para tu proyecto de iNaturalist mientras los excluye de la exportación a GBIF.
- **Gestión territorial.** Una nación o comunidad puede preferir que el conocimiento sobre la biodiversidad de su territorio sea accedido a través de su propio protocolo —no agrupado globalmente sin consentimiento. Mantener los datos fuera de GBIF puede alinearse con los principios de [soberanía de datos indígenas](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/) mientras se sigue utilizando iNaturalist para mapeo interno, capacitación e informes.

#### Razones para compartir datos de observación a través de GBIF:

- **Reconocimiento en la investigación global.** Cuando quieres que la biodiversidad de tu territorio sea documentada en la literatura científica, modelos de distribución de especies o evaluaciones de conservación, GBIF hace que tus registros sean citables y descubribles. Por ejemplo, las observaciones comunitarias de una orquídea rara vez registrada o una extensión de rango para un ave migratoria pueden llenar vacíos que los investigadores utilizan en las revisiones de la Lista Roja de la UICN o en estudios revisados por pares.
- **Visibilidad en procesos globales.** Gobiernos y ONG recurren a GBIF para informes de la Convención sobre la Diversidad Biológica (CBD), planificación de áreas protegidas y monitoreo de especies invasoras. Contribuir observaciones de Grado de Investigación bajo una licencia abierta ayuda a asegurar que el esfuerzo de monitoreo de tu comunidad se cuente en los conjuntos de datos que dan forma a las decisiones de conservación regionales e internacionales —no solo en iNaturalist.

:::tip

GBIF tiene una guía útil sobre [cómo publicar datos de biodiversidad en GBIF](https://ipt.gbif.org/manual/en/ipt/latest/how-to-publish) con hojas de cálculo ejemplares para diferentes tipos de datos. Como se señala, por ejemplo, en la [página de datos de ocurrencia](https://ipt.gbif.org/manual/en/ipt/latest/occurrence-data), GBIF recomienda usar la plantilla de Excel y usarla para subir tus datos a GBIF:

> En última instancia, tus datos deben transformarse en una estructura de tabla utilizando nombres de términos Darwin Core (DwC) como nombres de columna.
>
> Intenta introducir tus datos en la [plantilla de Excel](https://ipt.gbif.org/manual/en/ipt/latest/occurrence-data#templates), que incluye todos los [campos DwC requeridos](https://ipt.gbif.org/manual/en/ipt/latest/occurrence-data#Required%20DwC%20Fields) y los [campos DwC recomendados](https://ipt.gbif.org/manual/en/ipt/latest/occurrence-data#Recommended%20DwC%20Fields).

Si esto resulta difícil o lleva mucho tiempo, por favor, ponte en contacto con nosotros con tu caso de uso; podríamos considerar el diseño de una herramienta de [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) que mapee los campos DwC de GBIF a los datos que tienes en tu propio sistema. Pero primero, por favor, prueba la plantilla de Excel y comprueba si te funciona.

:::

## 📚 Lectura adicional

- [Piloto de GBIF usando etiquetas TK y BC](https://localcontexts.org/gbif-pilot-using-tk-and-bc-labels/)
- Pankararu, C.J., Teixidor-Toneu, I., Odonne, G. et al. [Una infraestructura global de datos de uso de la biodiversidad que reconoce el conocimiento indígena y local.](https://www.nature.com/articles/s44185-026-00121-0) npj biodivers 5, 7 (2026). https://doi.org/10.1038/s44185-026-00121-0
- [Guía de Referencia Rápida de Darwin Core Archive](https://dwc.tdwg.org/terms/)
