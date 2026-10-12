import type { Metadata } from 'next'
import CategoryHubView from '@/components/CategoryHubView'
import { CATEGORY_HUBS } from '@/data/categories'

const hub = CATEGORY_HUBS['ansiedade']

export const metadata: Metadata = {
  title: `${hub.shortTitle} e Terapia Cognitivo-Comportamental | Psicologia Direta — CRP 24/02327`,
  description: hub.heroSubtitle,
  alternates: { canonical: 'https://psicologiadireta.com.br/ansiedade' },
}

export default function AnsiedadePage() {
  return <CategoryHubView hub={hub} />
}
