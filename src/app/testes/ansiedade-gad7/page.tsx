'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  HelpCircle,
  Info,
  Printer,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

interface Question {
  id: number
  text: string
  detail: string
}

const GAD7_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Sentir-se nervoso(a), ansioso(a) ou muito tenso(a)',
    detail: 'Sensação de agitação interna ou dificuldade para aquietar a mente.',
  },
  {
    id: 2,
    text: 'Não ser capaz de impedir ou de controlar as preocupações',
    detail: 'Preocupações recorrentes que parecem difíceis de interromper conscientemente.',
  },
  {
    id: 3,
    text: 'Preocupar-se muito com diversas coisas diferentes',
    detail: 'Antecipação sobre saúde, trabalho, compromissos rotineiros ou família.',
  },
  {
    id: 4,
    text: 'Dificuldade para relaxar',
    detail: 'Tensão muscular perceptível ou sensação de incapacidade de repousar.',
  },
  {
    id: 5,
    text: 'Ficar tão inquieto(a) que é difícil permanecer sentado(a)',
    detail: 'Inquietação motora ou necessidade de movimentação frequente.',
  },
  {
    id: 6,
    text: 'Ficar facilmente irritado(a) ou chateado(a)',
    detail: 'Menor tolerância a pequenos contratempos ou sensação de reatividade.',
  },
  {
    id: 7,
    text: 'Sentir medo como se algo horrível fosse acontecer',
    detail: 'Sensação de apreensão quanto a perigos futuros incertos.',
  },
]

const OPTIONS = [
  { value: 0, label: 'Nenhuma vez', short: '0' },
  { value: 1, label: 'Vários dias', short: '+1' },
  { value: 2, label: 'Mais da metade dos dias', short: '+2' },
  { value: 3, label: 'Quase todos os dias', short: '+3' },
]

