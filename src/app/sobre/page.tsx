import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, BookOpen, CheckCircle2, GraduationCap, HeartHandshake, ArrowRight, FileCheck } from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: `Sobre ${PROFESSIONAL_AUTHOR} (${PROFESSIONAL_CRP}) | Psicologia Direta`,
  description:
    'Conheça a formação acadêmica, a trajetória profissional, a responsabilidade editorial e os princípios éticos da Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327).',
  alternates: { canonical: 'https://psicologiadireta.com.br/sobre' },
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Sobre e Autoria', url: '/sobre' },
        ]}
      />

      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-800 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-primary-50 mb-4">
            <Shield className="w-4 h-4" />
            Identificação Profissional e Responsabilidade Editorial
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Sobre a Profissional e o Portal Psicologia Direta
          </h1>
          <p className="text-lg text-primary-100 max-w-3xl leading-relaxed">
            Um espaço que une informação pública confiável sobre saúde mental e neurodesenvolvimento ao cuidado clínico ético, humano e fundamentado em evidências.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Perfil da Profissional */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center">
            <div className="w-52 h-52 mx-auto mb-4 relative">
              <Image
                src="/SOCORRINHA%20PSICOLOGIA%20DIRETA.png"
                alt={`${PROFESSIONAL_AUTHOR} — ${PROFESSIONAL_CRP}`}
                width={208}
                height={208}
                className="rounded-full object-cover shadow-md border-4 border-primary-50"
                unoptimized
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800">{PROFESSIONAL_AUTHOR}</h2>
            <p className="text-primary-700 font-semibold text-sm mt-1">
              Psicóloga Clínica • {PROFESSIONAL_CRP}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Autora e Responsável Técnica pelo conteúdo do portal
            </p>
          </div>

          <div className="md:col-span-8 space-y-4 text-gray-600 leading-relaxed">
            <h3 className="text-2xl font-bold text-gray-800">
              Trajetória Acadêmica e Prática Clínica
            </h3>
            <p>
              Sou psicóloga graduada pela <strong>Faculdade Barão do Rio Branco (UNINORTE)</strong>, inscrita no Conselho Regional de Psicologia sob o registro <strong>{PROFESSIONAL_CRP}</strong>. Minha atuação clínica e educativa é dedicada ao neurodesenvolvimento, à saúde emocional e à orientação prática para famílias.
            </p>
            <p>
              Possuo pós-graduação em <strong>Transtorno do Espectro Autista (TEA) pela FANI</strong>, formação em <strong>ABA Naturalista (Análise do Comportamento Aplicada ao contexto natural)</strong> e especialização em <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, além de experiência institucional no atendimento a famílias e populações em diferentes contextos sociais (SEAB/SSP/AC).
            </p>
            <p>
              Criei o portal <strong>Psicologia Direta</strong> porque percebi que muitas mães, pais e adultos chegavam ao consultório assustados com informações desencontradas da internet, promessas milagrosas ou jargões técnicos difíceis de aplicar na vida real. Aqui, traduzimos a ciência psicológica em orientações claras, respeitosas e aplicáveis ao cotidiano.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-primary-50/70">
                <GraduationCap className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700">
                  <strong className="block text-gray-900">Formação e Especializações</strong>
                  Psicologia (UNINORTE), Pós em Autismo (FANI), ABA Naturalista e TCC.
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-secondary-50/70">
                <HeartHandshake className="w-5 h-5 text-secondary-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-gray-700">
                  <strong className="block text-gray-900">Compromisso Ético</strong>
                  Respeito integral ao Código de Ética do Psicólogo (CFP) e à LGPD.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que separamos Educação de Psicoterapia */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Separação Clara entre Conteúdo Educativo e Atendimento Clínico
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Em respeito aos nossos leitores e às normas do Conselho Federal de Psicologia, mantemos uma distinção transparente em todas as páginas deste site:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 font-bold text-gray-800 mb-2">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <span>Artigos, Guias e Materiais Gratuitos</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Têm caráter exclusivamente informativo, psicoeducativo e de apoio à rotina familiar e escolar. Não substituem avaliação diagnóstica nem configuram atendimento psicológico individualizado.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2 font-bold text-gray-800 mb-2">
                <Shield className="w-5 h-5 text-secondary-600" />
                <span>Atendimento Psicológico e Orientação Parental</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Serviço clínico profissional realizado mediante agendamento, contrato terapêutico e sigilo profissional ({PROFESSIONAL_CRP}), sem anúncios publicitários nas páginas de contato ou agendamento.
              </p>
            </div>
          </div>
        </section>

        {/* Resumo da Metodologia Editorial */}
        <section className="bg-primary-50/70 rounded-2xl border border-primary-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700">
              <FileCheck className="w-4 h-4" />
              Transparência e Rigor Científico
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Conheça Nossa Metodologia Editorial e Revisão Clínica
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Todos os artigos e ferramentas passam por verificação de fontes oficiais (DSM-5-TR, CFP, OMS, Sociedade Brasileira de Pediatria) e revisão técnica assinada antes da publicação.
            </p>
          </div>
          <Link
            href="/metodologia-editorial"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap"
          >
            Ler Metodologia Editorial <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* CTA Ético */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Deseja conversar sobre atendimento ou orientação familiar?
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto mb-6">
            Veja como funcionam as sessões online ou envie sua dúvida pelos nossos canais oficiais de contato.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/servicos" className="btn-outline text-sm">
              Conhecer os Serviços
            </Link>
            <Link href="/agendamento" className="btn-primary text-sm">
              Agendar uma Conversa
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
