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
    'Praticar respiração 4-7-8 por 5 minutos, tomar um banho morno com luz baixa, dar uma caminhada de 20 minutos sem celular, ouvir minha playlist acústica instrumental.',
  pessoasApoio:
    'Ligar para a Mariana (irmã) para conversar sobre coisas leves; falar com o Carlos; ir tomar um chá na casa da minha mãe.',
  profissionaisEmergencia:
    'Dra. Camila (Psicóloga) - Contato nas quartas; UPA Central do bairro em emergências físicas; Centro de Valorização da Vida (Ligue 188 - 24 horas gratuito).',
  motivosEsperanca:
    'Minha viagem de férias no fim do ano; terminar o curso de fotografia; ver meu sobrinho crescer; cuidar do meu cachorro Bento.',
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
                Em momentos de crise ou estresse elevado, pode ser difícil pensar com clareza. Este roteiro serve para mapear antecipadamente suas âncoras de alívio, pessoas de confiança e recursos de apoio.
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

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Lock className="w-4 h-4 text-[#0F5B5B]" />
              100% Privado (armazenado apenas no seu navegador)
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0F5B5B]" />
              Sem pontuação ou diagnóstico
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Printer className="w-4 h-4 text-[#0F5B5B]" />
              Exportação limpa em formato A4
            </span>
          </div>
        </header>

        {/* Layout Split: Formulário à Esquerda + Prévia Formatada para Impressão */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna do Formulário (7 cols) */}
          <div className="lg:col-span-7 space-y-6 print:hidden">
            {/* Bloco 1: Nome Opcional */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <label htmlFor="nome-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Como deseja identificar este plano? (Opcional)
              </label>
              <input
                id="nome-input"
                type="text"
                placeholder="Ex: Meu Plano de Segurança e Acolhimento"
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
                Sintomas físicos, pensamentos ou atitudes que indicam que minha ansiedade ou estresse estão subindo:
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
                <span className="text-[10px] text-slate-400 font-semibold self-center mr-1">Sugestões rápidas:</span>
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

            {/* Bloco 3: Âncoras e Alívio Individual */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <label htmlFor="estrategias-input" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#0F5B5B] text-[11px] font-bold flex items-center justify-center">
                  2
                </span>
                Minhas Âncoras e Estratégias Individuais
              </label>
              <p className="text-xs text-slate-500">
                Atividades que posso fazer sozinho(a) para acalmar a mente e desacelerar:
              </p>
              <textarea
                id="estrategias-input"
                rows={3}
                placeholder="Ex: Caminhar na natureza, respiração profunda, banho quente, escutar música..."
                value={data.estrategiasIndividuais}
                onChange={(e) => setData({ ...data, estrategiasIndividuais: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F5B5B]/30 focus:border-[#0F5B5B] leading-relaxed"
              />
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] text-slate-400 font-semibold self-center mr-1">Sugestões rápidas:</span>
                {[
                  'Respiração 4-7-8',
                  'Banho morno',
                  'Caminhada ao ar livre',
                  'Música instrumental',
                  'Escrever o que sinto',
                  'Alongar o corpo',
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
            </div>

            {/* Bloco 4: Pessoas e Locais de Apoio */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
              <label htmlFor="pessoas-input" className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-[11px] font-bold flex items-center justify-center">
                  3
                </span>
                Pessoas e Ambientes que Me Trazem Segurança
              </label>
              <p className="text-xs text-slate-500">
                Pessoas de confiança com quem posso conversar ou locais que me trazem sensação de paz:
              </p>
              <textarea
                id="pessoas-input"
                rows={3}
                placeholder="Nomes e contatos de amigos, familiares ou locais tranquilos..."
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
                Profissionais de Saúde e Canais de Emergência
              </label>
              <p className="text-xs text-slate-500">
                Se os passos anteriores não forem suficientes, quem devo contatar imediatamente:
              </p>
              <textarea
                id="profissionais-input"
                rows={3}
                placeholder="Nome do seu psicólogo(a), psiquiatra, posto de saúde ou emergência..."
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
                Planos futuros, pessoas queridas, sonhos ou valores que dão sentido à minha caminhada:
              </p>
              <textarea
                id="motivos-input"
                rows={3}
                placeholder="Ex: Minha família, meus projetos, meus animais de estimação, sonhos que quero realizar..."
                value={data.motivosEsperanca}
                onChange={(e) => setData({ ...data, motivosEsperanca: e.target.value })}
                className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F5B5B]/30 focus:border-[#0F5B5B] leading-relaxed"
              />
            </div>
          </div>

          {/* Coluna da Prévia Formatada para Impressão / PDF (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
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
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-300 shadow-md text-slate-800 space-y-5 print:shadow-none print:border-none print:p-0 print:m-0"
            >
              {/* Topo do Plano */}
              <div className="border-b-2 border-[#0F5B5B] pb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F5B5B] block">
                    Psicologia Direta • Roteiro Pessoal
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-[#123F42] leading-tight mt-0.5">
                    {data.nome || 'Meu Plano Pessoal de Autocuidado'}
                  </h2>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Documento de suporte individual • Conservar em local de fácil acesso.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0F5B5B] flex items-center justify-center shrink-0 border border-emerald-100">
                  <HeartHandshake className="w-5 h-5 text-[#0F5B5B]" />
                </div>
              </div>

              {/* Seção 1 */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wide text-amber-900 bg-amber-50 px-2 py-0.5 rounded block w-fit">
                  1. Meus Sinais de Alerta
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-amber-300">
                  {data.sinaisAlerta || 'Nenhum sinal preenchido ainda.'}
                </p>
              </div>

              {/* Seção 2 */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#0F5B5B] bg-emerald-50 px-2 py-0.5 rounded block w-fit">
                  2. O que Posso Fazer Sozinho(a) para Aliviar
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-[#7BAE9B]">
                  {data.estrategiasIndividuais || 'Nenhuma estratégia descrita ainda.'}
                </p>
              </div>

              {/* Seção 3 */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wide text-teal-900 bg-teal-50 px-2 py-0.5 rounded block w-fit">
                  3. Pessoas e Locais de Segurança
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-teal-400">
                  {data.pessoasApoio || 'Nenhum contato adicionado ainda.'}
                </p>
              </div>

              {/* Seção 4 */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wide text-rose-900 bg-rose-50 px-2 py-0.5 rounded block w-fit">
                  4. Suporte Profissional &amp; Emergência
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-rose-300">
                  {data.profissionaisEmergencia || 'Centro de Valorização da Vida — CVV: Ligue 188 (24h).'}
                </p>
              </div>

              {/* Seção 5 */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded block w-fit">
                  5. Meus Motivos para Seguir Firme
                </span>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-emerald-400">
                  {data.motivosEsperanca || 'Nenhum motivo registrado ainda.'}
                </p>
              </div>

              {/* Rodapé do Documento */}
              <div className="pt-4 mt-4 border-t border-slate-200 text-[10px] text-slate-400 flex items-center justify-between">
                <span>Psicologia Direta (psicologiadireta.com.br)</span>
                <span>Uso pessoal e confidencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
