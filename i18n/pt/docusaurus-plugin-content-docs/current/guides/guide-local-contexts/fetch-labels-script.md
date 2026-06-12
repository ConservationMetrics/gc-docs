---
sidebar_position: 2
tags: [itu-3, idm, opu, tsp]
---

# Passo 2: Obter rótulos do centro de contextos locais

Após ter um projeto ([Hub project]) e as etiquetas aprovadas (\[hub-project-and-labels]), use o Windmill (que é a ferramenta que alimenta o \[GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/)) para importar essas etiquetas para o data warehouse.

## Configure o recurso "Contextos Locais" no Windmill.

Crie ou edite um recurso chamado "**Contextos Locais**" que armazene:

- **URL do servidor** – este deve ser `https://localcontextshub.org` (o valor padrão).
- **Chave da API** – proveniente da sua conta na comunidade.
- **ID do Projeto** – O projeto para o qual você deseja sincronizar as etiquetas.

## Execute a função chamada **Local Contexts: Recuperar Etiquetas**

No Windmill, localize e execute o script intitulado "**Contextos Locais: Obter Etiquetas**".

**O que faz:**

- Chama a API do Local Contexts Hub para o seu projeto e obtém as etiquetas TK e BC.
- Salva os registros de "Label" no mesmo banco de dados que seus dados de armazém.
- Baixe os ativos de imagem com rótulos (por exemplo, ícones) para o seu data lake.

**Após uma execução bem-sucedida,** você deverá ver uma tabela chamada "Conjunto de Rótulos", cujo nome segue o seguinte padrão:

> `localcontexts_<project_title>`

…onde ``<project_title>`` vem do título do seu projeto no Hub. Essa tabela é a **fonte das etiquetas disponíveis** para o aplicativo de anotações ([annotations-app]).

## Execute uma vez, em um horário predefinido, ou quando as etiquetas forem alteradas.

- **Sob demanda** – Execute o script sempre que você alterar as etiquetas no Hub ou na primeira configuração do fluxo de trabalho.
- **Agendado** – Se a sua comunidade deseja que o armazém permaneça sincronizado com o Hub sem necessidade de execuções manuais, agende o script no Windmill para ser executado periodicamente.

:::dica
As etiquetas no armazém devem permanecer **estáveis** até que você as atualize intencionalmente no Hub e execute novamente este script.
:::

## Next

[**Aplicar rótulos de contexto local a um conjunto de dados**](aplicativo-de-anotações) usando o aplicativo de anotações Windmill.
