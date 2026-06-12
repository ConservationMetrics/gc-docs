---
sidebar_position: 2
tags: [itu-1, itu-2, itu-3, idm, opu, tsp]
---

# KoboToolbox

[KoboToolbox](https://www.kobotoolbox.org/) é uma suíte gratuita e de código aberto de ferramentas para coleta de dados móveis. Permite que os usuários criem formulários, coletem dados no local usando dispositivos móveis e analisem os dados coletados através de interfaces baseadas na web. Originalmente desenvolvida para contextos humanitários, a KoboToolbox se destaca na criação de questionários, formulários de pesquisa e formulários de coleta de dados que funcionam de forma confiável em ambientes desafiadores com conectividade limitada.

## Por que o KoboToolbox é integrado com o Guardian Connector

- **Coleta de dados no local:** Permite que comunidades e pesquisadores coletem dados ambientais diretamente no campo, utilizando smartphones ou tablets.
- **Capacidade Offline:** Funciona sem conexão com a internet, o que é essencial para áreas remotas de conservação.
- **Design de Formulário Flexível:** Suporta lógica complexa de pesquisas, anexos de mídia e coordenadas GPS para dados baseados em localização.
- **Empoderamento da Comunidade**: Permite que as comunidades locais coletem seus próprios dados sobre questões ambientais e direitos de propriedade.
- **Dados Padronizados**: Garante formatos de coleta de dados consistentes em diferentes projetos e regiões.
- **Monitoramento em Tempo Real:** Permite a coleta rápida de dados para monitoramento ambiental com tempo crítico.
- **Suporte Multilíngue:** Permite a coleta de dados em idiomas locais, o que é importante para a conservação baseada na comunidade.
- **Plano Gratuito Generoso:** Permite o envio de até 5.000 formulários por mês e até 1 GB de armazenamento para o plano "Community".

## Documentation

Para obter informações detalhadas sobre como usar o KoboToolbox, visite a documentação oficial do [KoboToolbox](https://support.kobotoolbox.org/).

Também oferecemos um currículo para um programa de aprendizado completo de 4 semanas, com ritmo próprio, que o leva do básico do KoboToolbox a técnicas avançadas de gerenciamento de dados: veja [nosso currículo do KoboToolbox](/guias/currículo-gerenciamento-de-dados-com-kobotoolbox/).

### KoboToolbox ou ODK?

Tanto o KoboToolbox quanto o ODK são excelentes ferramentas para coleta de dados de pesquisas. Ambos são compatíveis com modelos XLSForm, e o aplicativo Kobo Collect é, na verdade, uma derivação do ODK Collect. No entanto, os servidores KoboToolbox e ODK possuem conjuntos de recursos diferentes. Por exemplo, o KoboToolbox possui um construtor de formulários e visualização básica de dados, enquanto o ODK Central oferece um recurso para coleta de dados ao longo do tempo chamado [Entities](https://docs.getodk.org/entities-intro/), que pode ser útil para monitorar um evento ao longo do tempo.

O Guardian Connector é integrado tanto com o KoboToolbox quanto com o ODK, mas geralmente recomendamos o KoboToolbox devido aos seus recursos de criação de formulários e visualização de dados, além do fato de que ele oferece uma versão gratuita relativamente generosa, onde os usuários podem atender às suas necessidades de coleta de dados sem precisar pagar por uma assinatura ou configurar seu próprio servidor, como é necessário para o ODK.

## Melhores Práticas e Solução de Problemas

_Este não é o documento oficial da KoboToolbox, mas sim um guia criado pela CMI com base em nossa experiência para ajudá-lo a aproveitar ao máximo a KoboToolbox. Se você tiver alguma sugestão ou correção, sinta-se à vontade para enviar uma solicitação de pull request ou entrar em contato conosco._

* Para melhores práticas, lições aprendidas e dicas de uso, consulte o documento [Melhores Práticas e Dicas de Uso da KoboToolbox](./best-practices.md).
* Para problemas e soluções comuns, consulte o guia de solução de problemas do KoboToolbox (disponível em `[KoboToolbox Troubleshooting Guide](./troubleshooting.md)`).


## Templates

* Para modelos de formulários em formato XLS prontos para uso, projetados para comunidades indígenas, consulte a seção [Modelos XLS](./templates.md).

## Outras fontes de informação

- [MapPacker](https://github.com/conservationmetrics/mappacker) – Gere mapas offline no formato ``mbtiles`` para uso com o KoboToolbox (OBSERVAÇÃO: A CMI mantém o MapPacker e disponibiliza um servidor para seus usuários).