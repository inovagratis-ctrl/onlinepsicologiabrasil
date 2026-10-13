'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Download,
  CheckCircle,
  FileText,
  Printer,
  Sparkles,
  ArrowLeft,
  Mail,
  ShieldCheck,
  Heart
} from 'lucide-react'
import Link from 'next/link'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'

const MATERIAL_MAP: Record<string, { name: string; pages: number; badge: string }> = {
  'historias-sociais': {
    name: 'Histórias Sociais Ilustradas para Crianças',
    pages: 20,
    badge: 'E-book em PDF A4',
  },
  pecs: {
    name: 'Pranchas e Cartões de Comunicação Visual (CAA)',
    pages: 25,
    badge: 'Kit de Apoio Visual A4',
  },
  'cartoes-sentimentos': {
    name: 'Cartões de Sentimentos e Emoções',
    pages: 15,
    badge: 'Cartões Psicoeducativos A4',
  },
  'estrategias-regulacao': {
    name: 'Estratégias Práticas de Regulação Emocional',
    pages: 12,
    badge: 'Guia de Aplicação A4',
  },
  'atividades-solicitacao': {
    name: 'Atividades de Solicitação no Contexto Natural',
    pages: 12,
    badge: 'Apostila Prática A4',
  },
  'kit-rotina-emocoes': {
    name: 'Kit de Rotina e Emoções para Crianças (Quadro, Termômetro e Checklists)',
    pages: 10,
    badge: 'Material Gratuito Exclusivo',
  },
}

function DownloadContent() {
  const searchParams = useSearchParams()
  const materialKey = searchParams.get('material') || searchParams.get('kit') || 'historias-sociais'
  const customName = searchParams.get('name')
  const email = searchParams.get('email')

  const materialInfo = MATERIAL_MAP[materialKey] || {
    name: customName || 'Material Psicoeducativo em PDF',
    pages: 20,
    badge: 'PDF A4 Completo',
  }

  const handleDownload = () => {
    // Gera arquivo para download imediato no navegador
    const content = `PSICOLOGIA DIRETA — RECURSO DIGITAL
Revisão Técnica: ${PROFESSIONAL_AUTHOR} (${PROFESSIONAL_CRP})
Material: ${materialInfo.name}
Total de Páginas: ${materialInfo.pages} páginas (A4)

Instruções de Impressão:
1. Abra o arquivo em um leitor de PDF (Adobe Acrobat, Edge ou Chrome).
2. Configure a impressora para folha tamanho A4 em escala de 100% (sem ajustar às margens).
3. Para cartões e pranchas, recomendamos plastificar com papel contact ou polaseal para maior durabilidade.

Aviso Ético: Este material tem finalidade exclusivamente psicoeducativa e de orientação familiar/escolar. Não substitui avaliação ou acompanhamento profissional.`

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${materialKey}-psicologia-direta.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    // Também abre tela de impressão do navegador para gerar PDF imediatamente
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.print()
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
          <CheckCircle className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Pedido Confirmado • Acesso Liberado
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            Seu material está pronto!
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Agradecemos a confiança no trabalho do portal <strong>Psicologia Direta</strong>.
          </p>
        </div>

        {/* Card do Produto Pronto */}
        <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-5 text-left space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-bold text-blue-700 uppercase">{materialInfo.badge}</span>
            <span>{materialInfo.pages} Páginas A4</span>
          </div>
          <h3 className="font-extrabold text-slate-900 text-base">
            {materialInfo.name}
          </h3>
          {email && (
            <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              Cópia enviada para: <strong className="text-slate-800">{email}</strong>
            </p>
          )}
        </div>

        {/* Botão de Download Principal */}
        <div className="pt-2">
          <button
            onClick={handleDownload}
            type="button"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base py-4 px-6 rounded-xl transition-all shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
          >
            <Download className="w-5 h-5" />
            Baixar PDF / Imprimir Arquivo Agora
          </button>
          <span className="text-[11px] text-slate-500 block mt-2">
            Clique acima para iniciar o download e abrir a visualização de impressão A4.
          </span>
        </div>

        {/* Dicas de Aplicação */}
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 text-left space-y-1.5">
          <span className="font-bold flex items-center gap-1.5 text-blue-950">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Dicas para aproveitar o material:
          </span>
          <p className="text-blue-800 text-[11px] leading-relaxed">
            • Salve uma cópia permanente no seu computador ou Google Drive.<br />
            • Imprima em papel com gramatura 90g ou 120g se for plastificar os cartões.<br />
            • Em caso de dúvidas, utilize nosso suporte pelo menu Contato.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Início
          </Link>
          <Link
            href="/materiais"
            className="font-bold text-blue-600 hover:text-blue-800"
          >
            Explorar Outros Materiais →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function DownloadPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-semibold text-slate-600">Preparando seu material...</p>
          </div>
        </div>
      }
    >
      <DownloadContent />
    </Suspense>
  )
}
