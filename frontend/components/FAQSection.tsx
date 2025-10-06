import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Pertanyaan yang sering diajukan tentang Resume Analyzer
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 rounded-lg"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a 
            href="mailto:support@resumeanalyzer.com" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            Hubungi Tim Support
            <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </div>
  )
}