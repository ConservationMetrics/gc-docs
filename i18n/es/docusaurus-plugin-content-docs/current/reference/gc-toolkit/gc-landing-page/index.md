---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# Página de inicio de GC (Landing Page)

La página de inicio de Guardian Connector (Landing Page) es la **página principal** del Guardian Connector de tu comunidad: la puerta principal a la que llegas después de iniciar sesión. Reúne todo en un solo lugar, para que no necesites recordar direcciones web ni buscar la herramienta adecuada.

Desde la página de inicio (Landing Page) puedes:

- Abre los **servicios** que usa tu comunidad (como Explorer, Superset, Windmill o File Browser) con un solo clic.
- Aprende sobre las **herramientas que puedes usar con Guardian Connector** para recopilar e importar datos (como CoMapeo, KoboToolbox y más).
- Si eres administrador, puedes gestionar **cuentas de usuario y roles**, y configurar los **ajustes de tema**, y añadir **aplicaciones personalizadas** para tu comunidad.

## 🔑 Iniciar sesión

Cuando visitas la página de inicio (Landing Page) por primera vez, es posible que se te pida que te registres o inicies sesión. Después de registrarte, un miembro de tu comunidad con acceso de administrador debe **aprobar tu cuenta** y asignarte un rol antes de que puedas ver los servicios. Hasta que eso suceda, no podrás acceder a Guardian Connector.

**Lo que ves en la página de inicio (Landing Page) depende de tu rol.** Diferentes personas necesitan diferentes herramientas, por lo que la página solo muestra los servicios que tienes permiso para usar. Si falta un servicio que esperas, es posible que no esté activado para tu comunidad, o tu rol aún no incluya acceso a él; comunícate con el administrador de tu comunidad.

## 🚀 Servicios Disponibles

Estos son los servicios predeterminados de Guardian Connector a los que tu comunidad puede vincularse desde la página de inicio (Landing Page). Cada uno aparece como una tarjeta en la que puedes hacer clic para abrirlo en una nueva pestaña.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-1.jpg)

- **[Explorer](/reference/gc-toolkit/gc-explorer/)**: Visualiza los datos de tu comunidad como mapas interactivos, galerías de medios y un panel de alertas.
- **[Superset](/reference/gc-toolkit/superset/)**: Crea y explora gráficos, paneles y visualizaciones a partir de tus datos.
- **Windmill**: Ejecuta y programa los flujos de trabajo de automatización que recopilan y procesan tus datos (consulta el [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)).
- **[File Browser](/reference/gc-toolkit/filebrowser/)**: Explora, descarga y gestiona los archivos y archivos comprimidos de tu comunidad.

No todos ven todos los servicios. En general, cuanto más avanzada o sensible es una herramienta, mayor es el rol necesario para abrirla; por ejemplo, Explorer está disponible para la mayoría de los usuarios con sesión iniciada, mientras que Windmill está reservado para los administradores.

También es posible configurar la página de inicio (Landing Page) para mostrar aplicaciones personalizadas, que son aplicaciones que no forman parte de la pila predeterminada de Guardian Connector. Consulta [⚙️ Configuración de Aplicaciones Personalizadas](#configuring-custom-apps) para obtener más información.

## 🌐 Herramientas que puedes usar con Guardian Connector

La página de inicio (Landing Page) también presenta las herramientas y plataformas de campo que funcionan con Guardian Connector. Estas son las aplicaciones que tu comunidad puede usar para **recopilar datos en el campo**, datos que luego fluyen a Guardian Connector para su visualización y análisis.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-2.jpg)

- **[CoMapeo](/reference/core-integrations/comapeo/)**: Mapeo y monitoreo con prioridad sin conexión en un dispositivo móvil.
- **[KoboToolbox](/reference/core-integrations/kobotoolbox/)** y **ODK**: Formularios y encuestas que funcionan en línea y sin conexión.
- **[Timelapse](/reference/core-integrations/timelapse/)**: Revisión y anotación de imágenes de cámaras trampa para el monitoreo de la biodiversidad.

Guardian Connector también se conecta con otras herramientas como **ArcGIS Survey123**, **Locus Map**, **Global Forest Watch**, **SMART** y más. Para obtener más información sobre todo lo que se puede conectar, consulta el [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/).

## 🔧 Para administradores

### 👥 Gestión de Usuarios {#user-management}

Si eres **administrador**, la página de inicio (Landing Page) te proporciona un área de Gestión de Usuarios para controlar quién puede acceder al Guardian Connector de tu comunidad y qué pueden hacer.

Desde aquí puedes:

- **Busca** personas por nombre o correo electrónico.
- Consulta el **estado** de cada persona —si su cuenta está *Aprobada* o aún *Pendiente*— junto con su rol y la última vez que inició sesión.
- **Aprueba (o desaprueba) una cuenta.** Solo los usuarios aprobados pueden acceder a los servicios.
- **Asigna un rol** que decida qué servicios puede abrir cada persona.
- **Elimina una cuenta** si ya no debe tener acceso.

Los roles actualmente disponibles, de menor a mayor acceso, son:

- **Con sesión iniciada**: Sesión iniciada, pero sin acceso a los servicios aún.
- **Invitado**: Acceso limitado, adecuado para visitantes o socios.
- **Miembro**: Acceso diario para los miembros de la comunidad.
- **Administrador**: Acceso completo, incluida esta área de Gestión de Usuarios.

Cuando apruebas a alguien y le asignas el rol correcto, los servicios que se le permite usar aparecerán en su página de inicio (Landing Page) la próxima vez que inicie sesión.

### 🎨 Configuración del tema

La Configuración de Tema te permite personalizar la marca de tu comunidad en la página de inicio (Landing Page).

Desde aquí puedes añadir:

- Una **URL de logotipo**, que aparece en la página de inicio.
- Una **URL de imagen de fondo**, que se utiliza como fondo en la pantalla de inicio de sesión.

### ⚙️ Configuración de Aplicaciones Personalizadas {#configuring-custom-apps}

Si tu comunidad tiene otras aplicaciones ejecutándose en Guardian Connector, la página de **Aplicaciones Personalizadas** te permite crear tarjetas similares a los servicios predeterminados, como Explorer, Superset y File Browser. Cada tarjeta se abre en su propio subdominio, para que las personas puedan acceder a tus aplicaciones personalizadas desde la página de inicio de la misma manera que abren las integradas.

Para cada aplicación personalizada que puedes añadir: un nombre, subdominio, descripción, icono y etiquetas.

