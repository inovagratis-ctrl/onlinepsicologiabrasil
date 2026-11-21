'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Flame,
  HelpCircle,
  Info,
  Printer,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

interface Question {
  id: number
  dimension: 'Exaustão Emocional' | 'Distanciamento / Cinismo' | 'Sensação de Ineficácia'
  text: string
  subtext: string
}

const BURNOUT_QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: 'Exaustão Emocional',
    text: 'Sinto-me emocional e fisicamente esgotado(a) ao final de um dia normal de trabalho',
    subtext: 'Sensação de que sua energia foi drenada sem restar disposição para vida pessoal.',
  },
  {
    id: 2,
    dimension: 'Exaustão Emocional',
    text: 'Acordo cansado(a) e com desânimo para encarar mais uma jornada laboral',
    subtext: 'Sono não reparador e sensação de peso antecipado logo pela manhã.',
  },
  {
    id: 3,
    dimension: 'Exaustão Emocional',
    text: 'Tenho a impressão de estar trabalhando no limite máximo das minhas forças',
    subtext: 'Sensação de sobrecarga constante onde qualquer nova demanda parece excessiva.',
  },
  {
    id: 4,
    dimension: 'Distanciamento / Cinismo',
    text: 'Tornei-me mais cínico(a), impaciente ou distante com colegas, clientes ou pacientes',
    subtext: 'Endurecimento emocional e tendência a tratar pessoas como meros processos burocráticos.',
  },
  {
    id: 5,
    dimension: 'Distanciamento / Cinismo',
    text: 'Questiono com frequência a relevância ou o propósito do trabalho que realizo',
    subtext: 'Sensação de perda de significado ou desilusão com os objetivos da organização.',
  },
  {
    id: 6,
    dimension: 'Distanciamento / Cinismo',
    text: 'Evito conversas ou interações no ambiente de trabalho para me proteger do estresse',
    subtext: 'Isolamento defensivo como forma de evitar novas exigências ou atritos.',
  },
  {
    id: 7,
    dimension: 'Sensação de Ineficácia',
    text: 'Sinto que não consigo resolver os problemas com a agilidade e eficiência de antes',
    subtext: 'Queda perceptível no ritmo de entrega, na clareza de raciocínio ou tomada de decisão.',
  },
  {
    id: 8,
    dimension: 'Sensação de Ineficácia',
    text: 'Duvido da minha capacidade profissional mesmo quando recebo feedbacks positivos',
    subtext: 'Sentimento persistente de incompetência ou insegurança acentuada.',
  },
  {
    id: 9,
    dimension: 'Exaustão Emocional',
    text: 'Apresento sintomas físicos frequentes (dores musculares, cefaleia ou sono irregular)',
    subtext: 'Possível manifestação física da sobrecarga contínua do trabalho.',
  },
  {
    id: 10,
    dimension: 'Sensação de Ineficácia',
    text: 'Não sinto alegria ou realização ao concluir tarefas e metas importantes',
    subtext: 'Conquistas antes gratificantes agora geram apenas alívio temporário.',
  },
]

const BURNOUT_OPTIONS = [
  { value: 0, label: 'Nunca / Raramente', points: 0 },
  { value: 1, label: 'Às vezes (1 a 2x no mês)', points: 1 },
  { value: 2, label: 'Frequentemente (1 a 2x na semana)', points: 2 },
  { value: 3, label: 'Diariamente / Quase todo dia', points: 3 },
]

