import PremiumMaterial from '@/components/PremiumMaterial'

const features = [
  '15 cartões de sentimentos prontos',
  'Figuras grandes e coloridas',
  'Para crianças e adultos com TEA',
  'Sentimentos: feliz, triste, com raiva, com medo, etc.',
  'Como usar na terapia e em casa',
  'Dicas para identificar sentimentos',
]

const previewContent = (
  <div className="space-y-4">
    <div className="bg-yellow-50 p-4 rounded-lg">
      <h4 className="font-semibold text-yellow-800 mb-2">Sentimentos incluídos:</h4>
      <div className="grid grid-cols-3 gap-2 text-sm text-yellow-700">
        <div className="text-center p-2 bg-white rounded">😊 Feliz</div>
        <div className="text-center p-2 bg-white rounded">😢 Triste</div>
        <div className="text-center p-2 bg-white rounded">😠 Com raiva</div>
        <div className="text-center p-2 bg-white rounded">😨 Com medo</div>
        <div className="text-center p-2 bg-white rounded">😮 Surpreso</div>
        <div className="text-center p-2 bg-white rounded">😴 Cansado</div>
      </div>
    </div>
    
    <div className="bg-indigo-50 p-4 rounded-lg">
      <h4 className="font-semibold text-indigo-800 mb-2">Como usar:</h4>
      <ul className="text-sm text-indigo-700 space-y-1">
        <li>• Imprima e plastifique os cartões</li>
        <li>• Mostre quando a criança sentir algo</li>
        <li>• Pergunte: "Como você está se sentindo?"</li>
        <li>• Use em histórias sociais</li>
        <li>• Coloque no cantinho da calma</li>
      </ul>
    </div>
  </div>
)

export default function CartoesSentimentos() {
  return (
    <PremiumMaterial
      title="Cartões de Sentimentos"
      description="15 cartões coloridos para ajudar crianças e adultos com TEA a identificarem e expressarem seus sentimentos."
      pages={15}
      price={12.90}
      priceId="cartoes-sentimentos"
      features={features}
      previewContent={previewContent}
    />
  )
}
