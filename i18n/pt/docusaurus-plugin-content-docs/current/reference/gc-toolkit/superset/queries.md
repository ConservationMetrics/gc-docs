---
sidebar_position: 3
tags: [opu, tsp]
---

# Consultas SQL úteis para o Superset

Esta página contém consultas SQL úteis para melhorar seus conjuntos de dados e gráficos no Superset.

Você pode usar essas opções para criar um conjunto de dados virtual (disponível em: [https://docs.preset.io/docs/virtual-datasets](https://docs.preset.io/docs/virtual-datasets)), que aplicará sua consulta a todo o conjunto de dados, ou pode usá-las em um único gráfico. 

É recomendado criar um conjunto de dados virtual se você planeja aplicar a mesma consulta a vários gráficos. Dessa forma, você não precisará repetir a consulta para cada gráfico.

:::dica
Estas consultas são escritas em SQL, que é uma linguagem para consultar bancos de dados. Se você não estiver familiarizado com o SQL, pode aprender mais sobre ele [aqui](https://www.w3schools.com/sql/).
:::

## Formatação e Manipulação de Strings

### Remova o sublinhado e capitalize a primeira letra da string.

```sql
CONCAT(UPPER(SUBSTRING(REPLACE("Column_string", '_', ' ') FROM 1 FOR 1)),
       LOWER(SUBSTRING(REPLACE("Column_string", '_', ' ') FROM 2)))
```

| Before           | After           |
|------------------|-----------------|
| string\_exemplo | String de exemplo |

---

### Capitalize first letter of each word and replace _ with a space

```sql
INITCAP(REPLACE("Column_string", '_', ' '))
```

| Before           | After           |
|------------------|-----------------|
| string\_exemplo | "Example String" |

---

### Extraia valores com base em expressões regulares, e em seguida, capitalize a primeira letra de cada palavra.

```sql
REGEXP_REPLACE(INITCAP(unnest(ARRAY_REMOVE(string_to_array(Column_string, ' '), ''))), '_', ' ', 'g')
```

 Antes                  | Depois                  |
|-------------------------|------------------------|
| string\_de\_exemplo, outro\_exemplo | Exemplo_String", "Outro_Exemplo |

---

### Combine the values of two fields, and then apply regex to replace _ with ", " and capitalize the first letter of each word

```sql
CASE
        WHEN "Which_ethnicity_does_the_person_identify_with" IN ('other', 'other, 1') THEN 'Other'
        ELSE REGEXP_REPLACE(INITCAP(REPLACE("Which_ethnicity_does_the_person_identify_with", '_', ', ')), ', ([a-z])', ', ' || UPPER(SUBSTRING('\1' FROM 1 FOR 1)) || SUBSTRING('\1' FROM 2))
    END
```

| Antes                  | Depois                  |
|-------------------------|------------------------|
| "dutch_american"        | "Dutch, American"      |
| "german_french"         | "German, French"       |
| "other"                | Outros               |
| "other, 1"             | Outros               |

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

---

### Converta um carimbo de data e hora do Kobo para o formato AAAA-MM-DD

```sql
MAX(TO_TIMESTAMP(_submission_time, 'YYYY-MM-DD"T"HH24:MI:SS'))
```

| \_horário de envio (Antes) | _submission_time |
|------------------------|--------------------|
| 25 de junho de 2024, 15:27:32	           | 2024-06-05        |

## Criando Categorias e Faixas

### Converta uma coluna de texto em um tipo numérico e utilize intervalos específicos para os valores.

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

| Idade (Antes) | Faixa etária (após) |
|--------------|-------------------|
| "5"          | 0-10            |
| "15"         | 10-20           |
| "27"         | 20 a 30           |
| "31"         | 30 a 40           |
| "44"         | 40 a 50           |
| "58"         | 50 a 60           |
| "65"         | 60-70           |
| "79"         | 70 a 80           |
| "85"         | 80 anos ou mais     |
| 9000       | 80 anos ou mais     |        
| desconhecido    | Outros           |

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

### Classifique a distância com base em faixas de medição

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

| Distância (Antes)       | Intervalo de distância (após) |
|-------------------------|------------------------|
| ""                      | Não registrado         |
| 0,5                   | 0-1 metro                 |
| 1.2                   | 1-2 metros                 |
| 2,8                   | 2-3 metros                 |
| 3,5                   | 3-4 metros                 |
| 4,7                   | 4-5 metros                 |
| 5,0                   | 5 metros ou mais          |
| 6.3                   | 5 metros ou mais          |
| desconhecido               | Não registrado         |

## Limpeza e transformação de dados

### Converta as respostas que contêm os valores 0 e 1 nos termos "Não" e "Sim".

```sql
CASE
    WHEN "Is_the_person_a_member_of_the_community" = '0' THEN 'No'
    WHEN "Is_the_person_a_member_of_the_community" = '1' THEN 'Yes'
  END
```


| Before | After |
|--------|-------|
| "0"    | "No" |
| "1"    | Sim |

### Converter as respostas das opções de gênero em strings na língua indígena, com uma opção padrão para "sem resposta".

```sql
CASE
    WHEN "Gender" = 'man__eluwa' THEN 'Man (Eluwa)'
    WHEN "Gender" = 'vrouw__w_lei' THEN 'Vrouw (Wëlei)'
    ELSE 'No answer'
END
```

| Before | After |
|--------|-------|
| man__eluwa    | Homem (Eluwa) |
| mulher_liderança    | Mulher (Wëlei) |
| NULL   | Sem resposta |

### Defina valores nulos como "Não respondeu

```sql
COALESCE("Did_you_take_a_course", 'No answer')
```

| Before | After |
|--------|-------|
| NULL   | Sem resposta |

## Processamento de Dados Espaciais

### Crie um banco de dados virtual com latitude e longitude (para o gráfico do Mapbox).

Para um campo ``Record_your_current_location`` com valores como "-1.234567 8.901234 124.4 15.899999618530273" (latitude, longitude, altitude, precisão)

```sql
SELECT 
  CAST(SPLIT_PART("Record_your_current_location", ' ', 1) AS FLOAT) AS latitude,
  CAST(SPLIT_PART("Record_your_current_location", ' ', 2) AS FLOAT) AS longitude
FROM my_kobo_form
```
