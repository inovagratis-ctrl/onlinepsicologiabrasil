import PremiumMaterial from '@/components/PremiumMaterial'

const features = [
  '20 histórias sociais estruturadas com texto simples e apoio visual',
  'Foco em situações desafiadoras do dia a dia da criança',
  'Temas centrais: Primeiro dia de aula, Mudança de rotina, Esperar a vez, Ir ao dentista e Frustrações',
  'Diagramação limpa em folha A4 com espaço para ilustrações e personalização',
  'Guia para pais e professores sobre como ler e mediar cada história com a criança',
  'Perguntas de reflexão ao final de cada conto para fixar a previsibilidade',
]

const previewContent = (
  <div className="space-y-4">
    <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-200">
      <div className="flex items-center justify-between text-[11px] font-bold text-blue-800 uppercase mb-2">
        <span>História Exemplo 01</span>
        <span>Apoio à Previsibilidade</span>
      </div>
      <h4 className="font-extrabold text-blue-900 text-sm mb-2">Quando a Rotina Muda de Repente</h4>
      <div className="space-y-1.5 text-xs text-blue-800 leading-relaxed font-sans">
        <p className="bg-white/80 p-2 rounded-lg border border-blue-100">
          "Às vezes, as coisas não acontecem do jeito que eu planejei. Pode chover na hora de passear ou a professora pode faltar."
        </p>
        <p className="bg-white/80 p-2 rounded-lg border border-blue-100">
          "Quando isso acontece, meu corpo pode ficar agitado ou com raiva. Isso é normal. Eu posso respirar fundo 3 vezes."
        </p>
        <p className="bg-white/80 p-2 rounded-lg border border-blue-100">
          "Um adulto que cuida de mim vai me dizer qual será o novo plano. Eu estou seguro e vou conseguir me adaptar."
        </p>
      </div>
    </div>
    
    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 text-xs mb-2">Temas das 20 Histórias Incluídas no E-book:</h4>
      <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
        <div>1. Minha primeira semana na escola</div>
        <div>2. Quando eu ouço um barulho alto</div>
        <div>3. Como esperar a minha vez</div>
        <div>4. Guardar brinquedos sem brigar</div>
        <div>5. O que fazer quando perco no jogo</div>
        <div>6. Visita ao consultório médico</div>
        <div>7. Compartilhar materiais na sala</div>
        <div>8. Quando alguém encosta em mim</div>
        <div>9. Hora de desligar as telas</div>
        <div>10. Pedir ajuda quando estou triste</div>
      </div>
    </div>
  </div>
)

export default function HistoriasSociaisPage() {
  return (
    <PremiumMaterial
      title="Histórias Sociais Ilustradas para Crianças"
      subtitle="Guia Prático em 20 Histórias para Ensinar Previsibilidade, Convivência e Regulação Emocional"
      description="Material em PDF de 20 páginas pronto para impressão, desenvolvido para ajudar crianças com TEA, TDAH ou ansiedade a compreenderem situações sociais, regras de convivência e transições diárias sem crises."
      pages={20}
      price={14.90}
      priceId="historias-sociais"
      features={features}
      previewContent={previewContent}
      coverImage="/assets/psicologia-direta/07-mockup-historias-sociais.png"
      coverAlt="Mockup de um material impresso de histórias sociais e cartões visuais para crianças"
      targetAge="Crianças de 3 a 10 anos em fase de desenvolvimento social e alfabetização, especialmente com diagnóstico de TEA, TDAH, dificuldades de regulação ou ansiedade de separação."
      notRecommendedFor="Não é indicado para adolescentes ou adultos sem adaptação de vocabulário e não substitui psicoterapia para transtornos graves de conduta."
      homeUsage={[
        'Leia a história correspondente antes do evento acontecer (ex: ler sobre o dentista no dia anterior, não na hora da crise).',
        'Leia em tom acolhedor e calmo, permitindo que a criança aponte as figuras e faça perguntas.',
        'Mantenha o livro de histórias em local acessível para releituras frequentes.',
      ]}
      schoolUsage={[
        'Utilize na rodinha de conversa ou no início do turno para antecipar regras de convivência com os colegas.',
        'Deixe a história impressa na mesa da criança em momentos de mudança de professor ou horário de prova.',
        'Compartilhe com a família a mesma história trabalhada na escola para reforço mútuo.',
      ]}
    />
  )
}
