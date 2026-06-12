---
tags: [itu-3, opu, tsp]
---
# Passo 1: Organização das Imagens

É importante que as imagens sejam organizadas com cuidado. Todas as imagens que devem ser analisadas em conjunto, ou o seu "conjunto de imagens", devem ter a mesma pasta raiz e podem ser separadas em subpastas sob a pasta raiz. Abaixo está uma estrutura de pastas sugerida, no entanto ela pode variar dependendo da configuração das implantações e recuperações do seu projeto.

```
ProjectName/
├── Springfield/
│ ├── Deployment_20240319/
│ │ ├── Camera1/
│ │ └── Camera2/
│ ├── Deployment_20240425/
│ │ ├── Camera1/
│ │ └── Camera2/
├── Fairfax/
│ ├── Deployment_20240512/
│ │ ├── Camera1/
...
```

Neste exemplo, uma nova pasta de recuperação é criada para cada verificação da câmera. As pastas de recuperação servem como as pastas raiz do seu conjunto de dados de imagens. Todas as fotos de um cartão SD devem ser colocadas no nível mais baixo da estrutura de pastas. Por exemplo, as fotos de um cartão SD retirado da Câmera 1 em 19 de março de 2024 seriam copiadas para ``Springfield/Deployment_20240319/Camera1``. Essa estrutura facilita a organização de novas imagens à medida que novas recuperações são adicionadas.

:::importante

**Lidando com cartões SD que contêm mais de 10.000 imagens**

Many camera models name images using a four-digit counter (e.g., `IMG_0001.JPG` → `IMG_9999.JPG`).  
When more than 9,999 images are captured on a single SD card, the camera automatically creates an additional folder on the card and continues numbering from `IMG_0001.JPG` again.

Ao copiar imagens do cartão SD:

- Se houver **apenas uma pasta contendo imagens**, copie as imagens diretamente para a pasta da câmera.
- Se houver **duas ou mais pastas contendo imagens**, copie as pastas exatamente como elas aparecem no cartão SD para dentro da pasta da câmera, em vez de mesclar seu conteúdo.

**Não combine as imagens de várias pastas em uma única pasta.** Como os nomes dos arquivos se repetem (por exemplo, ``IMG_0001.JPG``), a combinação de pastas pode causar:

- **Substituir arquivos**, o que pode resultar na perda permanente de dados, ou  
- Faça com que o sistema operacional renomeie os arquivos (por exemplo, ``IMG_0001 (1).JPG``), tornando difícil determinar se os arquivos são duplicados ou imagens distintas.

Manter a estrutura de pastas original garante que todas as imagens sejam preservadas e evita confusão durante o processamento posterior.

Exemplo de estrutura de pastas

```
ProjectName/
├── Springfield/
│ ├── Deployment_20240319/
│ │ ├── Camera1/
│ │ ├──── 100_BTCF/
│ │ ├──── 101_BTCF/
│ │ └── Camera2/
│ ├── Deployment_20240425/
│ │ ├── Camera1/
│ │ └── Camera2/
├── Fairfax/
│ ├── Deployment_20240512/
│ │ ├── Camera1/
...
```
:::

![Screenshot of imagery organization in the Timelapse practice image set](/img/guides/guide-timelapse-project/organizing-imagery.jpg)
_Example of a Timelapse project folder structure, using the practice image set._

:::informação

Assim que você iniciar um projeto no modo "Timelapse", o software criará vários arquivos na sua pasta principal:

* Um banco de dados de modelos de projetos (``TimelapseTemplate.tdb``)
* Um banco de dados para informações do projeto (``TimelapseData.ddb``)
* Uma pasta ``backups/`` onde o Timelapse fará backups de dados periodicamente.

:::

:::importante

Assim que você iniciar a análise no modo de tempo real, não altere o nome, mova ou reorganize nenhuma pasta ou arquivo dentro da pasta raiz. Você pode mover ou copiar a própria pasta raiz.

:::


---

## Adicionar novas imagens a um projeto de time-lapse existente

Em muitas configurações de câmeras fotográficas, as imagens são coletadas periodicamente à medida que os cartões SD são recuperados no campo. Essas novas imagens podem ser adicionadas a um projeto Timelapse existente sem criar um novo projeto ou banco de dados.

### 1. Copie as novas imagens para a pasta do projeto existente

Primeiramente, copie as novas imagens para o local apropriado dentro da pasta raiz do seu projeto. As novas imagens devem seguir a mesma estrutura de pastas utilizada para o restante do projeto (por exemplo: estação → implantação → câmera).

Por exemplo:

```
ProjectName/
├── Springfield/
│ ├── Deployment_20240319/
│ │ └── Camera1/
│ ├── Deployment_20240425/
│ │ └── Camera1/ ← newly added images
```


Normalmente, os cartões SD recuperados "próximos" à mesma data são colocados em uma nova pasta de implantação. Isso ajuda a organizar as imagens e facilita o rastreamento de quando as câmeras foram verificadas ou movidas.

:::importante

Após iniciar a análise de imagens no modo "Timelapse", **não altere ou reorganize as pastas que já existem no projeto**. Alterar os nomes das pastas ou sua estrutura pode interromper a conexão entre as imagens e o banco de dados do Timelapse. No entanto, você pode adicionar com segurança novas pastas contendo imagens adicionais dentro da pasta raiz do projeto.

:::

### 2. Adicione as novas imagens na sequência de tempo.

Depois que as imagens estiverem armazenadas no disco:

1. Abra o projeto existente no modo Timelapse.
2. No menu, selecione  
   **Arquivo → Adicionar arquivos de imagem e vídeo a este conjunto de imagens…**
3. Navegue até a pasta que contém as novas imagens adicionadas.
4. Selecione a pasta e clique em **Abrir**.

O "Timelapse" irá escanear a pasta selecionada e adicionar as imagens ao banco de dados do projeto.

:::Nota

Se você configurou os metadados da pasta e as novas imagens não corresponderem à estrutura existente, você verá um aviso ao adicionar as imagens. Você pode adicionar um novo campo de metadados na editor de modelo ou ignorar este aviso por sua própria conta (e risco). Não está claro como a ignorância do aviso pode se manifestar quando se usa os metadados da pasta, e é fortemente recomendado que você teste isso antes de prosseguir com o trabalho de rotulagem.

:::

### 3. Inicializar metadados para novas pastas

Se as novas imagens forem armazenadas em uma **nova pasta** (por exemplo, em um novo ambiente de implantação), o Timelapse reconhecerá que a pasta ainda não está associada a metadados.

Para concluir a configuração:

1. Selecione uma imagem da nova pasta.
2. Abra a aba "**Dados da Pasta**".
3. Navegue até o nível apropriado (por exemplo, *Implantação*).
4. Clique em "**Clique para editar os dados desta pasta**" e preencha os campos de metadados.

### 4. Continuar a análise

Após a adição das imagens e a inicialização dos metadados da pasta, as novas imagens aparecerão no fluxo de trabalho normal de navegação e poderão ser revisadas e anotadas, assim como o restante do conjunto de dados.

Este fluxo de trabalho iterativo permite que os analistas expandam continuamente um projeto de timelapse à medida que novos dados são obtidos no campo.
