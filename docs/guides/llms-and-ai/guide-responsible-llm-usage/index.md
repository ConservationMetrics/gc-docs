---
sidebar_position: 1
tags: [itu-3, idm, opu, tsp]
description: How anyone, including Indigenous Peoples' organizations, can use ChatGPT, Claude, and similar AI assistants while keeping sensitive information in their own systems.
---

# Responsible Use of AI Assistants

ChatGPT, Claude, Gemini, Copilot, and similar tools can help you draft a paragraph, explain a chart, or sketch a formula. They are also someone else's computers. Whatever you type or paste is sent to that company, stored there, and, unless you change your settings, may be used to train later models.

This guide is for anyone who needs to decide what is safe to type or paste. That includes Indigenous Peoples' organizations, community groups, and other organizations. You can follow it whether or not you use Guardian Connector. You do not need to be a programmer.

A **large language model (LLM)** is the system behind these chat tools. In this guide, "AI assistant" means ChatGPT, Claude, Gemini, and other LLM chat products, including assistants built into email, documents, or code editors.

:::warning Policies and settings change often

Privacy policies, training switches, plan names, and what a company promises to do with your chats change often. The steps in this guide are a snapshot. Before you rely on them, look up the provider's latest commitment on their own site and confirm the setting in the account you are actually using.

