---
sidebar_position: 4
tags: [itu-3, idm, opu, tsp]
---

# 🏷️ Guide: Annotating Datasets with Local Contexts Labels

![Local Contexts Labels](/img/guides/guide-local-contexts/local-contexts.webp)

This guide explains how to create and curate **[Traditional Knowledge (TK)](https://localcontexts.org/labels/traditional-knowledge-labels/)** and **[Biocultural (BC)](https://localcontexts.org/labels/biocultural-labels/)** Labels in [Local Contexts](https://localcontexts.org/), bring those Labels into your Guardian Connector data warehouse, and apply them to specific datasets. 

## Overview

[Local Contexts](https://localcontexts.org/) provides a structured, community-informed way to describe how data should be understood and used, especially where Indigenous provenance or biocultural relevance matters. TK and BC Labels express expectations around attribution, consent, and appropriate use in a form that can travel with metadata and tools.

In Guardian Connector, Labels are treated as **catalog metadata**, not as automatic tags on every table. That separation keeps stewardship explicit: having Labels in the Hub or in the warehouse does not, by itself, label every dataset. For broader framing on community governance of data, see [Data Sharing Protocols Grounded in Indigenous Data Sovereignty](/guides/guide-data-sovereignty-and-protocols/).

:::tip

You need at least one **dataset** already present in the warehouse (a table you can select in Windmill), and at least one **Label set** before you can use the Annotations app.

:::

## Guide overview

### [**1. Set up a Local Contexts Hub Project and Labels**](hub-project-and-labels)

Create a Local Contexts Hub profile and Community account, curate and approve TK/BC Labels, create a project, apply Labels, and gather the **Project ID** and **API key** you will use in Windmill.

### [**2. Fetch Labels from the Local Contexts Hub**](fetch-labels-script)

Configure the **Local Contexts** resource in Windmill, run **Local Contexts: Fetch Labels** (on demand or on a schedule), and understand how Label data lands in the data warehouse and on disk so that you can apply them to datasets.

### [**3. Apply Local Contexts Labels to a dataset**](annotations-app)

Select a dataset and Label set, choose TK and BC Labels to apply, and save. Mappings are stored separately from the dataset rows, in a companion table named `{dataset_name}__lc_labels` that is created if it does not exist, and updated if it does.

### [**4. Use the Labels for data cataloging, metadata tagging, and discovery purposes**](using-the-labels)

Now that your Labels are applied to a dataset, you can use the Labels for data cataloging, metadata tagging, and discovery purposes.