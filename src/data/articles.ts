import { CategorySlug } from './categories'

export interface ArticleTOCItem {
  id: string
  title: string
}

export interface ArticleSource {
  title: string
  institution: string
  year?: string
  url?: string
}

export interface ArticleFAQ {
  question: string
  answer: string
}

export interface EditorialArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  summaryBox: string[]
  toc: ArticleTOCItem[]
  content: string
  category: string
  categorySlug: CategorySlug
  image: string | null
  author: string
  authorCrp: string
  reviewedBy: string
  reviewerCrp: string
  readTime: string
  published: boolean
  featured: boolean
  tags: string
  metaTitle: string
  metaDescription: string
  viewCount: number
  createdAt: string
  updatedAt: string
  sources: ArticleSource[]
  affiliateIds: string[]
  faqs: ArticleFAQ[]
  relatedMaterialLink?: {
    title: string
    href: string
  }
}

export const PROFESSIONAL_AUTHOR = 'Psicóloga Maria do Socorro Araujo Teixeira'
export const PROFESSIONAL_CRP = 'CRP 24/02327'

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'art-1',
    slug: 'como-organizar-rotina-visual-crianca-tdah',
    title: 'Como organizar uma rotina visual para uma criança com TDAH',
    excerpt:
      'Entenda por que crianças com TDAH têm dificuldade com instruções verbais longas e aprenda passo a passo como montar um quadro de rotina visual funcional em casa.',
    summaryBox: [
      'Crianças com TDAH apresentam sobrecarga na memória operacional: instruções faladas ("vá tomar banho, escove os dentes e arrume a mochila") se perdem no meio do caminho.',
      'A rotina visual externaliza a informação no ambiente, diminuindo a necessidade de os pais repetirem a mesma ordem dezenas de vezes.',
      'Um bom quadro visual deve ser dividido por blocos do dia (Manhã, Tarde e Noite), conter no máximo 4 a 5 passos por bloco e ficar na altura dos olhos da criança.',
    ],
    toc: [
      { id: 'por-que-funciona', title: 'Por que a rotina visual funciona no TDAH?' },
      { id: 'erros-comuns', title: 'Erros comuns ao tentar criar uma rotina em casa' },
      { id: 'passo-a-passo', title: 'Passo a passo para montar o quadro visual' },
      { id: 'exemplo-pratico', title: 'Exemplo prático: manhã antes da escola vs. noite' },
      { id: 'tabela-comparativa', title: 'Tabela comparativa: Ordem Verbal vs. Apoio Visual' },
    ],
    content: `
      <h2 id="por-que-funciona">Por que a rotina visual funciona no TDAH?</h2>
      <p>No Transtorno do Déficit de Atenção com Hiperatividade (TDAH), uma das funções executivas mais exigidas é a chamada <strong>memória operacional (ou memória de trabalho)</strong>. Ela funciona como uma pequena "mesa mental" onde seguramos uma informação enquanto executamos uma tarefa.</p>
      <p>Quando um adulto diz para uma criança de 8 anos: <em>"Tire o uniforme, coloque no cesto, tome banho e desça para jantar"</em>, a criança pode ir até o quarto com a intenção genuína de obedecer. Porém, ao ver um brinquedo no chão ou ouvir um barulho na janela, aquela instrução verbal desaparece da memória operacional. O resultado costuma ser frustração para os pais — que sentem que o filho "não escuta" — e desgaste para a criança, que passa a ouvir broncas constantes.</p>
      <p>A rotina visual resolve esse problema ao <strong>externalizar a memória</strong>: em vez de depender apenas do lembrete falado, a sequência fica visível no ambiente, funcionando como um mapa concreto para onde a criança pode olhar sempre que se distrair.</p>

      <h2 id="erros-comuns">Erros comuns ao tentar criar uma rotina em casa</h2>
      <p>Muitas famílias relatam que já tentaram usar quadros na parede e "desistiram depois de uma semana". Na prática clínica, isso costuma acontecer por três motivos principais:</p>
      <ul>
        <li><strong>Excesso de tarefas no mesmo quadro:</strong> colocar 15 regras detalhadas gera poluição visual e desmotivação imediata.</li>
        <li><strong>Foco em punição ou perda de pontos:</strong> transformar o quadro em um tribunal de "carinhas tristes" aumenta a ansiedade e a oposição da criança.</li>
        <li><strong>Falta de construção conjunta:</strong> quando a criança participa da escolha das figuras e da ordem das tarefas, o senso de autonomia aumenta consideravelmente.</li>
      </ul>

      <h2 id="passo-a-passo">Passo a passo para montar o quadro visual</h2>
      <ol>
        <li><strong>Escolha apenas um período crítico para começar:</strong> não tente mudar o dia inteiro de uma vez. Comece pela manhã (saída para a escola) ou pelo início da noite.</li>
        <li><strong>Use de 3 a 5 cartões ilustrados por bloco:</strong> combine uma imagem simples com uma frase curta no afirmativo (ex.: "Vestir o uniforme", "Escovar os dentes", "Pegar a mochila").</li>
        <li><strong>Posicione no local onde a ação acontece:</strong> o checklist da manhã funciona melhor na porta do quarto ou no corredor, na altura dos olhos da criança.</li>
        <li><strong>Crie um marcador de conclusão concreto:</strong> permitir que a criança vire o cartão, mova um ímã para a coluna "Feito!" ou marque um check traz satisfação imediata ao cérebro.</li>
        <li><strong>Substitua a cobrança pela pergunta guia:</strong> em vez de repetir a ordem, pergunte com calma: <em>"Qual é o próximo passo lá no seu quadro?"</em>.</li>
      </ol>

      <h2 id="exemplo-pratico">Exemplo prático: manhã antes da escola vs. noite</h2>
      <p>Imagine o caso de Lucas (7 anos), que todos os dias se atrasava para a escola porque parava para brincar com o cachorro enquanto calçava o tênis. A família substituiu as ordens faladas por uma tira visual colada próxima à porta com apenas 4 cartões:</p>
      <ul>
        <li>1. Lavar o rosto e escovar os dentes</li>
        <li>2. Vestir uniforme e calçar o tênis</li>
        <li>3. Tomar café da manhã</li>
        <li>4. Conferir lancheira e mochila na porta</li>
      </ul>
      <p>Nos primeiros dez dias, os pais acompanharam Lucas até o quadro. Sempre que ele se distraía, o pai apenas apontava o cartão número 2 com bom humor. Em duas semanas, o conflito matinal reduziu drasticamente.</p>

      <h2 id="tabela-comparativa">Tabela comparativa: Ordem Verbal vs. Apoio Visual</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-primary-50 text-gray-800">
            <tr>
              <th class="p-3 text-left border-b">Situação Cotidiana</th>
              <th class="p-3 text-left border-b">Apenas Ordem Verbal</th>
              <th class="p-3 text-left border-b">Com Rotina Visual Estruturada</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-medium">Hora de sair para a escola</td>
              <td class="p-3">Pais repetem 6 vezes; criança esquece metade dos itens.</td>
              <td class="p-3">Criança confere os 4 cartões visuais e marca o que já concluiu.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="p-3 font-medium">Transição do brincar para o banho</td>
              <td class="p-3">Interrupção brusca gera choro e resistência imediata.</td>
              <td class="p-3">Timer visual avisa 10 minutos antes e o quadro mostra o que vem depois do banho.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Clima emocional familiar</td>
              <td class="p-3">Sensação de cobrança constante e desgaste na relação.</td>
              <td class="p-3">Maior previsibilidade, autonomia gradual e elogios por etapas cumpridas.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    category: 'TDAH',
    categorySlug: 'tdah',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '7 min',
    published: true,
    featured: true,
    tags: 'TDAH, rotina visual, infância, funções executivas, orientação parental',
    metaTitle: 'Como Organizar uma Rotina Visual para Criança com TDAH | Psicologia Direta',
    metaDescription:
      'Aprenda passo a passo como montar um quadro de rotina visual para crianças com TDAH, reduzindo esquecimentos e conflitos diários em casa.',
    viewCount: 142,
    createdAt: '2026-08-10T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Manual Diagnóstico e Estatístico de Transtornos Mentais (DSM-5-TR)',
        institution: 'American Psychiatric Association (APA)',
        year: '2023',
      },
      {
        title: 'Transtorno do Déficit de Atenção com Hiperatividade: Orientações para a Família',
        institution: 'Sociedade Brasileira de Pediatria (SBP)',
        year: '2022',
      },
    ],
    affiliateIds: ['quadro-magnetico-rotina-infantil', 'timer-visual-silencioso'],
    faqs: [
      {
        question: 'A partir de que idade posso usar um quadro de rotina visual?',
        answer:
          'A partir dos 3 anos já é possível utilizar figuras simples ou fotos da própria criança realizando a atividade. Entre 6 e 12 anos, a combinação de ícones com palavras curtas funciona muito bem.',
      },
      {
        question: 'E se a criança perder o interesse pelo quadro depois de alguns dias?',
        answer:
          'Isso é comum no TDAH devido à busca por novidade. A dica é manter o quadro enxuto, envolver a criança na revisão semanal dos cartões e acompanhar o uso nos primeiros 21 dias sem cobrar perfeição.',
      },
    ],
    relatedMaterialLink: {
      title: 'Usar Ferramenta Gratuita: Quadro Semanal de Rotina Visual Interativo',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-2',
    slug: 'o-que-levar-primeira-consulta-psicologica',
    title: 'O que levar para uma primeira consulta psicológica (infantil ou adulto)',
    excerpt:
      'Vai passar pela primeira sessão de psicoterapia ou levar seu filho? Veja o checklist prático do que observar, quais documentos separar e como funciona o primeiro encontro.',
    summaryBox: [
      'A primeira consulta psicológica é um momento de acolhimento e escuta inicial — você não precisa ter um "discurso pronto" nem sentir receio de julgamentos.',
      'No atendimento infantil, a primeira sessão costuma ser realizada exclusivamente com os pais ou responsáveis para compreender o histórico de desenvolvimento com tranquilidade.',
      'Levar anotações sobre a rotina, relatórios escolares e exames médicos recentes ajuda a contextualizar a queixa com mais precisão.',
    ],
    toc: [
      { id: 'como-funciona-primeira-sessao', title: 'Como funciona a primeira sessão na prática?' },
      { id: 'checklist-preparacao', title: 'Checklist prático: o que anotar e separar antes da consulta' },
      { id: 'primeira-consulta-infantil', title: 'Particularidades da primeira consulta infantil (anamnese com os pais)' },
      { id: 'atendimento-online-preparacao', title: 'Cuidados extras para a primeira consulta online' },
    ],
    content: `
      <h2 id="como-funciona-primeira-sessao">Como funciona a primeira sessão na prática?</h2>
      <p>Dar o primeiro passo para iniciar um acompanhamento psicológico costuma despertar dúvidas naturais: <em>"Por onde eu começo a falar?", "Será que meu problema é grave o suficiente?", "O que a psicóloga vai perguntar?"</em>.</p>
      <p>A primeira sessão (frequentemente chamada de entrevista inicial ou anamnese) tem como objetivo principal <strong>conhecer sua história, compreender o que motivou a busca naquele momento e alinhar expectativas</strong> sobre como a psicoterapia funciona. Não se trata de uma prova nem de um interrogatório: a profissional conduzirá a conversa com perguntas abertas e acolhedoras, respeitando seu ritmo e o sigilo profissional previsto pelo Código de Ética do Psicólogo (CFP).</p>

      <h2 id="checklist-preparacao">Checklist prático: o que anotar e separar antes da consulta</h2>
      <p>Embora nenhum documento seja obrigatório para que você seja ouvido, preparar alguns pontos nos dias anteriores evita aquele "branco" comum na hora da sessão:</p>
      <ul>
        <li><strong>Motivo principal da busca:</strong> o que mudou recentemente na sua rotina (ou na rotina da criança) que fez você procurar ajuda agora?</li>
        <li><strong>Exemplos concretos da semana:</strong> em vez de anotar apenas "muita ansiedade" ou "muita birra", anote 2 ou 3 situações reais (ex.: "na terça-feira antes da reunião tive falta de ar" ou "toda noite na hora de desligar o tablet há choro de 40 minutos").</li>
        <li><strong>Histórico de saúde e medicações:</strong> nome e dosagem de medicamentos de uso contínuo e exames recentes relevantes (como avaliação auditiva, visual ou neurológica).</li>
        <li><strong>Relatórios escolares ou de outros profissionais (para crianças):</strong> pareceres pedagógicos da escola, relatórios de fonoaudiologia, terapia ocupacional ou psicopedagogia.</li>
        <li><strong>Suas próprias dúvidas:</strong> anote perguntas sobre periodicidade das sessões, duração, sigilo e abordagem utilizada.</li>
      </ul>

      <h2 id="primeira-consulta-infantil">Particularidades da primeira consulta infantil (anamnese com os pais)</h2>
      <p>Quando o atendimento é voltado para uma criança, é fundamental que a primeira conversa ocorra <strong>apenas com os pais ou responsáveis legais</strong>, sem a presença da criança na sala ou na frente da câmera.</p>
      <p>Por que fazemos essa separação? Porque os pais precisam de liberdade para relatar desafios da gestação, do desenvolvimento, conflitos familiares e queixas escolares sem que a criança ouça uma lista de "defeitos" ou preocupações sobre si mesma. Ouvir os adultos falando sobre suas dificuldades pode gerar vergonha ou ansiedade desnecessária no pequeno.</p>

      <h2 id="atendimento-online-preparacao">Cuidados extras para a primeira consulta online</h2>
      <p>Se a sua sessão será por videochamada, pequenos ajustes garantem conforto e privacidade:</p>
      <ul>
        <li>Escolha um cômodo fechado onde você possa falar com privacidade sem receio de ser ouvido por terceiros.</li>
        <li>Utilize fones de ouvido — além de melhorar a qualidade do áudio, aumenta a sensação de segurança e sigilo.</li>
        <li>Deixe um copo de água, papel e caneta por perto para anotar orientações iniciais.</li>
      </ul>
    `,
    category: 'Saúde Mental',
    categorySlug: 'saude-mental',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '6 min',
    published: true,
    featured: true,
    tags: 'primeira consulta, psicoterapia, anamnese, psicologia online, orientação aos pais',
    metaTitle: 'O Que Levar para a Primeira Consulta Psicológica | Checklist Prático',
    metaDescription:
      'Saiba como se preparar para a primeira sessão de psicologia (adulto ou infantil), quais documentos separar e o que esperar do atendimento.',
    viewCount: 118,
    createdAt: '2026-08-14T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Código de Ética Profissional do Psicólogo',
        institution: 'Conselho Federal de Psicologia (CFP)',
        year: '2005',
      },
      {
        title: 'Resolução CFP nº 11/2018 — Prestação de serviços psicológicos realizados por meios de tecnologia da informação e da comunicação',
        institution: 'Conselho Federal de Psicologia (CFP)',
        year: '2018',
      },
    ],
    affiliateIds: ['livro-cerebro-crianca-siegel'],
    faqs: [
      {
        question: 'Na primeira sessão já recebo um diagnóstico fechado?',
        answer:
          'Não. Um diagnóstico psicológico ético exige escuta aprofundada, observação ao longo do tempo e, muitas vezes, articulação multiprofissional. A primeira sessão entrega acolhimento, compreensão inicial do caso e um plano claro de próximos passos.',
      },
      {
        question: 'Devo enviar laudos e relatos longos pelo WhatsApp antes da consulta?',
        answer:
          'Não recomendamos o envio de dados clínicos sensíveis por mensagens abertas antes da sessão. Esses documentos e relatos devem ser compartilhados no ambiente seguro do atendimento.',
      },
    ],
    relatedMaterialLink: {
      title: 'Acessar Ferramenta: Checklist Interativo para Preparar a Primeira Consulta',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-3',
    slug: 'como-conversar-escola-dificuldades-atencao',
    title: 'Como conversar com a escola sobre dificuldades de atenção do seu filho',
    excerpt:
      'Aprenda a transformar a reunião escolar em uma parceria produtiva: que perguntas fazer à coordenação, como alinhar estratégias e como evitar posturas defensivas.',
    summaryBox: [
      'Família e escola observam a criança em ambientes com exigências muito diferentes: o que aparece em uma sala com 25 alunos pode não aparecer no um a um em casa.',
      'Reuniões produtivas substituem acusações mútuas por perguntas baseadas em observação concreta (horários, tipos de tarefa, posição na sala).',
      'Pequenos ajustes pedagógicos — como dividir enunciados e sentar próximo ao professor — beneficiam a criança mesmo antes de qualquer laudo.',
    ],
    toc: [
      { id: 'por-que-dialogo-dificil', title: 'Por que a conversa entre família e escola às vezes trava?' },
      { id: 'o-que-perguntar', title: 'Roteiro de perguntas práticas para levar à reunião' },
      { id: 'adaptacoes-possiveis', title: 'Exemplos de ajustes simples em sala de aula' },
      { id: 'combinados-acompanhamento', title: 'Como manter o acompanhamento sem sobrecarregar a criança' },
    ],
    content: `
      <h2 id="por-que-dialogo-dificil">Por que a conversa entre família e escola às vezes trava?</h2>
      <p>Receber um recado na agenda dizendo que a criança "não para quieta", "vive no mundo da lua" ou "não copia da lousa" costuma gerar angústia imediata nos pais. Por outro lado, professores frequentemente se sentem solitários ao tentar ajudar um aluno desatento em meio a uma turma numerosa.</p>
      <p>Quando o diálogo começa na defensiva (<em>"Em casa ele presta atenção em tudo, o problema é a aula!"</em> ou <em>"A família não dá limites!"</em>), quem perde é a criança. O segredo para destravar essa conversa é entender que <strong>a sala de aula exige atenção sustentada coletiva, tolerância a ruídos e autonomia executiva</strong> muito maiores do que o ambiente doméstico.</p>

      <h2 id="o-que-perguntar">Roteiro de perguntas práticas para levar à reunião</h2>
      <p>Em vez de pedir apenas um relato genérico sobre como seu filho está indo, utilize perguntas específicas que ajudam tanto a escola quanto um futuro profissional de saúde a entenderem o padrão de funcionamento da criança:</p>
      <ul>
        <li><strong>Sobre o momento do dia:</strong> "A desatenção acontece logo no início da manhã ou se intensifica após o recreio e nas últimas aulas?"</li>
        <li><strong>Sobre o formato da atividade:</strong> "Como ele reage em atividades orais e debates em comparação com momentos de cópia longa ou leitura silenciosa?"</li>
        <li><strong>Sobre o ambiente físico:</strong> "Onde ele está sentado atualmente? Perto da porta, da janela, no fundo ou próximo à mesa do professor?"</li>
        <li><strong>Sobre a socialização:</strong> "No recreio e nos trabalhos em grupo, como é a relação dele com os colegas? Ele compreende as regras das brincadeiras?"</li>
        <li><strong>Sobre o que já funcionou:</strong> "Quando ele se dispersa, qual abordagem do professor costuma ajudá-lo a voltar para a atividade com mais facilidade?"</li>
      </ul>

      <h2 id="adaptacoes-possiveis">Exemplos de ajustes simples em sala de aula</h2>
      <p>Você não precisa esperar meses por um laudo fechado para propor estratégias colaborativas à coordenação pedagógica. Algumas medidas de manejo ambiental simples incluem:</p>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-primary-50 text-gray-800">
            <tr>
              <th class="p-3 text-left border-b">Desafio Observado na Escola</th>
              <th class="p-3 text-left border-b">Ajuste Pedagógico Colaborativo</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-medium">Perde-se ao copiar textos longos da lousa</td>
              <td class="p-3">Priorizar o registro das respostas e do raciocínio, oferecendo apoio impresso para textos extensos.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="p-3 font-medium">Esquece instruções com várias etapas</td>
              <td class="p-3">Fazer contato visual próximo à carteira e validar se a criança compreendeu a primeira etapa antes de passar a segunda.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Inquietação motora após 30 minutos sentado</td>
              <td class="p-3">Permitir pausas funcionais estruturadas (ex.: apagar o quadro, entregar uma folha na coordenação, beber água).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="combinados-acompanhamento">Como manter o acompanhamento sem sobrecarregar a criança</h2>
      <p>Ao final da reunião, combine com a escola um canal único e periódico de retorno (por exemplo, um breve alinhamento quinzenal ou mensal), evitando que todos os dias a mochila da criança volte carregada de bilhetes negativos. Quando a criança percebe que pais e professores trabalham no mesmo time para ajudá-la, a ansiedade escolar diminui.</p>
    `,
    category: 'Orientação Parental',
    categorySlug: 'orientacao-parental',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '7 min',
    published: true,
    featured: true,
    tags: 'escola, dificuldades de atenção, TDAH, orientação parental, reunião escolar',
    metaTitle: 'Como Conversar com a Escola sobre Dificuldades de Atenção | Guia para Pais',
    metaDescription:
      'Veja que perguntas fazer na reunião escolar, como alinhar adaptações simples em sala de aula e construir parceria entre família e escola.',
    viewCount: 95,
    createdAt: '2026-08-18T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Recomendações para Inclusão e Acompanhamento Escolar no Neurodesenvolvimento',
        institution: 'Ministério da Educação (MEC) / Diretrizes de Educação Especial',
        year: '2022',
      },
      {
        title: 'Referências Técnicas para Atuação de Psicólogas(os) na Educação Básica',
        institution: 'Conselho Federal de Psicologia (CFP)',
        year: '2019',
      },
    ],
    affiliateIds: ['timer-visual-silencioso', 'regua-leitura-guiada-dislexia'],
    faqs: [
      {
        question: 'A escola pode exigir um laudo médico para sentar meu filho na frente ou dar apoio?',
        answer:
          'Boas práticas pedagógicas de acolhimento e manejo de sala de aula fazem parte do projeto pedagógico de qualquer escola e podem ser adotadas independentemente de laudo médico formal.',
      },
      {
        question: 'A psicóloga pode conversar diretamente com a escola do meu filho?',
        answer:
          'Sim. Mediante autorização expressa dos responsáveis, a articulação entre o profissional de psicologia e a equipe pedagógica é uma das ferramentas mais ricas para alinhar estratégias.',
      },
    ],
    relatedMaterialLink: {
      title: 'Baixar/Imprimir: Lista de Perguntas para Reunião Escolar',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-4',
    slug: 'diferenca-distracao-comum-sinais-investigacao',
    title: 'Diferença entre distração comum e sinais que merecem investigação',
    excerpt:
      'Todo mundo se distrai quando está cansado ou entediado. Mas quando o esquecimento e a desatenção deixam de ser passageiros e justificam uma avaliação clínica?',
    summaryBox: [
      'A distração comum é situacional: surge em períodos de privação de sono, estresse, excesso de telas ou falta de interesse pontual, mas não compromete globalmente a vida da pessoa.',
      'Os sinais que merecem investigação clínica caracterizam-se por persistência (mais de 6 meses), presença em múltiplos ambientes (casa, escola/trabalho) e prejuízo funcional real.',
      'Apenas uma avaliação cuidadosa pode diferenciar TDAH de ansiedade, dificuldades de aprendizagem, alterações do sono ou sobrecarga ambiental.',
    ],
    toc: [
      { id: 'distracao-faz-parte', title: 'Quando se distrair é perfeitamente esperado?' },
      { id: 'criterios-alerta', title: 'Os 3 critérios que diferenciam o sinal clínico: frequência, contexto e impacto' },
      { id: 'quadro-comparativo', title: 'Tabela comparativa: Distração Situacional vs. Sinal de Alerta' },
      { id: 'o-que-Mais-pode-causar', title: 'Nem toda desatenção é TDAH: outros fatores que confundem' },
    ],
    content: `
      <h2 id="distracao-faz-parte">Quando se distrair é perfeitamente esperado?</h2>
      <p>Vivemos em um ambiente saturado de notificações, vídeos curtos e cobranças simultâneas. Além disso, o cérebro infantil ainda está em pleno amadurecimento do córtex pré-frontal — área responsável pelo controle inibitório e pela sustentação do foco.</p>
      <p>Por isso, esquecer o guarda-chuva em uma semana corrida, perder o fio da meada quando se dormiu mal ou uma criança de 5 anos não conseguir ficar 40 minutos parada ouvindo uma explicação abstrata <strong>não são sinais automáticos de transtorno</strong>. São respostas humanas esperadas ao cansaço, ao ambiente ou à faixa etária.</p>

      <h2 id="criterios-alerta">Os 3 critérios que diferenciam o sinal clínico: frequência, contexto e impacto</h2>
      <p>Na Psicologia e nos manuais diagnósticos internacionais (como o DSM-5-TR e a CID-11), nunca olhamos para um sintoma isolado. Observamos três pilares fundamentais:</p>
      <ol>
        <li><strong>Persistência no tempo:</strong> os sinais não apareceram apenas na semana de provas ou após uma mudança de casa; eles acompanham a criança ou o adulto de forma consistente por pelo menos 6 meses.</li>
        <li><strong>Presença em dois ou mais contextos:</strong> a dificuldade se manifesta tanto na escola quanto em casa, ou tanto no trabalho quanto nas tarefas domésticas e relacionamentos.</li>
        <li><strong>Prejuízo funcional e sofrimento:</strong> há impacto claro na aprendizagem, na autoestima ("eu tento, mas sempre erro por descuido"), nas relações sociais ou na segurança diária.</li>
      </ol>

      <h2 id="quadro-comparativo">Tabela comparativa: Distração Situacional vs. Sinal de Alerta</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-primary-50 text-gray-800">
            <tr>
              <th class="p-3 text-left border-b">Aspecto Observado</th>
              <th class="p-3 text-left border-b">Distração Comum / Situacional</th>
              <th class="p-3 text-left border-b">Sinal que Merece Investigação</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-medium">Duração</td>
              <td class="p-3">Oscila conforme o cansaço, férias ou eventos específicos.</td>
              <td class="p-3">Contínua por mais de 6 meses, desde a infância.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="p-3 font-medium">Organização de materiais</td>
              <td class="p-3">Esquece algo eventualmente quando sai com pressa.</td>
              <td class="p-3">Perde agasalhos, materiais, chaves ou prazos quase diariamente, mesmo tentando se policiar.</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 font-medium">Escuta em conversas</td>
              <td class="p-3">Desvia a atenção se estiver mexendo no celular ao mesmo tempo.</td>
              <td class="p-3">Parece não ouvir mesmo quando falam diretamente com a pessoa em ambiente calmo.</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="p-3 font-medium">Impacto emocional</td>
              <td class="p-3">Resolve-se ao organizar a agenda ou descansar no fim de semana.</td>
              <td class="p-3">Gera sensação crônica de incapacidade, exaustão mental e conflitos recorrentes.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="o-que-Mais-pode-causar">Nem toda desatenção é TDAH: outros fatores que confundem</h2>
      <p>Um dos principais motivos para buscar uma avaliação profissional qualificada — e evitar autodiagnósticos rápidos na internet — é que a falta de concentração pode ser o "sintoma visível" de várias outras condições:</p>
      <ul>
        <li><strong>Ansiedade:</strong> uma mente ocupada com preocupações constantes não tem espaço livre na memória de trabalho para prestar atenção na aula ou na reunião.</li>
        <li><strong>Privação ou má qualidade do sono:</strong> respiração bucal, apneia ou uso noturno de telas causam sintomas idênticos à desatenção e irritabilidade no dia seguinte.</li>
        <li><strong>Dificuldades específicas de aprendizagem (como dislexia):</strong> a criança "desliga" na aula de leitura porque decodificar o texto exige um esforço exaustivo.</li>
      </ul>
    `,
    category: 'TDAH',
    categorySlug: 'tdah',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '8 min',
    published: true,
    featured: true,
    tags: 'atenção, TDAH, diagnóstico diferencial, avaliação psicológica, infância e adultos',
    metaTitle: 'Diferença entre Distração Comum e Sinais que Merecem Investigação',
    metaDescription:
      'Como diferenciar o esquecimento normal do dia a dia dos sinais clínicos de desatenção que justificam procurar avaliação profissional.',
    viewCount: 134,
    createdAt: '2026-08-22T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'DSM-5-TR: Manual Diagnóstico e Estatístico de Transtornos Mentais (5ª Ed. Texto Revisado)',
        institution: 'American Psychiatric Association',
        year: '2023',
      },
      {
        title: 'Classificação Internacional de Doenças — CID-11 (Transtornos do Neurodesenvolvimento)',
        institution: 'Organização Mundial da Saúde (OMS)',
        year: '2022',
      },
    ],
    affiliateIds: ['livro-vencendo-tdah-adulto', 'timer-visual-silencioso'],
    faqs: [
      {
        question: 'Um teste online gratuito pode confirmar se tenho TDAH?',
        answer:
          'Não. Questionários online servem apenas como triagem inicial de sintomas, mas jamais substituem a avaliação clínica, que investiga história do desenvolvimento, contexto familiar e diagnóstico diferencial.',
      },
      {
        question: 'Quando devo procurar ajuda para investigar a desatenção?',
        answer:
          'Sempre que você perceber que os esquecimentos, a desorganização ou a dificuldade de foco estão causando sofrimento emocional, queda no rendimento escolar/profissional ou desgaste constante nas relações.',
      },
    ],
    relatedMaterialLink: {
      title: 'Usar Checklist: Preparar Primeira Consulta Psicológica',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-5',
    slug: 'como-ajudar-crianca-crise-ansiedade',
    title: 'Como ajudar uma criança durante uma crise de ansiedade: passo a passo prático',
    excerpt:
      'Saiba o que fazer — e o que evitar dizer — quando uma criança apresenta choro intenso, coração acelerado, dor de barriga ou medo paralisante.',
    summaryBox: [
      'Em crianças, a ansiedade frequentemente fala pelo corpo: dor de barriga antes de ir à escola, falta de ar, choro inconsolável, mãos geladas ou irritabilidade repentina.',
      'Durante o pico da crise, a região cerebral de alerta (amígdala) assume o comando; por isso, discursos lógicos ou broncas aumentam o desespero.',
      'O acolhimento eficaz segue 4 passos: autorregulação do adulto, validação breve do sentimento, regulação fisiológica (respiração/aterramento) e conversa apenas após a calma.',
    ],
    toc: [
      { id: 'como-ansiedade-aparece', title: 'Como uma crise de ansiedade se manifesta na infância?' },
      { id: 'o-que-nao-dizer', title: 'Frases bem-intencionadas que costumam piorar a crise' },
      { id: 'passo-a-passo-crise', title: 'Os 4 passos para acolher e acalmar a criança na hora da crise' },
      { id: 'depois-que-passa', title: 'O que fazer depois que a crise passa?' },
    ],
    content: `
      <h2 id="como-ansiedade-aparece">Como uma crise de ansiedade se manifesta na infância?</h2>
      <p>Ao contrário do adulto, que muitas vezes consegue verbalizar <em>"estou me sentindo ansioso com a apresentação de amanhã"</em>, a criança pequena ou em idade escolar costuma vivenciar a ansiedade como um desconforto físico avassalador ou uma recusa súbita.</p>
      <p>Entre os sinais mais comuns estão: coração batendo muito rápido, respiração curta, dor abdominal ou náusea minutos antes de sair de casa, medo intenso de ficar longe dos pais, choro acompanhado de tremores ou até explosões de raiva quando forçada a enfrentar uma situação temida.</p>

      <h2 id="o-que-nao-dizer">Frases bem-intencionadas que costumam piorar a crise</h2>
      <p>Na tentativa de aliviar o sofrimento rápido, é comum que os adultos usem frases como:</p>
      <ul>
        <li><em>"Isso é bobagem, não tem monstro nenhum lá!"</em> (faz a criança se sentir incompreendida e sozinha no medo).</li>
        <li><em>"Se você não parar de chorar agora, nós vamos embora!"</em> (adiciona o medo da punição ao medo que já estava presente).</li>
        <li><em>"Fique calmo, respire!"</em> dito em tom alto e apressado (a criança lê a tensão corporal do adulto, e não a palavra "calmo").</li>
      </ul>

      <h2 id="passo-a-passo-crise">Os 4 passos para acolher e acalmar a criança na hora da crise</h2>
      <ol>
        <li><strong>Empreste a sua calma (co-regulação):</strong> abaixe-se para ficar na altura dos olhos da criança, diminua o volume da sua voz e desacelere seus movimentos. O sistema nervoso da criança se espelha no do adulto cuidador.</li>
        <li><strong>Valide a emoção e ofereça segurança:</strong> diga frases curtas e concretas: <em>"Eu estou vendo que seu coração está batendo rápido e que você está assustado. Eu estou aqui com você, você está seguro."</em></li>
        <li><strong>Use uma estratégia lúdica de respiração ou aterramento (5-4-3-2-1):</strong> crianças não respondem bem a comandos abstratos de respiração. Peça para ela <strong>"cheirar a florzinha (puxar o ar pelo nariz) e soprar a velinha de aniversário bem devagar (soltar pela boca)"</strong>, ou peça para ela encontrar 3 objetos azuis no ambiente. Isso traz o cérebro de volta para o presente.</li>
        <li><strong>Aguarde a onda baixar antes de resolver o problema:</strong> só converse sobre o que causou o medo ou como entrar na festa/escola quando o choro diminuir e a respiração voltar ao ritmo normal.</li>
      </ol>

      <h2 id="depois-que-passa">O que fazer depois que a crise passa?</h2>
      <p>Quando a criança já estiver tranquila (ou no dia seguinte), ajude-a a nomear o que aconteceu sem vergonha. Utilizar um caderno de registro de situações que geram ansiedade permite mapear se as crises estão ligadas a cansaço, transições escolares, excesso de cobrança ou situações sociais específicas — informações valiosas caso a família busque orientação psicológica.</p>
    `,
    category: 'Ansiedade',
    categorySlug: 'ansiedade',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '6 min',
    published: true,
    featured: true,
    tags: 'ansiedade infantil, crise de ansiedade, regulação emocional, orientação parental, TCC',
    metaTitle: 'Como Ajudar uma Criança Durante uma Crise de Ansiedade | Passo a Passo',
    metaDescription:
      'Aprenda o passo a passo prático de co-regulação, respiração lúdica e acolhimento para ajudar uma criança durante uma crise de ansiedade.',
    viewCount: 156,
    createdAt: '2026-08-26T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Terapia Cognitivo-Comportamental para Crianças e Adolescentes com Ansiedade',
        institution: 'Federação Brasileira de Terapias Cognitivas (FBTC)',
        year: '2022',
      },
      {
        title: 'Saúde Mental na Infância e Adolescência: Guia de Orientação',
        institution: 'Organização Mundial da Saúde (OMS) / OPAS',
        year: '2022',
      },
    ],
    affiliateIds: ['baralho-emocoes-infantil', 'livro-cerebro-crianca-siegel'],
    faqs: [
      {
        question: 'Devo tirar a criança imediatamente do lugar sempre que ela ficar ansiosa?',
        answer:
          'Se o ambiente estiver sensorialmente insuportável, ir até um corredor silencioso por alguns minutos para acalmar é ótimo. Porém, evitar definitivamente todas as situações (como nunca mais ir à escola ou a aniversários) reforça a ideia de que o local é perigoso. O ideal é acalmar e tentar aproximações graduais.',
      },
      {
        question: 'Dor de barriga antes da aula pode ser ansiedade mesmo?',
        answer:
          'Sim. O intestino possui forte conexão com o sistema nervoso central. Sempre descarte causas físicas com o pediatra, mas observe se a dor ocorre especificamente em dias letivos ou antes de avaliações.',
      },
    ],
    relatedMaterialLink: {
      title: 'Usar Ferramenta: Registro de Situações que Geram Ansiedade',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-6',
    slug: 'como-criar-combinados-familiares-sem-punicao',
    title: 'Como criar combinados familiares sem transformar tudo em punição',
    excerpt:
      'Descubra por que castigos desproporcionais perdem o efeito rapidamente e como construir acordos claros, previsíveis e respeitosos na rotina da família.',
    summaryBox: [
      'Ameaças feitas no calor da raiva ("vai ficar um mês sem televisão!") quase nunca são cumpridas pelos próprios pais, ensinando à criança que a palavra do adulto não é previsível.',
      'Combinados funcionais são poucos (3 a 5 regras claras), formulados de modo positivo (o que fazer, e não apenas o que é proibido) e revisados em momentos de paz.',
      'Consequências lógicas e reparadoras ensinam responsabilidade, enquanto punições baseadas no medo geram apenas obediência temporária ou esconder erros.',
    ],
    toc: [
      { id: 'por-que-castigos-falham', title: 'Por que o ciclo de gritos e castigos esgota os pais?' },
      { id: 'diferenca-punicao-consequencia', title: 'Diferença entre punição arbitrária e consequência lógica/combinado' },
      { id: 'quatro-regras-combinados', title: '4 princípios para criar combinados que funcionam' },
      { id: 'exemplos-praticos-casa', title: 'Exemplos práticos: tempo de tela, brinquedos espalhados e hora de dormir' },
    ],
    content: `
      <h2 id="por-que-castigos-falham">Por que o ciclo de gritos e castigos esgota os pais?</h2>
      <p>Na correria do fim do dia, após trabalho, trânsito e tarefas domésticas, é compreensível que os pais percam a paciência quando pedem pela quinta vez que a criança desligue o celular ou vá para o banho. É nesse momento de exaustão que surgem as punições impulsivas: <em>"Nunca mais você joga videogame!"</em>.</p>
      <p>Dois dias depois, os próprios pais percebem que a punição era exagerada e voltam atrás. O cérebro da criança aprende rapidamente esse padrão: ela passa a testar o limite esperando para ver até onde o adulto fala sério. O resultado é um lar onde todos se sentem cansados e desrespeitados.</p>

      <h2 id="diferenca-punicao-consequencia">Diferença entre punição arbitrária e consequência lógica/combinado</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-primary-50 text-gray-800">
            <tr>
              <th class="p-3 text-left border-b">Situação</th>
              <th class="p-3 text-left border-b">Punição Arbitrária (Reativa)</th>
              <th class="p-3 text-left border-b">Combinado e Consequência Lógica (Educativa)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-medium">Derramou suco na sala por correr com o copo</td>
              <td class="p-3">Gritar e proibir o desenho animado da tarde (sem relação com o ocorrido).</td>
              <td class="p-3">Lembrar o combinado ("bebemos sentados à mesa") e chamar a criança para ajudar a secar com o pano.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="p-3 font-medium">Resistência para desligar a TV/jogos</td>
              <td class="p-3">Tomar o aparelho da mão de surpresa, gerando explosão de choro.</td>
              <td class="p-3">Combinar o tempo antes de ligar, usar um alarme visual de 5 minutos para encerrar a fase e desligar junto.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Brinquedos espalhados na sala</td>
              <td class="p-3">Ameaçar jogar todos os brinquedos no lixo.</td>
              <td class="p-3">Regra clara: "Para pegar o jogo de tabuleiro, guardamos primeiro os blocos na caixa azul".</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="quatro-regras-combinados">4 princípios para criar combinados que funcionam</h2>
      <ol>
        <li><strong>Combine no frio, nunca no quente:</strong> novos acordos familiares devem ser conversados em um sábado de manhã ou após um lanche tranquilo, nunca no meio de uma birra.</li>
        <li><strong>Diga o que você espera que a criança faça:</strong> o cérebro humano processa melhor instruções de ação. Troque <em>"Não grite!"</em> por <em>"Fale baixinho como eu estou falando"</em>; troque <em>"Não jogue a toalha no chão"</em> por <em>"Pendure a toalha no gancho após o banho"</em>.</li>
        <li><strong>Use o princípio do "Quando... então...":</strong> em vez de <em>"Se você não fizer a tarefa, vai ficar sem brincar"</em> (tom de ameaça), use <em>"Assim que você terminar essas três questões da tarefa, o tempo de brincar no quintal está liberado"</em>.</li>
        <li><strong>Seja consistente e cumpra sua palavra com gentileza e firmeza:</strong> ser firme não exige cara feia nem gritos. Significa manter o combinado com voz calma, acolhendo a frustração da criança sem ceder no limite essencial.</li>
      </ol>

      <h2 id="exemplos-praticos-casa">Exemplos práticos: tempo de tela, brinquedos espalhados e hora de dormir</h2>
      <p>Quando os combinados são visíveis para todos da casa — inclusive para os adultos, que também se comprometem a falar sem gritar e a guardar o celular durante o jantar —, a criança deixa de ver a regra como uma imposição injusta e passa a enxergá-la como parte da convivência da família.</p>
    `,
    category: 'Orientação Parental',
    categorySlug: 'orientacao-parental',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '7 min',
    published: true,
    featured: false,
    tags: 'combinados familiares, orientação parental, limites na infância, educação respeitosa',
    metaTitle: 'Como Criar Combinados Familiares sem Transformar Tudo em Punição',
    metaDescription:
      'Aprenda a substituir ameaças e castigos impulsivos por combinados familiares claros, consequências lógicas e rotina previsível.',
    viewCount: 109,
    createdAt: '2026-09-01T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Parentalidade Positiva e Prevenção de Violência na Infância',
        institution: 'Organização Mundial da Saúde (OMS) / UNICEF',
        year: '2021',
      },
      {
        title: 'Desenvolvimento Socioemocional e Práticas Educativas Parentais',
        institution: 'Sociedade Brasileira de Psicologia (SBP)',
        year: '2022',
      },
    ],
    affiliateIds: ['livro-cerebro-crianca-siegel', 'quadro-magnetico-rotina-infantil'],
    faqs: [
      {
        question: 'E se a criança chorar mesmo com o combinado feito antes?',
        answer:
          'O combinado não impede que a criança sinta frustração quando precisa parar de brincar; o papel do combinado é dar previsibilidade. Você pode acolher o sentimento ("Eu sei que você queria continuar jogando, é chato parar") e, ao mesmo tempo, manter o acordo ("Agora é hora do banho, amanhã você joga novamente").',
      },
      {
        question: 'Quantos combinados uma criança pequena consegue lembrar?',
        answer:
          'Para crianças de 3 a 6 anos, escolha no máximo 3 a 4 combinados essenciais para a rotina da casa, sempre apoiados por imagens.',
      },
    ],
    relatedMaterialLink: {
      title: 'Acessar Ferramenta: Quadro Semanal de Rotina Visual Interativo',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-7',
    slug: 'o-que-pais-devem-observar-antes-avaliacao',
    title: 'O que pais devem observar antes de procurar uma avaliação do desenvolvimento',
    excerpt:
      'Suspeita de atraso na fala, autismo, TDAH ou dificuldade de aprendizagem? Veja um guia estruturado do que observar em casa e no brincar antes da consulta.',
    summaryBox: [
      'A observação estruturada dos pais no ambiente natural é uma das fontes mais ricas de informação para qualquer avaliação clínica do neurodesenvolvimento.',
      'Observar como a criança se comunica quando quer algo, como reage a imprevistos e como brinca traz muito mais clareza do que focar apenas em rótulos.',
      'Procurar avaliação precoce não significa "rotular" a criança, mas entender suas necessidades para oferecer o suporte certo na janela mais fértil do desenvolvimento.',
    ],
    toc: [
      { id: 'por-que-observar', title: 'Por que o olhar dos pais em casa é insubstituível?' },
      { id: 'quatro-pilares-observacao', title: 'Os 4 pilares para observar: comunicação, interação, brincar e regulação' },
      { id: 'como-registrar-sem-ansiedade', title: 'Como anotar exemplos práticos durante 7 dias' },
      { id: 'checklist-observacao', title: 'Tabela guia de observação por área do desenvolvimento' },
    ],
    content: `
      <h2 id="por-que-observar">Por que o olhar dos pais em casa é insubstituível?</h2>
      <p>Em um consultório novo ou diante de um profissional que acabou de conhecer, muitas crianças ficam tímidas, cansadas ou se comportam de maneira diferente do habitual. Por isso, <strong>os pais são os principais parceiros da avaliação psicológica</strong>: são vocês que convivem com a criança no café da manhã, no parquinho, na hora do banho e na interação com irmãos ou primos.</p>
      <p>Quando surge uma dúvida — seja por comparação com outras crianças da mesma idade, seja por um alerta da escola ou do pediatra —, organizar suas observações reduz a ansiedade e torna a primeira consulta muito mais esclarecedora.</p>

      <h2 id="quatro-pilares-observacao">Os 4 pilares para observar: comunicação, interação, brincar e regulação</h2>
      <ol>
        <li><strong>Intenção comunicativa (muito além de falar palavras soltas):</strong> quando a criança quer água ou um brinquedo que está no alto, como ela pede? Ela aponta com o dedinho, olha nos seus olhos, traz o objeto para mostrar uma conquista ou apenas puxa a mão do adulto sem olhar para o rosto dele?</li>
        <li><strong>Interação social e atenção compartilhada:</strong> se você aponta para um avião no céu ou um cachorro na rua, ela acompanha o seu olhar? Ela responde quando é chamada pelo nome mesmo quando não está vendo TV?</li>
        <li><strong>Qualidade do brincar e coordenação:</strong> ela explora os brinquedos de forma funcional e imaginativa (dar comidinha para o boneco, fingir que o bloco é um telefone) ou prefere apenas enfileirar, girar rodinhas ou repetir exatamente a mesma cena?</li>
        <li><strong>Processamento sensorial e transições:</strong> como ela reage a sons altos (liquidificador, secador, festas), etiquetas de roupa, corte de cabelo/unhas, texturas de alimentos ou pequenas mudanças no caminho para a escola?</li>
      </ol>

      <h2 id="checklist-observacao">Tabela guia de observação por área do desenvolvimento</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-primary-50 text-gray-800">
            <tr>
              <th class="p-3 text-left border-b">Área</th>
              <th class="p-3 text-left border-b">O que anotar para levar à consulta</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-medium">Linguagem e Comunicação</td>
              <td class="p-3">Exemplos de frases que ela usa para pedir, negar ou contar algo; se compreende pedidos simples; se repete falas de desenhos fora de contexto.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="p-3 font-medium">Atenção e Autonomia</td>
              <td class="p-3">Quanto tempo permanece em uma atividade compartilhada; se consegue seguir pequenas rotinas (guardar sapato, lavar as mãos) com apoio visual.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Regulação Emocional</td>
              <td class="p-3">O que costuma desencadear o choro ou a desregulação, quanto tempo dura para se acalmar e o que mais ajuda a reconfortá-la.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="como-registrar-sem-ansiedade">Como anotar exemplos práticos durante 7 dias</h2>
      <p>Evite transformar a rotina em uma vigilância tensa com o celular na mão o tempo todo. Basta reservar 5 minutos à noite durante uma semana para anotar: <strong>1) Momentos em que seu filho brilhou e se divertiu; 2) Momentos em que houve dificuldade de comunicação, atenção ou crise.</strong> Esse retrato equilibrado — com pontos fortes e desafios — é a base de uma avaliação ética e humanizada.</p>
    `,
    category: 'Autismo',
    categorySlug: 'autismo',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '8 min',
    published: true,
    featured: true,
    tags: 'avaliação infantil, autismo, TEA, marcos do desenvolvimento, orientação aos pais',
    metaTitle: 'O Que Pais Devem Observar Antes de Procurar uma Avaliação Infantil',
    metaDescription:
      'Guia prático para pais sobre o que observar na comunicação, no brincar, na atenção e no comportamento da criança antes da consulta.',
    viewCount: 127,
    createdAt: '2026-09-05T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Caderneta da Criança: Passaporte da Cidadania — Marcos do Desenvolvimento Infantil',
        institution: 'Ministério da Saúde do Brasil',
        year: '2023',
      },
      {
        title: 'Transtorno do Espectro do Autismo: Manual de Orientação do Departamento Científico de Pediatria do Desenvolvimento e Comportamento',
        institution: 'Sociedade Brasileira de Pediatria (SBP)',
        year: '2019',
      },
    ],
    affiliateIds: ['livro-autismo-compreender-agir', 'baralho-emocoes-infantil'],
    faqs: [
      {
        question: 'Devo esperar a criança completar 4 ou 5 anos para ver se "é só o tempo dela"?',
        answer:
          'Quando há sinais consistentes de atraso na comunicação social ou interação, as diretrizes da Sociedade Brasileira de Pediatria recomendam não esperar passivamente. A intervenção e orientação familiar precoce aproveitam a fase de maior neuroplasticidade infantil.',
      },
      {
        question: 'Posso gravar um vídeo curto de um comportamento em casa para mostrar na consulta?',
        answer:
          'Sim! Um ou dois vídeos curtos gravados de forma natural no ambiente familiar ajudam muito o profissional a observar situações que nem sempre ocorrem durante o horário da sessão.',
      },
    ],
    relatedMaterialLink: {
      title: 'Acessar Ferramenta: Checklist Interativo para Preparar a Primeira Consulta',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-8',
    slug: 'como-adaptar-tarefas-dificuldade-aprendizagem',
    title: 'Como adaptar tarefas em casa para uma criança com dificuldade de aprendizagem ou dislexia',
    excerpt:
      'A hora da lição de casa virou motivo de choro e exaustão? Veja adaptações práticas de leitura, tempo e ambiente para apoiar crianças com dislexia e dificuldades escolares.',
    summaryBox: [
      'Crianças com dislexia ou dificuldades de aprendizagem gastam muito mais energia cognitiva para decodificar letras, sobrando menos fôlego para interpretar o texto.',
      'Estudar por duas horas seguidas sob choro não gera aprendizagem: blocos curtos de 15 a 20 minutos com pausas programadas são muito mais eficazes.',
      'Separar a capacidade intelectual da criança da sua dificuldade específica de leitura/escrita é essencial para proteger a autoestima.',
    ],
    toc: [
      { id: 'por-que-licao-cansa', title: 'Por que a hora da lição de casa gera tanto sofrimento?' },
      { id: 'adaptacoes-praticas-estudo', title: '5 adaptações práticas para aplicar hoje na hora do estudo' },
      { id: 'comparativo-estudo', title: 'Tabela prática: Como transformar a condução da tarefa em casa' },
      { id: 'protegendo-autoestima', title: 'Como proteger a autoestima escolar da criança' },
    ],
    content: `
      <h2 id="por-que-licao-cansa">Por que a hora da lição de casa gera tanto sofrimento?</h2>
      <p>Imagine precisar ler um texto técnico inteiro escrito com letras espelhadas após já ter trabalhado o dia todo. Em poucos minutos, seus olhos arderiam e você sentiria vontade de desistir. Para uma criança com dislexia ou transtorno específico de aprendizagem, <strong>a leitura não é um processo automático</strong>: cada sílaba exige esforço consciente de decodificação fonológica.</p>
      <p>Quando essa criança chega em casa após quatro ou cinco horas na escola e encontra uma mesa cheia de folhas com textos densos, o cérebro entra em sobrecarga. Sem adaptações, a hora da tarefa vira um campo de batalha que abala o vínculo entre pais e filhos.</p>

      <h2 id="adaptacoes-praticas-estudo">5 adaptações práticas para aplicar hoje na hora do estudo</h2>
      <ol>
        <li><strong>Atue como "leitor-guia" nos enunciados:</strong> se o objetivo da questão de Ciências é saber se a criança entendeu o ciclo da água, não deixe que ela esgote toda a energia tentando decodificar o enunciado. Leia a pergunta em voz alta com clareza, converse sobre a resposta e depois apoie o registro escrito.</li>
        <li><strong>Use uma régua de leitura ou janela de papel:</strong> cobrir as linhas de baixo com uma tira de papel cartão ou régua de leitura reduz a confusão visual (pular linhas ou misturar palavras próximas).</li>
        <li><strong>Aplique a técnica dos blocos de 15 minutos:</strong> combine com um timer visual: 15 minutos de foco em apenas duas questões, seguidos de 5 minutos para beber água e alongar.</li>
        <li><strong>Utilize recursos multissensoriais e mapas visuais:</strong> transformar um texto longo de História em três quadros desenhados com setas e palavras-chave ajuda a memória visual da criança.</li>
        <li><strong>Evite apagar a folha inteira com rispidez:</strong> se a criança escreveu uma resposta com excelente raciocínio, mas trocou letras, valide primeiro a ideia correta antes de revisar a ortografia de uma ou duas palavras-chave.</li>
      </ol>

      <h2 id="comparativo-estudo">Tabela prática: Como transformar a condução da tarefa em casa</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-primary-50 text-gray-800">
            <tr>
              <th class="p-3 text-left border-b">Situação na Tarefa</th>
              <th class="p-3 text-left border-b">Condução Tradicional (Gera Bloqueio)</th>
              <th class="p-3 text-left border-b">Condução Adaptada (Favorece Aprendizagem)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-medium">Folha com 8 exercícios na mesma página</td>
              <td class="p-3">Cobrar que faça tudo seguido sem levantar da cadeira.</td>
              <td class="p-3">Dobrar a folha ao meio para mostrar apenas 2 exercícios por vez, reduzindo a ansiedade visual.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="p-3 font-medium">Dificuldade para montar uma frase escrita</td>
              <td class="p-3">Dizer "Pense direito, você já sabe escrever isso!".</td>
              <td class="p-3">Pedir que a criança fale a frase em voz alta primeiro, contar nos dedos quantas palavras tem e escrever palavra por palavra.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Tarefa excessivamente longa para o tempo disponível</td>
              <td class="p-3">Ficar até as 22h chorando para entregar tudo completo.</td>
              <td class="p-3">Priorizar a qualidade até o limite saudável da criança e enviar nota respeitosa ao professor relatando o tempo investido.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="protegendo-autoestima">Como proteger a autoestima escolar da criança</h2>
      <p>O maior risco associado às dificuldades de aprendizagem não tratadas é o impacto emocional secundário: a criança passa a acreditar que não é inteligente. Faça questão de destacar diariamente suas habilidades na oralidade, na criatividade, nos esportes, na música, no cuidado com os amigos ou na resolução prática de problemas.</p>
    `,
    category: 'Dislexia e Aprendizagem',
    categorySlug: 'dislexia-aprendizagem',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '7 min',
    published: true,
    featured: false,
    tags: 'dislexia, dificuldade de aprendizagem, lição de casa, adaptação escolar, autoestima infantil',
    metaTitle: 'Como Adaptar Tarefas para Criança com Dificuldade de Aprendizagem ou Dislexia',
    metaDescription:
      'Estratégias práticas para adaptar o momento da lição de casa para crianças com dislexia ou dificuldade de aprendizagem sem choro e mantendo a autoestima.',
    viewCount: 88,
    createdAt: '2026-09-10T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Transtorno Específico da Aprendizagem: Critérios Diagnósticos e Manejo (DSM-5-TR)',
        institution: 'American Psychiatric Association',
        year: '2023',
      },
      {
        title: 'Cartilha de Inclusão Escolar e Transtornos Funcionais Específicos',
        institution: 'Associação Brasileira de Dislexia (ABD) / MEC',
        year: '2022',
      },
    ],
    affiliateIds: ['regua-leitura-guiada-dislexia', 'timer-visual-silencioso'],
    faqs: [
      {
        question: 'Se eu ler o enunciado para o meu filho, não estarei deixando ele mal-acostumado?',
        answer:
          'Pelo contrário: enquanto a leitura automática está sendo trabalhada na escola e na intervenção especializada, mediar a compreensão do enunciado impede que a criança crie aversão aos estudos e permite que ela demonstre todo o seu raciocínio.',
      },
      {
        question: 'Qual profissional devo procurar quando percebo trocas persistentes na leitura e escrita?',
        answer:
          'A investigação de dificuldades de aprendizagem envolve um olhar integrado entre Psicologia (aspectos cognitivos, executivos e emocionais), Fonoaudiologia (processamento fonológico e leitura) e Psicopedagogia.',
      },
    ],
    relatedMaterialLink: {
      title: 'Acessar Ferramenta: Lista de Perguntas para Reunião Escolar',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-9',
    slug: 'tdah-adultos-organizacao-tarefas-ambiente',
    title: 'TDAH em adultos: organização de tarefas e ambiente sem fórmulas irreais',
    excerpt:
      'Por que agendas tradicionais costumam falhar para adultos com TDAH? Conheça estratégias baseadas na Terapia Cognitivo-Comportamental para organizar ambiente, tempo e prioridades.',
    summaryBox: [
      'Muitos adultos descobrem o TDAH após anos se culpando por comprar dezenas de agendas perfeitas em janeiro e abandoná-las na segunda semana.',
      'O cérebro com TDAH funciona por interesse, urgência ou novidade — e sofre com a "cegueira temporal" (achar que tudo leva 10 minutos ou deixar para a última hora).',
      'Sistemas de organização para TDAH adulto precisam ter baixo atrito visual, captura rápida de ideias e divisão de projetos em "próxima ação física visível".',
    ],
    toc: [
      { id: 'por-que-agendas-falham', title: 'Por que sistemas tradicionais de produtividade falham no TDAH adulto?' },
      { id: 'cegueira-temporal', title: 'O que é a cegueira temporal e a paralisia de iniciação?' },
      { id: 'cinco-estrategias-tcc', title: '5 estratégias da TCC para organizar ambiente e rotina no TDAH adulto' },
      { id: 'checklist-ambiente-tdah', title: 'Checklist de adaptação do ambiente de trabalho e casa' },
    ],
    content: `
      <h2 id="por-que-agendas-falham">Por que sistemas tradicionais de produtividade falham no TDAH adulto?</h2>
      <p>Grande parte dos métodos populares de produtividade parte do pressuposto de que basta fazer uma lista de 20 itens na segunda-feira e segui-la em ordem de importância. Para o adulto com TDAH, esse modelo frequentemente gera <strong>sobrecarga executiva</strong>: quanto mais complexa, escondida em subpastas ou cheia de cores obrigatórias for uma ferramenta, maior a chance de ela ser abandonada assim que o entusiasmo inicial passar.</p>
      <p>Na Terapia Cognitivo-Comportamental (TCC) voltada ao TDAH adulto, partimos de uma premissa realista: <strong>não tentamos transformar seu cérebro em uma planilha; adaptamos o ambiente ao modo como seu cérebro funciona</strong>.</p>

      <h2 id="cegueira-temporal">O que é a cegueira temporal e a paralisia de iniciação?</h2>
      <p>Dois fenômenos explicam boa parte do sofrimento no cotidiano profissional e doméstico:</p>
      <ul>
        <li><strong>Cegueira temporal (Time Blindness):</strong> no TDAH, o tempo costuma ser dividido apenas em duas categorias internas: <em>"Agora"</em> e <em>"Não-Agora"</em>. Um prazo para daqui a dez dias parece infinito ("Não-Agora"), até que falta uma noite para a entrega e ele vira uma emergência movida a adrenalina ("Agora").</li>
        <li><strong>Paralisia de iniciação:</strong> quando uma tarefa é ambígua (ex.: "resolver imposto de renda" ou "organizar o armário"), o cérebro não enxerga por onde começar e foge para estímulos rápidos (como checar mensagens ou arrumar outra coisa menos urgente).</li>
      </ul>

      <h2 id="cinco-estrategias-tcc">5 estratégias da TCC para organizar ambiente e rotina no TDAH adulto</h2>
      <ol>
        <li><strong>Defina a "Primeira Microação Física":</strong> nunca escreva na sua lista do dia "Fazer relatório X". Escreva o primeiro passo ridiculamente pequeno: <em>"Abrir o arquivo Word e digitar os 3 subtítulos"</em>. Iniciar é a parte mais difícil; uma vez em movimento, a continuidade fica mais leve.</li>
        <li><strong>Limite a lista diária à "Regra do 1 + 2":</strong> escolha apenas <strong>1 tarefa essencial</strong> que precisa ser concluída hoje e no máximo <strong>2 tarefas complementares</strong>. Todo o resto fica em uma "lista de estacionamento" fora do seu campo de visão imediato.</li>
        <li><strong>Use o princípio "Se não está visível, não existe":</strong> contas a pagar, chaves, óculos e medicamentos não devem ficar escondidos no fundo de gavetas fechadas. Use bandejas abertas em pontos estratégicos de passagem.</li>
        <li><strong>Ancore novos hábitos em hábitos automáticos:</strong> em vez de tentar lembrar de olhar a agenda às 14h, coloque a agenda aberta exatamente em cima do teclado do computador antes de encerrar o expediente anterior, ou ao lado da xícara de café da manhã.</li>
        <li><strong>Trabalhe a autocrítica quando um sistema falhar:</strong> se você ficou três dias sem usar seu planejador, não jogue tudo fora achando que "não tem jeito". Na TCC, tratamos a retomada com autocompaixão: basta abrir na página de hoje e recomeçar sem precisar preencher o atrasado.</li>
      </ol>

      <h2 id="checklist-ambiente-tdah">Checklist de adaptação do ambiente de trabalho e casa</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-primary-50 text-gray-800">
            <tr>
              <th class="p-3 text-left border-b">Ponto de Atrito</th>
              <th class="p-3 text-left border-b">Solução Prática de Ambiente</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-medium">Esquecer chaves, carteira e crachá ao sair</td>
              <td class="p-3">Criar uma única "bandeja de pouso" fixa ao lado da fechadura da porta de entrada.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="p-3 font-medium">Abrir o celular para ver a hora e perder 40 minutos em redes sociais</td>
              <td class="p-3">Usar um relógio de mesa/pulso ou timer físico na bancada de trabalho e deixar o celular carregando fora do alcance do braço.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Esquecer o que ia falar ou fazer no meio de uma reunião</td>
              <td class="p-3">Manter um bloco único de captura rápida ("caixa de entrada em papel") sempre aberto ao lado do mouse.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    category: 'TDAH',
    categorySlug: 'tdah',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '8 min',
    published: true,
    featured: true,
    tags: 'TDAH em adultos, funções executivas, organização, procrastinação, TCC',
    metaTitle: 'TDAH em Adultos: Organização de Tarefas e Ambiente | Psicologia Direta',
    metaDescription:
      'Estratégias práticas baseadas na Terapia Cognitivo-Comportamental (TCC) para adultos com TDAH lidarem com procrastinação, tempo e organização do ambiente.',
    viewCount: 173,
    createdAt: '2026-09-15T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Terapia Cognitivo-Comportamental para TDAH em Adultos: Guia de Estratégias Executivas (Safren et al. / Barkley)',
        institution: 'Literatura Clínica em TCC / APA',
        year: '2022',
      },
      {
        title: 'Consenso Clínico sobre Diagnóstico e Manejo do TDAH ao Longo da Vida',
        institution: 'Federação Mundial de TDAH (World Federation of ADHD)',
        year: '2021',
      },
    ],
    affiliateIds: ['livro-vencendo-tdah-adulto', 'timer-visual-silencioso'],
    faqs: [
      {
        question: 'Uma pessoa pode chegar à vida adulta sem nunca ter sido diagnosticada com TDAH?',
        answer:
          'Sim, isso é muito frequente, especialmente em pessoas com predominância de desatenção (sem hiperatividade motora visível na infância) ou que compensaram os sintomas com alto esforço até que as exigências da faculdade, trabalho e família ultrapassaram sua reserva de energia.',
      },
      {
        question: 'O tratamento do TDAH adulto é feito apenas com medicação?',
        answer:
          'Não. Mesmo quando há indicação médica de tratamento farmacológico, os medicamentos não ensinam habilidades de organização, planejamento ou manejo da autocrítica. A psicoterapia em TCC é fundamental para construir essas estratégias na vida real.',
      },
    ],
    relatedMaterialLink: {
      title: 'Acessar Ferramenta: Checklist para Preparar sua Primeira Consulta',
      href: '/materiais#ferramentas-interativas',
    },
  },
  {
    id: 'art-10',
    slug: 'quando-procurar-ajuda-profissional-ansiedade',
    title: 'Quando procurar ajuda profissional para ansiedade: sinais claros e como funciona a TCC',
    excerpt:
      'Sentir ansiedade antes de uma mudança importante é natural. Mas como saber o momento certo de buscar psicoterapia e como o atendimento psicológico atua?',
    summaryBox: [
      'A ansiedade natural tem gatilho proporcional, duração limitada e nos ajuda a nos preparar; a ansiedade clínica persiste mesmo quando o problema já passou e consome nossa energia vital.',
      'Quando você começa a evitar compromissos, perder noites de sono ou sentir sintomas físicos frequentes (taquicardia, tensão constante, falta de ar), é hora de buscar avaliação.',
      'A Terapia Cognitivo-Comportamental (TCC) trabalha de forma colaborativa e prática para desarmar o alarme falso da mente e devolver sua autonomia.',
    ],
    toc: [
      { id: 'ansiedade-normal-vs-clinica', title: 'A linha entre a preocupação normal e a ansiedade que adoece' },
      { id: 'cinco-sinais-procurar-ajuda', title: '5 sinais claros de que é hora de procurar ajuda profissional' },
      { id: 'tabela-autoobservacao', title: 'Tabela de auto-observação: Alerta Saudável vs. Sobrecarga Ansiosa' },
      { id: 'como-tcc-trabalha', title: 'Como funciona a psicoterapia (TCC) para ansiedade na prática?' },
    ],
    content: `
      <h2 id="ansiedade-normal-vs-clinica">A linha entre a preocupação normal e a ansiedade que adoece</h2>
      <p>Muitas pessoas demoram anos para procurar acompanhamento psicológico porque acreditam que <em>"ser ansioso é apenas o meu jeito de ser"</em> ou que só deveriam agendar uma consulta se tivessem uma crise grave no pronto-socorro.</p>
      <p>Na verdade, a ansiedade é uma emoção protetora essencial: é ela que faz você olhar para os dois lados antes de atravessar a rua ou estudar para um exame importante. O problema começa quando <strong>o sistema de alarme do cérebro perde a calibragem</strong> e passa a tratar um e-mail de trabalho, uma conversa difícil ou uma incerteza comum como se fossem ameaças de vida ou morte.</p>

      <h2 id="cinco-sinais-procurar-ajuda">5 sinais claros de que é hora de procurar ajuda profissional</h2>
      <ol>
        <li><strong>O "E se..." nunca desliga:</strong> mesmo em momentos de lazer ou fim de semana, sua mente antecipa cenários catastróficos em sequência, impedindo que você esteja presente com sua família.</li>
        <li><strong>O corpo dá sinais constantes de exaustão:</strong> mandíbula travada (bruxismo), dores musculares nos ombros, alterações gastrointestinais, palpitações ou acordar no meio da madrugada com a mente acelerada.</li>
        <li><strong>A vida começa a encolher (evitação):</strong> você passa a adiar exames médicos, recusar convites, evitar dirigir, não fazer perguntas em reuniões ou procrastinar tarefas importantes por medo de errar ou de passar mal.</li>
        <li><strong>Irritabilidade e baixa tolerância a imprevistos:</strong> pequenos atrasos ou mudanças de plano geram uma angústia ou explosão emocional desproporcional.</li>
        <li><strong>As estratégias caseiras já não dão conta:</strong> tentar "pensar positivo", tomar chás ou tirar alguns dias de folga traz apenas alívio momentâneo, e o ciclo recomeça logo em seguida.</li>
      </ol>

      <h2 id="tabela-autoobservacao">Tabela de auto-observação: Alerta Saudável vs. Sobrecarga Ansiosa</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead class="bg-primary-50 text-gray-800">
            <tr>
              <th class="p-3 text-left border-b">Dimensão</th>
              <th class="p-3 text-left border-b">Ansiedade Adaptativa (Esperada)</th>
              <th class="p-3 text-left border-b">Ansiedade Clínica (Pede Cuidado)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-medium">Foco do pensamento</td>
              <td class="p-3">Voltado para a resolução prática de um desafio real próximo.</td>
              <td class="p-3">Ruminação sobre hipóteses distantes ("E se tudo der errado?") sem chegar a uma ação.</td>
            </tr>
            <tr class="border-b bg-gray-50">
              <td class="p-3 font-medium">Recuperação após o evento</td>
              <td class="p-3">Após a apresentação ou prova, o corpo relaxa e retoma a rotina.</td>
              <td class="p-3">Assim que um problema acaba, a mente imediatamente elege uma nova preocupação.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Liberdade de escolha</td>
              <td class="p-3">Você enfrenta situações novas mesmo sentindo um frio na barriga.</td>
              <td class="p-3">O medo passa a decidir por você quais lugares frequentar e quais projetos aceitar.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="como-tcc-trabalha">Como funciona a psicoterapia (TCC) para ansiedade na prática?</h2>
      <p>Na Terapia Cognitivo-Comportamental (TCC), o atendimento não consiste apenas em desabafar livremente sem direção. Psicóloga e paciente trabalham juntos para:</p>
      <ul>
        <li>Mapear os gatilhos e compreender como seus pensamentos automáticos alimentam as sensações físicas e os comportamentos de esquiva;</li>
        <li>Aprender técnicas validadas de regulação fisiológica e manejo de crises;</li>
        <li>Questionar pensamentos catastróficos com base em evidências reais, reduzindo a cobrança perfeccionista;</li>
        <li>Construir um plano gradual e respeitoso para retomar as atividades importantes para a sua vida.</li>
      </ul>
      <p><strong>Nota ética importante:</strong> O acompanhamento psicológico online é um espaço seguro e planejado, mas não substitui serviços médicos de emergência. Se você ou alguém próximo estiver enfrentando uma crise aguda severa ou pensamentos de risco à vida, ligue imediatamente para o <strong>CVV (188 — ligação gratuita 24h)</strong> ou acione o <strong>SAMU (192)</strong>.</p>
    `,
    category: 'Ansiedade',
    categorySlug: 'ansiedade',
    image: null,
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '7 min',
    published: true,
    featured: true,
    tags: 'ansiedade, quando procurar psicólogo, TCC, saúde mental, crise de pânico',
    metaTitle: 'Quando Procurar Ajuda Profissional para Ansiedade | Psicologia Direta',
    metaDescription:
      'Saiba diferenciar a preocupação normal da ansiedade clínica, conheça os 5 sinais de alerta e entenda como funciona a Terapia Cognitivo-Comportamental.',
    viewCount: 194,
    createdAt: '2026-09-20T10:00:00.000Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'World Mental Health Report: Transforming Mental Health for All',
        institution: 'Organização Mundial da Saúde (OMS)',
        year: '2022',
      },
      {
        title: 'Diretrizes Baseadas em Evidências para Transtornos de Ansiedade (DSM-5-TR)',
        institution: 'American Psychiatric Association (APA)',
        year: '2023',
      },
    ],
    affiliateIds: ['livro-livre-de-ansiedade-leahy'],
    faqs: [
      {
        question: 'Procurar um psicólogo para ansiedade significa que terei que tomar remédios?',
        answer:
          'Psicólogos não prescrevem medicamentos; o trabalho psicológico é realizado por meio da psicoterapia (como a TCC), que é considerada tratamento de primeira linha para muitos quadros de ansiedade. Caso seja identificada a necessidade de avaliação médica complementar, o encaminhamento ético ao psiquiatra é conversado com você.',
      },
      {
        question: 'Posso fazer terapia para ansiedade de forma 100% online?',
        answer:
          'Sim. Estudos científicos e a regulamentação do Conselho Federal de Psicologia (Resolução CFP nº 11/2018) respaldam a eficácia e segurança da psicoterapia online para quadros de ansiedade leves e moderados.',
      },
    ],
    relatedMaterialLink: {
      title: 'Acessar Ferramenta: Registro de Situações que Geram Ansiedade',
      href: '/materiais#ferramentas-interativas',
    },
  },
  // Mantemos também o artigo legado do seed com estrutura enriquecida para garantir zero links quebrados
  {
    id: 'art-legacy-1',
    slug: 'ansiedade-como-identificar-primeiros-sinais',
    title: 'Ansiedade: Como Identificar os Primeiros Sinais e Cuidar do Equilíbrio Emocional',
    excerpt:
      'A ansiedade faz parte da vida, mas quando se torna intensa e frequente pode afetar a saúde física, emocional e os relacionamentos. Conheça os sinais iniciais e estratégias de cuidado.',
    summaryBox: [
      'Reconhecer precocemente sinais físicos (tensão, insônia, taquicardia) e cognitivos (preocupação constante) evita o agravamento do quadro.',
      'Mudanças de rotina, higiene do sono e redução de estimulantes atuam como fatores de proteção importantes.',
      'A psicoterapia oferece ferramentas estruturadas para compreender gatilhos e desenvolver autonomia emocional.',
    ],
    toc: [
      { id: 'o-que-e-ansiedade', title: 'O que é ansiedade?' },
      { id: 'principais-sintomas', title: 'Principais sinais físicos e emocionais' },
      { id: 'estrategias-autocuidado', title: 'Estratégias de autocuidado e tratamento' },
    ],
    content: `
      <h2 id="o-que-e-ansiedade">O que é ansiedade?</h2>
      <p>A ansiedade é uma resposta natural do organismo diante de situações de incerteza ou desafio. Em níveis moderados, ela atua de forma protetora, ajudando na preparação para eventos importantes. No entanto, quando essa sensação permanece por longos períodos de forma desproporcional, passa a gerar sofrimento e interferir no cotidiano.</p>

      <h2 id="principais-sintomas">Principais sinais físicos e emocionais</h2>
      <ul>
        <li>Preocupação excessiva e dificuldade em desligar a mente à noite;</li>
        <li>Palpitações, respiração curta e tensão muscular frequente;</li>
        <li>Irritabilidade, dificuldade de concentração e cansaço ao acordar;</li>
        <li>Sensação constante de que algo ruim está prestes a acontecer.</li>
      </ul>

      <h2 id="estrategias-autocuidado">Estratégias de autocuidado e tratamento</h2>
      <p>Manter uma rotina de sono regular, reduzir o excesso de cafeína e telas à noite, praticar exercícios físicos e reservar pausas na rotina são cuidados importantes. Quando os sintomas persistem e limitam o bem-estar, a psicoterapia — especialmente a Terapia Cognitivo-Comportamental (TCC) — oferece um espaço seguro para compreender e manejar esses padrões.</p>
    `,
    category: 'Ansiedade',
    categorySlug: 'ansiedade',
    image: 'https://78a9prkhf5ughmp4.public.blob.vercel-storage.com/blog/1784220884712-Anxiety_in_human_mind_nature_202607161153-(1).jpeg',
    author: PROFESSIONAL_AUTHOR,
    authorCrp: PROFESSIONAL_CRP,
    reviewedBy: PROFESSIONAL_AUTHOR,
    reviewerCrp: PROFESSIONAL_CRP,
    readTime: '5 min',
    published: true,
    featured: false,
    tags: 'ansiedade, saúde mental, terapia, estresse, bem-estar emocional',
    metaTitle: 'Ansiedade: Como Identificar os Primeiros Sinais | Psicologia Direta',
    metaDescription:
      'Descubra os principais sintomas iniciais da ansiedade e conheça estratégias éticas para cuidar da saúde emocional.',
    viewCount: 84,
    createdAt: '2026-07-16T16:57:16.426Z',
    updatedAt: '2026-10-10T14:00:00.000Z',
    sources: [
      {
        title: 'Ficha Técnica sobre Transtornos de Ansiedade',
        institution: 'Organização Mundial da Saúde (OMS)',
        year: '2023',
      },
    ],
    affiliateIds: ['livro-livre-de-ansiedade-leahy'],
    faqs: [
      {
        question: 'A ansiedade tem tratamento?',
        answer:
          'Sim. Por meio da psicoterapia baseada em evidências e ajustes no estilo de vida (e acompanhamento médico quando indicado), é possível compreender os gatilhos e retomar a qualidade de vida.',
      },
    ],
    relatedMaterialLink: {
      title: 'Acessar Ferramenta: Registro de Situações que Geram Ansiedade',
      href: '/materiais#ferramentas-interativas',
    },
  },
]

export function getArticleBySlug(slug: string): EditorialArticle | undefined {
  return EDITORIAL_ARTICLES.find((a) => a.slug === slug)
}

export function getArticlesByCategorySlug(categorySlug: CategorySlug): EditorialArticle[] {
  return EDITORIAL_ARTICLES.filter((a) => a.published && a.categorySlug === categorySlug)
}

export function getRelatedArticles(currentSlug: string, categorySlug: CategorySlug, limit = 3): EditorialArticle[] {
  const sameCategory = EDITORIAL_ARTICLES.filter(
    (a) => a.published && a.slug !== currentSlug && a.categorySlug === categorySlug
  )
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit)
  }
  const others = EDITORIAL_ARTICLES.filter(
    (a) => a.published && a.slug !== currentSlug && a.categorySlug !== categorySlug
  )
  return [...sameCategory, ...others].slice(0, limit)
}
