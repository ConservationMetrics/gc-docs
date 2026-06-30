---
sidebar_position: 2
tags: [idm]
---

# Princípios de Design

Ao projetar o Guardian Connector para viabilidade e sustentabilidade a longo prazo, a Conservation Metrics adere a um conjunto rigoroso de princípios. As ferramentas incluídas na solução devem atender aos seguintes critérios:

### 📦 Software, Hardware e Serviços Gratuitos ou Acessíveis
Na medida do possível, priorizamos ferramentas gratuitas e serviços baseados em hardware ou nuvem disponíveis a baixo custo. Isso garante a sustentabilidade a longo prazo do sistema para nossos parceiros.

### 🌐 Traduzível para Idiomas Locais
Embora a tradução de uma interface de ferramenta completa nem sempre seja viável ou necessária, os elementos mais críticos para a missão devem ser traduzíveis para os idiomas locais para garantir a compreensão e a usabilidade.

### 🔒 Soberania e Controle de Dados

:::info
A soberania de dados indígenas significa os direitos e interesses inerentes que os Povos Indígenas têm em relação à criação, coleta, acesso, análise, interpretação, gerenciamento, disseminação, reuso e controle de dados relacionados aos Povos Indígenas. No contexto da soberania de dados indígenas, os dados são considerados um recurso estratégico, e uma estrutura para seu uso ético é necessária para promover o bem-estar coletivo e a autodeterminação dos Povos Indígenas. Restaurar o controle sobre os dados, incluindo aqueles que foram previamente coletados de Povos Indígenas sem seu consentimento, deve ser reconhecido como uma forma de reparação para abordar injustiças históricas e corrigir narrativas falsas. Isso inclui o estabelecimento de mecanismos eficazes para a repatriação de dados.
:::

_From the UN Human Rights Council's Expert Mechanism on the Rights of Indigenous Peoples ["Right of Indigenous Peoples to data, including with regard to data collection and disaggregation"](https://digitallibrary.un.org/record/4087217?v=pdf)_  
:::

Em alinhamento com os [Princípios CARE para a Governança de Dados Indígenas](/guides/guide-data-sovereignty-and-protocols/#what-are-the-care-principles-for-indigenous-data-governance) e o estudo do Mecanismo de Peritos do Conselho de Direitos Humanos da ONU sobre os Direitos dos Povos Indígenas [Direito dos Povos Indígenas aos dados, incluindo no que diz respeito à coleta e desagregação de dados](https://digitallibrary.un.org/record/4087217?v=pdf), nossos parceiros devem ser capazes de:
- Possuir a infraestrutura onde os dados são armazenados
- Controlar a coleta, armazenamento e transmissão de dados ao longo do ciclo de vida do projeto
- Acessar seus dados a todo momento
- Ter a certeza de que nenhuma parte externa tem acesso não autorizado aos seus dados
- Tomar suas próprias decisões sobre o compartilhamento de dados com terceiros
- Optar por sair ou remover seus dados do sistema a qualquer momento com o mínimo de atrito

Esses direitos são fundamentais e inegociáveis.

**:arrow_right: Para mais informações, consulte [Pilares da Soberania de Dados no Guardian Connector](/overview/design-principles/data-sovereignty).**

### 👥 Conjunto de Software Operável pela Comunidade
Embora nem toda persona consiga usar todas as ferramentas, não incluiremos ferramentas que não possam ser realisticamente operadas por qualquer pessoa em nossas equipes de parceiros de cocriação sem suporte externo. A configuração inicial pode exigir o envolvimento de um provedor de serviços técnicos, mas a operação contínua deve ser viável para usuários locais. Nosso objetivo é selecionar ferramentas acessíveis, fáceis de usar e simples de aprender e manter.

### 🏠 Capacidade de Auto-Hospedagem
Embora a Conservation Metrics mantenha instâncias de Guardian Connector baseadas em nuvem disponíveis para parceiros de cocriação (e potencialmente outros, sob um modelo de taxa acessível por serviço), estamos comprometidos em construir uma cadeia de ferramentas que possa ser totalmente auto-hospedada. Isso inclui:
- Evitar soluções proprietárias que sejam inacessíveis aos parceiros
- Fornecer documentação e automação suficientes para permitir a configuração e administração independentes
- Garantir a compatibilidade com uma ampla gama de plataformas de hospedagem (por exemplo, Azure, AWS, Google Cloud, DigitalOcean e nuvens específicas de cada país) ou infraestrutura local (on-premises)

Isso permite a implantação em jurisdições específicas de acordo com as necessidades dos parceiros.

### 🔗 Construído para Interoperabilidade e Extensão
Mesmo ao nos comprometermos com um conjunto focado de ferramentas integradas, nosso sistema deve permanecer aberto e flexível. Estruturaremos nosso armazenamento de dados e APIs para permitir a fácil integração de ferramentas de terceiros no futuro. Isso facilita para os parceiros conectar sistemas complementares à medida que suas necessidades evoluem.