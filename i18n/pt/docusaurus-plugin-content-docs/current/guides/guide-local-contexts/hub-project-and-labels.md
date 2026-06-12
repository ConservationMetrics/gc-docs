---
sidebar_position: 1
tags: [itu-3, idm, opu, tsp]
---

# Passo 1: Configure um projeto "Local Contexts Hub" e defina as etiquetas.

O processo de integração oficial para o Hub é documentado pela Local Contexts: [Começando no Hub](https://localcontexts.org/support/getting-started-on-the-hub/). Os passos abaixo são aqueles que o Guardian Connector espera antes de você [**Importar Etiquetas do Hub Local Contexts**](fetch-labels-script).

:::dica

Consulte sempre a documentação específica para o seu contexto local ([documentação](https://localcontexts.org/support/getting-started-on-the-hub/)) para obter as informações mais recentes.

:::

## Steps

1. Crie um perfil de usuário para o "**Central de Contextos Locais**".
2. Crie uma conta para a **Comunidade** (não apenas um perfil de pesquisador individual).
3. Conclua a **verificação da conta** conforme necessário (\[passo de confirmação](https://localcontexts.org/support/getting-started-on-the-hub/#confirmation-step)).
4. **Personalize** os rótulos de "TK" e "BC" que sua comunidade utilizará.
5. De acordo com o fluxo de revisão por pares do Hub, é necessário que **pelo menos outra conta aprove essas etiquetas** (você não pode aprovar suas próprias etiquetas, mesmo sendo um administrador).
6. Crie um **Projeto Central**. Para muitos casos de uso, escolha o tipo de projeto **Coleção** e defina a visibilidade como **Privada**, caso a definição de rótulos deva permanecer no âmbito da comunidade.
7. Aplique as etiquetas TK e BC aprovadas a esse Projeto, para que a API retorne o conjunto de etiquetas que você deseja sincronizar.

## Valores a coletar para a Molineta

Você precisará de:

- **ID do Projeto** — identifica o projeto cujo(s) rótulo(s) você deseja obter.
- **Chave de API** – associada à sua conta da **Comunidade**.

Guarde essas informações com segurança; você irá inseri-las no recurso "[Contextos Locais]" (em `fetch-labels-script#configure-the-local-contexts-resource-in-windmill`) na etapa seguinte.

:::importante

O Guardian Connector foi projetado para buscar rótulos usando uma conta da **Comunidade**. O conector verifica a API do Hub para garantir que o uso com contas não pertencentes à comunidade (como os tipos de "Pesquisador" ou "Instituição") não ocorra silenciosamente. 

Utilize uma conta e uma chave de API conforme recomendado pela "Local Contexts" para este fluxo de trabalho.

:::

## Next

Continue para [**Importar Etiquetas do Centro de Contextos Locais**](fetch-labels-script) para configurar o Windmill e sincronizar as etiquetas com seu armazém.
