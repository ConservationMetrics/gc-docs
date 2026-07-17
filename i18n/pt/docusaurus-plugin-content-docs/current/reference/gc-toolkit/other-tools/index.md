---
sidebar_position: 5
tags: [idm, opu, tsp]
---

# Outras Ferramentas

Além do kit de ferramentas principal, as instâncias do Guardian Connector podem incluir serviços adicionais que suportam fluxos de trabalho especializados. Essas ferramentas são opcionais: implemente-as quando um projeto precisar de uma experiência web personalizada, exploração de mídia de vida selvagem ou outra capacidade que não seja coberta apenas pelo GC Explorer ou Superset.

:::tip

Since these tools are not part of the regular Guardian Connector toolkit, you may require assistance from a Guardian Connector system administrator to deploy or configure them. 
:::

## 🌐 GC HTTP Server

O [GC HTTP Server](https://github.com/conservationmetrics/gc-http-server) é um serviço leve para servir conteúdo estático diretamente do data lake do Guardian Connector. Ele executa um servidor web HTTPD mínimo e expõe HTML, JavaScript, CSS, imagens e outros ativos estáticos via HTTP — sem um pipeline de construção ou hospedagem separado.

Isso se alinha ao objetivo do Guardian Connector de permitir que as comunidades controlem tanto seus dados quanto os aplicativos construídos em torno deles. Faça upload de uma pasta para o data lake com [Filebrowser](/reference/gc-toolkit/filebrowser/), aponte o servidor para esse diretório, e o site estará disponível na web. O CapRover também pode proteger o aplicativo com autenticação integrada quando o acesso deve ser restrito.

### Quando usá-lo

O GC Explorer e o Superset cobrem muitas necessidades de visualização. Use o GC HTTP Server quando um projeto precisar de uma experiência totalmente personalizada — por exemplo, um mapa com qualidade de apresentação, um site de storytelling ou um painel sob medida para um público específico.

Um fluxo de trabalho típico:

1. Injete dados de campo com o [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) (por exemplo, observações do CoMapeo).
2. Crie seu próprio frontend (Leaflet, Mapbox GL JS, OpenLayers ou outro framework).
3. Faça o upload do aplicativo para o data lake com [Filebrowser](/reference/gc-toolkit/filebrowser/).
4. Implante o GC HTTP Server e defina a variável de ambiente `DIRECTORY` para o local da pasta carregada.

Tanto os conjuntos de dados quanto o aplicativo web residem então no data lake, mantendo a experiência leve e sob controle da comunidade.

## 🐻 GC Wildlife Viewer

O [GC Wildlife Viewer](https://github.com/conservationmetrics/gc-wildlife-viewer) é um aplicativo R Shiny para explorar imagens de armadilhas fotográficas e anotações relacionadas em um mapa com filtros. Ele foi projetado para ser implantado como parte de uma instância CapRover do Guardian Connector junto com o restante do kit de ferramentas.

O aplicativo funciona com exportações do [Timelapse](/reference/connected-applications/timelapse/): dados tabulares (CSV), imagens ou vídeo exportados e miniaturas geradas. As comunidades podem navegar por mídias de vida selvagem por localização e atributos sem precisar abrir o Timelapse para cada sessão de revisão.

### Notas de dados e implantação

- Prepare uma exportação de **seleção** do Timelapse (a exportação de conjunto de dados completo ainda não é suportada). Veja [Exportando Imagens para o GC Wildlife Viewer](/guides/guide-timelapse-project/step-9-export-for-gc-wildlife/) para a configuração passo a passo.
- Armazene os arquivos exportados no data lake do Guardian Connector para que o aplicativo possa lê-los de um volume montado.
- Implante via CapRover como outros serviços do Guardian Connector; a porta HTTP do contêiner para este aplicativo é `3838`.

Juntamente com o Timelapse e o conector Scripts Hub Timelapse, o GC Wildlife Viewer ajuda a transformar o monitoramento de armadilhas fotográficas em uma visualização acessível e compartilhável para revisão e tomada de decisões pela comunidade.