export default function Gad7Page() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [showResult, setShowResult] = useState<boolean>(false)
  const reportRef = useRef<HTMLDivElement>(null)

  const answeredCount = Object.keys(answers).length
  const progressPercent = Math.round((answeredCount / GAD7_QUESTIONS.length) * 100)

  const handleSelect = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
    if (questionId < GAD7_QUESTIONS.length) {
      setCurrentStep(questionId + 1)
    }
  }

  const handleReset = () => {
    setAnswers({})
    setCurrentStep(1)
    setShowResult(false)
  }

  const calculateScore = () => {
    return Object.values(answers).reduce((acc, val) => acc + val, 0)
  }

  const score = calculateScore()

  const getClassification = (total: number) => {
    if (total <= 4) {
      return {
        level: 'Faixa de Pontuação Mínima (0 a 4 pontos)',
        badgeColor: 'bg-emerald-500',
        description:
          'Esta faixa descreve uma pontuação baixa neste questionário de rastreio nas últimas duas semanas. Não confirma nem exclui qualquer condição de saúde mental.',
        recommendation:
          'Se você sente desconforto ou se os sintomas interferem no seu dia a dia, mesmo com pontuação baixa, converse com um profissional de saúde qualificado.',
      }
    }
    if (total <= 9) {
      return {
        level: 'Faixa de Pontuação Leve (5 a 9 pontos)',
        badgeColor: 'bg-amber-500',
        description:
          'Pontuação que sinaliza a presença de preocupações ou sintomas de tensão em intensidade leve nas últimas duas semanas segundo a escala de rastreio.',
        recommendation:
          'Práticas de higiene do sono, pausas regulares e autorregulação podem ser úteis. Monitore se os sintomas persistem ou aumentam com o tempo.',
      }
    }
    if (total <= 14) {
      return {
        level: 'Faixa de Pontuação Moderada (10 a 14 pontos)',
        badgeColor: 'bg-orange-500',
        description:
          'Na literatura do GAD-7, o ponto de corte a partir de 10 costuma ser utilizado para indicar a conveniência de uma investigação clínica estruturada. Não é um diagnóstico.',
        recommendation:
          'Recomenda-se conversar com um psicólogo ou médico psiquiatra para uma escuta individualizada e avaliação completa do seu quadro.',
      }
    }
    return {
      level: 'Faixa de Pontuação Severa (15 a 21 pontos)',
      badgeColor: 'bg-rose-500',
      description:
        'Pontuação indicativa de sintomas frequentes e intensos de ansiedade relatados no questionário para as últimas duas semanas. Trata-se de um indicativo de rastreio.',
      recommendation:
        'É fortemente recomendado agendar uma consulta com um profissional de saúde mental (psicólogo e/ou médico psiquiatra) para acolhimento e plano de cuidado profissional.',
    }
  }

  const classification = getClassification(score)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Identificação de Origem */}
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
            <span className="text-slate-800 font-semibold">Questionário GAD-7</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 font-medium bg-slate-200/80 px-2.5 py-1 rounded-full text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instrumento de Rastreio (Spitzer et al., 2006)</span>
          </div>
        </div>

        {/* Header do Teste */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-700">
                Instrumento Psicoeducativo de Rastreio Inicial
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Questionário de Rastreio de Ansiedade GAD-7
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Nas últimas <strong>2 semanas</strong>, com que frequência você foi incomodado(a) pelos sintomas abaixo? Este questionário é de <strong>autoavaliação educativa</strong>. As respostas são calculadas <strong>somente na memória local do seu navegador</strong> (nenhum dado de saúde é enviado para servidores externos ou redes de publicidade).
              </p>
            </div>
          </div>

          {/* Barra de Progresso */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
              <span>Progresso</span>
              <span>{answeredCount} de 7 perguntas ({progressPercent}%)</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Perguntas Interativas */}
        {!showResult ? (
          <div className="space-y-4 mb-8">
            {GAD7_QUESTIONS.map((q) => {
              const selectedValue = answers[q.id]
              const isAnswered = selectedValue !== undefined

              return (
                <div
                  key={q.id}
                  id={`q-${q.id}`}
                  className={`bg-white rounded-2xl p-5 sm:p-6 transition-all border ${
                    isAnswered
                      ? 'border-emerald-300 shadow-sm bg-white'
                      : currentStep === q.id
                      ? 'border-emerald-500 ring-2 ring-emerald-100 shadow-md'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {q.id}
                      </span>
                      <div>
                        <h2 className="text-base font-bold text-slate-900 leading-snug">
                          {q.text}
                        </h2>
                        <p className="text-xs text-slate-500 mt-0.5">{q.detail}</p>
                      </div>
                    </div>
                    {isAnswered && (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Marcado
                      </span>
                    )}
                  </div>

                  {/* Opções de Resposta */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                    {OPTIONS.map((opt) => {
                      const isSelected = selectedValue === opt.value
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleSelect(q.id, opt.value)}
                          className={`p-3 rounded-xl border text-left transition text-xs flex flex-col justify-between min-h-[70px] ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold ring-1 ring-emerald-500'
                              : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <span className="font-semibold">{opt.label}</span>
                          <span
                            className={`text-[10px] self-end mt-1 font-mono font-bold ${
                              isSelected ? 'text-emerald-700' : 'text-slate-400'
                            }`}
                          >
                            {opt.value} pt{opt.value === 1 ? '' : 's'}
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
                {answeredCount < 7 ? (
                  <span>Responda às 7 perguntas para gerar o relatório resumo de pontuação.</span>
                ) : (
                  <span className="font-semibold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Todas as perguntas respondidas!
                  </span>
                )}
              </div>
              <button
                type="button"
                disabled={answeredCount < 7}
                onClick={() => {
                  setShowResult(true)
                  window.scrollTo({ top: 100, behavior: 'smooth' })
                }}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm shadow transition flex items-center justify-center gap-2 ${
                  answeredCount === 7
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer hover:shadow-md'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>Ver Resumo da Pontuação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ================= RELATÓRIO RESUMO DE PONTUAÇÃO ================= */
          <div className="space-y-8 mb-12">
            <div
              ref={reportRef}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md print:shadow-none print:border-none print:p-0"
            >
              {/* Cabeçalho do Relatório */}
              <div className="border-b border-slate-200 pb-6 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-emerald-700 font-bold block">
                      Relatório de Autoavaliação e Psicoeducação
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Resumo de Pontuação — Escala GAD-7
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

              {/* Destaque do Score */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col items-center justify-center text-center">
                  <span className="text-xs uppercase font-bold text-slate-500">Pontuação Total Registrada</span>
                  <div className="text-5xl font-black text-slate-900 my-2">
                    {score} <span className="text-lg text-slate-400 font-normal">/ 21</span>
                  </div>
                  <span className="text-xs text-slate-500">Escala de 0 a 21 pontos</span>
                </div>

                <div className="md:col-span-2 rounded-2xl p-6 border flex flex-col justify-between gap-4" style={{ backgroundColor: '#FAFDFB' }}>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-500 block mb-1">
                      Faixa Correspondente à Pontuação
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
                      <span>0-4 Mínima</span>
                      <span>5-9 Leve</span>
                      <span>10-14 Moderada</span>
                      <span>15-21 Severa</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                      <div className="w-[19%] bg-emerald-400 border-r border-white" title="0 a 4" />
                      <div className="w-[24%] bg-amber-400 border-r border-white" title="5 a 9" />
                      <div className="w-[24%] bg-orange-400 border-r border-white" title="10 a 14" />
                      <div className="w-[33%] bg-rose-500" title="15 a 21" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Análise por Questão */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Respostas Registradas Neste Dispositivo
                </h4>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
                  {GAD7_QUESTIONS.map((q) => {
                    const ansVal = answers[q.id] || 0
                    const optLabel = OPTIONS.find((o) => o.value === ansVal)?.label || ''
                    return (
                      <div key={q.id} className="p-3.5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50">
                        <span className="text-slate-700">
                          <strong>{q.id}.</strong> {q.text}
                        </span>
                        <span className="font-semibold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md shrink-0">
                          {optLabel} ({ansVal} pt{ansVal === 1 ? '' : 's'})
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Orientações Informativas */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Observações Psicoeducativas
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {classification.recommendation}
                </p>
                <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                  <strong>Aviso Ético Obrigatório:</strong> Este relatório é um resumo informativo de autoavaliação e não constitui diagnóstico clínico, parecer psicológico ou laudo pericial. Para avaliação completa, consulte um psicólogo ou médico psiquiatra.
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition"
                >
                  <Printer className="w-4 h-4" />
                  Imprimir / Salvar Resumo em PDF
                </button>
              </div>
            </div>

            {/* Suporte de Crise */}
            {score >= 10 && (
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-rose-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Precisa de acolhimento emocional imediato?</h4>
                    <p className="text-xs text-rose-800 mt-0.5">
                      O Centro de Valorização da Vida (CVV) oferece suporte confidencial e gratuito pelo telefone 188.
                    </p>
                  </div>
                </div>
                <a
                  href="tel:188"
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shrink-0 transition"
                >
                  Ligue Grátis 188
                </a>
              </div>
            )}
          </div>
        )}

        {/* ================= GUIA CIENTÍFICO E EDUCACIONAL ================= */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm prose max-w-none text-slate-700 mt-10">
          <header className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Contexto do Instrumento &amp; Literatura Científica
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Origem, Aplicação e Limitações da Escala GAD-7
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              As explicações, notas e adaptações nesta página têm caráter informativo e são distintas do instrumento psicométrico original.
            </p>
          </header>

          <section className="space-y-4 text-sm leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">1. Origem, Tradução e Autoria do GAD-7</h3>
            <p>
              O <strong>GAD-7 (Generalized Anxiety Disorder 7-item scale)</strong> foi desenvolvido originalmente em 2006 pelos pesquisadores Robert L. Spitzer, Kurt Kroenke, Janet B. W. Williams e Bernd Löwe. Criado para triagem de sintomas de ansiedade na atenção primária, tornou-se amplamente utilizado e validado internacionalmente.
            </p>
            <p>
              No Brasil, os 7 enunciados centrais correspondem à versão adaptada e validada para a língua portuguesa (Moreno et al., 2016). Os pequenos textos explicativos em itálico que acompanham cada questão foram elaborados editorialmente pela equipe da plataforma com fins exclusivamente psicoeducativos para facilitar a compreensão dos exemplos cotidianos, não alterando a métrica dos 7 itens originais da escala.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">2. O que a Pontuação Representa (e o que Ela Não Representa)</h3>
            <p>
              O GAD-7 calcula uma pontuação somatória de 0 a 21. Na literatura de validação, pontuações iguais ou superiores a 10 costumam ser adotadas como ponto de corte sensível para triagem de Transtorno de Ansiedade Generalizada (TAG). Contudo:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Uma pontuação alta não confirma um transtorno:</strong> Diversas circunstâncias de vida, estressores temporários ou condições clínicas gerais podem elevar a pontuação temporariamente.
              </li>
              <li>
                <strong>Uma pontuação baixa não descarta sofrimento:</strong> Se a pessoa sente sofrimento ou prejuízos funcionais, deve buscar avaliação profissional independentemente da pontuação numérica.
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 pt-4">3. Perguntas Frequentes (FAQ)</h3>
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm">Este teste online substitui uma consulta psicológica ou psiquiátrica?</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Não. Nenhum questionário online pode substituir a escuta qualificada, a anamnese e o diagnóstico realizado por um profissional habilitado (psicólogo inscrito no CRP ou médico psiquiatra no CRM).
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm">Minhas respostas são enviadas para algum servidor?</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Não. Todo o cálculo ocorre no seu navegador. Nenhuma resposta é transmitida para redes de anúncios, ferramentas de analytics ou servidores remotos.
                </p>
              </div>
            </div>
          </section>

          <footer className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong>Referências Bibliográficas:</strong>
              <p>• Spitzer RL, Kroenke K, Williams JB, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006;166(10):1092-1097.</p>
              <p>• Moreno AL, DeSousa DA, Souza FJ, Manfro GG, Salum GA, Koller SH, Osório FL, Crippa JA. Factorial validity, internal consistency and psychometric properties of the Generalized Anxiety Disorder 7-item (GAD-7) scale in Brazilian adults. Trends Psychiatry Psychother. 2016.</p>
            </div>
            <Link
              href="/ferramentas"
              className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:underline"
            >
              Ver mais ferramentas
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </footer>
        </article>
      </div>
    </div>
  )
}
