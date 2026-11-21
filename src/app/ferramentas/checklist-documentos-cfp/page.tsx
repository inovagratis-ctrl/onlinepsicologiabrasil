'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Printer,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  Info,
  Scale,
  FileText,
  BadgeCheck,
} from 'lucide-react'

type DocType = 'declaracao' | 'atestado' | 'relatorio' | 'recibo'

interface ChecklistItem {
  id: string
  text: string
  detail: string
  artigoCfp: string
  critical?: boolean
}

const CHECKLIST_GERAL: ChecklistItem[] = [
  {
    id: 'num_paginas',
    text: 'Numeração contínua de páginas',
    detail: 'Todas as laudas estão numeradas indicando a página atual e o total de páginas (exemplo: folha 1 de 2, folha 2 de 2).',
    artigoCfp: 'Resolução CFP nº 06/2019, Art. 5º, § 1º',
  },
  {
    id: 'rubrica_assinatura',
    text: 'Rubrica em todas as folhas e assinatura completa ao final',
    detail: 'Todas as laudas intermediárias contêm rubrica manual ou digital, e a última lauda traz assinatura, carimbo profissional e número de registro no CRP.',
    artigoCfp: 'Resolução CFP nº 06/2019, Art. 5º, § 2º',
  },
  {
    id: 'linguagem_tecnica',
    text: 'Linguagem rigorosa, impessoal e técnica',
    detail: 'A redação é clara, objetiva, sustentada em dados e fatos observados, sem adjetivações excessivas ou juízos morais de valor.',
    artigoCfp: 'Resolução CFP nº 06/2019, Art. 3º',
  },
  {
    id: 'guarda_documental',
    text: 'Previsão de arquivamento pelo prazo mínimo de 5 anos',
    detail: 'Uma via idêntica ou cópia digital arquivada em prontuário seguro, sob sigilo profissional, mantida pelo prazo legal de cinco anos.',
    artigoCfp: 'Resolução CFP nº 06/2019, Art. 15',
  },
]

const CHECKLIST_ESPECIFICO: Record<DocType, ChecklistItem[]> = {
  declaracao: [
    {
      id: 'dec_sem_sintomas',
      text: 'VEDAÇÃO: Sem registro de sintomas, CID ou diagnóstico',
      detail: 'A declaração NUNCA deve conter menção a sintomas, estado mental, hipótese diagnóstica ou código de CID.',
      artigoCfp: 'Resolução CFP nº 06/2019, Art. 9º, § 2º',
      critical: true,
    },
    {
      id: 'dec_finalidade',
      text: 'Finalidade estrita de comparecimento ou acompanhamento',
      detail: 'O texto limita-se a atestar que o cliente compareceu ou está em atendimento no serviço de psicologia com data e horário.',
      artigoCfp: 'Resolução CFP nº 06/2019, Art. 9º, § 1º',
    },
  ],
  atestado: [
    {
      id: 'atest_processo_previo',
      text: 'Resultado de processo prévio de avaliação psicológica',
      detail: 'O atestado psicológico fundamenta-se obrigatoriamente em avaliação psicológica concluída ou processo continuado devidamente registrado.',
      artigoCfp: 'Resolução CFP nº 06/2019, Art. 10, caput',
      critical: true,
    },
    {
      id: 'atest_finalidade_estrita',
      text: 'Informação restrita ao estritamente necessário para o solicitante',
      detail: 'Informa apenas a condição de aptidão ou inaptidão para a finalidade requerida, resguardando o sigilo quanto a detalhes íntimos da vida do paciente.',
      artigoCfp: 'Resolução CFP nº 06/2019, Art. 10, § 1º',
    },
    {
      id: 'atest_cid_autorizado',
      text: 'Inclusão de CID somente com autorização expressa do atendido',
      detail: 'O código de diagnóstico (CID) só pode ser grafado se o paciente (ou responsável legal) solicitar formalmente por escrito.',
      artigoCfp: 'Resolução CFP nº 06/2019, Art. 10, § 3º',
      critical: true,
    },
  ],
  relatorio: [
    {
      id: 'rel_estrutura_4partes',
      text: 'Estrutura formal em 4 partes obrigatórias',
      detail: 'O relatório psicológico contém: I - Identificação; II - Descrição da Demanda; III - Procedimento; IV - Análise; V - Conclusão.',
      artigoCfp: 'Resolução CFP nº 06/2019, Art. 11, § 1º',
    },
    {
      id: 'rel_fundamentacao_tecnica',
      text: 'Descrição fundamentada dos instrumentos e técnicas',
      detail: 'O relatório cita claramente as entrevistas, instrumentos psicométricos (SATEPSI) ou observações clínicas utilizadas no procedimento.',
      artigoCfp: 'Resolução CFP nº 06/2019, Art. 11, § 4º',
    },
  ],
  recibo: [
    {
      id: 'rec_valor_extenso',
      text: 'Valor em algarismos numéricos e por extenso em reais',
      detail: 'O recibo discrimina o montante numérico e a escrita completa por extenso em moeda corrente para validade perante a Receita Federal.',
      artigoCfp: 'Instrução Normativa RFB nº 1500/2014 (Carnê-Leão)',
    },
    {
      id: 'rec_cpf_cnpj',
      text: 'Identificação completa de CPF e dados de ambas as partes',
      detail: 'Constam o CPF e nome do psicólogo prestador e o CPF e nome do paciente/responsável financeiro para dedução correta do IRPF.',
      artigoCfp: 'Receita Federal do Brasil / Livro Caixa Digital',
    },
  ],
}

