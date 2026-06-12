---
tags: [opu, tsp]
---

# Auth0

[Auth0](https://auth0.com/) é uma plataforma de gerenciamento de identidade e acesso que fornece serviços de autenticação e autorização para as implementações do Guardian Connector.

## Como o Auth0 é utilizado no conector Guardian

O Auth0 permite a autenticação segura de usuários e o controle de acesso em todas as ferramentas do Guardian Connector:

- **Autenticação Única (SSO):** Os usuários se autenticam uma única vez para acessar vários serviços do Guardian Connector.
- **Gerenciamento de usuários** – Registro, login e gerenciamento de perfil centralizados para os usuários.
- **Controle de acesso baseado em funções** – Níveis de permissão diferentes para administradores e membros da comunidade.

## Como começar

1. Crie uma conta no Auth0 em [auth0.com](https://auth0.com/)
2. Configure os aplicativos para cada serviço de Conector Guardian.
3. Defina os papéis e permissões dos usuários de acordo com as necessidades da sua comunidade.
4. Configure as credenciais do Auth0 no ambiente de variáveis de configuração do seu Guardian Connector.
5. Teste o fluxo de autenticação única (SSO) em todas as suas ferramentas do Guardian Connector.

Para uma configuração detalhada, consulte a documentação do Auth0 em [https://auth0.com/docs/](https://auth0.com/docs/).

## Processo de Aprovação do Usuário

1. O usuário se inscreve para usar as aplicações do Guardian Connector (como Superset, GC Scripts Hub e GC Explorer, etc.) utilizando o Auth0 – seja criando uma conta ou utilizando um serviço como o Google ou o GitHub.
2. Ao se cadastrar, o usuário verá uma mensagem como "Login inválido" no Superset, ou "A sua aprovação está pendente" no GC Explorer, etc.
3. Um administrador de inquilino Auth0 aprova o usuário adicionando ``"approved": true`` aos metadados da aplicação no JSON do usuário. Isso pode ser encontrado acessando "Gerenciamento de Usuários" > "Usuários", clicando no usuário para aprová-lo e rolando até a seção "app\_metadata".
4. Agora, o usuário pode autenticar e fazer login nas aplicações do Guardian Connector.

## Configurar um Tenant do Auth0

Um "tenant" Auth0 é uma instância dedicada da plataforma de gerenciamento de identidade Auth0 que pertence a uma organização ou aplicação específica. Ele funciona como um contêiner para todas as configurações, dados do usuário e definições de segurança relacionadas às suas necessidades de gerenciamento de identidade. Cada "tenant" opera de forma independente, garantindo que as configurações e os dados dentro dele estejam isolados dos outros "tenants". Essa configuração permite que as organizações gerenciem a autenticação, autorização e políticas de segurança centralmente para suas aplicações.

Siga estes passos para configurá-lo na sua instância:

1. Na seção "**Configurações**", selecione "Produção" como a Etiqueta de Ambiente.
2. Na seção **Ações**, configure um Fluxo para aprovação do usuário.
3. Na seção de "**Marcação**", faça quaisquer personalizações, como adicionar um logotipo e definir a cor de fundo.
4. Na seção de **Autenticação / Banco de Dados**, verifique se os cadastros estão habilitados (estão por padrão).
5. Na seção **Autenticação / Social**, habilite ``google-oauth2``. Configure um ID e uma chave secreta para um cliente OAuth 2.0 de um projeto do Google Cloud Platform. Consulte a seção ``gc-deploy`` para obter mais informações (https://github.com/ConservationMetrics/gc-deploy/tree/main/auth0#gcp-oauth-client-configuration).

## Criando uma Ação de Gatilho do Auth0 para Aprovação de Usuário

Para lidar com a aprovação do usuário no Auth0, uma Ação Acionada (com o nome "Verificar Aprovação") atua como um intermediário entre o login e a emissão de tokens.

![Login flow](/img/reference/gc-toolkit/externally-hosted/auth0/login-flow.png)

Este é o código para aquela ação, baseado nos [Casos de Uso Comuns na documentação da Auth0](https://auth0.com/docs/customize/actions/flows-and-triggers/login-flow#common-use-cases):

```javascript
exports.onExecutePostLogin = async (event, api) => {
  // Check if the user is approved
  if (event.user.app_metadata && event.user.app_metadata.approved) {
    // User is approved, continue without action
  } else {
    api.access.deny('Your approval to access the app is pending.');
  }
};
```

Esta Ação de Gatilho deve ser adicionada ao Fluxo "**Após o Login**" na página **Ações -> Gatilhos** do Auth0.

A ação verifica se a propriedade booleana ``user.app_metadata.approved`` é verdadeira e permite que o usuário prossiga. Caso contrário, retorna a mensagem "Sua aprovação para acessar o aplicativo está pendente", que também é passada como um parâmetro de consulta no navegador e utilizada por aplicativos como o GC Explorer para indicar ao usuário que ele precisa de aprovação.