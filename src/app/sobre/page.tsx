import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, BookOpen, GraduationCap, HeartHandshake, ArrowRight, FileCheck, FileText } from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: `Sobre o Portal e Autoria (${PROFESSIONAL_CRP}) | Psicologia Direta`,
  description:
    'Conheça a proposta editorial do portal Psicologia Direta, a formação acadêmica e os princípios éticos da Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327).',
  alternates: { canonical: 'https://psicologiadireta.com.br/sobre' },
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Sobre e Autoria', url: '/sobre' },
        ]}
      />

      <section className="bg-white border-b border-slate-200 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-800 mb-4">
            <Shield className="w-4 h-4 text-blue-600" />
            Identificação Profissional e Responsabilidade Editorial
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Sobre o Portal Psicologia Direta
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Um portal editorial dedicado a publicar artigos aprofundados, guias práticos, ferramentas imprimíveis e e-books sobre saúde mental, neurodesenvolvimento e orientação para famílias.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Perfil da Autora e Editora */}
        <section className="bg-white rounded-3xl shadow-2xs border border-slate-200 p-6 md:p-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center">
            <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-3xl border-4 border-[#DCEFF2] shadow-md bg-slate-100">
              <Image
                src="/psicologa-maria-do-socorro.png"
                alt={`${PROFESSIONAL_AUTHOR} — ${PROFESSIONAL_CRP}`}
                fill
                className="object-cover object-top"
                sizes="192px"
                priority
              />
            </div>
            <h2 className="text-xl font-bold text-slate-900">{PROFESSIONAL_AUTHOR}</h2>
            <p className="text-blue-700 font-semibold text-sm mt-1">
              Psicóloga • {PROFESSIONAL_CRP}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Autora e Responsável Técnica pelas Publicações e E-books
            </p>
          </div>

          <div className="md:col-span-8 space-y-4 text-slate-600 leading-relaxed">
            <h3 className="text-2xl font-bold text-slate-900">
              Trajetória Acadêmica e Curadoria Editorial
            </h3>
            <p>
              Sou psicóloga graduada pela <strong>Faculdade Barão do Rio Branco (UNINORTE)</strong>, inscrita no Conselho Regional de Psicologia sob o registro <strong>{PROFESSIONAL_CRP}</strong>.
            </p>
            <p>
              Possuo pós-graduação em <strong>Transtorno do Espectro Autista (TEA) pela FANI</strong>, formação em <strong>ABA Naturalista (Análise do Comportamento Aplicada ao contexto natural)</strong> e especialização em <strong>Terapia Cognitivo-Comportamental (TCC)</strong>.
            </p>
            <p>
              O portal <strong>Psicologia Direta</strong> nasceu para traduzir a ciência psicológica em artigos acessíveis, checklists gratuitos, quadros de rotina visual e e-books práticos para famílias, educadores e adultos que buscam informações confiáveis sem promessas milagrosas ou jargões inacessíveis.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                <GraduationCap className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong className="block text-slate-900">Formação e Especializações</strong>
                  Psicologia (UNINORTE), Pós em Autismo (FANI), ABA Naturalista e TCC.
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <HeartHandshake className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700">
                  <strong className="block text-slate-900">Compromisso Editorial</strong>
                  Conteúdo 100% psicoeducativo, ético e fundamentado em evidências.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resumo da Metodologia Editorial */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700">
              <FileCheck className="w-4 h-4" />
              Transparência e Rigor Científico
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Conheça Nossa Metodologia Editorial
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Todos os artigos, e-books e ferramentas passam por verificação de fontes oficiais (DSM-5-TR, CFP, OMS, Sociedade Brasileira de Pediatria) e revisão técnica assinada antes da publicação.
            </p>
          </div>
          <Link
            href="/metodologia-editorial"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors whitespace-nowrap"
          >
            Ler Metodologia Editorial <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* CTA para Artigos e E-books */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Explore nosso acervo de artigos, guias e e-books
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
            Acesse gratuitamente nossos artigos revisados ou conheça nossas apostilas e materiais visuais em PDF.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors">
              <BookOpen className="w-4 h-4" />
              Ler Artigos do Portal
            </Link>
            <Link href="/materiais" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors">
              <FileText className="w-4 h-4" />
              Ver E-books e Materiais em PDF
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
