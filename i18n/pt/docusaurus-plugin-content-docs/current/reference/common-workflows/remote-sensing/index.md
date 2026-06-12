---
sidebar_position: 6
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# Utilize os alertas de detecção de mudanças no Guardian Connector

Este documento descreve como os fluxos de trabalho automatizados de detecção de mudanças, utilizando fontes de dados externas, funcionam. O processo permite o monitoramento e as notificações em tempo real de alterações territoriais, combinando dados de satélite externos com os sistemas de visualização e alertas do Guardian Connector.

O fluxo de trabalho envolve as seguintes etapas:

- **Uma fonte de dados externa** – fornecendo dados de detecção de alterações
- **[Moinho de vento](/referência/gc-toolkit/gc-scripts-hub/)** – Lida com a ingestão, processamento e automação do fluxo de trabalho de detecção de alterações.
- **[Explorador do Conector Guardian](/referência/toolkit-gc/explorador-gc/)** – A ferramenta de visualização para exibir dados e alertas de detecção de mudanças.
- **[Comapeo](/referência/aplicações-conectadas/comapeo/)** – Onde as camadas de dados de detecção de mudanças se tornam visíveis para o monitoramento territorial.
- **WhatsApp** – Para enviar notificações quando alterações são detectadas

Este processo envolve as seguintes etapas principais:

## 1. Importação de dados

Métodos diferentes de ingestão terão processos específicos, dependendo da fonte de dados utilizada.

Essas fontes de dados geralmente fornecem dados regularmente, que serão coletados e processados automaticamente.

