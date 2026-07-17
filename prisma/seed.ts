import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample blog posts
  const posts = [
    {
      slug: 'ansiedade-como-identificar-primeiros-sinais',
      title: 'Ansiedade: Como Identificar os Primeiros Sinais e Quando Procurar Ajuda Psicológica',
      excerpt: 'A ansiedade faz parte da vida, mas quando se torna intensa e frequente pode afetar a saúde física, emocional e os relacionamentos. Descubra os principais sintomas, causas, tratamentos e estratégias práticas para controlar a ansiedade e melhorar sua qualidade de vida.',
      content: `<p>A ansiedade é uma resposta natural do organismo diante de situações de perigo ou incerteza. Ela prepara o corpo para reagir aos desafios do dia a dia. No entanto, quando essa sensação se torna constante, intensa e desproporcional à realidade, pode evoluir para um transtorno de ansiedade, comprometendo significativamente a qualidade de vida.</p>

<p>Segundo especialistas em saúde mental, milhões de pessoas convivem diariamente com sintomas de ansiedade, muitas vezes sem perceber que precisam de ajuda profissional. Reconhecer os sinais precocemente é um passo importante para iniciar o tratamento adequado.</p>

<h3>O que é ansiedade?</h3>

<p>A ansiedade é uma emoção caracterizada por preocupação, medo ou apreensão diante de acontecimentos futuros. Em níveis moderados, ela pode até ser benéfica, ajudando na concentração e na preparação para desafios importantes.</p>

<p>O problema surge quando essa sensação permanece por longos períodos, causando sofrimento e dificultando atividades simples do cotidiano.</p>

<h3>Principais sintomas</h3>

<p>Os sintomas podem variar de pessoa para pessoa, mas os mais comuns incluem:</p>

<ul>
  <li>Preocupação excessiva.</li>
  <li>Pensamentos negativos constantes.</li>
  <li>Medo sem motivo aparente.</li>
  <li>Palpitações e coração acelerado.</li>
  <li>Falta de ar.</li>
  <li>Tensão muscular.</li>
  <li>Insônia ou sono de má qualidade.</li>
  <li>Dificuldade de concentração.</li>
  <li>Irritabilidade.</li>
  <li>Sensação de que algo ruim vai acontecer.</li>
</ul>

<p>Em alguns casos, também podem surgir sintomas físicos como dores de cabeça, desconforto gastrointestinal, tremores, suor excessivo e sensação de desmaio.</p>

<h3>Quais são as causas?</h3>

<p>Não existe uma única causa para a ansiedade. Geralmente ela resulta da combinação de diversos fatores, como:</p>

<ul>
  <li>Predisposição genética.</li>
  <li>Estresse prolongado.</li>
  <li>Experiências traumáticas.</li>
  <li>Pressão profissional ou acadêmica.</li>
  <li>Problemas financeiros.</li>
  <li>Mudanças importantes na vida.</li>
  <li>Uso excessivo de cafeína ou outras substâncias estimulantes.</li>
</ul>

<h3>Quando a ansiedade se torna um transtorno?</h3>

<p>A ansiedade passa a exigir atenção especializada quando interfere no trabalho, nos estudos, na vida familiar ou social. Crises frequentes, ataques de pânico e preocupações constantes que persistem por meses são sinais de que é importante procurar avaliação psicológica ou psiquiátrica.</p>

<h3>Como controlar a ansiedade?</h3>

<p>Existem diversas estratégias que ajudam a reduzir os sintomas e promover maior equilíbrio emocional.</p>

<ul>
  <li>Praticar atividade física regularmente.</li>
  <li>Manter uma rotina de sono saudável.</li>
  <li>Reduzir o consumo de cafeína.</li>
  <li>Adotar técnicas de respiração profunda.</li>
  <li>Praticar meditação ou mindfulness.</li>
  <li>Organizar melhor a rotina diária.</li>
  <li>Reservar momentos de lazer.</li>
  <li>Conversar com pessoas de confiança.</li>
</ul>

<p>Esses hábitos não substituem o tratamento profissional, mas podem complementar significativamente o cuidado com a saúde mental.</p>

<h3>Tratamentos disponíveis</h3>

<p>O tratamento depende da intensidade dos sintomas e das necessidades individuais.</p>

<p>Entre as abordagens mais utilizadas estão:</p>

<ul>
  <li>Psicoterapia, especialmente a Terapia Cognitivo-Comportamental (TCC).</li>
  <li>Medicamentos prescritos por psiquiatra quando necessário.</li <li>Técnicas de relaxamento.</li>
  <li>Educação emocional.</li>
  <li>Mudanças no estilo de vida.</li>
</ul>

<p>Quanto mais cedo o tratamento é iniciado, maiores são as chances de controle dos sintomas e melhora da qualidade de vida.</</p>

<h3>É possível viver bem com ansiedade?</h3>

<p>Sim. Muitas pessoas conseguem controlar completamente os sintomas por meio de acompanhamento psicológico, hábitos saudáveis e, quando indicado, tratamento médico. O mais importante é compreender que buscar ajuda demonstra cuidado consigo mesmo e não é sinal de fraqueza.</</p>

<p>Cada pessoa possui uma história diferente e merece um tratamento individualizado. Com apoio adequado, é possível recuperar o bem-estar, desenvolver mais segurança emocional e viver com muito mais tranquilidade.</</p>

<h3>Conclusão</h3>

<p>A ansiedade é uma condição comum, mas não deve ser ignorada quando passa a limitar a rotina e gerar sofrimento. Identificar os sintomas, compreender suas causas e procurar ajuda especializada são atitudes fundamentais para cuidar da saúde mental.</</p>

<p>Se você ou alguém próximo apresenta sinais persistentes de ansiedade, considere buscar orientação de um profissional qualificado. O cuidado psicológico pode transformar a qualidade de vida e proporcionar um caminho mais leve e equilibrado.
</p>`, 
      category: 'Ansiedade',
      image: 'https://78a9prkhf5ughmp4.public.blob.vercel-storage.com/blog/1784220884712-Anxiety_in_human_mind_nature_202607161153-(1).jpeg',
      author: 'Maria do Socorro',
      readTime: '5 min',
      published: true,
      featured: true,
      tags: 'ansiedade, saúde mental, terapia, estresse, bem-estar emocional, psicologia, qualidade de vida',
      metaTitle: 'Ansiedade: Sintomas, Causas e Como Controlar a Mente',
      metaDescription: 'Descubra os principais sintomas da ansiedade, suas causas, tratamentos e dicas práticas para recuperar o equilíbrio emocional e melhorar sua qualidade de vida.',
      viewCount: 2,
      createdAt: new Date('2026-07-16T16:57:16.426Z'),
      updatedAt: new Date('2026-07-16T17:00:35.117Z'),
    }
  ]

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    })
  }

  console.log('✅ Database seeded successfully!')
  console.log(`Admin: admin@vydio.com`)
  console.log(`User: demo@vydio.com`)
  console.log(`Project: Meu Primeiro Vídeo`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })