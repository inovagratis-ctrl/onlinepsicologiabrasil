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
  Briefcase,
  Calendar,
  AlertCircle,
  HelpCircle,
} from 'lucide-react'

// Modalidades Oficiais CFP (Resolução CFP nº 06/2019) + Documento Fiscal Separado
type DocType = 'declaracao' | 'atestado' | 'relatorio' | 'laudo' | 'recibo_fiscal'

type ItemCategory = 'normativo_cfp' | 'vedacao_cfp' | 'fiscal_rfb' | 'recomendacao'

interface ChecklistItem {
  id: string
  text: string
  detail: string
  fonteNormativa: string
  categoria: ItemCategory
}

// Requisitos formais gerais comuns a todos os documentos psicológicos (Art. 5º e 6º da Resolução CFP nº 06/2019)
const CHECKLIST_GERAL_CFP: ChecklistItem[] = [
  {
    id: 'num_paginas_rubrica',
    text: 'Numeração contínua de laudas e rubrica (Art. 5º, § 8º)',
    detail:
      'Todas as laudas devem ser numeradas (ex: 1/2, 2/2) e rubricadas da primeira até a penúltima lauda, reservando a última lauda para assinatura formal.',
    fonteNormativa: 'Resolução CFP nº 06/2019, Art. 5º, § 8º',
    categoria: 'normativo_cfp',
  },
  {
    id: 'assinatura_identificacao',
    text: 'Identificação profissional completa e carimbo/assinatura',
    detail:
      'A última lauda contém nome completo do(a) psicólogo(a), número de registro com a sigla do Conselho Regional de Psicologia (CRP) e assinatura física ou certificação digital ICP-Brasil.',
    fonteNormativa: 'Resolução CFP nº 06/2019, Art. 5º, § 8º',
    categoria: 'normativo_cfp',
  },
  {
    id: 'linguagem_tecnica',
    text: 'Redação impessoal, técnica e rigor metodológico',
    detail:
      'A linguagem deve ser precisa, concisa e sustentada em referencial teórico e metodológico reconhecido pela ciência psicológica, sem adjetivações excessivas ou juízos morais de valor.',
    fonteNormativa: 'Resolução CFP nº 06/2019, Art. 6º, caput e §§ 3º e 4º',
    categoria: 'normativo_cfp',
  },
  {
    id: 'guarda_documental',
    text: 'Guarda documental em prontuário pelo prazo mínimo de 5 anos',
    detail:
      'Cópia fidedigna do documento emitido deve ser arquivada em prontuário psicológico físico ou digital com garantia de sigilo, pelo prazo mínimo de 5 (cinco) anos.',
    fonteNormativa: 'Resolução CFP nº 01/2009 e Resolução CFP nº 06/2019, Art. 15',
    categoria: 'normativo_cfp',
  },
]

