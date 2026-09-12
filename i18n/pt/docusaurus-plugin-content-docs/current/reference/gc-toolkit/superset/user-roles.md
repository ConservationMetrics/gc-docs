---
sidebar_position: 2
tags: [itu-3, opu, tsp]
---

# Funções de Utilizador

O Superset usa um sistema baseado em funções para controlar o que os utilizadores podem ver e fazer na plataforma. No Guardian Connector, essas funções **não são atribuídas dentro do Superset**. Elas são mantidas em sincronia com a [função do Guardian Connector](/reference/gc-toolkit/gc-landing-page/#user-management) de cada utilizador, que os administradores gerem a partir da Página Inicial.

Quando a função do Guardian Connector de um utilizador muda, a sua função no Superset é atualizada para o equivalente correspondente no próximo início de sessão.

## Mapeamento de Funções

| Função do Guardian Connector | Função do Superset |
|-------------------------|---------------|
| Admin                   | Admin         |
| Member                  | Alpha         |
| Guest                   | Gamma         |
| SignedIn                | Public        |

Para alterar o acesso de alguém no Superset, atualize a função dessa pessoa em [Gestão de Utilizadores na Página Inicial](/reference/gc-toolkit/gc-landing-page/#user-management). Não tente gerir as funções do Superset separadamente — elas serão substituídas pela sincronização.

## Funções Disponíveis

### 👑 Admin ← Guardian Connector **Admin**
**Controlo total sobre a instância Superset**

Os administradores têm acesso completo para gerir todo o ambiente Superset:
- Gerir contas de utilizador e atribuir funções dentro do Superset
- Ver e editar todos os dashboards, gráficos e conjuntos de dados
- Aceder a credenciais de base de dados e configurações de ligação
- Configurar fontes de dados e definições de segurança
- Conceder ou revogar acesso a recursos específicos

*Melhor para: Administradores de sistema e coordenadores técnicos*

### 🔧 Alpha ← Guardian Connector **Member**
**Criadores de conteúdo com acesso amplo**

Os utilizadores Alpha podem trabalhar com dados e criar conteúdo, mas não podem gerir as configurações do sistema:
- Aceder a todas as fontes de dados e dashboards disponíveis
- Criar, editar e partilhar os seus próprios dashboards e gráficos
- Explorar dados e criar novas visualizações
- Não pode gerir outros utilizadores ou visualizar credenciais de base de dados
- Não pode editar dashboards e gráficos que não são seus
- Não pode adicionar novas fontes de dados ao sistema

*Melhor para: Coordenadores de comunidade, analistas de dados e criadores ativos de dashboards*

### 📖 Gamma ← Guardian Connector **Guest**
**Acesso apenas de leitura com permissões seletivas**

Os utilizadores Gamma têm acesso limitado e apenas de leitura a conteúdos específicos:
- Só pode ver gráficos e dashboards aos quais lhe foi explicitamente concedido acesso
- Não pode criar ou editar nenhum conteúdo
- Não pode aceder a ferramentas de exploração de dados
- Ideal para utilizadores que apenas precisam de visualizar relatórios específicos

*Melhor para: Visitantes, parceiros ou aliados que necessitam de acesso apenas a dashboards específicos*

### 🌐 Público ← Guardian Connector **SignedIn**
**Acesso mínimo para utilizadores autenticados sem uma função de serviço**

A função Público é atribuída aos utilizadores que estão autenticados no Guardian Connector, mas têm apenas a função **SignedIn** (ainda sem acesso ao nível do serviço):
- Corresponde à função do Guardian Connector com menos privilégios
- Tipicamente usado antes de um administrador aprovar um acesso mais amplo
- O nível de acesso também pode depender de como a função Público está configurada no Superset (incluindo a definição `PUBLIC_ROLE_LIKE`)

*Melhor para: Utilizadores recém-registados à espera de atribuição de função, ou contas que ainda não devem usar os serviços do Superset*

## Mais Informações

Para mais informações, consulte [este guia sobre funções do Superset](https://superset.apache.org/docs/security/).

Para uma lista exaustiva de funções e permissões, consulte [STANDARD_ROLES.md](https://github.com/apache/superset/blob/master/RESOURCES/STANDARD_ROLES.md).
