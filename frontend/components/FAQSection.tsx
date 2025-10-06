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
    question: "Is my resume data secure?",
    answer: "Absolutely! Your data security is our top priority. All resumes are processed locally and never stored on our servers. Analysis happens in real-time, and your data is immediately deleted after processing.",
    icon: Shield,
    color: "from-green-500 to-emerald-500"
  },
  {
    question: "What file formats are supported?",
    answer: "We currently support PDF and DOCX formats. Make sure your resume is in one of these formats for optimal analysis results. More formats coming soon!",
    icon: Globe,
    color: "from-blue-500 to-cyan-500"
  },
  {
    question: "How long does the analysis take?",
    answer: "Our AI analysis typically completes in under 30 seconds. Processing time may vary based on file size and content complexity, but we guarantee lightning-fast results.",
    icon: Clock,
    color: "from-orange-500 to-red-500"
  },
  {
    question: "Is this service free?",
    answer: "Yes! ResumeAI is currently free for all users. We're committed to helping job seekers improve their career prospects without any cost barriers.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500"
  },
  {
    question: "How accurate is the AI analysis?",
    answer: "Our AI system uses cutting-edge NLP technology with over 95% accuracy rate. However, we recommend using the analysis as a guide alongside your professional judgment.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  },
  {
    question: "Can I analyze resumes in other languages?",
    answer: "Currently optimized for English and Indonesian resumes. We're actively developing support for additional languages based on user demand.",
    icon: Users,
    color: "from-indigo-500 to-purple-500"
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`py-16 px-6 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50/50'}`} id="faq">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-block px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-violet-100 text-violet-700'} mb-4`}>
            <span className="text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Frequently Asked
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Everything you need to know about ResumeAI and how it works
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {modernFaqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                openIndex === index
                  ? isDarkMode 
                    ? 'bg-white/10 border-white/20 shadow-xl' 
                    : 'bg-white border-violet-200 shadow-xl'
                  : isDarkMode
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    : 'bg-white/80 border-white/50 hover:bg-white hover:border-violet-200'
              } backdrop-blur-xl`}
              onClick={() => toggleFAQ(index)}
            >
              {/* Icon */}
              <div className="flex items-start space-x-3 mb-3">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${faq.color} shadow-lg`}>
                  <faq.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-display font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-violet-600 transition-colors duration-300`}>
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
                <div className={`absolute inset-0 bg-gradient-to-r ${faq.color} opacity-10 rounded-3xl blur-xl -z-10`}></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-white/10' : 'bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200'} backdrop-blur-xl`}>
          <div className="max-w-xl mx-auto">
            <h3 className={`text-2xl font-display font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Still have questions?
            </h3>
            <p className={`text-base mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our support team is here to help you 24/7. Get in touch with us anytime!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="group px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-display font-semibold text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Support
                </div>
              </button>
              
              <button className={`px-6 py-3 rounded-xl font-display font-semibold text-base border-2 transition-all duration-300 ${
                isDarkMode 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}