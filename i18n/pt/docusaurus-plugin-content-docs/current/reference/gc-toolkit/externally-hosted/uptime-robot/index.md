---
tags: [opu, tsp]
---
# Uptime Robot

[Uptime Robot](https://uptimerobot.com/) é um serviço de monitoramento de sites que utilizamos para acompanhar a disponibilidade e o desempenho dos componentes de implantação do Guardian Connector. Embora não esteja integrado diretamente ao Guardian Connector, fornece capacidades essenciais de monitoramento para garantir implantações estáveis e confiáveis.

O Uptime Robot monitora cada serviço em um ambiente de conexão do Guardian Connector (por exemplo, GC Explorer, GC Scripts Hub, Superset, etc.) para garantir que permaneçam acessíveis.

No momento da redação, o Uptime Robot oferece uma versão gratuita generosa que inclui:

- **50 monitores** – Suficientes para monitorar várias implementações do Guardian Connector.
- **Intervalos de verificação de 5 minutos** – Frequência suficiente para identificar problemas rapidamente.
- **Alertas por e-mail/SMS** – Notificação imediata quando os serviços deixam de funcionar
- **Páginas de status públicas** - Compartilhe o estado do serviço com sua comunidade.

A CMI utiliza o Uptime Robot para monitorar as implementações do Guardian Connector para nossos parceiros, oferecendo suporte proativo quando surgem problemas.

## Como começar

1. Crie uma conta gratuita em [uptimerobot.com](https://uptimerobot.com/).
2. Adicione monitores HTTP(S) para cada URL de serviço na sua implantação.
3. Configure os contatos de notificação (e-mail, SMS, webhook, etc.)