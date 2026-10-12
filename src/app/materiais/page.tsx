'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Eye,
  Lock,
  Puzzle,
  MessageCircle,
  BookOpen,
  Heart,
  Star,
  Printer,
  ShoppingCart,
  CheckSquare,
  Calendar,
  FileText,
  School,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Trash2,
  RotateCcw,
} from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { trackEvent } from '@/lib/analytics'

const FIRST_CONSULT_CHECKLIST = [
  'Anotar o motivo principal da busca neste momento (o que mudou recentemente na rotina)',
  'Registrar 2 ou 3 exemplos concretos da última semana (horário, local e como a pessoa/criança reagiu)',
  'Separar relatórios escolares, pareceres pedagógicos ou avaliações anteriores (se houver)',
  'Listar medicamentos em uso contínuo e exames médicos recentes (audição, visão, neurologia)',
  'Anotar Marcos do Desenvolvimento (para crianças: início da fala, caminhar, qualidade do sono e alimentação)',
  'Confirmar local silencioso, fones de ouvido e conexão estável para a videochamada segura',
  'Preparar 3 dúvidas que você gostaria de perguntar à psicóloga ao final da primeira sessão',
]

const SCHOOL_MEETING_QUESTIONS = [
  'Em quais momentos do dia (início da aula, após o recreio, final do turno) a dificuldade fica mais visível?',
  'Como a criança reage em atividades orais e práticas em comparação com cópias longas ou leitura silenciosa?',
  'Qual é o lugar atual da carteira na sala de aula (próximo à porta, janela, fundo ou perto do professor)?',
  'Como está a interação com os colegas no recreio e nas atividades em dupla ou grupo?',
  'Quando ela se dispersa ou fica ansiosa em sala, qual estratégia do professor mais ajuda no retorno à calma?',
  'Quais adaptações simples (dividir enunciados, pausas funcionais, apoio visual) podemos testar nas próximas 3 semanas?',
  'Como faremos o alinhamento periódico entre família e escola (quinzenal ou mensal) para acompanhar a evolução?',
]

const DEFAULT_ROUTINE_SLOTS = [
  { period: 'Manhã', task1: 'Lavar o rosto e escovar os dentes', task2: 'Tomar café da manhã tranquilo', task3: 'Conferir mochila / atividades do dia' },
  { period: 'Tarde', task1: 'Almoço e descanso curto (20 min)', task2: 'Bloco de estudo / lição (15 min com timer)', task3: 'Tempo livre de brincar / movimento' },
  { period: 'Noite', task1: 'Guardar brinquedos e tomar banho morno', task2: 'Jantar em família sem telas', task3: 'Leitura calma e preparação do sono' },
]

