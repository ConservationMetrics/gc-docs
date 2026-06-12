---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# OpenRefine

**OpenRefine** é um aplicativo de desktop gratuito e de código aberto para limpeza, transformação e enriquecimento de dados tabulares – frequentemente referido como "manipulação de dados". Ele oferece recursos poderosos, como segmentação, agrupamento, transformações personalizadas e integração com fontes externas (por exemplo, para reconciliação ou geocodificação). Ao contrário das planilhas, o OpenRefine aplica operações em toda a coluna, e todas as etapas são rastreadas e reaplicadas como receitas de transformação reutilizáveis.

O OpenRefine se destaca em tarefas como:

- Identificar e corrigir valores inconsistentes (por exemplo, erros de digitação ou grafias alternativas)
- Excluir colunas desnecessárias
- Reorganizar colunas ou linhas
- Aprimorar os dados, incorporando informações de fontes externas (por exemplo, conciliando nomes ou códigos).
- Remover valores discrepantes ou duplicados
- Preencher campos ausentes ou alterar os nomes dos cabeçalhos para maior clareza.

Uma de suas vantagens é que permite criar **etapas de transformação reutilizáveis**. Depois de ter limpado um conjunto de dados, você pode aplicar as mesmas etapas a conjuntos de dados futuros com estruturas semelhantes. Isso o torna uma ótima ferramenta para trabalhos iterativos com dados, onde seu conhecimento e estrutura evoluem ao longo do tempo.

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

## Saiba mais e documentação

- [**Manual do Usuário do OpenRefine**](https://openrefine.org/docs) – um guia completo sobre instalação, interfaces, filtros, transformações, reconciliação e exportação.
- [**Edição e Transformações de Células**](https://openrefine.org/docs/manual/cellediting?utm_source=chatgpt.com) – instruções passo a passo para fluxos de trabalho comuns e avançados de limpeza.
- [**Referências de Funções GREL**](https://openrefine.org/docs/manual/grel) – documentação detalhada e exemplos de expressões para transformação.