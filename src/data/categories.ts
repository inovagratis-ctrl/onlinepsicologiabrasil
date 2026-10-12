export type CategorySlug =
  | 'saude-mental'
  | 'autismo'
  | 'tdah'
  | 'dislexia-aprendizagem'
  | 'orientacao-parental'
  | 'ansiedade'

export interface CategoryHubData {
  slug: CategorySlug
  name: string
  shortTitle: string
  heroTitle: string
  heroSubtitle: string
  description: string
  keyTopics: string[]
  whenToObserve: string[]
  practicalTips: {
    title: string
    detail: string
  }[]
  serviceTitle: string
  serviceSummary: string
  serviceAudience: string[]
  serviceHowItWorks: string[]
  serviceLimits: string
  faqs: {
    question: string
    answer: string
  }[]
}

export const CATEGORY_HUBS: Record<CategorySlug, CategoryHubData> = {
  'saude-mental': {
    slug: 'saude-mental',
    name: 'Saúde Mental',
    shortTitle: 'Saúde Mental e Bem-Estar Emocional',
    heroTitle: 'Saúde Mental: Psicoeducação, Regulação Emocional e Cuidado Ético',
    heroSubtitle:
      'Compreenda sinais de sobrecarga emocional, saiba como preparar uma primeira consulta psicológica e conheça caminhos seguros baseados em evidências científicas.',
    description:
      'O cuidado com a saúde mental envolve compreender como pensamentos, emoções, ambiente familiar e rotina interagem no dia a dia. Nosso objetivo é oferecer informação clara, livre de sensacionalismo e fundamentada na Psicologia baseada em evidências.',
    keyTopics: [
      'Quando procurar acompanhamento psicológico e o que esperar da primeira sessão',
      'Regulação emocional para crianças, adolescentes e adultos',
      'Diferença entre sofrimento emocional passageiro e sinais que merecem avaliação',
      'Ética, sigilo profissional (CFP) e proteção de dados no atendimento online',
    ],
    whenToObserve: [
      'Mudanças persistentes no padrão de sono, apetite ou energia por várias semanas',
      'Irritabilidade intensa, choro frequente ou sensação constante de esgotamento',
      'Prejuízos recorrentes no trabalho, nos estudos ou na convivência familiar',
      'Dificuldade em lidar com transições, perdas ou exigências do cotidiano',
    ],
    practicalTips: [
      {
        title: 'Observe frequência, duração e impacto',
        detail:
          'Antes de tirar conclusões apressadas, anote há quanto tempo o comportamento ou sofrimento ocorre e em quais ambientes ele se intensifica.',
      },
      {
        title: 'Separe acolhimento de julgamento',
        detail:
          'Validar o que a pessoa sente não significa concordar com todos os comportamentos, mas criar segurança para encontrar soluções conjuntas.',
      },
      {
        title: 'Evite autodiagnósticos por redes sociais',
        detail:
          'Listas rápidas na internet não substituem uma escuta clínica qualificada que considera a história de vida e o contexto de cada indivíduo.',
      },
    ],
    serviceTitle: 'Psicoterapia Individual Online (TCC) e Avaliação Inicial',
    serviceSummary:
      'Espaço clínico sigiloso e acolhedor, fundamentado na Terapia Cognitivo-Comportamental (TCC), voltado à compreensão das dificuldades emocionais e construção de estratégias práticas de enfrentamento.',
    serviceAudience: [
      'Adultos que enfrentam sobrecarga emocional, estresse crônico, tristeza persistente ou dificuldades de adaptação',
      'Famílias que buscam compreender se é o momento adequado para iniciar psicoterapia para seus filhos',
      'Pessoas que procuram atendimento psicológico online ético, estruturado e com horário agendado',
    ],
    serviceHowItWorks: [
      'Sessão inicial de acolhimento e levantamento de história clínica e contexto atual (50 a 60 minutos)',
      'Definição colaborativa de objetivos terapêuticos claros e realistas',
      'Encontros semanais por videochamada segura, respeitando a Resolução CFP nº 11/2018',
    ],
    serviceLimits:
      'O atendimento psicológico online não substitui atendimento médico ou psiquiátrico de urgência. Em situações de crise aguda ou risco imediato à vida, procure o pronto-socorro mais próximo, acione o SAMU (192) ou ligue para o CVV (188).',
    faqs: [
      {
        question: 'Como saber se preciso de psicoterapia ou apenas descansar?',
        answer:
          'Quando o descanso, as férias ou conversas com amigos não aliviam o esgotamento, ou quando pensamentos e emoções passam a prejudicar o sono, o trabalho e as relações por semanas seguidas, uma avaliação psicológica é recomendada.',
      },
      {
        question: 'O atendimento online tem a mesma validade ética que o presencial?',
        answer:
          'Sim. O atendimento psicológico online é regulamentado pelo Conselho Federal de Psicologia (Resolução CFP nº 11/2018) e segue os mesmos princípios de sigilo, ética e fundamentação técnica.',
      },
    ],
  },
  autismo: {
    slug: 'autismo',
    name: 'Autismo',
    shortTitle: 'Autismo (TEA) e Desenvolvimento',
    heroTitle: 'Autismo (TEA): Orientação para Famílias, Rotina Visual e Desenvolvimento',
    heroSubtitle:
      'Estratégias naturalistas e acolhedoras para apoiar a comunicação funcional, a previsibilidade na rotina e a parceria entre família e escola.',
    description:
      'O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento caracterizada por particularidades na comunicação social, na interação e nos padrões de interesses e processamento sensorial. Cada criança ou adulto no espectro é único e se desenvolve melhor quando o ambiente oferece previsibilidade, respeito e suporte adequado.',
    keyTopics: [
      'Comunicação funcional e apoio visual no ambiente natural da criança',
      'Manejo acolhedor de sobrecarga sensorial e transições na rotina',
      'Orientação parental baseada em práticas naturalistas (ABA Naturalista)',
      'Parceria entre família, escola e equipe multiprofissional',
    ],
    whenToObserve: [
      'Dificuldade em compartilhar atenção (mostrar brinquedos, apontar para dividir interesse)',
      'Atraso na fala ou uso repetitivo da linguagem sem função comunicativa clara',
      'Intenso desconforto com mudanças inesperadas na rotina ou estímulos sensoriais (sons, texturas)',
      'Brincar muito restrito, repetitivo ou dificuldade em interagir com outras crianças da mesma faixa etária',
    ],
    practicalTips: [
      {
        title: 'Antecipe mudanças com pistas visuais',
        detail:
          'Avisar 5 a 10 minutos antes de encerrar uma atividade e mostrar visualmente o que virá depois reduz a frustração nas transições.',
      },
      {
        title: 'Siga o interesse da criança para ensinar',
        detail:
          'Na abordagem naturalista, usamos os temas e brinquedos que a criança já gosta como ponte para ampliar a comunicação e a troca social.',
      },
      {
        title: 'Observe o ambiente sensorial',
        detail:
          'Muitas crises ocorrem por excesso de barulho, luz intensa ou cansaço. Criar um canto tranquilo em casa ajuda na autorregulação.',
      },
    ],
    serviceTitle: 'Orientação para Pais e Cuidadores de Crianças Autistas (TEA)',
    serviceSummary:
      'Acompanhamento especializado para capacitar pais e cuidadores a estruturarem a rotina doméstica, estimularem a comunicação funcional e lidarem com desafios comportamentais de forma respeitosa e baseada em evidências (ABA Naturalista).',
    serviceAudience: [
      'Pais e mães de crianças com diagnóstico confirmado ou em investigação de TEA',
      'Famílias que desejam aplicar estratégias de rotina visual e comunicação funcional em casa',
      'Responsáveis que precisam alinhar condutas entre o ambiente familiar e a escola',
    ],
    serviceHowItWorks: [
      'Entrevista detalhada com os responsáveis para mapear a rotina, potencialidades e principais desafios da criança',
      'Planejamento conjunto de adaptações ambientais, quadros visuais e estratégias práticas para o dia a dia',
      'Sessões periódicas de orientação parental online para análise de registros, ajustes e suporte contínuo à família',
    ],
    serviceLimits:
      'A orientação parental online fortalece a família e o cotidiano da criança, mas não substitui laudo médico, terapia ocupacional presencial ou acompanhamento multidisciplinar intensivo quando indicado.',
    faqs: [
      {
        question: 'Como funciona a orientação para pais de crianças autistas no formato online?',
        answer:
          'Nas sessões online, a psicóloga trabalha diretamente com os pais e cuidadores, analisando situações reais da rotina da criança, construindo recursos visuais personalizados e orientando passo a passo como estimular a comunicação e lidar com momentos difíceis em casa.',
      },
      {
        question: 'Preciso já ter o laudo fechado de TEA para buscar orientação?',
        answer:
          'Não. Mesmo durante a fase de investigação diagnóstica, a família já pode — e deve — receber orientações práticas para organizar a rotina, observar sinais com clareza e apoiar o desenvolvimento da criança.',
      },
    ],
  },
  tdah: {
    slug: 'tdah',
    name: 'TDAH',
    shortTitle: 'TDAH em Crianças e Adultos',
    heroTitle: 'TDAH na Infância e na Vida Adulta: Atenção, Funções Executivas e Rotina',
    heroSubtitle:
      'Entenda a diferença entre distração comum e TDAH, aprenda a estruturar o ambiente e conheça estratégias práticas para crianças e adultos.',
    description:
      'O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) envolve desafios persistentes nas funções executivas do cérebro — como sustentação da atenção, memória operacional, planejamento, controle da impulsividade e percepção do tempo. Com estratégias visuais e ambientais adequadas, é possível reduzir o desgaste diário.',
    keyTopics: [
      'Como construir uma rotina visual eficaz para crianças com TDAH',
      'Diferença entre desatenção situacional e sinais clínicos que pedem avaliação',
      'Organização de tarefas, tempo e ambiente para adultos com TDAH',
      'Diálogo construtivo com a escola sobre dificuldades de atenção',
    ],
    whenToObserve: [
      'Esquecimentos constantes de materiais, compromissos e instruções recém-dadas (memória operacional)',
      'Dificuldade acentuada em iniciar tarefas longas ou concluir o que foi começado sem estímulo imediato',
      'Inquietação física ou mental contínua, sensação de mente acelerada e interrupção frequente na fala',
      'Sofrimento e prejuízo presente em pelo menos dois contextos (ex.: casa e escola, ou trabalho e vida doméstica)',
    ],
    practicalTips: [
      {
        title: 'Externalize a informação',
        detail:
          'Quem tem TDAH não deve depender apenas da memória mental. Quadros visíveis, checklists curtos e alarmes pontuais funcionam como suporte externo.',
      },
      {
        title: 'Quebre tarefas grandes em microetapas',
        detail:
          'Em vez de "arrume o quarto" ou "entregue o relatório", divida em blocos de 10 a 15 minutos com início e fim claros.',
      },
      {
        title: 'Reduza o atrito do ambiente',
        detail:
          'Deixar o local de estudo ou trabalho livre de distrações visuais e notificações facilita o início e a retomada do foco.',
      },
    ],
    serviceTitle: 'Atendimento Psicológico para Adultos com TDAH e Orientação Familiar (TDAH Infantil)',
    serviceSummary:
      'Psicoterapia estruturada em Terapia Cognitivo-Comportamental (TCC) para adultos com TDAH focada em organização executiva, manejo da procrastinação e autorregulação emocional, além de suporte a pais de crianças com TDAH.',
    serviceAudience: [
      'Adultos com diagnóstico ou suspeita de TDAH que enfrentam sobrecarga no trabalho, estudos e rotina doméstica',
      'Pais de crianças com TDAH que buscam implementar rotinas visuais e combinados sem brigas diárias',
      'Pessoas que convivem com a frustração crônica de começar muitos projetos e ter dificuldade em concluí-los',
    ],
    serviceHowItWorks: [
      'Mapeamento individual dos pontos de travamento na rotina (iniciação de tarefas, gestão de tempo, regulação emocional)',
      'Construção de sistemas externos de organização adaptados à realidade do paciente (sem métodos rígidos ou irreais)',
      'Acompanhamento semanal em TCC para trabalhar autocrítica, impulsividade e manutenção de hábitos possíveis',
    ],
    serviceLimits:
      'O acompanhamento psicológico desenvolve habilidades executivas e emocionais fundamentais, atuando em conjunto — quando necessário — com o acompanhamento médico psiquiátrico ou neurológico.',
    faqs: [
      {
        question: 'Se meu filho consegue passar horas focado em um jogo, ele pode ter TDAH?',
        answer:
          'Sim. O TDAH não é ausência total de atenção, mas uma dificuldade na regulação voluntária da atenção. Jogos oferecem recompensa imediata e estímulo intenso (gerando hiperfoco), enquanto tarefas escolares exigem esforço executivo sustentado.',
      },
      {
        question: 'A Terapia Cognitivo-Comportamental ajuda adultos com TDAH?',
        answer:
          'Sim. A TCC adaptada ao TDAH adulto é a abordagem psicoterápica com maior respaldo científico para desenvolver estratégias de planejamento, manejo de procrastinação e redução da autocrítica.',
      },
    ],
  },
  'dislexia-aprendizagem': {
    slug: 'dislexia-aprendizagem',
    name: 'Dislexia e Aprendizagem',
    shortTitle: 'Dislexia e Dificuldades de Aprendizagem',
    heroTitle: 'Dislexia e Dificuldades de Aprendizagem: Adaptação de Tarefas e Autoestima Escolar',
    heroSubtitle:
      'Como identificar sinais na leitura e escrita, adaptar o momento da lição de casa e proteger a autoestima da criança em parceria com a escola.',
    description:
      'Dificuldades específicas de aprendizagem, como a dislexia, afetam a forma como o cérebro processa sons da fala, decodifica letras e automatiza a leitura e a escrita — sem qualquer relação com falta de inteligência ou preguiça. O olhar acolhedor da família e da escola evita que a criança desenvolva ansiedade escolar e baixa autoestima.',
    keyTopics: [
      'Como adaptar tarefas de casa para crianças com dificuldade de leitura e escrita',
      'Sinais de alerta na alfabetização que merecem avaliação multidisciplinar',
      'Como preservar a autoestima e a motivação da criança diante dos desafios escolares',
      'Comunicação efetiva com professores e coordenação pedagógica',
    ],
    whenToObserve: [
      'Leitura muito lenta, silabada ou com trocas persistentes de letras após o período esperado de alfabetização',
      'Grande discrepância entre a capacidade de compreender assuntos explicados oralmente e o desempenho na prova escrita',
      'Cansaço extremo, dor de cabeça ou choro recorrente especificamente na hora de ler ou copiar da lousa',
      'Falas frequentes de desvalorização pessoal, como "eu sou burro" ou "não consigo aprender"',
    ],
    practicalTips: [
      {
        title: 'Valorize a compreensão oral',
        detail:
          'Leia enunciados longos junto com a criança e permita que ela explique o que entendeu com suas próprias palavras antes de cobrar a escrita.',
      },
      {
        title: 'Use apoios visuais na leitura',
        detail:
          'Réguas de leitura que isolam a linha, fontes sem serifa com maior espaçamento e textos divididos em blocos curtos diminuem a fadiga visual.',
      },
      {
        title: 'Elogie o esforço e a estratégia, não apenas a nota',
        detail:
          'Crianças com dislexia fazem o dobro de esforço para ler o mesmo parágrafo. Reconhecer essa dedicação protege a saúde emocional.',
      },
    ],
    serviceTitle: 'Acompanhamento Psicológico e Orientação para Dificuldades de Aprendizagem',
    serviceSummary:
      'Apoio psicológico voltado ao fortalecimento da autoestima escolar, manejo da ansiedade de desempenho e orientação prática aos pais e à escola sobre adaptações pedagógicas e de rotina de estudos.',
    serviceAudience: [
      'Crianças e adolescentes com dislexia ou dificuldades de aprendizagem que apresentam frustração, bloqueio ou ansiedade escolar',
      'Pais que desejam aprender como conduzir o momento da tarefa de casa sem conflitos e desgaste emocional',
      'Famílias que precisam de orientação técnica para dialogar com a escola sobre adaptações razoáveis',
    ],
    serviceHowItWorks: [
      'Avaliação inicial das demandas emocionais, escolares e da rotina de estudos da família',
      'Intervenção focada em regulação emocional, autoconceito e estratégias práticas de estudo',
      'Orientação aos pais e, quando autorizado, articulação com a equipe escolar e fonoaudiológica/psicopedagógica',
    ],
    serviceLimits:
      'O diagnóstico formal de Transtornos Específicos de Aprendizagem (como Dislexia) envolve avaliação multidisciplinar (psicologia, fonoaudiologia, psicopedagogia e neurologia).',
    faqs: [
      {
        question: 'Dificuldade de leitura é sempre dislexia?',
        answer:
          'Não necessariamente. Dificuldades na leitura podem estar ligadas a lacunas pedagógicas, alterações visuais/auditivas, TDAH, questões emocionais ou dislexia. Por isso a observação cuidadosa e a avaliação especializada são essenciais.',
      },
      {
        question: 'Como ajudar na lição de casa sem fazer pela criança?',
        answer:
          'Divida a tarefa em tempos curtos (15 minutos), leia o enunciado em voz alta para garantir que ela compreendeu a pergunta e ofereça rascunhos ou mapas visuais para organizar a resposta.',
      },
    ],
  },
  'orientacao-parental': {
    slug: 'orientacao-parental',
    name: 'Orientação Parental',
    shortTitle: 'Orientação Parental e Família-Escola',
    heroTitle: 'Orientação Parental: Combinados Familiares, Limites Respeitosos e Relação com a Escola',
    heroSubtitle:
      'Construa acordos claros em casa sem recorrer ao medo ou punições constantes e saiba como estabelecer uma parceria produtiva com a escola.',
    description:
      'Educar exige clareza, constância e acolhimento. A orientação parental oferece aos pais ferramentas práticas da Psicologia para compreender o que está por trás dos comportamentos desafiadores, criar combinados familiares funcionais e alinhar expectativas entre adultos e escola.',
    keyTopics: [
      'Como criar combinados familiares claros sem transformar a rotina em punição',
      'O que observar no comportamento da criança antes de buscar uma avaliação',
      'Como se preparar para reuniões escolares e construir parceria com professores',
      'Manejo de birras, frustrações e uso saudável de telas na infância',
    ],
    whenToObserve: [
      'Sensação de que a rotina doméstica virou uma sequência diária de gritos, ameaças e cansaço',
      'Divergência frequente entre os adultos da casa sobre como colocar limites ou acolher a criança',
      'Comunicados recorrentes da escola sobre comportamento ou atenção sem um plano claro de ação',
      'Dúvida sobre o que é esperado para a idade da criança e o que merece investigação profissional',
    ],
    practicalTips: [
      {
        title: 'Substitua ameaças vagas por combinados previsíveis',
        detail:
          'Regras funcionam melhor quando são poucas, ditas de forma positiva ("fale baixo", "guarde os blocos antes do jantar") e combinadas em momentos de calma.',
      },
      {
        title: 'Conexão antes da correção',
        detail:
          'No auge da raiva ou do choro, o cérebro infantil não processa sermões longos. Primeiro ajude a acalmar; depois converse sobre o combinado.',
      },
      {
        title: 'Vá para a reunião escolar com exemplos concretos',
        detail:
          'Levar observações de casa e perguntas objetivas transforma a reunião escolar em uma construção conjunta em vez de uma troca de cobranças.',
      },
    ],
    serviceTitle: 'Orientação Parental e Articulação Família-Escola',
    serviceSummary:
      'Sessões focadas exclusivamente nos pais ou responsáveis para estruturar combinados domésticos, reduzir conflitos na rotina, alinhar práticas educativas entre o casal/familiares e preparar o diálogo com a escola.',
    serviceAudience: [
      'Pais e mães que se sentem sobrecarregados com desafios de comportamento, rotina de sono, telas ou tarefas',
      'Famílias em processo de investigação diagnóstica que precisam saber como agir no cotidiano',
      'Responsáveis que buscam construir uma comunicação assertiva e colaborativa com a escola do filho',
    ],
    serviceHowItWorks: [
      'Levantamento dos principais pontos de conflito na rotina familiar e das tentativas já realizadas',
      'Desenho de um plano prático de combinados, organização ambiental e respostas consistentes dos adultos',
      'Acompanhamento dos resultados semana a semana com ajustes finos para a realidade daquela família',
    ],
    serviceLimits:
      'A orientação parental trabalha com os adultos responsáveis; quando identificada necessidade de avaliação ou psicoterapia direta com a criança, os encaminhamentos éticos são realizados.',
    faqs: [
      {
        question: 'Educar sem punições severas significa deixar a criança fazer tudo o que quer?',
        answer:
          'De forma alguma. Educar com respeito exige limites muito claros, previsíveis e firmes. A diferença é que o limite é ensinado por meio de estrutura, consequências lógicas e exemplo, e não pelo medo ou humilhação.',
      },
      {
        question: 'Ambos os pais precisam participar da sessão de orientação parental?',
        answer:
          'Sempre que possível, a participação dos principais cuidadores é muito rica para alinhar a linguagem em casa, mas também é possível realizar o acompanhamento individualmente com um dos responsáveis.',
      },
    ],
  },
  ansiedade: {
    slug: 'ansiedade',
    name: 'Ansiedade',
    shortTitle: 'Ansiedade em Crianças e Adultos',
    heroTitle: 'Ansiedade e Crises: Como Acolher, Regulação Emocional e Quando Buscar Ajuda',
    heroSubtitle:
      'Aprenda a reconhecer sinais físicos e emocionais da ansiedade, saiba como agir durante uma crise e conheça o papel da Terapia Cognitivo-Comportamental.',
    description:
      'A ansiedade é um sistema natural de proteção do organismo. Porém, quando o alarme interno dispara o tempo todo — gerando preocupação incontrolável, sintomas físicos intensos, esquiva de situações cotidianas ou crises de pânico —, é hora de compreender esse funcionamento e buscar suporte especializado.',
    keyTopics: [
      'Passo a passo de como ajudar uma criança durante uma crise de ansiedade',
      'Sinais que diferenciam a ansiedade normal de um quadro que precisa de psicoterapia',
      'Como funciona a Terapia Cognitivo-Comportamental (TCC) para ansiedade e pânico',
      'Estratégias de aterramento (grounding), respiração e organização de rotina',
    ],
    whenToObserve: [
      'Preocupação antecipatória constante com eventos cotidianos (ir à escola, reuniões, saúde, imprevistos)',
      'Sintomas físicos frequentes sem causa médica identificada (taquicardia, falta de ar, dor abdominal, tensão muscular)',
      'Comportamento de evitação: deixar de ir a lugares, fazer provas ou conversar por medo de passar mal ou falhar',
      'Dificuldade persistente para iniciar ou manter o sono devido ao fluxo acelerado de pensamentos',
    ],
    practicalTips: [
      {
        title: 'Na crise, priorize o corpo antes da argumentação lógica',
        detail:
          'Durante um pico de ansiedade, frases como "não precisa ficar assim" não funcionam. Diminua estímulos, fale pausadamente e guie a respiração lenta.',
      },
      {
        title: 'Cuidado com a armadilha da evitação total',
        detail:
          'Fugir sempre do que gera ansiedade traz alívio imediato, mas ensina ao cérebro que aquela situação era realmente perigosa. A exposição gradual e apoiada é o caminho seguro.',
      },
      {
        title: 'Registre os gatilhos e horários',
        detail:
          'Anotar o que aconteceu antes da ansiedade subir ajuda a identificar padrões — como privação de sono, excesso de cobrança ou transições bruscas.',
      },
    ],
    serviceTitle: 'Atendimento Psicológico para Ansiedade e Crises de Pânico (TCC)',
    serviceSummary:
      'Psicoterapia online fundamentada na Terapia Cognitivo-Comportamental (TCC) voltada à identificação de padrões de pensamento catastróficos, regulação fisiológica, manejo de crises e retomada gradual da autonomia.',
    serviceAudience: [
      'Adultos e adolescentes que convivem com ansiedade generalizada, crises de pânico, ansiedade social ou sobrecarga',
      'Pais que precisam aprender a acolher e manejar a ansiedade infantil sem reforçar o medo',
      'Pessoas que sentem que a preocupação constante está limitando suas escolhas profissionais e pessoais',
    ],
    serviceHowItWorks: [
      'Avaliação cuidadosa da história dos sintomas, gatilhos, comportamentos de segurança e impacto na rotina',
      'Psicoeducação sobre o ciclo da ansiedade e treino de estratégias práticas de regulação emocional',
      'Reestruturação cognitiva e planejamento gradual para retomar atividades evitadas com segurança',
    ],
    serviceLimits:
      'A psicoterapia não substitui avaliação médica/cardiológica para descartar causas orgânicas nem atendimento de emergência. Em crise aguda severa, acione o SAMU (192) ou ligue 188 (CVV).',
    faqs: [
      {
        question: 'Uma crise de ansiedade ou pânico pode causar um ataque cardíaco?',
        answer:
          'Embora os sintomas físicos da crise de pânico (coração disparado, falta de ar, formigamento) sejam muito intensos e assustadores, eles resultam da descarga de adrenalina da resposta de luta ou fuga e têm duração limitada. Ainda assim, uma avaliação médica inicial é sempre importante para descartar condições clínicas.',
      },
      {
        question: 'Quanto tempo dura o tratamento psicológico para ansiedade?',
        answer:
          'Na ética psicológica não há prazo fixo ou promessa de cura rápida, pois cada pessoa tem sua história e contexto. Contudo, a Terapia Cognitivo-Comportamental é uma abordagem estruturada e focada em objetivos, permitindo que o paciente aprenda ferramentas práticas desde as primeiras semanas.',
      },
    ],
  },
}

export const CATEGORY_LIST: CategoryHubData[] = Object.values(CATEGORY_HUBS)
