# Mapbox

[Mapbox](https://www.mapbox.com/) is a mapping platform that provides the foundation for interactive maps across Guardian Connector instances.

## How Mapbox is used in Guardian Connector

Mapbox serves three primary purposes in Guardian Connector deployments:

- **Access tokens for basic maps** - Shared across GC instances to provide base map layers and standard mapping functionality for tools like [Superset](/reference/gc-toolkit/superset/)
- **Custom map styles** - Created in Mapbox Studio for specific maps or alerts dashboards in [GC Explorer](/reference/gc-toolkit/gc-explorer/)
- **Offline maps** - Mapbox styles can be compiled into offline map packages for use in [CoMapeo](/reference/connected-applications/comapeo/) using tools like [QGIS](https://www.qgis.org/) and [MapPacker](https://github.com/conservationmetrics/mappacker)

## Getting Started

1. Create a Mapbox account at [mapbox.com](https://www.mapbox.com/)
2. Generate an access token for your Guardian Connector deployment
3. Configure the access token in your GC Explorer and Superset environment variables
4. Optionally create custom map styles in Mapbox Studio for specific views and dashboards

:::warning Security Best Practice

Always restrict your Mapbox access token to specific URLs and referrers to prevent unauthorized usage. Configure URL restrictions in your Mapbox account settings.

:::

For detailed setup and configuration, see the [Mapbox documentation](https://docs.mapbox.com/).