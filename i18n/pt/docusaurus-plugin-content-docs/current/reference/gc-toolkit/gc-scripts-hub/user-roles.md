---
sidebar_position: 3
tags: [opu, tsp]
---

# Funções do Usuário

Na plataforma **[Windmill](https://www.windmill.dev/)**, que alimenta o Hub de Scripts do GC, existem várias funções que podem ser atribuídas aos usuários, cada uma com diferentes permissões e responsabilidades.

O Windmill possui uma [página de documentação oficial](https://www.windmill.dev/docs/core_concepts/roles_and_permissions) que aborda os conceitos fundamentais de papéis e permissões no Windmill. No entanto, abaixo, detalharemos os papéis mais relevantes para o GC Scripts Hub.

## 🔒 Administrador

O papel de Administrador foi projetado para administradores de organizações comunitárias que precisam gerenciar o GC Scripts Hub, incluindo:

- Criar e gerenciar usuários
- **Configurar permissões para o papel de operador** (veja a seção "[Configuração do papel de operador] abaixo)
- Adicionar recursos e variáveis (por exemplo, chaves de API, conexões com bancos de dados)
- Configurar as configurações de visibilidade para o usuário no ambiente de trabalho
- Gerenciar outras configurações de ambiente de trabalho

:::importante
**Os administradores devem configurar os papéis do Operador** de acordo com as melhores práticas do Guardian Connector. Por padrão, o Windmill permite mais permissões para os Operadores do que recomendamos. Consulte a seção "[Configuração do Operador](#configurando-papéis-do-operador)" abaixo para obter os passos necessários de configuração.
:::

## 👤 Operador {#operador}

O papel de Operador é projetado para membros de organizações comunitárias que precisam executar e agendar fluxos de trabalho importantes de dados sem a necessidade de conhecimento técnico profundo. Os operadores podem executar scripts e monitorar seu progresso, mas não podem criar ou modificar o código subjacente – garantindo a estabilidade do sistema ao mesmo tempo em que permite a participação da comunidade.

O papel de operador é ideal para organizações comunitárias, pois permite que você:

- **Distribuir responsabilidades:** Vários membros da organização podem colaborar na gestão do fluxo de dados sem a necessidade de compreender detalhes técnicos complexos sobre bancos de dados, APIs ou desenvolvimento de scripts.

- **Manter a Estabilidade do Sistema:** Como os operadores não podem modificar scripts ou configurações do sistema, não há risco de interromper acidentalmente fluxos de coleta de dados ou alertas importantes.

- **Promover a Autonomia**: As comunidades podem gerenciar seus próprios processos de dados – como baixar alertas ambientais ou exportar dados de pesquisas –, sem depender de pessoal técnico para tarefas rotineiras.

- **Reduzir a carga de treinamento**: Os operadores precisam apenas aprender a executar e programar fluxos de trabalho, não como criá-los do zero.

### 🔑 Permissões para Operadores

:::nota
As permissões listadas abaixo dependem da configuração dos papéis do operador de acordo com as melhores práticas do Guardian Connector. Consulte a seção "[Configurando os Papéis do Operador](#configurando-os-papel-do-operador)" para obter instruções de configuração.

#### ✅ **O que os operadores podem fazer**
- **Visualizar código:** Leia o código do script para entender quais fluxos de trabalho ele executa (não é possível editar)
- **Executar scripts:** Executar fluxos de trabalho para coleta de dados, exportação e envio de alertas.
- **Definir fluxos de trabalho:** Configure e modifique execuções automáticas (verificações semanais de alertas, exportação diária de dados)
- **Acompanhe o progresso:** Visualize tarefas em execução, execuções anteriores e seus respectivos registros.
- **Selecione os recursos:** Escolha entre os recursos e variáveis existentes ao configurar scripts (não é possível visualizar seu conteúdo).
- **Acesse aplicativos:** Utilize os aplicativos do Windmill para tarefas comuns (por exemplo, enviar um arquivo para o Guardian Connector).

#### ❌ **O que os operadores não podem fazer**
- **Modificar scripts:** Não é possível alterar a forma como os conectores de dados ou fluxos de trabalho funcionam.
- **Criar Recursos**: Não é possível adicionar novas conexões de banco de dados ou chaves de API
- **Modificar Variáveis:** Não é possível alterar configurações de configuração confidenciais.
- **Visualizar o conteúdo de um recurso/variável:** É possível selecioná-los, mas não é possível ver seus valores reais.

:::nota
Os scripts em ``f/common_logic/`` (módulos auxiliares sem uma função ``main``) não aparecem na interface do usuário para Operadores. Isso é intencional: os Operadores não precisam ver esses módulos internos, mas os scripts que importam deles funcionam perfeitamente.
:::

### Exemplo prático

Um fluxo de trabalho típico para um operador pode envolver:
1. **Segunda-feira de manhã:** Execute a exportação dos dados da pesquisa semanal para a reunião comunitária.
2. **Semanalmente:** Verifique se o monitoramento de alertas ambientais está funcionando corretamente.  
3. **Quando necessário**: Faça o upload de um novo conjunto de dados espaciais no Guardian Connector
4. **Mensalmente:** Criar relatórios para serem compartilhados com organizações parceiras.

Todas essas tarefas podem ser realizadas por meio de uma interface relativamente simples, sem a necessidade de conhecimento sobre bancos de dados, APIs ou infraestrutura técnica.

## ⚙️ Configurando os Papéis dos Operadores {#configurando-os-papéis-dos-operadores}

O Guardian Connector segue práticas recomendadas específicas para configurar os papéis de operadores, a fim de garantir a segurança e o controle de acesso adequado. **Os administradores devem completar estes passos de configuração** após configurar um ambiente Windmill, pois os operadores têm mais permissões habilitadas por padrão do que recomendamos.

Para obter mais informações, consulte o arquivo `README` do [GC Scripts Hub](https://github.com/conservationmetrics/gc-scripts-hub/blob/main/README.md#user-roles).

### Passo 1: Configurar permissões para o operador

Por padrão, os operadores do Windmill podem criar recursos e variáveis, o que recomendamos desativar. Os operadores devem apenas ser capazes de executar scripts e monitorar seu progresso.

**Para configurar as permissões do operador:**

1. Faça login no Windmill como administrador
2. Navegue até **Configurações do Espaço de Trabalho** → aba **Usuários**
3. Encontre a seção "**Configurações do Operador**
4. Desative todas as configurações, exceto "Executar" e "Agendamentos".

:::alerta
**Os recursos e variáveis são habilitados por padrão no Windmill.** Essa alteração de configuração deve ser feita manualmente por um administrador; não pode ser automatizada durante a implantação inicial (por exemplo, através do `gc-stack-deploy`) porque precisa ser feita após a configuração inicial do espaço de trabalho do Windmill.
:::

### Passo 2: Configurar permissões de pastas

Os operadores precisam ter acesso a pastas que contenham scripts, fluxos, aplicativos e recursos/variáveis para poder utilizá-los.

**Para conceder acesso a uma pasta:**

1. Navegue até a página "**Pastas e Grupos**" no Windmill.
2. Para cada pasta que os operadores precisam acessar:
   - Pastas contendo scripts, fluxos ou aplicativos (por exemplo, ``f/connectors``, ``f/export``)
   - Pastas onde os recursos e variáveis são armazenados (geralmente `f/connectors`)
3. Adicione o grupo ``g/all`` a cada pasta.
   - Por padrão, todos os usuários (incluindo operadores) são membros de ``g/all``

Sem esta etapa:
- Os operadores não poderão visualizar nenhum script, fluxo ou aplicativo na interface do Windmill.
- Os operadores não poderão selecionar os recursos ao iniciar scripts, mesmo que eles apareçam no menu suspenso.