export default function ChecklistCfpPage() {
  const [docType, setDocType] = useState<DocType>('declaracao')
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const currentItems = [...CHECKLIST_GERAL, ...CHECKLIST_ESPECIFICO[docType]]
  const totalCount = currentItems.length
  const completedCount = currentItems.filter((item) => checkedItems[item.id]).length
  const progressPercent = Math.round((completedCount / totalCount) * 100)
  const isAllChecked = completedCount === totalCount

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleReset = () => {
    setCheckedItems({})
  }

  const handleCheckAll = () => {
    const all: Record<string, boolean> = {}
    currentItems.forEach((i) => {
      all[i.id] = true
    })
    setCheckedItems(all)
  }

  return (
    <div className="bg-[#F5F8F6] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-6 text-xs text-slate-500 flex items-center gap-2 print:hidden">
          <Link href="/" className="hover:text-[#0F5B5B] transition">
            Início
          </Link>
          <span>/</span>
          <Link href="/ferramentas" className="hover:text-[#0F5B5B] transition">
            Ferramentas
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Checklist Ético CFP</span>
        </nav>

        {/* Header */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs mb-8 print:hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold tracking-wide uppercase border border-teal-100">
                <Scale className="w-3.5 h-3.5 text-[#0F5B5B]" />
                Conformidade Profissional CFP
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123F42] tracking-tight">
                Checklist Ético de Emissão Documental (Resolução CFP nº 06/2019)
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Lista de conferência prévia para psicólogos revisarem itens obrigatórios, requisitos formais e vedações éticas antes da entrega de documentos clínicos a pacientes ou instituições.
              </p>
            </div>
            <div className="shrink-0 flex sm:flex-col gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCheckAll}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F5B5B] hover:bg-[#123F42] text-white text-xs font-bold transition shadow-xs w-full"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Marcar Todos
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold transition w-full"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Limpar
              </button>
            </div>
          </div>

          {/* Abas de Tipos de Documento */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
              Selecione o documento que você vai emitir:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setDocType('declaracao')}
                className={`px-3 py-2.5 rounded-xl font-bold text-xs transition border flex items-center justify-center gap-1.5 ${
                  docType === 'declaracao'
                    ? 'bg-[#123F42] text-white border-[#123F42] shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                1. Declaração
              </button>
              <button
                type="button"
                onClick={() => setDocType('atestado')}
                className={`px-3 py-2.5 rounded-xl font-bold text-xs transition border flex items-center justify-center gap-1.5 ${
                  docType === 'atestado'
                    ? 'bg-[#123F42] text-white border-[#123F42] shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <BadgeCheck className="w-3.5 h-3.5" />
                2. Atestado
              </button>
              <button
                type="button"
                onClick={() => setDocType('relatorio')}
                className={`px-3 py-2.5 rounded-xl font-bold text-xs transition border flex items-center justify-center gap-1.5 ${
                  docType === 'relatorio'
                    ? 'bg-[#123F42] text-white border-[#123F42] shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                3. Relatório
              </button>
              <button
                type="button"
                onClick={() => setDocType('recibo')}
                className={`px-3 py-2.5 rounded-xl font-bold text-xs transition border flex items-center justify-center gap-1.5 ${
                  docType === 'recibo'
                    ? 'bg-[#123F42] text-white border-[#123F42] shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <FileCheck2 className="w-3.5 h-3.5" />
                4. Recibo Fiscal
              </button>
            </div>
          </div>
        </header>

        {/* Barra de Progresso de Conformidade */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 flex-1 w-full">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">Status da Conferência Ética:</span>
              <span className="font-mono font-bold text-[#0F5B5B]">
                {completedCount} de {totalCount} itens ({progressPercent}%)
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  isAllChecked ? 'bg-emerald-500' : 'bg-[#0F5B5B]'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            {isAllChecked ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Pronto para Emissão
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 font-bold text-xs border border-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Pendente de Revisão
              </span>
            )}
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition"
              title="Imprimir folha de checagem"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimir
            </button>
          </div>
        </div>

        {/* Lista de Itens do Checklist */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Requisitos Obrigatórios para {docType.toUpperCase()}:
          </h2>

          <div className="space-y-3">
            {currentItems.map((item, index) => {
              const isChecked = !!checkedItems[item.id]
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-300 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="pt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}} // Controlled by container onClick
                      className="w-5 h-5 rounded text-[#0F5B5B] focus:ring-[#0F5B5B] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className={`text-sm font-bold leading-tight ${
                          isChecked ? 'text-emerald-950 line-through decoration-emerald-600/40' : 'text-slate-900'
                        }`}
                      >
                        {index + 1}. {item.text}
                      </h3>
                      {item.critical && (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                          Vedação Estrita
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                    <span className="inline-block text-[10px] font-semibold text-slate-400 font-mono pt-1">
                      Ref: {item.artigoCfp}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Callout de Apoio ao Gerador */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">
              Precisa gerar o documento já formatado?
            </h3>
            <p className="text-xs text-slate-600">
              Utilize nossos modelos editáveis de declaração, recibo com valor por extenso e contrato terapêutico.
            </p>
          </div>
          <Link
            href="/ferramentas/gerador-documentos"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0F5B5B] hover:bg-[#123F42] text-white text-xs font-bold rounded-xl transition shadow-xs shrink-0"
          >
            <span>Acessar Modelos de Documentos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
