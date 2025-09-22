# Pillars of Data Sovereignty in Guardian Connector

:::info
The following pillars are the foundation of data sovereignty in Guardian Connector. Currently, we are in the process of implementing these pillars, and several of these are _aspirational_ at this time.
:::

## 1. Infrastructure Control

* **Own the infrastructure & hosting decisions** — communities choose servers (local, regional, or cloud) and retain control.  
* **Non-proprietary software** — open-source codebases prevent vendor lock-in and ensure transparency.  
* **File-first, open formats** – where possible, data is kept in durable, well-structured files and schemas (CSV, JSON, GeoJSON, GPX, KML) so that it stays portable and usable outside the platform. Data is also organized in a Postgres database to make it easier for partners to query, visualize, and work with their data day to day.  
* **Durable digital good** — platform designed to remain functional and relevant beyond funding cycles and as data projects come and go.  
* **Right of exit** — full ability to remove, download, and migrate data at any time.

## 2. Security & Resilience

* **Database protection** — encryption at rest and in transit, integrity checks, and controlled access.  
* **Cybersecurity resilience** — vulnerability scanning, patching and automated upgrades, and response protocols.  
* **Redundancy & backups** — community-controlled backups to prevent loss or external deletion.  
* **Auditability** — ability to trace data provenance, transformations, and access history.  
* **Offline compatibility** — some integrated apps work offline and sync later, though not all features are offline-ready.

## 3. Governance & Rights

* **Private by default, shareable by choice —** all data is private first, with communities deciding if, when, and how to share datasets publicly. Sharing can be done on their own terms, whether for collaboration, advocacy, or contribution to broader goals.  
* **Role-based permissions** — access aligned with community or organization rules and roles.  
* **Transparency of data pipelines —** all extract, load and transform (ETL) and processing code is free and open source (FOSS), so communities can inspect, understand, and adapt the workflows.  
* **Legal/ethical guardrails** — complementary data protocols and third-party usage agreement templates are provided to help protect against extractive or unauthorized use.

## 4. Usability & Capacity

* **Interoperability** — connected with tools that communities are already using, and it is designed so new tools can be integrated easily if they are not yet supported.  
* **Accessibility** — interfaces and workflows are designed or selected around the specific user personas identified within each partner organization, so the tools match real roles and capacities.  
* **Findability and cataloging** — data is organized with clear structures, metadata, and search tools so users can quickly locate and understand their datasets without relying on technical support.  
* **Localization** — support for local languages, classifications, and cultural categories.  
* **Capacity building** — documentation, step-by-step guides, and self-serve resources provided to empower communities to manage and analyze their own data sustainably.