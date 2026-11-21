import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Modelos Editáveis de Apoio para Psicólogos',
  description:
    'Modelos editáveis de apoio para emissão de declarações de comparecimento, recibos fiscais com valor por extenso (Carnê-Leão) e contratos terapêuticos.',
  alternates: {
    canonical: 'https://psicologiadireta.com.br/ferramentas/gerador-documentos',
  },
}

export default function GeradorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
