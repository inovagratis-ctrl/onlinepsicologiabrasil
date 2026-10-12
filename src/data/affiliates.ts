export interface AffiliateProduct {
  id: string
  title: string
  category: 'Livros Técnicos e para Famílias' | 'Organização Visual e Rotina' | 'Jogos Educativos e Regulação' | 'Acessibilidade e Estudo'
  partnerName: string
  description: string
  whyRecommended: string
  targetAudience: string
  affiliateUrl: string
  lastVerified: string
  active: boolean
  relatedTopics: ('tdah' | 'autismo' | 'ansiedade' | 'dislexia-aprendizagem' | 'orientacao-parental' | 'saude-mental')[]
}

export const ETHICAL_AFFILIATE_DISCLAIMER =
  'Alguns links desta página são afiliados. Se você comprar ou reservar por eles, o site poderá receber uma comissão, sem custo adicional para você. Só recomendamos produtos e serviços que façam sentido para o tema do artigo.'

export const INITIAL_AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: 'livro-vencendo-tdah-adulto',
    title: 'Livro: Vencendo o TDAH Adulto (Russell A. Barkley)',
    category: 'Livros Técnicos e para Famílias',
    partnerName: 'Amazon Brasil',
    description:
      'Obra de referência escrita por um dos maiores pesquisadores mundiais em TDAH, com estratégias práticas baseadas em evidências para organização do tempo, memória de trabalho e regulação emocional.',
    whyRecommended:
      'Ajuda adultos e familiares a compreenderem o funcionamento executivo sem estigmas, com exercícios práticos aplicáveis à rotina diária.',
    targetAudience: 'Adultos com TDAH, familiares e estudantes de psicologia',
    affiliateUrl: 'https://www.amazon.com.br/s?k=vencendo+o+tdah+adulto+russell+barkley&tag=psicologiadir-20',
    lastVerified: '2026-10-10',
    active: true,
    relatedTopics: ['tdah', 'saude-mental'],
  },
  {
    id: 'quadro-magnetico-rotina-infantil',
    title: 'Quadro Magnético de Rotina Semanal Infantil com Pictogramas',
    category: 'Organização Visual e Rotina',
    partnerName: 'Amazon Brasil',
    description:
      'Quadro planejador visual imantado com ilustrações de tarefas diárias (manhã, tarde e noite) que dão previsibilidade para a criança.',
    whyRecommended:
      'Reduz a sobrecarga de memória operacional e a ansiedade nas transições entre atividades em crianças com TDAH ou TEA.',
    targetAudience: 'Famílias com crianças de 3 a 11 anos (TEA, TDAH ou dificuldades na rotina)',
    affiliateUrl: 'https://www.amazon.com.br/s?k=quadro+magnetico+rotina+infantil&tag=psicologiadir-20',
    lastVerified: '2026-10-10',
    active: true,
    relatedTopics: ['tdah', 'autismo', 'orientacao-parental'],
  },
  {
    id: 'timer-visual-silencioso',
    title: 'Timer Visual Analógico Silencioso de Mesa (60 minutos)',
    category: 'Organização Visual e Rotina',
    partnerName: 'Amazon Brasil',
    description:
      'Relógio temporizador com disco colorido que diminui conforme o tempo passa, permitindo enxergar a passagem do tempo de forma concreta e sem tique-taque sonoro.',
    whyRecommended:
      'Excelente recurso de apoio para tarefas escolares, combinados de tempo de tela e preparação para transições sem surpresas.',
    targetAudience: 'Crianças, adolescentes e adultos com TDAH, TEA ou ansiedade',
    affiliateUrl: 'https://www.amazon.com.br/s?k=timer+visual+silencioso+60+minutos&tag=psicologiadir-20',
    lastVerified: '2026-10-10',
    active: true,
    relatedTopics: ['tdah', 'autismo', 'dislexia-aprendizagem'],
  },
  {
    id: 'livro-autismo-compreender-agir',
    title: 'Livro: Um Olhar sobre o Autismo e o Desenvolvimento Infantil',
    category: 'Livros Técnicos e para Famílias',
    partnerName: 'Amazon Brasil',
    description:
      'Guia acessível voltado para famílias e educadores sobre comunicação funcional, regulação sensorial e estimulação naturalista no dia a dia.',
    whyRecommended:
      'Linguagem acolhedora, alinhada a práticas baseadas em evidências e centrada no respeito à neurodiversidade.',
    targetAudience: 'Pais, cuidadores e educadores de crianças no espectro autista',
    affiliateUrl: 'https://www.amazon.com.br/s?k=livro+autismo+orientacao+pais+intervencao+naturalista&tag=psicologiadir-20',
    lastVerified: '2026-10-10',
    active: true,
    relatedTopics: ['autismo', 'orientacao-parental'],
  },
  {
    id: 'livro-cerebro-crianca-siegel',
    title: 'Livro: O Cérebro da Criança (Daniel J. Siegel e Tina Payne Bryson)',
    category: 'Livros Técnicos e para Famílias',
    partnerName: 'Amazon Brasil',
    description:
      'Explica de maneira clara e ilustrada como o cérebro infantil amadurece e como os adultos podem acolher emoções intensas sem recorrer a punições.',
    whyRecommended:
      'Fundamenta os combinados familiares, o acolhimento de crises e o diálogo entre razão e emoção na infância.',
    targetAudience: 'Pais, mães, cuidadores e profissionais da educação',
    affiliateUrl: 'https://www.amazon.com.br/s?k=o+cerebro+da+crianca+daniel+siegel&tag=psicologiadir-20',
    lastVerified: '2026-10-10',
    active: true,
    relatedTopics: ['orientacao-parental', 'ansiedade', 'saude-mental'],
  },
  {
    id: 'regua-leitura-guiada-dislexia',
    title: 'Kit de Réguas de Leitura Guiada com Filtro Colorido (Apoio Visual)',
    category: 'Acessibilidade e Estudo',
    partnerName: 'Amazon Brasil',
    description:
      'Marcadores com faixa de destaque que isolam a linha lida e reduzem o cansaço visual e a perda de linha durante a leitura escolar.',
    whyRecommended:
      'Recurso simples, acessível e não invasivo para crianças e jovens com dislexia, TDAH ou dificuldades de rastreamento visual na leitura.',
    targetAudience: 'Estudantes em fase de alfabetização ou com dislexia/dificuldade de atenção',
    affiliateUrl: 'https://www.amazon.com.br/s?k=regua+de+leitura+dislexia+tdah&tag=psicologiadir-20',
    lastVerified: '2026-10-10',
    active: true,
    relatedTopics: ['dislexia-aprendizagem', 'tdah'],
  },
  {
    id: 'baralho-emocoes-infantil',
    title: 'Jogo Educativo: Baralho das Emoções e Habilidades Sociais',
    category: 'Jogos Educativos e Regulação',
    partnerName: 'Amazon Brasil',
    description:
      'Recurso lúdico com cartas ilustradas que ajudam crianças a nomear sentimentos, identificar sinais corporais e pensar em estratégias de autorregulação.',
    whyRecommended:
      'Facilita conversas em família sobre medos, frustrações e ansiedade de forma lúdica e sem pressão.',
    targetAudience: 'Famílias com crianças de 4 a 12 anos',
    affiliateUrl: 'https://www.amazon.com.br/s?k=baralho+das+emocoes+infantil+psicologia&tag=psicologiadir-20',
    lastVerified: '2026-10-10',
    active: true,
    relatedTopics: ['ansiedade', 'autismo', 'orientacao-parental', 'saude-mental'],
  },
  {
    id: 'livro-livre-de-ansiedade-leahy',
    title: 'Livro: Livre de Ansiedade (Robert L. Leahy — Terapia Cognitivo-Comportamental)',
    category: 'Livros Técnicos e para Famílias',
    partnerName: 'Amazon Brasil',
    description:
      'Guia de psicoeducação em Terapia Cognitivo-Comportamental sobre como funcionam os pensamentos ansiosos e como lidar com preocupações excessivas.',
    whyRecommended:
      'Excelente leitura complementar à psicoterapia para adultos que desejam compreender os mecanismos da ansiedade.',
    targetAudience: 'Jovens e adultos interessados em saúde mental e TCC',
    affiliateUrl: 'https://www.amazon.com.br/s?k=livre+de+ansiedade+robert+leahy&tag=psicologiadir-20',
    lastVerified: '2026-10-10',
    active: true,
    relatedTopics: ['ansiedade', 'saude-mental'],
  },
]

const STORAGE_KEY = 'pd_affiliate_products_v1'

export function getAffiliateProducts(): AffiliateProduct[] {
  if (typeof window === 'undefined') {
    return INITIAL_AFFILIATE_PRODUCTS
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch (e) {
    console.warn('Error loading affiliate overrides:', e)
  }
  return INITIAL_AFFILIATE_PRODUCTS
}

export function saveAffiliateProducts(products: AffiliateProduct[]): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  } catch (e) {
    console.warn('Error saving affiliate overrides:', e)
  }
}

export function getAffiliatesByIds(ids: string[]): AffiliateProduct[] {
  const all = getAffiliateProducts().filter((p) => p.active)
  return ids.map((id) => all.find((p) => p.id === id)).filter((p): p is AffiliateProduct => Boolean(p))
}

export function getAffiliatesByTopic(
  topic: 'tdah' | 'autismo' | 'ansiedade' | 'dislexia-aprendizagem' | 'orientacao-parental' | 'saude-mental'
): AffiliateProduct[] {
  return getAffiliateProducts().filter((p) => p.active && p.relatedTopics.includes(topic))
}
