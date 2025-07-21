# Contributor License Agreement

By submitting a pull request to this project, you agree to license your contribution under the terms of the MIT License.

Please make sure that you have the right to license the code under the MIT License and that your contributions do not infringe on the rights of others.

# Using Git

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

# Contributing to the Documentation

We use [Docusaurus](https://docusaurus.io/) to build and host our documentation.

To contribute to the documentation, you can edit the files in the `docs` directory.

### Contribution Process

**External Contributors**: Unless you are a Conservation Metrics Inc. (CMI) team member, all contributions must be submitted as a pull request for review.

**CMI Team Members**: Core CMI team members may submit pull requests and merge without review, or commit directly to the main branch, at their discretion.

### Contribution Standards

Not everything in this repository needs to be perfect or polished. Our documentation is meant to be a living resource — something we can build on iteratively to meet partner needs in the moment, with plenty of opportunity for future refinement and improvement.

# Coding Style

## Prettier for JavaScript

All developers are expected to use [prettier](https://prettier.io/) to format their JavaScript 
code. Currently, we use the standard Prettier [configuration](https://prettier.io/docs/en/configuration.html).

> To apply Prettier autoformatting you can configure your text editor to format on save [according
> to these docs](https://prettier.io/docs/en/editors.html)
> - For VS Code, set `editor.formatOnSave` to true in your editor config.
> or in a pre-commit hook [according to these docs](https://prettier.io/docs/en/precommit.html).
