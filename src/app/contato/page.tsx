import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageSquare, Clock, MapPin, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Canal de Atendimento e Ouvidoria',
  description:
    'Entre em contato com a equipe editorial e técnica do portal Psicologia Direta para dúvidas, sugestões ou suporte às ferramentas gratuitas.',
  alternates: { canonical: 'https://psicologiadireta.com.br/contato' },
}

export default function ContatoPage() {
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

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <header className="border-b border-slate-200 pb-6">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Canal Oficial de Atendimento
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Fale com o Psicologia Direta
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Dúvidas sobre o funcionamento das escalas psicométricas, sugestões para o emissor de documentos ou reporte de inconsistências técnicas.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">E-mail Institucional</h3>
              <p className="text-slate-600 text-xs">
                Para assuntos editoriais, parcerias acadêmicas ou feedback das ferramentas:
              </p>
              <a
                href="mailto:contato@psicologiadireta.com.br"
                className="font-mono text-emerald-800 font-bold block text-sm hover:underline"
              >
                contato@psicologiadireta.com.br
              </a>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Horário de Resposta</h3>
              <p className="text-slate-600 text-xs">
                Nossa equipe técnica e editorial responde a solicitações em até 2 dias úteis.
              </p>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                Segunda a sexta-feira, das 09h às 18h (Horário de Brasília).
              </div>
            </div>
          </div>

          <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-emerald-950 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Identificação Institucional
            </div>
            <p className="text-emerald-900">
              Psicologia Direta — Plataforma Digital de Triagem Psicoeducativa e Gestão Documental.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
