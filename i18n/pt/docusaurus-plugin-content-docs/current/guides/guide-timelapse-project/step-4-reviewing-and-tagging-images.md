---
tags: [itu-3, opu, tsp]
---
# Etapa 4: Revisar e rotular imagens

O processo de revisão e etiquetagem de fotos variará dependendo do seu conjunto de dados de imagens e dos objetivos do projeto. Os passos abaixo descrevem um fluxo de trabalho geral para etiquetar imagens.

1. **Inicie o software de time-lapse.** (Este é o arquivo ``Timelapse.exe`` na sua pasta de time-lapse.)

2. **Carregue seu modelo:**
   - Vá para **Arquivo → Carregar modelo, imagens e vídeos**
   - Navegue até a pasta raiz do seu conjunto de dados de imagens e selecione o modelo "Timelapse".
   - Isso irá carregar suas imagens para o aplicativo Timelapse.

3. **Revisar e adicionar etiquetas às imagens:**
   - Navegue por cada imagem (usando as teclas de seta **← →**), identificando todos os animais presentes.
   - Se suas câmeras foram configuradas para capturar várias imagens sempre que fossem ativadas, você pode avançar ou retroceder em uma "sequência" (todas as imagens em uma sequência) usando **Ctrl + →** ou **Ctrl + ←**.
   - A tecla "**c**" copiará os valores da imagem anterior e os preencherá na imagem atual. Isso se aplica apenas aos campos "copiáveis" no modelo de "Timelapse" para o seu projeto.
   - As teclas **↑** e **↓** mostrarão a diferença entre a imagem atual e a próxima/anterior, destacando os pixels que foram alterados. Isso é útil para identificar a localização de um animal na imagem.
   - Se mais de uma espécie aparecer em uma imagem ou vídeo, utilize a opção **Editar → Duplicar este registro** (``Ctrl+D``).
       - Isso criará uma entrada adicional no banco de dados, permitindo que você faça anotações para cada espécie individualmente.
   - Você pode usar a opção "**Selecionar → Seleção personalizada...**" para filtrar quais imagens são exibidas, focando em campos de metadados específicos (pastas, imagens favoritas, intervalo de data/hora, etc).
   - O Timelapse possui um ajustador de imagem embutido que pode ser usado para alterar o contraste, o brilho e aplicar transformações temporárias à imagem atual. Essa opção pode ser acessada em **Opções → Ajustar a aparência da imagem temporariamente**.

![Review and tag images](/img/guides/guide-timelapse-project/tagging-animals.jpg)
_Example of tagging images in Timelapse using the practice image set._
