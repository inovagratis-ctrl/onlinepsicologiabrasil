import PremiumMaterial from '@/components/PremiumMaterial'

const features = [
  '12 atividades de solicitação prontas',
  'Estimula a comunicação funcional',
  'Para crianças com TEA e Deficiência Intelectual',
  'Atividades de apontar, pegar e entregar',
  'Formato para imprimir e plastificar',
  'Níveis de dificuldade progressivos',
]

const previewContent = (
  <div className="space-y-4">
    <div className="bg-orange-50 p-4 rounded-lg">
      <h4 className="font-semibold text-orange-800 mb-2">Atividade 1: Pedir Comida</h4>
      <div className="space-y-2 text-sm text-orange-700">
        <p><strong>Objetivo:</strong> A criança aprende a pedir comida</p>
        <p><strong>Materiais:</strong> Figuras de alimentos + prato vazio</p>
        <p><strong>Como fazer:</strong></p>
        <p>1. Coloque a comida longe da criança</p>
        <p>2. Mostre o prato vazio</p>
        <p>3. Espere a criança pegar a figura</p>
        <p>4. Entregue a comida</p>
      </div>
    </div>
    
    <div className="bg-teal-50 p-4 rounded-lg">
      <h4 className="font-semibold text-teal-800 mb-2">Níveis de dificuldade:</h4>
      <ul className="text-sm text-teal-700 space-y-1">
        <li><strong>Nível 1:</strong> Apontar para o objeto</li>
        <li><strong>Nível 2:</strong> Pegar a figura e entregar</li>
        <li><strong>Nível 3:</strong> Montar frase com "Eu quero"</li>
      </ul>
    </div>
  </div>
)

export default function AtividadesSolicitacao() {
  return (
    <PremiumMaterial
      title="Atividades de Solicitação"
      description="12 atividades prontas para ensinar crianças a pedirem o que precisam usando figuras ou palavras."
      pages={12}
      price={9.90}
      priceId="atividades-solicitacao"
      features={features}
      previewContent={previewContent}
    />
  )
}