For the latest Indigenous-led resources on AI, data sovereignty, and community policy, consult the [Indigenous AI Commons](https://indigenousaicommons.org/). It is a living index, updated as communities and researchers publish new work.

:::

## What happens when you paste something in

When you use an LLM chat tool, the chat window can feel private, but when you send a message to an online AI service, you are sharing its contents with the company operating it.

On a typical free or personal account, that company can:

- Store the conversation on its servers
- Use what you sent, and what the assistant replied, to train or improve its models
- Review some conversations for safety

Turning off training, covered [below](#turn-off-model-training), limits the second item for new chats. The conversation still leaves your computer. The company still receives it.

A large company that runs this kind of service is hard to audit. You can accept a setting or a contract that says your chats will not be used for training. You cannot see the systems, the staff access, or the later product changes that would show whether that promise holds. The reliable protection is to keep sensitive records from reaching the company at all, including on an account that says the data will not be used.

There is no reliable way to pull information back out of a model that has already been trained on it. Treat a paste as permanent.

:::note What "trained on your information" means

Training is how a company builds the next version of a model, or a newer revision of the one people are using now. Conversations become part of the material that shapes how that version responds. It picks up patterns from what was sent: the words, the facts, and the kind of answer that followed.

A chat can follow the thread you are already in. Training reaches past your account. The newer model then answers anyone who uses it, anywhere, with that influence baked in. You do not get a private copy, and other people do not see your chat history. They meet a model that has been nudged by what you gave it.

Distinctive details, such as a place name, a family name, or a phrase that appears almost nowhere else, can sometimes come back out in a later answer. That is less common than a general shift in how the model responds. Either way, you cannot aim the effect, and you cannot undo it.

:::

This sits alongside the wider duty to keep authority over community information with the community. See [Data Sharing Protocols Grounded in Indigenous Data Sovereignty](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/).

## Keep sensitive information in your own systems

The people a record is about, or the community authority that governs it, decide whether it can leave your systems. Having the file on your laptop does not grant that permission. Pasting it into ChatGPT, Claude, Google Gemini, Microsoft Copilot, or Meta (i.e. via WhatsApp) shares it with an outside company.

Keep all of the following out of AI assistants unless those people have agreed to this specific use:

- Raw files and exports: survey answers, spreadsheets, databases, GPS tracks, maps, audio, photos, and video
- Anything produced from that material: charts, lists of species or sites tied to places, and written findings
- Information about people: names, households, phone numbers, and other personal details
- Communications: emails, chat threads, meeting notes, and reports
- Access details: passwords, links that sign someone in, and keys for accounts or databases

Locations deserve extra care. A nest site, a patrol route, a sacred place, or a household coordinate can cause harm if it spreads, even when the chat only asked for a summary.

When you are unsure, leave it out and ask. The people the information is about, or the body that governs it, are the ones who can agree to share it. Someone who helps with the technology cannot agree for them.

:::tip A simple test

If you would not hand this text, file, or recording to a company you do not control, keep it out of the chat. A general question about how a tool works can go in. A spreadsheet, a map, a photo, a recording, or a message about your work stays in your own systems.

:::

## Questions you can still ask

An assistant is useful for the method. The records stay with you.

These are reasonable things to send:

- A question about how a tool works ("How do I total a column in a spreadsheet?")
- Column or field names, such as `"Age"` or `"submission_time"`
- Made-up examples that match the shape of the data, such as a fake code `"choice_a"` or a fake distance `3.5`
- Public documentation, or your own draft after names, places, and findings have been removed
- A request for a grammar check on text you wrote about a general topic

The same pattern works for formulas and database queries: send the column names and made-up examples, and keep the real rows with you. If you use Superset in Guardian Connector, [Helpful SQL Queries for Superset](/reference/gc-toolkit/superset/queries/#using-llms-to-generate-sql-queries) walks through that pattern.

**A prompt that keeps the data with you:**

> I need an outline for a one-page community meeting note about camera-trap maintenance. Use three headings: where we worked, what we serviced, and what we still need to decide. Leave blanks where the real places and findings go. I will fill those in. Do not invent results.

**A prompt that sends the data away:**

> Here is last month's camera export, with coordinates and species. Write the community meeting note.

Use the first kind.

## Notice where an assistant is listening

These tools are showing up inside programs people already trust: email, documents, search, messaging, and the web browser itself. A familiar screen can start reading what you type after an update. Before you put sensitive information into a tool, look for an assistant on that screen.

Sharing with another person can continue the trip. A file you send to a colleague, a funder, or a support contact may be pasted into their assistant, or summarized by an assistant their email offers automatically. Ask what will happen to it, the same way you would ask before handing over a paper copy.

A page open in your browser can feel like your own workspace. It sits inside the boundary of whoever hosts that website. What you type, upload, or display there is on their servers, including when the page shows your map, your dashboard, or your draft.

If you do use a chat tool, prefer its website and choose every word you send. [claude.ai](https://claude.ai) and [ChatGPT](https://chatgpt.com) work this way: nothing goes until you type or paste it. That is a narrower door than a desktop app, a browser extension, or an assistant inside email or documents, which can read open files, a connected Drive folder, or the page you are on. A question you thought was general can leave with a spreadsheet, a map, or a password that was sitting in the same folder.

Be selective before you install those. If you already use one, disconnect folders that hold sensitive records, exports, and sign-in details. The website is still the host's computer. Choosing what to paste limits the amount that goes. The host still holds whatever you send.

## Turn off model training

Turn training off on any account you use. The switch is worth setting, and it is still a promise you cannot audit. Community records, personal information, and anything else you would not hand to an outside company stay off their servers.

If your organization has already decided that a particular note may be processed with an assistant — for example a draft method with the sensitive details removed — use a service that commits not to train on chats, and sign in first. On personal ChatGPT and Claude accounts, training is on until you turn it off. When the work can be done without sending the material, do it that way.

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

:::note Claude Artifacts

Claude can build an **Artifact**: an interactive page such as a chart or a dashboard that looks finished and ready to share. The page, and every record you pasted to create it, is stored on Claude's servers. A share link keeps that copy on Claude so other people open it there.

That arrangement works against data sovereignty. The community no longer holds the only copy, and turning off model training does not move the dashboard onto your own systems. If you want help with layout, use made-up numbers. Keep the real dashboard, and the real records, in a tool your organization controls. See [Data Sharing Protocols Grounded in Indigenous Data Sovereignty](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/).

ChatGPT has a similar feature, called [Sites](https://chatgpt.com/features/sites/).

:::

### A few limits that survive the switch

- The conversation is still sent to and stored by the company. A setting that says it will not be used for training is difficult to verify from the outside.
- A thumbs-up or thumbs-down on a reply can allow that conversation to be used for training. Skip those buttons when the chat includes anything you would not want reused.
- Chats the company flags for safety review can still be read and used for safety systems.
- A temporary or incognito chat is still sent to the company. It is a shorter retention setting. It is a poor place for community records.

### Other services

- **Gemini and NotebookLM.** On a personal Google account, what you type can be used to improve Google's models. A Google Workspace account used by an organization can be configured by an administrator so that it is not. Ask that administrator before using either tool with organizational information, and keep community data out unless the data owners have agreed.
- **[Duck.ai](https://duck.ai).** A chat service that says it does not train on your conversations. Sensitive records still stay out unless the people they are about have agreed.

If a new product appears, read its privacy terms before anyone on the team uses it for work. A tool being free, or good at drafting, does not tell you where the text goes.

## Additional concerns: energy use and bias

These tools use a lot of electricity, which sits uneasily with work to care for land and community. They also repeat biases present in the text they were trained on, including biased descriptions of people, places, and species. This guide leaves both topics open. The choice you can make today is what information you send, and whether a person remains responsible for the words and the analysis.

The Humanitarian OpenStreetMap Team and the Red Cross published a [Responsible AI Guide](https://responsibleai.guide/) that covers these topics, including energy and emissions, in more depth.

## :warning: If you are unsure

Ask before you paste. Talk with your organizational lead and with the community that governs the information. If a new AI product might be used for organizational work, decide that with those people before anyone tries it on real data.

When a provider announces a policy change, or when you open a new account, read their latest commitment and re-check the training switch before you send anything.

## Further reading

- [Indigenous AI Commons](https://indigenousaicommons.org/), a living index of Indigenous-led work on AI, data sovereignty, and community policy
- [Data Sharing Protocols Grounded in Indigenous Data Sovereignty](/guides/data-sovereignty/guide-data-sovereignty-and-protocols/)
- [Responsible AI Guide](https://responsibleai.guide/) (HOT and the Red Cross)
- If you use Guardian Connector, [Helpful SQL Queries for Superset](/reference/gc-toolkit/superset/queries/#using-llms-to-generate-sql-queries) shows how to request a formula without pasting live rows