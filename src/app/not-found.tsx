import Link from 'next/link'
import { Activity, ArrowRight, FileSignature, Flame, Home, Wrench } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-slate-50 py-16 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 text-center space-y-6">
        <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          Página Não Encontrada (404)
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          O endereço que você procura não existe ou foi atualizado
        </h1>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          Nosso portal foi totalmente reformulado com uma nova suíte de ferramentas clínicas e documentos para psicólogos. Escolha uma das opções abaixo:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left">
          <Link
            href="/testes/ansiedade-gad7"
            className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 transition group"
          >
            <Activity className="w-5 h-5 text-emerald-600 mb-2" />
            <span className="font-bold text-xs text-slate-900 block group-hover:text-emerald-700">
              Teste GAD-7 (Ansiedade)
            </span>
            <span className="text-[11px] text-slate-500">Laudo completo em PDF</span>
          </Link>

          <Link
            href="/testes/burnout"
            className="p-4 rounded-xl border border-slate-200 hover:border-orange-300 hover:bg-orange-50/40 transition group"
          >
            <Flame className="w-5 h-5 text-orange-600 mb-2" />
            <span className="font-bold text-xs text-slate-900 block group-hover:text-orange-700">
              Termômetro Burnout
            </span>
            <span className="text-[11px] text-slate-500">Critérios CID-11 QD85</span>
          </Link>

          <Link
            href="/ferramentas/gerador-documentos"
            className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50/40 transition group"
          >
            <FileSignature className="w-5 h-5 text-teal-600 mb-2" />
            <span className="font-bold text-xs text-slate-900 block group-hover:text-teal-700">
              Emissor de Documentos
            </span>
            <span className="text-[11px] text-slate-500">Declarações e Recibos</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
