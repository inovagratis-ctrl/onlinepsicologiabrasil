'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  HeartHandshake,
  ShieldCheck,
  Printer,
  RotateCcw,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Lock,
  Plus,
  Compass,
  Smile,
  Users,
  AlertCircle,
  HelpCircle,
  ShieldAlert,
  Info,
  Building2,
  HeartPulse,
} from 'lucide-react'

interface PlanData {
  nome: string
  sinaisAlerta: string
  estrategiasIndividuais: string
  pessoasApoio: string
  profissionaisEmergencia: string
  motivosEsperanca: string
}

const INITIAL_DATA: PlanData = {
  nome: '',
  sinaisAlerta: '',
  estrategiasIndividuais: '',
  pessoasApoio: '',
  profissionaisEmergencia: '',
  motivosEsperanca: '',
}

const EXEMPLO_SUGERIDO: PlanData = {
  nome: 'Meu Plano Pessoal',
  sinaisAlerta:
    'Aperto no peito ou respiração curta, dificuldade para dormir com pensamentos acelerados, vontade repentina de me isolar e irritabilidade com pequenos ruídos.',
  estrategiasIndividuais:
    'Tomar um banho morno com luz suave, dar uma caminhada de 20 minutos sem celular, ouvir minha playlist instrumental acústica, escrever em um caderno o que estou sentindo.',
  pessoasApoio:
    'Mariana (irmã - tel: (11) 9XXXX-XXXX) para conversar sobre assuntos leves; Carlos (amigo) para sair para caminhar; ir tomar um chá na casa da minha mãe.',
  profissionaisEmergencia:
    'Dra. Camila (Psicóloga clínica) - Sessões semanais; CAPS III ou UPA Central do bairro em urgências presenciais; CVV (Ligue 188 - 24 horas gratuito).',
  motivosEsperanca:
    'Minha viagem de férias no fim do ano; terminar meu projeto pessoal; ver meu sobrinho crescer; cuidar do meu cachorro Bento.',
}

