---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# 📸+🐾 Guia: Como configurar um projeto de câmera fotográfica em time-lapse

## Introduction

[Timelapse](https://timelapse.ucalgary.ca/) é um **software para Windows usado para analisar dados de câmeras e transformar arquivos de imagem e vídeo brutos em dados estruturados**, que podem fornecer informações sobre a presença, diversidade e tendências populacionais das espécies. Esta é uma breve introdução ao uso do software.

![Timelapse Software screenshot](/img/guides/guide-timelapse-project/timelapse.jpg)

:::nota
O projeto Timelapse está em desenvolvimento ativo, é de código aberto (repositório no [GitHub](https://github.com/saulgreenberg/Timelapse)) e possui documentação abrangente. Para informações mais detalhadas, consulte os seguintes recursos.
:::

:::dica
Este guia é apenas para **anotar** imagens e vídeos de armadilhas fotográficas que já foram coletados. Não é um guia para configurar um projeto de armadilha fotográfica ou para lidar com a instalação.

Para a implantação, disponibilizamos um conjunto de categorias [CoMapeo para o uso em câmeras de armadilha](/reference/connected-applications/comapeo/camera-trap-deployment.md) que pode ser usado para documentar as instalações, manutenção e recuperação das câmeras de armadilha, utilizando o [CoMapeo](/reference/connected-applications/comapeo/index.md).

## Instalação de Timelapse

O arquivo de time-lapse pode ser baixado [aqui](https://timelapse.ucalgary.ca/download/). Existem três métodos diferentes de instalação. Recomendamos usar o "1 Instalador MSI por usuário (recomendado para a maioria)" a menos que haja alguma razão para utilizar um dos outros métodos de instalação.

## Recursos-chave dos desenvolvedores de Timelapse { #key-resources}

- :casa: [Página Inicial do Timelapse](https://timelapse.ucalgary.ca/)
- ↓ [Baixar e Instalar](https://timelapse.ucalgary.ca/download/)
- :gráfico: [Conjunto de imagens para prática de timelapse](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/PracticeImageSet.zip)  
  Este é realmente útil como um modelo para criar seu próprio projeto de time-lapse.

- :livro aberto: [Guias e Tutoriais para Usuários](https://timelapse.ucalgary.ca/guides/)
  - **[Guia de Início Rápido (PDF)](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseQuickStartGuide.pdf)**  
    Um guia prático que o acompanhará na hora de carregar, inspecionar e etiquetar um conjunto de imagens e vídeos para fins de treinamento.

  - **[Guia de Referência (PDF)](https://saul.cpsc.ucalgary.ca/timelapse/uploads/Guides/TimelapseReferenceGuide.pdf)**  
    Cobre todas as funcionalidades disponíveis em detalhes. Altamente recomendado para otimizar o seu fluxo de trabalho.

  - **[Guia de Modelo (PDF)](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseReferenceGuide.pdf)**  
    Explica como criar e gerenciar modelos utilizando o editor de templates Timelapse.

  - **[Guia de Metadados (PDF)](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseImageRecognitionGuide.pdf)**  
    Este guia explica como associar metadados em nível de pasta ao seu conjunto de imagens e como preenchê-los. Também inclui vários padrões de metadados.

  - **[Guia de Reconhecimento de Imagens (PDF)](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseImageRecognitionGuide.pdf)**  
    Este guia explica como utilizar a funcionalidade de reconhecimento automático de imagens no Timelapse.

  - **[Guia de Banco de Dados (PDF)](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseDatabaseGuide.pdf)**  
    Descreve a estrutura do banco de dados interno. Útil se você planeja acessar o banco de dados diretamente.

- :câmera: Tutoriais em vídeo (https://timelapse.ucalgary.ca/videos/)
  - **[Uma Visão Rápida de Time-Lapse (~16 minutos)](https://saul.cpsc.ucalgary.ca/timelapse/uploads/Videos/WhirlwindTourOfTimelapse.mp4)**
  - **[Guia de Início Rápido (aproximadamente 13 minutos)](https://saul.cpsc.ucalgary.ca/timelapse/uploads/Videos/Video-TimelapseQuickStartGuide.mp4)**
  - **[Vídeo de Apoio: Guia de Modelo (~7 minutos)](https://saul.cpsc.ucalgary.ca/timelapse/uploads/Videos/TemplateEditor.mp4)**

:::dica
Existem muitos outros recursos disponíveis na página inicial do [Timelapse](https://timelapse.ucalgary.ca/), que você pode explorar à medida que se familiariza com a ferramenta.
:::

---
