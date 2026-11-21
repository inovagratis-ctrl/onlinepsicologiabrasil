import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock,
  Coins,
  FileCheck,
  FileSignature,
  FileText,
  Flame,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  PhoneCall,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wrench,
} from 'lucide-react'
import AdSenseSlot from '@/components/AdSenseSlot'

export const metadata: Metadata = {
  title: 'Psicologia Direta | Ferramentas de Rastreio em Saúde Mental e Modelos CFP',
  description:
    'Portal de ferramentas de rastreio psicométrico: Questionário de Ansiedade GAD-7 com relatório em PDF, Termômetro de Burnout e Modelos de Documentos para Psicólogos (Resolução CFP nº 06/2019).',
  keywords: [
    'teste de ansiedade online gratuito',
    'escala gad-7 com relatorio pdf',
    'questionario de burnout educativo',
    'rastreio de esgotamento profissional',
    'gerador de declaracao de comparecimento psicologia cfp',
    'recibo carne leao psicologo valor por extenso',
    'modelos para psicologos cfp',
    'psicologia direta',
  ],
  alternates: {
    canonical: 'https://psicologiadireta.com.br',
  },
}

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ================= HERO PRINCIPAL ================= */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/90 bg-[#F5F8F6]">
        {/* Textura Botânica Suave de Fundo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 pointer-events-none"
          style={{ backgroundImage: `url('/header-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          {/* Badge Institucional */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#7BAE9B]/50 text-[#0F5B5B] text-xs font-bold tracking-wide uppercase shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#0F5B5B]" />
            <span>Psicologia Direta • Plataforma Digital de Triagem Psicoeducativa e Gestão Documental</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#123F42] max-w-4xl mx-auto leading-tight">
            Ferramentas Clínicas, Rastreios Psicoeducativos &amp; Modelos de Apoio
          </h1>

          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Acesso gratuito a instrumentos de rastreio amplamente referenciados na literatura (escala GAD-7), questionário educativo de estresse ocupacional baseado na CID-11 e modelos de documentos editáveis de apoio para psicólogos.
          </p>

          <p className="text-xs text-[#0F5B5B] font-medium max-w-xl mx-auto">
            Curadoria técnico-clínica: <strong>Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327)</strong>
          </p>

          {/* Quick CTA Buttons */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-3 text-sm font-bold">
            <Link
              href="/testes/ansiedade-gad7"
              className="inline-flex items-center gap-2 bg-[#0F5B5B] hover:bg-[#123F42] text-white px-6 py-3.5 rounded-xl shadow-md transition group"
            >
              <Activity className="w-4 h-4 group-hover:scale-110 transition" />
              <span>Fazer Teste de Ansiedade (GAD-7)</span>
            </Link>
            <Link
              href="/testes/burnout"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#123F42] border border-slate-300 px-6 py-3.5 rounded-xl shadow-xs transition"
            >
              <Flame className="w-4 h-4 text-orange-600" />
              <span>Termômetro de Burnout</span>
            </Link>
            <Link
              href="/ferramentas/gerador-documentos"
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3.5 rounded-xl shadow-xs transition"
            >
              <FileSignature className="w-4 h-4 text-emerald-200" />
              <span>Emissor para Psicólogos</span>
            </Link>
          </div>

          {/* Indicadores de Segurança e Privacidade */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-600 border-t border-slate-200/80">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0F5B5B]" />
              Sem cadastro obrigatório
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0F5B5B]" />
              Processamento local no navegador (LGPD)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0F5B5B]" />
              Relatórios e documentos em PDF prontos
            </span>
          </div>
        </div>
      </section>

      {/* Publicidade Superior */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        <AdSenseSlot slot="home_top" />
      </div>

      {/* ================= SUÍTE DE FERRAMENTAS PRINCIPAIS ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Bloco 1: Rastreios de Saúde Mental (B2C) */}
        <div>
          <div className="flex items-end justify-between border-b border-slate-200 pb-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                Triagem Psicométrica Preliminar
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Escalas de Autoavaliação com Relatório em PDF
              </h2>
            </div>
            <Link
              href="/ferramentas"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition"
            >
              Ver todas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Ansiedade GAD-7 */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 2 a 3 minutos
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    Rastreio de Ansiedade (Escala GAD-7)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Instrumento padrão de 7 perguntas elaborado por Spitzer et al. (2006) para mensurar a frequência e intensidade de sintomas ansiosos nas últimas duas semanas.
                  </p>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-slate-600 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Classificação por faixa: Mínima, Leve, Moderada ou Severa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Geração de relatório A4 em PDF para imprimir ou salvar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Técnicas educativas de autorregulação e higiene do sono</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/testes/ansiedade-gad7"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition shadow-sm"
                >
                  <span>Iniciar Avaliação de Ansiedade (GAD-7)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card Burnout */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-700 flex items-center justify-center font-bold border border-orange-200">
                    <Flame className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 3 a 4 minutos
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-700 transition">
                    Termômetro de Estresse e Burnout
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Questionário educativo inspirado nos 3 eixos conceituais da CID-11 (QD85): exaustão de energia, despersonalização/cinismo e sensação de ineficácia profissional.
                  </p>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-slate-600 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Pontuação dividida pelas 3 dimensões de sobrecarga</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Relatório em PDF com orientações de autorreflexão e pausas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>Informações gerais sobre requisitos de perícia e direitos</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/testes/burnout"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition shadow-sm"
                >
                  <span>Iniciar Avaliação de Burnout (QD85)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Publicidade Intermediária 1 */}
        <AdSenseSlot slot="home_mid1" />

        {/* Bloco 2: Suíte de Documentos para Psicólogos (B2B) */}
        <div>
          <div className="flex items-end justify-between border-b border-slate-200 pb-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md">
                Gestão Clínica &amp; Prática Profissional
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Central de Emissão de Documentos Éticos (Normas CFP)
              </h2>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-slate-50 to-teal-50/50 rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            <div className="max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Padronize suas Declarações, Recibos e Contratos Terapêuticos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Desenvolvido especialmente para psicólogos clínicos autônomos e clínicas. Preencha os campos no navegador e obtenha instantaneamente documentos em formato A4 timbrado, com cálculo automático de valores por extenso para o Carnê-Leão e salvaguarda do sigilo profissional.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Doc 1 */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Declaração de Comparecimento
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Comprova presença na sessão para abono de faltas no trabalho ou faculdade, em conformidade estrita com a Resolução CFP nº 06/2019 (sem revelar diagnóstico).
                  </p>
                </div>
              </div>

              {/* Doc 2 */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Recibo IRPF / Carnê-Leão
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Conversão instantânea de valor numérico para valor por extenso em reais. Formatação exigida para dedução de despesas médicas na declaração de imposto de renda.
                  </p>
                </div>
              </div>

              {/* Doc 3 */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Contrato Terapêutico Simples
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Acordo claro de enquadre: regras de desmarcação com 24h de antecedência, periodicidade, honorários e cláusula de sigilo ético (Art. 9º do Código de Ética).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Privacidade total: nenhuma informação de paciente é transmitida ou gravada externamente.</span>
              </div>
              <Link
                href="/ferramentas/gerador-documentos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm transition shadow-sm"
              >
                <span>Acessar Gerador de Documentos CFP</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Publicidade Intermediária 2 */}
        <AdSenseSlot slot="home_mid2" />

        {/* ================= CONTEÚDO EDITORIAL PROFUNDO (BLINDAGEM ADSENSE E-E-A-T) ================= */}
        <section className="bg-white rounded-3xl p-7 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-slate-700">
          <header className="border-b border-slate-200 pb-6">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Artigo Científico &amp; Diretrizes Metodológicas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              A Importância das Escalas Psicométricas na Triagem e Psicoeducação em Saúde Mental
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Por Equipe Editorial do Psicologia Direta — Plataforma Digital de Triagem Psicoeducativa e Gestão Documental.
            </p>
          </header>

          <div className="prose max-w-none space-y-6 text-xs sm:text-sm leading-relaxed">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              1. Por que Rastreios Estruturados São Cruciais na Atenção à Saúde?
            </h3>
            <p>
              Estudos epidemiológicos conduzidos pela Organização Mundial da Saúde (OMS) apontam que o Brasil lidera os índices mundiais de prevalência de transtornos de ansiedade, atingindo aproximadamente 9,3% da população. No entanto, uma das maiores barreiras para o tratamento precoce reside na <strong>dificuldade que a própria pessoa tem em reconhecer que seus sintomas fisiológicos e cognitivos configuram um quadro clínico</strong>, e não apenas um traço de personalidade ou fraqueza passageira.
            </p>
            <p>
              Instrumentos de triagem como o <strong>GAD-7 (Generalized Anxiety Disorder 7-item scale)</strong> e os questionários de Burnout fundamentados na <strong>CID-11 (Código QD85)</strong> atuam como pontes psicoeducativas. Ao traduzir sensações difusas em indicadores quantitativos objetivos, eles fornecem à pessoa e aos profissionais de saúde uma visão clara da intensidade dos sintomas, encorajando a busca oportuna por intervenção profissional antes que o quadro evolua para incapacitação laboral ou sofrimento psíquico crônico.
            </p>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              2. Como os Resultados Devem Ser Compreendidos?
            </h3>
            <p>
              É imperativo destacar a diferença conceitual entre <strong>triagem psicométrica</strong> e <strong>diagnóstico clínico</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">O que a Triagem Faz:</strong>
                <p className="text-slate-600 text-xs">
                  Mapeia a frequência de comportamentos e sintomas nas últimas semanas, sinalizando faixas de risco (mínimo, leve, moderado ou severo) para subsidiar a tomada de decisão do paciente e do clínico.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">O que o Diagnóstico Exige:</strong>
                <p className="text-slate-600 text-xs">
                  Anamnese aprofundada, análise do contexto sociocultural e histórico de vida, exclusão de causas orgânicas/médicas (como distúrbios da tireoide) e escuta técnica qualificada por psicólogo(a) ou psiquiatra.
                </p>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              3. Padronização Ética e Documental na Prática do Psicólogo
            </h3>
            <p>
              Para além do suporte ao público geral, o <strong>Psicologia Direta</strong> nasceu com a missão de valorizar a prática profissional da psicologia. A elaboração de documentos escritos é uma das atividades mais rotineiras e, ao mesmo tempo, mais fiscalizadas pelos Conselhos Regionais de Psicologia. A <strong>Resolução CFP nº 06/2019</strong> estabelece diretrizes rigorosas sobre linguagem, estrutura e guarda documental. Disponibilizar modelos automatizados e seguros previne infrações éticas e garante que os pacientes recebam comprovantes idôneos para fins trabalhistas e fiscais.
            </p>
          </div>
        </section>

        {/* ================= APOIO IMEDIATO À VIDA (CVV 188) ================= */}
        <section className="bg-emerald-950 text-white rounded-3xl p-7 sm:p-10 border border-emerald-800 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                Apoio Emocional Gratuito 24 Horas
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Você não precisa enfrentar tudo sozinho(a)
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200 max-w-xl leading-relaxed">
                Se você está vivenciando sofrimento psíquico intenso, desespero ou pensamentos de autoagressão, ligue para o Centro de Valorização da Vida (CVV). O atendimento é 100% gratuito, confidencial e disponível 24 horas por dia por telefone ou chat online.
              </p>
            </div>
            <a
              href="tel:188"
              className="inline-flex items-center gap-3 bg-white hover:bg-emerald-50 text-emerald-950 font-black px-6 py-4 rounded-2xl shadow-lg transition hover:scale-105 shrink-0 text-sm sm:text-base"
            >
              <PhoneCall className="w-5 h-5 text-emerald-700" />
              <span>Ligar Grátis 188 (CVV)</span>
            </a>
          </div>
        </section>

      </section>

      {/* Publicidade Inferior */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <AdSenseSlot slot="home_bottom" />
      </div>
    </div>
  )
}
