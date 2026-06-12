---
sidebar_position: 3
tags: [itu-3, idm, opu, tsp]
---

# Passo 3: Aplicar rótulos de contexto local a um conjunto de dados

**Pré-requisito:** As rótulos devem já existir no data warehouse a partir do passo anterior, [**Importar Rótulos do Hub de Contextos Locais**](fetch-labels-script).

Em Windmill, abra o aplicativo **Guardian Connector - Anotações de Contexto Local** (resumo: *GC - Anotações de Contexto Local*). Ele utiliza um fluxo em três etapas.

## Passo 1 – Selecione o conjunto de dados e o conjunto de rótulos.

![Select dataset and label set](/img/guides/guide-local-contexts/lc-app-1.jpg)

- **Conjunto de dados** – Selecione a tabela do **Armazém** que deseja anotar. Os conjuntos de dados são as mesmas tabelas que você usa em outros lugares no Guardian Connector.
- **Conjunto de rótulos para o contexto local** – Selecione a tabela ``localcontexts_…`` gerada pela função **Local Contexts: Recuperar Rótulos**. Se nada aparecer aqui, o script de recuperação ainda não foi executado com sucesso.

## Passo 2 – Selecione as etiquetas TK e BC

![Choose TK and BC labels](/img/guides/guide-local-contexts/lc-app-2.jpg)

- Selecione os rótulos "Conhecimento Tradicional" e "Biológico e Cultural" das opções carregadas da sua tabela de conjuntos de rótulos selecionada.
- Se você já tiver aplicado rótulos a este conjunto de dados anteriormente, o aplicativo mostrará quais rótulos já foram aplicados e permitirá que você faça as alterações necessárias na seleção.

## Passo 3 – Revisar e salvar

![Review and save](/img/guides/guide-local-contexts/lc-app-3.jpg)

- Confirme o nome do conjunto de dados e a lista de rótulos que serão aplicados.
- Utilize a opção "**Salvar e Concluir**" para criar o mapeamento.

## O que é escrito

- O aplicativo **não modifica os registros** na tabela principal de dados.
- Es escreve em uma tabela de mapeamento associada chamada **`{dataset_name}__lc_labels`**, criando-a se necessário.
- A função "Salvar" substitui a configuração anterior para aquele conjunto de dados (os registros existentes para essa tabela de mapeamento são removidos e, em seguida, os novos seleções são inseridos).

## Next

Agora que você aplicou rótulos a um conjunto de dados, pode utilizá-los para catalogar dados, etiquetar metadados e fins de descoberta (usando-os).