---
tags: [opu, tsp]
---

# Customizing your Mapbox account

This guide explains how to customize your Mapbox account styles for use within Guardian Connector.

## Prerequisites

To modify a map, you will need the specific web address (the Style URL) of the map layout you want to customize. 

You can find this address inside **GC Explorer**:
1. Go to your GC Explorer page and click **Manage Datasets**.
2. Find your dataset and select **Edit dataset view**.
3. Scroll to the **Map** block and look at the "Mapbox Background Map(s)" settings. 

:::note
The map address will look like this: `mapbox://styles/<account>/<style-id>`, where `<account>` is your Mapbox account name, and `<style-id>` is the unique identifier for your map's design.
:::

Make sure you also have your Mapbox account login details ready.

## Customizing your Mapbox styles

Follow these steps to change the appearance of your map:

1. Log in to your [Mapbox Studio](https://console.mapbox.com/) account.
2. Find and select the design you want to modify from your list of styles. Use the **Style URL** you gathered from GC Explorer to make sure you are choosing the correct one. You can change how different elements in the map look and much more, check the [Create a custom basemap style with Mapbox Studio](https://docs.mapbox.com/help/tutorials/create-a-custom-style/) for more information.
3. Use the Mapbox Studio editor to make your visual changes. 
4. When you are happy with how it looks, click **Publish** in the top right corner to save your changes.

:::tip
Once published, your updates will automatically appear in Guardian Connector. You do not need to update any links, as Guardian Connector continuously reads from this exact map address.
:::

## Adding custom map layers

Follow these steps to add your own map information (like regional boundaries, property lines, or custom geographic data files) to your map design:

1. Log in to your [Mapbox Studio](https://console.mapbox.com/) account.
2. Select the design you wish to modify from your list of styles.
3. Import your data by following the [Mapbox documentation](https://docs.mapbox.com/help/tutorials/add-data-to-mapbox-style/?step=3)
4. Click **Publish** to save your changes.

:::important
Just like design changes, any newly added data layers will instantly sync and display inside your Guardian Connector view as soon as you hit publish.
:::