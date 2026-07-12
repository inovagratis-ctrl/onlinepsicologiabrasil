'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mãe do João',
    text: 'A terapia online transformou a rotina do meu filho. Ele evoluiu muito na comunicação e na socialização. A psicóloga é incrível!',
    rating: 5,
  },
  {
    name: 'Pai da Maria',
    text: 'Excelente profissional. O atendimento é muito acolhedor e as orientações para pais são valiosas. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Mãe do Pedro',
    text: 'A abordagem naturalista faz toda diferença. Meu filho aprende brincando e se sente seguro. O resultado superou nossas expectativas.',
    rating: 5,
  },
]

export default function Depoimentos() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            O que as famílias dizem sobre o atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary-100" />
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
