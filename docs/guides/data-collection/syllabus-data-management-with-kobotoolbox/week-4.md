---
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---
# Week 4: Data Cleaning

## **🎯 Objectives**

By the end of this week, you will be able to:

* **Identify common data quality issues** that arise during data collection, such as double entries, misspellings, and missing data.
* **Understand the necessity and purposes of data cleaning** for preparing data for accurate analysis.
* **Explore basic techniques and external tools** for performing data cleaning, recognizing the limitations of KoboToolbox in this regard.

## **📘 Introduction**

Data Cleaning is a very important part of the data collection process. Along the data collection journey, issues will arise that will affect how the data looks like, introducing issues like double entries, misspellings, missing data, changes of the data structure as the process evolves that will require you to make adjustments on the data to fit your analysis needs.

In this week's work, we will tackle this issue by understanding the different data cleaning purposes and potential tools that might be used for this. Although this is an introduction to data cleaning, it is a very tense topic. We will not get chance to dig deeper. pointers will be shared with you throughout the process to learn more about this.

## **📄 Learning Materials**

For this week's deep dive into data cleaning, you will utilize:

* **Understanding Data Discrepancies:** Familiarize yourself with common data issues encountered during collection, such as **double entries, misspellings, missing data, and changes in data structure**.
* **Spreadsheet Software for Cleaning:** Leverage spreadsheet tools (e.g., **Microsoft Excel, Google Spreadsheets, LibreOffice Calc**) for cleaning and organizing your exported data. While basic analysis was covered in Week 3, this week focuses on specific cleaning techniques.
  * Data Cleaning with Google Sheets: https://www.youtube.com/watch?v=pIblnnAtjmk
  * Data Cleaning with Microsoft Excel: https://www.youtube.com/watch?v=oT4emh72fuA
* **Introduction to Specialized Tools:** Explore how specialized data cleaning tools, such as **[OpenRefine](https://openrefine.org/)**, can assist with the process, especially given that KoboToolbox's built-in mechanisms for cleaning are often insufficient or labor-intensive.
  * Data Cleaning with OpenRefine: https://www.youtube.com/watch?v=jyUlT8ohlG4
* **Managing Form Edits and Data Persistence:** Understand the implications of editing forms mid-collection, where data might appear separated, requiring **manual realignment and reconciliation outside of KoboToolbox**.

## **What to Look Out For**

1. **Identify Obvious Issues**
   Look for glaring errors, structural problems, or unexpected patterns in the data.

2. **Handling Missing Data**

   * **Detection**: Identify columns with missing values (`NaN`, `None`, `null`, etc.) and quantify the extent of missingness (e.g., percentage per column or row).
   * **Understanding Why**: Investigate the reasons for missing data (e.g., data entry errors, sensor malfunctions, non-applicability), as this can influence the appropriate imputation strategy.
   * **Common Strategies**:

     * **Deletion**: Remove rows or columns with missing values (use with caution).
     * **Imputation**: Fill in missing values using methods such as mean, median, mode, interpolation, or domain-specific logic.

3. **Handling Incorrect or Inconsistent Data and Typos**

   * **Standardization**:

     * **Case**: Convert text data to a consistent case (e.g., all lowercase) to prevent duplicate categories like "New York" and "new york".
     * **Units**: Ensure numerical values use consistent units (e.g., convert all weights to kilograms).
     * **Formats**: Standardize date formats, phone numbers, etc.
   * **Categorical Data Cleaning**:

     * Consolidate equivalent categories (e.g., "USA", "U.S.A", "United States" → "USA").
   * **Typo Correction**:

     * Fix obvious typos (e.g., "Femal" → "Female").
     * **String Cleaning**: Remove extra whitespace, special characters, or irrelevant string fragments.
     * **Validation Rules**: Enforce rules like non-negative ages, valid postal code formats, etc.

4. **Correcting Data Types**

   * Ensure each column has the appropriate data type (e.g., numbers stored as strings → convert to numeric, date strings → convert to datetime).
   * Incorrect data types can lead to faulty calculations and model errors.

5. **Handling Outliers**

   * **Detection**:

     * Visual tools: Box plots, scatter plots.
     * Statistical methods: Z-scores, IQR, etc.
   * **Interpretation**: Understand whether outliers are genuine or due to errors—critical for choosing the right strategy.
   * **Treatment Options**:

     * **Removal**: Discard outliers if they are clearly errors.
     * **Transformation**: Apply mathematical transformations (e.g., log, square root) to reduce skew.
     * **Capping (Winsorizing)**: Replace extreme values with percentiles (e.g., 1st and 99th).
     * **Binning**: Convert continuous variables into categorical bins.
     * **Imputation**: Treat extreme values as missing and impute.
     * **Keep Them**: Preserve if relevant (e.g., fraud detection).

6. **Handling Duplicates**

   * **Detection**: Look for exact or near-duplicate rows (often based on a subset of columns).
   * **Removal**: Drop duplicates, keeping the first or last instance as appropriate.
   * **Contextual Check**: Ensure duplicates are not legitimate repeated observations.

7. **Dealing with Irrelevant Data** *(can overlap with feature selection)*

   * Remove features that don't contribute to the problem at hand (e.g., ID columns, fields with zero variance).
   * Simplifies the dataset and can improve model performance.

8. **Validation and Documentation**

   * **Re-Profiling**: After cleaning, review summary statistics and visualizations to verify the effects of your cleaning steps and detect any new issues.
   * **Documentation**: Keep a detailed log of all cleaning steps, decisions, and assumptions. This ensures reproducibility, supports collaboration, and preserves context for future use.

## **📝 Activities**

To practice and solidify your understanding of data cleaning:

1. **Identify Data Inconsistencies:** Take an exported dataset (ideally from your own practice surveys or a provided sample) and **identify various data quality problems** such as duplicates, inconsistencies, and missing values.
2. **Apply Basic Cleaning Techniques:** Using a spreadsheet tool of your choice (e.g., Excel, Google Sheets), **perform basic data cleaning operations**. This may include removing duplicate entries, correcting misspellings, standardizing text entries, and handling missing data.
3. **Explore an External Cleaning Tool:** If possible, **watch a tutorial or try a basic task in OpenRefine** to understand how a specialized tool can assist with more complex cleaning tasks.
4. **Reflect on Cleaning Challenges:** Document the specific data issues you encountered and the steps you took to clean them. Reflect on why data cleaning is a necessary post-collection process and its importance for accurate analysis.
5. **Share your experience:** Take screenshots or photos of your experience and upload them on **[the survey linked here](https://ee.kobotoolbox.org/x/GOQfALPW)**.
