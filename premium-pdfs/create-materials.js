const materials = [
  {
    slug: 'historias-sociais-criancas',
    name: 'Histórias Sociais para Crianças',
    description: '20 histórias sociais para ajudar crianças com TEA a entenderem situações do dia a dia como supermercado, escola, amizades, médico e parque.',
    price: 14.90,
    pages: 20,
    category: 'Habilidades Sociais',
  },
  {
    slug: 'pecs-comunicacao-figuras',
    name: 'PECS - Sistema de Comunicação por Figuras',
    description: 'Guia completo das 6 fases do PECS com atividades práticas para ensinar comunicação alternativa.',
    price: 17.90,
    pages: 25,
    category: 'Comunicação',
  },
  {
    slug: 'atividades-solicitacao',
    name: 'Atividades de Solicitação',
    description: '5 atividades práticas para ensinar crianças com TEA a solicitar o que desejam: caixa, quadro, jogo, menu visual e torneio.',
    price: 9.90,
    pages: 12,
    category: 'Comunicação',
  },
  {
    slug: 'cartoes-sentimentos',
    name: 'Cartões de Sentimentos',
    description: 'Cartões visuais para identificar emoções: feliz, triste, raiva, medo, surpresa e cansado com estratégias de regulação.',
    price: 12.90,
    pages: 15,
    category: 'Regulação Emocional',
  },
  {
    slug: 'estrategias-regulacao',
    name: 'Estratégias de Regulação',
    description: 'Técnicas para lidar com emoções intensas: respiração da borboleta, canto da calma, timer visual e pesos de compressão.',
    price: 9.90,
    pages: 12,
    category: 'Regulação Emocional',
  },
]

const API_URL = 'https://psicologiadireta.com.br/api/materials'

async function createMaterials() {
  console.log('Criando 5 materiais...\n')
  
  for (const m of materials) {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(m),
      })
      const data = await res.json()
      if (data.success) {
        console.log(`✅ ${m.name} (ID: ${data.material.id})`)
      } else {
        console.log(`⚠️  ${m.name}: ${data.error}`)
      }
    } catch (err) {
      console.log(`❌ ${m.name}: ${err.message}`)
    }
  }
}

createMaterials()
