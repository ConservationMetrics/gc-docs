---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# Página de inicio de GC

La Página de inicio de Guardian Connector es la **página principal** de Guardian Connector de tu comunidad: la puerta de entrada a la que llegas después de iniciar sesión. Reúne todo en un solo lugar, para que no necesites recordar direcciones web o buscar la herramienta adecuada.

Desde la Página de inicio puedes:

- Abre los **servicios** que utiliza tu comunidad (como Explorer, Superset, Windmill o File Browser) con un solo clic.
- Conoce las **herramientas que puedes usar con Guardian Connector** para recopilar e importar datos (como CoMapeo, KoboToolbox y más).
- Si eres administrador, puedes gestionar las **cuentas de usuario y los roles**, configurar los **ajustes del tema** y añadir **aplicaciones personalizadas** para tu comunidad.

## 🔑 Inicio de sesión

Cuando visitas la Página de inicio por primera vez, es posible que se te pida que te registres o inicies sesión. Después de registrarte, un miembro de tu comunidad con acceso de administrador necesita **aprobar tu cuenta** y asignarte un rol antes de que puedas ver los servicios. Hasta que eso suceda, no podrás acceder a Guardian Connector.

**Lo que ves en la Página de inicio depende de tu rol.** Diferentes personas necesitan diferentes herramientas, por lo que la página solo muestra los servicios que tienes permiso para usar. Si falta un servicio que esperas, es posible que no esté activado para tu comunidad, o tu rol aún no incluya acceso a él; comunícate con el administrador de tu comunidad.

### 👤 Identificación de usuario {#user-identification}

Una vez que hayas iniciado sesión, el centro de la cabecera superior muestra tu dirección de correo electrónico. Esto te ayuda a confirmar rápidamente qué cuenta está activa actualmente, especialmente cuando trabajas en ordenadores compartidos.

## 🧭 Navegación por la Página de inicio

### 🎓 Recorrido guiado {#guided-tour}

Cuando abres la Página de inicio por primera vez, un **recorrido guiado** interactivo utiliza marcas de entrenador paso a paso para guiarte por la página. El recorrido se adapta a tu rol e idioma localizado, presentando:

- Cada tarjeta de servicio disponible (Explorer, Superset, File Browser, Windmill y cualquier aplicación personalizada).
- Herramientas de recopilación de datos que se conectan a Guardian Connector.
- Controles de encabezado para el modo de visualización, idioma y cierre de sesión.
- Controles de administrador (Aplicaciones personalizadas, Configuración del tema y Gestión de usuarios) si has iniciado sesión como **Administrador**.

El estado de tu recorrido se guarda en el almacenamiento local de tu navegador para que el recorrido no se repita automáticamente en futuras visitas. Puedes **omitir** el recorrido en cualquier momento, o **volver a reproducirlo** cuando quieras haciendo clic en el botón **?** en la cabecera superior derecha.

### 🌙 Modo claro y oscuro {#dark-mode}

La Página de inicio incluye soporte nativo para **modo claro** y **modo oscuro**. Haz clic en el icono de visualización de luna/sol en la cabecera superior derecha para cambiar entre temas claros y oscuros según tus preferencias o entorno de trabajo.

### 🌐 Selección de idioma

Haz clic en el icono del globo terráqueo en la cabecera superior derecha para cambiar el idioma de visualización utilizado en toda la Página de inicio, incluido el recorrido guiado.

## 🚀 Servicios disponibles

Estos son los servicios predeterminados de Guardian Connector a los que tu comunidad puede enlazar desde la Página de inicio. Cada uno aparece como una tarjeta en la que puedes hacer clic para abrirlo en una nueva pestaña.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-1.jpg)

- **[Explorer](/reference/gc-toolkit/gc-explorer/)**: Visualiza los datos de tu comunidad como mapas interactivos, galerías multimedia y un panel de alertas.
- **[Superset](/reference/gc-toolkit/superset/)**: Crea y explora gráficos, paneles y visualizaciones a partir de tus datos.
- **Windmill**: Ejecuta y programa los flujos de trabajo de automatización que recopilan y procesan tus datos (consulta el [Centro de scripts de GC](/reference/gc-toolkit/gc-scripts-hub/)).
- **[File Browser](/reference/gc-toolkit/filebrowser/)**: Navega, descarga y gestiona los archivos brutos y archivos de tu comunidad.

No todos ven todos los servicios. En general, cuanto más avanzada o sensible sea una herramienta, mayor será el rol necesario para abrirla; por ejemplo, Explorer está disponible para la mayoría de los usuarios con sesión iniciada, mientras que Windmill está reservado para los administradores.