export default function PlanoAutocuidadoPage() {
  const [data, setData] = useState<PlanData>(INITIAL_DATA)
  const reportRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    window.print()
  }

  const handleFillExample = () => {
    setData(EXEMPLO_SUGERIDO)
  }

  const handleClear = () => {
    setData(INITIAL_DATA)
  }

  const appendChip = (field: keyof PlanData, text: string) => {
    setData((prev) => {
      const current = prev[field]
      if (!current) return { ...prev, [field]: text }
      if (current.includes(text)) return prev
      return { ...prev, [field]: `${current}, ${text}` }
    })
  }

  return (
    <div className="bg-[#F5F8F6] min-h-screen py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
          <span className="text-slate-800 font-semibold">Plano de Autocuidado</span>
        </nav>

        {/* Header da Ferramenta */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs mb-8 print:hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#0F5B5B] text-xs font-bold tracking-wide uppercase border border-emerald-100">
                <Compass className="w-3.5 h-3.5" />
                Guia Interativo de Prevenção e Acolhimento
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123F42] tracking-tight">
                Plano Pessoal de Autocuidado &amp; Segurança Emocional
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Em momentos de sobrecarga ou crise emocional, pode ser difícil pensar com clareza. Este roteiro serve para mapear antecipadamente suas âncoras de alívio, pessoas de confiança e recursos de socorro profissional.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleFillExample}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0F5B5B]" />
                Ver Exemplo Preenchido
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500 text-xs font-semibold transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Limpar Campos
              </button>
            </div>
          </div>

          {/* Destaque Técnico de Privacidade */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium text-emerald-900 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-100">
              <Lock className="w-3.5 h-3.5 text-[#0F5B5B]" />
              Privacidade Local (os dados ficam apenas na memória desta aba)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0F5B5B]" />
              Sem pontuação ou diagnóstico clínico
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Printer className="w-4 h-4 text-[#0F5B5B]" />
              Exportação e impressão limpa em A4
            </span>
          </div>
        </header>

        {/* BANNER DE ORIENTAÇÃO DE CRISE E EMERGÊNCIA (PRINT:HIDDEN) */}
        <section
          aria-label="Orientações para situações de crise e emergência"
          className="bg-white rounded-3xl p-6 border-2 border-rose-200 shadow-xs mb-8 print:hidden"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <h2 className="text-base font-bold text-rose-950">
                  Está enfrentando sofrimento intenso ou risco imediato?
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  Este roteiro de autocuidado é um recurso preventivo de reflexão e <strong>não substitui suporte emergencial presencial</strong>. Em caso de desespero iminente ou risco à sua vida, não fique sozinho(a):
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Canal 1: Apoio Emocional */}
                <div className="p-3.5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
                      Apoio Emocional &amp; Escuta:
                    </span>
                    <a
                      href="tel:188"
                      className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg transition"
                    >
                      Ligue 188
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    <strong>CVV — Centro de Valorização da Vida:</strong> Atendimento telefônico gratuito, confidencial e disponível 24 horas por dia em todo o Brasil.
                  </p>
                </div>

                {/* Canal 2: Emergência Médica / Psiquiátrica */}
                <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5 text-amber-700" />
                      Urgência Médica / Risco Físico:
                    </span>
                    <a
                      href="tel:192"
                      className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg transition"
                    >
                      Ligue 192
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    <strong>SAMU (192) ou comparecimento imediato:</strong> Dirija-se a uma UPA 24h, Pronto-Socorro ou CAPS III, preferencialmente acompanhado(a) de alguém de confiança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Split: Formulário à Esquerda + Prévia Formatada para Impressão */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna do Formulário (7 cols) */}
          <div className="lg:col-span-7 space-y-6 print:hidden">
            {/* Bloco 1: Identificação Opcional */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <label htmlFor="nome-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Como deseja identificar este plano? (Opcional)
              </label>
              <input
                id="nome-input"
                type="text"
                placeholder="Ex: Meu Plano Pessoal de Segurança e Acolhimento"
                value={data.nome}
                onChange={(e) => setData({ ...data, nome: e.target.value })}
                className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F5B5B]/30 focus:border-[#0F5B5B]"
              />
            </div>

            {/* Bloco 2: Sinais de Alerta */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="sinais-input" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold flex items-center justify-center">
                    1
                  </span>
                  Meus Sinais de Alerta e Sobrecarga
                </label>
              </div>
              <p className="text-xs text-slate-500">
                Sintomas físicos, alterações de humor ou pensamentos que indicam que minha sobrecarga está aumentando:
              </p>
              <textarea
                id="sinais-input"
                rows={3}
                placeholder="Descreva o que acontece no seu corpo e pensamentos..."
                value={data.sinaisAlerta}
                onChange={(e) => setData({ ...data, sinaisAlerta: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F5B5B]/30 focus:border-[#0F5B5B] leading-relaxed"
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] text-slate-400 font-semibold self-center mr-1">Sugestões opcionais:</span>
                {[
                  'Aperto no peito',
                  'Respiração curta',
                  'Insônia',
                  'Tensão muscular',
                  'Vontade de me isolar',
                  'Pensamentos acelerados',
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => appendChip('sinaisAlerta', chip)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3 text-[#0F5B5B]" />
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Bloco 3: Âncoras e Estratégias Individuais */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <label htmlFor="estrategias-input" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#0F5B5B] text-[11px] font-bold flex items-center justify-center">
                  2
                </span>
                Minhas Âncoras e Estratégias Individuais
              </label>
              <p className="text-xs text-slate-500">
                Atividades que posso fazer individualmente para trazer acolhimento e desacelerar:
              </p>
              <textarea
                id="estrategias-input"
                rows={3}
                placeholder="Ex: Banho morno com luz suave, caminhar sem celular, escutar música calma, escrever..."
                value={data.estrategiasIndividuais}
                onChange={(e) => setData({ ...data, estrategiasIndividuais: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F5B5B]/30 focus:border-[#0F5B5B] leading-relaxed"
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] text-slate-400 font-semibold self-center mr-1">Sugestões opcionais:</span>
                {[
                  'Banho morno relaxante',
                  'Caminhada ao ar livre',
                  'Música calma / playlist favorita',
                  'Escrever o que sinto em um papel',
                  'Alongamento suave',
                  'Chá quente sem pressa',
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => appendChip('estrategiasIndividuais', chip)}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3 text-[#0F5B5B]" />
                    {chip}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 italic pt-1">
                * Nota: Nem toda técnica funciona para todas as pessoas (exercícios de respiração, por exemplo, podem causar desconforto em alguns casos). Registre o que realmente traz conforto para você.
              </p>
            </div>

            {/* Bloco 4: Pessoas e Ambientes de Apoio */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <label htmlFor="pessoas-input" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-[11px] font-bold flex items-center justify-center">
                  3
                </span>
                Pessoas de Confiança e Ambientes de Segurança
              </label>
              <p className="text-xs text-slate-500">
                Pessoas queridas com quem posso conversar ou locais que me transmitem acolhimento e paz:
              </p>
              <textarea
                id="pessoas-input"
                rows={3}
                placeholder="Nomes e telefones de amigos ou familiares de confiança, ou locais seguros..."
                value={data.pessoasApoio}
                onChange={(e) => setData({ ...data, pessoasApoio: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F5B5B]/30 focus:border-[#0F5B5B] leading-relaxed"
              />
            </div>

            {/* Bloco 5: Apoio Profissional e Emergência */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <label htmlFor="profissionais-input" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold flex items-center justify-center">
                  4
                </span>
                Profissionais de Saúde &amp; Serviços de Urgência
              </label>
              <p className="text-xs text-slate-500">
                Se os passos individuais não forem suficientes, quem devo contatar ou onde devo ir:
              </p>
              <textarea
                id="profissionais-input"
                rows={3}
                placeholder="Nome do(a) psicólogo(a), psiquiatra, posto de saúde (UBS/CAPS) ou UPA mais próxima..."
                value={data.profissionaisEmergencia}
                onChange={(e) => setData({ ...data, profissionaisEmergencia: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F5B5B]/30 focus:border-[#0F5B5B] leading-relaxed"
              />
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-950 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-rose-600 shrink-0" />
                  <span><strong>CVV — Centro de Valorização da Vida:</strong> Apoio gratuito 24h por dia</span>
                </div>
                <a
                  href="tel:188"
                  className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] rounded-lg shrink-0 transition"
                >
                  Ligue 188
                </a>
              </div>
            </div>

            {/* Bloco 6: Motivos de Esperança */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <label htmlFor="motivos-input" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#0F5B5B] text-[11px] font-bold flex items-center justify-center">
                  5
                </span>
                O que Me Mantém Firme e com Esperança?
              </label>
              <p className="text-xs text-slate-500">
                Planos futuros, pessoas queridas, sonhos, animais de estimação ou valores que dão sentido à minha vida:
              </p>
              <textarea
                id="motivos-input"
                rows={3}
                placeholder="Ex: Minha família, meus projetos, meus bichinhos, planos de viagem, metas futuras..."
                value={data.motivosEsperanca}
                onChange={(e) => setData({ ...data, motivosEsperanca: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F5B5B]/30 focus:border-[#0F5B5B] leading-relaxed"
              />
            </div>

            {/* Nota de Transparência Técnica sobre Privacidade */}
            <div className="p-5 bg-white rounded-3xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Lock className="w-4 h-4 text-[#0F5B5B]" />
                <span>Transparência Técnica sobre seus Dados</span>
              </div>
              <p className="leading-relaxed">
                As informações preenchidas neste formulário residem exclusivamente na <strong>memória volátil desta aba do seu navegador</strong> (estado do React em tempo real). Nada é enviado a servidores externos, nem armazenado em banco de dados ou acessado por scripts de terceiros. Ao clicar em <em>Limpar Campos</em> ou fechar esta aba, tudo é imediatamente apagado do dispositivo.
              </p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Como na maior parte da web, o portal carrega scripts técnicos padrão (Google AdSense/Analytics) para sustentação do serviço gratuito, que coletam apenas métricas técnicas de navegação (como endereço IP e cookies de sessão descritos em nossa <Link href="/politica-de-cookies" className="text-[#0F5B5B] underline">Política de Cookies</Link>). Esses scripts <strong>não têm acesso nem leem o conteúdo digitado no seu formulário</strong>.
              </p>
            </div>
          </div>

          {/* Coluna da Prévia Formatada para Impressão / PDF (5 cols no desktop, 100% no print) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4 print:static print:w-full print:m-0">
            <div className="flex items-center justify-between print:hidden">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Visualização do Plano (Formato A4)
              </span>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 bg-[#0F5B5B] hover:bg-[#123F42] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow transition"
              >
                <Printer className="w-3.5 h-3.5" />
                Imprimir / Salvar em PDF
              </button>
            </div>

            {/* Documento Estilizado A4 */}
            <div
              ref={reportRef}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-300 shadow-md text-slate-800 space-y-5 print:shadow-none print:border-none print:p-0 print:m-0 print:w-full print:block"
            >
              {/* Topo do Plano */}
              <div className="border-b-2 border-[#0F5B5B] pb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F5B5B] block">
                    Psicologia Direta • Roteiro Pessoal de Segurança
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-[#123F42] leading-tight mt-0.5">
                    {data.nome || 'Meu Plano Pessoal de Autocuidado'}
                  </h2>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Documento de suporte individual • Guarde em local visível ou no seu celular.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0F5B5B] flex items-center justify-center shrink-0 border border-emerald-100">
                  <HeartHandshake className="w-5 h-5 text-[#0F5B5B]" />
                </div>
              </div>

              {/* Seção 1 */}
              <div className="space-y-1 break-inside-avoid">
                <span className="text-[11px] font-bold uppercase tracking-wide text-amber-900 bg-amber-50 px-2 py-0.5 rounded block w-fit">
                  1. Meus Sinais de Alerta
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-amber-300">
                  {data.sinaisAlerta || 'Nenhum sinal preenchido ainda.'}
                </p>
              </div>

              {/* Seção 2 */}
              <div className="space-y-1 break-inside-avoid">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#0F5B5B] bg-emerald-50 px-2 py-0.5 rounded block w-fit">
                  2. O que Posso Fazer Sozinho(a) para Aliviar
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-[#7BAE9B]">
                  {data.estrategiasIndividuais || 'Nenhuma estratégia descrita ainda.'}
                </p>
              </div>

              {/* Seção 3 */}
              <div className="space-y-1 break-inside-avoid">
                <span className="text-[11px] font-bold uppercase tracking-wide text-teal-900 bg-teal-50 px-2 py-0.5 rounded block w-fit">
                  3. Pessoas e Locais de Segurança
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-teal-400">
                  {data.pessoasApoio || 'Nenhum contato adicionado ainda.'}
                </p>
              </div>

              {/* Seção 4 */}
              <div className="space-y-1 break-inside-avoid">
                <span className="text-[11px] font-bold uppercase tracking-wide text-rose-900 bg-rose-50 px-2 py-0.5 rounded block w-fit">
                  4. Suporte Profissional &amp; Emergência
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-rose-300">
                  {data.profissionaisEmergencia || 'Centro de Valorização da Vida — CVV: Ligue 188 (24h) | SAMU: Ligue 192 em emergências.'}
                </p>
              </div>

              {/* Seção 5 */}
              <div className="space-y-1 break-inside-avoid">
                <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded block w-fit">
                  5. Meus Motivos para Seguir Firme
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-emerald-400">
                  {data.motivosEsperanca || 'Nenhum motivo registrado ainda.'}
                </p>
              </div>

              {/* Rodapé do Documento Impresso */}
              <div className="pt-4 mt-4 border-t border-slate-200 text-[10px] text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 break-inside-avoid">
                <span>Psicologia Direta (psicologiadireta.com.br) • Uso Pessoal e Confidencial</span>
                <span>Em emergências: CVV 188 | SAMU 192</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
