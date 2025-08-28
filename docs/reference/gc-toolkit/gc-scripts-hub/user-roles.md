---
sidebar_position: 3
---

# User Roles

In Windmill (the platform that powers the GC Scripts Hub), there are a number of roles that can be assigned to users, each with different permissions and responsibilities.

Windmill has an [official documentation page](https://www.windmill.dev/docs/core_concepts/roles_and_permissions) that covers the core concepts of roles and permissions in Windmill. However, below, we'll cover the roles that are most relevant to the GC Scripts Hub.

## 🔒 Administrator

The Administrator role is designed for community organization administrators who need to manage the GC Scripts Hub, including:

- Creating and managing users
- Adding resources and variables (e.g., API keys, database connections)
- Setting the operator visibility settings for the workspace
- Managing other workspace settings

## 👤 Operator

The Operator role is designed for community organization members who need to run and schedule important data workflows without requiring deep technical knowledge. Operators can execute scripts and monitor their progress, but cannot create or modify the underlying code—ensuring system stability while enabling community participation.

The Operator role is ideal for community organizations because it allows you to:

- **Distribute Responsibilities**: Multiple organization members can help manage data workflows without needing to understand complex technical details about databases, APIs, or script development.

- **Maintain System Stability**: Since Operators cannot modify scripts or system settings, there's no risk of accidentally breaking important data collection or alert workflows.

- **Enable Self-Sufficiency**: Communities can run their own data processes—like downloading new environmental alerts or exporting survey data—without depending on technical staff for routine tasks.

- **Reduce Training Burden**: Operators only need to learn how to run and schedule workflows, not how to build them from scratch.

### 🔑 Operator Permissions and Restrictions

Operators have focused, limited access that includes:

#### ✅ **What Operators Can Do**
- **Execute Scripts**: Run data collection, export, and alert workflows
- **Schedule Workflows**: Set up automatic runs (weekly alert checks, daily data exports)
- **Monitor Progress**: View running jobs and check if workflows completed successfully
- **Access Apps**: Use Windmill apps for common tasks (e.g., uploading a file to Guardian Connector)

#### ❌ **What Operators Cannot Do**
- **Modify Scripts**: Cannot change how data connectors or workflows function
- **Create Resources**: Cannot add new database connections or API keys
- **Edit Variables**: Cannot modify sensitive configuration settings

### 🎯 Practical Example

A typical Operator workflow might involve:
1. **Monday Morning**: Run the weekly survey data export for the community meeting
2. **Weekly**: Check that environmental alert monitoring is running successfully  
3. **When Needed**: Upload a new spatial dataset to Guardian Connector
4. **Monthly**: Generate reports for sharing with partner organizations

All of these tasks can be accomplished through a relatively simple interface without requiring knowledge of databases, APIs, or technical infrastructure.