export default function BurnoutPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState<boolean>(false)
  const reportRef = useRef<HTMLDivElement>(null)

  const answeredCount = Object.keys(answers).length
  const progressPercent = Math.round((answeredCount / BURNOUT_QUESTIONS.length) * 100)

  const handleSelect = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleReset = () => {
    setAnswers({})
    setShowResult(false)
  }

  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0)

  // Cálculo por dimensões
  const getDimensionScore = (dim: 'Exaustão Emocional' | 'Distanciamento / Cinismo' | 'Sensação de Ineficácia') => {
    const questionsInDim = BURNOUT_QUESTIONS.filter((q) => q.dimension === dim)
    return questionsInDim.reduce((acc, q) => acc + (answers[q.id] || 0), 0)
  }

  const exaustaoScore = getDimensionScore('Exaustão Emocional') // max 12
  const cinismoScore = getDimensionScore('Distanciamento / Cinismo') // max 9
  const eficaciaScore = getDimensionScore('Sensação de Ineficácia') // max 9

  const getBurnoutClassification = (score: number) => {
    if (score <= 10) {
      return {
        level: 'Faixa de Sobrecarga Baixa (0 a 10 pontos)',
        badgeColor: 'bg-emerald-500',
        description:
          'Os relatos inseridos sugerem que seus níveis percebidos de estresse ocupacional estão baixos neste momento. Não há indicação automática de esgotamento crônico.',
        guidance:
          'Mantenha rotinas de descanso, preservação de limites entre trabalho e vida pessoal e atenção contínua ao seu bem-estar psicofísico.',
      }
    }
    if (score <= 20) {
      return {
        level: 'Faixa de Atenção / Sobrecarga Intermediária (11 a 20 pontos)',
        badgeColor: 'bg-amber-500',
        description:
          'Pontuação que sinaliza a presença de sinais de cansaço acumulado, desânimo ou distanciamento em relação a certas tarefas do trabalho.',
        guidance:
          'Avalie a carga horária, renegocie prazos e considere conversar com colegas ou com a liderança. O apoio psicológico preventivo pode ajudar no manejo do estresse.',
      }
    }
    return {
      level: 'Faixa de Sobrecarga Elevada (21 a 30 pontos)',
      badgeColor: 'bg-rose-600',
      description:
        'Respostas que indicam relatos frequentes de exaustão, distanciamento e sensação de ineficácia. Este questionário educativo indica a importância de buscar avaliação profissional.',
      guidance:
        'Recomenda-se agendar uma consulta com um médico do trabalho, psiquiatra ou psicólogo clínico para avaliação médica e psicológica individualizada.',
    }
  }

  const classification = getBurnoutClassification(totalScore)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Identificação de Natureza Educativa */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-6">
          <div className="flex items-center gap-1.5">
            <Link href="/" className="hover:text-emerald-700 transition">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/ferramentas" className="hover:text-emerald-700 transition">
              Ferramentas
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">Questionário de Estresse Ocupacional</span>
          </div>
          <div className="flex items-center gap-1.5 text-orange-900 font-medium bg-orange-100/80 px-2.5 py-1 rounded-full text-[11px]">
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>Questionário Educativo Inspirado na CID-11 (QD85)</span>
          </div>
        </div>

        {/* Header da Ferramenta */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-orange-700">
                Instrumento Educativo de Autorreflexão Laboral
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Questionário de Autorreflexão sobre Estresse e Burnout
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Este questionário educativo foi estruturado em torno das 3 dimensões conceituais associadas ao esgotamento profissional na CID-11: <strong>Exaustão Emocional</strong>, <strong>Distanciamento/Cinismo</strong> e <strong>Sensação de Ineficácia</strong>. Não constitui instrumento diagnóstico fechado nem laudo pericial.
              </p>
            </div>
          </div>

          {/* Barra de Progresso */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
              <span>Progresso</span>
              <span>{answeredCount} de 10 afirmações ({progressPercent}%)</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Perguntas Interativas */}
        {!showResult ? (
          <div className="space-y-4 mb-8">
            {BURNOUT_QUESTIONS.map((q) => {
              const selectedValue = answers[q.id]
              const isAnswered = selectedValue !== undefined

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-2xl p-5 sm:p-6 transition-all border ${
                    isAnswered ? 'border-orange-300 shadow-sm' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-orange-50 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-orange-200">
                        {q.id}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            Eixo: {q.dimension}
                          </span>
                        </div>
                        <h2 className="text-base font-bold text-slate-900 leading-snug">
                          {q.text}
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">{q.subtext}</p>
                      </div>
                    </div>
                    {isAnswered && (
                      <span className="text-xs font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Marcado
                      </span>
                    )}
                  </div>

                  {/* Opções */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                    {BURNOUT_OPTIONS.map((opt) => {
                      const isSelected = selectedValue === opt.value
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleSelect(q.id, opt.value)}
                          className={`p-3 rounded-xl border text-left transition text-xs flex flex-col justify-between min-h-[72px] ${
                            isSelected
                              ? 'border-orange-500 bg-orange-50/80 text-orange-950 font-bold ring-1 ring-orange-500'
                              : 'border-slate-200 hover:border-orange-200 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span className="font-semibold leading-tight">{opt.label}</span>
                          <span
                            className={`text-[10px] self-end mt-1 font-mono font-bold ${
                              isSelected ? 'text-orange-700' : 'text-slate-400'
                            }`}
                          >
                            +{opt.points} pt{opt.points === 1 ? '' : 's'}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {/* Ação de Conclusão */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div className="text-sm text-slate-600">
                {answeredCount < 10 ? (
                  <span>Responda às 10 afirmações para gerar o resumo de autorreflexão.</span>
                ) : (
                  <span className="font-semibold text-orange-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Todas as 10 afirmações respondidas!
                  </span>
                )}
              </div>
              <button
                type="button"
                disabled={answeredCount < 10}
                onClick={() => {
                  setShowResult(true)
                  window.scrollTo({ top: 100, behavior: 'smooth' })
                }}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm shadow transition flex items-center justify-center gap-2 ${
                  answeredCount === 10
                    ? 'bg-orange-600 hover:bg-orange-700 text-white cursor-pointer hover:shadow-md'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>Ver Resumo de Respostas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ================= RELATÓRIO RESUMO DE AUTORREFLEXÃO ================= */
          <div className="space-y-8 mb-12">
            <div
              ref={reportRef}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md print:shadow-none print:border-none print:p-0"
            >
              {/* Header do Relatório */}
              <div className="border-b border-slate-200 pb-6 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-orange-700 font-bold block">
                      Relatório de Autorreflexão Psicoeducativa
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Resumo sobre Estresse Ocupacional
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Data da Emissão: {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Emissão do Relatório</span>
                    <strong className="text-xs text-slate-800 block">Psicologia Direta</strong>
                    <span className="text-[11px] text-slate-500">Plataforma Digital de Triagem Psicoeducativa e Gestão Documental</span>
                  </div>
                </div>
              </div>

              {/* Destaque Principal do Resultado */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col items-center justify-center text-center">
                  <span className="text-xs uppercase font-bold text-slate-500">Pontuação Somatória</span>
                  <div className="text-5xl font-black text-slate-900 my-2">
                    {totalScore} <span className="text-lg text-slate-400 font-normal">/ 30</span>
                  </div>
                  <span className="text-xs text-slate-500">Escala de 0 a 30 pontos</span>
                </div>

                <div className="md:col-span-2 rounded-2xl p-6 border flex flex-col justify-between gap-4" style={{ backgroundColor: '#FFFAF5' }}>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-500 block mb-1">
                      Faixa Correspondente
                    </span>
                    <div className="flex items-center gap-3">
                      <span className={`w-3.5 h-3.5 rounded-full ${classification.badgeColor}`} />
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {classification.level}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                      {classification.description}
                    </p>
                  </div>

                  {/* Régua de Classificação */}
                  <div className="pt-2">
                    <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-1">
                      <span>0-10 Baixa</span>
                      <span>11-20 Atenção</span>
                      <span>21-30 Elevada</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                      <div className="w-[33%] bg-emerald-400 border-r border-white" title="0 a 10" />
                      <div className="w-[33%] bg-amber-400 border-r border-white" title="11 a 20" />
                      <div className="w-[34%] bg-rose-600" title="21 a 30" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Detalhamento das 3 Dimensões */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Pontuação pelas Três Dimensões Conceituais
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Dimensão 1: Exaustão */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-slate-800">1. Exaustão Emocional</span>
                      <span className="font-mono font-bold text-orange-600">{exaustaoScore}/12 pts</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: `${(exaustaoScore / 12) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Percepção de esgotamento físico e mental em decorrência das exigências do trabalho.
                    </p>
                  </div>

                  {/* Dimensão 2: Cinismo */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-slate-800">2. Distanciamento / Cinismo</span>
                      <span className="font-mono font-bold text-orange-600">{cinismoScore}/9 pts</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: `${(cinismoScore / 9) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Sensação de desilusão ou tendência a distanciamento afetivo das atividades.
                    </p>
                  </div>

                  {/* Dimensão 3: Eficácia */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-slate-800">3. Sensação de Ineficácia</span>
                      <span className="font-mono font-bold text-orange-600">{eficaciaScore}/9 pts</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: `${(eficaciaScore / 9) * 100}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      Dúvidas sobre a própria competência ou diminuição do sentimento de realização.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recomendações e Conduta */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  Orientações de Autocuidado e Reflexão
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {classification.guidance}
                </p>
                <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                  <strong>Aviso Ético Obrigatório:</strong> Este questionário tem finalidade puramente educativa e de autorreflexão. Não constitui laudo pericial, atestado médico ou diagnóstico de doença ocupacional.
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 print:hidden">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Refazer Questionário
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow transition"
                >
                  <Printer className="w-4 h-4" />
                  Imprimir / Salvar Resumo em PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= GUIA EDUCATIVO E CONTEXTO LEGAL ================= */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm prose max-w-none text-slate-700 mt-10">
          <header className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs uppercase font-bold text-orange-700 tracking-wider">
              Conceito da CID-11 &amp; Esclarecimentos Informativos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              O Conceito de Burnout na CID-11 (Código QD85) e o Contexto Trabalhista
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Informações sobre como a Organização Mundial da Saúde descreve a síndrome e quais são as regras gerais do ordenamento jurídico brasileiro.
            </p>
          </header>

          <section className="space-y-4 text-sm leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">1. A Definição Conceitual da OMS (CID-11)</h3>
            <p>
              Na 11ª Revisão da Classificação Internacional de Doenças (CID-11), o Burnout é identificado pelo código <strong>QD85</strong>. A OMS classifica o Burnout como um fenômeno ocupacional decorrente do estresse crônico no local de trabalho que não foi gerenciado com sucesso, manifestando-se em três eixos: exaustão de energia, sentimentos de cinismo ou distanciamento mental em relação às tarefas e sensação de ineficácia profissional.
            </p>
            <p>
              O questionário de 10 perguntas disponibilizado nesta página é uma ferramenta educativa de autorreflexão elaborada com base nesses conceitos teóricos; ele não é um instrumento psicométrico oficial emitido pela OMS nem possui validação diagnóstica clínica autônoma.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">2. Requisitos Legais e Previdenciários no Brasil (Fontes Oficiais)</h3>
            <p>
              No ordenamento jurídico brasileiro, a Síndrome de Burnout só gera repercussões acidentárias específicas se houver demonstração formal e pericial de <strong>nexo técnico e causal</strong> entre as condições de trabalho e o adoecimento:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Comprovação de Nexo Ocupacional:</strong> Conforme os Artigos 19 e 20 da Lei Federal nº 8.213/1991, equipara-se a acidente de trabalho a patologia que decorre diretamente das condições especiais em que o trabalho é realizado, exigindo comprovação documental e emissão de Comunicação de Acidente de Trabalho (CAT).
              </li>
              <li>
                <strong>Perícia Médica Oficial Obrigatória:</strong> Afastamentos superiores a 15 dias dependem de exame presencial realizado pela Perícia Médica Federal do INSS (Instrução Normativa PRES/INSS nº 128/2022), a quem cabe exclusivamente acolher ou não o enquadramento acidentário.
              </li>
              <li>
                <strong>Garantia de Estabilidade e FGTS (Não Automáticos):</strong> A estabilidade provisória no emprego por 12 meses após a cessação do benefício (Art. 118 da Lei 8.213/1991) e o recolhimento de FGTS durante o período de licença são direitos condicionados à concessão do auxílio-doença na modalidade acidentária (espécie B91). Eles <strong>não decorrem</strong> de laudos particulares isolados e <strong>muito menos de testes online</strong>.
              </li>
            </ul>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
              <strong>Ressalva Jurídica Obrigatória:</strong> As informações contidas nesta página são puramente educacionais e teóricas. A aplicação de qualquer direito trabalhista ou previdenciário depende da análise individualizada de provas materiais e perícia oficial, não gerando qualquer direito automático. Em caso de necessidade concreta, busque assistência de um advogado especializado ou da defensoria/sindicato laboral.
            </div>
          </section>

          <footer className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong>Fontes Oficiais de Consulta:</strong>
              <p>• Organização Mundial da Saúde (OMS) - CID-11 (Código QD85: Síndrome de Burnout).</p>
              <p>• Lei Federal nº 8.213/1991 (Planos de Benefícios da Previdência Social, Arts. 19, 20 e 118).</p>
              <p>• Instrução Normativa PRES/INSS nº 128/2022 (Processamento pericial e administrativo de benefícios).</p>
            </div>
            <Link
              href="/testes/ansiedade-gad7"
              className="inline-flex items-center gap-1.5 text-orange-700 font-bold hover:underline"
            >
              Conhecer também o questionário de ansiedade GAD-7
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </footer>
        </article>
      </div>
    </div>
  )
}
