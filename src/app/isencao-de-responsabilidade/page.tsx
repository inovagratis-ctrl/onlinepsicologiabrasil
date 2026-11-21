import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, PhoneCall, ShieldAlert, HeartHandshake, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Isenção de Responsabilidade Médica e Ética | Psicologia Direta',
  description:
    'Aviso legal sobre o caráter não diagnóstico dos testes psicométricos online e canais de emergência em saúde mental.',
  alternates: { canonical: 'https://psicologiadireta.com.br/isencao-de-responsabilidade' },
}

export default function IsencaoResponsabilidadePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mb-6 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar para a página inicial
        </Link>

        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-slate-700 space-y-6 text-xs sm:text-sm leading-relaxed">
          <header className="border-b border-slate-200 pb-6">
            <span className="text-xs uppercase font-bold text-rose-700 tracking-wider">
              Aviso Clínico, Legal e Ético Obrigatório
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Isenção de Responsabilidade Médica e Ética
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Diretrizes de segurança para o usuário e limites de atuação dos testes psicométricos automatizados.
            </p>
          </header>

          <section className="space-y-4">
            {/* Bloco de Destaque */}
            <div className="p-5 bg-rose-50 border border-rose-200 rounded-2xl text-rose-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-rose-800">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                Não substitui consulta médica ou avaliação psicológica
              </div>
              <p className="text-xs leading-relaxed text-rose-900">
                O portal <strong>Psicologia Direta</strong> não fornece aconselhamento médico de emergência, consultas personalizadas nem prescrições clínicas automatizadas. Os testes, calculadoras e laudos gerados destinam-se exclusivamente à triagem inicial, reflexão pessoal e educação em saúde.
              </p>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              1. Limites dos Instrumentos de Triagem (GAD-7 e Burnout)
            </h2>
            <p>
              As escalas disponibilizadas no portal são baseadas em protocolos científicos de domínio público e recomendações da Organização Mundial da Saúde (OMS). No entanto, o preenchimento de um questionário digital avalia apenas a percepção subjetiva momentânea do respondente, não tendo a capacidade de:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>Identificar comorbidades psiquiátricas complexas ou causas orgânicas ocultas (ex: alterações endócrinas ou neurológicas).</li>
              <li>Substituir a observação comportamental, a aliança terapêutica e a anamnese clínica conduzida por um profissional devidamente habilitado.</li>
              <li>Servir como documento pericial judicial ou laudo de interdição.</li>
            </ul>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              2. Situações de Emergência e Risco Iminente à Vida
            </h2>
            <p>
              Se você ou alguém que você conhece estiver passando por uma crise aguda de saúde mental, com sofrimento psíquico insuportável, ataques de pânico incapacitantes ou ideação suicida, <strong>não utilize formulários digitais</strong>. Busque ajuda presencial imediata através dos canais de emergência:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <span className="font-bold text-slate-900 block text-sm">CVV (Apoio à Vida)</span>
                <span className="text-lg font-black text-emerald-700 block my-1">188</span>
                <p className="text-[11px] text-slate-500">Gratuito, 24 horas, em todo o Brasil.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <span className="font-bold text-slate-900 block text-sm">SAMU (Emergência Médica)</span>
                <span className="text-lg font-black text-rose-700 block my-1">192</span>
                <p className="text-[11px] text-slate-500">Atendimento móvel de urgência.</p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                <span className="font-bold text-slate-900 block text-sm">CAPS e UPAs</span>
                <span className="text-xs font-bold text-slate-700 block my-2">Rede Pública SUS</span>
                <p className="text-[11px] text-slate-500">Atendimento presencial em saúde mental.</p>
              </div>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-4">
              3. Isenção de Danos
            </h2>
            <p>
              Em nenhuma circunstância o portal Psicologia Direta, seus idealizadores ou responsáveis técnicos serão responsabilizados por quaisquer danos diretos, indiretos, incidentais ou punitivos decorrentes do uso ou da impossibilidade de uso das ferramentas, ou de decisões tomadas pelos usuários com base nas informações contidas neste website.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
