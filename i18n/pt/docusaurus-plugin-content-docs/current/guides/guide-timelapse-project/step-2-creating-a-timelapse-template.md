---
tags: [itu-3, opu, tsp]
---
# Passo 2: Criando um modelo de timelapse

:::Nota

Para instruções detalhadas, consulte o [Guia de Modelo de Timelapse](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseReferenceGuide.pdf).

:::

Neste passo, você cria campos de banco de dados personalizados para o seu projeto. A interface Timelapse utiliza os campos definidos no modelo para estruturar o banco de dados durante o processo de revisão das imagens. O modelo deve ser armazenado na pasta raiz do conjunto de dados de imagens (seguindo a estrutura de pastas acima, será a pasta mais recente).

:::dica

Você pode usar o conjunto de imagens de "**Prática de Time-lapse**" como ponto de partida. Consulte [Recursos Chave](./index.md#key-resources) para um link para baixar este conjunto.

:::

![Creating a Timelapse Template](/img/guides/guide-timelapse-project/creating-timelapse-template.jpg)
_Example of a Timelapse template, using the practice image set._

## Como criar um modelo de Time-lapse

1. Inicie o software **Editor de Modelo de Time-Lapse**. (Este é o arquivo ``TimelapseTemplateEditor.exe`` na sua pasta de Time-Lapse.)

2. Para criar um novo modelo: vá em **Arquivo → Novo Modelo**, navegue até a pasta raiz do seu conjunto de dados de imagens e salve o modelo com um nome exclusivo.

3. O novo modelo incluirá os campos de dados obrigatórios exigidos pelo Timelapse. Não é necessário modificá-los.

4. Utilize o botão "**Adicionar**" na parte direita da tabela para definir os campos e selecionar um tipo de dado:
   - **Observações:** Texto livre
   - **Contagens:** Números inteiros
   - **Indicadores:** Verdadeiro/falso
   - **Opções:** Menu suspenso com opções pré-definidas

**Campos sugeridos:**

- `Indigenous Name` (Escolha ou texto) – Nome nativo da espécie encontrada na imagem
- `English Name` (**Opções**) – Nome em inglês da espécie encontrada na imagem (opcional)
- `Scientific Name` (**Opções**) – Nome científico da espécie encontrada na imagem (opcional)
- `Count` (Contagem) — contar o número de espécies
- `Notes` (Observações) — para comentários do revisor
- `Favorite` (**Marca**) – para identificar imagens importantes

:::dica

Você não precisa usar os nomes científicos para o seu menu suspenso de espécies se preferir. Você pode usar os nomes tradicionais das comunidades indígenas e, posteriormente, combiná-los com os nomes científicos (se desejar).

:::

:::informação

Os dados do seu modelo de projeto são armazenados em um arquivo chamado `TimelapseTemplate.tdb`. Você pode renomear este arquivo, desde que ele não contenha caracteres especiais ou espaços no nome. Certifique-se de que este arquivo esteja sempre no nível raiz do seu conjunto de imagens. (O Timelapse o criará lá quando você iniciar um novo projeto.)

:::
