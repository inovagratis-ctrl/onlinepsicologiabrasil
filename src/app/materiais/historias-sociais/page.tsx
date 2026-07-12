import PremiumMaterial from '@/components/PremiumMaterial'

const features = [
  '20 histórias sociais prontas para usar',
  'Linguagem simples e visual',
  'Para crianças com TEA e Deficiência Intelectual',
  'Temas: escola, amizade, rotinas, sentimentos',
  'Formato para imprimir em A4',
  'Imagens para colorir',
]

const previewContent = (
  <div className="space-y-4">
    <div className="bg-blue-50 p-4 rounded-lg">
      <h4 className="font-semibold text-blue-800 mb-2">Exemplo: Minha Primeira Dia na Escola</h4>
      <div className="space-y-2 text-sm text-blue-700">
        <p>Eu sou o João. Eu tenho 7 anos.</p>
        <p>Hoje é meu primeiro dia na escola.</p>
        <p>Eu vou conhecer minha professora.</p>
        <p>Ela se chama Dona Maria.</p>
        <p>Ela é muito legal!</p>
        <p>Eu vou sentar na minha cadeira.</p>
        <p>Minha cadeira é azul.</p>
        <p>Eu vou fazer amigos novos.</p>
        <p>A escola é divertida!</p>
      </div>
    </div>
    
    <div className="bg-green-50 p-4 rounded-lg">
      <h4 className="font-semibold text-green-800 mb-2">Temas disponíveis:</h4>
      <ul className="text-sm text-green-700 space-y-1">
        <li>• Ir ao médico</li>
        <li>• Fazer amigos</li>
        <li>• Esperar a vez</li>
        <li>• Lidar com mudanças</li>
        <li>• Expressar sentimentos</li>
        <li>• Seguir regras</li>
      </ul>
    </div>
  </div>
)

export default function HistoriasSociais() {
  return (
    <PremiumMaterial
      title="Histórias Sociais para Crianças"
      description="20 histórias sociais prontas para ajudar crianças com TEA e Deficiência Intelectual a entenderem situações do dia a dia."
      pages={20}
      price={14.90}
      priceId="historias-sociais"
      features={features}
      previewContent={previewContent}
    />
  )
}
