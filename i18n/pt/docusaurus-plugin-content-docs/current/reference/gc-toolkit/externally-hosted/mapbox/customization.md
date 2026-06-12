---
tags: [opu, tsp]
---

# Personalize seus estilos Mapbox

Este guia explica como personalizar os estilos do Mapbox para serem usados dentro do Guardian Connector.

## Prerequisites

Para modificar um mapa, você precisará do endereço da web específico (a URL do estilo) do estilo de mapa que deseja personalizar. 

Você pode encontrar este endereço dentro do aplicativo **GC Explorer**:
1. Acesse sua página do GC Explorer e clique em **Gerenciar Conjuntos de Dados**.
2. Encontre seu conjunto de dados e selecione a opção **Editar visualização do conjunto de dados**.
3. Role para o bloco "**Mapa**" e verifique as configurações de "Mapa do Fundo (do) Mapbox". 

:::nota
O endereço do mapa terá a seguinte aparência: ``mapbox://styles/<account>/<style-id>``, onde ``<account>`` é o nome da sua conta no Mapbox e ``<style-id>`` é o identificador único para o design do seu mapa.
:::

:::dica
Embora os passos acima possam ser úteis para identificar o estilo exato, você também pode simplesmente acompanhar o **nome** do seu estilo Mapbox e encontrá-lo dessa forma.
:::
Certifique-se de ter suas credenciais de login da sua conta Mapbox prontas.

## Personalize seus estilos Mapbox

Siga estes passos para alterar a aparência do seu mapa:

1. Faça login na sua conta do [Mapbox Studio](https://console.mapbox.com/).
2. Encontre e selecione o estilo que deseja modificar. Utilize o **URL do Estilo** que coletou no GC Explorer para garantir que está escolhendo o correto. Você pode alterar a aparência de diferentes elementos no mapa, entre outras coisas. Consulte o artigo [Crie um estilo de mapa base personalizado com o Mapbox Studio](https://docs.mapbox.com/help/tutorials/create-a-custom-style/) para obter mais informações.
3. Utilize o editor do Mapbox Studio para realizar suas alterações visuais. 
4. Quando estiver satisfeito com a aparência, clique em "**Publicar**" no canto superior direito para salvar suas alterações.

:::dica
Após a publicação, seu estilo de mapa atualizado será exibido no Guardian Connector. Não é necessário atualizar nenhum link, pois o Guardian Connector lê continuamente a partir deste endereço de mapa exato.

:::nota
Pode demorar até 15 minutos para que as alterações no seu estilo de mapa apareçam no mapa em tempo real no Guardian Connector.
:::

## Adicionar camadas de mapa personalizadas

Siga estes passos para adicionar seus próprios dados de mapa ao seu projeto de mapa. Os dados de mapa podem ser pontos, linhas ou polígonos. Exemplos de dados de mapa personalizados poderiam incluir limites regionais, nomes de lugares, dados hidrológicos ou topográficos, transectos ou dados coletados em campo anteriormente. 

1. Faça login na sua conta do [Mapbox Studio](https://console.mapbox.com/).
2. Selecione o design que deseja modificar da sua lista de estilos.
3. Importe seus dados seguindo as instruções no [documentação da Mapbox](https://docs.mapbox.com/help/tutorials/add-data-to-mapbox-style/?step=3).
4. Clique em "**Publicar**" para salvar suas alterações.

:::importante
Assim como as alterações no design do estilo de mapa, qualquer nova camada de mapa adicionada aparecerá nos seus mapas do Guardian Connector sem a necessidade de etapas adicionais. Observe que pode levar até 15 minutos para que as novas camadas de mapa apareçam.