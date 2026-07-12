'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona a terapia online para autismo?',
    answer: 'A terapia online utiliza videochamadas seguras para realizar sessões de intervenção comportamental. É possível trabalhar habilidades de comunicação, interação social e comportamento de forma eficaz, mesmo à distância. As sessões são conduzidas com materiais visuais e atividades interativas.',
  },
  {
    question: 'A terapia online é eficaz para autismo?',
    answer: 'Sim! Estudos científicos comprovam que a intervenção comportamental online pode ser tão efic quanto a presencial, especialmente quando combinada com orientação aos pais e práticas no ambiente natural.',
  },
  {
    question: 'Preciso de algum material especial?',
    answer: 'Não! Tudo que você precisa é de um computador ou celular com câmera e conexão de internet. A psicóloga fornecerá materiais visuais e atividades digitais durante as sessões.',
  },
  {
    question: 'Como agendar a primeira sessão?',
    answer: 'Basta acessar a página de Agendamento, escolher o melhor horário e preencher seus dados. Você receberá um e-mail de confirmação com todas as informações para a primeira sessão.',
  },
  {
    question: 'Qual o valor da sessão?',
    answer: 'Os valores estão disponíveis na seção de Serviços. Também oferecemos pacotes mensais com desconto. Para mais informações, entre em contato pelo WhatsApp.',
  },
  {
    question: 'É seguro em relação à privacidade?',
    answer: 'Sim! Todas as sessões são realizadas em plataformas criptografadas, seguindo rigorosamente as normas da LGPD e do CFP. Seu sigilo é garantido.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre o atendimento online
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
