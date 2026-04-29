---
sidebar_position: 3
tags: [itu-3, idm, opu, tsp]
---

# Survey Design Best Practices

This page captures practical, field-tested guidance for designing robust XLSForms for use in KoboToolbox and ODK. The focus is on avoiding common pitfalls and reducing downstream data cleaning and analysis overhead.

## 🧱 Form Structure Planning

### Plan Structure Before Deployment

Changing form structure after data collection has started can fragment your dataset.

E.g., moving a question into a group later will create a new column in exports rather than modifying the original. This results in the same logical field appearing in multiple columns, complicating analysis.

:::tip Best practices
- Finalize question groupings and structure before deployment.
- Pilot your form with test submissions.
- Avoid renaming or moving questions after data collection begins.
- If changes are unavoidable, document them and plan for data consolidation.
:::

### Understand How Form Builder Edits Affect Data

In the KoboToolbox form builder, even small edits (e.g., renaming a question) create new columns in the dataset.

:::warning
This can make data appear missing when it has actually been shifted to a new column.
:::

:::tip
Download and review your form as an XLSForm before deployment to ensure consistency in naming and structure.
:::

## ❓ Question Design

### Use Select Questions Instead of Free Text When Possible

Avoid using `text` (string) fields for values that come from a known set, e.g.:

- Names of known participants
- Villages or regions
- Predefined categories

Free text introduces inconsistency, e.g.:

- Spelling variations
- Abbreviations
- Extra spaces
- Different naming conventions for the same entity

These become distinct values in your dataset and require cleanup.

:::tip Best practice
- Use `select_one` or `select_multiple` for any known set of values.
- Predefine choices whenever possible.
:::

### Use Meaningful Question Names (Not Just Labels)

The `label` is what users see.  
The `name` is what appears in your exported dataset.

If your `name` values are unclear or inconsistent, your dataset becomes difficult to work with.

:::caution Bad example
`q1`, `q2`, `data_1`, `E5_Q4_1`
:::

:::tip Good example
`household_size`, `respondent_village`, `water_source_type`
:::

:::tip Best practices
- Use short, descriptive, machine-friendly names.
- Avoid spaces (use underscores).
- Keep naming consistent across the form.
:::

## 🕒 Metadata and Automatic Fields

### Avoid Redundant Date Questions

It is not necessary to ask users “What is today’s date?”

XLSForm already provides built-in metadata fields such as `today` and submission timestamps.

:::tip Best practice
- Use metadata fields instead of manual date questions.
- Reduces user effort and avoids input errors.
:::

## ✅ Data Validation and Constraints

### Use Constraints to Enforce Valid Inputs

Many numeric questions have natural limits, e.g.:

- Household size cannot be negative
- Age should fall within a reasonable range

Without constraints, invalid values can enter your dataset and require cleaning later.

E.g., a constraint:

```xlsform
type: integer  
name: household_size  
constraint: . >= 0  
constraint_message: "Value must be zero or greater"
```

:::tip Best practices
- Always define valid ranges for numeric inputs.
- Provide clear constraint messages for enumerators.
- Use constraints to catch errors at the point of entry.
:::

## 🧮 Derived Data and Calculations

### Use Calculate Fields for Derived Values

The `calculate` type allows you to compute values that are not shown to the user but are included in the dataset.

This is extremely useful for, e.g.:

- Totals
- Flags
- Precomputed indicators

E.g., if you collect:

- Number of adults
- Number of children

You can compute total household members:

```xlsform
type: calculate  
name: household_total  
calculation: ${num_adults} + ${num_children}
```

:::tip Benefits
- Reduces need for post-processing.
- Ensures consistency across submissions.
- Enables downstream workflows (e.g., filtering, dashboards).
:::

## 📚 When in Doubt: Where to Find More Information

If you’re unsure how to implement something or want to go deeper, these are reliable, well-maintained resources:

- **XLSForm documentation** → http://xlsform.org/  
  Core specification and documentation for XLSForm structure and features.

- **Humanitarian Data Solutions (YouTube)** → https://www.youtube.com/@HumanitarianDataSolutions  
  Practical tutorials, walkthroughs, and real-world KoboToolbox usage tips.

- **KoboToolbox XLSForm Guide** → https://support.kobotoolbox.org/getting_started_xlsform.html  
  KoboToolbox’s official guide, including platform-specific features and constraints.

- **ODK Tutorial** → https://docs.getodk.org/tutorial-first-form/  
  Step-by-step introduction to building forms.

- **ODK Form Reference** → https://docs.getodk.org/form-reference/  
  Comprehensive reference for all XLSForm question types, functions, and advanced logic.

:::tip
If you're stuck, search the KoboToolbox community forum or ODK documentation first—most edge cases have already been encountered and solved.
:::