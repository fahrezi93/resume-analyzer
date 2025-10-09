import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote, ArrowLeft, ArrowRight, Award, TrendingUp, Users } from 'lucide-react'

interface TestimonialProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

interface ModernTestimonialProps extends TestimonialProps {
  avatar: string
  improvement: string
  badge: string
}

const modernTestimonials: ModernTestimonialProps[] = [
  {
    name: "Sarah Kim",
    role: "Senior Software Engineer", 
    company: "Google",
    content: "ResumeAI mengubah perjalanan karir saya sepenuhnya! Saran optimisasi kata kunci membantu saya mendapatkan wawancara di perusahaan FAANG.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b434?w=400&h=400&fit=crop&crop=face",
    improvement: "+40% wawancara",
    badge: "Performa Terbaik"
  },
  {
    name: "Marcus Johnson",
    role: "Data Science Manager",
    company: "Netflix", 
    content: "Analitik terperinci memberikan arahan yang jelas tentang cara meningkatkan. Dalam 2 minggu optimisasi, saya mendapat tawaran pekerjaan impian!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    improvement: "2x kenaikan gaji",
    badge: "Kisah Sukses"
  },
  {
    name: "Emily Chen",
    role: "Product Director",
    company: "Spotify",
    content: "Rekomendasi AI sangat cerdas dan personal. Saya suka bagaimana sistem memahami persyaratan khusus industri dengan sempurna.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    improvement: "90% tingkat respon",
    badge: "Penggemar AI"
  }
]

interface TestimonialsSectionProps {
  isDarkMode?: boolean
}

export function TestimonialsSection({ isDarkMode = false }: TestimonialsSectionProps) {

  return (
    <div className="py-0 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-10 left-20 w-24 h-24 ${isDarkMode ? 'bg-orange-500/20' : 'bg-orange-200/50'} rounded-full blur-2xl animate-float`}></div>
        <div className={`absolute bottom-10 right-20 w-32 h-32 ${isDarkMode ? 'bg-slate-500/20' : 'bg-slate-200/50'} rounded-full blur-2xl animate-float`} style={{animationDelay: '3s'}}></div>
        <div className={`absolute top-1/2 left-10 w-16 h-16 ${isDarkMode ? 'bg-orange-500/15' : 'bg-orange-200/40'} rounded-full blur-xl animate-float`} style={{animationDelay: '5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative py-16">
        <div className="text-center mb-12">
          <div className={`inline-block px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-slate-800 text-orange-300' : 'bg-orange-100 text-orange-700'} mb-4`}>
            <span className="text-sm font-medium">Kisah Sukses</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Apa Kata 
            <span className="block text-orange-600">
              Pengguna Kami?
            </span>
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Ribuan profesional telah meningkatkan karir mereka dengan Resume Analyzer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modernTestimonials.map((testimonial, index) => (
            <div key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-white/30'} backdrop-blur-xl rounded-2xl h-full p-6 hover-lift`}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-5">
                <Quote className={`absolute -top-1 -left-1 h-6 w-6 ${isDarkMode ? 'text-orange-400/40' : 'text-orange-200'}`} />
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} italic leading-relaxed pl-5 text-sm`}>
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className={`font-display font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>{testimonial.name}</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</div>
                  <div className={`text-xs ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}