// Itens específicos por modalidade da Resolução CFP nº 06/2019
const CHECKLIST_ESPECIFICO_CFP: Record<'declaracao' | 'atestado' | 'relatorio' | 'laudo', ChecklistItem[]> = {
  declaracao: [
    {
      id: 'dec_finalidade',
      text: 'Finalidade restrita de registro de comparecimento ou acompanhamento',
      detail:
        'A declaração visa exclusivamente certificar comparecimento do atendido ou acompanhante, dias e horários das sessões ou indicar que a pessoa está sob acompanhamento psicológico.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 9º, § 1º',
      categoria: 'normativo_cfp',
    },
    {
      id: 'dec_vedacao_sintomas',
      text: 'VEDAÇÃO ABSOLUTA: Proibido registrar sintomas, CID ou diagnóstico',
      detail:
        'A declaração NUNCA pode conter menção a sintomas, estado mental, evolução clínica, hipótese diagnóstica ou código de Classificação Internacional de Doenças (CID).',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 9º, § 2º',
      categoria: 'vedacao_cfp',
    },
  ],
  atestado: [
    {
      id: 'atest_processo_previo',
      text: 'Fundamentado em processo de avaliação psicológica prévia',
      detail:
        'O atestado psicológico decorre obrigatoriamente de processo prévio de avaliação psicológica concluída ou processo continuado registrado em prontuário.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 10, caput',
      categoria: 'normativo_cfp',
    },
    {
      id: 'atest_finalidade_estrita',
      text: 'Informação restrita ao solicitado e resguardo do sigilo',
      detail:
        'Deve atestar unicamente a condição de aptidão, inaptidão ou justificativa necessária para a finalidade requerida, resguardando o sigilo de informações íntimas que não dizem respeito ao solicitante.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 10, § 1º',
      categoria: 'normativo_cfp',
    },
    {
      id: 'atest_cid_autorizado',
      text: 'Inserção de CID condicionada à solicitação expressa do atendido',
      detail:
        'O código de diagnóstico (CID) só pode ser aposto no atestado psicológico se houver solicitação expressa e formalizada pelo próprio paciente ou por seu representante legal.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 10, § 3º',
      categoria: 'normativo_cfp',
    },
    {
      id: 'atest_vedacao_generica',
      text: 'VEDAÇÃO: Proibido atestar sem fundamentação técnica sólida',
      detail:
        'É vedado emitir atestado psicológico com base em impressões leigas, sem métodos de avaliação psicológica ou para fins estranhos à prática profissional.',
      fonteNormativa: 'Código de Ética do Psicólogo e Resolução CFP nº 06/2019, Art. 10',
      categoria: 'vedacao_cfp',
    },
  ],
  relatorio: [
    {
      id: 'rel_estrutura_5partes',
      text: 'Estrutura formal em 5 partes obrigatórias (Art. 11, § 1º)',
      detail:
        'O relatório psicológico deve conter impreterivelmente os 5 itens: I - Identificação; II - Descrição da demanda; III - Procedimento; IV - Análise; V - Conclusão.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 11, § 1º',
      categoria: 'normativo_cfp',
    },
    {
      id: 'rel_fundamentacao_tecnica',
      text: 'Discriminação de instrumentos, entrevistas e referencial teórico',
      detail:
        'No item Procedimento, devem ser citadas as fontes fundamentais utilizadas (testes validados no SATEPSI, número de sessões e técnicas clínicas observadas).',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 11, § 4º',
      categoria: 'normativo_cfp',
    },
    {
      id: 'rel_analise_demanda',
      text: 'Análise articulada e restrita aos objetivos da demanda',
      detail:
        'A análise deve integrar os dados colhidos sem exposição desnecessária da vida privada do paciente, limitando-se ao que fundamenta a conclusão técnica.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 11, § 5º',
      categoria: 'normativo_cfp',
    },
    {
      id: 'rel_conclusao_encaminhamento',
      text: 'Conclusão clara com eventuais encaminhamentos ou intervenções',
      detail:
        'A conclusão sintetiza o processo sem juízo de valor leigo, podendo sugerir continuidade de intervenções terapêuticas ou encaminhamentos multiprofissionais.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 11, § 6º',
      categoria: 'normativo_cfp',
    },
  ],
  laudo: [
    {
      id: 'laudo_estrutura_5partes',
      text: 'Estrutura formal em 5 partes obrigatórias de laudo pericial (Art. 13, § 1º)',
      detail:
        'O laudo psicológico possui estrutura com: I - Identificação; II - Descrição da demanda; III - Procedimento; IV - Análise; V - Conclusão, decorrente de processo pericial ou diagnóstico aprofundado.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 13, § 1º',
      categoria: 'normativo_cfp',
    },
    {
      id: 'laudo_rigor_psicometrico',
      text: 'Rigor psicométrico e fundamentação em testes com parecer favorável do SATEPSI',
      detail:
        'Uso obrigatório de testes psicológicos válidos com padronização brasileira aprovada pelo CFP, descritos com fidedignidade metodológica.',
      fonteNormativa: 'Resolução CFP nº 09/2018 e Resolução CFP nº 06/2019, Art. 13, § 4º',
      categoria: 'normativo_cfp',
    },
    {
      id: 'laudo_vedacao_rotulacao',
      text: 'VEDAÇÃO: Proibido rotulações deterministas e estigmatizantes',
      detail:
        'O laudo não deve reduzir a pessoa a uma categoria diagnóstica estática, contextualizando os achados com a dinâmica histórica, social e psíquica do sujeito.',
      fonteNormativa: 'Resolução CFP nº 06/2019, Art. 6º, § 4º',
      categoria: 'vedacao_cfp',
    },
  ],
}

// Checklist específico para Recibo Fiscal (Âmbito Tributário / Receita Federal — Não é documento clínico do CFP)
const CHECKLIST_RECIBO_FISCAL: ChecklistItem[] = [
  {
    id: 'rfb_valor_extenso',
    text: 'Valor discriminado em algarismos numéricos e por extenso em reais',
    detail:
      'O valor deve ser expresso numericamente (R$ XX,XX) e transcrito por extenso em língua portuguesa, requisito indispensável para validade fiscal perante a Receita Federal.',
    fonteNormativa: 'Instrução Normativa RFB nº 1500/2014 e Código Civil (Art. 319)',
    categoria: 'fiscal_rfb',
  },
  {
    id: 'rfb_cpf_partes',
    text: 'Identificação completa de CPF do prestador e do paciente/pagador',
    detail:
      'Constam nome completo e CPF do(a) psicólogo(a) e nome completo e CPF do paciente beneficiário (ou do responsável financeiro, no caso de dependentes).',
    fonteNormativa: 'Instrução Normativa RFB nº 1500/2014, Art. 96',
    categoria: 'fiscal_rfb',
  },
  {
    id: 'rfb_discriminacao_servico',
    text: 'Discriminação do serviço: "Sessões de Atendimento Psicológico"',
    detail:
      'Especificar a natureza médica/psicológica dos serviços prestados, indicando a quantidade de atendimentos ou o período de referência (mês/ano).',
    fonteNormativa: 'Regulamento do Imposto de Renda (RIR/2018)',
    categoria: 'fiscal_rfb',
  },
  {
    id: 'rfb_carne_leao',
    text: 'Lançamento obrigatório no Livro Caixa / Carnê-Leão Digital',
    detail:
      'Para psicólogos autônomos pessoa física (PF), os recebimentos mensais devem ser escriturados no sistema Carnê-Leão da Receita Federal com o CPF de cada atendido.',
    fonteNormativa: 'Receita Federal do Brasil — Livro Caixa Digital',
    categoria: 'fiscal_rfb',
  },
  {
    id: 'rfb_sigilo_fiscal',
    text: 'VEDAÇÃO: Proibido colocar dados clínicos ou CID em recibo fiscal',
    detail:
      'O recibo é um documento contábil que transita por contabilidades e Receita Federal. NUNCA mencione queixas, diagnóstico ou códigos de CID no recibo.',
    fonteNormativa: 'Código de Ética Profissional do Psicólogo (Art. 9º - Sigilo)',
    categoria: 'vedacao_cfp',
  },
]

export default function ChecklistCfpPage() {
  const [docType, setDocType] = useState<DocType>('declaracao')
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  // Determinar lista de itens de acordo com a seleção
  const isReciboFiscal = docType === 'recibo_fiscal'
  const currentItems = isReciboFiscal
    ? CHECKLIST_RECIBO_FISCAL
    : [...CHECKLIST_GERAL_CFP, ...CHECKLIST_ESPECIFICO_CFP[docType]]

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

        {/* Header Oficial da Ferramenta */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs mb-8 print:hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold tracking-wide uppercase border border-teal-100">
                <Scale className="w-3.5 h-3.5 text-[#0F5B5B]" />
                Conformidade Profissional &amp; Ética Documental
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123F42] tracking-tight">
                Checklist Ético de Emissão Documental
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Roteiro de conferência prévia para psicólogos revisarem os requisitos normativos, estrutura formal e vedações éticas da <strong>Resolução CFP nº 06/2019</strong> antes da entrega de documentos clínicos a pacientes ou instituições.
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

          {/* Seletores de Modalidade Documental */}
          <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                1. Modalidades de Documentos Psicológicos (Resolução CFP nº 06/2019, Art. 8º):
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
                  Declaração (Art. 9º)
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
                  Atestado (Art. 10)
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
                  Relatório (Art. 11)
                </button>
                <button
                  type="button"
                  onClick={() => setDocType('laudo')}
                  className={`px-3 py-2.5 rounded-xl font-bold text-xs transition border flex items-center justify-center gap-1.5 ${
                    docType === 'laudo'
                      ? 'bg-[#123F42] text-white border-[#123F42] shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <FileCheck2 className="w-3.5 h-3.5" />
                  Laudo (Art. 13)
                </button>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                2. Documento Administrativo e Contábil (Receita Federal / Carnê-Leão):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDocType('recibo_fiscal')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition border flex items-center justify-center gap-2 ${
                    docType === 'recibo_fiscal'
                      ? 'bg-[#0F5B5B] text-white border-[#0F5B5B] shadow-xs'
                      : 'bg-emerald-50/60 text-emerald-900 border-emerald-200 hover:bg-emerald-100/70'
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-emerald-700" />
                  Recibo de Honorários / Carnê-Leão (Instrução Normativa RFB)
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Notificação de Distinção de Escopo */}
        {isReciboFiscal ? (
          <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-xs text-emerald-950 mb-6 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#0F5B5B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Distinção Normativa Importante:</strong> O Recibo Fiscal de Honorários é um documento contábil e tributário disciplinado pela Receita Federal do Brasil (IN RFB nº 1500/2014) e Código Civil. Ele <strong>não constitui modalidade de documento psicológico clínico da Resolução CFP nº 06/2019</strong>. As exigências abaixo referem-se à validade fiscal para dedução de IRPF pelo paciente e escrituração do Livro Caixa do profissional.
            </p>
          </div>
        ) : (
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 mb-6 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#0F5B5B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Base Normativa Oficial:</strong> Os itens a seguir foram elaborados com base estrita no texto oficial da <strong>Resolução CFP nº 06/2019 comentada</strong> e no <strong>Manual Orientativo do Conselho Federal de Psicologia</strong>. Itens marcados como <em>Vedação Ética Estrita</em> constituem infração disciplinar se descumpridos.
            </p>
          </div>
        )}

        {/* Barra de Progresso de Conformidade */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 flex-1 w-full">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">Status da Conferência:</span>
              <span className="font-mono font-bold text-[#0F5B5B]">
                {completedCount} de {totalCount} itens conferidos ({progressPercent}%)
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
                Conferência 100% Concluída
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 font-bold text-xs border border-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Itens Pendentes
              </span>
            )}
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition"
              title="Imprimir folha de checagem"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimir Folha
            </button>
          </div>
        </div>

        {/* Lista de Itens do Checklist */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Itens para Conferência — {docType.replace('_', ' ').toUpperCase()}:
            </h2>
            <span className="text-[11px] text-slate-400">
              Clique nos itens para marcar como conferido
            </span>
          </div>

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
                      onChange={() => {}}
                      className="w-5 h-5 rounded text-[#0F5B5B] focus:ring-[#0F5B5B] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className={`text-sm font-bold leading-tight ${
                          isChecked ? 'text-emerald-950 line-through decoration-emerald-600/40' : 'text-slate-900'
                        }`}
                      >
                        {index + 1}. {item.text}
                      </h3>
                      {item.categoria === 'vedacao_cfp' && (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                          Vedação Ética Estrita
                        </span>
                      )}
                      {item.categoria === 'normativo_cfp' && (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                          Requisito CFP Obrigatório
                        </span>
                      )}
                      {item.categoria === 'fiscal_rfb' && (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                          Norma Fiscal (Receita Federal)
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                    <span className="inline-block text-[11px] font-semibold text-slate-500 font-mono pt-1">
                      Fonte: {item.fonteNormativa}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Rodapé Informativo e Data de Revisão */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 text-[11px] text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8">
          <span>
            <strong>Revisão Técnica &amp; Normativa:</strong> Atualizado em 2026 com base no Manual Orientativo do CFP e Resolução CFP nº 06/2019 comentada oficial.
          </span>
          <span className="text-[#0F5B5B] font-medium shrink-0">
            Curadoria CRP 24/02327
          </span>
        </div>

        {/* Callout de Apoio ao Gerador */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">
              Precisa gerar o documento já formatado?
            </h3>
            <p className="text-xs text-slate-600">
              Utilize nossos modelos editáveis de apoio para declarações, recibos com valor por extenso automático e contratos terapêuticos.
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
