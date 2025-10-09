import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, Shield, Clock, Globe, Zap, Users } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Apakah data CV saya aman?",
    answer: "Ya, keamanan data Anda adalah prioritas utama kami. CV yang Anda upload diproses secara lokal dan tidak disimpan di server kami. Semua analisis dilakukan dalam waktu nyata dan data dihapus setelah analisis selesai."
  },
  {
    question: "Format file apa saja yang didukung?",
    answer: "Saat ini kami mendukung format PDF dan DOCX. Pastikan file CV Anda dalam salah satu format tersebut untuk hasil analisis yang optimal."
  },
  {
    question: "Berapa lama proses analisis?",
    answer: "Proses analisis biasanya memakan waktu kurang dari 30 detik. Waktu dapat bervariasi tergantung ukuran file dan kompleksitas konten CV Anda."
  },
  {
    question: "Apakah layanan ini gratis?",
    answer: "Ya, Resume Analyzer saat ini tersedia gratis untuk semua pengguna. Kami berkomitmen membantu para pencari kerja meningkatkan peluang karir mereka tanpa biaya."
  },
  {
    question: "Seberapa akurat analisis AI?",
    answer: "Sistem AI kami menggunakan teknologi NLP terdepan dengan tingkat akurasi di atas 95%. Namun, kami selalu merekomendasikan untuk menggunakan hasil analisis sebagai panduan, bukan keputusan final."
  },
  {
    question: "Bisakah saya menganalisis CV dalam bahasa lain?",
    answer: "Saat ini sistem kami dioptimalkan untuk CV dalam bahasa Indonesia dan Inggris. Kami sedang mengembangkan dukungan untuk bahasa lainnya di masa depan."
  }
]

interface FAQItemWithIcon extends FAQItem {
  icon: any
  color: string
}

const modernFaqs: FAQItemWithIcon[] = [
  {
    question: "Apakah data resume saya aman?",
    answer: "Tentu saja! Keamanan data Anda adalah prioritas utama kami. Semua resume diproses secara lokal dan tidak pernah disimpan di server kami. Analisis terjadi secara real-time, dan data Anda langsung dihapus setelah pemrosesan.",
    icon: Shield,
    color: "orange-500"
  },
  {
    question: "Format file apa yang didukung?",
    answer: "Saat ini kami mendukung format PDF dan DOCX. Pastikan resume Anda dalam salah satu format ini untuk hasil analisis yang optimal. Format lainnya akan segera hadir!",
    icon: Globe,
    color: "slate-500"
  },
  {
    question: "Berapa lama waktu analisis?",
    answer: "Analisis AI kami biasanya selesai dalam waktu kurang dari 30 detik. Waktu pemrosesan dapat bervariasi berdasarkan ukuran file dan kompleksitas konten, tetapi kami menjamin hasil yang sangat cepat.",
    icon: Clock,
    color: "orange-600"
  },
  {
    question: "Apakah layanan ini gratis?",
    answer: "Ya! ResumeAI saat ini gratis untuk semua pengguna. Kami berkomitmen membantu pencari kerja meningkatkan prospek karir mereka tanpa hambatan biaya.",
    icon: Sparkles,
    color: "slate-600"
  },
  {
    question: "Seberapa akurat analisis AI?",
    answer: "Sistem AI kami menggunakan teknologi NLP terdepan dengan tingkat akurasi lebih dari 95%. Namun, kami merekomendasikan menggunakan analisis sebagai panduan bersama dengan penilaian profesional Anda.",
    icon: Zap,
    color: "orange-700"
  },
  {
    question: "Bisakah saya menganalisis resume dalam bahasa lain?",
    answer: "Saat ini dioptimalkan untuk resume bahasa Indonesia dan Inggris. Kami sedang aktif mengembangkan dukungan untuk bahasa tambahan berdasarkan permintaan pengguna.",
    icon: Users,
    color: "slate-700"
  }
]

interface FAQSectionProps {
  isDarkMode?: boolean
}

export function FAQSection({ isDarkMode = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-0 px-6 relative overflow-hidden" id="faq">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className={`absolute top-16 right-20 w-28 h-28 ${isDarkMode ? 'bg-orange-500/20' : 'bg-orange-200/50'} rounded-full blur-3xl animate-float`}></div>
        <div className={`absolute bottom-20 left-16 w-36 h-36 ${isDarkMode ? 'bg-slate-500/20' : 'bg-slate-200/50'} rounded-full blur-3xl animate-float`} style={{animationDelay: '4s'}}></div>
        <div className={`absolute top-1/3 left-1/3 w-20 h-20 ${isDarkMode ? 'bg-orange-500/15' : 'bg-orange-200/40'} rounded-full blur-2xl animate-float`} style={{animationDelay: '6s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-block px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-slate-800 text-orange-300' : 'bg-orange-100 text-orange-700'} mb-4`}>
            <span className="text-sm font-medium">Ada Pertanyaan?</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Pertanyaan yang Sering
            <span className="block text-orange-600">
              Diajukan
            </span>
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Semua yang perlu Anda ketahui tentang ResumeAI dan cara kerjanya
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {modernFaqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                openIndex === index
                  ? isDarkMode 
                    ? 'bg-white/10 border-white/20 shadow-xl' 
                    : 'bg-white border-orange-200 shadow-xl'
                  : isDarkMode
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    : 'bg-white/80 border-white/50 hover:bg-white hover:border-orange-200'
              } backdrop-blur-xl`}
              onClick={() => toggleFAQ(index)}
            >
              {/* Question with Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-xl bg-${faq.color} shadow-lg`}>
                    <faq.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-lg font-display font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-orange-600 transition-colors duration-300`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`p-1.5 rounded-lg ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'} transition-all duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
                </div>
              </div>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className={`pt-3 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm`}>
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Gradient Glow */}
              {openIndex === index && (
                <div className={`absolute inset-0 bg-${faq.color} opacity-10 rounded-3xl blur-xl -z-10`}></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-slate-800 border border-white/10' : 'bg-orange-100 border border-orange-200'} backdrop-blur-xl`}>
          <div className="max-w-xl mx-auto">
            <h3 className={`text-2xl font-display font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Masih ada pertanyaan?
            </h3>
            <p className={`text-base mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Tim dukungan kami siap membantu Anda 24/7. Hubungi kami kapan saja!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="group px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-display font-semibold text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Hubungi Dukungan
                </div>
              </button>
              
              <button className={`px-6 py-3 rounded-xl font-display font-semibold text-base border-2 transition-all duration-300 ${
                isDarkMode 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                Lihat Dokumentasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}