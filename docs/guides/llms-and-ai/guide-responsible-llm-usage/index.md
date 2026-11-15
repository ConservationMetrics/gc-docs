---
sidebar_position: 1
tags: [itu-3, idm, opu, tsp]
description: How to use ChatGPT, Claude, and similar AI assistants while keeping community and partner information in your own systems.
---

# Responsible Use of AI Assistants

ChatGPT, Claude, Gemini, and similar tools can help you draft a paragraph, explain a chart, or sketch a formula. They are also someone else's computers. Whatever you type or paste is sent to that company, stored there, and, unless you change your settings, may be used to train later models.

This guide is for people who use those tools alongside Guardian Connector. You do not need to be a programmer to follow it. It is for monitoring leads, program staff, decision makers, and technical support partners who want the help while keeping community and partner information in their own systems.

A **large language model (LLM)** is the system behind these chat tools. In this guide, "AI assistant" means ChatGPT, Claude, Gemini, and other LLM chat products, including assistants built into email, documents, or code editors.

:::tip A simple test

If you would not hand this text, file, or recording to a company you do not control, keep it out of the chat. A general question about how a tool works can go in. A spreadsheet, a map, a photo, a recording, or an email about a partner stays in your own systems.

:::

:::warning Policies and settings change often

Privacy policies, training switches, plan names, and what a company promises to do with your chats change often. The steps in this guide are a snapshot. Before you rely on them, look up the provider's latest commitment on their own site and confirm the setting in the account you are actually using.

