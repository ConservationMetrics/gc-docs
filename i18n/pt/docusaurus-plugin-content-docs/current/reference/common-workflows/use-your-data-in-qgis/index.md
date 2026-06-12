---
sidebar_position: 1
tags: [itu-2, itu-3, opu, tsp]
---

# Utilize seus dados no QGIS

[QGIS] (em Referência/Aplicativos Recomendados/QGIS) é uma aplicação de SIG (Sistema de Informação Geográfica) poderosa e de código aberto que pode trabalhar com dados espaciais provenientes do Guardian Connector. Este guia mostra como baixar seus dados e abri-los no QGIS para análise e visualização.

:::dica
Este fluxo de trabalho funciona com qualquer software SIG, incluindo o ArcGIS, QGIS ou outras ferramentas de análise espacial. A chave é baixar seus dados como arquivos e abri-los no aplicativo SIG de sua preferência.
:::

## Overview

O Guardian Connector armazena dados espaciais em bancos de dados PostgreSQL, mas a maneira mais fácil e intuitiva de trabalhar com esses dados no QGIS é baixá-los como arquivos e abri-los localmente. Essa abordagem:

- **Mantém os dados seguros:** O banco de dados do armazém permanece somente para leitura e protegido.
- **Simplifica os fluxos de trabalho:** Não é necessário conhecimento em SQL ou conexões com bancos de dados.
- **Oferece flexibilidade:** Trabalhe com seus dados offline e em formatos de arquivo familiares.

## Baixe seus dados espaciais

### Método 1: Exportar como GeoJSON

Utilize o script ``postgres_to_geojson`` no [Central de Script do GC](https://reference.autodesk.com/pt-br/api/ac_toolkit/gc-scripts-hub/), para exportar dados espaciais:

1. **Acesse o Hub de Scripts do GC:** Navegue até a instância do seu Guardian Connector.
2. **Execute o script de exportação:** 
   - Selecione o script ``postgres_to_geojson``
   - Selecione a sua conexão com o banco de dados
   - Especifique a tabela que contém dados espaciais.
   - Defina o caminho de exportação (padrão: `/persistent-storage/datalake/exports`).
3. **Baixe o arquivo:** Utilize o [navegador de arquivos](/referência/gc-toolkit/filebrowser/) para baixar o arquivo GeoJSON gerado.

### Método 2: Baixar através do explorador de arquivos

Para arquivos espaciais existentes que já estão armazenados no Guardian Connector:

1. **Navegue até o "Filebrowser":** Acesse o armazenamento de arquivos do seu Guardian Connector.
2. **Encontre arquivos espaciais:** Procure por formatos de arquivo como GeoJSON, Shapefile ou outros formatos de arquivos do Sistema de Informação Geográfica (SIG).
3. **Baixar arquivos:** Selecione e baixe os arquivos de que precisa.

## Dados abertos no QGIS

Depois de ter seus arquivos de dados espaciais:

1. **Inicie o QGIS:** Abra o QGIS no seu computador
2. **Adicionar camada vetorial:** 
   - Vá para **Camada** → **Adicionar Camada** → **Adicionar camada vetorial**
   - Ou utilize o botão "**Adicionar Camada Vetorial**" na barra de ferramentas.
3. **Selecione o seu arquivo:** Navegue até e selecione o seu arquivo GeoJSON ou outro arquivo espacial baixado.
4. **Carregar os dados:** Clique em **Abrir** para carregar seus dados do Guardian Connector no QGIS.

## Precisa de ajuda?

- **Documentação do QGIS:** Consulte a documentação oficial do QGIS em [https://docs.qgis.org/](https://docs.qgis.org/)