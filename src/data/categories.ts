export type CategorySlug =
  | 'depressao'
  | 'ansiedade'
  | 'panico'
  | 'compulsao-alimentar'
  | 'toc'
  | 'relacionamentos-narcisismo'
  | 'tdah-adulto'
  | 'materiais-psicologos'
  | 'saude-mental'
  | 'autismo'
  | 'tdah'
  | 'dislexia-aprendizagem'
  | 'orientacao-parental'

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
  depressao: {
    slug: 'depressao',
    name: 'Depressão no Adulto',
    shortTitle: 'Depressão e Desânimo Persistente',
    heroTitle: 'Depressão no Adulto: Psicoeducação, Ativação Comportamental e TCC',
    heroSubtitle:
      'Compreenda o ciclo da apatia e perda de prazer, saiba diferenciar tristeza passageira de depressão clínica e conheça passos práticos da psicoterapia baseada em evidências.',
    description:
      'A depressão não é fraqueza pessoal ou falta de vontade. É um transtorno do humor complexo que afeta a neurobiologia, os padrões de pensamento e os níveis de energia do adulto. A Terapia Cognitivo-Comportamental (TCC) associada à Ativação Comportamental oferece ferramentas concretas para quebrar a inércia e reconstruir o senso de realização e prazer.',
    keyTopics: [
      'Diferença entre tristeza situacional, luto e episódio depressivo maior',
      'Como a Ativação Comportamental ajuda a recuperar a energia no dia a dia',
      'Identificação de pensamentos de desesperança e autocrítica severa',
      'Integração entre acompanhamento psicológico e suporte psiquiátrico ético',
    ],
    whenToObserve: [
      'Perda de interesse ou prazer (anedonia) em atividades que antes eram prazerosas por mais de 2 semanas',
      'Fadiga crônica, lentidão psicomotora e sensação de peso no corpo mesmo após horas de sono',
      'Sentimentos desproporcionais de inutilidade, culpa excessiva ou autorrecriminação',
      'Dificuldade acentuada de concentração, tomada de decisão e isolamento social progressivo',
    ],
    practicalTips: [
      {
        title: 'Microações antes da motivação',
        detail:
          'Na depressão, a vontade não vem antes da ação. Planejar microtarefas de 5 minutos (como levantar da cama e abrir a janela) aciona circuitos dopaminérgicos e rompe a espiral de inércia.',
      },
      {
        title: 'Mapeie o termômetro de prazer e domínio',
        detail:
          'Avalie as atividades da semana de 0 a 10 em "prazer" e "senso de conclusão". Mesmo pequenas tarefas concluídas ajudam a reorganizar a percepção de eficácia.',
      },
      {
        title: 'Cuidado com a ruminação reflexiva no isolamento',
        detail:
          'Ficar deitado repassando problemas sem agir aprofunda a desesperança. O movimento físico leve e o contato com a luz solar estimulam a regulação circadiana.',
      },
    ],
    serviceTitle: 'Psicoterapia Individual para Adultos com Depressão (TCC)',
    serviceSummary:
      'Acompanhamento clínico estruturado com protocolos de Ativação Comportamental e Reestruturação Cognitiva, voltado a restabelecer a rotina, o bem-estar e o sentido de propósito.',
    serviceAudience: [
      'Adultos convivendo com tristeza persistente, apatia, anedonia e sobrecarga existencial',
      'Pessoas com episódios depressivos recorrentes que buscam prevenir recaídas',
      'Adultos em tratamento psiquiátrico conjunto que necessitam de intervenção psicológica focada',
    ],
    serviceHowItWorks: [
      'Avaliação diagnóstica funcional e mapeamento de rotinas, gatilhos e crenças centrais',
      'Construção de cronograma gradual de ativação comportamental adaptado à energia atual',
      'Reestruturação de pensamentos automáticos disfuncionais e plano de manutenção de ganhos',
    ],
    serviceLimits:
      'A psicoterapia online é um cuidado contínuo estruturado. Em casos de ideação suicida ativa ou crise emergencial, ligue imediatamente 188 (CVV gratuito 24h) ou procure o pronto-socorro.',
    faqs: [
      {
        question: 'É possível tratar depressão apenas com psicoterapia?',
        answer:
          'Em quadros leves a moderados, a TCC isolada é frequentemente eficaz. Em quadros moderados a graves, a combinação de psicoterapia com acompanhamento psiquiátrico apresenta os maiores índices de remissão sustentada.',
      },
      {
        question: 'Quanto tempo leva para sentir os primeiros efeitos da TCC na depressão?',
        answer:
          'Com a Ativação Comportamental e pequenos acordos semanais, muitos pacientes relatam alívio na sensação de paralisia já no primeiro mês de acompanhamento.',
      },
    ],
  },
  ansiedade: {
    slug: 'ansiedade',
    name: 'Ansiedade & Preocupação Crônica',
    shortTitle: 'Ansiedade e Transtorno de Ansiedade Generalizada (TAG)',
    heroTitle: 'Ansiedade em Adultos: Regulação Fisiológica, Manejo de Preocupações e TCC',
    heroSubtitle:
      'Aprenda a desarmar o alarme falso do sistema nervoso, manejar pensamentos catastróficos e recuperar sua qualidade de vida com a TCC.',
    description:
      'A ansiedade é um mecanismo natural de sobrevivência, mas quando se torna crônica e desproporcional, transforma o dia a dia em uma constante antecipação de catástrofes. Em adultos, manifesta-se através de tensão muscular, insônia, ruminações sobre o futuro e esgotamento mental.',
    keyTopics: [
      'Ciclo da ansiedade: gatilho, interpretação catastrófica e resposta de luta/fuga',
      'Técnicas de respiração diafragmática e relaxamento muscular progressivo',
      'Diferença entre preocupação produtiva e ruminação improdutiva',
      'Exposição gradual sem comportamentos de esquiva protetiva',
    ],
    whenToObserve: [
      'Preocupação excessiva e de difícil controle sobre múltiplos temas cotidianos por pelo menos 6 meses',
      'Inquietação motora, sensação de "nervos à flor da pele" e facilidade para se assustar',
      'Tensão muscular crônica nos ombros, mandíbula travada ou dores de cabeça tensionais',
      'Dificuldade para desligar a mente à noite e sono não reparador',
    ],
    practicalTips: [
      {
        title: 'Adie o momento da preocupação',
        detail:
          'Crie a "hora da preocupação" (15 min no final da tarde). Quando um pensamento ansioso surgir ao longo do dia, anote-o para analisar apenas no horário reservado.',
      },
      {
        title: 'Questione as evidências do pior cenário',
        detail:
          'Pergunte-se: "Qual é a probabilidade real de isso acontecer?" e "Se acontecesse, quais recursos eu teria para lidar com isso?".',
      },
      {
        title: 'Ancore-se no presente com a técnica 5-4-3-2-1',
        detail:
          'Nomeie 5 coisas que você vê, 4 que toca, 3 que ouve, 2 que cheira e 1 sabor na boca para trazer o córtex de volta ao momento presente.',
      },
    ],
    serviceTitle: 'Atendimento Psicológico para Adultos com Ansiedade (TAG & Fobias)',
    serviceSummary:
      'Psicoterapia online baseada em TCC voltada para identificação de distorções cognitivas, dessensibilização sistemática e reequilíbrio do sistema de alerta.',
    serviceAudience: [
      'Adultos que convivem com ansiedade generalizada, ansiedade social ou estresse pós-traumático',
      'Profissionais que sentem a mente hiperativa afetando desempenho e tomada de decisões',
      'Pessoas com sintomas físicos frequentes decorrentes de sobrecarga ansiosa crônica',
    ],
    serviceHowItWorks: [
      'Mapeamento dos gatilhos e dos comportamentos de segurança que mantêm a ansiedade',
      'Treino em consultório virtual de regulação autonômica e respiração ritmada',
      'Reestruturação cognitiva e experimentos comportamentais graduais',
    ],
    serviceLimits:
      'A psicoterapia requer avaliação clínica prévia para descartar alterações tireoidianas ou cardiológicas causadoras de sintomas semelhantes.',
    faqs: [
      {
        question: 'A ansiedade tem cura definitiva?',
        answer:
          'A ansiedade é uma emoção humana essencial e não deve ser eliminada. O objetivo da terapia é reduzir a ansiedade patológica a níveis funcionais, para que ela deixe de comandar suas escolhas.',
      },
      {
        question: 'Quantas sessões são necessárias?',
        answer:
          'Na TCC os objetivos são estabelecidos conjuntamente desde o início, permitindo avaliar a evolução semana a semana de forma transparente.',
      },
    ],
  },
  panico: {
    slug: 'panico',
    name: 'Síndrome do Pânico & Agorafobia',
    shortTitle: 'Síndrome do Pânico e Crises Agudas',
    heroTitle: 'Síndrome do Pânico no Adulto: Manejo de Crises Agudas e Dessensibilização',
    heroSubtitle:
      'Entenda por que a crise de pânico não causa infarto nem loucura, perca o medo dos próprios sintomas físicos e recupere sua liberdade de ir e vir.',
    description:
      'O Transtorno de Pânico é marcado por crises súbitas e inesperadas de medo intenso acompanhadas por sintomas autonômicos violentos (taquicardia, falta de ar, vertigem, sensação de desmaio ou desrealização). O maior sofrimento costuma ser a "ansiedade antecipatória" — o medo contínuo de ter uma nova crise.',
    keyTopics: [
      'A anatomia do ataque de pânico: pico autonômico e curva de 15 a 20 minutos',
      'Por que os sintomas físicos assustam mas não são perigosos',
      'Interocepção e dessensibilização de sensações corporais temidas na TCC',
      'Manejo da Agorafobia e reconquista de espaços abertos, trânsito e aglomerações',
    ],
    whenToObserve: [
      'Crises repentinas de taquicardia, sufocamento e tremor sem motivo aparente',
      'Sensação recorrente de morte iminente, infarto ou perda de controle ("enlouquecer")',
      'Evitação de lugares dos quais seria difícil escapar em caso de crise (shoppings, metrô, estradas)',
      'Necessidade de andar sempre acompanhado ou carregando água/remédios como talismã',
    ],
    practicalTips: [
      {
        title: 'Lembre-se da curva natural da adrenalina',
        detail:
          'Todo pico de adrenalina se esgota biologicamente em cerca de 10 a 20 minutos. A crise sempre passa, mesmo que você não faça nada para contê-la.',
      },
      {
        title: 'Não hiperventile tentando respirar fundo demais',
        detail:
          'Respirar muito ar rápido na crise diminui o CO2 no sangue e causa tontura e formigamento. Foque em soltar o ar devagar pela boca, esvaziando o peito.',
      },
      {
        title: 'Elimine os comportamentos de segurança gradualmente',
        detail:
          'Depender de checagens constantes de pulso e pressão mantém a crença errônea de que o coração está em perigo constante.',
      },
    ],
    serviceTitle: 'Tratamento Psicológico para Transtorno de Pânico e Agorafobia',
    serviceSummary:
      'Protocolo clínico padrão-ouro da TCC para Transtorno de Pânico com psicoeducação interoceptiva, quebra de catastrofização corporal e exposição planejada.',
    serviceAudience: [
      'Adultos com histórico de visitas frequentes a prontos-socorros com exames normais',
      'Pessoas com medo constante de ter novos ataques em locais públicos ou sozinhas',
      'Adultos cuja rotina e autonomia de locomoção foram restringidas pela agorafobia',
    ],
    serviceHowItWorks: [
      'Psicoeducação detalhada sobre a fisiologia da hiperventilação e adrenalina',
      'Exercícios de exposição interoceptiva para tolerar e reinterpretar as sensações corporais',
      'Hierarquia gradual de retorno a locais evitados até a extinção do medo',
    ],
    serviceLimits:
      'Exames cardiológicos recentes são sempre recomendados antes de iniciar os exercícios de exposição física para total segurança do paciente.',
    faqs: [
      {
        question: 'Um ataque de pânico pode parar meu coração?',
        answer:
          'Não. O sistema cardiovascular humano é biologicamente preparado para acelerações causadas por exercício e picos de adrenalina sem risco de parada em pessoas saudáveis.',
      },
      {
        question: 'Como a TCC atua no pânico?',
        answer:
          'A TCC ensina o paciente a desarmar a interpretação catastrófica do sintoma, impedindo que o medo da taquicardia gere ainda mais taquicardia.',
      },
    ],
  },
  'compulsao-alimentar': {
    slug: 'compulsao-alimentar',
    name: 'Compulsão Alimentar',
    shortTitle: 'Transtorno da Compulsão Alimentar (TCA)',
    heroTitle: 'Compulsão Alimentar em Adultos: Comer Emocional, Ciclo da Culpa e TCC',
    heroSubtitle:
      'Compreenda os gatilhos emocionais dos episódios compulsivos, rompa a mentalidade de dietas restritivas e desenvolva uma relação pacífica com a alimentação.',
    description:
      'O Transtorno da Compulsão Alimentar (TCA) caracteriza-se por episódios recorrentes de ingestão de grandes quantidades de comida em curto espaço de tempo, acompanhados por sensação de perda de controle e profundo sentimento de culpa, vergonha ou angústia posterior — sem uso regular de métodos compensatórios purgativos.',
    keyTopics: [
      'O ciclo restrição-compulsão: como dietas radicais disparam crises fisiológicas',
      'Fome fisiológica vs. fome emocional: aprendendo a nomear o vazio interno',
      'Técnicas de tolerância ao mal-estar emocional (Terapia Dialética Comportamental - DBT)',
      'Registro alimentar consciente e reestruturação da imagem corporal',
    ],
    whenToObserve: [
      'Comer muito mais rapidamente do que o habitual até sentir desconforto físico no estômago',
      'Comer grandes quantidades de alimento mesmo sem sentir fome física',
      'Comer sozinho ou às escondidas por vergonha da quantidade ingerida',
      'Sentimento avassalador de nojo de si mesmo, depressão ou culpa severa após o episódio',
    ],
    practicalTips: [
      {
        title: 'Abandone a mentalidade do "tudo ou nada"',
        detail:
          'Comer um doce não significa que o dia está "perdido" e que você deve comer até passar mal. O perdão e a flexibilidade impedem a escalada do episódio.',
      },
      {
        title: 'Crie um intervalo de 15 minutos entre o impulso e a ação',
        detail:
          'No momento da urgência em comer, beba água, saia da cozinha e nomeie a emoção subjacente (tédio, raiva, solidão ou estresse).',
      },
      {
        title: 'Coma com atenção plena (Mindful Eating)',
        detail:
          'Coma sentado à mesa sem telas ligadas, saboreando cada garfada para permitir que os sinais naturais de saciedade cheguem ao cérebro.',
      },
    ],
    serviceTitle: 'Psicoterapia para Compulsão Alimentar e Comer Emocional',
    serviceSummary:
      'Tratamento especializado em TCC para Transtornos Alimentares com foco na identificação de gatilhos, flexibilização cognitiva e desenvolvimento de repertório para lidar com emoções difíceis.',
    serviceAudience: [
      'Adultos que sentem perda de controle frequente ao se alimentar',
      'Pessoas presas no ciclo vicioso de dietas restritivas seguidas por episódios de descontrole',
      'Indivíduos que utilizam a comida como principal anestésico para ansiedade e estresse',
    ],
    serviceHowItWorks: [
      'Análise em cadeia de episódios de compulsão para identificar elos de vulnerabilidade',
      'Estratégias de regulação emocional e substituição de comportamentos automáticos',
      'Trabalho conjunto e comunicação ética com o nutricionista/médico do paciente',
    ],
    serviceLimits:
      'O acompanhamento psicológico é fundamental e atua de maneira complementar ao suporte nutricional especializado e médico endocrinológico/psiquiátrico.',
    faqs: [
      {
        question: 'Compulsão alimentar é falta de vergonha na cara?',
        answer:
          'Absolutamente não. É um transtorno psiquiátrico reconhecido no DSM-5-TR que envolve circuitos cerebrais de recompensa e regulação do humor.',
      },
      {
        question: 'Preciso parar de fazer dietas para tratar a compulsão?',
        answer:
          'Sim. Restrições alimentares extremas são o principal gatilho biológico e psicológico para a maioria dos episódios compulsivos.',
      },
    ],
  },
  toc: {
    slug: 'toc',
    name: 'Transtorno Obsessivo-Compulsivo (TOC)',
    shortTitle: 'TOC: Obsessões e Compulsões',
    heroTitle: 'TOC no Adulto: Prevenção de Resposta (EPR), Dúvidas Patológicas e TCC',
    heroSubtitle:
      'Entenda como as obsessões e rituais mantêm o ciclo da angústia e conheça a Exposição com Prevenção de Resposta (EPR), o tratamento padrão-ouro.',
    description:
      'O TOC não é apenas mania de organização. É um transtorno caracterizado por pensamentos, impulsos ou imagens intrusivas recorrentes (obsessões) que causam intensa ansiedade, levando a comportamentos repetitivos ou atos mentais (compulsões/rituais) com o objetivo ilusório de prevenir um desastre ou aliviar a aflição.',
    keyTopics: [
      'A anatomia do TOC: obsessão intrusiva, ansiedade e alívio temporário pelo ritual',
      'Exposição com Prevenção de Resposta (EPR): o protocolo com maior respaldo científico',
      'Tipos de TOC: checagem, contaminação, simetria, pensamentos tabus (agressivos/sexuais) e hiperresponsabilidade',
      'Como a busca constante por reasseguramento ("certeza absoluta") alimenta a dúvida patológica',
    ],
    whenToObserve: [
      'Pensamentos intrusivos perturbadores que entram na mente contra a sua vontade gerando nojo ou pânico',
      'Necessidade incontrolável de checar fechaduras, gás, tomadas repetidas vezes antes de sair',
      'Rituais mentais secretos (repetir frases, orações, números na mente para evitar que algo ruim aconteça)',
      'Mais de 1 hora por dia gasta em rituais, com prejuízo evidente no trabalho, rotina e relações',
    ],
    practicalTips: [
      {
        title: 'Tolere a incerteza em vez de buscar a certeza 100%',
        detail:
          'O cérebro com TOC exige 100% de garantia sobre tudo. O progresso terapêutico está em dizer para si mesmo: "Posso conviver com a possibilidade de 0,1% de risco sem checar".',
      },
      {
        title: 'Atrase o ritual por 5 minutos',
        detail:
          'Quando o impulso de verificar ou lavar as mãos surgir, adie a ação por alguns minutos. Isso demonstra que você é capaz de tolerar o desconforto temporário.',
      },
      {
        title: 'Diferencie pensamento de ação (Fusão Pensamento-Ação)',
        detail:
          'Pensar em algo horrível não significa que você deseja aquilo ou que aquilo vai se concretizar. Pensamentos são apenas eventos mentais passageiros.',
      },
    ],
    serviceTitle: 'Atendimento Psicológico Especializado em TOC (Protocolo EPR)',
    serviceSummary:
      'Psicoterapia fundamentada no protocolo de Exposição e Prevenção de Resposta (EPR) em TCC, estruturado para quebrar a dependência dos rituais e reconquistar o tempo livre.',
    serviceAudience: [
      'Adultos com rituais de checagem, limpeza, contaminação ou simetria que consomem horas do dia',
      'Pessoas sofrendo com pensamentos intrusivos tabus que geram culpa e vergonha paralisante',
      'Adultos que vivem pedindo que familiares confirmem que "está tudo bem" para se acalmar',
    ],
    serviceHowItWorks: [
      'Mapeamento completo da hierarquia de obsessões e rituais do paciente',
      'Psicoeducação sobre fusão cognitiva e o paradoxo do controle do pensamento',
      'Sessões planejadas de exposição gradual com prevenção sistemática do ritual',
    ],
    serviceLimits:
      'Em quadros severos de TOC, a combinação da psicoterapia com tratamento farmacológico prescrito por psiquiatra amplia expressivamente os índices de sucesso.',
    faqs: [
      {
        question: 'Ter pensamentos ruins significa que sou uma pessoa má?',
        answer:
          'Não. O fato de você se sentir tão angustiado com esses pensamentos intrusivos prova exatamente o contrário: que eles são ego-distônicos (contrários aos seus verdadeiros valores).',
      },
      {
        question: 'O que é Prevenção de Resposta?',
        answer:
          'É a técnica em que o paciente entra em contato com o pensamento disparador da ansiedade sem executar o ritual compulsivo de alívio, até que o cérebro aprenda que a ansiedade baixa por si só.',
      },
    ],
  },
  'relacionamentos-narcisismo': {
    slug: 'relacionamentos-narcisismo',
    name: 'Narcisismo & Vínculos Tóxicos',
    shortTitle: 'Relações Abusivas, Narcisismo e Recuperação Emocional',
    heroTitle: 'Narcisismo e Relações Tóxicas no Adulto: Resgate da Autonomia e Limites',
    heroSubtitle:
      'Identifique dinâmicas de gaslighting, dependência emocional e manipulação em relacionamentos afetivos, familiares ou profissionais e reconstrua sua autoestima.',
    description:
      'Conviver com parceiros, familiares ou chefes com traços de Transtorno da Personalidade Narcisista pode provocar erosão profunda da autoestima, hipervigilância, confusão mental crônica e isolamento social. O trabalho psicoterápico foca na validação da realidade, corte de vínculos abusivos e resgate da própria voz.',
    keyTopics: [
      'O ciclo do abuso narcisista: idealização (love bombing), desvalorização e descarte',
      'Identificando técnicas de manipulação: gaslighting, culpa invertida e triangulação',
      'Diferença entre conflitos normais de relacionamento e padrões crônicos de invalidação',
      'Contato Zero (No Contact) e Pedra Cinza (Grey Rock): estratégias de proteção psicológica',
    ],
    whenToObserve: [
      'Constante sensação de estar "pisando em ovos" para não disparar a fúria ou o silêncio punitivo do outro',
      'Dúvida permanente sobre a própria sanidade e memória após discussões (gaslighting)',
      'Isolamento gradual de amigos e parentes para evitar ciúmes patológicos ou críticas do parceiro',
      'Sensação de que suas necessidades nunca têm espaço e que você é o único culpado por tudo que dá errado',
    ],
    practicalTips: [
      {
        title: 'Mantenha registros objetivos da realidade',
        detail:
          'Diante do gaslighting frequente, anote conversas e fatos em um caderno privativo para não permitir que o outro reescreva o que realmente ocorreu.',
      },
      {
        title: 'Pratique a técnica da "Pedra Cinza" quando o contato for obrigatório',
        detail:
          'Se você tem filhos ou trabalha com a pessoa, seja monossilábico, desprovido de reações emocionais e puramente factual. Manipuladores se alimentam da sua reação.',
      },
      {
        title: 'Não tente convencer o manipulador da sua dor',
        detail:
          'Expor sua vulnerabilidade para quem tem traços narcisistas serve apenas como munição para futuros ataques. Guarde seus sentimentos para quem é seguro.',
      },
    ],
    serviceTitle: 'Apoio Psicológico para Sobreviventes de Relacionamentos Abusivos',
    serviceSummary:
      'Espaço clínico acolhedor e seguro para adultos reconstruírem sua identidade, estabelecerem limites inegociáveis e superarem o trauma de vínculos tóxicos e narcisistas.',
    serviceAudience: [
      'Adultos que saíram ou estão tentando sair de relações afetivas disfuncionais e manipuladoras',
      'Filhos adultos de mães ou pais narcisistas que enfrentam culpa crônica e dificuldade para dizer "não"',
      'Pessoas em sofrimento por ambientes corporativos tóxicos e assédio moral persistente',
    ],
    serviceHowItWorks: [
      'Validação das vivências sem revitimização, desfazendo a confusão causada pelo gaslighting',
      'Fortalecimento de recursos de assertividade, estabelecimento de limites e plano de segurança',
      'Reconstrução da autoestima e treino de identificação precoce de bandeiras vermelhas (red flags)',
    ],
    serviceLimits:
      'A psicoterapia foca no autocuidado e na saúde mental do paciente adulto; não realizamos diagnósticos de terceiros ausentes na sessão nem terapia de casal em contextos de violência ativa.',
    faqs: [
      {
        question: 'Uma pessoa narcisista pode mudar com terapia?',
        answer:
          'Mudanças profundas exigem autocrítica genuína e empatia — características muito raras no transtorno narcisista. O foco da terapia deve ser a proteção e recuperação de quem sofreu os impactos da convivência.',
      },
      {
        question: 'O que é trauma bond (vínculo traumático)?',
        answer:
          'É uma ligação psicológica intensa provocada por ciclos alternados de recompensa (afeto extremo) e punição (rejeição repentina), que funciona biologicamente como um vício químico difícil de quebrar.',
      },
    ],
  },
  'tdah-adulto': {
    slug: 'tdah-adulto',
    name: 'TDAH em Adultos',
    shortTitle: 'TDAH Adulto e Funções Executivas',
    heroTitle: 'TDAH na Vida Adulta: Organização, Procrastinação e Funções Executivas',
    heroSubtitle:
      'Aprenda a lidar com esquecimentos, regulação de foco e sobrecarga profissional com sistemas externos adaptados à mente neurodivergente.',
    description:
      'O TDAH no adulto muitas vezes passa anos despercebido, sendo confundido com preguiça, desleixo ou ansiedade generalizada. Manifesta-se no cotidiano corporativo e doméstico como dificuldade em priorizar tarefas, impulsividade financeira e verbal, perda crônica de prazos e hiperfoco desregulado.',
    keyTopics: [
      'Desafios executivos do TDAH adulto: memória de trabalho, iniciação e percepção do tempo',
      'Como manejar a procrastinação decorrente da falta de dopamina basal',
      'Organização do ambiente de trabalho e métodos de redução de atrito mental',
      'Impacto do TDAH nos relacionamentos amorosos e na gestão financeira pessoal',
    ],
    whenToObserve: [
      'Histórico de começar dezenas de projetos com empolgação intensa e abandonar logo em seguida',
      'Sensação de que o esforço despendido no trabalho é o dobro do dos colegas para entregar o mesmo resultado',
      'Esquecimentos frequentes de compromissos importantes, contas a pagar e prazos cruciais',
      'Dificuldade em manter o foco em reuniões longas acompanhada por impulsividade na fala',
    ],
    practicalTips: [
      {
        title: 'Externalize toda a memória operacional',
        detail:
          'Não guarde tarefas na cabeça. Anote imediatamente em um quadro visível ou aplicativo de fácil acesso com alarmes sonoros pontuais.',
      },
      {
        title: 'Use a técnica do "Body Doubling" (Duplicação Corporal)',
        detail:
          'Trabalhar ao lado de outra pessoa em silêncio (ou em salas virtuais de foco mútuo) reduz drasticamente a procrastinação da mente com TDAH.',
      },
      {
        title: 'Fragmente tarefas em blocos de 15 minutos com timers visuais',
        detail:
          'Engane a resistência cerebral combinando fazer apenas 15 minutos. Na grande maioria das vezes, superar a barreira da iniciação é o suficiente.',
      },
    ],
    serviceTitle: 'Atendimento Psicológico e Treino Executivo para Adultos com TDAH',
    serviceSummary:
      'Acompanhamento em TCC adaptada ao TDAH adulto focado em gestão do tempo, controle de impulsos e desenvolvimento de estratégias práticas e realistas.',
    serviceAudience: [
      'Adultos diagnosticados recentemente que buscam compreender seu funcionamento neurológico',
      'Profissionais que sentem seu crescimento de carreira travado por problemas de organização',
      'Pessoas com suspeita clínica de TDAH que buscam alinhamento de condutas e estratégias',
    ],
    serviceHowItWorks: [
      'Mapeamento dos gargalos específicos da rotina (manhãs difíceis, prazos, desorganização financeira)',
      'Construção de rotinas externas sem métodos rígidos ou burocráticos demais',
      'Trabalho de regulação emocional e manejo da autocrítica construída ao longo dos anos',
    ],
    serviceLimits:
      'O acompanhamento psicológico é fundamental e atua de maneira sinérgica com a avaliação neuropsicológica e a conduta médica psiquiátrica.',
    faqs: [
      {
        question: 'É possível ter TDAH e ainda assim conseguir ler um livro inteiro de uma vez?',
        answer:
          'Sim! Isso é o "hiperfoco", uma característica marcante do TDAH: dificuldade de regular a atenção para o que é entediante, mas capacidade de foco extremo no que traz recompensa dopaminérgica imediata.',
      },
      {
        question: 'Adulto pode desenvolver TDAH do nada?',
        answer:
          'Não. O TDAH é um transtorno do neurodesenvolvimento e seus traços já existiam na infância, mesmo que tenham sido mascarados por inteligência ou apoio familiar até a vida adulta.',
      },
    ],
  },
  'materiais-psicologos': {
    slug: 'materiais-psicologos',
    name: 'Recursos para Psicólogos',
    shortTitle: 'Materiais Clínicos e Prática Profissional',
    heroTitle: 'Acervo Clínico para Psicólogos: Protocolos TCC, RPDs e Pranchas Terapêuticas',
    heroSubtitle:
      'Ferramentas práticas prontas para download e impressão para enriquecer suas sessões com pacientes adultos, anamneses e psicoeducação estruturada.',
    description:
      'Desenvolvemos recursos visuais, formulários de registro cognitivo e roteiros estruturados para apoiar a atuação clínica de psicólogos e psicólogas. Materiais rigorosamente fundamentados na Terapia Cognitivo-Comportamental e nas resoluções éticas do Conselho Federal de Psicologia (CFP).',
    keyTopics: [
      'Registros de Pensamentos Disfuncionais (RPD) simplificados e visuais para adultos',
      'Modelos de anamnese inicial clínica e contrato terapêutico em conformidade com o CFP',
      'Protocolos psicoeducativos visuais sobre depressão, pânico, ansiedade e compulsão alimentar',
      'Termômetros de regulação emocional, cartões de enfrentamento e diários de monitoramento',
    ],
    whenToObserve: [
      'Necessidade de tornar conceitos abstratos da TCC compreensíveis para o paciente adulto',
      'Busca por padronização e profissionalismo nos registros clínicos do consultório',
      'Desejo de entregar tarefas de casa e fichas de monitoramento elegantes e funcionais',
      'Otimização do tempo na preparação de sessões e na conceitualização cognitiva de casos',
    ],
    practicalTips: [
      {
        title: 'Use a psicoeducação visual para acelerar a adesão',
        detail:
          'Mostrar o modelo cognitivo em diagramas impressos ajuda o paciente a entender rapidamente como pensamentos geram emoções e reações fisiológicas.',
      },
      {
        title: 'Entregue cópias físicas nas sessões presenciais e PDFs digitais nas online',
        detail:
          'Pacientes adultos retêm melhor as instruções quando têm um registro claro para consultar nos momentos de crise entre uma sessão e outra.',
      },
      {
        title: 'Customize os registros para o nível de letramento do paciente',
        detail:
          'Prefira formatos objetivos e diretos, evitando jargões técnicos excessivos nas folhas de tarefas entre sessões.',
      },
    ],
    serviceTitle: 'Supervisão Clínica e Mentoria para Psicólogos',
    serviceSummary:
      'Espaço de supervisão clínica ética e orientação prática para psicólogos iniciantes ou que desejam aprofundar seu manejo em TCC para demandas de adultos.',
    serviceAudience: [
      'Psicólogos recém-formados iniciando seus atendimentos clínicos online ou presenciais',
      'Profissionais que atendem adultos com demandas de ansiedade, pânico, TOC ou TDAH',
      'Psicólogas que buscam estruturar seu modelo de prontuário e psicoeducação com pacientes',
    ],
    serviceHowItWorks: [
      'Discussão minuciosa de casos clínicos resguardando integralmente o sigilo ético do paciente',
      'Revisão da conceitualização cognitiva e escolha conjunta das melhores técnicas de intervenção',
      'Orientação sobre ética profissional, enquadre terapêutico e manejo de situações difíceis',
    ],
    serviceLimits:
      'A supervisão clínica é uma consultoria técnico-pedagógica e não substitui a responsabilidade técnica do psicólogo assistente perante seu CRP.',
    faqs: [
      {
        question: 'Os materiais em PDF têm licença para eu usar com meus pacientes?',
        answer:
          'Sim! Todos os materiais do acervo para psicólogos incluem licença de uso clínico ilimitado para você imprimir e entregar para seus pacientes em consultório ou enviar digitalmente.',
      },
      {
        question: 'Como funciona a supervisão clínica online?',
        answer:
          'Acontece por videochamada individual de 50 minutos agendada com a Psicóloga Maria do Socorro (CRP 24/02327), focando nos casos que você trouxer para estudo.',
      },
    ],
  },
  'saude-mental': {
    slug: 'saude-mental',
    name: 'Saúde Mental do Adulto',
    shortTitle: 'Saúde Mental & Bem-Estar',
    heroTitle: 'Saúde Mental no Adulto: Psicoeducação, Regulação Emocional e Cuidado Ético',
    heroSubtitle:
      'Compreenda sinais de esgotamento e sobrecarga, saiba como preparar sua primeira consulta psicológica e conheça caminhos seguros da ciência psicológica.',
    description:
      'O cuidado com a saúde mental envolve compreender como pensamentos, emoções, ambiente familiar e rotina interagem no dia a dia. Nosso objetivo é oferecer informação clara, livre de sensacionalismo e fundamentada na Psicologia baseada em evidências.',
    keyTopics: [
      'Quando procurar acompanhamento psicológico para adultos e o que esperar da primeira sessão',
      'Regulação emocional e manejo de estresse crônico no trabalho e na vida pessoal',
      'Diferença entre sofrimento emocional passageiro e sinais clínicos que merecem intervenção',
      'Ética, sigilo profissional (CFP) e proteção de dados no atendimento psicológico online',
    ],
    whenToObserve: [
      'Mudanças persistentes no padrão de sono, apetite ou energia por várias semanas seguidas',
      'Irritabilidade intensa, choro fácil ou sensação constante de esgotamento mental e físico',
      'Prejuízos recorrentes no trabalho, nas finanças ou na convivência com pessoas queridas',
      'Dificuldade em lidar com transições de vida, luto ou exigências cotidianas',
    ],
    practicalTips: [
      {
        title: 'Observe frequência, duração e impacto',
        detail:
          'Antes de tirar conclusões precipitadas, anote há quanto tempo o sofrimento ocorre e em quais áreas da vida ele mais interfere.',
      },
      {
        title: 'Separe acolhimento de autojulgamento',
        detail:
          'Reconhecer que você está sobrecarregado não é fraqueza. É o primeiro passo racional para buscar suporte qualificado.',
      },
      {
        title: 'Evite autodiagnósticos precipitados por redes sociais',
        detail:
          'Vídeos rápidos de internet não substituem uma escuta clínica qualificada que considera sua história singular de vida.',
      },
    ],
    serviceTitle: 'Psicoterapia Individual Online para Adultos (TCC)',
    serviceSummary:
      'Espaço clínico sigiloso e acolhedor, fundamentado na Terapia Cognitivo-Comportamental (TCC), voltado à compreensão das dificuldades emocionais e construção de estratégias práticas de enfrentamento.',
    serviceAudience: [
      'Adultos que enfrentam sobrecarga emocional, estresse crônico, tristeza persistente ou dificuldades de adaptação',
      'Pessoas que procuram atendimento psicológico online ético, estruturado e com horário agendado',
      'Profissionais que buscam desenvolver autorregulação e autoconhecimento sólido',
    ],
    serviceHowItWorks: [
      'Sessão inicial de acolhimento e levantamento de história clínica e contexto atual (50 minutos)',
      'Definição colaborativa de objetivos terapêuticos claros e realistas',
      'Encontros semanais por videochamada segura, respeitando a Resolução CFP nº 11/2018',
    ],
    serviceLimits:
      'O atendimento psicológico online não substitui atendimento médico ou psiquiátrico de urgência. Em situações de crise aguda ou risco imediato à vida, procure o pronto-socorro mais próximo, acione o SAMU (192) ou ligue para o CVV (188).',
    faqs: [
      {
        question: 'Como saber se preciso de psicoterapia ou apenas descansar?',
        answer:
          'Quando o descanso, fins de semana ou férias não aliviam o esgotamento, e os pensamentos continuam gerando sofrimento diário, a psicoterapia é indicada.',
      },
      {
        question: 'O atendimento online tem a mesma validade ética que o presencial?',
        answer:
          'Sim. O atendimento psicológico online é regulamentado pelo Conselho Federal de Psicologia (Resolução CFP nº 11/2018) e segue os mesmos princípios de sigilo e rigor técnico.',
      },
    ],
  },
  // Hubs de compatibilidade para rotas legadas
  autismo: {
    slug: 'autismo',
    name: 'TEA & Neurodivergência',
    shortTitle: 'TEA e Recursos Terapêuticos',
    heroTitle: 'Autismo e Neurodivergência: Materiais de Apoio e Recursos Clínicos',
    heroSubtitle:
      'Recursos visuais, pranchas e guias terapêuticos para psicólogos utilizarem em suas intervenções e para adultos no espectro.',
    description:
      'Espaço de psicoeducação sobre o espectro autista e acervo de recursos terapêuticos de apoio para profissionais de saúde e adultos neurodivergentes.',
    keyTopics: [
      'Recursos terapêuticos e apoio visual para consultórios de psicologia',
      'Compreensão do TEA em adultos e caminhos diagnósticos',
      'Comunicação alternativa e ferramentas práticas para psicólogos',
      'Manejo de sobrecarga sensorial e desregulação emocional',
    ],
    whenToObserve: [
      'Sobrecarga sensorial frequente e exaustão após interações sociais prolongadas (camuflagem/masking)',
      'Dificuldades históricas na leitura de pistas sociais e comunicação interpessoal',
      'Padrões de interesses hiperfocados e necessidade de rotinas estruturadas',
    ],
    practicalTips: [
      {
        title: 'Respeite os limites sensoriais',
        detail: 'Protetores auriculares e pausas no silêncio ajudam a prevenir crises de sobrecarga sensorial.',
      },
      {
        title: 'Use comunicação direta e clara',
        detail: 'Substitua indiretas e metáforas por acordos explícitos e combinados objetivos.',
      },
    ],
    serviceTitle: 'Atendimento Psicológico para Adultos Neurodivergentes',
    serviceSummary:
      'Acompanhamento psicoterápico em TCC voltado para adultos com diagnóstico ou suspeita de TEA, focando em autoconhecimento, validação e qualidade de vida.',
    serviceAudience: [
      'Adultos no espectro autista que buscam suporte para carreira, relações e regulação emocional',
      'Psicólogos que desejam recursos visuais e ferramentas para uso em consultório',
    ],
    serviceHowItWorks: [
      'Acolhimento da trajetória de vida e mapeamento de estratégias de suporte adaptadas',
      'Trabalho de identificação de sobrecarga sensorial e manejo de esgotamento autista',
    ],
    serviceLimits:
      'Não realizamos atendimento clínico infantil direto ou laudos diagnósticos médicos.',
    faqs: [
      {
        question: 'O portal oferece materiais para psicólogos aplicarem?',
        answer: 'Sim, nossos e-books e pranchas em PDF podem ser adquiridos e utilizados clinicamente com pacientes.',
      },
    ],
  },
  tdah: {
    slug: 'tdah',
    name: 'TDAH em Adultos',
    shortTitle: 'TDAH Adulto e Rotina',
    heroTitle: 'TDAH no Adulto: Organização, Foco e Funções Executivas',
    heroSubtitle: 'Orientações práticas e estratégias da TCC para adultos com TDAH e materiais para profissionais.',
    description: 'Compreenda os impactos do TDAH na vida adulta e aprenda ferramentas executivas para o trabalho e o cotidiano.',
    keyTopics: ['TDAH no trabalho', 'Procrastinação e dopamina', 'Ferramentas de foco', 'Recursos para psicólogos'],
    whenToObserve: ['Dificuldade em manter prazos', 'Esquecimentos crônicos', 'Impulsividade verbal'],
    practicalTips: [
      { title: 'Técnica de 15 minutos', detail: 'Inicie com blocos curtos para superar a barreira da inércia.' }
    ],
    serviceTitle: 'Atendimento para Adultos com TDAH',
    serviceSummary: 'Psicoterapia em TCC focada em habilidades executivas e organização de tarefas para adultos.',
    serviceAudience: ['Adultos com TDAH ou queixas executivas'],
    serviceHowItWorks: ['Mapeamento funcional e criação de apoios externos para a rotina'],
    serviceLimits: 'Acompanhamento psicológico não substitui avaliação médica quando necessária.',
    faqs: [{ question: 'Como funciona?', answer: 'Sessões semanais por videochamada com a psicóloga.' }],
  },
  'dislexia-aprendizagem': {
    slug: 'dislexia-aprendizagem',
    name: 'Dificuldades de Aprendizagem',
    shortTitle: 'Aprendizagem & Apoio Psicológico',
    heroTitle: 'Dificuldades de Aprendizagem: Recursos Clínicos e Autoestima no Adulto',
    heroSubtitle: 'Materiais de intervenção para psicólogos e orientações para adultos com dificuldades na leitura e escrita.',
    description: 'Informações e ferramentas práticas sobre como apoiar o processo de estudo e proteger a autoestima.',
    keyTopics: ['Adaptações de estudo', 'Autoestima profissional', 'Recursos para psicólogos'],
    whenToObserve: ['Fadiga rápida na leitura', 'Bloqueios na escrita acadêmica ou corporativa'],
    practicalTips: [{ title: 'Fontes limpas e pausas', detail: 'Divida textos em parágrafos curtos.' }],
    serviceTitle: 'Recursos para Psicólogos e Atendimento de Adultos',
    serviceSummary: 'Apoio psicológico para adultos lidando com ansiedade de desempenho e materiais para profissionais.',
    serviceAudience: ['Adultos com histórico de dificuldades escolares e psicólogos'],
    serviceHowItWorks: ['Avaliação e intervenção em regulação emocional e estratégias de estudo'],
    serviceLimits: 'Não substitui avaliação fonoaudiológica ou psicopedagógica multidisciplinar.',
    faqs: [{ question: 'Para quem é?', answer: 'Para adultos e psicólogos que buscam materiais de intervenção.' }],
  },
  'orientacao-parental': {
    slug: 'orientacao-parental',
    name: 'Família & Prática Clínica',
    shortTitle: 'Família e Ferramentas Clínicas',
    heroTitle: 'Relações Familiares e Recursos para Profissionais',
    heroSubtitle: 'Orientações para adultos sobre dinâmicas familiares e acervo de recursos para psicólogos.',
    description: 'Materiais e abordagens éticas para lidar com desafios familiares e capacitar profissionais.',
    keyTopics: ['Comunicação assertiva', 'Limites respeitosos', 'Ferramentas clínicas para consultório'],
    whenToObserve: ['Conflitos recorrentes e estresse na rotina doméstica'],
    practicalTips: [{ title: 'Conexão antes da cobrança', detail: 'Ouça ativamente antes de reagir.' }],
    serviceTitle: 'Psicoterapia para Adultos e Suporte a Psicólogos',
    serviceSummary: 'Espaço de escuta para adultos e ferramentas práticas para atuação de psicólogos.',
    serviceAudience: ['Adultos com sobrecarga e psicólogos em busca de recursos'],
    serviceHowItWorks: ['Sessões online de 50 minutos'],
    serviceLimits: 'Voltado exclusivamente aos adultos.',
    faqs: [{ question: 'Como agendar?', answer: 'Entre em contato pelo WhatsApp do site.' }],
  },
}

export const MAIN_ADULT_TOPICS: CategorySlug[] = [
  'depressao',
  'ansiedade',
  'panico',
  'compulsao-alimentar',
  'toc',
  'relacionamentos-narcisismo',
  'tdah-adulto',
  'materiais-psicologos',
  'saude-mental',
]

export const CATEGORY_LIST: CategoryHubData[] = Object.values(CATEGORY_HUBS)
