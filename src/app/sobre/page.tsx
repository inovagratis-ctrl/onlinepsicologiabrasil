import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  BookOpen,
  HeartHandshake,
  ArrowRight,
  FileCheck,
  FileText,
  Activity,
  Flame,
  FileSignature,
  Compass,
  Users,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre a Plataforma | Plataforma Digital de Triagem Psicoeducativa e Gestão Documental',
  description:
    'Conheça a proposta institucional do portal Psicologia Direta: ferramentas gratuitas de autoavaliação educativa e modelos administrativos para a prática da psicologia.',
  alternates: { canonical: 'https://psicologiadireta.com.br/sobre' },
}

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header Institucional */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 mb-4">
            <Shield className="w-4 h-4 text-emerald-600" />
            Propósito Institucional &amp; Psicoeducação Aberta
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sobre o Portal Psicologia Direta
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mt-3">
            O <strong>Psicologia Direta</strong> é uma <strong>Plataforma Digital de Triagem Psicoeducativa e Gestão Documental</strong>, concebida para aproximar a sociedade de instrumentos psicométricos públicos de autoavaliação e apoiar a rotina de psicólogos com modelos documentais padronizados.
          </p>
        </div>

        {/* Pilares Institucionais */}
        <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Nossos Compromissos Fundamentais
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Democratizar a Informação em Saúde Mental com Rigor e Ética
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Acreditamos que o acesso à informação de qualidade é o primeiro passo para o autocuidado consciente. O sofrimento emocional não deve ser enfrentado no isolamento nem através de mitos. Disponibilizamos ferramentas acessíveis e gratuitas que auxiliam na reflexão individual e orientam a busca por apoio terapêutico qualificado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                1. Triagem Psicoeducativa
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instrumentos de domínio público e fundamentados na literatura científica internacional (como o questionário GAD-7 de Spitzer et al.), traduzidos para interface intuitiva e acessível a qualquer cidadão.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <FileSignature className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                2. Apoio à Gestão Clínica
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modelos editáveis de documentos administrativos para psicólogos (declarações, recibos fiscais com conversor por extenso e contratos de enquadre), inspirados nas normas éticas da Resolução CFP nº 06/2019.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">
                3. Privacidade por Princípio (LGPD)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% dos cálculos das pontuações e da geração de documentos em formato A4 ocorrem no navegador do próprio usuário. Nenhum dado sensível de saúde mental é gravado em servidores ou compartilhado com terceiros.
              </p>
            </div>
          </div>
        </section>

        {/* Responsabilidade Técnica e Curadoria Clínica */}
        <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Responsabilidade Técnica &amp; Curadoria Clínica</span>
          </div>

          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#0F5B5B] text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-sm">
              MS
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900">
                  Psicóloga Maria do Socorro Araujo Teixeira
                </h3>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-200/60 px-2.5 py-0.5 rounded-full">
                  CRP 24/02327
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Responsável técnica pela curadoria clínica, revisão ético-normativa dos modelos documentais (em conformidade com a Resolução CFP nº 06/2019 e Código de Ética Profissional do Psicólogo) e adequação psicoeducativa dos instrumentos de rastreio disponibilizados neste portal.
              </p>
            </div>
          </div>
        </section>

        {/* Diretrizes Éticas e de Limitação */}
        <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900">
            Limitações dos Instrumentos e Diretrizes de Uso
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              Os questionários e calculadoras deste portal destinam-se exclusivamente à reflexão pessoal e psicoeducação. <strong>Eles não configuram laudo psicológico, parecer pericial, consulta médica ou diagnóstico clínico</strong>.
            </p>
            <p>
              O diagnóstico de condições de saúde mental exige avaliação clínica aprofundada, com escuta qualificada e diagnóstico diferencial conduzido por psicólogo(a) habilitado(a) no Conselho Regional de Psicologia (CRP) ou médico(a) psiquiatra no Conselho Regional de Medicina (CRM).
            </p>
            <p>
              Em caso de crises agudas, sofrimento intenso ou pensamentos de autoagressão, incentivamos a busca imediata de apoio presencial em serviços de emergência (UPA/CAPS) ou através do <strong>Centro de Valorização da Vida (CVV) pelo telefone gratuito 188</strong>.
            </p>
          </div>
        </section>

        {/* Ferramentas em Destaque */}
        <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900">
            Nossas Ferramentas Gratuitas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/testes/ansiedade-gad7"
              className="p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition group flex flex-col justify-between"
            >
              <div>
                <Activity className="w-6 h-6 text-emerald-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition">
                  Questionário GAD-7 (Ansiedade)
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Cálculo automático de pontuação de 0 a 21 e relatório para impressão em PDF.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 mt-4 flex items-center gap-1">
                Acessar questionário <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/testes/burnout"
              className="p-5 rounded-2xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50/30 transition group flex flex-col justify-between"
            >
              <div>
                <Flame className="w-6 h-6 text-orange-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-orange-700 transition">
                  Termômetro de Estresse e Burnout
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Mapeamento educativo nos 3 eixos conceituais da CID-11 (QD85).
                </p>
              </div>
              <span className="text-xs font-bold text-orange-700 mt-4 flex items-center gap-1">
                Acessar questionário <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/ferramentas/gerador-documentos"
              className="p-5 rounded-2xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition group flex flex-col justify-between"
            >
              <div>
                <FileSignature className="w-6 h-6 text-teal-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition">
                  Modelos de Documentos
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Declarações de comparecimento, recibos com extenso e contratos de apoio.
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 mt-4 flex items-center gap-1">
                Acessar modelos <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
