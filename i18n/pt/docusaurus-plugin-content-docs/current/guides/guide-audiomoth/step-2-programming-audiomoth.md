---
tags: [itu-3, opu, tsp]
---
# Passo 2: Programação do AudioMoth

Os AudioMoths podem ser configurados com diversas opções para diferentes objetivos. Para obter documentação completa, consulte o [Manual de Operação](https://github.com/OpenAcousticDevices/Application-Notes/raw/master/AudioMoth_Operation_Manual.pdf). 

A seguir, estão algumas configurações recomendadas para projetos padrão de monitoramento de aves:

### Configurações Principais

-   **Taxa de amostragem:** 32 kHz

-   **Benefício:** Moderado

-   **Duração do sono:** 9 minutos

-   **Duração da gravação:** 1 minuto

-   **Horário:** 00:00–24:00 (definido no fuso horário local, por exemplo, UTC-7)

-   **Filtro:** Nenhum

### Configurações Avançadas

-   Desativar: "Requer Aplicativo de Toque
    - O aplicativo "Chime" (para smartphones) pode ser usado para redefinir o relógio no local após a troca das baterias. No entanto, não queremos que seja obrigatório utilizá-lo para sensores que já possuem a data e hora configuradas corretamente (ou seja, na instalação inicial). 

-   Ativar: "Utilizar o ID do dispositivo como prefixo no nome do arquivo WAV

-   Deixe todas as outras caixas desmarcadas.

:::nota
Se você estiver usando baterias recarregáveis NiMH ou LiPO, você precisa verificar a caixa "Usar faixa de tensão para NiMH/LiPO para indicar o nível da bateria".
:::

-  Clique em **Configurar o AudioMoth**.

-  Aguarde até que o botão retorne ao estado "pronto".

-  Remova o dispositivo com segurança.

## Tempo de execução esperado

-   **Armazenamento:** ~1336 MB/dia → 64 GB ≈ 49 dias

-   **Bateria:** Aproximadamente 30 dias com 3 pilhas alcalinas AA.

-   Implementações típicas: de 3 a 6 semanas, dependendo das condições do local.

## Carregar Configuração

A CMI tem prazer em ajudá-lo(a) a configurar o sistema. Por favor, entre em contato se precisar de nossos conselhos ou assistência.

1.  Abra o aplicativo de **Configuração**.

    ![](/img/guides/guide-audiomoth/am_configurator.jpg)

2.  Carregue o seu arquivo de configuração: **Arquivo → Abrir Configuração**

3.  Defina a exibição do relógio do dispositivo: **Hora → Local**.

## Definir o horário do dispositivo

Se você já programou o AudioMoth e as baterias foram instaladas continuamente desde a programação, o relógio do AudioMoth deve já estar configurado corretamente. No entanto, se as baterias foram removidas em algum momento, você pode usar o aplicativo "Time" para configurar apenas o relógio.

1.  Abra o aplicativo **Tempo**.

2.  Clique em **Definir Hora** para sincronizar com a hora local do seu computador.

    -   O AudioMoth armazenará a hora em **UTC**.

Se você receber um aviso sobre uma rápida deriva no relógio, verifique manualmente a hora no seu AudioMoth – este aviso geralmente está incorreto.

## Verificação/Teste pré-implantação

Antes de enviar qualquer AudioMoth para o campo, realize uma verificação rápida da funcionalidade para garantir que o dispositivo, a memória SD e a configuração estejam funcionando conforme o esperado. Esses testes levam menos de dois minutos por unidade e evitam a maioria dos problemas durante a implantação.

1.  **Insira as pilhas e o cartão SD**  
    Confirm the SD card clicks securely into place and the battery
    contacts are clean.

2.   **Verifique a configuração correta**  
    Connect the device to the AudioMoth Config App and ensure the
    intended *sample rate*, *gain*, *schedule*, and *timezone* are
    applied. Verify that the device time is within a few seconds of the
    computer clock. Then disconnect the AudioMoth from your computer.

3.   Ative o dispositivo 
    Mude para **PERSONALIZADO**, verifique se o LED pisca conforme o esperado (se o sensor estiver entre as gravações agendadas, a luz verde piscará lentamente; se a gravação estiver em andamento, a luz vermelha piscará rapidamente). Consulte o [guia do LED](https://www.openacousticdevices.info/led-guide) para diagnosticar padrões de piscada inesperados.

4.   **Grave um pequeno trecho de teste com áudio ambiente**  

:::dica
Consulte a seção [Testando Sensores Acústicos](passo-7-testando-sensores) para obter o fluxo de trabalho recomendado para os testes.
:::

Deixe o dispositivo ligado por aproximadamente 5-10 segundos, falando em um volume "normal". Em seguida, altere para as opções USB/DESLIGAR e inspecione a memória do cartão SD:

    -    Um novo arquivo WAV deve estar presente.
    -    O arquivo deve ter o carimbo de data e hora correto.
    -    A reprodução deve conter sua voz de forma clara e audível.

5.   **Verificar o ajuste da habitação**
    Coloque o dispositivo em sua embalagem apropriada e verifique se:

      -   Não há nenhum ruído ou vibração.
      -    A porta do microfone não está obstruída.
      -    As marcas de orientação são visíveis ou identificadas.

6.   Qualquer dispositivo que falhe em uma verificação de sanidade não deve ser implementado até
    O problema foi resolvido.
    
## Escolhendo as configurações de Taxa de Amostragem, Ganho e Agendamento

A escolha das configurações de gravação adequadas depende da taxonomia alvo, dos níveis de ruído de fundo, das restrições de armazenamento e dos objetivos do projeto.

### Seleção da taxa de amostragem

| Objetivo do estudo / Espécies-alvo | Taxa de amostragem recomendada | Notes |
|-------------------------|--------------------------|-------|
| Biodiversidade geral (aves, mamíferos) | **24-32 kHz** | Equilíbrio entre o tamanho do arquivo e a cobertura da frequência. |
| Songbirds, frogs | **32–48 kHz** | Captura energia até aproximadamente 24 kHz, o que é útil para captar harmônicos. |
| Morcegos ou insetos com frequências muito altas | **≥ 192 kHz** | Essencial para sinais ultrassônicos; grande impacto no armazenamento e na duração da bateria. |
| Ruído de baixa frequência ou uso em ambientes marinhos | **8–16 kHz** | Adequado para sinais de baixa frequência; minimiza o consumo de bateria e espaço de armazenamento. |

**Regra geral:** Escolha a taxa de amostragem mais *baixa* que ainda capture a maior frequência de interesse (taxa de amostragem ≥ 2 × frequência máxima).

---

### Gain Setting Guidance

- **Low gain** is best for high-noise environments or loud species.
- **Medium or high gain** may be useful for:
  - quiet forests,
  - distant calls,
  - faint signals (small passerines, rodents, some frogs).
- High gain increases the risk of **clipping**, especially during rain, wind, or loud species (hornbills, baboons, gunshots).

If unsure, run two devices with different gain settings for 24 hours and compare Signal-to-Noise Ratio (SNR).

---

### Considerações sobre o agendamento

- **Gravação contínua:** Ideal para padrões de vocalização desconhecidos; maior custo em termos de bateria e armazenamento.  
- **Gravação em ciclo de carga:** Útil para monitoramento a longo prazo (por exemplo, 1 minuto a cada 10 minutos).  
- **Horários de funcionamento:** Direcione-se a espécies que são mais ativas ao amanhecer ou à noite (corujas, morcegos, alguns insetos).  
- Evite **ciclos muito curtos** (arquivos com menos de 1 minuto), que aumentam a fragmentação do arquivo e o desgaste da memória flash.

:::dica
Ajuste o cronograma para coincidir com os momentos em que a espécie vocaliza – como o canto da manhã, picos noturnos ou ciclos de chuva. Isso pode aumentar o período de utilização do equipamento. Se a espécie-alvo é desconhecida ou se você está interessado em monitorar a biodiversidade de forma geral, geralmente é melhor estabelecer um cronograma de gravação que funcione 24 horas por dia (uma gravação a cada 10 minutos/24 horas).
