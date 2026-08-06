---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# User Roles

Superset uses a role-based system to control what users can see and do within the platform. In Guardian Connector, those roles are **not assigned inside Superset**. They are kept in sync with each user's [Guardian Connector role](/reference/gc-toolkit/gc-landing-page/#-user-management-for-administrators), which administrators manage from the Landing Page.

When a user's Guardian Connector role changes, their Superset role updates to the matching equivalent on the next sign-in.

## Role Mapping

| Guardian Connector role | Superset role |
|-------------------------|---------------|
| Admin                   | Admin         |
| Member                  | Alpha         |
| Guest                   | Gamma         |
| SignedIn                | Public        |

To change someone's access in Superset, update their role in [User Management on the Landing Page](/reference/gc-toolkit/gc-landing-page/#-user-management-for-administrators). Do not try to manage Superset roles separately — they will be overwritten by the sync.

## Available Roles

### 👑 Admin ← Guardian Connector **Admin**
**Full control over the Superset instance**

Admins have complete access to manage the entire Superset environment:
- Manage user accounts and assign roles within Superset
- View and edit all dashboards, charts, and datasets
- Access database credentials and connection settings
- Configure data sources and security settings
- Grant or revoke access to specific resources

*Best for: System administrators and technical coordinators*

### 🔧 Alpha ← Guardian Connector **Member**
**Content creators with broad access**

Alpha users can work with data and create content but cannot manage system settings:
- Access all available data sources and dashboards
- Create, edit, and share their own dashboards and charts
- Explore data and build new visualizations
- Cannot manage other users or view database credentials
- Cannot edit dashboards and charts that are not their own
- Cannot add new data sources to the system

*Best for: Community coordinators, data analysts, and active dashboard creators*

### 📖 Gamma ← Guardian Connector **Guest**
**Read-only access with selective permissions**

Gamma users have limited, read-only access to specific content:
- Can only view charts and dashboards they've been explicitly granted access to
- Cannot create or edit any content
- Cannot access data exploration tools
- Ideal for users who only need to view specific reports

*Best for: Visitors, partners, or allies who need access to specific dashboards only*

### 🌐 Public ← Guardian Connector **SignedIn**
**Minimal access for signed-in users without a service role**

The Public role is assigned to users who are signed in to Guardian Connector but have only the **SignedIn** role (no service-level access yet):
- Corresponds to the least-privileged Guardian Connector role
- Typically used before an administrator approves broader access
- Access level may also depend on how the Public role is configured in Superset (including the `PUBLIC_ROLE_LIKE` setting)

*Best for: Newly signed-up users waiting for role assignment, or accounts that should not yet use Superset services*

## More Information

For more information, see [this guide on Superset roles](https://superset.apache.org/docs/security/).

For an exhaustive list of roles and permissions, see [STANDARD_ROLES.md](https://github.com/apache/superset/blob/master/RESOURCES/STANDARD_ROLES.md).
