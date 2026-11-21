import Link from 'next/link'
import { Activity, ShieldCheck, HeartHandshake, FileCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Marca & Missão */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Psicologia<span className="text-emerald-400">Direta</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plataforma digital dedicada a democratizar o acesso a instrumentos de rastreio em saúde mental e otimizar a prática profissional de psicólogos em conformidade com as normas do Conselho Federal de Psicologia (CFP).
            </p>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/80 text-[11px] text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Propósito Institucional
              </div>
              <p className="font-medium text-slate-200">Plataforma Digital de Triagem Psicoeducativa e Gestão Documental</p>
              <p className="text-slate-400">Curadoria Técnica: <strong>Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327)</strong></p>
            </div>
          </div>

          {/* Coluna 2: Ferramentas de Rastreio */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              Rastreios Educativos
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/testes/ansiedade-gad7"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Escala de Ansiedade GAD-7 (Relatório PDF)
                </Link>
              </li>
              <li>
                <Link
                  href="/testes/burnout"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Questionário de Burnout (CID-11 QD85)
                </Link>
              </li>
              <li>
                <Link
                  href="/ferramentas"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Central de Escalas e Testes Gratuitos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Ferramentas para Profissionais */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              Para Psicólogos
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/ferramentas/gerador-documentos"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Declaração de Comparecimento (Res. 06/2019)
                </Link>
              </li>
              <li>
                <Link
                  href="/ferramentas/gerador-documentos"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Recibo IRPF / Carnê-Leão (Valor por Extenso)
                </Link>
              </li>
              <li>
                <Link
                  href="/ferramentas/gerador-documentos"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Contrato Terapêutico Simples
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Institucional & Conformidade */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              Institucional & Legal
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/sobre" className="hover:text-white transition">
                  Sobre a Plataforma
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white transition">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="hover:text-white transition">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-white transition">
                  Termos e Condições de Uso
                </Link>
              </li>
              <li>
                <Link href="/isencao-de-responsabilidade" className="hover:text-white transition">
                  Isenção de Responsabilidade Médica
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition">
                  Canal de Atendimento & Ouvidoria
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Aviso Ético e de Emergência Obrigatório */}
        <div className="border-t border-slate-800 pt-8 pb-6 text-xs text-slate-400 space-y-3">
          <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/60 leading-relaxed">
            <strong className="text-slate-200">Aviso Ético e Clínico Importante:</strong> As ferramentas, calculadoras e escalas psicométricas (GAD-7 e Termômetro de Burnout) disponibilizadas neste portal possuem finalidade estritamente psicoeducativa e de rastreio inicial. Elas <strong className="text-slate-200">não configuram laudo psicológico pericial, consulta médica ou diagnóstico definitivo</strong>. Caso esteja enfrentando sofrimento psíquico intenso, ideação suicida ou crises agudas, busque atendimento presencial em uma Unidade de Pronto Atendimento (UPA), CAPS ou entre em contato imediatamente com o <strong>Centro de Valorização da Vida (CVV) pelo telefone 188</strong> (ligação gratuita em todo o território nacional, disponível 24 horas por dia).
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-4 gap-2">
            <p>© 2026 Psicologia Direta (psicologiadireta.com.br). Todos os direitos reservados.</p>
            <p>Em conformidade com a LGPD (Lei nº 13.709/2018) e Código de Ética Profissional do Psicólogo.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
