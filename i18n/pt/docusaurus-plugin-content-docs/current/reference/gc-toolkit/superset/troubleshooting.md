---
sidebar_position: 4
tags: [itu-3, opu, tsp]
---

# Guia de solução de problemas

## Compatibilidade com serviços de tradução baseados em navegador

Superset doesn't get along well with the Google Chrome translation services that come built-in with the browser. 
The downside is that the translation services are usually enabled automatically or inadvertently by the user when the user accepts the page to be translated. Or even though the user has not requested that, the browser might automatically attempt to translate the page.

Uma forma de esse problema se manifestar é quando você encontra o seguinte erro ao tentar salvar um gráfico:

![superset translation error](/img/reference/gc-toolkit/superset/superset-translation-error.png)

A solução para os problemas causados por isso é desativar os serviços de tradução no Google Chrome e utilizar as traduções integradas do Superset para a ferramenta.

![Disable translation for site](/img/reference/gc-toolkit/superset/disable-translation-for-site.png)

Você faz isso selecionando a opção "Nunca Traduzir Este Site" no botão de tradução, que se encontra à direita da barra de navegação dentro do Google Chrome.

![Select language within superset](/img/reference/gc-toolkit/superset/select-language-superset.png)

Posteriormente, você poderá selecionar o idioma de sua preferência no Superset, utilizando a opção disponível no canto superior direito.