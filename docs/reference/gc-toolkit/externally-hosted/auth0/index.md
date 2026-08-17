---
tags: [opu, tsp]
---

# Auth0

[Auth0](https://auth0.com/) is an identity and access management platform that provides authentication and authorization services for Guardian Connector deployments.

## How Auth0 is used in Guardian Connector

Auth0 enables secure user authentication and access control across Guardian Connector tools:

- **Single Sign-On (SSO)** - Users authenticate once to access multiple Guardian Connector services
- **User management** - Centralized user registration, login, and profile management
- **Role-based access control** - Different permission levels for administrators and community members

## Getting Started

1. Create an Auth0 account at [auth0.com](https://auth0.com/)
2. Configure applications for each Guardian Connector service
3. Set up user roles and permissions based on your community's needs
4. Configure Auth0 credentials in your Guardian Connector environment variables
5. Test SSO flow across your Guardian Connector tools

:::important For System Administrators
Please see our [Auth0 guide](https://github.com/conservationmetrics/gc-deploy/blob/main/auth0/README.md) on Github for more information on how to configure Auth0 for your Guardian Connector instance.
:::