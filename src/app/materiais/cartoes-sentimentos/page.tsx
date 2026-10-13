import PremiumMaterial from '@/components/PremiumMaterial'

const features = [
  '15 pranchas com cartões de sentimentos e sensações corporais prontos para recortar',
  'Ilustrações expressivas com identificação clara de emoções básicas e complexas',
  'Associação entre a emoção e o que acontece no corpo (coração acelerado, nó na garganta)',
  'Termômetro das emoções com 5 níveis de intensidade para identificar a sobrecarga',
  'Fichas de estratégias de regulação recomendadas para cada estado emocional',
  'Instruções para pais e terapeutas criarem o "Cantinho da Calma" ou "Caixa das Emoções"',
]

const previewContent = (
  <div className="space-y-4">
    <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200">
      <h4 className="font-bold text-amber-900 text-xs mb-2 uppercase tracking-wider">
        Identificação Visual de Sentimentos e Sinais Físicos:
      </h4>
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="text-center p-2.5 bg-white rounded-xl border border-amber-100 shadow-2xs">
          <span className="text-lg block">😊</span>
          <span className="font-bold text-slate-800 text-[11px] block mt-1">Alegria / Calma</span>
          <span className="text-[10px] text-slate-500">Corpo relaxado</span>
        </div>
        <div className="text-center p-2.5 bg-white rounded-xl border border-amber-100 shadow-2xs">
          <span className="text-lg block">😠</span>
          <span className="font-bold text-slate-800 text-[11px] block mt-1">Raiva / Frustração</span>
          <span className="text-[10px] text-slate-500">Mãos fechadas</span>
        </div>
        <div className="text-center p-2.5 bg-white rounded-xl border border-amber-100 shadow-2xs">
          <span className="text-lg block">😨</span>
          <span className="font-bold text-slate-800 text-[11px] block mt-1">Medo / Ansiedade</span>
          <span className="text-[10px] text-slate-500">Respiração rápida</span>
        </div>
        <div className="text-center p-2.5 bg-white rounded-xl border border-amber-100 shadow-2xs">
          <span className="text-lg block">😢</span>
          <span className="font-bold text-slate-800 text-[11px] block mt-1">Tristeza / Luto</span>
          <span className="text-[10px] text-slate-500">Falta de energia</span>
        </div>
        <div className="text-center p-2.5 bg-white rounded-xl border border-amber-100 shadow-2xs">
          <span className="text-lg block">🤯</span>
          <span className="font-bold text-slate-800 text-[11px] block mt-1">Sobrecarga</span>
          <span className="text-[10px] text-slate-500">Muitos barulhos</span>
        </div>
        <div className="text-center p-2.5 bg-white rounded-xl border border-amber-100 shadow-2xs">
          <span className="text-lg block">😴</span>
          <span className="font-bold text-slate-800 text-[11px] block mt-1">Cansaço / Sono</span>
          <span className="text-[10px] text-slate-500">Bocejos e lentidão</span>
        </div>
      </div>
    </div>
    
    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 text-xs mb-1.5">Como utilizar os cartões:</h4>
      <p className="text-xs text-slate-600 leading-relaxed">
        Cada cartão possui verso com sugestão de pergunta mediadora ("O que podemos fazer para ajudar o seu corpo a se sentir mais seguro agora?") e técnicas de respiração guiada.
      </p>
    </div>
  </div>
)

export default function CartoesSentimentosPage() {
  return (
    <PremiumMaterial
      title="Cartões de Sentimentos e Emoções para Crianças"
      subtitle="Recurso Psicoeducativo com Cartões Ilustrados e Fichas de Identificação Emocional"
      description="Kit completo com 15 páginas em alta resolução para imprimir e plastificar, permitindo que a criança nomeie o que sente, aponte sensações no corpo e escolha estratégias de alívio sem crises."
      pages={15}
      price={12.90}
      priceId="cartoes-sentimentos"
      features={features}
      previewContent={previewContent}
      coverImage="/assets/psicologia-direta/08-mockup-cartoes-emocoes.png"
      coverAlt="Cartões visuais de emoções e termômetro de sentimentos organizados para uso educativo"
      targetAge="Crianças a partir de 3 anos, jovens com TEA, TDAH ou dificuldade de verbalização de afetos, pais, psicólogos e educadores."
      notRecommendedFor="Não deve ser utilizado como teste de personalidade clínico ou instrumento de avaliação psicométrica padronizada."
      homeUsage={[
        'Cole os cartões com velcro no cantinho de regulação do quarto da criança.',
        'Ao notar o início da irritação, mostre os cartões e pergunte: "Como o seu coração está se sentindo agora?".',
        'Evite interrogar a criança durante o pico da crise; espere o retorno gradual da calma.',
      ]}
      schoolUsage={[
        'Mantenha uma tira de emoções na mesa da sala para que o aluno possa virar o cartão quando precisar de pausa.',
        'Use no início do dia letivo na atividade de acolhimento emocional com a turma.',
        'Auxilie a mediação de conflitos no recreio incentivando os alunos a apontarem como se sentiram.',
      ]}
    />
  )
}
