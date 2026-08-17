---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# GC Landing Page

The Guardian Connector Landing Page is the **home page** for your community's Guardian Connector: the front door you arrive at after signing in. It brings everything together in one place, so you don't need to remember web addresses or hunt around for the right tool.

From the Landing Page you can:

- Open the **services** your community uses (like Explorer, Superset, Windmill, or File Browser) with a single click.
- Learn about the **tools you can use with Guardian Connector** to collect and bring in data (like CoMapeo, KoboToolbox, and more).
- If you are an administrator, you can manage **user accounts and roles**, and configure **theme settings**, and add **custom apps** for your community.

## 🔑 Signing In

When you first visit the Landing Page, you may be asked to sign up or sign in. After signing up, a member of your community with administrator access needs to **approve your account** and give you a role before you can see the services. Until that happens, you will not be able to access Guardian Connector.

**What you see on the Landing Page depends on your role.** Different people need different tools, so the page only shows the services you have permission to use. If a service you expect is missing, it may not be turned on for your community, or your role may not include access to it yet — reach out to your community's administrator.

## 🚀 Available Services

These are the default Guardian Connector services your community can link to from the Landing Page. Each appears as a card you can click to open it in a new tab.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-1.jpg)

- **[Explorer](/reference/gc-toolkit/gc-explorer/)**: View your community's data as interactive maps, media galleries, and an alerts dashboard.
- **[Superset](/reference/gc-toolkit/superset/)**: Build and explore charts, dashboards, and visualizations from your data.
- **Windmill**: Run and schedule the automation workflows that gather and process your data (see the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)).
- **[File Browser](/reference/gc-toolkit/filebrowser/)**: Browse, download, and manage your community's raw files and archives.

Not everyone sees every service. In general, the more advanced or sensitive a tool is, the higher the role needed to open it — for example, Explorer is available to most signed-in users, while Windmill is reserved for administrators.

It's also possible to configure the Landing Page to show custom apps, which are apps that are not part of the default Guardian Connector stack. See [⚙️ Configuring Custom Apps](#⚙️-configuring-custom-apps) for more information.

## 🌐 Tools You Can Use with Guardian Connector

The Landing Page also introduces the field tools and platforms that work with Guardian Connector. These are the apps your community can use to **collect data in the field** — data that then flows into Guardian Connector for viewing and analysis.

![Guardian Connector Landing Page](/img/reference/gc-toolkit/gc-landing-page/landing-page-2.jpg)

- **[CoMapeo](/reference/core-integrations/comapeo/)**: Offline-first mapping and monitoring on a mobile device.
- **[KoboToolbox](/reference/core-integrations/kobotoolbox/)** and **ODK**: Forms and surveys that work online and offline.
- **[Timelapse](/reference/core-integrations/timelapse/)**: Reviewing and annotating camera trap images for biodiversity monitoring.

Guardian Connector also connects with other tools such as **ArcGIS Survey123**, **Locus Map**, **Global Forest Watch**, **SMART**, and more. To learn about everything that can be connected, see the [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/).

## 🔧 For Administrators

### 👥 User Management

If you are an **administrator**, the Landing Page gives you a User Management area to control who can access your community's Guardian Connector and what they can do.

From here you can:

- **Search** for people by name or email.
- See each person's **status** — whether their account is *Approved* or still *Pending* — along with their role and when they last signed in.
- **Approve (or un-approve) an account.** Only approved users can reach the services.
- **Assign a role** that decides which services each person can open.
- **Delete an account** if they should no longer have access.

The currently available roles, from least to most access, are:

- **Signed In**: Signed in, but without access to services yet.
- **Guest**: Limited access, suitable for visitors or partners.
- **Member**: Everyday access for community members.
- **Admin**: Full access, including this User Management area.

When you approve someone and give them the right role, the services they're allowed to use will appear on their Landing Page the next time they sign in.

### 🎨 Theme Settings

Theme Settings lets you customize your community's branding on the Landing Page.

From here you can add:

- A **logo URL**, which shows up on the home page.
- A **background image URL**, which is used as the background on the login screen.

### ⚙️ Configuring Custom Apps

If your community has other apps running on Guardian Connector, the **Custom Apps** page lets you create cards similar to the default services — like Explorer, Superset, and File Browser. Each card opens at its own subdomain, so people can reach your custom apps from the Landing Page the same way they open the built-in ones.

For each custom app you can add, a name, subdomain, description, icon, and tags.

