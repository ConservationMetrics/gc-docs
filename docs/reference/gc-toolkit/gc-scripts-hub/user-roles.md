---
sidebar_position: 3
tags: [itu-3, opu, tsp]
---

# User Roles

In **[Windmill](https://www.windmill.dev/)** (the platform that powers the GC Scripts Hub), there are a number of roles that can be assigned to users, each with different permissions and responsibilities.

Windmill has an [official documentation page](https://www.windmill.dev/docs/core_concepts/roles_and_permissions) that covers the core concepts of roles and permissions in Windmill. However, below, we'll cover the roles that are most relevant to the GC Scripts Hub.

## 🔒 Administrator

The Administrator role is designed for community organization administrators who need to manage the GC Scripts Hub, including:

- Creating and managing users
- **Configuring Operator role permissions** (see [Operator Configuration](#configuring-operator-roles) below)
- Adding resources and variables (e.g., API keys, database connections)
- Setting the operator visibility settings for the workspace
- Managing other workspace settings

:::important
**Administrators must configure Operator roles** according to Guardian Connector best practices. By default, Windmill enables more permissions for Operators than we recommend. See the [Operator Configuration](#configuring-operator-roles) section below for required setup steps.
:::

## 👤 Operator

The Operator role is designed for community organization members who need to run and schedule important data workflows without requiring deep technical knowledge. Operators can execute scripts and monitor their progress, but cannot create or modify the underlying code—ensuring system stability while enabling community participation.

The Operator role is ideal for community organizations because it allows you to:

- **Distribute Responsibilities**: Multiple organization members can help manage data workflows without needing to understand complex technical details about databases, APIs, or script development.

- **Maintain System Stability**: Since Operators cannot modify scripts or system settings, there's no risk of accidentally breaking important data collection or alert workflows.

- **Enable Self-Sufficiency**: Communities can run their own data processes—like downloading new environmental alerts or exporting survey data—without depending on technical staff for routine tasks.

- **Reduce Training Burden**: Operators only need to learn how to run and schedule workflows, not how to build them from scratch.

### 🔑 Operator Permissions

:::note
The permissions listed below are contingent on configuring Operator roles according to Guardian Connector best practices. See the [Configuring Operator Roles](#configuring-operator-roles) section for setup instructions.
:::

#### ✅ **What Operators Can Do**
- **View code**: Read script code to understand what workflows do (cannot edit)
- **Execute scripts**: Run data collection, export, and alert workflows
- **Schedule workflows**: Set up and modify automatic runs (weekly alert checks, daily data exports)
- **Monitor progress**: View running jobs, past runs, and their logs
- **Select resources**: Choose from existing Resources and Variables when configuring scripts (cannot view their contents)
- **Access apps**: Use Windmill apps for common tasks (e.g., uploading a file to Guardian Connector)

#### ❌ **What Operators Cannot Do**
- **Modify scripts**: Cannot change how data connectors or workflows function
- **Create Resources**: Cannot add new database connections or API keys
- **Edit Variables**: Cannot modify sensitive configuration settings
- **View Resource/Variable contents**: Can select them but cannot see their actual values

:::note
Scripts in `f/common_logic/` (helper modules without a `main` function) do not appear in the Windmill UI for Operators. This is intentional—Operators don't need to see these internal modules, but scripts that import from them work perfectly.
:::

### 🎯 Practical Example

A typical Operator workflow might involve:
1. **Monday Morning**: Run the weekly survey data export for the community meeting
2. **Weekly**: Check that environmental alert monitoring is running successfully  
3. **When Needed**: Upload a new spatial dataset to Guardian Connector
4. **Monthly**: Generate reports for sharing with partner organizations

All of these tasks can be accomplished through a relatively simple interface without requiring knowledge of databases, APIs, or technical infrastructure.

## ⚙️ Configuring Operator Roles {#configuring-operator-roles}

Guardian Connector follows specific best practices for configuring Operator roles to ensure security and proper access control. **Administrators must complete these configuration steps** after setting up a Windmill workspace, as Operators have more permissions enabled by default than we recommend.

For additional context, see the [GC Scripts Hub README](https://github.com/conservationmetrics/gc-scripts-hub/blob/main/README.md#user-roles).

### Step 1: Configure Operator Permissions

By default, Windmill Operators can create resources and variables, which we recommend disabling. Operators should only be able to execute scripts and monitor their progress.

**To configure Operator permissions:**

1. Log in to Windmill as an Administrator
2. Navigate to **Workspace Settings** → **Users** tab
3. Find the **Operator Settings** section
4. **Disable all settings except Runs and Schedules**

:::warning
**Resources and Variables are enabled by default** in Windmill. This configuration change must be made manually by an Administrator—it cannot be automated during initial deployment (e.g., via gc-stack-deploy) because it needs to be done after the first-time Windmill workspace setup.
:::

### Step 2: Configure Folder Permissions

Operators need access to folders containing scripts, flows, apps, and Resources/Variables to be able to use them.

**To grant folder access:**

1. Navigate to the **Folders & Groups** page in Windmill
2. For each folder that Operators need to access:
   - Folders containing scripts, flows, or apps (e.g., `f/connectors`, `f/export`)
   - Folders where Resources and Variables are stored (typically `f/connectors`)
3. Add the `g/all` group to each folder
   - By default, all users (including Operators) are members of `g/all`

Without this step:
- Operators won't be able to see any scripts, flows, or apps in the Windmill interface
- Operators won't be able to select Resources when launching scripts, even though they appear in the dropdown menu

