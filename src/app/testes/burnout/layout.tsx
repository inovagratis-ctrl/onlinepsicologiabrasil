import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Questionário Educativo de Burnout (CID-11 QD85)',
  description:
    'Questionário educativo de autorreflexão sobre estresse ocupacional e burnout baseado nos eixos conceituais da CID-11 (QD85) da OMS. Relatório em PDF.',
  alternates: {
    canonical: 'https://psicologiadireta.com.br/testes/burnout',
  },
}

export default function BurnoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
