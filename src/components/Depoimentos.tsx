'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mãe do Lucas',
    relation: 'Mãe de criança com TEA',
    text: 'A psicóloga é incrível! O Lucas evoluiu muito na comunicação. O atendimento online é muito prático e a psicóloga é super atenciosa.',
    rating: 5,
    initials: 'ML',
  },
  {
    name: 'Pai da Ana',
    relation: 'Pai de criança com TDAH',
    text: 'Excelente profissional! As orientações para pais são muito úteis no dia a dia. Recomendo demais!',
    rating: 5,
    initials: 'PA',
  },
  {
    name: 'Mãe do Pedro',
    relation: 'Mãe de criança com Dislexia',
    text: 'A abordagem naturalista faz toda diferença. Meu filho aprende brincando e se sente seguro. Resultado surpreendente!',
    rating: 5,
    initials: 'MP',
  },
]

export default function Depoimentos() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-warm-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">O que dizem nossos pacientes</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Depoimentos reais de famílias que já passaram pelo atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary-100" />
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary-700">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Depoimentos reais. Nomes trocados por privacidade.
          </p>
        </div>
      </div>
    </section>
  )
}
