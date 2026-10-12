import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle2, BookOpen, RefreshCw, AlertCircle, Cpu, ArrowRight } from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: `Metodologia Editorial e Revisão Clínica (${PROFESSIONAL_CRP}) | Psicologia Direta`,
  description:
    'Como produzimos, revisamos e atualizamos os artigos e ferramentas do portal Psicologia Direta com base em evidências científicas e nas normas éticas do CFP.',
  alternates: { canonical: 'https://psicologiadireta.com.br/metodologia-editorial' },
}

export default function MetodologiaEditorialPage() {
  return (
    <div className="min-h-screen bg-warm-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Metodologia Editorial', url: '/metodologia-editorial' },
        ]}
      />

      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-secondary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-primary-50 mb-4">
            <Shield className="w-4 h-4" />
            Padrão de Qualidade em Saúde Mental (YMYL)
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Metodologia Editorial e Política de Revisão Clínica
          </h1>
          <p className="text-lg text-primary-100 leading-relaxed">
            Conteúdos sobre saúde mental e desenvolvimento infantil impactam diretamente a vida das famílias. Por isso, seguimos um processo rigoroso de redação, checagem de fontes e revisão profissional.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              1. Autoria e Revisão Clínica Identificada ({PROFESSIONAL_CRP})
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Todos os artigos, checklists e materiais educativos publicados em <strong>psicologiadireta.com.br</strong> são elaborados ou integralmente revisados pela <strong>{PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})</strong>. Nenhum texto informativo sobre saúde mental, TDAH, autismo, dislexia, ansiedade ou parentalidade vai ao ar sem validação clínica quanto à precisão conceitual, tom acolhedor e conformidade com o Código de Ética Profissional do Psicólogo.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              2. Fontes Científicas e Institucionais Utilizadas
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Nossas publicações baseiam-se exclusivamente em literatura científica reconhecida, consensos clínicos e diretrizes oficiais:
          </p>
          <ul className="space-y-2.5 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
              <span><strong>Conselho Federal de Psicologia (CFP):</strong> Resoluções normativas, Código de Ética e referências técnicas para atuação profissional.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
              <span><strong>Manuais Diagnósticos Internacionais:</strong> DSM-5-TR (American Psychiatric Association) e CID-11 (Organização Mundial da Saúde).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
              <span><strong>Sociedades Médicas e Científicas:</strong> Sociedade Brasileira de Pediatria (SBP), Sociedade Brasileira de Psicologia, Ministério da Saúde e Ministério da Educação (MEC).</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              3. Compromisso Contra o Sensacionalismo e o Autodiagnóstico
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Não publicamos testes de autodiagnóstico, promessas de cura rápida, prazos garantidos de tratamento nem estatísticas sem comprovação documental. Sempre destacamos que sinais comportamentais devem ser avaliados considerando a frequência, a persistência e o contexto de vida de cada criança ou adulto.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              4. Uso Ético de Tecnologia e Inteligência Artificial
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Ferramentas tecnológicas podem ser utilizadas apenas como apoio na estruturação visual de tabelas, revisão ortográfica e organização de tópicos. Todo o conteúdo clínico, exemplos práticos e orientações passam obrigatoriamente pela redação, curadoria e revisão crítica humana da psicóloga responsável ({PROFESSIONAL_CRP}).
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <RefreshCw className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              5. Atualização Periódica e Canal de Correções
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Cada artigo exibe de forma transparente sua data de publicação e a data da última revisão clínica. Caso identifique qualquer trecho que mereça esclarecimento adicional, entre em contato conosco pela página de{' '}
            <Link href="/contato" className="text-primary-600 underline hover:text-primary-700">
              Contato
            </Link>
            .
          </p>
        </section>

        <div className="flex flex-wrap justify-between items-center gap-4 bg-primary-50 rounded-2xl p-6 border border-primary-100">
          <div>
            <p className="font-bold text-gray-800">Responsável Técnica e Editorial</p>
            <p className="text-sm text-gray-600">
              {PROFESSIONAL_AUTHOR} — Psicóloga ({PROFESSIONAL_CRP})
            </p>
          </div>
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm hover:text-primary-800"
          >
            Ver currículo completo em Sobre <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
