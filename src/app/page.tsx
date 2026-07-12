import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Servicos from '@/components/Servicos'
import PrimeiraSessao from '@/components/PrimeiraSessao'
import ComoFunciona from '@/components/ComoFunciona'
import Depoimentos from '@/components/Depoimentos'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <PrimeiraSessao />
      <Servicos />
      <ComoFunciona />
      <Depoimentos />
      <FAQ />
      <CTA />
    </>
  )
}
