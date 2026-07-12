import PremiumMaterial from '@/components/PremiumMaterial'

const features = [
  '12 estratégias de regulação emocional',
  'Técnicas baseadas em evidências',
  'Para crianças e adultos com TEA e TDAH',
  'Estratégias para ansiedade e crises',
  'Como criar o cantinho da calma',
  'Exercícios de respiração e relaxamento',
]

const previewContent = (
  <div className="space-y-4">
    <div className="bg-red-50 p-4 rounded-lg">
      <h4 className="font-semibold text-red-800 mb-2">Estratégia 1: Respiração do Quadrado</h4>
      <div className="space-y-2 text-sm text-red-700">
        <p><strong>Objetivo:</strong> Ajudar a acalmar durante crises</p>
        <p><strong>Como fazer:</strong></p>
        <p>1. Inspire contando até 4</p>
        <p>2. Segure o ar contando até 4</p>
        <p>3. Expire contando até 4</p>
        <p>4. Segue sem ar contando até 4</p>
        <p>5. Repita 4 vezes</p>
      </div>
    </div>
    
    <div className="bg-cyan-50 p-4 rounded-lg">
      <h4 className="font-semibold text-cyan-800 mb-2">Estratégias incluídas:</h4>
      <ul className="text-sm text-cyan-700 space-y-1">
        <li>• Respiração do quadrado</li>
        <li>• Contar até 10</li>
        <li>• Squeezing (apertar bola)</li>
        <li>• Música relaxante</li>
        <li>• Movimentação corporal</li>
        <li>• Cantinho da calma</li>
      </ul>
    </div>
  </div>
)

export default function EstrategiasRegulacao() {
  return (
    <PremiumMaterial
      title="Estratégias de Regulação Emocional"
      description="12 estratégias práticas para ajudar crianças e adultos com TEA e TDAH a lidarem com emoções e crises."
      pages={12}
      price={9.90}
      priceId="estrategias-regulacao"
      features={features}
      previewContent={previewContent}
    />
  )
}
