import { Calendar, Clock, ArrowLeft, Share2, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import AdBanner from '@/components/AdBanner'

const posts: Record<string, {
  title: string
  date: string
  readTime: string
  category: string
  content: string[]
}> = {
  'o-que-e-autismo': {
    title: 'O que é Autismo? Entendendo o Transtorno do Espectro Autista',
    date: '2026-07-01',
    readTime: '8 min',
    category: 'Autismo',
    content: [
      'O Transtorno do Espectro Autista (TEA) é uma condição neurodesenvolvimental que afeta a forma como uma pessoa se comunica, interage socialmente e se comporta. É chamado de "espectro" porque as características e a gravidade variam muito de pessoa para pessoa.',
      '### Sinais Precoces',
      'Os sinais de autismo geralmente aparecem nos primeiros anos de vida. Alguns sinais incluem:',
      '- Dificuldade em manter contato visual',
      '- Atraso no desenvolvimento da fala',
      '- Dificuldade em interagir com outras crianças',
      '- Preferência por rotinas e repetição',
      '- Hipersensibilidade ou hipossensibilidade a estímulos sensoriais',
      '### Diagnóstico Precoce',
      'O diagnóstico precoce é fundamental para iniciar intervenções que podem fazer uma grande diferença no desenvolvimento da criança. Quanto antes iniciar o tratamento, melhores serão os resultados.',
      '### A Importância da Intervenção',
      'Existem diversas abordagens terapêuticas com eficácia comprovada para o TEA. A Análise do Comportamento Aplicada (ABA), especialmente em sua versão naturalista, tem mostrado resultados significativos no desenvolvimento de habilidades comunicativas, sociais e comportamentais.',
      '### Cada Pessoa é Única',
      'É importante lembrar que cada pessoa com autismo é única. Algumas pessoas podem necessitar de mais suporte, enquanto outras são altamente independentes. O foco deve ser sempre nas forças e potencialidades de cada indivíduo.',
    ],
  },
  'aba-naturalista-como-funciona': {
    title: 'ABA Naturalista: Como Funciona essa Abordagem?',
    date: '2026-06-25',
    readTime: '10 min',
    category: 'ABA',
    content: [
      'A Análise do Comportamento Aplicada (ABA) é uma ciência que estuda o comportamento humano e suas variáveis. Quando aplicada de forma naturalista, ela se torna uma ferramenta poderosa para o ensino de habilidades em contextos reais.',
      '### Princípios do ABA Naturalista',
      'O ABA Naturalista (também conhecido como Naturalistic Developmental Behavioral Interventions - NDBI) combina os princípios da ABA com abordagens de desenvolvimento:',
      '- **Aprendizagem em contexto natural**: As habilidades são ensinadas nos ambientes onde a criança vive e interage',
      '- **Interesse da criança**: As atividades são baseadas nos interesses e motivações da criança',
      '- **Reforço natural**: As consequências naturais do comportamento são utilizadas como reforço',
      '- **Interação social**: O foco está na melhoria da qualidade das interações sociais',
      '### Como Funcionam as Sessões',
      'Nas sessões de ABA Naturalista, a terapia acontece através de atividades lúdicas e rotinas do dia a dia. Apsicóloga utiliza brincadeiras, brinquedos e situações reais para ensinar novas habilidades.',
      '### Habilidades Trabalhadas',
      '- Comunicação funcional',
      '- Habilidades sociais',
      '- Brincadeiras funcional',
      '- Regulação emocional',
      '- Habilidades de vida diária',
      '### Resultados Comprovados',
      'Estudos científicos demonstram que o ABA Naturalista é eficaz no desenvolvimento de habilidades comunicativas e sociais em crianças com TEA.',
    ],
  },
  'estrategias-para-pais': {
    title: '10 Estratégias para Pais de Crianças com Autismo',
    date: '2026-06-18',
    readTime: '6 min',
    category: 'Orientação a Pais',
    content: [
      'Ser pai ou mãe de uma criança com autismo pode ser desafiador, mas com as estratégias certas, é possível transformar os desafios em oportunidades de aprendizagem. Aqui van10 dicas práticas para o dia a dia.',
      '### 1. Estabeleça Rotinas',
      'Crianças com autismo geralmente se beneficiam de rotinas previsíveis. Use apoi visuais (como quadros de rotina) para mostrar o que vai acontecer ao longo do dia.',
      '### 2. Use Comunicação Visual',
      'Imagens, pictogramas e histórias sociais podem facilitar a compreensão de instruções e expectativas.',
      '### 3. Proporcione Um Ambiente Organizado',
      'Evite excesso de estímulos sensoriais. Tenha um espaço tranquilo onde a criança possa se regular.',
      '### 4. Siga os Interesses da Criança',
      'Utilize os interesses da criança como porta de entrada para o ensino de novas habilidades.',
      '### 5. Reforce Comportamentos Positivos',
      'Elogie e reforçe comportamentos adequados imediatamente, seja específico sobre o que a criança fez de certo.',
      '### 6. Facilite Interações Sociais',
      'Proporcione oportunidades seguras para que a criança interaja com outras pessoas, respeitando seu ritmo.',
      '### 7. Cuide de Si Mesmo',
      'Cuidar de um filho com TEA exige energia. Não se esqueça de cuidar da sua saúde física e emocional.',
      '### 8. Busque Apoio',
      'Participe de grupos de apoio para pais. Compartilhar experiências com outras famílias pode ser muito valioso.',
      '### 9. Mantenha Comunicação com a Equipe',
      'Mantenha contato regular com a psicóloga e demais profissionais que acompanham seu filho.',
      '### 10. Celebre Cada Conquista',
      'Cada pequeno passo é uma vitória. Celebre as conquistas do seu filho, por menores que pareçam.',
    ],
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post não encontrado</h1>
          <Link href="/blog" className="text-primary-600 hover:underline">
            Voltar ao blog
          </Link>
        </div>
      </div>
    )
  }

  // Dividir conteúdo para inserir anúncio no meio
  const midpoint = Math.ceil(post.content.length / 2)
  const firstHalf = post.content.slice(0, midpoint)
  const secondHalf = post.content.slice(midpoint)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao blog
        </Link>

        {/* Ad - Topo do Artigo */}
        <AdBanner position="top" />

        <div className="flex gap-8 mt-6">
          {/* Conteúdo Principal */}
          <article className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-8">{post.title}</h1>

              {/* Primeira metade do conteúdo */}
              <div className="prose prose-lg max-w-none">
                {firstHalf.map((paragraph, index) => (
                  <div key={index} className="mb-6">
                    {paragraph.startsWith('###') ? (
                      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                        {paragraph.replace('### ', '')}
                      </h2>
                    ) : paragraph.startsWith('- **') ? (
                      <li className="ml-4 mb-2">
                        <strong>{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                        {paragraph.replace(/- \*\*.*?\*\*/, '')}
                      </li>
                    ) : paragraph.startsWith('- ') ? (
                      <li className="ml-4 mb-2 text-gray-600">{paragraph.replace('- ', '')}</li>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Ad - Meio do Conteúdo */}
              <AdBanner position="middle" />

              {/* Segunda metade do conteúdo */}
              <div className="prose prose-lg max-w-none mt-6">
                {secondHalf.map((paragraph, index) => (
                  <div key={index} className="mb-6">
                    {paragraph.startsWith('###') ? (
                      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                        {paragraph.replace('### ', '')}
                      </h2>
                    ) : paragraph.startsWith('- **') ? (
                      <li className="ml-4 mb-2">
                        <strong>{paragraph.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                        {paragraph.replace(/- \*\*.*?\*\*/, '')}
                      </li>
                    ) : paragraph.startsWith('- ') ? (
                      <li className="ml-4 mb-2 text-gray-600">{paragraph.replace('- ', '')}</li>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t mt-8 pt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600">
                    <Share2 className="w-5 h-5" />
                    Compartilhar
                  </button>
                  <Link
                    href="/formulario"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary-600"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Agendar Consulta
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar com Anúncio */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <AdBanner position="sidebar" />
          </aside>
        </div>

        {/* Ad - Rodapé do Artigo */}
        <AdBanner position="bottom" />
      </div>
    </div>
  )
}