También es posible configurar la Página de inicio para mostrar aplicaciones personalizadas, que son aplicaciones que no forman parte de la pila predeterminada de Guardian Connector. Consulta [⚙️ Configuración de aplicaciones personalizadas](#configuring-custom-apps) para obtener más información.

## 🌐 Herramientas que puedes usar con Guardian Connector

La Página de inicio también presenta las herramientas y plataformas de campo que funcionan con Guardian Connector. Estas son las aplicaciones que tu comunidad puede usar para **recopilar datos en el campo**, datos que luego fluyen a Guardian Connector para su visualización y análisis.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-2.jpg)

- **[CoMapeo](/reference/core-integrations/comapeo/)**: Cartografía y monitoreo con prioridad sin conexión en un dispositivo móvil.
- **[KoboToolbox](/reference/core-integrations/kobotoolbox/)** y **ODK**: Formularios y encuestas que funcionan en línea y sin conexión.
- **[Timelapse](/reference/core-integrations/timelapse/)**: Revisión y anotación de imágenes de trampas de cámara para el monitoreo de la biodiversidad.

Guardian Connector también se conecta con otras herramientas como **ArcGIS Survey123**, **Locus Map**, **Global Forest Watch**, **SMART** y más. Para obtener información sobre todo lo que se puede conectar, consulta el [Centro de scripts de GC](/reference/gc-toolkit/gc-scripts-hub/).

## 🔧 Para administradores

### 👥 Gestión de usuarios {#user-management}

Si eres un **administrador**, la Página de inicio te ofrece un área de Gestión de Usuarios para controlar quién puede acceder al Guardian Connector de tu comunidad y qué pueden hacer.

Desde aquí puedes:

- **Buscar** personas por nombre o correo electrónico.
- Consulta el **estado** de cada persona —si su cuenta está *Aprobada* o aún *Pendiente*—, junto con su rol y cuándo inició sesión por última vez.
- **Aprobar (o desaprobar) una cuenta.** Solo los usuarios aprobados pueden acceder a los servicios.
- **Asignar un rol** que decide qué servicios puede abrir cada persona.
- **Eliminar una cuenta** si ya no debería tener acceso.

Los roles actualmente disponibles, de menor a mayor acceso, son:

- **Sesión iniciada**: Sesión iniciada, pero sin acceso a servicios restringidos aún. Solo puede acceder a vistas de conjuntos de datos públicos en [GC Explorer](/reference/gc-toolkit/gc-explorer/#dataset-visibility-control).
- **Invitado**: Acceso limitado, adecuado para visitantes o socios. Puede acceder a vistas de conjuntos de datos compartidos con invitados en GC Explorer y se asigna al rol **Gamma** en [Superset](/reference/gc-toolkit/superset/user-roles/).
- **Miembro**: Acceso diario para los miembros de la comunidad. Puede acceder a las vistas de conjuntos de datos de miembros en GC Explorer y se asigna al rol **Alpha** en Superset.
- **Administrador**: Acceso completo a todo —incluyendo Windmill, todas las vistas de conjuntos de datos, configuraciones y esta área de Gestión de Usuarios— y se asigna al rol de **Admin** en Superset.

Cuando apruebas a alguien y le asignas el rol correcto, los servicios que se le permite usar aparecerán en su Página de inicio y sus permisos en [GC Explorer](/reference/gc-toolkit/gc-explorer/#dataset-visibility-control) y [Superset](/reference/gc-toolkit/superset/user-roles/) se actualizarán en su próximo inicio de sesión.

### 🎨 Configuración del tema

La Configuración del Tema te permite personalizar la marca de tu comunidad en la Página de inicio.

Desde aquí puedes añadir:

- Una **URL de logotipo**, que aparece en la página de inicio.
- Una **URL de imagen de fondo**, que se utiliza como fondo en la pantalla de inicio de sesión.

### ⚙️ Configuración de aplicaciones personalizadas {#configuring-custom-apps}

Si tu comunidad tiene otras aplicaciones ejecutándose en Guardian Connector, la página **Aplicaciones personalizadas** te permite crear tarjetas similares a los servicios predeterminados, como Explorer, Superset y File Browser. Cada tarjeta se abre en su propio subdominio, para que las personas puedan acceder a tus aplicaciones personalizadas desde la Página de inicio de la misma manera que abren las integradas.

Para cada aplicación personalizada que puedes agregar, un nombre, subdominio, descripción, icono y etiquetas.

## ℹ️ ¿Qué versión de la aplicación estoy usando?

If you ever need to know which version of the Landing Page you are using — for example, when reporting a problem — open the `/_info` endpoint on the app. Add `/_info` to the end of the Landing Page address in your browser (for example, <ParamLink template="https://{alias}.guardianconnector.net/_info" paramName="alias" defaultValue="alias">https://<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/_info</ParamLink>). You do not need to sign in.

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