Por exemplo, uma possível integração é utilizar o [Global Forest Watch](https://www.globalforestwatch.org/blog/data-and-tools/drivers-deforestation-alerts/) para obter alertas sobre desmatamento no Guardian Connector. O processo envolve a obtenção de dados externos de detecção de mudanças que serão processados e disponibilizados para visualização e alertas.

Você precisará fornecer ao administrador do seu Windmill todas as informações necessárias para configurar a ingestão de dados.

Caso você deseje receber notificações do WhatsApp para novos alertas ou para poder visualizar os alertas em seu projeto CoMapeo, também precisará informar o administrador da sua instância do Windmill.

Após a execução bem-sucedida do script agendado, seus dados de detecção de alterações estarão disponíveis no banco de dados PostgreSQL do Guardian Connector, notificações do WhatsApp serão enviadas e os conjuntos de dados estarão disponíveis no CoMapeo.

## 3. Visualização: Configuração do GC Explorer

Após o processamento e armazenamento dos seus dados de detecção de alterações, configure o "Guardian Connector Explorer" para visualizar os alertas e as mudanças.

Access your Explorer instance at: <ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>

### Configurar visualizações de detecção de alterações

1. Faça login no Explorador
   Utilize suas credenciais para fazer login.

2. **Configuração de Acesso**
   Após fazer o login, você encontrará um botão "**Configuração**" na parte superior da janela do Explorador para começar a configurar suas visualizações.

3. **Criar visualizações de detecção de mudanças**
   - Clique no botão "**Gerenciar conjuntos de dados**", e depois no botão "**+ Adicionar nova visualização de conjunto de dados**" para escolher a sua tabela de detecção de mudanças na lista.
   - Encontre a nova tabela disponível e configure-a clicando no botão de menu à direita.

   Configurações-chave para dados de detecção de mudanças:

   | Parameter | Description |
   | :--- | :--- |
   | Opiniões | Painel de alertas |
   | **Estilo Mapbox** | Você precisará de uma conta Mapbox para acessar um Estilo de Mapa. Obtenha o URL do Estilo no editor de estilos, no formato ``mapbox://styles/{username}/{styleId}``, que você pode encontrar na tela "Compartilhar", em "URL do Estilo". |
   | **Token de acesso do Mapbox** | Disponível na sua página da conta do Mapbox, na seção "**Tokens**". |
   | **Nível de zoom** | O nível de zoom para a visualização do mapa (de 0 a 22). |
   | **Latitude do centro** | A latitude do ponto central para a visualização do mapa. |
   | **Longitude do centro** | A latitude do ponto central para a visualização do mapa. |

:::dica
O zoom e o centro podem ser obtidos acessando https://geojson.io, navegando para a visualização com o nível de zoom desejado e obtendo-o a partir da URL. Por exemplo, na seguinte URL: "https://geojson.io/#map=8.2/5.738/-60.213", o primeiro número, 8.2, é o nível de zoom, 5.738 é a latitude e -60.213 é a longitude. 

Você também pode usar o site https://demos.mapbox.com/location-helper/.

4. **Publique as Opiniões**
   Assim que for salvo, o painel de controle de alertas de detecção de alterações estará visível para os usuários que acessam a instância do Explorer.

### O que você verá no Guardian Connector Explorer

Ao acessar o Guardian Connector Explorer, você encontrará ferramentas de visualização poderosas para monitorar as mudanças em sua área:

#### Mapas interativas de detecção de mudanças

- **Visualização em tempo real:** Visualize alertas de desmatamento e outras mudanças exibidas em um mapa interativo do seu território.
- **Informações em camadas**: Visualize dados de detecção de mudanças ao lado dos dados que você deseja, configuráveis no seu estilo do Mapbox.
- **Contexto geográfico:** Entenda onde estão ocorrendo as mudanças em relação às terras e áreas de monitoramento da sua comunidade.
- **Rastreamento histórico:** Visualize os padrões de mudança ao longo do tempo para identificar tendências e áreas problemáticas.

#### Painel de alertas

- **Resumo das notificações:** Visualize um painel que exibe alertas recentes e seu status.
- **Alertas de prioridade:** Identifique rapidamente as alterações de maior prioridade que exigem atenção imediata.
- **Informações detalhadas:** Clique em qualquer alerta para visualizar informações detalhadas sobre a mudança detectada, incluindo, em alguns casos, imagens antes e depois.

### O que você verá no WhatsApp

Se você optou por receber notificações do WhatsApp, você receberá mensagens sempre que forem detectadas novas alterações em sua região. Essas mensagens incluirão:

- **Detalhes do alerta:** Informações sobre a quantidade de alertas detectados
- **Links diretos:** Links para visualizar o alerta no Guardian Connector Explorer, a fim de realizar uma investigação mais detalhada.

### O que você encontrará no CoMapeo

Se você optou por integrar os dados de detecção de mudanças com seu projeto CoMapeo, terá acesso aos dados de detecção de mudanças como uma camada adicional para o monitoramento da sua área.

Isso permitirá que você:

- **Contexto territorial:** Visualize os dados de detecção de mudanças juntamente com suas observações, rastros e pontos existentes do CoMapeo.
- **Atualizações em tempo real:** As alterações detectadas pelo sistema automatizado aparecem automaticamente no seu projeto CoMapeo assim que você sincroniza com o servidor de arquivos do CoMapeo.

Com esta informação disponível na CoMapeo, você pode aprimorar seus esforços de monitoramento territorial através de:

- **Verificação de campo:** Utilize os alertas de detecção de mudanças para orientar suas atividades de verificação no local.
- **Consciência proativa**: Receba notificações sobre alterações que ocorrem em sua área, mesmo quando você não está monitorando ativamente.
- **Coleta de evidências:** Utilize as mudanças detectadas como pontos de partida para atividades de documentação e resposta.

### Como isso beneficia o seu trabalho

O sistema de detecção de mudanças oferece diversas vantagens importantes para o monitoramento do território das populações indígenas:

#### Maior consciência situacional

- **Alerta precoce**: Receba alertas sobre possíveis ameaças à sua área antes que elas se tornem graves.
- **Cobertura abrangente:** Monitore grandes áreas que podem ser difíceis de patrulhar regularmente.

#### Capacidades de resposta aprimoradas

- **Detecção mais rápida:** As alterações são identificadas rapidamente, permitindo uma resposta imediata.
- **Decisões baseadas em evidências:** Tome decisões informadas sobre onde concentrar os esforços de monitoramento e resposta.
- **Suporte na documentação:** Utilize os dados de detecção de mudanças para apoiar esforços de documentação e defesa.

#### Fortalecimento da soberania

- **Propriedade dos dados:** Todos os dados de detecção de mudanças são armazenados dentro da sua instância do Guardian Connector, mantendo a soberania sobre os dados.
- **Controle da comunidade:** Defina quem tem acesso às informações de monitoramento e como elas são utilizadas.
- **Integração com ferramentas existentes:** A detecção de mudanças funciona perfeitamente com seus fluxos de trabalho atuais do CoMapeo e do Guardian Connector.