For the latest Indigenous-led resources on AI, data sovereignty, and community policy, consult the [Indigenous AI Commons](https://indigenousaicommons.org/). It is a living index, updated as communities and researchers publish new work.

:::

## What happens when you paste something in

The chat window feels private. It is a message to the company that runs the service.

On a typical free or personal account, that company can:

- Store the conversation on its servers
- Use what you sent, and what the assistant replied, to train or improve its models
- Review some conversations for safety

Turning off training, covered [below](#turn-off-model-training), limits the second item for new chats. The conversation still leaves your computer. The company still receives it.

There is no reliable way to pull information back out of a model that has already been trained on it. Treat a paste as permanent.

This sits alongside the wider duty to keep authority over community information with the community. See [Data Sharing Protocols Grounded in Indigenous Data Sovereignty](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/).

## Keep community and partner information in your own systems

The people a dataset is about, or the community authority that governs it, decide whether it can leave your systems. Having the file on your laptop does not grant that permission. Pasting it into ChatGPT or Claude shares it with an outside company.

Keep all of the following out of AI assistants unless those data owners have agreed to this specific use:

- Raw files and exports: survey submissions, warehouse tables, spreadsheets, GPS tracks, camera-trap locations, audio, photos, and video
- Anything produced from that material: maps, charts, species lists tied to places, alert locations, and written findings
- Information about people: names, households, phone numbers, and other personal details
- Communications: emails, WhatsApp threads, meeting notes, and reports shared with partners or community members
- Access details: passwords, links that sign someone in, and keys or tokens for your Guardian Connector instance

Locations deserve extra care. A nest site, a patrol route, a mining alert, a sacred place, or a household coordinate can cause harm if it spreads, even when the chat only asked for a summary.

When you are unsure, leave it out and ask. Your organizational lead, and the community whose information it is, are the right people to ask. A technical support partner can help you check a tool's settings. They cannot give consent on behalf of the data owners.

## Questions you can still ask

An assistant is useful for the method. The records stay with you.

These are reasonable things to send:

- A question about how a tool works ("How do I filter a Superset chart by date?")
- Column or field names, such as `"Age"` or `"_submission_time"`
- Made-up examples that match the shape of the data, such as a fake code `"choice_a"` or a fake distance `3.5`
- Public documentation, or your own draft after names, places, and findings have been removed
- A request for a grammar check on text you wrote about a general topic

For SQL in Superset, [Helpful SQL Queries for Superset](/reference/gc-toolkit/superset/queries/#using-llms-to-generate-sql-queries) shows how to ask for an expression with column names and fake values.

**A prompt that keeps the data with you:**

> I need an outline for a one-page community meeting note about camera-trap maintenance. Use three headings: where we worked, what we serviced, and what we still need to decide. Leave blanks where the real places and findings go. I will fill those in. Do not invent results.

**A prompt that sends the data away:**

> Here is last month's camera export, with coordinates and species. Write the community meeting note.

Use the first kind.

## Use the website, and choose every word you send

The safest habit is the website, where nothing is sent until you type or paste it. [claude.ai](https://claude.ai) and [ChatGPT](https://chatgpt.com) work this way.

Desktop apps, browser extensions, and assistants inside email or document tools can read more than the chat box. Some can see open files, a connected Drive folder, or the page you are on. A question you thought was general can leave with a spreadsheet, a map, or a password that was sitting in the same folder.

Be selective before you install those. If you already use one, disconnect folders that hold community data, exports, and sign-in details.

### If you use an assistant inside a code editor

Some editors and coding agents can read the project open on your computer and send file contents with your question. Keep community datasets, exports, and password files out of any folder that assistant can see.

People who keep passwords in configuration files can follow [Don't let A.I. read your .env files](https://filiphric.com/dont-let-ai-read-your-env-files).

## Turn off model training

For work that is sensitive but is not community or personal data — an unpublished workflow, a draft method, an internal planning note your organization allows you to process with an assistant — use a service that commits not to train on your chats. Sign in first. On personal ChatGPT and Claude accounts, training is on until you turn it off.

Check the setting in the account you are using, and read the provider's current help page before you trust a menu name from this guide. Companies rename these controls. Look for the switch about improving or training the model, and check it again after the product updates.

### ChatGPT

1. Sign in at [chatgpt.com](https://chatgpt.com).
2. Open **Settings**, then **Data controls**.
3. Turn off **Improve the model for everyone**.

On a personal account (Free, Plus, or Pro), that switch starts out on. Turning it off applies to the account on the web and in the phone app. Your existing chats stay in history. Delete them separately if you want them removed.

ChatGPT Business, Enterprise, and Edu workspaces are set up so OpenAI does not use workspace content to train models. Confirm that with the person who manages the account. The chats are still stored by OpenAI, so the rules above about community data still apply.

OpenAI's current description is in [Data controls in ChatGPT](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt).

### Claude

1. Sign in at [claude.ai](https://claude.ai).
2. Open **Settings**, then **Privacy**.
3. Turn off **Help improve Claude**. Anthropic also labels this **Help improve our AI models**.

Turning it off stops future training on your chats. It cannot remove anything already used in a model that has been trained. Claude for Work and other organization plans are covered by commercial terms. Confirm with the account owner, since this consumer switch may not be the control for that plan.

Anthropic's current description is in [How do I change my model improvement privacy settings?](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings).

### A few limits that survive the switch

- The conversation is still sent to and stored by the company.
- A thumbs-up or thumbs-down on a reply can allow that conversation to be used for training. Skip those buttons when the chat includes anything you would not want reused.
- Chats the company flags for safety review can still be read and used for safety systems.
- A temporary or incognito chat is still sent to the company. It is a shorter retention setting. It is a poor place for community records.

### Other services

- **Gemini and NotebookLM.** On a personal Google account, what you type can be used to improve Google's models. A Google Workspace account used by an organization can be configured by an administrator so that it is not. Ask that administrator before using either tool with organizational information, and keep community data out unless the data owners have agreed.
- **[Duck.ai](https://duck.ai).** A chat service that says it does not train on your conversations. Community and partner records still stay out unless the data owners have agreed.

If a new product appears, read its privacy terms before anyone on the team uses it for work. A tool being free, or good at drafting, does not tell you where the text goes.

## Read the records yourself

When the task is to understand monitoring data, check a deployment, or decide what a dataset means for a community, do that reading with people. You know the place, the season, and what a number can and cannot say. An assistant does not.

Ask it how a filter or a formula works. Keep the actual rows, tracks, and findings with the people responsible for them.

## Write the words other people will read

Emails, reports, briefing notes, slides, and messages to community members or partners should come from you. They should show that you understand the situation and that you can stand behind each sentence.

You can ask an assistant to check grammar or tighten a paragraph you wrote, after anything sensitive has been removed. Then read the result and change anything you would not say yourself. Cut repeated or padded sentences. The version you send should sound like the person the reader expects to hear from.

An assistant has no relationship with the community, no duty to your data protocols, and no way to know what should stay unsaid. A clear paragraph can still misstate the facts or ignore a protocol.

### When you write to colleagues

Your colleagues chose to work with you. Write to them in your own words, at a length a person can read.

If you use an assistant to help you think, edit the result before you send it. You are responsible for anything you pass on, including text that is long, vague, or slightly wrong.

When you reply to someone, keep their wording where it matters. People choose words carefully. An assistant will often paraphrase, and a paraphrase can look like disagreement or like a new decision. If you agree, say so. If you are changing the meaning, say that in your own words.

## Energy use and bias

These tools use a lot of electricity, which sits in tension with conservation work. They also repeat biases present in the text they were trained on, including biased descriptions of people, places, and species. This guide leaves both topics open. The choice you can make today is what information you send, and whether a person remains responsible for the words and the analysis.

The Humanitarian OpenStreetMap Team and the Red Cross published a [Responsible AI Guide](https://responsibleai.guide/) that covers these topics, including energy and emissions, in more depth.

## Further reading

- [Indigenous AI Commons](https://indigenousaicommons.org/), a living index of Indigenous-led work on AI, data sovereignty, and community policy
- [Data Sharing Protocols Grounded in Indigenous Data Sovereignty](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/)
- [Helpful SQL Queries for Superset](/reference/gc-toolkit/superset/queries/#using-llms-to-generate-sql-queries), including how to request a formula without pasting live rows
- [Responsible AI Guide](https://responsibleai.guide/) (HOT and the Red Cross)
- For people who write code in Guardian Connector's open-source tools, [open-source LLM contributing guidelines](https://github.com/ConservationMetrics/gc-scripts-hub/blob/main/CONTRIBUTING_LLM_GUIDELINES.md) cover editor setup for that software work

## If you are unsure

Ask before you paste. Talk with your organizational lead and with the community that governs the information. If a new AI product might be used for organizational work, decide that with those people before anyone tries it on real data.

When a provider announces a policy change, or when you open a new account, read their latest commitment and re-check the training switch before you send anything.
