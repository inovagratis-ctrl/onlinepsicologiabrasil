import Link from 'next/link'
import Image from 'next/image'
import {
  BookOpen,
  FileText,
  ArrowRight,
  CheckCircle2,
  Shield,
  Sparkles,
  ExternalLink,
  Calendar,
  Layers,
  Heart,
  Brain,
  Smile,
  Compass,
  ShoppingBag,
  Clock
} from 'lucide-react'
import { EDITORIAL_ARTICLES, PROFESSIONAL_AUTHOR, PROFESSIONAL_CRP } from '@/data/articles'
import { OrganizationJsonLd } from '@/components/JsonLd'
import LeadMagnetSection from '@/components/LeadMagnetSection'
import ConsultationCallout from '@/components/ConsultationCallout'

// 3 MATERIAIS MAIS VENDIDOS
const TOP_3_MATERIALS = [
  {
    title: 'Histórias Sociais Ilustradas para Crianças',
    badge: '20 Páginas A4 • Mais Vendido',
    desc: 'Contos estruturados para ensinar previsibilidade, regras de convivência e transições do dia a dia sem crises.',
    price: 'R$ 14,90',
    href: '/materiais/historias-sociais',
    accentColor: 'from-[#236B78] to-[#18313B]',
    tag: 'Previsibilidade & Rotina',
    pages: '20 págs.',
    previewSnippets: ['Rotina na escola', 'Esperar a vez', 'Lidar com mudanças'],
    image: '/assets/psicologia-direta/07-mockup-historias-sociais.png',
    imageAlt: 'Mockup de um material impresso de histórias sociais e cartões visuais para crianças',
  },
  {
    title: 'Pranchas e Cartões de Comunicação Visual (CAA)',
    badge: '25 Páginas A4 • Kit Completo',
    desc: 'Pranchas temáticas e cartões para estimular a comunicação funcional, autonomia e reduzir a frustração.',
    price: 'R$ 17,90',
    href: '/materiais/pecs',
    accentColor: 'from-[#236B78] to-[#2F5360]',
    tag: 'Comunicação Alternativa (CAA)',
    pages: '25 págs.',
    previewSnippets: ['Alimentos & Lanches', 'Brinquedos & Escola', 'Tiras de frases "Eu quero"'],
    image: '/assets/psicologia-direta/09-mockup-kit-rotina.png',
    imageAlt: 'Kit visual de pranchas e cartões de comunicação e rotina diária',
  },
  {
    title: 'Cartões de Sentimentos e Emoções',
    badge: '15 Páginas A4 • Psicoeducação',
    desc: 'Recurso lúdico para ajudar crianças a identificar, nomear e comunicar o que sentem no corpo e na mente.',
    price: 'R$ 12,90',
    href: '/materiais/cartoes-sentimentos',
    accentColor: 'from-[#C9785B] to-[#9E523A]',
    tag: 'Regulação Emocional',
    pages: '15 págs.',
    previewSnippets: ['Raiva & Frustração', 'Medo & Ansiedade', 'Estratégias de Calma'],
    image: '/assets/psicologia-direta/08-mockup-cartoes-emocoes.png',
    imageAlt: 'Cartões visuais de emoções e termômetro de sentimentos organizados para uso educativo',
  },
]

// 3 TEMAS PRINCIPAIS (ADULTOS & PSICÓLOGOS)
const TOP_3_THEMES = [
  {
    slug: '/depressao',
    title: 'Depressão & Ativação Comportamental',
    desc: 'Protocolos em TCC para quebrar o ciclo da anedonia e inércia no adulto, restaurando a energia e a motivação diária.',
    icon: Brain,
    color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    count: 'Artigos & Protocolos',
    image: '/assets/psicologia-direta/05-categoria-neurodesenvolvimento.png',
    imageAlt: 'Materiais de apoio clínico e protocolos para depressão',
  },
  {
    slug: '/panico',
    title: 'Síndrome do Pânico & Crises Agudas',
    desc: 'Compreenda a curva da adrenalina, técnicas de desativação fisiológica e como desarmar a catastrofização corporal.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-800 border-rose-200',
    count: 'Manejo de Crises & TCC',
    image: '/assets/psicologia-direta/06-categoria-emocoes-ansiedade.png',
    imageAlt: 'Termômetro de ansiedade e estratégias para pânico',
  },
  {
    slug: '/materiais-psicologos',
    title: 'Área do Psicólogo: Acervo Clínico',
    desc: 'Registros de pensamentos disfuncionais (RPDs), fichas de anamnese, contratos e ferramentas de intervenção em TCC.',
    icon: Sparkles,
    color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    count: 'Ferramentas de Consultório',
    image: '/assets/psicologia-direta/04-categoria-orientacao-parental.png',
    imageAlt: 'Ferramentas e protocolos para psicólogos',
  },
]

