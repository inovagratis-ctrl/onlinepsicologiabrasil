'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Coins,
  Copy,
  DollarSign,
  Download,
  FileCheck,
  FileSignature,
  FileText,
  HelpCircle,
  Info,
  Layers,
  MapPin,
  Printer,
  ShieldCheck,
  User,
  Users,
} from 'lucide-react'
import { valorPorExtenso } from '@/lib/extenso'

type DocType = 'declaracao' | 'recibo' | 'contrato'

export default function GeradorDocumentosPage() {
  const [activeTab, setActiveTab] = useState<DocType>('declaracao')

  // Estado Compartilhado do Profissional
  const [psiNome, setPsiNome] = useState('Psicóloga(o) Nome Completo')
  const [psiCrp, setPsiCrp] = useState('CRP 00/00000')
  const [psiCpf, setPsiCpf] = useState('000.000.000-00')
  const [psiEndereco, setPsiEndereco] = useState('Av. Principal, 1000 - Sala 501 - Centro')
  const [psiCidade, setPsiCidade] = useState('São Paulo - SP')

  // Estado da Declaração
  const [pacienteNome, setPacienteNome] = useState('Nome do(a) Paciente')
  const [pacienteCpf, setPacienteCpf] = useState('111.222.333-44')
  const [dataAtendimento, setDataAtendimento] = useState(
    new Date().toISOString().split('T')[0]
  )
  const [horarioInicio, setHorarioInicio] = useState('14:00')
  const [horarioFim, setHorarioFim] = useState('15:00')
  const [finalidadeDeclaracao, setFinalidadeDeclaracao] = useState(
    'para fins de comprovação de comparecimento a atendimento psicológico'
  )

  // Estado do Recibo
  const [valorNumero, setValorNumero] = useState(180)
  const [referenteRecibo, setReferenteRecibo] = useState(
    '1 (uma) sessão de psicoterapia clínica individual'
  )
  const [pagadorNome, setPagadorNome] = useState('Nome do Paciente / Responsável')
  const [pagadorCpf, setPagadorCpf] = useState('111.222.333-44')

  // Estado do Contrato
  const [sessaoDuracao, setSessaoDuracao] = useState('50 minutos')
  const [frequenciaSessao, setFrequenciaSessao] = useState('Semanal')
  const [prazoCancelamento, setPrazoCancelamento] = useState('24 horas')
  const [formaPagamento, setFormaPagamento] = useState('Mensal até o dia 5 via Pix/Transferência')

  const dataAtualFormatada = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const valorExtenso = valorPorExtenso(valorNumero)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Selo Informativo */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-6 print:hidden">
          <div className="flex items-center gap-1.5">
            <Link href="/" className="hover:text-emerald-700 transition">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/ferramentas" className="hover:text-emerald-700 transition">
              Ferramentas
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">Modelos Documentais para Psicólogos</span>
          </div>
          <div className="flex items-center gap-1.5 text-teal-900 font-medium bg-teal-100/80 px-2.5 py-1 rounded-full text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>Modelos de Apoio Baseados na Resolução CFP nº 06/2019</span>
          </div>
        </div>

        {/* Header da Página */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-8 print:hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
              <FileSignature className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-teal-700">
                Apoio Administrativo para Clínicas e Consultórios
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Modelos Editáveis de Apoio Documental para Psicólogos
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Modelos editáveis de apoio para declarações de comparecimento, recibos fiscais com conversor por extenso para o Carnê-Leão e termos de acordo terapêutico. <strong>Sujeitos à revisão, conferência e adequação técnica individual de cada profissional</strong> conforme a Resolução CFP nº 06/2019. O processamento ocorre 100% no seu navegador, sem envio de dados a servidores.
              </p>
            </div>
          </div>

          {/* Abas de Navegação */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-100">
            <button
              onClick={() => setActiveTab('declaracao')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                activeTab === 'declaracao'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              1. Declaração de Comparecimento
            </button>
            <button
              onClick={() => setActiveTab('recibo')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                activeTab === 'recibo'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Coins className="w-4 h-4" />
              2. Recibo de Honorários (Carnê-Leão)
            </button>
            <button
              onClick={() => setActiveTab('contrato')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                activeTab === 'contrato'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              3. Contrato Terapêutico Simples
            </button>
          </div>
        </div>

        {/* Layout Split: Formulário à Esquerda + Preview A4 à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= COLUNA DO FORMULÁRIO (PRINT:HIDDEN) ================= */}
          <div className="lg:col-span-5 space-y-6 print:hidden">
            {/* Bloco 1: Dados do Profissional */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <User className="w-4 h-4 text-teal-600" />
                Dados do(a) Profissional Emissor(a)
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nome Completo do(a) Psicólogo(a)
                  </label>
                  <input
                    type="text"
                    value={psiNome}
                    onChange={(e) => setPsiNome(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Registro no CRP
                    </label>
                    <input
                      type="text"
                      value={psiCrp}
                      onChange={(e) => setPsiCrp(e.target.value)}
                      placeholder="Ex: CRP 06/123456"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      CPF (para Recibos)
                    </label>
                    <input
                      type="text"
                      value={psiCpf}
                      onChange={(e) => setPsiCpf(e.target.value)}
                      placeholder="000.000.000-00"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Endereço / Consultório / Telefone
                  </label>
                  <input
                    type="text"
                    value={psiEndereco}
                    onChange={(e) => setPsiEndereco(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Cidade - Estado
                  </label>
                  <input
                    type="text"
                    value={psiCidade}
                    onChange={(e) => setPsiCidade(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Bloco 2: Dados do Documento Ativo */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              {activeTab === 'declaracao' && (
                <div className="space-y-3 text-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-600" />
                    Dados do Comparecimento
                  </h3>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Nome do(a) Paciente / Cliente
                    </label>
                    <input
                      type="text"
                      value={pacienteNome}
                      onChange={(e) => setPacienteNome(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      CPF do(a) Paciente
                    </label>
                    <input
                      type="text"
                      value={pacienteCpf}
                      onChange={(e) => setPacienteCpf(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Data do Atendimento
                    </label>
                    <input
                      type="date"
                      value={dataAtendimento}
                      onChange={(e) => setDataAtendimento(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Horário de Início
                      </label>
                      <input
                        type="time"
                        value={horarioInicio}
                        onChange={(e) => setHorarioInicio(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Horário de Término
                      </label>
                      <input
                        type="time"
                        value={horarioFim}
                        onChange={(e) => setHorarioFim(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-[11px] leading-relaxed">
                    <strong>Nota Normativa (Res. CFP nº 06/2019):</strong> A declaração de comparecimento comprova a presença na sessão. Ela não deve registrar diagnóstico, sintomas ou código de CID/DSM, preservando o sigilo profissional do cliente.
                  </div>
                </div>
              )}

              {activeTab === 'recibo' && (
                <div className="space-y-3 text-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                    <Coins className="w-4 h-4 text-teal-600" />
                    Dados do Recibo de Honorários
                  </h3>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Nome do(a) Pagador(a) / Paciente
                    </label>
                    <input
                      type="text"
                      value={pagadorNome}
                      onChange={(e) => setPagadorNome(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      CPF do(a) Pagador(a)
                    </label>
                    <input
                      type="text"
                      value={pagadorCpf}
                      onChange={(e) => setPagadorCpf(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Valor Numérico (R$)
                    </label>
                    <input
                      type="number"
                      step="5"
                      value={valorNumero}
                      onChange={(e) => setValorNumero(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800 font-bold"
                    />
                    <p className="text-[11px] text-teal-700 mt-1 font-medium italic">
                      Valor por Extenso: <strong>{valorExtenso}</strong>
                    </p>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Discriminação dos Serviços
                    </label>
                    <input
                      type="text"
                      value={referenteRecibo}
                      onChange={(e) => setReferenteRecibo(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-950 text-[11px] leading-relaxed space-y-1">
                    <p className="font-bold flex items-center gap-1.5 text-blue-900">
                      <Info className="w-3.5 h-3.5" />
                      Aviso Fiscal Obrigatório (Receita Saúde — Receita Federal):
                    </p>
                    <p>
                      Para psicólogos autônomos pessoa física, desde 1º de janeiro de 2025 a comprovação oficial de despesas médicas para dedução no IRPF deve ser escriturada obrigatoriamente no sistema digital <strong>Receita Saúde</strong> (integrado ao Carnê-Leão Web). Este modelo impresso serve como recibo financeiro complementar, mas a emissão eletrônica no portal da Receita Federal é indispensável para evitar a malha fiscal do paciente.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'contrato' && (
                <div className="space-y-3 text-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-teal-600" />
                    Parâmetros do Enquadre Terapêutico
                  </h3>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Nome do(a) Paciente / Contratante
                    </label>
                    <input
                      type="text"
                      value={pacienteNome}
                      onChange={(e) => setPacienteNome(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Duração da Sessão
                      </label>
                      <input
                        type="text"
                        value={sessaoDuracao}
                        onChange={(e) => setSessaoDuracao(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Frequência
                      </label>
                      <input
                        type="text"
                        value={frequenciaSessao}
                        onChange={(e) => setFrequenciaSessao(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Aviso Prévio de Cancelamento
                    </label>
                    <input
                      type="text"
                      value={prazoCancelamento}
                      onChange={(e) => setPrazoCancelamento(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Condição de Pagamento
                    </label>
                    <input
                      type="text"
                      value={formaPagamento}
                      onChange={(e) => setFormaPagamento(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 text-slate-800"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Botão de Impressão Flutuante */}
            <button
              onClick={handlePrint}
              type="button"
              className="w-full py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 hover:shadow-lg"
            >
              <Printer className="w-5 h-5" />
              Imprimir / Salvar em PDF (Formato A4)
            </button>
          </div>

          {/* ================= COLUNA DO PREVIEW A4 (FOLHA TIMBRADA) ================= */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-500 print:hidden">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Visualização do Modelo (Formato A4)
                </span>
                <span className="text-[11px] text-slate-400">Modelo Editável de Apoio</span>
              </div>

              {/* Folha A4 */}
              <div
                id="printable-a4-sheet"
                className="bg-white rounded-2xl shadow-lg border border-slate-300 p-8 sm:p-12 min-h-[700px] flex flex-col justify-between text-slate-900 font-serif leading-relaxed print:shadow-none print:border-none print:p-8 print:m-0 print:rounded-none"
              >
                {/* Cabeçalho */}
                <div>
                  <div className="text-center border-b-2 border-slate-900/80 pb-6 mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans uppercase">
                      {psiNome}
                    </h2>
                    <p className="text-xs uppercase font-sans font-semibold tracking-widest text-teal-800 mt-1">
                      Psicóloga(o) Clínica(o) — {psiCrp}
                    </p>
                    <p className="text-[11px] font-sans text-slate-600 mt-1">
                      {psiEndereco} {psiEndereco && psiCidade ? '•' : ''} {psiCidade}
                    </p>
                  </div>

                  {/* DOCUMENTO 1: DECLARAÇÃO DE COMPARECIMENTO */}
                  {activeTab === 'declaracao' && (
                    <div className="space-y-6 pt-4 text-justify">
                      <div className="text-center mb-8">
                        <h3 className="text-lg font-bold font-sans uppercase tracking-wider underline underline-offset-8">
                          Declaração de Comparecimento
                        </h3>
                      </div>

                      <p className="text-sm leading-loose">
                        Declaro, para os devidos fins a que fizer mister e em estrito cumprimento às normas do Conselho Federal de Psicologia (CFP), que o(a) Sr.(a) <strong className="font-sans uppercase text-slate-900">{pacienteNome}</strong>, inscrito(a) no CPF sob o nº <strong className="font-sans">{pacienteCpf}</strong>, compareceu a atendimento psicológico no dia <strong className="font-sans">{new Date(dataAtendimento + 'T12:00:00').toLocaleDateString('pt-BR')}</strong>, no horário das <strong className="font-sans">{horarioInicio}</strong> às <strong className="font-sans">{horarioFim}</strong> horas.
                      </p>

                      <p className="text-sm leading-loose">
                        A presente declaração é emitida a pedido do(a) interessado(a) {finalidadeDeclaracao}.
                      </p>

                      <p className="text-xs text-slate-600 font-sans italic pt-4">
                        * Em conformidade com a Resolução CFP nº 06/2019, esta declaração não contempla diagnóstico, sintomatologia ou enquadramento nosológico (CID/DSM), resguardando o direito ao sigilo ético-profissional.
                      </p>
                    </div>
                  )}

                  {/* DOCUMENTO 2: RECIBO DE HONORÁRIOS */}
                  {activeTab === 'recibo' && (
                    <div className="space-y-6 pt-4 text-justify">
                      <div className="text-center mb-8">
                        <h3 className="text-lg font-bold font-sans uppercase tracking-wider underline underline-offset-8">
                          Recibo de Pagamento de Honorários
                        </h3>
                        <span className="text-xs font-sans text-slate-500 block mt-1">
                          Modelo para fins comprobatórios e fiscais (Carnê-Leão / IRPF)
                        </span>
                      </div>

                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-center font-sans font-bold text-xl my-4">
                        VALOR: R$ {valorNumero.toFixed(2).replace('.', ',')}
                      </div>

                      <p className="text-sm leading-loose">
                        Recebi de <strong className="font-sans uppercase text-slate-900">{pagadorNome}</strong>, inscrito(a) no CPF sob o nº <strong className="font-sans">{pagadorCpf}</strong>, a quantia supra de <strong>R$ {valorNumero.toFixed(2).replace('.', ',')} ({valorExtenso})</strong>, referente a prestação de serviços profissionais de psicologia: <span className="underline">{referenteRecibo}</span>.
                      </p>

                      <p className="text-sm leading-loose">
                        Pelo que, para clareza e fins de direito fiscal/comprobatório, firmo o presente recibo dando plena e geral quitação do valor recebido.
                      </p>
                    </div>
                  )}

                  {/* DOCUMENTO 3: CONTRATO TERAPÊUTICO */}
                  {activeTab === 'contrato' && (
                    <div className="space-y-4 pt-2 text-justify text-xs sm:text-[13px] leading-relaxed">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-bold font-sans uppercase tracking-wider underline underline-offset-8">
                          Termo de Contrato Terapêutico
                        </h3>
                        <span className="text-[11px] font-sans text-slate-500 block mt-1">
                          Enquadre de Prestação de Serviços Psicológicos
                        </span>
                      </div>

                      <p>
                        Pelo presente instrumento, de um lado <strong className="font-sans">{psiNome}</strong>, Psicóloga(o) sob o <strong className="font-sans">{psiCrp}</strong>, e de outro lado <strong className="font-sans">{pacienteNome}</strong>, celebram o presente acordo de acompanhamento psicoterapêutico sob as seguintes condições:
                      </p>

                      <div className="space-y-2 pl-3 border-l-2 border-teal-700/60 font-sans text-xs">
                        <p>
                          <strong>1. Sessões:</strong> Os atendimentos ocorrerão com frequência <strong>{frequenciaSessao}</strong> e duração de <strong>{sessaoDuracao}</strong> por encontro.
                        </p>
                        <p>
                          <strong>2. Faltas e Desmarcações:</strong> Desmarcações sem cobrança devem ser comunicadas com antecedência mínima de <strong>{prazoCancelamento}</strong>. Faltas sem aviso prévio serão computadas e devidas integralmente.
                        </p>
                        <p>
                          <strong>3. Honorários:</strong> O pagamento será efetuado conforme ajustado: <strong>{formaPagamento}</strong>.
                        </p>
                        <p>
                          <strong>4. Sigilo Profissional:</strong> Todo o conteúdo dos atendimentos é rigorosamente confidencial, resguardado pelo Artigo 9º do Código de Ética Profissional do Psicólogo.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Rodapé e Assinatura */}
                <div className="pt-12 text-center">
                  <p className="text-sm font-sans mb-12">
                    {psiCidade ? psiCidade : 'Localidade'}, {dataAtualFormatada}.
                  </p>
                  <div className="inline-block border-t border-slate-900 w-64 pt-2">
                    <p className="text-xs font-sans font-bold text-slate-900 uppercase">
                      {psiNome}
                    </p>
                    <p className="text-[11px] font-sans text-slate-600">
                      Psicóloga(o) — {psiCrp}
                    </p>
                    {activeTab === 'recibo' && psiCpf && (
                      <p className="text-[11px] font-sans text-slate-500">
                        CPF: {psiCpf}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= GUIA NORMATIVO E RESPONSABILIDADE DO PROFISSIONAL ================= */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm prose max-w-none text-slate-700 mt-12 print:hidden">
          <header className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs uppercase font-bold text-teal-700 tracking-wider">
              Orientações sobre Elaboração de Documentos Escritos
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Diretrizes Normativas do CFP e Responsabilidade do Profissional Emissor
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Esta ferramenta fornece modelos editáveis de apoio. A adequação ética, jurídica e fiscal deve ser confirmada pelo próprio psicólogo perante o Conselho Regional da sua jurisdição.
            </p>
          </header>

          <section className="space-y-4 text-sm leading-relaxed">
            <h3 className="text-lg font-bold text-slate-900">1. Natureza de Apoio dos Modelos</h3>
            <p>
              Os modelos gerados por esta plataforma baseiam-se nos conceitos da <strong>Resolução CFP nº 06/2019</strong>. Contudo, nenhuma plataforma automatizada pode substituir o julgamento ético do profissional para o caso concreto. Cada documento deve ser minuciosamente revisado antes da assinatura.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">2. Recomendações sobre Declarações e Recibos Fiscais</h3>
            <p>
              Na emissão de recibos para dedução no Imposto de Renda (IRPF) ou inclusão no Carnê-Leão da Receita Federal, certifique-se de preencher com exatidão o CPF do responsável financeiro pelo pagamento e o próprio CPF profissional, declarando os rendimentos mensalmente.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
              <strong>Isenção de Responsabilidade Profissional:</strong> O portal Psicologia Direta não se responsabiliza pelo uso inadequado, divergências tributárias ou inconsistências em documentos assinados por profissionais terceiros.
            </div>
          </section>

          <footer className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong>Fontes Normativas:</strong>
              <p>Conselho Federal de Psicologia (Resolução CFP nº 06/2019 e Resolução CFP nº 010/2005 - Código de Ética).</p>
            </div>
            <Link
              href="/ferramentas"
              className="inline-flex items-center gap-1.5 text-teal-700 font-bold hover:underline"
            >
              Voltar para o hub de ferramentas
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </footer>
        </article>
      </div>
    </div>
  )
}
