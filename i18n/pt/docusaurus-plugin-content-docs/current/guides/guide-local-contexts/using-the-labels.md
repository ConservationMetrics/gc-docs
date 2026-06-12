---
sidebar_position: 4
tags: [itu-3, idm, opu, tsp]
---

# Passo 4: Utilizando os Rótulos

Após você aplicar etiquetas a um conjunto de dados (usando o aplicativo de anotações), o Guardian Connector armazena o mapeamento no data warehouse, para que outras ferramentas possam tratar os "Contextos Locais" como metadados de primeira classe — não apenas dentro do Windmill.

## Onde as etiquetas estão armazenadas no armazém.

Para cada conjunto de dados anotado, o aplicativo grava linhas em uma tabela associada:

**`{dataset_name}__lc_labels`**

Essa tabela contém quais rótulos estão associados ao conjunto de dados (por exemplo, identificadores estáveis ou chaves de rótulo que seu ambiente usa para junções). As definições completas dos rótulos, texto de exibição, URLs das imagens para ícones e campos relacionados provenientes do Hub estão armazenadas na tabela principal "Local Contexts Label-set", criada por [**Local Contexts: Fetch Labels**](fetch-labels-script), que tem o nome:

**`localcontexts_<project_title>`**

Consultas ou aplicações posteriores podem **adicionar** ``{dataset_name}__lc_labels`` à tabela de conjunto de rótulos para resolver ícones, texto longo e qualquer outra coisa que você precise exibir ou gerar relatórios.

## Como você pode usar isso

O layout do armazém é intencionalmente genérico: **qualquer** cliente que possa consultar o banco de dados – painéis, aplicativos personalizados ou ferramentas de catálogo – pode obter as Etiquetas de Contexto Local para um conjunto de dados juntando essas tabelas.

- 📊 **Visualização de dados** — O Apache Superset pode utilizar conjuntos de dados e consultas SQL que relacionam sua tabela de dados (``{dataset_name}__lc_labels``) com a tabela ``localcontexts_…`` para que os gráficos e painéis possam refletir o contexto das etiquetas TK/BC.
  - 🚧 O Guardian Connector ainda não possui um guia específico para o Superset para este fluxo de trabalho; planejamos adicionar a documentação assim que as receitas estiverem prontas.
- 🗺️ **Exploração e mapas** — O `[GC Explorer](/reference/gc-toolkit/gc-explorer/)` é um local ideal para apresentar o contexto associado às etiquetas, juntamente com os dados da comunidade. 
  - 🚧 A exibição de rótulos de contexto local no GC Explorer é um objetivo futuro; atualmente, essa funcionalidade não está disponível no produto.
- 📚 **Metadados mais abrangentes** — As mesmas tabelas suportam os fluxos de trabalho de **catalogação de dados**, **etiquetagem de metadados** e **descoberta**, que você pode adotar posteriormente, sem restringir o uso a uma única interface.
