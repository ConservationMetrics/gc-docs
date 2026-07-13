---
sidebar_position: 3
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# GC Explorer

O [Guardian Connector Explorer (GC Explorer)](https://github.com/conservationmetrics/gc-explorer) é uma ferramenta de visualização de dados baseada na web que transforma os dados tabulares da sua comunidade em mapas interativos, galerias e painéis. Desenvolvido especificamente para o Guardian Connector, ele se conecta diretamente ao seu banco de dados PostgreSQL para exibir dados coletados de ferramentas como CoMapeo, KoboToolbox e outras plataformas de coleta de dados.

## 🗺️ Visualizações Disponíveis

**📍 Visualização de Mapa**: Visualize seus dados geoespaciais em um mapa interativo com painéis de informações pop-up e anexos de mídia incorporados.

**📸 Visualização de Galeria**: Navegue por conteúdo de fotos, áudio e vídeo coletado em campo, organizado por data ou localização.

**⚠️ Painel de Alertas**: Monitore mudanças e ameaças ambientais com alertas de detecção de mudanças e imagens de satélite de antes e depois.

## 🔄 Integração de Dados

O GC Explorer funciona automaticamente com dados de:
- **CoMapeo**: Dados de mapeamento e observação da comunidade
- **KoboToolbox/ODK**: Respostas e formulários de pesquisa  
- **Alertas Ambientais**: Dados de detecção de mudanças por satélite
- **Fontes de Dados Personalizadas**: Quaisquer dados tabulares compatíveis com PostgreSQL

![GC Explorer Alerts Dashboard](/img/reference/gc-toolkit/gc-explorer/alerts-dashboard.jpg)
_Example of an Alerts Dashboard in GC Explorer_

O GC Explorer transforma dados brutos em formatos visuais acessíveis que ajudam as comunidades a entender, compartilhar e agir com base nas informações coletadas.

## 📤 Exportação de Dados

O GC Explorer permite exportar dados diretamente da Visualização de Mapa para uma variedade de formatos para uso em outras ferramentas e fluxos de trabalho.

Os formatos de exportação atualmente suportados incluem:

* **CSV**: Exporte seus dados em formato tabular para planilhas, bancos de dados ou análises adicionais.
* **GeoJSON**: Exporte dados geoespaciais em um formato aberto moderno amplamente suportado por ferramentas GIS e aplicativos de mapeamento web.
* **KML**: Exporte dados geoespaciais para uso em aplicativos como Google Earth e outras plataformas de mapeamento.

Essas exportações facilitam a continuidade do trabalho com seus dados fora do GC Explorer, utilizando as ferramentas e formatos que melhor se adequam às necessidades da sua comunidade.

:::tip Conversão de Formatos e Compatibilidade GIS

Uma vez que você exportou seus dados como CSV, GeoJSON ou KML, é possível convertê-los para muitos outros formatos compatíveis com GIS, se necessário.

Alguns formatos comumente solicitados incluem:

* **Shapefile (.shp)**
* **GeoPackage (.gpkg)**
* **File Geodatabase (.gdb)**

Tanto o QGIS quanto o ArcGIS suportam a importação de dados GeoJSON e KML e a exportação para esses formatos adicionais.

Embora os shapefiles sejam amplamente compatíveis, eles também possuem limitações importantes, incluindo:

* Um limite máximo de 10 caracteres para nomes de colunas
* Suporte limitado para codificação de caracteres não-latinos
* Restrições nos tipos de campo e na complexidade da estrutura de dados

Se essas limitações afetarem seu fluxo de trabalho, geralmente é recomendado usar os formatos **GeoPackage** ou **File Geodatabase**.

No ArcGIS, arquivos CSV contendo informações de coordenadas também podem ser carregados diretamente usando o recurso **"Add XY Data"**.

:::
