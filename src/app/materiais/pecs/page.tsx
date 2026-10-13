import PremiumMaterial from '@/components/PremiumMaterial'

const features = [
  '25 pranchas e cartões de comunicação visual prontos para imprimir',
  'Metodologia baseada em Comunicação Alternativa e Aumentativa (CAA)',
  'Categorias fundamentais: Alimentos, Higiene, Brinquedos, Lugares e Sentimentos',
  'Guia passo a passo com níveis de mediação para pais e professores',
  'Instruções práticas de recorte, organização em pasta e plastificação',
  'Fichas de solicitação em formato de tiras de frases "Eu quero..."',
]

const previewContent = (
  <div className="space-y-4">
    <div className="bg-purple-50/80 p-4 rounded-xl border border-purple-200">
      <h4 className="font-bold text-purple-900 text-xs mb-2 uppercase tracking-wider">
        Estrutura de Apoio Visual (CAA):
      </h4>
      <div className="space-y-1.5 text-xs text-purple-800">
        <p><strong>Nível 1 (Troca Básica):</strong> A criança entrega o pictograma para receber o item desejado.</p>
        <p><strong>Nível 2 (Distância & Persistência):</strong> A criança busca o cartão no quadro e entrega ao adulto.</p>
        <p><strong>Nível 3 (Discriminação Visual):</strong> A criança escolhe entre duas ou mais figuras correspondentes.</p>
        <p><strong>Nível 4 (Construção de Sentença):</strong> Combinação na tira: [Eu quero] + [Água / Maçã / Brincar].</p>
      </div>
    </div>
    
    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
      <h4 className="font-bold text-slate-800 text-xs mb-2">Categorias em Alta Resolução (300 DPI):</h4>
      <ul className="text-xs text-slate-700 grid grid-cols-2 gap-1.5">
        <li>🍎 Alimentos e Lanches (24 figuras)</li>
        <li>🧸 Brinquedos e Lazer (18 figuras)</li>
        <li>🏫 Escola e Rotina (16 figuras)</li>
        <li>🚽 Higiene e Autocuidado (12 figuras)</li>
        <li>❤️ Emoções e Necessidades (10 figuras)</li>
        <li>🧩 Tiras de Comunicação e Suportes</li>
      </ul>
    </div>
  </div>
)

export default function PecsPage() {
  return (
    <PremiumMaterial
      title="Pranchas e Cartões de Comunicação Visual (CAA)"
      subtitle="Recurso de Comunicação Alternativa e Aumentativa para Crianças sem Fala ou com Fala Pouco Funcional"
      description="Material didático em 25 páginas para imprimir e plastificar, com pranchas temáticas e cartões visuais para estimular a autonomia, comunicação de necessidades e redução de frustrações no lar e na escola."
      pages={25}
      price={17.90}
      priceId="pecs"
      features={features}
      previewContent={previewContent}
      coverImage="/assets/psicologia-direta/09-mockup-kit-rotina.png"
      coverAlt="Kit visual de pranchas e cartões de comunicação funcional para crianças"
      targetAge="Crianças a partir de 2 anos e meio com atraso de fala, Transtorno do Espectro Autista (TEA), Apraxia da Fala na Infância ou Deficiência Intelectual, além de familiares, fonoaudiólogos e educadores."
      notRecommendedFor="Não é indicado como substituto de terapia fonoaudiológica clínica e não é um instrumento diagnóstico proprietário."
      homeUsage={[
        'Separe e plastifique primeiro as 6 figuras de itens de maior interesse da criança (ex: água, brinquedo favorito, desenho).',
        'Crie oportunidades naturais de troca durante os lanches e momentos de brincadeira diária.',
        'Mantenha as pranchas sempre visíveis e ao alcance das mãos da criança, sem guardar em gavetas fechadas.',
      ]}
      schoolUsage={[
        'Monte um quadro de comunicação simplificado para a mesa da sala de aula com cartões de banheiro, água e intervalo.',
        'Capacite a monitora ou professora de apoio para mediar a troca de figuras sem forçar a fala verbal.',
        'Utilize a mesma simbologia das tiras de apoio visual para atividades em duplas e materiais didáticos.',
      ]}
      trademarkDisclaimer="Aviso Legal: Material de apoio didático fundamentado nos princípios gerais de Comunicação Alternativa e Aumentativa (CAA). PECS® (Picture Exchange Communication System) é uma marca registrada de propriedade da Pyramid Educational Consultants, Inc. Este recurso é independente, elaborado para fins educativos de apoio familiar e não é licenciado, endossado ou afiliado à referida marca."
    />
  )
}
