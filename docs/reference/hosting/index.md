---
sidebar_position: 5
tags: [opu, tsp]
---

# Hosting Guardian Connector

The Guardian Connector stack is deployed on a single virtual machine (cloud or on-prem) using [CapRover](https://caprover.com/). You’ll provision compute, attach file storage, set up authentication, and install the core app stack.

### At a glance

* 🖥️ **Compute** — One VM in your cloud of choice or self-hosted.
* 📂 **Data warehouse** — Private file storage for media + PostgreSQL database for tabular data.
* 🔐 **Access control** — Centralized login (Auth0).
* 📦 **Apps** — Windmill, Superset, File Browser, GC Explorer, CoMapeo Remote Archive Server, plus anything else via CapRover.

### Get started

For step-by-step guides (Azure, DigitalOcean, DIY), automated deployment scripts, and CapRover templates, see the deployment repo on GitHub: **[ConservationMetrics/gc-deploy](https://github.com/ConservationMetrics/gc-deploy)**.