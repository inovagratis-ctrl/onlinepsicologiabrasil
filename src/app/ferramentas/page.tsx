import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  FileText,
  Flame,
  Brain,
  ShieldCheck,
  Download,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  HelpCircle,
  Stethoscope,
  Building2,
  Users,
} from 'lucide-react'
import AdSenseSlot from '@/components/AdSenseSlot'

export const metadata: Metadata = {
  title: 'Central de Ferramentas Gratuitas | Psicologia Direta',
  description:
    'Rastreios educativos (Ansiedade GAD-7, Questionário de Burnout) e modelos de documentos para psicólogos inspirados nas normas do CFP (Resolução 06/2019).',
  keywords: [
    'teste de ansiedade online gratuito',
    'escala gad-7 ansiedade pdf',
    'questionario de burnout educativo',
    'modelos de documentos psicologia cfp',
    'declaracao de comparecimento psicologia',
    'recibo carne leao psicologo',
    'ferramentas de psicologia gratuitas',
  ],
  alternates: {
    canonical: 'https://psicologiadireta.com.br/ferramentas',
  },
}

export default function FerramentasHubPage() {
  return (
    <div className="bg-[#F5F8F6] min-h-screen">
      {/* Hero Header com Textura Botânica Suave (Harmonizada com a Home) */}
      <section className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/90 bg-[#F5F8F6]">
        {/* Imagem de Fundo Botânica Suave */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none"
          style={{ backgroundImage: `url('/header-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#7BAE9B]/50 text-[#0F5B5B] text-xs font-bold tracking-wide uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0F5B5B]" />
            Suíte de Recursos Práticos • Acesso 100% Gratuito
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#123F42] max-w-3xl mx-auto leading-tight">
            Central de Ferramentas &amp; Rastreios em Psicologia
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Instrumentos interativos de autoavaliação fundamentados na literatura científica e modelos de documentos administrativos para psicólogos.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0F5B5B]" />
              Modelos Inspirados na Res. CFP nº 06/2019
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Award className="w-4 h-4 text-[#0F5B5B]" />
              Escala GAD-7 (Spitzer et al.)
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Download className="w-4 h-4 text-[#0F5B5B]" />
              Geração de Relatório em PDF
            </span>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <AdSenseSlot slot="ferramentas_top" />

        {/* SEÇÃO 1: TESTES DE AUTOAVALIAÇÃO */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/90 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F5B5B] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                Para Indivíduos &amp; Equipes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123F42] mt-1.5">
                Instrumentos de Autoavaliação &amp; Saúde Mental
              </h2>
            </div>
            <Users className="w-6 h-6 text-slate-400 hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: GAD-7 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#7BAE9B] transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0F5B5B] flex items-center justify-center font-bold border border-emerald-100">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#0F5B5B] bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 2 a 3 min
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#123F42] group-hover:text-[#0F5B5B] transition">
                    Rastreio de Ansiedade (Escala GAD-7)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Instrumento padrão de 7 perguntas elaborado por Spitzer et al. (2006) para avaliar frequência e intensidade de preocupações e sintomas ansiosos nas últimas duas semanas.
                  </p>
                </div>

                <div className="space-y-2 pt-2 text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F5B5B]"></span>
                    <span>Classificação por faixa: Mínima, Leve, Moderada ou Severa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F5B5B]"></span>
                    <span>Relatório em PDF com gráfico e orientações informativas</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href="/testes/ansiedade-gad7"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0F5B5B] hover:bg-[#123F42] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition shadow-xs"
                >
                  <span>Iniciar Avaliação de Ansiedade</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Burnout */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-700 flex items-center justify-center font-bold border border-orange-100">
                    <Flame className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-200/70 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 3 a 4 min
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#123F42] group-hover:text-orange-700 transition">
                    Termômetro de Estresse e Burnout (CID-11 QD85)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Questionário educativo de autorreflexão laboral inspirado nas 3 dimensões da CID-11: exaustão de energia, despersonalização/cinismo e sensação de ineficácia.
                  </p>
                </div>

                <div className="space-y-2 pt-2 text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                    <span>Pontuação dividida pelas 3 dimensões de sobrecarga</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                    <span>Relatório em PDF com recomendações de autorreflexão</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <Link
                  href="/testes/burnout"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#123F42] hover:bg-[#0F5B5B] text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition shadow-xs"
                >
                  <span>Iniciar Avaliação de Burnout</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO 2: SUÍTE DE DOCUMENTOS PARA PSICÓLOGOS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/90 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                Para Profissionais e Clínicas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123F42] mt-1.5">
                Modelos de Documentos do Psicólogo (Normas CFP)
              </h2>
            </div>
            <Building2 className="w-6 h-6 text-slate-400 hidden sm:block" />
          </div>

          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xs space-y-6">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold text-[#123F42]">
                Modelos de Declarações, Recibos Fiscais e Contratos Terapêuticos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Economize tempo e mantenha o rigor ético. Preencha os campos diretamente no navegador e obtenha modelos editáveis formatados em PDF padrão A4 timbrado, inspirados nas exigências da Resolução CFP nº 06/2019 e da Receita Federal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-[#F5F8F6] rounded-2xl border border-slate-200/90">
                <span className="font-bold text-[#123F42] block text-sm mb-1">📄 Declaração de Sessão</span>
                <p className="text-slate-600">Comprova o comparecimento na sessão para fins de trabalho ou estudo (sem diagnóstico).</p>
              </div>

              <div className="p-4 bg-[#F5F8F6] rounded-2xl border border-slate-200/90">
                <span className="font-bold text-[#123F42] block text-sm mb-1">🧾 Recibo de Consulta</span>
                <p className="text-slate-600">Com valor por extenso automático e campos exigidos no Carnê-Leão / IRPF.</p>
              </div>

              <div className="p-4 bg-[#F5F8F6] rounded-2xl border border-slate-200/90">
                <span className="font-bold text-[#123F42] block text-sm mb-1">📝 Contrato Terapêutico</span>
                <p className="text-slate-600">Cláusulas de sigilo ético, honorários e regras de falta/desmarcação com 24h.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#0F5B5B]" />
                <span>Processamento 100% no seu navegador: nenhum dado de clientes é salvo em servidores remotos.</span>
              </div>

              <Link
                href="/ferramentas/gerador-documentos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F5B5B] hover:bg-[#123F42] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm transition shadow-xs"
              >
                <span>Acessar Gerador de Documentos</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3: RIGOR ÉTICO & CIENTÍFICO */}
        <div className="p-8 bg-white rounded-3xl border border-slate-200/90 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="flex items-center gap-2 text-[#123F42] font-bold text-base">
            <Stethoscope className="w-5 h-5 text-[#0F5B5B]" />
            <span>Nota de Responsabilidade Ética e Metodológica</span>
          </div>
          <p>
            Os instrumentos de triagem disponibilizados pelo <strong>Psicologia Direta</strong> (como a escala GAD-7 e o questionário de Burnout) constituem recursos psicoeducativos e de autorreflexão preliminar. Eles <strong>não substituem a consulta, anamnese ou diagnóstico clínico formal</strong> realizado por um psicólogo ou médico psiquiatra.
          </p>
          <p>
            Os modelos de documentos foram estruturados com base em conceitos da <strong>Resolução CFP nº 06/2019</strong>, cabendo ao profissional que os emite a conferência e assinatura de acordo com seu julgamento ético e normativas regionais.
          </p>
        </div>
      </section>
    </div>
  )
}
