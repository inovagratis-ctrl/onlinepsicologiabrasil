import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Questionário GAD-7 de Rastreio de Ansiedade',
  description:
    'Questionário educativo de autoavaliação de ansiedade baseado na escala psicométrica GAD-7 (Spitzer et al., 2006; Moreno et al., 2016). Cálculo automático e relatório em PDF.',
  alternates: {
    canonical: 'https://psicologiadireta.com.br/testes/ansiedade-gad7',
  },
}

export default function Gad7Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
