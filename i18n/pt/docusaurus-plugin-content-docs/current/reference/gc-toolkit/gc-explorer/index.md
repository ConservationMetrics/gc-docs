---
sidebar_position: 3
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# GC Explorer

[Guardian Connector Explorer (GC Explorer)](https://github.com/conservationmetrics/gc-explorer) é uma ferramenta de visualização de dados baseada na web que transforma os dados tabulares da sua comunidade em mapas interativos, galerias e painéis de controle. Construído especificamente para o Guardian Connector, ele se conecta diretamente ao seu banco de dados PostgreSQL para exibir dados coletados de ferramentas como CoMapeo, KoboToolbox e outras plataformas de coleta de dados.

## 🗺️ Visualizações Disponíveis

**📍 Visualização de Mapa**: Visualize seus dados geoespaciais em um mapa interativo com painéis de informações pop-up e anexos de mídia incorporados.

**📸 Visualização de Galeria**: Navegue por conteúdo de foto, áudio e vídeo coletado em campo, organizado por data ou local.

**⚠️ Painel de Alertas**: Monitore mudanças e ameaças ambientais com alertas de detecção de mudanças e imagens de satélite de antes e depois; crie [incidentes](/reference/gc-toolkit/gc-explorer/incidents/) para agrupar uma série de alertas com fontes de dados secundárias.

## 🔄 Integração de Dados

O GC Explorer funciona automaticamente com dados de:
- **CoMapeo**: Dados de mapeamento e observação comunitária
- **KoboToolbox/ODK**: Respostas e formulários de pesquisa  
- **Alertas Ambientais**: Dados de detecção de mudanças via satélite
- **Fontes de Dados Personalizadas**: Quaisquer dados tabulares compatíveis com PostgreSQL

![GC Explorer Alerts Dashboard](/img/reference/gc-toolkit/gc-explorer/alerts-dashboard.jpg)
_Example of an Alerts Dashboard in GC Explorer_

O GC Explorer transforma dados brutos em formatos visuais e acessíveis que ajudam as comunidades a entender, compartilhar e agir sobre suas informações coletadas.

:::note Limitações de Dados

Para manter a visualização responsiva, o GC Explorer mostra no máximo **10.000 registros de dados** em uma visualização. Se um conjunto de dados for maior que isso, uma notificação toast aparecerá e apenas os primeiros 10.000 registros serão exibidos.

:::

## 📤 Exportando Dados {#exporting-data}

### Exportando Dados da Visualização de Mapa

O GC Explorer permite exportar dados diretamente da Visualização de Mapa em uma variedade de formatos para uso em outras ferramentas e fluxos de trabalho.

Os formatos de exportação atualmente suportados incluem:

* **CSV**: Exporte seus dados em formato tabular para planilhas, bancos de dados ou análises adicionais.
* **GeoJSON**: Exporte dados geoespaciais em um formato aberto moderno amplamente suportado por ferramentas GIS e aplicativos de mapeamento web.
* **KML**: Exporte dados geoespaciais para uso em aplicativos como Google Earth e outras plataformas de mapeamento.

Essas exportações facilitam a continuidade do trabalho com seus dados fora do GC Explorer, usando as ferramentas e formatos que melhor se adaptam às necessidades da sua comunidade.

:::tip Conversão de Formato e Compatibilidade com GIS

Depois de exportar seus dados como CSV, GeoJSON ou KML, é possível convertê-los em muitos outros formatos compatíveis com GIS, se necessário.

Alguns formatos comumente solicitados incluem:

* **Shapefile (.shp)**
* **GeoPackage (.gpkg)**
* **File Geodatabase (.gdb)**

Tanto o QGIS quanto o ArcGIS suportam a importação de dados GeoJSON e KML e sua exportação para esses formatos adicionais.

Embora os shapefiles sejam amplamente compatíveis, eles também possuem limitações importantes, incluindo:

* Um limite máximo de 10 caracteres para nomes de colunas
* Suporte limitado para codificação de caracteres não-latinos
* Restrições nos tipos de campo e complexidade da estrutura de dados

Se essas limitações afetarem seu fluxo de trabalho, geralmente é recomendado usar os formatos **GeoPackage** ou **File Geodatabase**.

No ArcGIS, arquivos CSV contendo informações de coordenadas também podem ser carregados diretamente usando o recurso **"Add XY Data"**.

:::

### Exportando Dados do Painel de Alertas

O Painel de Alertas oferece várias maneiras de baixar alertas e informações relacionadas.

#### 📥 Exportando Alertas

Você pode baixar alertas usando os mesmos formatos CSV, GeoJSON e KML da Visualização de Mapa:

- **Baixar todos os alertas em lote** de uma vez em um dos formatos suportados.
- **Baixar um alerta individual** clicando nele no mapa.
- **Crie um incidente** que agrupa uma série de alertas com fontes de dados secundárias e, em seguida, baixe esse incidente. Consulte [Incidentes](/reference/gc-toolkit/gc-explorer/incidents/) para obter mais informações.

#### 📊 Exportando Estatísticas

O Painel de Alertas também mostra estatísticas sobre os alertas, como o número total de alertas ou o número total de hectares afetados. Você também pode baixar essas estatísticas.

#### 🕒 Usando o Filtro de Tempo

O **filtro de tempo** no Painel de Alertas se aplica a ambos os downloads. Use-o para baixar em lote um subconjunto de alertas em vez do conjunto completo; o mesmo filtro também atualiza as estatísticas, então um download de estatísticas reflete o intervalo de datas filtrado.

## ⚙️ Configurando Visualizações

Você pode criar uma nova visualização de **Mapa**, **Galeria** ou **Painel de Alertas** — e possivelmente outros tipos de visualização no futuro.

Ao criar uma visualização, você escolhe um **conjunto de dados primário** e, se o tipo de visualização suportar, um **conjunto de dados secundário** opcional. As opções que aparecem a seguir dependem do tipo de visualização; o próprio formulário é o melhor guia para cada campo.

Para um **mapa** ou **painel de alertas**, você pode definir coisas como:

- Um **token de acesso Mapbox**
- Um **estilo de mapa**
- **Parâmetros do mapa** como nível de zoom

Se a visualização incluir **mídia**, você pode definir coisas como:

- Uma **URL base** para carregar mídia
- **Filtros**
- Um **fundo de cabeçalho**, como uma imagem em miniatura

Se outra visualização já tiver muitas das mesmas configurações, você pode **copiar a configuração dessa visualização** para iniciar a nova em vez de preencher tudo do zero.

