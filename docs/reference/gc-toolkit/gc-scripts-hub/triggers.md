---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Running, Scheduling, or Triggering Scripts and Flows

You can set scripts and flows to run on a set schedule, or automatically trigger them to run in the background whenever specific events happen in your other tools.

## Real-Time Syncing with KoboToolbox Webhooks

When using KoboToolbox to collect data in the field, you don't need to manually run a script every time you want to pull down the newest form submissions. Instead, you can use **Webhooks** (*REST Services* in KoboToolbox) to automate the process.

As soon as a surveyor submits a new record, KoboToolbox sends an automatic, instant message to your script. This immediately triggers your flow to run and process the new data. This ensures your datasets in Guardian Connector are updated in real-time, without any manual intervention.

*To set this up, you simply generate a unique Webhook URL for your script in the Hub, and paste it into the "REST Services" settings of your KoboToolbox project.*

## Other Ways to Automate Scripts

Beyond KoboToolbox, you can automate your workflows in a variety of ways depending on your organization's needs. Here are the primary methods available for running or triggering scripts:

* **[Schedule](https://www.windmill.dev/docs/core_concepts/scheduling):** Run a script automatically at a specific time or recurring interval.
* Example: Pulling data from a government agency every night at midnight.

* **[Webhooks](https://www.windmill.dev/docs/core_concepts/webhooks):** Trigger a script instantly when an external service sends an update.
* Example: updating dashboards when new submissions have been done on KoboToolbox.

* **[HTTP](https://www.windmill.dev/docs/triggers/http_routing):** Run a script whenever a specific web link is visited or pinged.
* Example: Creating a custom web address that your team can click on their mobile browser to quickly process a file.
