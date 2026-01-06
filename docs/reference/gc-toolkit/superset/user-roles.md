---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# User Roles

Superset uses a role-based system to control what users can see and do within the platform. When users are approved for access to your Guardian Connector Superset instance, they are automatically assigned a default role that determines their permissions.

There are four roles available to users:

- **Admin**: Full control over the Superset instance
- **Alpha**: Content creators with broad access
- **Gamma**: Read-only access with selective permissions
- **Public**: Access for users who are not logged in

## Default User Role

New users are assigned the **Alpha** role by default, which provides a good balance between functionality and security. This role allows users to:

- View and interact with all dashboards and charts
- Create their own dashboards and visualizations
- Explore data without being able to access sensitive database credentials
- Share their work with other users

## Available Roles

### 👑 Admin
**Full control over the Superset instance**

Admins have complete access to manage the entire Superset environment:
- Manage user accounts and assign roles
- View and edit all dashboards, charts, and datasets
- Access database credentials and connection settings
- Configure data sources and security settings
- Grant or revoke access to specific resources

*Best for: System administrators and technical coordinators*

### 🔧 Alpha
**Content creators with broad access**

Alpha users can work with data and create content but cannot manage system settings:
- Access all available data sources and dashboards
- Create, edit, and share their own dashboards and charts
- Explore data and build new visualizations
- Cannot manage other users or view database credentials
- Cannot edit dashboards and charts that are not their own
- Cannot add new data sources to the system

*Best for: Community coordinators, data analyists, and active dashboard creators*

### 📖 Gamma
**Read-only access with selective permissions**

Gamma users have limited, read-only access to specific content:
- Can only view charts and dashboards they've been explicitly granted access to
- Cannot create or edit any content
- Cannot access data exploration tools
- Ideal for users who only need to view specific reports

*Best for: Community members or allies who need access to specific dashboards only*

### 🌐 Public
**Access for users who are not logged in**

The Public role allows anonymous (non-logged-in) users to access certain Superset features. This role inherits permissions from another role that administrators configure:
- Access level depends on which role's permissions are assigned to the Public role
- Enables sharing dashboards with external stakeholders without requiring user accounts
- Useful for making specific data visualizations publicly accessible
- Configured through the `PUBLIC_ROLE_LIKE` setting by administrators

*Best for: Sharing specific dashboards with external partners, researchers, or the general public*

## Choosing the Right Role

For most Guardian Connector deployments, the **Alpha** role works well as the default because it:
- Gives users enough freedom to explore and create content
- Protects sensitive system settings and credentials
- Allows community members to build their own data stories
- Maintains security while encouraging engagement

Administrators can always adjust individual user roles later based on specific needs and responsibilities within the community.

## More Information

for more information, please see [this guide on Superset roles](https://superset.apache.org/docs/security/). 

Additionally, for an exhaustive list of roles and permissions, see [STANDARD_ROLES.md](https://github.com/apache/superset/blob/master/RESOURCES/STANDARD_ROLES.md).