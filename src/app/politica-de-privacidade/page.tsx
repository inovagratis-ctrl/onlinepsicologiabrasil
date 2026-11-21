import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Lock, Eye, Cookie, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade e Proteção de Dados | Psicologia Direta',
  description:
    'Diretrizes de privacidade, proteção de dados (LGPD), uso de cookies e publicidade Google AdSense no portal Psicologia Direta.',
  alternates: { canonical: 'https://psicologiadireta.com.br/politica-de-privacidade' },
}

export default function PoliticaPrivacidadePage() {
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
              Segurança, Transparência &amp; LGPD
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Última atualização: Novembro de 2026 • Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              1. Nosso Compromisso com a Sua Privacidade
            </h2>
            <p>
              O portal <strong>Psicologia Direta</strong> (<code>psicologiadireta.com.br</code>) tem o firme compromisso de zelar pela privacidade, sigilo e segurança dos dados de seus usuários e visitantes. Tratamos com extrema responsabilidade as questões relacionadas à saúde mental e ao exercício profissional da psicologia.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              2. Funcionamento Técnico dos Testes e Ferramentas (Processamento Local)
            </h2>
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wide text-emerald-800">
                <Lock className="w-4 h-4 text-emerald-600" />
                Privacidade das Respostas e Documentos
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                As respostas selecionadas nos questionários de autoavaliação (como o GAD-7 e o questionário de burnout) e os campos preenchidos nos modelos de documentos <strong>são calculados e mantidos exclusivamente na memória do seu próprio navegador (client-side React state)</strong>.
              </p>
              <p className="text-xs text-emerald-900 leading-relaxed">
                É importante distinguir entre dados técnicos de navegação e dados de resposta: quando uma página pública é carregada, o navegador estabelece conexões HTTP padrão que incluem a URL pública e seu endereço IP (necessários para a entrega do código e dos scripts de parceiros como o Google). Contudo, <strong>nenhuma resposta individual, pontuação obtida ou dado preenchido em formulários é transmitido em parâmetros de URL, cookies, registros de servidor ou telemetria para redes de anúncios</strong>, em estrito cumprimento às políticas do Google para categorias sensíveis de saúde mental.
              </p>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              3. Dados de Navegação, Cookies e Publicidade de Terceiros
            </h2>
            <p>
              Para viabilizar a manutenção e o acesso gratuito às ferramentas e conteúdos educativos, veiculamos anúncios fornecidos pela plataforma <strong>Google AdSense</strong> (identificador de editor: <code>pub-3922432751903141</code>).
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>
                <strong>Como o Google trata os dados:</strong> Quando você acessa páginas que exibem anúncios do Google, determinadas informações técnicas (incluindo a URL da página e seu endereço IP) podem ser enviadas ao Google. O Google pode utilizar cookies ou tecnologias semelhantes para veicular e mensurar anúncios com base em visitas anteriores a este ou outros sites.
              </li>
              <li>
                Para detalhes completos sobre como o Google processa dados de sites parceiros, consulte a página oficial: <a href="https://policies.google.com/technologies/partner-sites?hl=pt-BR" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Como o Google usa informações de sites que utilizam nossos serviços</a>.
              </li>
              <li>
                Para compreender a gestão específica de cookies neste portal, consulte também a nossa <Link href="/politica-de-cookies" className="text-emerald-700 underline font-semibold">Política de Cookies</Link>.
              </li>
            </ul>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              4. Desativação de Publicidade Personalizada
            </h2>
            <p>
              Os usuários têm a faculdade de desativar anúncios personalizados acessando as <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Configurações de Anúncios do Google</a> ou por meio do site institucional <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">www.aboutads.info</a>.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              5. Seus Direitos sob a LGPD
            </h2>
            <p>
              Conforme previsto na Lei nº 13.709/2018 (LGPD), você pode a qualquer momento solicitar confirmação da existência de tratamento de dados, acesso, correção ou eliminação de informações pessoais que porventura tenha nos enviado voluntariamente por e-mail ou canais de contato.
            </p>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
              6. Canal de Atendimento e Encarregado de Dados
            </h2>
            <p>
              Para esclarecer qualquer ponto sobre nossa Política de Privacidade, envie sua mensagem para:
            </p>
            <p className="font-mono text-xs font-semibold text-slate-800 bg-slate-100 p-3 rounded-lg inline-block">
              contato@psicologiadireta.com.br
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
