---
sidebar_position: 0
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# Onboarding Template

This document is your onboarding document to a fresh Guardian Connector instance.

:::note

This template is designed to help onboard your community. You can customize this template to fit your needs: for example, replacing "alias" with your own name, and adding username and password for a service like Filebrowser.

Before you begin, please make sure you are familiar with [what Guardian Connector is](/overview/index.md) and [its features](/reference/gc-toolkit/index.md).

:::

## Introduction

Welcome to your Guardian Connector instance!

This space is your and yours alone.


Each instance will have an **alias**. Within the Guardian Connector ecosystem, we refer to your instance through this "codeword" of your choosing. That adds an extra level of opaqueness on how to access a partner's infrastructure. The idea is for you to name your instance, and can be called however you want.

From now on, we will refer to it as *alias*.

In order to access, you will use its web address: 
<ParamLink template="https://{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>


The different tools will be available at https://*.alias.guardianconnector.net/ where * can be one of the services currently available, such as:

- Explorer: <ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>
- Filebrowser: <ParamLink template="https://files.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">files.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>
- Superset: <ParamLink template="https://superset.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">superset.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>
- Comapeo: <ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>  
- Windmill: <ParamLink template="https://windmill.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">windmill.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>

## Authentication

All the services are protected so no one can access them without your permission.

The first barrier is your Alias. Please do not share this with anyone outside of your organization, as it is the first door to your infrastructure.

We also utilize user authentication and authorization to only allow approved users to access the resources.

For some services, we might have a predefined user/password combination that I will share with you when we get to them.

## Tools

Guardian Connector is equipped with a suite of tools designed to help communities manage their data and workflows. An extensive walkthrough of these tools is available in [our documentation](/).

### GC Explorer

It is a versatile tool designed for visualizing various types of community data within your Guardian Connector instance, mainly through Maps and Galleries. While it can present change detection alerts (like those for mining or logging), it also visualizes field observations from mapping tools like CoMapeo, and could be used to visualize other datasets like survey data from KoboToolbox, mapping data from Locus Map, and other information.

Let’s go into <ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>

#### First time login

You will attempt to login. You can use a gmail account if you have one, or create an account for this service. If you do have a gmail account, it is usually easier to use that one as your login.

Every time the system shows this screen, you will use the same authentication mechanism. It works across the services we provide.

Your access attempt will fail, as you are not authorized yet to access the system. I will give you authorization to access now.

Now you can attempt to access again.

#### Overview

Right now Explorer will only have one view, your current alerts.

You can find more information about in the [Explorer documentation](../gc-explorer/).

#### Ways this space will grow

As you grow in usage of the system, Explorer may host things like:

- Your remote sensing alerts: logging, mining, airstrips and roads
- Your views of mapping projects collected using tools like [CoMapeo](../../connected-applications/comapeo/) or [KoboToolbox](../../connected-applications/kobotoolbox/) (both maps and media you share within it)

#### Customization

The way the map looks like in the alerts dashboard can be customizable.

Let’s discuss what would be relevant for you to have there.

### Filebrowser

[Filebrowser](../filebrowser/) is a tool that you can use to safely store your files. It is a less structured means for you to preserve your data, whatever it may be.
Your current access credentials are:

- URL: <ParamLink template="https://files.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">files.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>
- User: 
- Password: 

You can find more information in the [FileBrowser documentation](../filebrowser/).

#### Existing data

You will notice that there are a few folders already available in your Filebrowser view, and that more might appear without you doing it.
This happens because Filebrowser is also used for Guardian Connector tools to preserve data that you get from other services.

Examples of this would be:
- Alerts’ images and data
- Media submissions done through KoboToolbox
- Photos, videos and audios taken with CoMapeo, LocusMaps or other tools

### Superset

[Apache Superset](../superset/) is a data visualization tool integrated with Guardian Connector to help you create customizable dashboards, charts, and graphs for analyzing your data.

You can get to it through this web address: <ParamLink template="https://superset.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">superset.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>

As your Data Warehouse grows, you will want to learn more about the patterns in your data.
You can find more about it in the [Superset documentation](../superset/).

Let’s give you access to it now. It will look a little empty, and that is fine for now. Once you surface the need for it, we will work with you to make good use of it.

### CoMapeo

[CoMapeo](../../connected-applications/comapeo/) is a collaborative mapping tool that works primarily without internet connection.

Guardian Connector can preserve your CoMapeo projects through its Archive Server, and make its data available for you through the tools that we’ve seen already.

To exchange data with Guardian Connector, you will need your CoMapeo Archive Server address:
<ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>

### Windmill

Although it is a system that you will rarely see, it is one that does all the work behind the scenes to get the data from where you have it and safekeep it, as well as making it available the way you need it.

You won’t be using Windmill in your day to day activities, but you might in the future for some activities.
