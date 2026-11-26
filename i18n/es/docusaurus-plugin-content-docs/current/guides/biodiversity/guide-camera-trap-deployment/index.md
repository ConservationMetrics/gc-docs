---
sidebar_position: 0
tags: [itu-3, opu, tsp]
---

# Trampas de Cámara: Despliegue y Recopilación de Datos

## Introduction

Colocar una trampa de cámara en el campo es solo una parte de un despliegue. Un despliegue útil de trampa de cámara también crea un registro fiable de **qué cámara se colocó dónde, durante qué período y bajo qué condiciones**.

Estos metadatos son los que luego permiten que las imágenes y videos se conecten a un sitio, se mapeen correctamente, se comparen entre despliegues y se analicen a lo largo del tiempo.

Esta guía se centra principalmente en **documentar el despliegue, mantenimiento y recuperación de trampas de cámara**. Incluye un protocolo de campo práctico para preparar el equipo, desplegar y dar servicio a las cámaras, y procesar las tarjetas SD después de las visitas de campo. No prescribe un diseño de estudio ecológico particular ni indica exactamente dónde o a qué altura colocar las cámaras, ya que esas decisiones dependen de los objetivos y las especies objetivo del proyecto.

:::important

**Los metadatos de despliegue son datos esenciales de las trampas de cámara**. También son una de las partes más fáciles de pasar por alto o de reconstruir solo a posteriori en un proyecto de trampa de cámara.

Si falta o es inconsistente información como el ID de despliegue, la ubicación, las coordenadas, el ID de la cámara y las fechas de despliegue, las imágenes y videos recolectados por la cámara ya no podrán conectarse de manera fiable a **dónde, cuándo y cómo fueron recolectados**. Esto puede limitar severamente su valor para mapeo, análisis, comparación entre sitios y reutilización a largo plazo.

Recopila esta información **en el momento del despliegue, mantenimiento y recuperación**, en lugar de depender de la memoria o intentar reconstruirla más tarde.

:::

## Resumen de la guía

### [**1. Comprender las sesiones de monitoreo, las cámaras, las ubicaciones y los despliegues**](step-1-concepts)

Distingue cuatro conceptos relacionados — Monitoring Session, ubicación, cámara y despliegue — y cómo construir identificadores que sigan siendo compatibles con GBIF y Camtrap DP.

### [**2. ¿Qué información debe registrarse?**](step-2-what-to-record)

Los campos de despliegue de Camtrap DP que todo proyecto debería recopilar, además de campos adicionales recomendados como Monitoring Session y ID de tarjeta SD, con especial atención a las coordenadas.

### [**3. Elección de una herramienta para la recopilación de datos de despliegue**](step-3-choosing-a-tool)

Cómo elegir entre CoMapeo, ODK, KoboToolbox o un formulario en hoja de cálculo/papel, dependiendo del flujo de trabajo existente del equipo.

### [**4. Protocolo de campo para trampas de cámara**](step-4-field-protocol)

Prepara el equipo y el equipo de monitoreo, planifica una Monitoring Session, estandariza los ajustes de la cámara y sigue procedimientos consistentes para el despliegue, mantenimiento, recuperación y el regreso del campo.

### [**5. Organización de fotos y videos de trampas de cámara**](step-5-organizing-media)

Cómo organizar los medios por proyecto, Monitoring Session y cámara, incluyendo tarjetas SD con múltiples carpetas de medios.

## Enfoque recomendado

Elijas la herramienta que elijas, lo más importante no es la aplicación en sí. Es mantener una relación consistente entre:

```text
PROJECT
  ↓
MONITORING SESSION
  ↓
DEPLOYMENT
 ↙       ↘
CAMERA   LOCATION
  ↓
MEDIA
```

Por ejemplo:

```text
Upper Jatapu Camera Trap Project
        ↓
       MS01
        ↓
     MS01-LC1
      ↙    ↘
    LC1   Creek Crossing
      ↓
    Photos
```

La estructura de archivos correspondiente puede ser mucho más sencilla:

```text
Upper_Jatapu_Camera_Trap_Project/
└── MS01/
    └── LC1/
        └── ...
```

El sistema de archivos se organiza, por lo tanto, en torno a conceptos con los que es fácil trabajar para las personas — **proyecto, Monitoring Session y cámara** — mientras que los metadatos conservan el concepto científico más preciso de un **despliegue** individual.

Si estas relaciones se conservan de manera consistente, las imágenes de las trampas de cámara pueden seguir siendo comprendidas, mapeadas, analizadas y reutilizadas mucho después de su recolección original.

## ¿Qué sigue?

Una vez que los medios de la trampa de cámara se hayan copiado y organizado, consulta la [Guía de anotación de trampas de cámara Timelapse](/guides/biodiversity/guide-timelapse-project/) para revisar y anotar imágenes y videos.

## 📚 Lectura adicional

- [GBIF — Mejores prácticas para gestionar y publicar datos de trampas de cámara](https://docs.gbif.org/camera-trap-guide/en/)
- [Camtrap DP — Paquete de datos de trampa de cámara](https://camtrap-dp.tdwg.org/)
- [Camtrap DP — Campos de despliegue](https://camtrap-dp.tdwg.org/data/#deployments)
- [Documentación de CoMapeo](https://docs.comapeo.app/)
- [ODK — Introducción a las entidades](https://docs.getodk.org/entities-intro/)
- [KoboToolbox — Archivos adjuntos de datos dinámicos](https://support.kobotoolbox.org/dynamic_data_attachment.html)
- [Guía de drones Healthy Country AI para configurar trampas de cámara para proyectos de monitoreo de biodiversidad, para guardaparques indígenas](https://healthycountryai.org/training.php)
