---
sidebar_position: 1
---

# About Guardian Connector

🚧 Under construction

## Design Principles

In designing Guardian Connector for long-term viability and sustainability, Conservation Metrics adheres to a strict set of principles. The tools included in the solution must meet the following criteria:

### Free or Affordable Software, Hardware and Services
As much as possible, we prioritize tools that are free to use and hardware or cloud-based services that are available at low cost. This ensures the long-term sustainability of the system for our partners.

### Translatable to Local Languages
While translating an entire tool interface may not always be feasible or necessary, the most mission-critical elements should be translatable to local languages to ensure comprehension and usability.

### Data Sovereignty and Control
In alignment with the OCAP principles, our partners must be able to:
- Own the infrastructure where data is stored
- Control data collection, storage, and transmission across the project lifecycle
- Access their data at all times
- Be assured that no external parties have unauthorized access to their data
- Make their own decisions about sharing data with third parties
- Opt out or remove their data from the system at any time with minimal friction

These rights are fundamental and non-negotiable.

### Community-Operable Software Stack
While not every persona will be able to use every tool, we will not include tools that cannot realistically be operated by anyone within our co-creation partner teams without external support. Initial setup may require the involvement of a technical service provider, but ongoing operation should be feasible for local users. We aim to select tools that are accessible, user-friendly, and straightforward to learn and maintain.

### Self-Hosting Capability
Although Conservation Metrics maintains cloud-based Guardian Connector instances available to co-creation partners (and potentially others, under an affordable fee-for-service model), we are committed to building a toolchain that can be fully self-hosted. This includes:
- Avoiding proprietary solutions that are inaccessible to partners
- Providing sufficient documentation and automation to enable independent setup and administration
- Ensuring compatibility with a wide range of hosting platforms (e.g., Azure, AWS, Google Cloud, DigitalOcean, and country-specific clouds)

This enables deployment in specific jurisdictions according to partner needs.

### Offline-First Design
Nearly all tools should be usable entirely offline. At a minimum, the core data workflow—from data collection to visualization (and some curation)—should not require an internet connection. Offline readiness is essential for rural and remote use cases.

### Built for Interoperability and Extension
Even as we commit to a focused stack of integrated tools, our system must remain open and flexible. We will structure our data storage and APIs to enable easy integration of third-party tools in the future. This makes it easier for partners to plug in complementary systems as their needs evolve.