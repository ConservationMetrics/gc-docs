---
tags: [itu-3, opu, tsp]
---
# Etapa 5: Utilizando Reconhecimento de Imagem

:::Nota

Por favor, consulte o [Guia de Reconhecimento de Imagens em Tempo Real](https://timelapse.ucalgary.ca/wp-content/uploads/Guides/TimelapseImageRecognitionGuide.pdf) para obter as informações mais recentes e detalhadas. Além disso, veja a página de [reconhecimento de imagens em tempo real](https://timelapse.ucalgary.ca/imagerecognition/) para um tutorial em vídeo e um conjunto de imagens práticas.

:::

O reconhecimento de imagens pode acelerar significativamente o seu fluxo de trabalho com câmeras fotográficas, detectando e classificando automaticamente animais, pessoas e veículos nas suas imagens. Embora não seja perfeito, ajuda a identificar rapidamente imagens vazias, focar em espécies específicas e aplicar etiquetas em massa para detecções semelhantes.

![Image recognition workflow](/img/guides/guide-timelapse-project/image-recognition.jpg)  
_Example of Timelapse showing bounding boxes around detected entities, using the practice image set._

:::dica
O reconhecimento de imagens não é uma solução mágica – é uma ferramenta para complementar, e não substituir, a análise cuidadosa. Sempre verifique os resultados do reconhecimento, especialmente quando se trata de dados críticos.

## O que é reconhecimento de imagens?

O reconhecimento de imagens utiliza modelos de aprendizado de máquina para inspecionar e analisar automaticamente suas imagens. Pode:

- **Identifique** se algo está presente (animal, pessoa, veículo ou vazio).
- **Identifique** espécies específicas ao utilizar modelos adequados.
- **Localize** entidades usando os caixas delimitadores desenhados nas suas imagens.
- **Atribua pontuações de confiança** que indiquem a probabilidade de identificação correta.

O processo também funciona com vídeos: os quadros são extraídos e analisados como imagens, exibindo os resultados da posição dentro do vídeo.

## Instalação e execução do AddaxAI (recomendado)

O Timelapse integra-se com o **AddaxAI** (anteriormente conhecido como EcoAssist), que oferece uma interface fácil para o sistema de reconhecimento de IA da Microsoft, o [MegaDetector](https://github.com/agentmorris/MegaDetector), amplamente utilizado. O MegaDetector foi projetado especificamente para imagens de armadilhas de câmeras de vida selvagem e é um dos sistemas de detecção mais confiáveis disponíveis para pesquisas ecológicas.

O AddaxAI também permite a execução do **SpeciesNet**, um modelo de reconhecimento de espécies em nível global, bem como vários modelos específicos para regiões ou habitats.

### Installation

1. Na opção "Em Tempo Real", selecione ``Recognizer → AddaxAI Image Recognizer → Install AddaxAI image recognizer``

2. **Siga as instruções do navegador** que aparecem. A instalação leva de 10 a 15 minutos, pois são baixados os pacotes necessários.

3. **Selecione o modelo de reconhecimento** que você deseja utilizar quando o AddaxAI começar a funcionar:
   - _Nenhum_: Detecção básica de animais/pessoas/veículos (útil para qualquer região)
   - _SpeciesNet_: Classificação de espécies para fins gerais
   - _Modelos regionais:_ Especificamente para determinadas áreas geográficas e espécies.

### Reconhecimento em tempo real

1. **Comece o reconhecimento** com ``Recognizer → AddaxAI Image Recognizer → Run AddaxAI on this folder``

2. **Selecione a pasta** que contém as imagens que você deseja processar (geralmente, a pasta raiz das suas imagens).

3. **Selecione o modelo e a espécie de interesse** na interface do AddaxAI.

4. Clique em "Iniciar processamento" e aguarde a conclusão.

5. **Importe os resultados** usando ``Recognizer → Import recognition data for this image set``

O AddaxAI gera um arquivo ``timelapse_recognition_file.json`` contendo todos os dados de detecção e classificação.

## Compreendendo os Resultados de Reconhecimento

### Caixas delimitadoras e rótulos

Após importar os dados de reconhecimento, você verá:

- **Caixas delimitadoras coloridas** ao redor das entidades detectadas.
- **Rótulos** indicando o tipo de detecção (animal, pessoa) ou a classificação da espécie.
- **Pontuações de confiança** que indicam a probabilidade de identificação correta.
- **Cores diferentes** para diferentes tipos de entidades (vermelho para pessoa, azul para animal)

### Níveis de Confiança

A confiança na identificação ajuda você a compreender a confiabilidade:

- **Alta confiança (0,8 - 1,0):** Provavelmente correto, com erros ocasionais.
- **Confiança moderada (0,2 - 0,8):** Maior probabilidade de falsos positivos
- **Baixa confiança (0,0 - 0,2):** Provavelmente incorreto

:::aviso
Os limites de confiança variam entre diferentes modelos de reconhecimento. Utilize os resultados visuais para determinar quais níveis de confiança funcionam melhor para suas imagens.
:::

## Fluxo baseado em reconhecimento

Uma abordagem sistemática maximiza a eficiência, mantendo a precisão.

### 1. Configure seu modelo

Inclua campos de bandeira no seu modelo para:
- `Empty` – imagens sem animais ou pessoas
- `Wildlife` - imagens contendo animais
- `Person` - imagens que contêm pessoas
- `Species` – para classificação detalhada de espécies

### 2. Processar Imagens Vazias

1. Selecione imagens vazias usando ``Select → Custom Selection → Recognitions → Empty``
2. **Marcar como vazio em lote** usando os campos ``Empty`` e ``Copy to all``
3. **Revisar e corrigir** resultados negativos falsos (animais/pessoas não identificadas).
4. **Ajuste os intervalos de confiança** para capturar mais possíveis casos de falta de estoque.

### 3. Identifique pessoas e veículos

1. Selecione as detecções de pessoas com um nível de confiança razoável.
2. **Marcação e revisão em massa** para conformidade com a privacidade ou análise separada.
3. **Repita para os veículos**, caso seja relevante para o seu projeto.

### 4. Classificar a vida selvagem

1. Selecione as detecções de animais acima do seu limite de confiança escolhido.
2. **Utilize as classificações de espécies**, se disponíveis, para adicionar automaticamente etiquetas a espécies comuns.
3. **Analise primeiro as classificações de maior confiança**, e depois as de menor confiança.
4. **Classifique manualmente** os animais restantes que não foram rotulados.

### 5. Revisão final

1. **Verifique se há imagens não processadas** usando a seleção personalizada.
2. **Verifique se todas as imagens foram classificadas** de forma adequada.
3. **Exporte seus dados** da mesma forma.

## Recursos Avançados

### Reconhecimento de vídeo

- Exemplos de quadros de vídeo para reconhecimento (padrão: a cada 1 segundo)
- Utilize o botão "**Melhor**" para ir diretamente à detecção com maior confiança.
- As caixas delimitadoras são animadas durante a reprodução do vídeo.

### Processamento em etapas

Para projetos em andamento:
- Execute o AddaxAI em novas pastas, conforme você adiciona imagens.
- Importe arquivos adicionais de reconhecimento para combiná-los com os dados existentes.
- Mantenha arquivos de reconhecimento separados em cada pasta.

### Opções de seleção personalizadas

- **Classifique por nível de confiança** para revisar do mais preciso ao menos preciso.
- A seleção de episódios inclui todas as imagens de um episódio quando uma delas corresponde a um determinado critério.
- **Amostragem aleatória** para verificação de qualidade em grandes conjuntos de dados

## Erros Comuns de Reconhecimento

Compreender as limitações ajuda você a trabalhar de forma mais eficaz:

- **Falsos positivos**: Detecções em que não há nada presente.
- **Falsos negativos:** Falta de detecção de animais ou pessoas reais.  
- **Classificações incorretas:** Identificação errada, espécie errada
- **Resultados ambíguos**: Múltiplas detecções sobrepostas

## Dicas para otimizar o fluxo de trabalho

:::Dicas para aumentar a eficiência

- **Comece com detecções de alta confiança** para marcar em massa os casos óbvios.
- **Utilize a amostragem aleatória** em grandes conjuntos de dados para verificar a precisão.
- Ajuste os limiares de confiança com base na sua tolerância a erros.
- Crie entradas "QuickPaste" para corrigir rapidamente erros comuns.
- **Exclua imagens vazias** se o espaço de armazenamento for uma preocupação.

:::

---

## Advanced: Using MegaDetector Directly

While AddaxAI provides the easiest way to use image recognition, you can also run [MegaDetector](https://github.com/agentmorris/MegaDetector) directly if you need more control over the process or want to customize parameters.

### When to Use MegaDetector Directly

Consider using MegaDetector directly if you:

- Have a very large number of images (millions) that exceed your computer's capacity
- Need to customize recognition parameters or models
- Want to integrate recognition into automated workflows
- Have technical expertise and specific requirements not met by AddaxAI

### MegaDetector Versions

There are currently two active versions of MegaDetector:

- **[Original MegaDetector](https://github.com/agentmorris/MegaDetector)** (maintained by Dan Morris): Well-established version with extensive community support
- **[Microsoft AI for Good MegaDetector](https://github.com/microsoft/CameraTraps)** (Pytorch Wildlife): Newer development under Microsoft's AI for Good initiative

Both versions work with Timelapse and produce compatible recognition files.

### Technical Implementation

If you choose to run MegaDetector directly:

1. **Install MegaDetector** following the documentation on GitHub
2. **Process your images** using the command-line interface
3. **Generate a JSON file** in the [standard format](https://lila.science/megadetector-output-format)
4. **Import the JSON file** into Timelapse using the recognition import feature

The resulting workflow and capabilities in Timelapse remain the same regardless of whether you use AddaxAI or MegaDetector directly.

---

## Conclusion

O reconhecimento de imagens pode reduzir o tempo gasto na marcação manual em 70 a 90%, quando utilizado de forma eficaz. A chave é encontrar o equilíbrio certo entre velocidade e precisão, de acordo com as necessidades específicas do seu projeto.
