---
sidebar_position: 2
tags: [idm]
---

# Principios de Diseño

Al diseñar Guardian Connector para una viabilidad y sostenibilidad a largo plazo, Conservation Metrics se adhiere a un estricto conjunto de principios. Las herramientas incluidas en la solución deben cumplir los siguientes criterios:

### 📦 Software, Hardware y Servicios Gratuitos o Asequibles
En la medida de lo posible, priorizamos herramientas de uso gratuito y servicios de hardware o basados en la nube que estén disponibles a bajo costo. Esto asegura la sostenibilidad a largo plazo del sistema para nuestros socios.

### 🌐 Traducible a Idiomas Locales
Si bien traducir una interfaz de herramienta completa puede no ser siempre factible o necesario, los elementos más críticos para la misión deben ser traducibles a los idiomas locales para garantizar la comprensión y la usabilidad.

### 🔒 Soberanía y Control de Datos

:::info
La soberanía de los datos indígenas significa los derechos e intereses inherentes que tienen los Pueblos Indígenas en relación con la creación, recopilación, acceso, análisis, interpretación, gestión, difusión, reutilización y control de los datos relacionados con los Pueblos Indígenas. En el contexto de la soberanía de los datos indígenas, los datos se consideran un recurso estratégico, y se requiere un marco para su uso ético para promover el bienestar colectivo y la autodeterminación de los Pueblos Indígenas. Restablecer el control sobre los datos, incluidos aquellos que fueron recopilados previamente de los Pueblos Indígenas sin su consentimiento, debe reconocerse como una forma de remedio para abordar las injusticias históricas y corregir narrativas falsas. Esto incluye el establecimiento de mecanismos efectivos para la repatriación de datos.

_From the UN Human Rights Council's Expert Mechanism on the Rights of Indigenous Peoples ["Right of Indigenous Peoples to data, including with regard to data collection and disaggregation"](https://digitallibrary.un.org/record/4087217?v=pdf)_  
:::

En consonancia con los [CARE Principles for Indigenous Data Governance](/guides/guide-data-sovereignty-and-protocols/#what-are-the-care-principles-for-indigenous-data-governance) y el estudio del Mecanismo de Expertos del Consejo de Derechos Humanos de la ONU sobre los Derechos de los Pueblos Indígenas, [Right of Indigenous Peoples to data, including with regard to data collection and disaggregation](https://digitallibrary.un.org/record/4087217?v=pdf), nuestros socios deben poder:
- Ser propietarios de la infraestructura donde se almacenan los datos
- Controlar la recopilación, almacenamiento y transmisión de datos a lo largo del ciclo de vida del proyecto
- Acceder a sus datos en todo momento
- Tener la seguridad de que ninguna parte externa tiene acceso no autorizado a sus datos
- Tomar sus propias decisiones sobre el intercambio de datos con terceros
- Optar por no participar o eliminar sus datos del sistema en cualquier momento con una fricción mínima

Estos derechos son fundamentales e innegociables.

**:arrow_right: Para más información, consulte [Pillares de la soberanía de datos en Guardian Connector](/overview/design-principles/data-sovereignty).**

### 👥 Pila de Software Operable por la Comunidad
Si bien no todas las personas podrán usar todas las herramientas, no incluiremos herramientas que no puedan ser operadas de manera realista por nadie dentro de nuestros equipos de socios de cocreación sin soporte externo. La configuración inicial puede requerir la participación de un proveedor de servicios técnicos, pero la operación continua debe ser factible para los usuarios locales. Nuestro objetivo es seleccionar herramientas que sean accesibles, fáciles de usar y sencillas de aprender y mantener.

### 🏠 Capacidad de Auto-Alojamiento
Aunque Conservation Metrics mantiene instancias de Guardian Connector basadas en la nube disponibles para socios de cocreación (y potencialmente otros, bajo un modelo asequible de pago por servicio), estamos comprometidos a construir una cadena de herramientas que pueda ser completamente autoalojada. Esto incluye:
- Evitar soluciones propietarias que sean inaccesibles para los socios
- Proporcionar documentación y automatización suficientes para permitir una configuración y administración independientes
- Asegurar la compatibilidad con una amplia gama de plataformas de alojamiento (por ejemplo, Azure, AWS, Google Cloud, DigitalOcean y nubes específicas de cada país) o infraestructura local (alojada en las instalaciones)

Esto permite el despliegue en jurisdicciones específicas según las necesidades del socio.

### 🔗 Construido para la interoperabilidad y la extensión
Aunque nos comprometemos con un conjunto enfocado de herramientas integradas, nuestro sistema debe permanecer abierto y flexible. Estructuraremos nuestro almacenamiento de datos y API para permitir una fácil integración de herramientas de terceros en el futuro. Esto facilita que los socios conecten sistemas complementarios a medida que sus necesidades evolucionan.