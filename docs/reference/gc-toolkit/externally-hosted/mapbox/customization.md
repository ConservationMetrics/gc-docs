---
tags: [opu, tsp]
sidebar_position: 1
---

# Customizing your Mapbox styles

This guide explains how to customize your Mapbox styles for use within Guardian Connector.

## Prerequisites

To modify a map, you will need the specific web address (the Style URL) of the map style you want to customize. 

You can find this address inside **GC Explorer**:
1. Go to your GC Explorer page and click **Manage Datasets**.
2. Find your dataset and select **Edit dataset view**.
3. Scroll to the **Map** block and look at the "Mapbox Background Map(s)" settings. 

:::note
The map address will look like this: `mapbox://styles/<account>/<style-id>`, where `<account>` is your Mapbox account name, and `<style-id>` is the unique identifier for your map's design.
:::

:::tip
While the above steps can be helpful to identify the exact style, you could also just keep track of the **name** of your Mapbox style, and find it that way.
:::
Make sure you also have your Mapbox account login details ready.

## Customizing your Mapbox styles

Follow these steps to change the appearance of your map:

1. Log in to your [Mapbox Studio](https://console.mapbox.com/) account.
2. Find and select the style you want to modify. Use the **Style URL** you gathered from GC Explorer to make sure you are choosing the correct one. You can change how different elements in the map look and much more. See the [Create a custom basemap style with Mapbox Studio](https://docs.mapbox.com/help/tutorials/create-a-custom-style/) for more information.
3. Use the Mapbox Studio editor to make your visual changes. 
4. When you are happy with how it looks, click **Publish** in the top right corner to save your changes.

:::tip
Once published, your updated map style will be shown in Guardian Connector. You do not need to update any links, as Guardian Connector continuously reads from this exact map address.
:::

:::note
It may take up to 15 minutes for your map style changes to appear on the live map on Guardian Connector.
:::

## Adding custom map layers

Follow these steps to add your own map data to your map design. Map data can be point, lines, or polygons. Examples of custom map data could be regional boundaries, place names, hydrology or topology data, transects, or previously collected field data. 

1. Log in to your [Mapbox Studio](https://console.mapbox.com/) account.
2. Select the design you wish to modify from your list of styles.
3. Import your data by following the [Mapbox documentation](https://docs.mapbox.com/help/tutorials/add-data-to-mapbox-style/?step=3)
4. Click **Publish** to save your changes.

:::important
Just like map style design changes, any newly added map layers will appear on your Guardian Connector maps without any additional steps. Note that it may take up to 15 minutes for new map layers to appear.
:::