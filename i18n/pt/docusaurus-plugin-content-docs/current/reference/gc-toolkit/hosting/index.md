---
sidebar_position: 5
tags: [idm, opu, tsp]
---

# Configurar o Conector do Guardian

A pilha Guardian Connector é implantada em uma única máquina virtual (na nuvem ou local) usando o [CapRover](https://caprover.com/). Você poderá provisionar recursos de computação, anexar armazenamento de arquivos, configurar a autenticação e instalar a pilha principal de aplicativos.

### De relance

* 🖥️ **Compute** — Uma máquina virtual em sua nuvem preferida ou hospedada por você mesmo.
* 📂 **Armazenamento de dados**: Armazenamento privado de arquivos para mídia, além de um banco de dados PostgreSQL para dados tabulares.
* 🔐 **Controle de acesso** – Login centralizado (Auth0).
* 📦 **Aplicativos** – Windmill, Superset, Filebrowser, GC Explorer, Servidor de Arquivo Remoto CoMapeo, além de qualquer outro aplicativo através do CapRover.

### Comece

Para guias passo a passo (Azure, DigitalOcean, soluções de auto-montagem), scripts automatizados de implantação e modelos do CapRover, consulte o repositório de implantação no GitHub: **[ConservationMetrics/gc-deploy](https://github.com/ConservationMetrics/gc-deploy)**.