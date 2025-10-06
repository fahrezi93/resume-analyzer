import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

interface TestimonialProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Wijaya",
    role: "Software Engineer",
    company: "Tech Startup",
    content: "Resume Analyzer membantu saya mengidentifikasi skill yang kurang dan meningkatkan CV saya. Sekarang saya lebih percaya diri melamar kerja!",
    rating: 5
  },
  {
    name: "Ahmad Rahman",
    role: "Data Scientist",
    company: "Finance Corp",
    content: "Fitur analisis keyword sangat membantu. Saya bisa menyesuaikan CV untuk setiap posisi yang saya lamar. Highly recommended!",
    rating: 5
  },
  {
    name: "Lisa Chen",
    role: "Product Manager",
    company: "E-commerce Giant",
    content: "Interface-nya user-friendly dan hasil analisisnya sangat detail. Tool yang wajib dimiliki untuk job seeker modern.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <div className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Pengguna Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ribuan profesional telah meningkatkan karir mereka dengan Resume Analyzer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}