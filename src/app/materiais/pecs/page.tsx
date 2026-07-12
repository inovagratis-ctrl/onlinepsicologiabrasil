import PremiumMaterial from '@/components/PremiumMaterial'

const features = [
  '25 figuras de comunicação prontas',
  'Sistema PECS adaptado para uso doméstico',
  'Categorias: comida, brinquedos, lugares, pessoas',
  'Fases de ensino explicadas',
  'Como montar o quadro de comunicação',
  'Dicas para pais e professores',
]

const previewContent = (
  <div className="space-y-4">
    <div className="bg-purple-50 p-4 rounded-lg">
      <h4 className="font-semibold text-purple-800 mb-2">Como funciona o PECS:</h4>
      <div className="space-y-2 text-sm text-purple-700">
        <p><strong>Fase 1:</strong> A criança pega a figura e entrega ao adulto</p>
        <p><strong>Fase 2:</strong> A criança se aproxima do quadro e pega a figura</p>
        <p><strong>Fase 3:</strong> A criança escolhe a figura correta</p>
        <p><strong>Fase 4:</strong> A criança usa frases com "Eu quero"</p>
      </div>
    </div>
    
    <div className="bg-pink-50 p-4 rounded-lg">
      <h4 className="font-semibold text-pink-800 mb-2">Categorias incluídas:</h4>
      <ul className="text-sm text-pink-700 space-y-1">
        <li>• Alimentos (20 figuras)</li>
        <li>• Brinquedos (15 figuras)</li>
        <li>• Lugares (10 figuras)</li>
        <li>• Pessoas (8 figuras)</li>
        <li>• Sentimentos (10 figuras)</li>
      </ul>
    </div>
  </div>
)

export default function Pecs() {
  return (
    <PremiumMaterial
      title="PECS - Sistema de Comunicação por Figuras"
      description="25 páginas com figuras de comunicação para ensinar crianças sem fala a se comunicarem usando o sistema PECS."
      pages={25}
      price={17.90}
      priceId="pecs"
      features={features}
      previewContent={previewContent}
    />
  )
}
