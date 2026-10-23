---
sidebar_position: 3
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# GC Explorer

[Guardian Connector Explorer (GC Explorer)](https://github.com/conservationmetrics/gc-explorer) é uma ferramenta de visualização de dados baseada na web que transforma os dados tabulares da sua comunidade em mapas interativos, galerias e painéis. Construído especificamente para o Guardian Connector, ele se conecta diretamente ao seu banco de dados PostgreSQL para exibir dados coletados de ferramentas como CoMapeo, KoboToolbox e outras plataformas de coleta de dados.

## 🗺️ Visualizações Disponíveis

**📍 Visualização de Mapa**: Visualize seus dados geoespaciais em um mapa interativo com painéis de informações pop-up e anexos de mídia incorporados.

**📸 Visualização de Galeria**: Navegue por conteúdo de foto, áudio e vídeo coletado em campo, organizado por data ou localização.

**⚠️ Painel de Alertas**: Monitore mudanças e ameaças ambientais com alertas de detecção de mudanças e imagens de satélite antes e depois; crie [incidentes](/reference/gc-toolkit/gc-explorer/incidents/) para agrupar uma série de alertas com fontes de dados secundárias.

## 🔄 Integração de Dados

O GC Explorer funciona automaticamente com dados de:
- **CoMapeo**: Dados de mapeamento e observação da comunidade.
- **KoboToolbox/ODK**: Respostas e formulários de pesquisa.  
- **Alertas Ambientais**: Dados de detecção de mudanças via satélite.
- **Fontes de Dados Personalizadas**: Quaisquer dados tabulares compatíveis com PostgreSQL.

![GC Explorer Alerts Dashboard](/img/reference/gc-toolkit/gc-explorer/alerts-dashboard.jpg)
_Example of an Alerts Dashboard in GC Explorer_

O GC Explorer transforma dados brutos em formatos visuais acessíveis que ajudam as comunidades a entender, compartilhar e agir com base nas informações coletadas.

:::note Limitações dos Dados

Para manter a visualização responsiva, o GC Explorer mostra no máximo **10.000 registros de dados** em uma visualização. Se um conjunto de dados for maior que isso, uma notificação em pop-up aparece e apenas os primeiros 10.000 registros são exibidos.

:::

## 📤 Exportando Dados {#exporting-data}

### Exportando Dados da Visualização de Mapa

O GC Explorer permite exportar dados diretamente da Visualização de Mapa para uma variedade de formatos para uso em outras ferramentas e fluxos de trabalho.

Os formatos de exportação atualmente suportados incluem:

* **CSV**: Exporte seus dados em formato tabular para planilhas, bancos de dados ou análises adicionais.
* **GeoJSON**: Exporte dados geoespaciais em um formato aberto moderno amplamente suportado por ferramentas GIS e aplicações de mapeamento web.
* **KML**: Exporte dados geoespaciais para uso em aplicativos como Google Earth e outras plataformas de mapeamento.

Essas exportações facilitam a continuidade do trabalho com seus dados fora do GC Explorer, usando as ferramentas e formatos que melhor se adaptam às necessidades de sua comunidade.

:::tip Filtros se aplicam às exportações

Os filtros ativos de **data** e **coluna** na Visualização de Mapa são incluídos na solicitação de exportação. Defina primeiro o intervalo de datas e quaisquer filtros de categoria/coluna, depois baixe CSV, GeoJSON ou KML — o arquivo conterá apenas o subconjunto filtrado. Esse subconjunto está pronto para trabalho adicional em uma planilha ou ferramenta GIS; veja [Use seus dados no QGIS](/reference/common-workflows/use-your-data-in-qgis/) para abrir GeoJSON no QGIS.

:::

:::tip Conversão de Formato e Compatibilidade GIS

Uma vez que você tenha exportado seus dados como CSV, GeoJSON ou KML, é possível convertê-los em muitos outros formatos compatíveis com GIS, se necessário.

Alguns formatos comumente solicitados incluem:

* **Shapefile (.shp)**
* **GeoPackage (.gpkg)**
* **File Geodatabase (.gdb)**

Tanto o QGIS quanto o ArcGIS suportam a importação de dados GeoJSON e KML e sua exportação para esses formatos adicionais.

Embora os shapefiles sejam amplamente compatíveis, eles também possuem limitações importantes, incluindo:

* Um limite máximo de 10 caracteres para nomes de coluna.
* Suporte limitado para codificação de caracteres não-Latinos.
* Restrições em tipos de campo e complexidade da estrutura de dados.

Se essas limitações afetarem seu fluxo de trabalho, geralmente é recomendado usar os formatos **GeoPackage** ou **File Geodatabase**.

No ArcGIS, arquivos CSV contendo informações de coordenadas também podem ser carregados diretamente usando o recurso **"Adicionar Dados XY"**.

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

O **filtro de tempo** no Painel de Alertas se aplica a ambos os downloads. Use-o para baixar em lote um subconjunto de alertas em vez do conjunto completo; o mesmo filtro também atualiza as estatísticas, de modo que um download de estatísticas reflete o intervalo de datas filtrado.

## ⚙️ Configurando Visualizações

Você pode criar uma nova visualização de **Mapa**, **Galeria** ou **Painel de Alertas** — e possivelmente outros tipos de visualização no futuro.

Ao criar uma visualização, você escolhe um **conjunto de dados primário** e, se o tipo de visualização suportar, um **conjunto de dados secundário** opcional. As opções que aparecem a seguir dependem do tipo de visualização; o próprio formulário é o melhor guia para cada campo.

Para um **mapa** ou **painel de alertas**, você pode configurar coisas como:

- Até três **Mapas de fundo Mapbox**, cada um com seu próprio **estilo Mapbox** e **token de acesso**.
- **Parâmetros do mapa** como coordenadas centrais, nível de zoom, inclinação, orientação, projeção e terreno 3D.
- **IDs de camada de legenda do mapa** para alternar camadas de estilo Mapbox personalizadas.

Se a visualização inclui **mídia** ou **filtros**, você pode configurar coisas como:

- Uma **URL base** (como um [link de compartilhamento do Navegador de Arquivos](/reference/gc-toolkit/filebrowser/#generating-share-links)) para onde carregar anexos de mídia, imagens de alerta ou ícones de mapa personalizados.
- **Colunas de filtro** para menus suspensos de categoria e controles deslizantes de intervalo de datas.

Se outra visualização já tiver muitas das mesmas configurações, você pode **copiar a configuração dessa visualização** para iniciar a nova em vez de preencher tudo do zero.

### 🏷️ Identificação e Marca da Visualização {#view-identification}

Para tornar as visualizações mais fáceis de reconhecer e navegar à medida que sua biblioteca de dados cresce, você pode enriquecer cada visualização de conjunto de dados com detalhes de identificação:

- **Nome de Exibição da Visualização**: Substitua o nome da tabela bruta do banco de dados por um título claro e legível por humanos.
- **Descrição da Visualização**: Forneça contexto e metadados sobre o conteúdo, propósito ou frequência de atualização do conjunto de dados.
- **Imagem do Cabeçalho da Visualização**: Forneça uma URL de imagem para exibir como miniatura e plano de fundo do cabeçalho para que os usuários possam distinguir as visualizações rapidamente.
- **URL do Logo**: Opcionalmente, exiba o logotipo da sua organização ou comunidade na barra lateral da visualização.

### 🔒 Controle de Visibilidade do Conjunto de Dados {#dataset-visibility-control}

Para cada visualização de conjunto de dados no GC Explorer, você deve definir um nível de **Visibilidade** que controla quem pode ver e interagir com a visualização. Isso permite proteger informações sensíveis ou proprietárias da comunidade, enquanto ainda colabora com parceiros ou compartilha visualizações públicas quando necessário.

Os níveis de visibilidade correspondem diretamente aos [papéis de usuário do Guardian Connector](/reference/gc-toolkit/gc-landing-page/#user-management) atribuídos pelos administradores na Página Inicial:

| Nível de Visibilidade | Quem Pode Acessar a Visualização |
| --- | --- |
| **Administradores** | Somente usuários logados com o papel de **Administrador**. |
| **Membros** | Usuários logados com os papéis de **Membro** ou **Administrador**. |
| **Convidado** | Usuários logados com os papéis de **Convidado**, **Membro** ou **Administrador**. |
| **Público — sem necessidade de login** | Qualquer pessoa com o link, incluindo visitantes que não estão logados e usuários logados com o papel de **Usuário Logado**. |

Cada cartão de visualização na página inicial do GC Explorer exibe seu distintivo de **Nível de Permissão** ativo para que administradores e membros possam verificar as configurações de acesso rapidamente.

## ℹ️ Qual Versão do Aplicativo Estou Usando?

If you ever need to know which version of GC Explorer you are using — for example, when reporting a problem — open the `/_info` endpoint on the app. Add `/_info` to the end of the Explorer address in your browser (for example, <ParamLink template="https://explorer.{alias}.guardianconnector.net/_info" paramName="alias" defaultValue="alias">https://explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/_info</ParamLink>). You do not need to sign in.

Parecerá assim:

```json
{
  "tag": "20261012-189",
  "commit": "1234567890abcdef1234567890abcdef12345678",
  "buildId": "abcdef1234567890abcdef1234567890abcdef12",
  "startedAt": "2026-10-12T12:00:00.000Z"
}
```

A resposta identifica a construção em execução:

- **tag**: a versão implantada, escrita como uma data e número de compilação (`YYYYMMDD-<run>`).
- **commit**: o commit de origem a partir do qual essa versão foi construída.
- **startedAt**: a data e hora em que o aplicativo foi iniciado.
