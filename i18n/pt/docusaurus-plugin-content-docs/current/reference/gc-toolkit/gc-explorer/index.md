---
sidebar_position: 2
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# Explorador do GC

O [Guardian Connector Explorer (Explorador do GC)](https://github.com/conservationmetrics/gc-explorer) é uma ferramenta de visualização de dados baseada na web que transforma os seus dados tabulares da comunidade em mapas interativos, galerias e painéis. Projetado especificamente para o Guardian Connector, ele se conecta diretamente ao seu banco de dados PostgreSQL para exibir dados coletados a partir de ferramentas como CoMapeo, KoboToolbox e outras plataformas de coleta de dados.

## 🗺️ Vistas disponíveis

**📍 Visualização no Mapa:** Visualize seus dados geográficos em um mapa interativo, com painéis de informações e anexos multimídia incorporados.

**Galeria:** Navegue por fotos, áudios e vídeos coletados no local, organizados por data ou localização.

**Painel de Alertas:** Monitore as mudanças ambientais e as ameaças com alertas de detecção de alterações e imagens de satélite "antes e depois".

## 🔄 Integração de Dados

O Explorador do GC funciona automaticamente com dados de:
- **Comapeamento:** Mapeamento e coleta de dados da comunidade
- **KoboToolbox/ODK**: Respostas e formulários de pesquisas  
- **Alertas Ambientais:** Dados de detecção de mudanças por satélite
- **Fontes de Dados Personalizadas**: Qualquer conjunto de dados tabulares compatível com PostgreSQL.

![Explorador do GC Alerts Dashboard](/img/reference/gc-toolkit/gc-explorer/alerts-dashboard.jpg)
_Example of an Alerts Dashboard in Explorador do GC_

O Explorador do GC transforma dados brutos em formatos acessíveis e visuais que ajudam as comunidades a compreender, compartilhar e agir com base nas informações coletadas.

## 📤 Exportar Dados

O Explorador do GC permite que você exporte dados diretamente da visualização do mapa para uma variedade de formatos, podendo ser utilizados em outras ferramentas e fluxos de trabalho.

Os formatos de exportação atualmente suportados incluem:

* **CSV:** Exporte seus dados em um formato de tabela para planilhas, bancos de dados ou análises adicionais.
* **GeoJSON**: Exporte dados geográficos em um formato aberto moderno, amplamente suportado por ferramentas de Sistemas de Informação Geográfica (SIG) e aplicações de mapeamento da web.
* **KML:** Exporte dados geográficos para utilização em aplicações como o Google Earth e outras plataformas de mapeamento.

Essas exportações tornam mais fácil continuar trabalhando com seus dados fora do Explorador do GC, utilizando as ferramentas e formatos que melhor atendem às necessidades da sua comunidade.

:::Dica: Conversão de formato e compatibilidade com sistemas SIG

Depois de exportar seus dados em formatos como CSV, GeoJSON ou KML, é possível convertê-los para diversos outros formatos compatíveis com sistemas de informação geográfica (SIG), se necessário.

Alguns formatos comumente solicitados incluem:

* **Arquivo Shape (.shp)**
* **Pacote Geo (arquivo .gpkg)**
* **Banco de dados do ArcGIS (arquivo .gdb)**

Tanto o QGIS quanto o ArcGIS suportam a importação e exportação de dados GeoJSON e KML, além de permitir a conversão para esses formatos adicionais.

Embora os arquivos shape sejam amplamente compatíveis, eles também apresentam limitações importantes, incluindo:

* Um limite máximo de 10 caracteres para os nomes das colunas.
* Suporte limitado para codificação de caracteres não latinos
* Restrições sobre os tipos de dados e a complexidade da estrutura de dados.

Se essas limitações afetarem seu fluxo de trabalho, geralmente é recomendado utilizar os formatos **GeoPackage** ou **File Geodatabase**.

No ArcGIS, arquivos CSV que contenham informações de coordenadas também podem ser carregados diretamente usando a função "**Adicionar Dados X e Y**".

:::
