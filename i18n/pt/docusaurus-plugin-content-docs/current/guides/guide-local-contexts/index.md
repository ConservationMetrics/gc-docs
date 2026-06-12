---
sidebar_position: 4
tags: [itu-3, idm, opu, tsp]
---

# 🏷️ Guia: Rotular Conjuntos de Dados com Etiquetas de Contexto Local

![Local Contexts Labels](/img/guides/guide-local-contexts/local-contexts.webp)

Este guia explica como criar e organizar etiquetas de **[Conhecimento Tradicional (TK)](https://localcontexts.org/labels/traditional-knowledge-labels/)** e **[Biológico-Cultural (BC)](https://localcontexts.org/labels/biocultural-labels/)** no [Local Contexts](https://localcontexts.org/), importar essas etiquetas para o seu data warehouse do Guardian Connector, e aplicá-las a conjuntos de dados específicos. 

## Overview

[Local Contexts](https://localcontexts.org/) oferece uma forma estruturada e baseada na comunidade para descrever como os dados devem ser compreendidos e utilizados, especialmente em situações onde a origem indígena ou relevância biocultural são importantes. As etiquetas TK e BC expressam as expectativas em relação à atribuição, consentimento e uso apropriado, de forma que possam acompanhar os metadados e ferramentas.

No Guardian Connector, as etiquetas são tratadas como **metadados de catálogo**, e não como tags automáticas em cada tabela. Essa separação garante que o controle seja explícito: ter as etiquetas no Hub ou no armazém não rotula automaticamente todos os conjuntos de dados. Para uma visão mais ampla sobre a governança dos dados da comunidade, consulte [Protocolos de Compartilhamento de Dados Baseados na Soberania de Dados Indígenas](/guias/guia-soberania-de-dados-e-protocolos/).

![Local Contexts Integration Partner](/img/guides/guide-local-contexts/Integration-Partner-Certified-Logo.png)

_Conservation Metrics é um parceiro de integração certificado da Local Contexts._

:::dica

Você precisa ter pelo menos um conjunto de dados já disponível no armazenamento (uma tabela que pode ser selecionada no Windmill) e pelo menos um conjunto de rótulos antes de poder usar o aplicativo de Anotações.

:::

## Visão geral do guia

### [**1. Configure um Projeto e Etiquetas para um Centro de Contextos Local**](projeto-e-etiquetas-para-centro-local)

Crie um perfil e uma conta de comunidade para o "Local Contexts Hub", selecione e aprove as etiquetas TK/BC, crie um projeto, aplique as etiquetas e obtenha o **ID do Projeto** e a **chave da API**, que você usará no Windmill.

### [**2. Obter Etiquetas do Centro de Contextos Locais**](fetch-labels-script)

Configure o recurso "**Contextos Locais**" no Windmill, execute "**Contextos Locais: Buscar Etiquetas**" (sob demanda ou em um cronograma), e entenda como os dados das etiquetas são armazenados no data warehouse e no disco, para que você possa aplicá-los a conjuntos de dados.

### [**3. Aplicar rótulos de contexto local a um conjunto de dados**](aplicativo\_de\_anotações)

Selecione um conjunto de dados e um conjunto de rótulos, escolha os rótulos TK e BC para aplicar e salve. As mapeamentos são armazenadas separadamente das linhas do conjunto de dados em uma tabela auxiliar chamada ``{dataset_name}__lc_labels``, que é criada se não existir, e atualizada se já existir.

### [**4. Utilize as etiquetas para catalogação de dados, marcação de metadados e fins de descoberta**]

Agora que os rótulos foram aplicados a um conjunto de dados, você pode utilizá-los para catalogar dados, adicionar tags de metadados e facilitar a descoberta.