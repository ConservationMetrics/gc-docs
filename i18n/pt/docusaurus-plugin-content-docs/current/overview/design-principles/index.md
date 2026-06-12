---
sidebar_position: 2
tags: [idm]
---

# Princípios de Design

Ao projetar o Guardian Connector para viabilidade e sustentabilidade a longo prazo, a Conservation Metrics segue um conjunto rigoroso de princípios. As ferramentas incluídas na solução devem atender aos seguintes critérios:

### 📦 Softwares, equipamentos e serviços gratuitos ou acessíveis
Na medida do possível, priorizamos ferramentas que são gratuitas para uso e serviços de hardware ou baseados na nuvem que estão disponíveis a baixo custo. Isso garante a sustentabilidade a longo prazo do sistema para nossos parceiros.

### 🌐 Traduzível para idiomas locais
Embora a tradução de toda a interface de um software possa nem sempre ser viável ou necessária, os elementos mais críticos devem ser traduzidos para as línguas locais, a fim de garantir a compreensão e o uso adequado.

### 🔒 Soberania e Controle de Dados

:::info
A soberania de dados dos povos originários significa os direitos e interesses intrínsecos que esses povos possuem em relação à criação, coleta, acesso, análise, interpretação, gestão, divulgação, reutilização e controle de dados relacionados aos povos originários. No contexto da soberania de dados dos povos originários, os dados são considerados um recurso estratégico, e é necessário estabelecer um arcabouço para seu uso ético, a fim de promover o bem-estar coletivo e a autodeterminação desses povos. A recuperação do controle sobre os dados, incluindo aqueles que foram coletados anteriormente dos povos originários sem o seu consentimento, deve ser reconhecida como uma forma de reparação para abordar as injustiças históricas e corrigir narrativas falsas. Isso inclui a criação de mecanismos eficazes para a devolução de dados.

_From the UN Human Rights Council's Expert Mechanism on the Rights of Indigenous Peoples ["Right of Indigenous Peoples to data, including with regard to data collection and disaggregation"](https://digitallibrary.un.org/record/4087217?v=pdf)_  
:::

Em linha com os princípios do [CARE para a Governança de Dados das Populações Indígenas](/guias/guia-soberania-de-dados-e-protocolos/#quais-são-os-princípios-do-CARE-para-a-gobernanca-de-dados-das-populacoes-indigenas) e o mecanismo de especialistas do Conselho de Direitos Humanos da ONU sobre os direitos dos povos indígenas [Direito dos povos indígenas a dados, incluindo em relação à coleta e agregação de dados](https://digitallibrary.un.org/record/4087217?v=pdf), nossos parceiros devem ser capazes de:
- Tenha o controle da infraestrutura onde os dados são armazenados
- Controle a coleta, o armazenamento e a transmissão de dados ao longo de todo o ciclo do projeto.
- Tenha acesso aos seus dados a qualquer momento.
- Tenha a certeza de que terceiros não têm acesso não autorizado aos seus dados.
- Permit que eles tomem suas próprias decisões sobre o compartilhamento de dados com terceiros.
- É possível desativar ou remover os dados do sistema a qualquer momento, de forma simples e sem complicações.

Esses direitos são fundamentais e não podem ser negociados.

**:seta: Para mais informações, consulte [Pilares da Soberania de Dados no Guardian Connector](/visão geral/princípios de design/soberania-de-dados).**

### 👥 Conjunto de software gerenciado pela comunidade
Embora nem todos os usuários possam utilizar todas as ferramentas, não incluiremos aquelas que não podem ser operadas de forma realista por qualquer membro das equipes colaborativas parceiras sem suporte externo. A configuração inicial pode exigir a participação de um provedor de serviços técnicos, mas a operação contínua deve ser viável para os usuários locais. Nosso objetivo é selecionar ferramentas que sejam acessíveis, fáceis de usar e simples de aprender e manter.

### 🏠 Capacidade de Hospedagem Própria
Embora a Conservation Metrics mantém instâncias do Guardian Connector baseadas na nuvem disponíveis para parceiros de colaboração (e potencialmente outros, sob um modelo de serviço com custo acessível), estamos comprometidos em desenvolver uma cadeia de ferramentas que possa ser totalmente hospedada internamente. Isso inclui:
- Evitando soluções proprietárias que não são acessíveis aos parceiros.
- Fornecer documentação e automação adequadas para permitir a configuração e administração independentes.
- Garantindo a compatibilidade com uma ampla variedade de plataformas de hospedagem (por exemplo, Azure, AWS, Google Cloud, DigitalOcean e nuvens específicas do país)

Isso permite a implantação em jurisdições específicas, de acordo com as necessidades dos parceiros.

### Design centrado na experiência offline
Quase todas as ferramentas devem ser totalmente utilizáveis sem conexão com a internet. No mínimo, o fluxo de trabalho principal — desde a coleta de dados até a visualização (e algumas tarefas de organização) — não deve exigir uma conexão com a internet. A capacidade de funcionar offline é essencial para casos de uso em áreas rurais e remotas.

### 🔗 Projetado para interoperabilidade e extensibilidade
Mesmo enquanto nos comprometemos com um conjunto de ferramentas integradas, nosso sistema deve permanecer aberto e flexível. Organizaremos o armazenamento de dados e as APIs para permitir a integração fácil de ferramentas de terceiros no futuro. Isso facilita para os parceiros integrarem sistemas complementares à medida que suas necessidades evoluem.