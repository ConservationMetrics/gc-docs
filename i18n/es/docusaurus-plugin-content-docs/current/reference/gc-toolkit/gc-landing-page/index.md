---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# Página de inicio de GC

La Página de inicio de Guardian Connector es la **página principal** del Guardian Connector de tu comunidad: la puerta de entrada a la que llegas después de iniciar sesión. Reúne todo en un solo lugar, para que no necesites recordar direcciones web o buscar la herramienta adecuada.

Desde la Página de inicio puedes:

- Abre los **servicios** que utiliza tu comunidad (como Explorer, Superset, Windmill o Filebrowser) con un solo clic.
- Infórmate sobre las **herramientas que puedes usar con Guardian Connector** para recopilar e introducir datos (como CoMapeo, KoboToolbox y más).

## 🔑 Iniciar sesión

Cuando visitas la Página de inicio por primera vez, es posible que se te pida que te registres o inicies sesión. Después de registrarte, un miembro de tu comunidad con acceso de administrador necesita **aprobar tu cuenta** y asignarte un rol antes de que puedas ver los servicios. Hasta que eso ocurra, no podrás acceder a Guardian Connector.

**Lo que ves en la Página de inicio depende de tu rol.** Diferentes personas necesitan diferentes herramientas, por lo que la página solo muestra los servicios que tienes permiso para usar. Si falta un servicio que esperas, puede que no esté activado para tu comunidad, o que tu rol aún no incluya acceso a él; ponte en contacto con el administrador de tu comunidad.

## 🚀 Tus servicios

Estos son los servicios de Guardian Connector a los que tu comunidad puede enlazar desde la Página de inicio. Cada uno aparece como una tarjeta en la que puedes hacer clic para abrirlo en una nueva pestaña.

- **[Explorer](/reference/gc-toolkit/gc-explorer/)**: Visualiza los datos de tu comunidad como mapas interactivos, galerías multimedia y un panel de alertas.
- **[Superset](/reference/gc-toolkit/superset/)**: Crea y explora gráficos, paneles y visualizaciones a partir de tus datos.
- **[Filebrowser](/reference/gc-toolkit/filebrowser/)**: Explora, descarga y gestiona los archivos brutos y archivos de tu comunidad.
- **Windmill**: Ejecuta y programa los flujos de trabajo de automatización que recopilan y procesan tus datos (consulta el [Hub de Scripts de GC](/reference/gc-toolkit/gc-scripts-hub/)).

No todos ven todos los servicios. En general, cuanto más avanzada o sensible es una herramienta, mayor es el rol necesario para abrirla; por ejemplo, Explorer está disponible para la mayoría de los usuarios con sesión iniciada, mientras que Windmill está reservado para los administradores.

## 🌐 Herramientas que puedes usar con Guardian Connector

La Página de inicio también presenta las herramientas y plataformas de campo que funcionan con Guardian Connector. Estas son las aplicaciones que tu comunidad puede usar para **recopilar datos en el campo**, datos que luego fluyen a Guardian Connector para su visualización y análisis:

- **[CoMapeo](/reference/connected-applications/comapeo/)**: Mapeo y monitoreo, primero sin conexión, en un dispositivo móvil.
- **[KoboToolbox](/reference/connected-applications/kobotoolbox/)** y **ODK**: Formularios y encuestas que funcionan en línea y sin conexión.
- **[Timelapse](/reference/connected-applications/timelapse/)**: Revisión y anotación de imágenes de cámaras trampa para el monitoreo de la biodiversidad.

Guardian Connector también se conecta con otras herramientas como **ArcGIS Survey123**, **Locus Map**, **Global Forest Watch**, **SMART** y más. Para obtener información sobre todo lo que se puede conectar, consulta el [Hub de Scripts de GC](/reference/gc-toolkit/gc-scripts-hub/).

## 👥 Gestión de Usuarios (para Administradores)

Si eres **administrador**, la Página de inicio te ofrece un área de Gestión de Usuarios para controlar quién puede acceder al Guardian Connector de tu comunidad y qué pueden hacer.

Desde aquí puedes:

- **Busca** personas por nombre o correo electrónico.
- Consulta el **estado** de cada persona — si su cuenta está *Aprobada* o aún *Pendiente* — junto con su rol y cuándo inició sesión por última vez.
- **Aprueba (o desaprueba) una cuenta.** Solo los usuarios aprobados pueden acceder a los servicios.
- **Asigna un rol** que decida qué servicios puede abrir cada persona.
- **Elimina una cuenta** si ya no debería tener acceso.

Los roles actualmente disponibles, de menor a mayor acceso, son:

- **Sesión iniciada**: Sesión iniciada, pero sin acceso a servicios todavía.
- **Invitado**: Acceso limitado, adecuado para visitantes o socios.
- **Miembro**: Acceso diario para los miembros de la comunidad.
- **Administrador**: Acceso completo, incluida esta área de Gestión de Usuarios.

Cuando apruebas a alguien y le asignas el rol adecuado, los servicios que se les permite usar aparecerán en su Página de inicio la próxima vez que inicien sesión.