const categories = [
  {
    icon: Puzzle,
    title: 'Habilidades Sociais',
    description: 'Atividades para desenvolver interação e comunicação social',
    color: 'bg-primary-100 text-primary-600',
    materials: [
      { name: 'Roteiro de Interação Social', type: 'PDF Imprimível', pages: 15, free: true, link: '/materiais/interacao-social' },
      { name: 'Jogo de Regras Sociais', type: 'PDF Imprimível', pages: 10, free: true, link: '/materiais/regras-sociais' },
      { name: 'Histórias Sociais para Crianças', type: 'PDF Completo', pages: 20, free: false, price: 14.9, link: '/materiais/historias-sociais' },
    ],
  },
  {
    icon: MessageCircle,
    title: 'Comunicação Funcional',
    description: 'Materiais para estimular a comunicação funcional no ambiente natural',
    color: 'bg-secondary-100 text-secondary-600',
    materials: [
      { name: 'Quadro de Comunicação Funcional', type: 'PDF Imprimível', pages: 8, free: true, link: '/materiais/comunicacao-funcional' },
      { name: 'PECS - Sistema de Comunicação por Figuras', type: 'PDF Completo', pages: 25, free: false, price: 17.9, link: '/materiais/pecs' },
      { name: 'Atividades de Solicitação', type: 'PDF Completo', pages: 12, free: false, price: 9.9, link: '/materiais/atividades-solicitacao' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Rotinas e Organização Visual',
    description: 'Quadros e rotinas visuais para previsibilidade no dia a dia',
    color: 'bg-accent-100 text-accent-600',
    materials: [
      { name: 'Quadro de Rotina Diária', type: 'PDF Imprimível', pages: 5, free: true, link: '/materiais/quadro-rotina' },
      { name: 'Sequência de Atividades', type: 'PDF Imprimível', pages: 10, free: true, link: '/materiais/sequencia-atividades' },
      { name: 'Timer Visual para Transições', type: 'PDF Imprimível', pages: 3, free: true, link: '/materiais/timer-visual' },
    ],
  },
  {
    icon: Heart,
    title: 'Regulação Emocional',
    description: 'Estratégias visuais para nomear emoções e acolher crises',
    color: 'bg-purple-100 text-purple-600',
    materials: [
      { name: 'Termômetro de Emoções', type: 'PDF Imprimível', pages: 6, free: true, link: '/materiais/termometro-emocoes' },
      { name: 'Cartões de Sentimentos', type: 'PDF Completo', pages: 15, free: false, price: 12.9, link: '/materiais/cartoes-sentimentos' },
      { name: 'Estratégias de Regulação', type: 'PDF Completo', pages: 12, free: false, price: 9.9, link: '/materiais/estrategias-regulacao' },
    ],
  },
]

export default function Materiais() {
  const [activeTool, setActiveTool] = useState<'consulta' | 'rotina' | 'ansiedade' | 'escola'>('consulta')
  const [checkedConsulta, setCheckedConsulta] = useState<Record<number, boolean>>({})
  const [checkedEscola, setCheckedEscola] = useState<Record<number, boolean>>({})
  const [routineRows, setRoutineRows] = useState(DEFAULT_ROUTINE_SLOTS)
  const [anxietyLogs, setAnxietyLogs] = useState([
    {
      day: 'Segunda-feira (07h15)',
      trigger: 'Hora de entrar no portão da escola após o fim de semana',
      signals: 'Dor de barriga, mão fria e pedido para voltar para casa',
      whatHelped: 'Chegar 10 min mais cedo, respirar juntos e combinar quem buscará na saída',
    },
  ])
  const [newLog, setNewLog] = useState({ day: '', trigger: '', signals: '', whatHelped: '' })

  // Coleta opcional de e-mail para materiais (100% LGPD, sem pedir dados clínicos)
  const [email, setEmail] = useState('')
  const [lgpdConsent, setLgpdConsent] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [subError, setSubError] = useState('')

  const handlePrintTool = (toolName: string) => {
    trackEvent('download_material', {
      label: toolName,
      location: 'materiais_interactive_tool',
    })
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  const handleAddAnxietyLog = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newLog.day.trim() || !newLog.trigger.trim()) return
    setAnxietyLogs([...anxietyLogs, newLog])
    setNewLog({ day: '', trigger: '', signals: '', whatHelped: '' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) {
      setSubError('Informe um endereço de e-mail válido.')
      return
    }
    if (!lgpdConsent) {
      setSubError('Confirme o consentimento LGPD para receber os materiais gratuitos por e-mail.')
      return
    }
    setSubError('')
    trackEvent('subscribe_newsletter', { location: 'materiais_page' })
    setSubscribed(true)
  }

  return (
    <div className="min-h-screen bg-warm-50 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', url: '/' },
          { name: 'Materiais e Ferramentas Práticas', url: '/materiais' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 space-y-14">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-3">
            Elaborado por {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Materiais Gratuitos Imprimíveis e Ferramentas Práticas
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Utilize gratuitamente nossas ferramentas interativas para organizar a rotina da família, preparar reuniões escolares e estruturar a primeira consulta psicológica.
          </p>
        </div>

        {/* SEÇÃO 1: 4 Ferramentas Práticas Interativas e Imprimíveis */}
        <section id="ferramentas-interativas" className="scroll-mt-24 bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-700 to-secondary-700 p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-primary-100">
                  100% Gratuito • Uso Imediato no Navegador ou Impressão
                </span>
                <h2 className="text-2xl font-bold mt-1">
                  4 Ferramentas Práticas para Famílias e Adultos
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handlePrintTool(activeTool)}
                className="inline-flex items-center gap-2 bg-white text-primary-800 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors self-start md:self-auto"
              >
                <Printer className="w-4 h-4" />
                Imprimir / Salvar em PDF
              </button>
            </div>

            {/* Tabs das 4 ferramentas */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-6">
              <button
                type="button"
                onClick={() => setActiveTool('consulta')}
                className={`p-3.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition-all ${
                  activeTool === 'consulta'
                    ? 'bg-white text-primary-800 shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <CheckSquare className="w-4 h-4 flex-shrink-0" />
                <span>1. Checklist: Preparar Primeira Consulta</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTool('rotina')}
                className={`p-3.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition-all ${
                  activeTool === 'rotina'
                    ? 'bg-white text-primary-800 shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>2. Quadro Semanal de Rotina Visual</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTool('ansiedade')}
                className={`p-3.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition-all ${
                  activeTool === 'ansiedade'
                    ? 'bg-white text-primary-800 shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>3. Registro de Situações de Ansiedade</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTool('escola')}
                className={`p-3.5 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 transition-all ${
                  activeTool === 'escola'
                    ? 'bg-white text-primary-800 shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <School className="w-4 h-4 flex-shrink-0" />
                <span>4. Lista de Perguntas para Reunião Escolar</span>
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Ferramenta 1: Checklist Primeira Consulta */}
            {activeTool === 'consulta' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Checklist para Preparar a Primeira Consulta Psicológica
                    </h3>
                    <p className="text-sm text-gray-600">
                      Marque os itens conforme se organiza para a primeira conversa (adulto ou anamnese infantil com os pais).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCheckedConsulta({})}
                    className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Limpar marcações
                  </button>
                </div>

                <div className="space-y-3">
                  {FIRST_CONSULT_CHECKLIST.map((item, idx) => (
                    <label
                      key={idx}
                      className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                        checkedConsulta[idx]
                          ? 'bg-accent-50/70 border-accent-300 text-gray-800'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100/70'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedConsulta[idx]}
                        onChange={(e) =>
                          setCheckedConsulta({ ...checkedConsulta, [idx]: e.target.checked })
                        }
                        className="mt-1 w-4 h-4 rounded text-accent-600"
                      />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </label>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <span>
                    Dica: Seus dados marcados ficam apenas na tela do seu dispositivo para privacidade total.
                  </span>
                  <Link
                    href="/blog/o-que-levar-primeira-consulta-psicologica"
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Ler artigo completo sobre a primeira consulta →
                  </Link>
                </div>
              </div>
            )}

            {/* Ferramenta 2: Quadro Semanal de Rotina Visual Interativo */}
            {activeTool === 'rotina' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Quadro Semanal de Rotina Visual Personalizável
                    </h3>
                    <p className="text-sm text-gray-600">
                      Edite as 3 microetapas de cada turno do dia abaixo e clique em &ldquo;Imprimir / Salvar em PDF&rdquo; para colar na porta do quarto ou geladeira.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setRoutineRows(DEFAULT_ROUTINE_SLOTS)}
                    className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Restaurar modelo padrão
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {routineRows.map((row, rIdx) => (
                    <div key={row.period} className="rounded-2xl border-2 border-primary-100 bg-primary-50/30 p-5 space-y-3">
                      <div className="font-bold text-primary-800 text-base border-b border-primary-100 pb-2">
                        Bloco da {row.period}
                      </div>
                      {(['task1', 'task2', 'task3'] as const).map((field, fIdx) => (
                        <div key={field}>
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Passo {fIdx + 1}:
                          </label>
                          <input
                            type="text"
                            value={row[field]}
                            onChange={(e) => {
                              const copy = [...routineRows]
                              copy[rIdx] = { ...copy[rIdx], [field]: e.target.value }
                              setRoutineRows(copy)
                            }}
                            className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <span>
                    Recomendação clínica: Mantenha apenas 3 passos por turno para evitar sobrecarga na memória operacional.
                  </span>
                  <Link
                    href="/blog/como-organizar-rotina-visual-crianca-tdah"
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Ver como aplicar o quadro no TDAH e TEA →
                  </Link>
                </div>
              </div>
            )}

            {/* Ferramenta 3: Registro de Situações que Geram Ansiedade */}
            {activeTool === 'ansiedade' && (
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Folha de Registro de Situações que Geram Ansiedade
                  </h3>
                  <p className="text-sm text-gray-600">
                    Mapeie os momentos de ansiedade na semana para identificar padrões de horário, ambiente e estratégias que ajudam a acalmar.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-xl text-sm">
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>
                        <th className="p-3 text-left border-b">Dia e Horário</th>
                        <th className="p-3 text-left border-b">Situação / O que aconteceu antes</th>
                        <th className="p-3 text-left border-b">Sinais Físicos / Reação</th>
                        <th className="p-3 text-left border-b">O que ajudou a acalmar</th>
                        <th className="p-3 text-center border-b w-12">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {anxietyLogs.map((log, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-3 font-medium text-gray-800">{log.day}</td>
                          <td className="p-3 text-gray-600">{log.trigger}</td>
                          <td className="p-3 text-gray-600">{log.signals}</td>
                          <td className="p-3 text-gray-600">{log.whatHelped}</td>
                          <td className="p-3 text-center">
                            <button
                              type="button"
                              onClick={() => setAnxietyLogs(anxietyLogs.filter((_, i) => i !== idx))}
                              className="text-red-500 hover:text-red-700 p-1"
                              title="Remover linha"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <form onSubmit={handleAddAnxietyLog} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <input
                    type="text"
                    placeholder="Dia/Hora (ex: Terça 19h)"
                    value={newLog.day}
                    onChange={(e) => setNewLog({ ...newLog, day: e.target.value })}
                    className="px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Situação ou gatilho"
                    value={newLog.trigger}
                    onChange={(e) => setNewLog({ ...newLog, trigger: e.target.value })}
                    className="px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Sinais no corpo/emoção"
                    value={newLog.signals}
                    onChange={(e) => setNewLog({ ...newLog, signals: e.target.value })}
                    className="px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="O que ajudou a regular?"
                    value={newLog.whatHelped}
                    onChange={(e) => setNewLog({ ...newLog, whatHelped: e.target.value })}
                    className="px-3 py-2 text-xs bg-white border border-gray-300 rounded-lg"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1 bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold rounded-lg px-4 py-2"
                  >
                    <Plus className="w-4 h-4" /> Adicionar Linha
                  </button>
                </form>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-gray-500">
                  <span>
                    Privacidade: Este registro funciona localmente no seu navegador e não é enviado para nenhum servidor.
                  </span>
                  <Link
                    href="/blog/como-ajudar-crianca-crise-ansiedade"
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Ler passo a passo de como agir na crise de ansiedade →
                  </Link>
                </div>
              </div>
            )}

            {/* Ferramenta 4: Lista de Perguntas para Reunião Escolar */}
            {activeTool === 'escola' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Roteiro de Perguntas para Reunião Escolar (Família-Escola)
                    </h3>
                    <p className="text-sm text-gray-600">
                      Selecione as perguntas que deseja levar para a conversa com os professores e coordenação pedagógica.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCheckedEscola({})}
                    className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Limpar seleção
                  </button>
                </div>

                <div className="space-y-3">
                  {SCHOOL_MEETING_QUESTIONS.map((q, idx) => (
                    <label
                      key={idx}
                      className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                        checkedEscola[idx]
                          ? 'bg-primary-50/70 border-primary-300 text-gray-800'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100/70'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedEscola[idx]}
                        onChange={(e) =>
                          setCheckedEscola({ ...checkedEscola, [idx]: e.target.checked })
                        }
                        className="mt-1 w-4 h-4 rounded text-primary-600"
                      />
                      <span className="text-sm leading-relaxed">{q}</span>
                    </label>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <span>
                    Imprima esta folha e leve para anotar as respostas da coordenação durante a reunião.
                  </span>
                  <Link
                    href="/blog/como-conversar-escola-dificuldades-atencao"
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Ler guia completo de parceria com a escola →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SEÇÃO 2: Coleta Opcional de E-mail (LGPD Estrita — Sem Dados Clínicos) */}
        <section className="bg-white rounded-3xl border border-primary-100 p-6 md:p-8 shadow-sm">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700">
                <ShieldCheck className="w-4 h-4" />
                Comunicação Opcional e Ética (LGPD)
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Deseja receber novos checklists e guias imprimíveis por e-mail?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                O acesso às ferramentas acima é 100% aberto e não exige cadastro. Se quiser receber avisos quando publicarmos novos materiais gratuitos, informe apenas seu e-mail abaixo (nunca solicitamos informações clínicas em cadastros informativos).
              </p>
            </div>

            <div className="md:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-accent-50 border border-accent-200 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-accent-600 mx-auto" />
                  <p className="font-bold text-gray-800 text-sm">Inscrição confirmada!</p>
                  <p className="text-xs text-gray-600">
                    Você receberá nossos próximos guias educativos no e-mail informado.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
                  />
                  <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={lgpdConsent}
                      onChange={(e) => setLgpdConsent(e.target.checked)}
                      className="mt-0.5 rounded text-primary-600"
                    />
                    <span>
                      Concordo em receber materiais educativos por e-mail conforme a{' '}
                      <Link href="/politica-de-privacidade" className="text-primary-600 underline">
                        Política de Privacidade (LGPD)
                      </Link>
                      , podendo cancelar a qualquer momento.
                    </span>
                  </label>
                  {subError && <p className="text-xs text-red-600">{subError}</p>}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm py-3 px-5 rounded-xl transition-colors"
                  >
                    Quero Receber Novos Materiais Gratuitos
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: Acervo de Materiais Visuais em PDF (Gratuitos e Premium) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Acervo de Cartões, Pictogramas e Apostilas em PDF
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Recursos visuais estruturados para apoiar a rotina, a comunicação e a regulação emocional
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <div className="w-3 h-3 bg-accent-500 rounded-full" />
                <span>Gratuito para Imprimir</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <Lock className="w-3.5 h-3.5 text-amber-600" />
                <span>Apostilas Completas Premium</span>
              </div>
            </div>
          </div>

          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {category.materials.map((material, mIndex) => (
                    <div
                      key={mIndex}
                      className={`p-5 rounded-xl border-2 transition-all flex flex-col justify-between ${
                        material.free
                          ? 'border-accent-200 bg-accent-50/50 hover:border-accent-400'
                          : 'border-amber-200 bg-amber-50/50 hover:border-amber-400'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            {material.free ? (
                              <Star className="w-4 h-4 text-accent-600 fill-current" />
                            ) : (
                              <Lock className="w-4 h-4 text-amber-600" />
                            )}
                            <span className="text-xs font-semibold text-gray-600">{material.type}</span>
                          </div>
                          <span className="text-xs text-gray-500">{material.pages} págs</span>
                        </div>

                        <h4 className="font-bold text-gray-800 mb-3">{material.name}</h4>

                        {!material.free && material.price && (
                          <p className="text-lg font-bold text-amber-700 mb-3">
                            R$ {material.price.toFixed(2).replace('.', ',')}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Link
                          href={material.link}
                          onClick={() =>
                            trackEvent('download_material', {
                              label: material.name,
                              location: 'materiais_grid_view',
                            })
                          }
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Acessar
                        </Link>
                        {material.free ? (
                          <Link
                            href={material.link}
                            onClick={() =>
                              trackEvent('download_material', {
                                label: material.name,
                                location: 'materiais_grid_print',
                              })
                            }
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold bg-accent-600 text-white hover:bg-accent-700 rounded-lg transition-colors"
                          >
                            <Printer className="w-3.5 h-3.5" />
                            Imprimir
                          </Link>
                        ) : (
                          <Link
                            href={material.link}
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold bg-amber-600 text-white hover:bg-amber-700 rounded-lg transition-colors"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Adquirir
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
