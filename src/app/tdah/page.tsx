import type { Metadata } from 'next'
import CategoryHubView from '@/components/CategoryHubView'
import { CATEGORY_HUBS } from '@/data/categories'

const hub = CATEGORY_HUBS['tdah']

export const metadata: Metadata = {
  title: `${hub.shortTitle}: Rotina e Atendimento | Psicologia Direta — CRP 24/02327`,
  description: hub.heroSubtitle,
  alternates: { canonical: 'https://psicologiadireta.com.br/tdah' },
}

export default function TdahPage() {
  return <CategoryHubView hub={hub} />
}
