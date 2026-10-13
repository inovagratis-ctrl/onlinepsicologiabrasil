'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Printer,
  Sparkles,
  HelpCircle,
  Clock,
  Download,
  Copy,
  Check,
  QrCode,
  CreditCard,
  User,
  Mail,
  ChevronDown,
  ChevronUp,
  X,
  Lock,
  Layers,
  HeartHandshake
} from 'lucide-react'
import { PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { trackEvent } from '@/lib/analytics'

export interface MaterialFaqItem {
  question: string
  answer: string
}

export interface PremiumMaterialProps {
  title: string
  subtitle?: string
  description: string
  pages: number
  price: number
  priceId: string
  features: string[]
  previewContent: React.ReactNode
  targetAge?: string
  notRecommendedFor?: string
  homeUsage?: string[]
  schoolUsage?: string[]
  samplePages?: {
    tabTitle: string
    pageNumber: string
    content: React.ReactNode
  }[]
  faqItems?: MaterialFaqItem[]
  trademarkDisclaimer?: string
  coverImage?: string
  coverAlt?: string
}

export default function PremiumMaterial({
  title,
  subtitle,
  description,
  pages,
  price,
  priceId,
  features,
  previewContent,
  targetAge = 'Crianças de 3 a 12 anos e adolescentes com necessidades de apoio visual',
  notRecommendedFor = 'Adultos sem adaptação de conteúdo, ou como substituto de avaliação fonoaudiológica, psicológica ou neurológica.',
  homeUsage = [
    'Imprima e organize as pranchas em uma pasta ou fixe em local de fácil alcance da criança.',
    'Apresente o material em momentos calmos, sem cobrança imediata de resultados.',
    'Comemore cada tentativa de comunicação e combine o uso com todos os familiares cuidadores.',
  ],
  schoolUsage = [
    'Compartilhe cópias com a professora de apoio e a equipe pedagógica para manter a mesma linguagem visual.',
    'Utilize nas transições de atividades e no cantinho de regulação da sala de aula.',
    'Adapte a rotina de lição de casa mantendo os mesmos combinados da escola.',
  ],
  samplePages,
  faqItems = [
    {
      question: 'Como recebo o material após o pagamento?',
      answer:
        'A liberação é instantânea. Assim que o pagamento via PIX ou cartão é confirmado, você é redirecionado para a tela de download e recebe uma cópia do link no seu e-mail cadastrado.',
    },
    {
      question: 'Posso imprimir quantas vezes eu quiser?',
      answer:
        'Sim! O arquivo é um PDF em alta resolução (300 DPI) para sempre seu. Você pode imprimir cópias para usar em casa, na escola ou com outros cuidadores.',
    },
    {
      question: 'Preciso de impressora colorida ou papel especial?',
      answer:
        'O material foi diagramado para funcionar perfeitamente tanto em impressões coloridas quanto em preto e branco. Para maior durabilidade, recomendamos plastificar ou colocar em envelopes plásticos.',
    },
    {
      question: 'Sou psicóloga/professora: posso usar com meus alunos e pacientes?',
      answer:
        'Sim. O uso com seus alunos, clientes ou pacientes em contexto individual é totalmente autorizado e encorajado.',
    },
    {
      question: 'Como funciona a garantia de 7 dias?',
      answer:
        'Se por qualquer motivo você achar que o material não atendeu suas expectativas, basta solicitar pelo nosso canal de contato em até 7 dias que estornamos 100% do valor pago.',
    },
  ],
  trademarkDisclaimer,
  coverImage,
  coverAlt,
}: PremiumMaterialProps) {
  const [selectedTab, setSelectedTab] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [buyerName, setBuyerName] = useState('')
  const [buyerEmail, setBuyerEmail] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix')
  const [pixCopied, setPixCopied] = useState(false)
  const [processingOrder, setProcessingOrder] = useState(false)

  const handleOpenCheckout = () => {
    trackEvent('start_booking', { materialId: priceId, price })
    setIsCheckoutOpen(true)
  }

  const handleCopyPix = () => {
    const pixCode = `00020126580014br.gov.bcb.pix0136psicologiadireta-${priceId}@mercadopago.com520400005303986540${price.toFixed(2)}5802BR5925PSICOLOGIA DIRETA LTDA6009RIO BRANCO62070503***6304`
    navigator.clipboard.writeText(pixCode)
    setPixCopied(true)
    setTimeout(() => setPixCopied(false), 3000)
  }

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault()
    if (!buyerEmail || !buyerName) {
      alert('Por favor, informe seu nome e e-mail para liberação do material.')
      return
    }

    setProcessingOrder(true)
    trackEvent('download_material', { materialId: priceId, price })

    setTimeout(() => {
      // Redireciona para página de entrega com token e dados do produto
      window.location.href = `/download?material=${priceId}&name=${encodeURIComponent(
        title
      )}&email=${encodeURIComponent(buyerEmail)}&token=MAT_${Date.now()}`
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-xs text-slate-600">
          <Link
            href="/materiais"
            className="inline-flex items-center gap-1.5 font-bold text-slate-700 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Catálogo de Materiais
          </Link>
          <span className="hidden sm:inline text-slate-500">
            Revisão Clínica: {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* HERO DO PRODUTO */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Coluna Esquerda: Informações e Compra */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  PDF Digital A4
                </span>
                <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {pages} Páginas Prontas
                </span>
                <span className="bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" />
                  Entrega Imediata
                </span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-2 text-sm sm:text-base font-semibold text-blue-700">
                    {subtitle}
                  </p>
                )}
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Bloco de Preço e Botão de Ação */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider block">
                      Acesso Imediato ao PDF Completo
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900">
                        R$ {price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Pagamento Único • Sem Mensalidade
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:block text-xs text-right text-slate-500">
                    PDF vetorizado em alta resolução (300 DPI) pronto para imprimir.
                  </span>
                </div>

                <button
                  onClick={handleOpenCheckout}
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base py-4 px-6 rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Comprar Agora e Baixar Imediatamente (R$ {price.toFixed(2).replace('.', ',')})
                </button>

                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Garantia incondicional de 7 dias
                  </span>
                  <span className="flex items-center gap-1">
                    <Printer className="w-4 h-4 text-slate-600" />
                    Impressões ilimitadas no papel A4
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Acesso imediato no e-mail e na tela
                  </span>
                </div>
              </div>

              {/* O que está incluído */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  O que está incluso neste material:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coluna Direita: Mockup Visual e Amostra do PDF */}
            <div className="lg:col-span-5 space-y-4">
              {coverImage && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                  <img
                    src={coverImage}
                    alt={coverAlt || title}
                    className="w-full h-56 sm:h-64 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="bg-white px-4 py-2 text-[11px] text-slate-600 border-t border-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">Formato A4 Vetorizado</span>
                    <span className="text-[#236B78] font-bold">PDF Completo</span>
                  </div>
                </div>
              )}

              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#236B78]" />
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Prévia das Páginas Internas
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#236B78] bg-[#DCEFF2] px-2.5 py-0.5 rounded-full">
                    Amostra Real
                  </span>
                </div>

                {/* Visualização de Páginas / Prévias */}
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm min-h-[340px] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                      <span className="font-semibold text-slate-800">Folha de Aplicação A4</span>
                      <span>Formato 21 x 29,7 cm</span>
                    </div>

                    {/* Conteúdo da Prévia */}
                    <div className="text-xs leading-relaxed text-slate-700">
                      {previewContent}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-amber-500" /> Material Completo com {pages} páginas
                    </span>
                    <button
                      onClick={handleOpenCheckout}
                      className="font-bold text-blue-600 hover:text-blue-800 underline cursor-pointer"
                    >
                      Liberar todas as páginas →
                    </button>
                  </div>
                </div>

                {/* Box de Selo de Curadoria */}
                <div className="mt-4 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Elaboração com Revisão Clínica</span>
                    <span className="text-[11px] text-blue-700 leading-snug block mt-0.5">
                      Conteúdo desenvolvido e revisado por {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP}), voltado para aplicação prática no cotidiano.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DETALHAMENTO: PARA QUEM É, PARA QUEM NÃO É E COMO USAR */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Para quem é / Não é */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Para quem este material é indicado:
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100">
                {targetAge}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Para quem NÃO é indicado:
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
                {notRecommendedFor}
              </p>
            </div>
          </div>

          {/* Como usar em Casa e na Escola */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                <HeartHandshake className="w-5 h-5 text-blue-600" />
                Exemplos de uso em casa:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {homeUsage.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-indigo-600" />
                Exemplos de uso na escola e clínica:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {schoolUsage.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FORMATO DO ARQUIVO, ENTREGA E POLÍTICA DE REEMBOLSO */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Printer className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Formato do Arquivo</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              PDF digital de alta qualidade vetorizado (A4). Pode ser impresso em casa, papelaria ou consultório, em cores ou escala de cinza.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Download className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Entrega Imediata</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              O link de download é aberto na tela imediatamente após o pagamento e uma cópia de segurança é enviada para o seu e-mail.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Garantia de 7 Dias</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Garantia incondicional de reembolso conforme o CDC. Se o material não fizer sentido para a sua rotina, devolvemos 100% do valor.
            </p>
          </div>
        </div>

        {/* AVISOS LEGAIS E ÉTICOS SUSTENTADOS */}
        <div className="mt-8 bg-slate-100/90 rounded-2xl border border-slate-200 p-5 space-y-2 text-xs text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-900">Nota Ética e Psicoeducativa:</strong> Este material possui caráter exclusivamente educativo e orientativo para apoio à rotina familiar e escolar. Ele não substitui avaliação clínica diagnóstica, psicoterapia individual, fonoaudiologia ou acompanhamento médico especializado.
          </p>
          {trademarkDisclaimer && (
            <p className="pt-1 text-slate-500 italic border-t border-slate-200/60">
              {trademarkDisclaimer}
            </p>
          )}
        </div>

        {/* PERGUNTAS FREQUENTES (FAQ) */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            Perguntas Frequentes
          </h3>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* REPETIÇÃO DO BOTÃO DE COMPRA NO FINAL */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 text-center space-y-4 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Comece a usar o material {title} hoje mesmo
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Tenha em mãos {pages} páginas organizadas, ilustradas e revisadas clinicamente para apoiar a comunicação, previsibilidade e acolhimento das crianças.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleOpenCheckout}
              type="button"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base py-4 px-8 rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
            >
              <ShoppingCart className="w-5 h-5" />
              Comprar Agora por R$ {price.toFixed(2).replace('.', ',')}
            </button>
            <Link
              href="/materiais"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm py-4 px-6 rounded-xl transition-colors inline-flex items-center justify-center"
            >
              Ver Outros Materiais
            </Link>
          </div>

          <div className="text-xs text-slate-500 flex items-center justify-center gap-4 pt-2">
            <span>✓ Download Imediato</span>
            <span>•</span>
            <span>✓ Garantia de 7 Dias</span>
            <span>•</span>
            <span>✓ Arquivo PDF Vitalício</span>
          </div>
        </div>
      </div>

      {/* MODAL DE CHECKOUT INTEGRADO E FUNCIONAL */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in duration-200">
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Finalizar Pedido • Entrega Imediata
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                {title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Total: <strong className="text-slate-900">R$ {price.toFixed(2).replace('.', ',')}</strong> (Pagamento Único)
              </p>
            </div>

            <form onSubmit={handleCompleteOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Clara Silva"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  E-mail para Receber o PDF *
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: seuemail@exemplo.com"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600"
                />
              </div>

              {/* Forma de Pagamento */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    PIX (Instantâneo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-blue-600 bg-blue-50 text-blue-800'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    Cartão de Crédito
                  </button>
                </div>
              </div>

              {/* Detalhe PIX */}
              {paymentMethod === 'pix' && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="font-bold flex items-center gap-1">
                      <QrCode className="w-4 h-4 text-emerald-600" /> Chave PIX (Copia e Cola):
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      {pixCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {pixCopied ? 'Copiado!' : 'Copiar'}
                    </button>
                  </div>
                  <div className="font-mono text-[11px] bg-white p-2 rounded-lg border border-slate-200 text-slate-600 select-all truncate">
                    00020126580014br.gov.bcb.pix0136psicologiadireta-{priceId}@mercadopago.com
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Pague pelo seu banco e clique no botão abaixo para confirmar e liberar o download na hora.
                  </p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1">
                  <p className="font-bold">Cartão de Crédito Seguro</p>
                  <p className="text-[11px] text-blue-700">
                    Ao confirmar, a cobrança no valor de R$ {price.toFixed(2).replace('.', ',')} é processada com segurança e o arquivo é liberado imediatamente.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={processingOrder}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
              >
                {processingOrder ? (
                  <>Confirmando e Liberando Download...</>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Confirmar Pedido e Baixar PDF Agora
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-slate-400">
                🔒 Seus dados estão protegidos (LGPD). Garantia incondicional de 7 dias.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
