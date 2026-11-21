'use client'

// Com os Anúncios Automáticos (Auto Ads) ativados diretamente no painel do Google AdSense,
// o script oficial no <head> insere os anúncios responsivos de forma autônoma
// nos melhores locais (in-page, vinheta, âncora mobile), eliminando caixas vazias.

interface AdSenseSlotProps {
  slot?: string
  format?: string
  responsive?: boolean
  className?: string
}

export default function AdSenseSlot({
  slot,
  format,
  responsive,
  className = '',
}: AdSenseSlotProps) {
  return null
}
