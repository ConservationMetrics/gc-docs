---
sidebar_position: 5
tags: [idm, opu, tsp]
---

# Aplicativos Personalizados

Além do toolkit principal, as instâncias do Guardian Connector podem incluir serviços adicionais que suportam fluxos de trabalho especializados. Essas ferramentas são opcionais: implante-as quando um projeto precisar de uma experiência web personalizada, exploração de mídia de vida selvagem ou outra capacidade que não seja coberta apenas pelo GC Explorer ou Superset.

:::tip

Since these tools are not part of the regular Guardian Connector toolkit, you may require assistance from a Guardian Connector system administrator to deploy or configure them. 
:::

:::note

É possível exibir cartões para essas ferramentas na [Página Inicial](/reference/gc-toolkit/gc-landing-page/) acessando a página **Custom Apps** como usuário Administrador. Lá, você pode adicionar cartões para cada ferramenta à página inicial.
:::

## 🌐 GC HTTP Server

O [GC HTTP Server](https://github.com/conservationmetrics/gc-http-server) é um serviço leve para servir conteúdo estático diretamente do data lake do Guardian Connector. Ele executa um servidor web HTTPD mínimo e expõe HTML, JavaScript, CSS, imagens e outros ativos estáticos via HTTP—sem uma pipeline de build ou hospedagem separada.

Isso se alinha ao objetivo do Guardian Connector de permitir que as comunidades controlem tanto seus dados quanto os aplicativos construídos em torno deles. Carregue uma pasta para o data lake com [File Browser](/reference/gc-toolkit/filebrowser/), aponte o servidor para esse diretório, e o site estará disponível na web. O CapRover também pode proteger o aplicativo com autenticação integrada quando o acesso precisar ser restrito.

### Quando usá-lo

O GC Explorer e o Superset cobrem muitas necessidades de visualização. Use o GC HTTP Server quando um projeto precisar de uma experiência totalmente personalizada—por exemplo, um mapa com qualidade de apresentação, um site de storytelling ou um painel bespoke para um público específico.

Um fluxo de trabalho típico:

1. Ingerir dados de campo com o [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) (por exemplo, observações do CoMapeo).
2. Crie seu próprio frontend (Leaflet, Mapbox GL JS, OpenLayers ou outra estrutura).
3. Carregue o aplicativo para o data lake com o [File Browser](/reference/gc-toolkit/filebrowser/).
4. Implante o GC HTTP Server e defina a variável de ambiente `DIRECTORY` para o local da pasta carregada.

Tanto os conjuntos de dados quanto o aplicativo web residem no data lake, mantendo a experiência leve e sob controle da comunidade.

:::caution

Um aplicativo personalizado precisa ser mantido. Um parceiro de suporte técnico precisa mantê-lo funcionando à medida que seus dados e o Guardian Connector mudam, e dar suporte às pessoas que o utilizam. Isso exige o maior esforço contínuo para algo construído especificamente para um único projeto. Um aplicativo gerado por uma ferramenta de IA acarreta os mesmos custos e riscos.

Antes de solicitar ou adicionar um, pergunte se o [GC Explorer](/reference/gc-toolkit/gc-explorer/) ou o [Superset](/reference/gc-toolkit/superset/) já podem fornecer a experiência, ou se um aplicativo existente poderia ser adotado.

:::

## 🐻 GC Wildlife Viewer

O [GC Wildlife Viewer](https://github.com/conservationmetrics/gc-wildlife-viewer) é um aplicativo R Shiny para explorar mídias de armadilhas fotográficas (imagens e vídeos) anotadas em um mapa com filtros. Ele foi projetado para ser implantado como parte de uma instância CapRover do Guardian Connector junto com o restante do toolkit.

O aplicativo funciona com exportações do [Timelapse](/reference/core-integrations/timelapse/) -- dados tabulares (CSV), imagens ou vídeos exportados e miniaturas geradas -- juntamente com dados de implantação de armadilhas fotográficas. As comunidades podem navegar por mídias de vida selvagem por localização e atributos sem precisar abrir o Timelapse para cada sessão de revisão.

Consulte o [README do GC Wildlife Viewer](https://github.com/conservationmetrics/gc-wildlife-viewer/blob/main/README.md) para obter mais informações sobre como implantar e usar o aplicativo.