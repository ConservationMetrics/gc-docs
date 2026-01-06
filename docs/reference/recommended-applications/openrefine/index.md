---
sidebar_position: 2
tags: [itu-2, itu-3, opu, tsp]
---

# OpenRefine

**OpenRefine** is a free, open-source desktop application for cleaning, transforming, and enriching tabular data — often referred to as _data wrangling_. It offers powerful capabilities such as faceting, clustering, custom transformations, and integration with external sources (e.g., for reconciliation or geocoding). Unlike spreadsheets, OpenRefine applies operations across entire columns, and all steps are tracked and re-applied as reusable transformation recipes.

OpenRefine excels at tasks such as:

- Identifying and correcting inconsistent values (e.g., typos or alternate spellings)
- Discarding unnecessary columns
- Restructuring columns or rows
- Enriching data by pulling in information from external sources (e.g., reconciling names or codes)
- Removing outliers or duplicates
- Filling in missing fields or renaming headers for clarity

One of its strengths is that it allows you to **create reusable transformation steps**. Once you've cleaned one dataset, you can apply the same steps to future datasets with similar structures. This makes it a great companion for iterative data work, where your understanding and structure evolve over time.

---

## Typical Workflow using KoboToolbox Survey Data

Here's a common workflow when preparing data collected via [KoboToolbox](/reference/connected-applications/kobotoolbox):

1. **Export data** from KoboToolbox as CSV.
2. **Import into OpenRefine** by selecting the CSV file or entering URL. Enable options like “parse numbers, dates” and “trim whitespace” during import.
3. **Explore & Facet your Data**  
   - Use text or numeric facets to view unique values or spot anomalies.
   - Apply transformations or clustering to correct typos or unify values (e.g. “male” vs “Male”).
4. **Clean & Transform**
   - Use "Edit cells → Transform…" with [GREL functions](https://openrefine.org/docs/manual/grel) (e.g., `value.trim()`, `value.toLowercase()`, `value.toDate("dd/MM/yyyy")`) to standardize formats.
   - For columns with dates, apply `value.toDate(...)` to convert strings into ISO‑8601 format.
5. **Enrich Your Data**
   - Add a new column via "Edit column → Add column based on this column…" and fetch external data (e.g., geocoding or code lookups).
   - Reconcile survey metadata, names, or organizational codes against trusted sources.
6. **Save the Cleaning Recipe**
   - Review the History panel to verify all transformations.
   - Export the history as a JSON recipe or script to reapply the same steps to future datasets.
7. **Export the Cleaned Data**
   - Export as CSV, Excel, or Google Sheets for analysis or upload back into **Guardian Connector**.

This workflow ensures consistency and reproducibility, making it ideal for handling iterative or growing survey datasets.

## Why Use OpenRefine in Indigenous Data Contexts?

- **Transparency & Accountability** – All transformations are logged and shareable, helping to maintain traceability and respecting community consent and data integrity.
- **Reusability** – Once clean‑up rules are defined, they can be applied to successive datasets, supporting scalable and efficient data processing.
- **Integration-Friendly** – Works smoothly with Guardian Connector, KoboToolbox, and external reconciliation sources.
- **Ethical Data Enrichment** – By reconciling or enriching only with trusted, community-aligned datasets, it supports data sovereignty by avoiding opaque third-party “black-box” processing steps.

---

## Learn More & Documentation

- [**OpenRefine User Manual**](https://openrefine.org/docs) – comprehensive guidance on installation, interfaces, facets, transformations, reconciliation, and exporting.
- [**Cell Editing & Transformations**](https://openrefine.org/docs/manual/cellediting?utm_source=chatgpt.com) – step-by-step instructions for common and advanced cleaning workflows.
- [**GREL Functions Reference**](https://openrefine.org/docs/manual/grel) – in-depth documentation and examples of transformation expressions.