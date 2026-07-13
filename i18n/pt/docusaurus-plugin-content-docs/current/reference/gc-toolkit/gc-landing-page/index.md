---
sidebar_position: 1
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# Página Inicial do GC

A Landing Page do Guardian Connector é a **página inicial** do Guardian Connector da sua comunidade: a porta de entrada onde você chega após fazer login. Ela reúne tudo em um só lugar, para que você não precise se lembrar de endereços da web ou procurar pela ferramenta certa.

Na Landing Page você pode:

- Abra os **serviços** que sua comunidade utiliza (como Explorer, Superset, Windmill ou Filebrowser) com um único clique.
- Saiba mais sobre as **ferramentas que você pode usar com o Guardian Connector** para coletar e trazer dados (como CoMapeo, KoboToolbox e mais).

## 🔑 Entrar

Ao visitar a Landing Page pela primeira vez, você pode ser solicitado a se cadastrar ou fazer login. Após o cadastro, um membro da sua comunidade com acesso de administrador precisa **aprovar sua conta** e atribuir-lhe um papel antes que você possa ver os serviços. Até que isso aconteça, você não conseguirá acessar o Guardian Connector.

**O que você vê na Landing Page depende do seu papel.** Pessoas diferentes precisam de ferramentas diferentes, então a página mostra apenas os serviços que você tem permissão para usar. Se um serviço que você espera está faltando, ele pode não estar ativado para sua comunidade, ou seu papel pode não incluir acesso a ele ainda — entre em contato com o administrador da sua comunidade.

## 🚀 Seus Serviços

Estes são os serviços do Guardian Connector que sua comunidade pode vincular a partir da Landing Page. Cada um aparece como um cartão que você pode clicar para abri-lo em uma nova aba.

- **[Explorer](/reference/gc-toolkit/gc-explorer/)**: Visualize os dados da sua comunidade como mapas interativos, galerias de mídia e um painel de alertas.
- **[Superset](/reference/gc-toolkit/superset/)**: Construa e explore gráficos, painéis e visualizações a partir dos seus dados.
- **[Filebrowser](/reference/gc-toolkit/filebrowser/)**: Navegue, baixe e gerencie os arquivos brutos e arquivos da sua comunidade.
- **Windmill**: Execute e agende os fluxos de trabalho de automação que coletam e processam seus dados (consulte o [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)).

Nem todos veem todos os serviços. Em geral, quanto mais avançada ou sensível é uma ferramenta, maior o papel necessário para abri-la — por exemplo, o Explorer está disponível para a maioria dos usuários logados, enquanto o Windmill é reservado para administradores.

## 🌐 Ferramentas que você pode usar com o Guardian Connector

A Landing Page também apresenta as ferramentas de campo e plataformas que funcionam com o Guardian Connector. Estes são os aplicativos que sua comunidade pode usar para **coletar dados em campo** — dados que então fluem para o Guardian Connector para visualização e análise:

- **[CoMapeo](/reference/connected-applications/comapeo/)**: Mapeamento e monitoramento mobile com foco offline.
- **[KoboToolbox](/reference/connected-applications/kobotoolbox/)** e **ODK**: Formulários e pesquisas que funcionam online e offline.
- **[Timelapse](/reference/connected-applications/timelapse/)**: Revisão e anotação de imagens de armadilhas fotográficas para monitoramento da biodiversidade.

O Guardian Connector também se conecta com outras ferramentas como **ArcGIS Survey123**, **Locus Map**, **Global Forest Watch**, **SMART**, e mais. Para saber mais sobre tudo o que pode ser conectado, consulte o [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/).

## 👥 Gerenciamento de Usuários (para Administradores)

Se você é um **administrador**, a Landing Page oferece uma área de Gerenciamento de Usuários para controlar quem pode acessar o Guardian Connector da sua comunidade e o que eles podem fazer.

A partir daqui você pode:

- **Pesquisar** pessoas por nome ou e-mail.
- Veja o **status** de cada pessoa — se a conta está *Aprovada* ou *Pendente* — juntamente com seu papel e quando ela fez o último login.
- **Aprovar (ou desaprovar) uma conta.** Apenas usuários aprovados podem acessar os serviços.
- **Atribuir um papel** que decide quais serviços cada pessoa pode abrir.
- **Excluir uma conta** se a pessoa não deve mais ter acesso.

Os papéis atualmente disponíveis, do menor para o maior acesso, são:

- **Conectado**: Conectado, mas sem acesso a serviços ainda.
- **Convidado**: Acesso limitado, adequado para visitantes ou parceiros.
- **Membro**: Acesso diário para membros da comunidade.
- **Administrador**: Acesso total, incluindo esta área de Gerenciamento de Usuários.

Quando você aprova alguém e lhe atribui o papel correto, os serviços que essa pessoa tem permissão para usar aparecerão na Landing Page dela na próxima vez que fizer login.