---
sidebar_position: 0
tags: [itu-3, opu, tsp]
---

import ParamText from '@site/src/components/ParamText';
import ParamLink from '@site/src/components/ParamLink';

# Modelo de Integração

Este documento é o guia de integração para uma nova instância do Guardian Connector.

:::Nota

Este modelo foi criado para ajudar na integração da sua comunidade. Você pode personalizar este modelo de acordo com suas necessidades: por exemplo, substituindo "alias" pelo seu próprio nome e adicionando nome de usuário e senha para um serviço como o Filebrowser.

Antes de começar, certifique-se de que você está familiarizado com o que é o `[Guardian Connector]` (veja a seção `/overview/index.md`) e suas funcionalidades (`[Guardian Connector Toolkit]`, veja a seção `/reference/gc-toolkit/index.md`).

:::

## Introduction

Bem-vindo à sua instância do Guardian Connector!

Este espaço é exclusivamente seu e de ninguém mais.


Cada instância terá um **apelido**. Dentro do ecossistema Guardian Connector, chamamos sua instância por este "código" escolhido por você. Isso adiciona uma camada extra de privacidade sobre como acessar a infraestrutura de um parceiro. A ideia é que você crie um nome para sua instância e possa acessá-la da forma que desejar.

A partir de agora, vamos chamá-lo de "*alias*".

In order to access, you will use its web address: 
<ParamLink template="https://{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">https://<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net/</ParamLink>


As ferramentas diferentes estarão disponíveis em https://*.alias.guardianconnector.net, onde * pode ser um dos serviços atualmente disponíveis, como por exemplo:

- Explorer: <ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>
- Filebrowser: <ParamLink template="https://files.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">files.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>
- Superset: <ParamLink template="https://superset.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">superset.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>
- Comapeo: <ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>  
- Windmill: <ParamLink template="https://windmill.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">windmill.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>

## Authentication

Todos os serviços estão protegidos, portanto ninguém pode acessá-los sem a sua permissão.

O primeiro obstáculo é o seu nome de usuário (alias). Por favor, não compartilhe isso com ninguém fora da sua organização, pois é a primeira porta de entrada para a sua infraestrutura.

Também utilizamos autenticação e autorização do usuário para garantir que apenas usuários aprovados possam acessar os recursos.

Para alguns serviços, podemos ter uma combinação de usuário e senha pré-definida que compartilharei com você quando chegarmos a eles.

## Tools

O Guardian Connector possui um conjunto de ferramentas projetadas para ajudar as comunidades a gerenciar seus dados e fluxos de trabalho. Um guia detalhado dessas ferramentas está disponível em [nossa documentação](/).

### Explorador do GC

É uma ferramenta versátil projetada para visualizar vários tipos de dados da comunidade dentro do seu ambiente Guardian Connector, principalmente através de mapas e galerias. Embora possa apresentar alertas de detecção de mudanças (como os usados na mineração ou na exploração florestal), também pode visualizar observações de campo provenientes de ferramentas de mapeamento como CoMapeo, e poderia ser utilizada para visualizar outros conjuntos de dados, como dados de pesquisa do KoboToolbox, dados de mapeamento do Locus Map, e outras informações.

Let’s go into <ParamLink template="https://explorer.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">explorer.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>

#### Prime acesso

Você tentará fazer o login. Se já tiver uma conta do Gmail, pode usá-la. Caso contrário, você pode criar uma nova conta para este serviço. Se você já possui uma conta do Gmail, geralmente é mais fácil utilizá-la como sua conta de login.

Sempre que o sistema exibir esta tela, você utilizará o mesmo mecanismo de autenticação. Ele funciona em todos os serviços que oferecemos.

Sua tentativa de acesso falhará, pois você ainda não está autorizado a acessar o sistema. Eu lhe concederei a autorização para acessar agora.

Agora você pode tentar acessar novamente.

#### Overview

Atualmente, o Explorador exibirá apenas uma visualização, suas alertas atuais.

Você pode encontrar mais informações em [a documentação do Explorer](../gc-explorer/).

#### Formas pelas quais este espaço poderá se expandir.

À medida que você utiliza o sistema com mais frequência, o Explorer poderá hospedar coisas como:

- Seus alertas de sensoriamento remoto: mineração, exploração mineral, pistas de pouso e estradas.
- Suas opini sobre projetos de mapeamento, coletadas usando ferramentas como [CoMapeo](../../connected-applications/comapeo/) ou [KoboToolbox](../../connected-applications/kobotoolbox/), (incluindo tanto os mapas quanto os materiais que você compartilha dentro dessas ferramentas)

#### Customization

A aparência do mapa no painel de alertas pode ser personalizada.

Vamos conversar sobre o que seria importante para você ter lá.

### Filebrowser

[Filebrowser](../filebrowser/) é uma ferramenta que você pode usar para armazenar seus arquivos de forma segura. É um meio menos estruturado para preservar seus dados, independentemente do que sejam.
Suas credenciais de acesso atuais são:

- URL: <ParamLink template="https://files.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">files.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>
- Usuário: 
- Senha: 

Você pode encontrar mais informações na documentação do [FileBrowser](../filebrowser/).

#### Dados existentes

Você notará que existem algumas pastas já disponíveis na sua visualização de gerenciamento de arquivos e que mais podem aparecer sem que você precise adicioná-las manualmente.

Isso ocorre porque o gerenciador de arquivos também é usado para as ferramentas do Guardian Connector, com o objetivo de preservar os dados que você obtém de outros serviços.

Exemplos disso seriam:
- Imagens e dados dos alertas
- Envios para a mídia realizados através do KoboToolbox.
- Fotos, vídeos e áudios capturados com CoMapeo, LocusMaps ou outras ferramentas.

### Superset

[Apache Superset](../superset/) é uma ferramenta de visualização de dados integrada com o Guardian Connector, que ajuda você a criar painéis, gráficos e diagramas personalizáveis para analisar seus dados.

You can get to it through this web address: <ParamLink template="https://superset.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">superset.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>

À medida que seu data warehouse cresce, você provavelmente desejará aprender mais sobre os padrões em seus dados.

Você pode encontrar mais informações na documentação do [Superset](../superset/).

Vamos dar-lhe acesso a isso agora. Inicialmente, pode parecer um pouco vazio, e isso está tudo bem por enquanto. Assim que você perceber a necessidade de utilizá-lo, trabalharemos juntos para aproveitá-lo ao máximo.

### CoMapeo

O [CoMapeo](../../connected-applications/comapeo/) é uma ferramenta de mapeamento colaborativa que funciona principalmente sem conexão com a internet.

O Guardian Connector pode preservar seus projetos CoMapeo através de seu servidor de arquivos, e disponibilizar seus dados para você utilizando as ferramentas que já conhecemos.

To exchange data with Guardian Connector, you will need your CoMapeo Archive Server address:
<ParamLink template="https://comapeo.{alias}.guardianconnector.net/" paramName="alias" defaultValue="alias">comapeo.<ParamText paramName="alias" defaultValue="alias" />.guardianconnector.net</ParamLink>

### Windmill

Embora seja um sistema que você raramente verá, é aquele que realiza todo o trabalho nos bastidores para obter os dados de onde eles estão armazenados e mantê-los seguros, além de torná-los disponíveis da forma que você precisa.

Você não usará o Windmill nas suas atividades diárias, mas poderá utilizá-lo no futuro para algumas tarefas específicas.
