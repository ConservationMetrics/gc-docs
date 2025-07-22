# Twilio

[Twilio](https://www.twilio.com/) is a cloud communications platform which provides programmable communication tools for making and receiving phone calls, sending and receiving text messages, and performing other communication functions using its web service APIs.

Key features for Guardian Connector use:

- **WhatsApp Business API** - Send messages through WhatsApp to reach users on their preferred platform
- **Reliable delivery** - Enterprise-grade messaging infrastructure
- **Programmable messaging** - Easy integration with Python scripts and workflows
- **Media support** - Send images, documents, and location data alongside text messages
  
## How Twilio is used in Guardian Connector

Twilio enables automated WhatsApp notifications from Guardian Connector scripts and flows in [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/), such as alerting users when new change detection alerts have been detected in their territory.

The following message is sent when new change detection alerts are detected in a user's territory:

> `${total_alerts} new change detection alert(s) have been published on your alerts dashboard for the date of ${month_year}. The following activities have been detected in your region: ${description_alerts}. Visit your alerts dashboard here: https://explorer.${community_slug}.guardianconnector.net/alerts/alerts. If you are using CoMapeo with an archive server enabled, you can receive the alerts by synchronizing.`

## Getting Started

1. Create a Twilio organization at [twilio.com](https://www.twilio.com/)
2. Once logged in, create a Twilio [Managed Account](https://admin.twilio.com/managed-accounts). Copy down the `Account SID` and `Auth Token`.
3. Set up an [Active Phone Number](https://console.twilio.com/us1/develop/phone-numbers/manage/incoming) that will be used to send WhatsApp messages.
4. Set up a [Messaging Service](https://console.twilio.com/us1/develop/sms/services) and copy down the `Service SID`.
5. Add your phone number to the messaging service's Sender Pool.
6. Set up a [Message Content Template](https://console.twilio.com/us1/develop/sms/content-template-builder) and copy down the `Content SID`. (NOTE: your template needs to be approved by Twilio before it can be used, but this is typically a quick process and you should not encounter any issues.)
7. Configure your Twilio credentials as a [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) Windmill resource for the relevant script or flow. Note that phone number recipients are added in GC Scripts Hub as an array of strings like `[whatsapp:+130512345678, whatsapp:+19874358172, …]`.

:::tip

You can create multiple message content templates for different languages.

:::

Please see the [Twilio documentation](https://www.twilio.com/docs/) for more information on how to use Twilio with WhatsApp.