// LIVROS COMPLEMENTARES RECOMENDADOS (AFILIADOS ÉTICOS)
const CURATED_BOOKS = [
  {
    title: 'Vencendo o TDAH Adulto',
    author: 'Russell A. Barkley',
    desc: 'Guia definitivo com estratégias comprovadas pela ciência para gerenciar tempo e atenção.',
    url: 'https://www.amazon.com.br/s?k=vencendo+o+tdah+adulto+russell+barkley&tag=psicologiadir-20',
  },
  {
    title: 'O Cérebro da Criança',
    author: 'Daniel J. Siegel & Tina Payne Bryson',
    desc: 'Como ajudar a mente infantil a integrar razão e emoção sem recorrer a punições.',
    url: 'https://www.amazon.com.br/s?k=o+cerebro+da+crianca+daniel+siegel&tag=psicologiadir-20',
  },
  {
    title: 'Livre de Ansiedade',
    author: 'Robert L. Leahy',
    desc: 'Abordagem prática da Terapia Cognitivo-Comportamental para vencer preocupações.',
    url: 'https://www.amazon.com.br/s?k=livre+de+ansiedade+robert+leahy&tag=psicologiadir-20',
  },
]

export default function Home() {
  // EXATAMENTE OS 3 ARTIGOS PRINCIPAIS MAIS BUSCADOS (ADULTOS & PSICÓLOGOS)
  const top3Articles = EDITORIAL_ARTICLES.filter((a) =>
    [
      'depressao-em-adultos-ativacao-comportamental-tcc',
      'sindrome-do-panico-como-desarmar-o-ataque-e-perder-o-medo',
      'recursos-clinicos-para-psicologos-como-estruturar-rpds-e-anamnese-tcc',
    ].includes(a.slug)
  ).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <OrganizationJsonLd />

      {/* 1. HERO COM FOTO PROFISSIONAL, IMAGEM DE MATERIAIS E CLAREZA DE PROPÓSITO */}
      <section className="bg-white border-b border-slate-200 py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Texto de Apresentação e Chamadas */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCEFF2] border border-[#B9DCCF] text-[#236B78] text-xs font-bold">
                <Shield className="w-3.5 h-3.5 text-[#236B78]" />
                Psicoterapia para Adultos & Recursos para Psicólogos • {PROFESSIONAL_CRP}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#18313B] leading-tight tracking-tight">
                Saúde mental no adulto e ferramentas práticas para a clínica psicológica.
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Psicoterapia baseada em evidências para adultos com <strong>Depressão</strong>, <strong>Ansiedade</strong>, <strong>Síndrome do Pânico</strong>, <strong>TOC</strong>, <strong>Compulsão Alimentar</strong> e <strong>Narcisismo</strong> — além de acervo completo de materiais e protocolos clínicos para psicólogos.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <Link
                  href="/materiais"
                  className="inline-flex items-center gap-2 bg-[#236B78] hover:bg-[#18313B] text-white px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all shadow-md shadow-[#236B78]/20"
                >
                  <FileText className="w-4 h-4" />
                  Ver E-books e Materiais em PDF
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors border border-slate-200"
                >
                  <BookOpen className="w-4 h-4" />
                  Ler Artigos do Blog
                </Link>
              </div>

              <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Revisão Técnica: {PROFESSIONAL_AUTHOR} ({PROFESSIONAL_CRP})</span>
              </div>
            </div>

            {/* Coluna Visual: Imagem dos Materiais (03-hero-home) + Card de Autoria */}
            <div className="lg:col-span-5 space-y-4">
              {/* Imagem dos Materiais da Home */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <img
                  src="/assets/psicologia-direta/03-hero-home.png"
                  alt="Materiais visuais de rotina e emoções organizados sobre uma mesa para apoiar famílias e crianças"
                  className="w-full h-56 sm:h-64 object-cover object-center"
                  width="1200"
                  height="800"
                  fetchPriority="high"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-xs rounded-xl px-3 py-1.5 border border-white/60 shadow-xs flex items-center justify-between text-[11px] text-[#18313B]">
                  <span className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#236B78]" />
                    Recursos Visuais Prontos para Imprimir
                  </span>
                  <span className="text-slate-500">PDFs A4</span>
                </div>
              </div>

              {/* Card Compacto da Psicóloga Responsável */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-xs shrink-0 bg-slate-200">
                  <Image
                    src="/psicologa-maria-do-socorro.png"
                    alt={PROFESSIONAL_AUTHOR}
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-extrabold text-[#18313B] truncate">
                    {PROFESSIONAL_AUTHOR}
                  </h2>
                  <span className="text-[11px] font-bold text-[#236B78] bg-[#DCEFF2] px-2 py-0.5 rounded-full inline-block mt-0.5">
                    Psicóloga Clínica • {PROFESSIONAL_CRP}
                  </span>
                  <p className="text-[11px] text-slate-600 mt-1 line-clamp-1">
                    Psicoterapia individual para adultos e recursos clínicos para psicólogos.
                  </p>
                </div>
                <Link
                  href="/sobre"
                  className="text-xs font-bold text-[#236B78] hover:text-[#18313B] shrink-0"
                  title="Conhecer a psicóloga"
                >
                  Sobre →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTAINER PRINCIPAL OTIMIZADO PARA DESKTOP E MOBILE */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-14">
        {/* 2. CAPTURA DE E-MAIL (LEAD MAGNET): KIT DE ROTINA E EMOÇÕES */}
        <LeadMagnetSection />

        {/* 3. OS 3 MATERIAIS MAIS VENDIDOS COM IMAGENS/PRÉVIAS REAIS */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1">
                <ShoppingBag className="w-3.5 h-3.5" />
                Destaques Mais Procurados
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                E-books e Materiais Imprimíveis
              </h2>
            </div>
            <Link
              href="/materiais"
              className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
            >
              Ver catálogo completo com todos os PDFs →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TOP_3_MATERIALS.map((mat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:border-[#236B78] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Capa com Mockup Real do E-book / Material */}
                  <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={mat.image}
                      alt={mat.imageAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-[#236B78] text-white px-3 py-1 rounded-full shadow-xs">
                        {mat.tag}
                      </span>
                    </div>
                  </div>

                  {/* Título e Amostras das Páginas */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-[#18313B] leading-snug">
                        {mat.title}
                      </h3>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        {mat.pages} em Alta Resolução A4
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {mat.desc}
                    </p>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Amostras inclusas:
                      </span>
                      {mat.previewSnippets.map((snip, sIdx) => (
                        <div key={sIdx} className="text-xs text-slate-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{snip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Preço e Botão */}
                <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                  <div className="flex items-baseline justify-between mb-3 pt-3">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">
                        Preço Único
                      </span>
                      <span className="text-2xl font-black text-slate-900">
                        {mat.price}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Download Imediato
                    </span>
                  </div>

                  <Link
                    href={mat.href}
                    className="w-full bg-[#236B78] hover:bg-[#18313B] text-white font-extrabold text-xs py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    Ver Detalhes e Baixar PDF
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. OS 3 TEMAS PRINCIPAIS COM IMAGENS DAS CATEGORIAS */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#236B78] flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                Navegação Orientada
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18313B] mt-0.5">
                Principais Áreas de Orientação
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-bold text-[#236B78] hover:text-[#18313B]"
            >
              Explorar todas as 6 categorias editoriais →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TOP_3_THEMES.map((theme, idx) => {
              const Icon = theme.icon
              return (
                <Link
                  key={idx}
                  href={theme.slug}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-[#236B78] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Imagem de Categoria */}
                    <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={theme.image}
                        alt={theme.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-xs border shadow-xs ${theme.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="font-extrabold text-base text-[#18313B] group-hover:text-[#236B78] transition-colors">
                        {theme.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {theme.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#236B78]">
                      <span>Acessar guia e artigos</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* 5. OS 3 ARTIGOS PRINCIPAIS */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                Leituras Mais Úteis
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                Artigos e Orientações em Destaque
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              Ver todos os 10 artigos no blog →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {top3Articles.map((art) => (
              <Link
                key={art.id}
                href={`/blog/${art.slug}`}
                className="bg-white rounded-3xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                    <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition-colors leading-snug mb-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">Revisado por Psicóloga</span>
                  <span className="font-bold text-blue-600 inline-flex items-center gap-1">
                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. 1 BLOCO DE FERRAMENTAS GRATUITAS */}
        <section className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Utilitários Gratuitos no Navegador
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Ferramentas Práticas para o Cotidiano
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Recursos interativos desenvolvidos para apoiar a organização do tempo, identificação de sentimentos e diálogo com a escola:
              </p>
              <div className="pt-1">
                <Link
                  href="/materiais#ferramentas-interativas"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-5 rounded-xl transition-colors"
                >
                  Abrir Central de Ferramentas
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
              <Link
                href="/materiais/quadro-rotina"
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all block"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  Quadro de Rotina Visual
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Personalize tarefas de manhã, tarde e noite e imprima em folha A4.
                </p>
              </Link>

              <Link
                href="/materiais/termometro-emocoes"
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all block"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <Heart className="w-4 h-4 text-rose-600" />
                  Termômetro das Emoções
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Escala lúdica para ajudar a criança a expressar a intensidade do que sente.
                </p>
              </Link>

              <Link
                href="/materiais/timer-visual"
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all block"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <Clock className="w-4 h-4 text-amber-600" />
                  Timer Visual com Disco
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Relógio analógico sem som para apoiar tarefas escolares e transições.
                </p>
              </Link>

              <Link
                href="/materiais#perguntas-reuniao"
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all block"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  Roteiro de Reunião Escolar
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Perguntas práticas para transformar o encontro com a escola em parceria.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. 1 CHAMADA PARA ATENDIMENTO PSICOLÓGICO ONLINE */}
        <ConsultationCallout />

        {/* 8. AFILIADOS ÉTICOS: LIVROS COMPLEMENTARES RECOMENDADOS */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Curadoria Editorial de Leituras
              </span>
              <h3 className="font-extrabold text-base text-slate-900">
                Livros Fundamentais Recomendados para Famílias
              </h3>
            </div>
            <span className="text-[11px] text-slate-400">
              Links verificados Amazon • Transparência de Afiliados
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Obras de referência escritas por pesquisadores e clínicos para apoiar o entendimento do comportamento e das emoções no lar:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {CURATED_BOOKS.map((book, idx) => (
              <a
                key={idx}
                href={book.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="bg-slate-50 hover:bg-slate-100/80 p-4 rounded-2xl border border-slate-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md inline-block mb-1.5">
                    Recomendação de Leitura
                  </span>
                  <h4 className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 block mb-1">
                    {book.author}
                  </span>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {book.desc}
                  </p>
                </div>

                <span className="text-[11px] font-bold text-blue-600 inline-flex items-center gap-1 mt-3 pt-2 border-t border-slate-200/60">
                  Ver livro na Amazon <ExternalLink className="w-3 h-3 opacity-80" />
                </span>
              </a>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 pt-1 leading-relaxed">
            * Aviso de Transparência: Como afiliados, podemos receber uma comissão caso você decida adquirir os livros indicados, sem custo adicional para você. Recomendamos apenas obras com base científica consolidada.
          </p>
        </section>
      </main>
    </div>
  )
}
