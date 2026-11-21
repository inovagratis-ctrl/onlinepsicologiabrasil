import Link from 'next/link'
import Image from 'next/image'
import { Activity, ShieldCheck, HeartHandshake, FileCheck, PhoneCall, Award } from 'lucide-react'
import ManageCookiesLink from './ManageCookiesLink'

export default function Footer() {
  return (
    <footer className="bg-[#123F42] text-emerald-100/80 pt-16 pb-12 border-t border-[#1d5c5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Marca Oficial & Missão */}
          <div className="space-y-4 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-white rounded-2xl p-2.5 pr-4 border border-slate-200 shadow-sm hover:opacity-95 transition group"
            >
              <div className="w-11 h-11 relative shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="Psicologia Direta Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center leading-none text-left">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0F5B5B] whitespace-nowrap">
                  Psicologia Direta
                </span>
                <span className="text-[11px] font-medium text-slate-500 mt-1 whitespace-nowrap">
                  Ferramentas &amp; Psicoeducação
                </span>
              </div>
            </Link>

            <p className="text-xs text-emerald-100/70 leading-relaxed">
              Plataforma digital dedicada à triagem psicoeducativa e ao suporte documental administrativo para psicólogos, promovendo rigor ético e facilidade de acesso.
            </p>

            <div className="p-3.5 bg-[#0d3133] rounded-xl border border-[#1d5c5f] text-[11px] text-emerald-100/90 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7BAE9B]" />
                <span>Propósito Institucional</span>
              </div>
              <p className="text-emerald-100/80 font-medium">Plataforma Digital de Triagem Psicoeducativa e Gestão Documental</p>
              <div className="pt-1 mt-1 border-t border-[#1d5c5f]/70 text-[10px] text-emerald-200/70">
                Curadoria Técnica: <strong className="text-white">Psicóloga Maria do Socorro Araujo Teixeira (CRP 24/02327)</strong>
              </div>
            </div>
          </div>

          {/* Coluna 2: Ferramentas de Rastreio */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#7BAE9B]" />
              Rastreios Educativos
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/testes/ansiedade-gad7"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7BAE9B]"></span>
                  Escala de Ansiedade GAD-7 (Relatório PDF)
                </Link>
              </li>
              <li>
                <Link
                  href="/testes/burnout"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7BAE9B]"></span>
                  Questionário de Burnout (CID-11 QD85)
                </Link>
              </li>
              <li>
                <Link
                  href="/ferramentas"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7BAE9B]"></span>
                  Central de Escalas e Ferramentas
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Ferramentas para Profissionais */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#7BAE9B]" />
              Para Psicólogos
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/ferramentas/gerador-documentos"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7BAE9B]"></span>
                  Declaração de Comparecimento (Res. 06/2019)
                </Link>
              </li>
              <li>
                <Link
                  href="/ferramentas/gerador-documentos"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7BAE9B]"></span>
                  Recibo IRPF / Carnê-Leão (Valor por Extenso)
                </Link>
              </li>
              <li>
                <Link
                  href="/ferramentas/gerador-documentos"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7BAE9B]"></span>
                  Contrato Terapêutico Simples
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Institucional & Conformidade */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#7BAE9B]" />
              Institucional &amp; Legal
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/sobre" className="hover:text-white transition">
                  Sobre a Plataforma
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white transition">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="hover:text-white transition">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <ManageCookiesLink />
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
                  Canal de Atendimento &amp; Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Aviso Ético e de Emergência Obrigatório */}
        <div className="border-t border-[#1d5c5f] pt-8 pb-4 text-xs text-emerald-100/80 space-y-3">
          <div className="p-4 bg-[#0d3133] rounded-2xl border border-[#1d5c5f] leading-relaxed">
            <strong className="text-white">Aviso Ético e Clínico Importante:</strong> As ferramentas, calculadoras e questionários educativos (como o GAD-7 e o Termômetro de Burnout) disponibilizados neste portal possuem finalidade de autorreflexão e rastreio inicial. Elas <strong className="text-white">não configuram laudo psicológico pericial, consulta médica ou diagnóstico definitivo</strong>. Caso esteja enfrentando sofrimento psíquico intenso, ideação suicida ou crises agudas, busque atendimento presencial em uma Unidade de Pronto Atendimento (UPA), CAPS ou entre em contato imediatamente com o <strong className="text-white">Centro de Valorização da Vida (CVV) pelo telefone gratuito 188</strong> (disponível 24 horas por dia).
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-200/60 pt-4 gap-2">
            <p>© 2026 Psicologia Direta (psicologiadireta.com.br). Todos os direitos reservados.</p>
            <p>Em conformidade com a LGPD (Lei nº 13.709/2018) e Código de Ética Profissional do Psicólogo.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
