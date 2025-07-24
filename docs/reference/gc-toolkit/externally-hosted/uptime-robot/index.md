# Uptime Robot

[Uptime Robot](https://uptimerobot.com/) is a website monitoring service that we use to track the availability and performance of Guardian Connector deployment components. While not integrated with Guardian Connector itself, it provides essential monitoring capabilities for maintaining reliable deployments.

Uptime Robot monitors each service in a Guardian Connector deployment (e.g. GC Explorer, GC Scripts Hub, Superset, etc.) to ensure they remain accessible.

At the time of writing, Uptime Robot offers a generous free tier that includes:

- **50 monitors** - Sufficient for monitoring multiple Guardian Connector deployments
- **5-minute check intervals** - Frequent enough to catch issues quickly
- **Email/SMS alerts** - Immediate notification when services go down
- **Public status pages** - Share service status with your community

CMI uses Uptime Robot to monitor Guardian Connector deployments for our partners, providing proactive support when issues arise.

## Getting Started

1. Create a free account at [uptimerobot.com](https://uptimerobot.com/)
2. Add HTTP(S) monitors for each service URL in your deployment
3. Configure alert contacts (email, SMS, webhook, etc.)