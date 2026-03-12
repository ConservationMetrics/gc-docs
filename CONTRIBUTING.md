# Contributor License Agreement

By submitting a pull request to this project, you agree to license your contribution under the terms of the MIT License.

Please make sure that you have the right to license the code under the MIT License and that your contributions do not infringe on the rights of others.

## Using Git

We use GitHub to host code, track issues, and accept pull requests.

## Git Branching

**We build and release from the `main` branch, so code merged here should always be stable.**

Prefer short-lived feature branches.

- Piecemeal progress towards broad code changes should merge to long-running branches until
  everything there is stable and deployable, at which point the long-running branch gets merged
  to `main`.
- Since short, coherent patches are easier to review, we code-review the individual PRs into
  the long-running feature branch (instead of review when merging the long-running branch to
  `main`)

## Contributing to the Documentation

We use [Docusaurus](https://docusaurus.io/) to build and host our documentation.

To contribute to the documentation, you can edit the files in the `docs` directory.

### Contribution Process

**External Contributors**: Unless you are a Conservation Metrics Inc. (CMI) team member, all contributions must be submitted as a pull request for review.

**CMI Team Members**: Core CMI team members may submit pull requests and merge without review, or commit directly to the main branch, at their discretion.

### Contribution Standards

Not everything in this repository needs to be perfect or polished. Our documentation is meant to be a living resource — something we can build on iteratively to meet partner needs in the moment, with plenty of opportunity for future refinement and improvement.

## Translation

:::info

🚧 Under construction

This process is largely being designed.
We want this to be a process that is fluid and with critical but surgical human intervention, with us much machine input as possible, but for now we haven't got to a process that solves it.

In the meantime, we will be doing this process manually.

:::

We follow the [Docusaurus i18n documentation](https://docusaurus.io/docs/i18n/introduction) for all translation workflows.

**Adding a new language:**

1. Add the new locale to `docusaurus.config.ts`
2. Run `pnpm write-translations --locale <locale>` to generate localizable JSON files
3. Translate the content in the `i18n/<locale>/` directory

**Translating existing content:**

1. Edit the JSON files in `i18n/<locale>/` for UI strings
2. Edit the Markdown files in `docs/` using the `localized` path (e.g., `docs/pt/` for Portuguese)

In order to test your translations, you need to do the following:

1. First, you need to do `pnpm run build`. That will generate both the default (English) in / and the Portuguese version in /pt.
2. To test it, you run `pnpm run serve`. This will serve what was just built.

If you want to test your translations, you need to run `pnpm run start --locale pt`. This will start the live server with the pt location.


## Coding Style

### Prettier for JavaScript

All developers are expected to use [prettier](https://prettier.io/) to format their JavaScript 
code. Currently, we use the standard Prettier [configuration](https://prettier.io/docs/en/configuration.html).

> To apply Prettier autoformatting you can configure your text editor to format on save [according
> to these docs](https://prettier.io/docs/en/editors.html)
> - For VS Code, set `editor.formatOnSave` to true in your editor config.
> or in a pre-commit hook [according to these docs](https://prettier.io/docs/en/precommit.html).

## Using User Personas in Documentation

When referring to specific user types throughout the Guardian Connector documentation, we use these persona codes in Docusaurus tags. You can find all content tagged for a specific user persona by using the tag links:

- **ITU-1**: [New Indigenous Tech User content](/tags/itu-1)
- **ITU-2**: [Intermediate Indigenous Tech User content](/tags/itu-2)
- **ITU-3**: [Advanced Indigenous Tech User content](/tags/itu-3)
- **IDM**: [Indigenous Decision Maker content](/tags/idm)
- **ICM**: [Indigenous Community Member content](/tags/icm)
- **OPU**: [Organizational Power User content](/tags/opu)
- **TSP**: [Technical Support Partner content](/tags/tsp)

When writing documentation, include the appropriate persona tags in the front matter of your markdown files to help users find content relevant to their technical level and role:

```markdown
---
tags: [itu-1, itu-2]  # Content for New and Intermediate Indigenous Tech Users
---

# Your documentation content
```

This tagging system ensures that users can easily find documentation tailored to their technical expertise and role within their organization.
