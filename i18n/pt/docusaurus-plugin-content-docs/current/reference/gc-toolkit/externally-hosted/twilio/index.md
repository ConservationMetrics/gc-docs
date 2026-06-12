---
tags: [opu, tsp]
---
# Twilio

[Twilio](https://www.twilio.com/) é uma plataforma de comunicação na nuvem que oferece ferramentas de comunicação programáveis para fazer e receber chamadas telefônicas, enviar e receber mensagens de texto, e realizar outras funções de comunicação, utilizando suas APIs de serviço web.

Principais características para o uso do Guardian Connector:

- **API do WhatsApp Business** – Envie mensagens pelo WhatsApp para alcançar usuários na plataforma de sua preferência.
- **Entrega confiável** – Infraestrutura de mensagens de nível empresarial
- **Mensagens programáveis** – Integração fácil com scripts e fluxos de trabalho em Python
- **Suporte de mídia** – Envie imagens, documentos e dados de localização juntamente com as mensagens de texto.
  
## Como a Twilio é utilizada no Guardian Connector

A Twilio permite notificações automatizadas do WhatsApp a partir de scripts e fluxos do Guardian Connector, como os disponíveis no [Hub de Scripts do GC](/reference/gc-toolkit/gc-scripts-hub/), por exemplo, para alertar os usuários quando novas detecções de alterações forem identificadas em sua região.

A mensagem a seguir é enviada sempre que novas alertas de detecção de mudanças são detectadas na área de um usuário:

> `${total_alerts} new change detection alert(s) have been published on your alerts dashboard for the date of ${month_year}. The following activities have been detected in your region: ${description_alerts}. Visit your alerts dashboard here: https://explorer.${community_alias}.guardianconnector.net/alerts/alerts. If you are using CoMapeo with an archive server enabled, you can receive the alerts by synchronizing.`

## Como começar

1. Crie uma organização Twilio em [twilio.com](https://www.twilio.com/)
2. Após fazer o login, crie uma conta gerenciada do Twilio ([Conta Gerenciada](https://admin.twilio.com/managed-accounts)). Copie os valores de ``Account SID`` e ``Auth Token``.
3. Configure um número de telefone ativo (\[Número de Telefone Ativo]) que será usado para enviar mensagens do WhatsApp.
4. Configure um serviço de mensagens (SMS) usando a plataforma Twilio e copie o código ``Service SID``.
5. Adicione seu número de telefone à lista de remetentes do serviço de mensagens.
6. Crie um modelo de conteúdo [Message Content Template](https://console.twilio.com/us1/develop/sms/content-template-builder) e copie o valor de ``Content SID`. (OBSERVAÇÃO: seu modelo precisa ser aprovado pela Twilio antes de poder ser usado, mas geralmente é um processo rápido e você não deve encontrar nenhum problema.)
7. Configure suas credenciais do Twilio como um recurso do [GC Scripts Hub](/reference/gc-toolkit/gc-scripts-hub/) para o script ou fluxo relevante. Observe que os destinatários dos números de telefone são adicionados no GC Scripts Hub como um array de strings, por exemplo, ``[whatsapp:+130512345678, whatsapp:+19874358172, …]``.

:::dica

Você pode criar vários modelos de conteúdo para mensagens em diferentes idiomas.

:::

Por favor, consulte a documentação do Twilio ([https://www.twilio.com/docs/](https://www.twilio.com/docs/)) para obter mais informações sobre como usar o Twilio com o WhatsApp.