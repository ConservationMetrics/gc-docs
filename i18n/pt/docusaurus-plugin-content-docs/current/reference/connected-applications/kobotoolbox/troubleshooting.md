---
sidebar_position: 5
tags: [itu-3, opu, tsp]
---

# Guia de solução de problemas

## Como enviar ou recuperar manualmente uma submissão malsucedida usando o KoboCollect

Quando uma submissão feita pelo telefone falha, você precisará solucionar o problema com a pesquisa não enviada e, possivelmente, submetê-la manualmente por meio de um método alternativo.

![Screenshot showing a failed submission](/img/reference/connected-applications/kobotoolbox/collect-failed-submission.jpg)
_Submissions fail when the alert shown above appears on screen after attempting to submit a finalized submission._

A submissão malsucedida aparecerá então na tela "Pronto para enviar", com uma nuvem vermelha contendo um ponto de exclamação, indicando que houve um problema ao enviar este formulário.

Para enviar manualmente uma submissão que falhou, você precisará de:

1. Um computador
2. O telefone/tablet onde a pesquisa malsucedida está armazenada.
3. Um cabo de dados USB compatível com o seu telefone. 
4. Os seguintes identificadores:
    - `Project_hash`: Este é o seu diretório de usuário dentro do KoboToolbox. Se você tiver vários projetos configurados, terá vários diretórios. Não há como identificá-los apenas pelos nomes dos diretórios, portanto, será necessário navegar dentro de cada um para determinar qual contém o seu projeto.
    - ``Survey_id`: Este é o nome da pesquisa, combinado com a data e hora em que ela foi concluída.`

**Siga estes passos para recuperar e enviar a submissão malsucedida:**

1. Conecte o telefone ao computador usando o cabo USB.
2. Uma notificação deve aparecer na tela do seu telefone, perguntando qual tipo de conexão você deseja. Selecione a opção "Transferência de Arquivos".
3. No seu computador, abra o gerenciador de arquivos, acesse o armazenamento do telefone e navegue pelas pastas na seguinte ordem: ``Internal Storage -> Android -> data -> org.koboc.collect.android -> files -> projects -> <project_hash> -> instances -> <survey_id>`` (a pasta `survey_id` incluirá uma marcação de tempo).
4. Copie a pasta da pesquisa para o seu área de trabalho.
5. Clique com o botão direito no diretório e selecione "Compactar" ou "Criar arquivo compactado". Um arquivo com a extensão ``.zip`` será criado.
6. Envie este arquivo ZIP através do canal de comunicação acordado.

:::informação

Se o pop-up no passo 2 não aparecer ou se o seu telefone não conseguir se conectar ao computador por qualquer motivo, você ainda pode recuperar os dados do projeto usando métodos alternativos. No entanto, este processo requer alguém com experiência técnica que se sinta confortável em usar a linha de comando e uma ferramenta chamada `adb` (Android Debug Bridge).

:::

## Reduzir imagens de um projeto no KoboToolbox

É bastante comum que, se o projeto envolver imagens como anexos, os usuários de uma conta gratuita do Kobo Toolbox possam enfrentar limites de armazenamento. E quando isso acontece, fica difícil lidar com a situação. Uma solução possível é reduzir o tamanho das imagens anexadas a cada submissão e, em seguida, re-enviar as imagens no seu novo tamanho reduzido.

Dessa forma, você pode reduzir significativamente o peso de uma ferramenta Kobo.

Para reduzir o tamanho das imagens no seu projeto KoboToolbox, siga estas etapas:

1. Abra seu projeto no KoboToolbox.
2. Navegue até a seção "Dados", e depois para a seção "Downloads".
3. Selecione o tipo de exportação "Anexos de mídia (ZIP)".
![download media attachments screenshot](/img/reference/connected-applications/kobotoolbox/download-media-attachments.png)
4. Baixe as imagens como um arquivo ZIP.
4. Reduza todas as imagens usando qualquer ferramenta local, como ImageMagick ou Pillow, ou no Windows você pode usar a [Ferramenta de Redimensionamento de Imagens da Microsoft](https://learn.microsoft.com/en-us/windows/powertoys/image-resizer).
5. Edite cada uma das submissões de formulário e faça o novo envio da imagem reduzida, certificando-se de que você envia a imagem correspondente ao nome da já enviada.
![edit a submission screenshot](/img/reference/connected-applications/kobotoolbox/edit-entry.png).
