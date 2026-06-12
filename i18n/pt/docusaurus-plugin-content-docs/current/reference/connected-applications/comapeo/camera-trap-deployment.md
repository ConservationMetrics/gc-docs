---
sidebar_position: 4
tags: [itu-3, opu, tsp]
---

# Implantação de Câmeras de Armadilha (CoMapeo)

Este conjunto de categorias CoMapeo utiliza as convenções de nomenclatura recomendadas no guia "[GBIF para Armadilhas Fotográficas](https://docs.gbif.org/camera-trap-guide/en)".

<div style={{textAlign: 'center'}}>
  <img src="/img/reference/connected-applications/comapeo/camera-trap-deployment.jpg" alt="Camera Trap Deployment Category Set" style={{border: '1px solid #ccc', width: '65%', marginBottom: '1.5rem'}} />
</div>

**:disco flexível:** Baixe o conjunto de categorias: [[`camera-trap-deployment.comapeocat`](/comapeo/deployamento-de-armadilhas-fotográficas/deployamento-de-armadilhas-fotográficas.comapeocat)]**

Por favor, consulte a documentação do [CoMapeo](https://docs.comapeo.app) para obter mais informações sobre como instalar o conjunto de categorias para o seu projeto.

Esta categoria contém quatro categorias:
- **Instalação de Câmeras Armadas** (observação)
- **Manutenção de Câmeras de Armadilha** (_observação_)
- **Recuperação de Câmeras de Armadilha** (observação)
- **Trajeto da Câmera de Armadilha** (_percurso_)

## Campos recomendados pelo GBIF no CoMapeo

Esta tabela mostra como os campos recomendados pelo GBIF (`[GBIF recommended deployment fields](https://docs.gbif.org/camera-trap-guide/en/#section-deployments)`) são mapeados para os elementos ou campos do CoMapeo neste conjunto de categorias.

:::nota
Esta informação é registrada utilizando a categoria "**Implantação de Câmeras de Armadilha**". As outras categorias são utilizadas para documentar a manutenção das câmeras de armadilha, a recuperação das câmeras de armadilha e o percurso (rastro) até a câmera.
:::

| Propriedade do GBIF | Element CoMapeo | Nome do campo | Notes |
|---|---|---|---|
| ID de implantação | Campo (Selecione uma opção) | `deployment_id` | |
| Data e hora de início | Capturado automaticamente | | Marca de tempo da observação no momento do lançamento, saída no formato ISO 8601 em ``createdAt`` |
| Data e hora de término | Capturado automaticamente | | Marca de tempo da observação no momento da recuperação, saída no formato ISO 8601 como ``createdAt`` |
| ID do local | Campo (Selecione uma opção) | `location_id` | |
| Nome do local | Campo (Texto) | `location_name` | |
| Latitude | Capturado automaticamente | | Saída em graus decimais, conforme ``lat`` |
| Longitude | Capturado automaticamente | | Output as `lon` in decimal degrees |
| Gerenciar a incerteza | Capturado automaticamente | | Saída em metros, conforme o valor armazenado na variável ``accuracy`` |
| Outras informações sobre o local | Campo (Texto) | `other_location_information` | |
| Câmera montada por | Campo (Texto) | `camera_set_up_by` | |
| ID da câmera | Campo (Selecione uma opção) | `deployment_id` | Campo para o ID de Implantação |
| Modelo da câmera | Campo (Texto) | `camera_model` | |
| Atraso na transmissão de vídeo | Campo (Número) | `camera_delay` | Em segundos |
| Altura da câmera | Campo (Selecione uma opção) | `camera_height` | Em metros |
| Profundidade da câmera | Campo (Número) | `camera_depth` | Em metros |
| Inclinação da câmera | Campo (Número) | `camera_tilt` | Em graus (de 0 a 360) |
| Orientação da câmera | Campo (Número) | `camera_heading` | Em graus (de 0 a 360) |
| Distância de detecção | Campo (Número) | `detection_distance` | Em metros |
| Problemas de marcação temporal | Campo (Selecione uma opção) | `timestamp_issues` | |
| Uso de iscas | Campo (Selecione uma opção) | `bait_use` | |
| Habitat | Campo (Texto) | `habitat` | |

:::importante

CoMapeo não oferece uma maneira de adicionar validações para os campos neste conjunto. Por exemplo, no caso do **ângulo da câmera**, não podemos garantir que o valor inserido esteja entre 0 e 360 graus. Portanto, é importante trabalhar com a equipe de campo para garantir que os valores inseridos sejam corretos.

## Personalizar o conjunto de categorias

É provável que você deseje personalizar este conjunto de categorias para atender às suas necessidades específicas. Para fazer isso, consulte o repositório [conservationmetrics/gc-docs](https://github.com/ConservationMetrics/gc-docs) usando ``git clone`` e modifique os arquivos em ``/static/comapeo/camera-trap-deployment/config``.

:::dica
As empresas CMI ou Awana Digital podem ajudá-lo a criar uma nova categoria, caso precise de assistência.

No futuro, também poderemos disponibilizar uma planilha do Google para uso com o plugin de planilha da [CoMapeo](https://lab.digital-democracy.org/comapeo-category-spreadsheet-plugin/).

### Recomendações de personalização

#### Campo `deployment_id`

Este campo atualmente possui 15 opções e utiliza um sistema de numeração sequencial (CT 1, CT 2, CT 3, etc.). Se precisar de mais opções ou quiser alterar o sistema de numeração, você pode modificar o array ``options``.

#### `location_id` field

Este campo atualmente possui 5 opções de marcador (Localização 1 – 5). Você deve substituí-las pelos IDs de localização reais utilizados em sua área de estudo. Adicione ou remova opções conforme necessário para corresponder aos locais onde você está realizando a coleta de dados.

:::dica
Você pode usar áreas rurais ou comunitárias como opções para este campo.
:::

#### `habitat` field

Este campo é atualmente um campo de texto livre. Se os habitats na sua área de estudo são bem conhecidos e numericamente limitados, considere alterá-lo para um campo com o código ``selectOne``, predefinindo os tipos de habitat como opções. Isso melhora a consistência dos dados em diferentes implementações.

#### Os campos ``sd_card_id_inserted`` e ``sd_card_id_retrieved``

Esses campos são utilizados para coletar o ID do cartão SD para a instalação e recuperação da câmera. O campo ``sd_card_id_inserted`` é usado para coletar o ID do cartão SD que foi inserido na câmera, e o campo ``sd_card_id_retrieved`` é usado para coletar o ID do cartão SD que foi recuperado da câmera.

Semelhante ao campo ``deployment_id``, este campo atualmente possui 15 opções e utiliza um sistema de numeração sequencial (Cartão SD 1, Cartão SD 2, Cartão SD 3, etc.). Se você precisar de mais opções ou quiser alterar o sistema de numeração, pode modificar o array ``options``. As opções devem ser as mesmas em ambos os campos.

#### `camera_set_up_by` field

Este campo é utilizado para coletar o nome da pessoa responsável pela instalação, manutenção ou recuperação da câmera.

Atualmente, é um simples campo de texto. Se você souber os nomes de todas as pessoas que serão responsáveis pela implantação, manutenção ou recuperação da câmera, pode alterar para um campo ``selectOne`` com as opções sendo os nomes das pessoas.

#### `camera_height` field

Este campo é usado para coletar a altura em que a câmera está montada. As opções disponíveis são 0,5, 0,75, 1, 25, 1,5, 1,75 e 2 metros. Se você precisar de mais opções, ou quiser modificá-las, pode alterar o array ``options``, ou tornar este campo ``number``.

#### `check_settings` field

:::Nota
Este campo é utilizado para validar as configurações da câmera. Ele **não** tem como objetivo coletar qualquer tipo de dado.

As opções são:

- Data – a data
- Tempo – que horas são?
- Modo - Trilho
- Atraso na captura - 1 segundo
- Tamanho da foto – Alta resolução (16 MP)
- MultiShot – RPF2Shot
- 12h Início da aula
- 18h: Fim de chapéu
- IR Inteligente - Ativado
- Efeito noturno - Movimento rápido
- Unidade de Temperatura - °C
- Barra de informações – Sobre
- Gerenciamento de SD - Desligado
- Detecção de movimento - Normal
- Tipo de bateria: NiMH
- Língua - Inglês
- Nome – Conforme escrito na porta

Se você precisar de mais opções, ou quiser alterá-las, pode modificar o array ``options``.

#### Metadata

O arquivo ``metadata.json`` contém o nome e a versão do conjunto de categorias. Você pode modificá-lo para refletir o nome e a versão do seu próprio conjunto de categorias.

```json
{
  "name": "Camera Trap Deployment (GBIF)",
  "version": "1.0.0"
}
```

#### Adicione uma tradução

Atualmente, este conjunto de categorias está disponível nas seguintes línguas:

- Espanhol (`es`)
- Francês (`fr`)
- Holandês (`nl`)
- Indonésio (``id``)
- Português (`pt`)
- Swahili (``sw``)
- Tailandês (`th`)

Para adicionar suas próprias traduções, adicione um arquivo JSON com o código ISO correto na pasta ``messages`` e adicione as traduções ao arquivo, ou nos informe se você prefere trabalhar com uma planilha.

Agradecemos traduções para outros idiomas! Se você tiver interesse em contribuir com uma tradução, por favor, entre em contato conosco através do e-mail [guardianconnector@conservationmetrics.com].

### Criar uma nova categoria para câmeras de armadilha

Depois de personalizar o conjunto de categorias, você pode criar um novo conjunto de categorias usando a ferramenta de linha de comando ``comapeocat``. Isso requer que você tenha o Node Package Manager (``npm``) instalado.

```sh
npm install -g comapeocat

# Run this in this directory after forking: https://github.com/ConservationMetrics/gc-docs/tree/main/static/comapeo/
npx comapeocat build ./config --output camera-trap-deployment.comapeocat
```

Para mais informações, consulte a documentação do `[comapeocat]`.