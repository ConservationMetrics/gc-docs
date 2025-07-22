---
sidebar_position: 1
---

# KoboToolbox

[KoboToolbox](https://www.kobotoolbox.org/) is a free, open-source suite of tools for mobile data collection. It allows users to build forms, collect data in the field using mobile devices, and analyze the collected data through web-based interfaces. Originally developed for humanitarian contexts, KoboToolbox excels at creating surveys, questionnaires, and data collection forms that work reliably in challenging environments with limited connectivity.

## Why KoboToolbox is Integrated with Guardian Connector

- **Field Data Collection**: Enables communities and researchers to collect environmental data directly in the field using smartphones or tablets
- **Offline Capability**: Works without internet connectivity, crucial for remote conservation areas
- **Flexible Form Design**: Supports complex survey logic, media attachments, and GPS coordinates for location-based data
- **Community Empowerment**: Allows local communities to collect their own data about environmental issues and land rights
- **Standardized Data**: Ensures consistent data collection formats across different projects and regions
- **Real-time Monitoring**: Supports rapid data collection for time-sensitive environmental monitoring
- **Multi-language Support**: Enables data collection in local languages, important for community-based conservation
- **Generous Free Tier**: Allows 5,000 survey submissions per month and up to 1GB storage for their Community plan.

## Documentation

For detailed information about using KoboToolbox, visit the [official KoboToolbox documentation](https://support.kobotoolbox.org/).

We also provide a syllabus for comprehensive 4-week self-paced learning program that takes you from KoboToolbox basics to advanced data management techniques: see [our KoboToolbox Syllabus](/tutorials/syllabus-data-management-with-kobotoolbox/).

### KoboToolbox or ODK?

KoboToolbox and ODK are both excellent tools for survey data collection. They are both compatible with XLSForm templates, and the Kobo Collect app is actually a fork of ODK Collect. However, the KoboToolbox and ODK servers have a different feature set. For example, KoboToolbox has a form builder and basic data visualization, whereas ODK Central supports a feature for longitudinal data collection called [Entities](https://docs.getodk.org/entities-intro/) that could be useful for monitoring an incident over time.

Guardian Connector is integrated with both KoboToolbox and ODK, but we frequently recommend KoboToolbox because of the form builder and data visualization features, and also because it has a relatively generous free tier where users can meet their data collection needs without needing to pay for a subscription, or deploy their own server as is required for ODK.

## Best Practices & Troubleshooting

_These are not official KoboToolbox documentation, but rather documentation that CMI has put together based on our experiences to help you get the most out of KoboToolbox. If you have anything to add or correct, please feel free to submit a pull request or contact us._

* For best practices, lessons learned, and usage tips, see the [KoboToolbox Best Practices and Usage Tips](./best-practices.md).
* For common issues and solutions, see the [KoboToolbox Troubleshooting Guide](./troubleshooting.md).


## Templates

* For ready-to-use XLS form templates designed for Indigenous communities, see the [XLSForm Templates](./templates.md).

## Other Resources

- [MapPacker](https://github.com/conservationmetrics/mappacker) - Generate offline maps in `mbtiles` format for use in KoboToolbox (NOTE: CMI maintains MapPacker, and deploys a server for our users)