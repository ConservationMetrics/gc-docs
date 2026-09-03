---
sidebar_position: 1
tags: [itu-3, idm, opu, tsp]
---

# Step 1: Set up a Local Contexts Hub Project and labels

Official onboarding for the Hub is documented by Local Contexts: [Getting started on the Hub](https://localcontexts.org/support/getting-started-on-the-hub/). The steps below are what Guardian Connector expects before you [**Fetch Labels from the Local Contexts Hub**](fetch-labels-script).

:::tip

Always refer to the Local Contexts [documentation](https://localcontexts.org/support/getting-started-on-the-hub/) for the most up-to-date information.

:::

## Steps

1. Create a **Local Contexts Hub** user profile.
2. Create a **Community** account (not only an individual researcher profile).
3. Complete **account confirmation** as required ([confirmation step](https://localcontexts.org/support/getting-started-on-the-hub/#confirmation-step)).
4. **Customize** the TK and BC labels your community will use
5. Per the Hub’s peer review flow, have **at least one other account approve those labels** (you cannot approve your own labels even as an Admin).
6. Create a **Hub Project**. For many use cases, choose Project type **Collection** and set visibility to **Private** if the label set should remain community-scoped.
7. **Apply** the approved TK and BC Labels to that Project so the API returns the label set you intend to sync.

## Values to collect for Windmill

You will need:

- **Project ID** — identifies the project whose labels you will fetch.
- **API key** — tied to your **Community** account.

Store these securely; you will enter them into the [Local Contexts resource](fetch-labels-script#configure-the-local-contexts-resource-in-windmill) in the next step.

:::important

Guardian Connector is designed to fetch labels using a **Community** account. The connector checks the Hub API so that use with non-community account (such as Researcher or Institution types) does not silently proceed. 

Use a Community account and API key as Local Contexts recommends for this workflow.

:::

## Next

Continue to [**Fetch Labels from the Local Contexts Hub**](fetch-labels-script) to configure Windmill and sync labels into your warehouse.
