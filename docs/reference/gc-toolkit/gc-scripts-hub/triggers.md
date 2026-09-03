---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Running, Scheduling, or Triggering Scripts and Flows

:::important
**Always check the official source.**
Because the platform is constantly evolving, the capabilities for schedules and triggers may expand. For the most accurate, comprehensive, and up-to-date instructions, [Windmill's own documentation](https://www.windmill.dev/docs) should always be treated as the ultimate source of truth.
:::

You can set scripts and flows to run on a set schedule, or automatically trigger them to run in the background whenever specific events happen in your other tools.

## Scheduling

The most common way to run scripts is on a set schedule, so they run automatically at regular times without you needing to do anything.

### Regular Data Syncing with Schedules

For example, you can set a script to pull data from KoboToolbox every hour, or every night at midnight. Once the schedule is set up, Windmill handles everything automatically — you simply check the results when you're ready.

*To set this up, you open your script or flow in Windmill, find the **Schedule** option, and choose how often you want it to run (for example, every hour, daily, or weekly). For full details, see [Windmill's scheduling documentation](https://www.windmill.dev/docs/triggers/schedules).*

## Webhooks

### Real-Time Syncing with KoboToolbox Webhooks

When using KoboToolbox to collect data in the field, you don't need to manually run a script, or rely on a schedule, every time you want to pull down the newest form submissions. Instead, you can use **Webhooks** (*REST Services* in KoboToolbox) to automate the process.

As soon as a surveyor submits a new record, KoboToolbox automatically triggers your Windmill script to run and process the new data. This ensures your datasets in Guardian Connector are updated in real-time, without any manual intervention.

*To set this up, you simply generate a unique Webhook URL for your script in the Windmill, and paste it into the "REST Services" settings of your KoboToolbox project.*

## Other Ways to Trigger Scripts

* **[HTTP](https://www.windmill.dev/docs/triggers/http_routing):** Run a script whenever a specific web link is visited or pinged.
* Example: Creating a custom web address that your team can click on their mobile browser to quickly process a file.
