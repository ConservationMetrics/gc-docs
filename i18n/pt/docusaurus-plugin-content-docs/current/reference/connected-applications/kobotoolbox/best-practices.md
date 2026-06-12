---
sidebar_position: 2
tags: [itu-3, idm, opu, tsp]
---

# Melhores Práticas e Dicas de Uso

Esta página aborda lições práticas aprendidas com o uso do KoboToolbox em situações reais, incluindo armadilhas comuns e suas soluções.

## Compatibilidade com Navegadores e Métodos de Coleta de Dados

### Evite o uso de formulários da web Enketo no Safari para iOS para envio de mídia.

**Problema**: O uso de formulários da web do Enketo no Safari em iPhones, como uma solução alternativa para a falta de um aplicativo nativo iOS do KoboToolbox, pode causar sérios problemas com o envio de arquivos.

**Melhores Práticas:** 
- Utilize dispositivos Android com o aplicativo oficial KoboCollect para pesquisas que exigem anexos de mídia (fotos, áudio e vídeo).
- Teste exaustivamente no seu ambiente de navegador-alvo antes de implantar formulários que exigem o envio de mídia.

### Problemas de envio duplicado no Enketo em alguns navegadores

**Problema:** O Enketo às vezes envia dados com sucesso para o KoboToolbox, mas não limpa os dados do cache do navegador local, o que leva a envios duplicados quando os usuários tentam enviar novamente.

**Solução:** 
1. Limpe o armazenamento do navegador manualmente usando as Ferramentas de Desenvolvedor:
   - Abra as ferramentas de desenvolvedor do navegador (atalho F12)
   - Navegue até a aba "**Aplicativo**
   - Selecione "**Limpar Dados**" para remover as submissões armazenadas em cache.
2. Treine os coletores de dados para reconhecer comprovantes de envio bem-sucedidos.
3. Implemente fluxos de trabalho de validação de dados para identificar e lidar com duplicatas durante o processamento de dados.

**Prevenção:** 
- Utilize o aplicativo oficial KoboCollect para Android sempre que possível, para um processamento de envio mais confiável.
- Limpe o cache do navegador regularmente durante períodos prolongados de coleta de dados.

## Limitações no tamanho do arquivo

### Limites para gravação de áudio de fundo (10 MB por arquivo)

**Limitação Crítica:** O KoboToolbox possui um limite de tamanho de arquivo de **10 MB por arquivo individual**, o que tem um impacto significativo em gravações de áudio de fundo para entrevistas que podem ultrapassar os 90 minutos, ou vídeos.

**Recomendações de Formato de Arquivo:**
- Utilize o formato ``.amr`` para a maior duração de gravação (aproximadamente 90 minutos, com limite de 10 MB).
- Evite formatos de maior qualidade para entrevistas longas, pois eles ocuparão mais espaço mais rapidamente.
- Planeje os segmentos da entrevista para garantir que dure menos de 2 horas.

**Considerações no planejamento:**
- Divida entrevistas longas em várias sessões mais curtas.
- Informe os entrevistadores sobre o limite de tempo antes de iniciar a entrevista.
- Tenha um método de gravação de backup para entrevistas que podem durar mais de 90 minutos.
- Você também pode utilizar várias perguntas de áudio para entrevistas mais longas.

:::Nota
Esta limitação de 10 MB por arquivo não está claramente documentada na [documentação oficial do áudio de fundo do KoboToolbox](https://support.kobotoolbox.org/recording-interviews.html).

### Limites gerais de tamanho para o envio

**Limite:** Cada envio de pesquisa possui um limite total de tamanho de **100 MB** para todos os arquivos anexados (fonte: comunicação com o suporte da KoboToolbox).

**Melhores Práticas:**
- Calcule o tamanho total dos arquivos antes de enviar, especialmente para pesquisas que incluem múltiplos anexos de mídia.
- Comprima imagens e vídeos sempre que possível, mantendo a qualidade aceitável para o seu caso de uso.
- Considere dividir grandes conjuntos de dados em várias submissões relacionadas, se necessário.
- Monitore o uso do espaço de armazenamento regularmente, especialmente para projetos com grandes quantidades de mídia.

## Criação e Implantação de Formulários

### Planejamento da Estrutura do Formulário

Consulte [Melhores Práticas no Projeto de Questionários](/referência/aplicações-conectadas/kobotoolbox/projeto-de-questionarios.md) para obter mais informações.

### Testes de fluxos de trabalho

**Antes da Implantação:**
- Formulários de teste com arquivos de mídia reais no ambiente de destino desejado.
- Verifique a funcionalidade de envio de arquivos em diferentes dispositivos e navegadores.
- Teste a funcionalidade e a sincronização offline, caso você esteja trabalhando em áreas com conectividade limitada.
- Verifique se todos os arquivos de mídia permanecem dentro das restrições de tamanho definidas.

### Garantia da Qualidade dos Dados

**Durante a coleta:**
- Implemente procedimentos regulares de backup de dados.
- Treine os colecionadores para identificar e relatar imediatamente erros de submissão.
- Defina protocolos para lidar com submissões duplicadas
- Acompanhe as taxas de sucesso na submissão e a conclusão do envio de arquivos.

## Planejamento de Armazenamento e Infraestrutura

### Gestão de Contas e Níveis

**Considerações sobre o plano gratuito:**
- Limite de 5.000 submissões por mês
- Limite de armazenamento total de 1 GB
- Monitore o uso regularmente para evitar interrupções no serviço.

**Planejamento de Níveis Pagos**:
- Considere os tamanhos dos arquivos de mídia ao estimar a necessidade de armazenamento.
- Considere as implicações financeiras do uso de mídias adicionais (como gravações de áudio de fundo ou upload de imagens/vídeos) em projetos de grande escala.
- Planeje os custos adicionais de armazenamento desde o início do orçamento do projeto.
- Na data desta publicação, o plano pago mais barato é o plano Profissional, com um custo de $159 por mês, que oferece armazenamento ilimitado de arquivos. Consulte [Preços do KoboToolbox](https://www.kobotoolbox.org/pricing) para obter informações atualizadas.

## Obter Ajuda e Suporte

### Canais de suporte KoboToolbox

**E-mail de suporte oficial**: Para dúvidas ou problemas, você pode entrar em contato com o endereço ``support@kobotoolbox.org``.

**Fórum da Comunidade:** O [Fórum da Comunidade KoboToolbox](https://community.kobotoolbox.org/) é muito ativo e você pode obter uma resposta mais rapidamente do que por meio de um contato direto por e-mail. O fórum é particularmente útil para:
- Obter ajuda de membros experientes da comunidade
- Encontrar soluções para problemas comuns
- Compartilhar as melhores práticas com outros usuários
- Manter-se atualizado sobre novos recursos e lançamentos

:::dica
Primeiramente, tente pesquisar no fórum da comunidade, pois muitas questões e problemas comuns já foram abordados. Se não encontrar uma resposta, poste sua pergunta lá antes de entrar em contato diretamente com o suporte.

## Recursos relacionados

- [Dicas e Melhores Práticas para o Projeto de Formulários ODK](https://docs.getodk.org/form-best-practices/)