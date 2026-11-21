import type { Metadata } from 'next'
import Link from 'next/link'
import { Cookie, ArrowLeft, ShieldCheck, Info } from 'lucide-react'
import ManageCookiesLink from '@/components/ManageCookiesLink'

export const metadata: Metadata = {
  title: 'Política de Cookies e Gestão de Consentimento',
  description:
    'Informações transparentes sobre como cookies e tecnologias semelhantes são utilizados no portal Psicologia Direta e na veiculação de anúncios do Google.',
  alternates: { canonical: 'https://psicologiadireta.com.br/politica-de-cookies' },
}

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mb-6 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar para a página inicial
        </Link>

        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-slate-700 space-y-6 text-xs sm:text-sm leading-relaxed">
          <header className="border-b border-slate-200 pb-6">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Transparência &amp; Privacidade Digital
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Política de Cookies e Tecnologias de Rastreamento
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Última atualização: Novembro de 2026.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. O que são Cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto enviados pelo servidor web e armazenados no seu navegador ou dispositivo quando você visita uma página da internet. Eles permitem que o site reconheça o seu dispositivo, armazene suas preferências e viabilize determinadas funcionalidades.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              2. Como Utilizamos Cookies no Psicologia Direta
            </h2>
            <p>
              O portal Psicologia Direta utiliza cookies classificados nas seguintes categorias:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-slate-900 block text-xs font-bold uppercase mb-1">
                  a) Cookies Estritamente Necessários
                </strong>
                <p className="text-xs text-slate-600">
                  Fundamentais para o funcionamento técnico básico do site, como navegação segura, integridade de sessões e armazenamento do seu próprio consentimento sobre cookies. Sem estes cookies, o site não opera adequadamente.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <strong className="text-slate-900 block text-xs font-bold uppercase mb-1">
                  b) Cookies de Publicidade e Redes Parceiras (Google AdSense)
                </strong>
                <p className="text-xs text-slate-600">
                  O Google e seus parceiros veiculam anúncios neste site para manter o acesso gratuito a todas as ferramentas. Esses parceiros podem usar cookies (como os cookies de publicidade do Google e cookies DART) para veicular anúncios com base nas visitas anteriores do usuário a este ou a outros sites na internet.
                </p>
              </div>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              3. Compartilhamento de Informações com o Google
            </h2>
            <p>
              Ao navegar em páginas que contêm tags de publicidade do Google, determinadas informações técnicas (como a URL da página acessada e o seu endereço IP) podem ser compartilhadas automaticamente com o Google para fins de entrega e medição de anúncios. Para saber detalhadamente como o Google gerencia dados ao usar sites parceiros, consulte a página oficial do Google:
            </p>
            <p>
              👉 <a
                href="https://policies.google.com/technologies/partner-sites?hl=pt-BR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 underline font-semibold"
              >
                Como o Google usa informações de sites ou apps que utilizam nossos serviços
              </a>.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              4. Como Você Pode Controlar ou Desativar Cookies
            </h2>
            <p>
              Você pode, a qualquer momento, revisar suas escolhas, recusar cookies opcionais ou alterar suas preferências diretamente neste portal:
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-xs text-slate-700">
                <strong className="block font-bold text-slate-900 mb-0.5">Painel de Consentimento (LGPD)</strong>
                Reabra o banner de preferências para aceitar ou recusar cookies analíticos e de publicidade.
              </div>
              <ManageCookiesLink
                label="Abrir Painel de Preferências"
                className="px-4 py-2 bg-[#0F5B5B] hover:bg-[#123F42] text-white text-xs font-bold rounded-xl transition shadow-xs inline-flex items-center gap-1.5 shrink-0"
              />
            </div>

            <p className="text-xs text-slate-600 pt-2">
              Você também pode desativar o rastreamento ou a personalização de anúncios diretamente nos portais oficiais dos provedores:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li>
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline font-medium"
                >
                  Configurações de Anúncios do Google
                </a>
              </li>
              <li>
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline font-medium"
                >
                  Digital Advertising Alliance (AboutAds.info)
                </a>
              </li>
            </ul>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              5. Respostas dos Questionários e Sigilo
            </h2>
            <p>
              Reafirmamos que nenhuma resposta dada aos questionários de autoavaliação (como o GAD-7 ou o termômetro de burnout) nem os dados preenchidos no gerador documental são salvos em cookies, logs de servidor ou enviados para redes de publicidade. O processamento dessas ferramentas é integralmente executado na memória local do seu navegador.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
