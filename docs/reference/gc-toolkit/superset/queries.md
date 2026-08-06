---
sidebar_position: 3
tags: [opu, tsp]
---

# Helpful SQL Queries for Superset

This page contains helpful SQL queries for improving your Superset datasets and charts.

You can either use these to create a [virtual dataset](https://docs.preset.io/docs/virtual-datasets) which will apply your query to the entire dataset, or you can use them in a single chart. 

It is recommended to create a virtual dataset if you plan to apply the same query to multiple charts. That way, you don't have to repeat the query for each chart.

:::tip
One best practice is to create a single virtual dataset for the entire dataset with all of the columns you need. That way, you don't have to create charts for different virtual datasets, which may cause problems when configuring filters on a Superset dashboard.
:::

:::tip
These queries are written in SQL, which is a language for querying databases. If you are not familiar with SQL, you can learn more about it [here](https://www.w3schools.com/sql/).
:::

## String Formatting and Manipulation

### Remove underscore and capitalize first letter of the string

```sql
CONCAT(UPPER(SUBSTRING(REPLACE("Column_string", '_', ' ') FROM 1 FOR 1)),
       LOWER(SUBSTRING(REPLACE("Column_string", '_', ' ') FROM 2)))
```

| Before           | After           |
|------------------|-----------------|
| "example_string" | "Example string" |

---

### Capitalize first letter of each word and replace _ with a space

```sql
INITCAP(REPLACE("Column_string", '_', ' '))
```

| Before           | After           |
|------------------|-----------------|
| "example_string" | "Example String" |

---

### Unnest values based on regex, and then capitalize each first letter of each word

```sql
REGEXP_REPLACE(INITCAP(unnest(ARRAY_REMOVE(string_to_array(Column_string, ' '), ''))), '_', ' ', 'g')
```

 Before                  | After                  |
|-------------------------|------------------------|
| "example_string,another_example" | "Example_String", "Another_Example" |

---

### Combine the values of two fields, and then apply regex to replace _ with ", " and capitalize the first letter of each word

```sql
CASE
        WHEN "Which_ethnicity_does_the_person_identify_with" IN ('other', 'other, 1') THEN 'Other'
        ELSE REGEXP_REPLACE(INITCAP(REPLACE("Which_ethnicity_does_the_person_identify_with", '_', ', ')), ', ([a-z])', ', ' || UPPER(SUBSTRING('\1' FROM 1 FOR 1)) || SUBSTRING('\1' FROM 2))
    END
```

| Before                  | After                  |
|-------------------------|------------------------|
| "dutch_american"        | "Dutch, American"      |
| "german_french"         | "German, French"       |
| "other"                | "Other"               |
| "other, 1"             | "Other"               |

## Data Type Conversion

### Convert a TEXT date field (with format 2019-02-24) into DATETIME 

```sql
"date"::timestamp
```

| Before       | After                |
|--------------|----------------------|
| "2019-02-24" | "2019-02-24 00:00:00"|
| "2020-07-15" | "2020-07-15 00:00:00"|
| "2021-11-30" | "2021-11-30 00:00:00"|

:::tip

Converting a text date into a `TIMESTAMP` is especially helpful when you want to:

- **Build a time-based line chart** — for example, plotting date on the X axis and the number of records on the Y axis, such as the number of CoMapeo observations captured per month.
- **Add a Time Range filter to a dashboard** — this filter requires every chart on the dashboard to have a `TIMESTAMP` field set as a filter.

It is a good idea to do this conversion before you start creating charts, as Superset will auto detect the presence of a `TIMESTAMP` field and add it to your filter options, so you can easily add a Time Range filter to your dashboard.

:::

---

### Cast a Kobo timestamp to YYYY-MM-DD

```sql
MAX(TO_TIMESTAMP(_submission_time, 'YYYY-MM-DD"T"HH24:MI:SS'))
```

| _submission_time (Before) | _submission_time |
|------------------------|--------------------|
| 2024-06-25T15:27:32	           | 2024-06-05        |

## Creating Categories and Ranges

### Recast a string column as numeric, and use specific ranges for the values

```sql
CASE 
    WHEN CAST("Age" as INTEGER) BETWEEN 0 AND 9 THEN '0-10'
    WHEN CAST("Age" as INTEGER) BETWEEN 10 AND 19 THEN '10-20'
    WHEN CAST("Age" as INTEGER) BETWEEN 20 AND 29 THEN '20-30'
    WHEN CAST("Age" as INTEGER) BETWEEN 30 AND 39 THEN '30-40'
    WHEN CAST("Age" as INTEGER) BETWEEN 40 AND 49 THEN '40-50'
    WHEN CAST("Age" as INTEGER) BETWEEN 50 AND 59 THEN '50-60'
    WHEN CAST("Age" as INTEGER) BETWEEN 60 AND 69 THEN '60-70'
    WHEN CAST("Age" as INTEGER) BETWEEN 70 AND 79 THEN '70-80'
    WHEN CAST("Age" as INTEGER) >= 80 THEN '80 and over'
    ELSE 'Other'
END
```

| Age (Before) | Age Range (After) |
|--------------|-------------------|
| "5"          | "0-10"            |
| "15"         | "10-20"           |
| "27"         | "20-30"           |
| "31"         | "30-40"           |
| "44"         | "40-50"           |
| "58"         | "50-60"           |
| "65"         | "60-70"           |
| "79"         | "70-80"           |
| "85"         | "80 and over"     |
| "9000"       | "80 and over"     |        
| "unknown"    | "Other"           |

---

### Recast a birthdate text field that is "YYYY-MM-DD" to only YYYY

```sql
CASE
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) <= 1940 THEN 'Before 1940'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 1940 AND 1949 THEN '1940 - 1949'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 1950 AND 1959 THEN '1950 - 1959'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 1960 AND 1969 THEN '1960 - 1969'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 1970 AND 1979 THEN '1970 - 1979'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 1980 AND 1989 THEN '1980 - 1989'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 1990 AND 1999 THEN '1990 - 1999'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 2000 AND 2009 THEN '2000 - 2009'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 2010 AND 2019 THEN '2010 - 2019'
    WHEN CAST(SUBSTRING("Birthdate", 1, 4) AS INTEGER) BETWEEN 2020 AND 2029 THEN '2020 - 2029'
    ELSE 'After 2029'
END
```

| Birthdate (Before) | Birthyear (After) |
|------------------------|--------------------|
| "1935-06-15"           | "Before 1940"        |
| "1945-08-20"           | "1940 - 1949"      |
| "1955-12-01"           | "1950 - 1959"      |
| "1965-03-22"           | "1960 - 1969"      |
| "1975-07-30"           | "1970 - 1979"      |
| "1985-11-05"           | "1980 - 1989"      |
| "1995-04-18"           | "1990 - 1999"      |
| "2005-09-25"           | "2000 - 2009"      |
| "2015-02-14"           | "2010 - 2019"      |
| "2025-10-10"           | "2020 - 2029"      |

---

### Categorize distance based on meter ranges

```sql
CASE 
    WHEN "how_many_meters_is_the_nest_from_bush" = '' THEN 'Not recorded'
    WHEN CAST("how_many_meters_is_the_nest_from_bush" as REAL) BETWEEN 0 AND 0.9 THEN '0-1m'
    WHEN CAST("how_many_meters_is_the_nest_from_bush" as REAL) BETWEEN 1 AND 1.9 THEN '1-2m'
    WHEN CAST("how_many_meters_is_the_nest_from_bush" as REAL) BETWEEN 2 AND 2.9 THEN '2-3m'
    WHEN CAST("how_many_meters_is_the_nest_from_bush" as REAL) BETWEEN 3 AND 3.9 THEN '3-4m'
    WHEN CAST("how_many_meters_is_the_nest_from_bush" as REAL) BETWEEN 4 AND 4.9 THEN '4-5m'
    WHEN CAST("how_many_meters_is_the_nest_from_bush" as REAL) >= 5 THEN '5m and over'
    ELSE 'Not recorded'
END
```

| Distance (Before)       | Distance Range (After) |
|-------------------------|------------------------|
| ""                      | "Not recorded"         |
| "0.5"                   | "0-1m"                 |
| "1.2"                   | "1-2m"                 |
| "2.8"                   | "2-3m"                 |
| "3.5"                   | "3-4m"                 |
| "4.7"                   | "4-5m"                 |
| "5.0"                   | "5m and over"          |
| "6.3"                   | "5m and over"          |
| "unknown"               | "Not recorded"         |

## Data Cleaning and Value Transformation

### Convert 0 and 1 form responses to "No" and "Yes"

```sql
CASE
    WHEN "Is_the_person_a_member_of_the_community" = '0' THEN 'No'
    WHEN "Is_the_person_a_member_of_the_community" = '1' THEN 'Yes'
  END
```


| Before | After |
|--------|-------|
| "0"    | "No" |
| "1"    | "Yes" |

### Convert gender form responses to strings in the Indigenous language, with "no answer" fallback

```sql
CASE
    WHEN "Gender" = 'man__eluwa' THEN 'Man (Eluwa)'
    WHEN "Gender" = 'vrouw__w_lei' THEN 'Vrouw (Wëlei)'
    ELSE 'No answer'
END
```

| Before | After |
|--------|-------|
| "man__eluwa"    | "Man (Eluwa)" |
| "vrouw__w_lei"    | "Vrouw (Wëlei)" |
| NULL   | "No answer" |

---

### Replace raw Kobo choice values with labels from the `__labels` table

Kobo submissions store raw choice codes (for example `n_o` instead of `não`). Each Kobo responses table has a companion `<table_name>__labels` lookup with the human-readable labels from the form definition. Join on both `question_name` and `name` so reused codes (such as shared `0`–`5` scales) resolve to the correct label for that question.

Prefer this over hardcoding `CASE` rewrites when the form already provides labels. See the [KoboToolbox `__labels` docs](https://github.com/ConservationMetrics/gc-scripts-hub/tree/main/f/connectors/kobotoolbox#label-lookup-table-__labels) for the table schema.

```sql
SELECT
    s.*,

    COALESCE(
        l.label,
        CAST(s."Was_the_species_observed" AS TEXT)
    ) AS "Was_the_species_observed__LABEL"

FROM my_kobo_form AS s

LEFT JOIN my_kobo_form__labels AS l
    ON l.question_name = 'Was_the_species_observed'
    AND l.name = CAST(s."Was_the_species_observed" AS TEXT)
    AND l.type = 'choices';
```

| `Was_the_species_observed` (Before) | `Was_the_species_observed__LABEL` (After) |
|-------------------------------------|-------------------------------------------|
| `"sim"`                             | `"sim"`                                   |
| `"n_o"`                             | `"não"`                                   |
| `NULL` / unmatched code             | raw value (via `COALESCE`)                |

To label several choice columns at once, add one `LEFT JOIN` per question (each with its own alias). That keeps each lookup scoped to the right `question_name`:

```sql
SELECT
    s.*,

    COALESCE(
        obs.label,
        CAST(s."Was_the_species_observed" AS TEXT)
    ) AS "Was_the_species_observed__LABEL",

    COALESCE(
        threat.label,
        CAST(s."Main_threat_to_the_forest" AS TEXT)
    ) AS "Main_threat_to_the_forest__LABEL",

    COALESCE(
        condition.label,
        CAST(s."Forest_condition" AS TEXT)
    ) AS "Forest_condition__LABEL"

FROM my_kobo_form AS s

LEFT JOIN my_kobo_form__labels AS obs
    ON obs.question_name = 'Was_the_species_observed'
    AND obs.name = CAST(s."Was_the_species_observed" AS TEXT)
    AND obs.type = 'choices'
    AND obs.language = 'pt'

LEFT JOIN my_kobo_form__labels AS threat
    ON threat.question_name = 'Main_threat_to_the_forest'
    AND threat.name = CAST(s."Main_threat_to_the_forest" AS TEXT)
    AND threat.type = 'choices'
    AND threat.language = 'pt'

LEFT JOIN my_kobo_form__labels AS condition
    ON condition.question_name = 'Forest_condition'
    AND condition.name = CAST(s."Forest_condition" AS TEXT)
    AND condition.type = 'choices'
    AND condition.language = 'pt';
```

| Column | Before | After |
|--------|--------|-------|
| `Was_the_species_observed` | `"n_o"` | `"não"` |
| `Main_threat_to_the_forest` | `"logging"` | `"exploração madeireira"` |
| `Main_threat_to_the_forest` | `"fire"` | `"fogo"` |
| `Forest_condition` | `"degraded"` | `"degradada"` |
| `Forest_condition` | `"intact"` | `"intacta"` |

:::tip
For multilingual forms, add `AND l.language = 'pt'` (or another language code) to each join so you pick one translation. Use this query as a [virtual dataset](https://docs.preset.io/docs/virtual-datasets) if several charts need the labeled columns.
:::

### Set null values to "No answer"

```sql
COALESCE("Did_you_take_a_course", 'No answer')
```

| Before | After |
|--------|-------|
| NULL   | "No answer" |

## Geospatial Data Processing

### Create a virtual database with latitude and longitude (for Mapbox Map chart)

For a field `Record_your_current_location` with values like `"-1.234567 8.901234 124.4 15.899999618530273"` (latitude, longitude, altitude, accuracy),

```sql
SELECT 
  CAST(SPLIT_PART("Record_your_current_location", ' ', 1) AS FLOAT) AS latitude,
  CAST(SPLIT_PART("Record_your_current_location", ' ', 2) AS FLOAT) AS longitude
FROM my_kobo_form
```

For a field `g__coordinates` with values like `"[123.456, 78.901]"` (longitude, latitude),

```sql
SELECT 
  CAST(SPLIT_PART("g__coordinates", '[', 2) AS FLOAT) AS latitude,
  CAST(SPLIT_PART("g__coordinates", ']', 1) AS FLOAT) AS longitude
FROM my_mapping_data
```