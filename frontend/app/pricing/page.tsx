'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Brain, 
  Check, 
  X,
  ArrowRight,
  Sparkles,
  Crown,
  Zap,
  Shield,
  Users,
  Moon,
  Sun,
  ArrowLeft,
  Star,
  TrendingUp,
  Clock,
  Globe,
  Award,
  Rocket
} from 'lucide-react'

export default function PricingPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Gratis",
      price: { monthly: 0, annual: 0 },
      description: "Perfect untuk individual yang baru memulai",
      popular: false,
      features: [
        { name: "5 analisis resume per bulan", included: true },
        { name: "Skor dasar dan feedback", included: true },
        { name: "Template resume dasar", included: true },
        { name: "Export PDF", included: true },
        { name: "Dukungan email", included: true },
        { name: "Analisis mendalam", included: false },
        { name: "Kata kunci premium", included: false },
        { name: "Priority support", included: false },
        { name: "API access", included: false }
      ],
      cta: "Mulai Gratis",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      name: "Pro",
      price: { monthly: 29000, annual: 290000 },
      description: "Untuk profesional yang serius mengembangkan karir",
      popular: true,
      features: [
        { name: "Analisis resume unlimited", included: true },
        { name: "Analisis mendalam dengan AI", included: true },
        { name: "Database kata kunci premium", included: true },
        { name: "50+ template industri", included: true },
        { name: "Job matching otomatis", included: true },
        { name: "Progress tracking", included: true },
        { name: "Priority support", included: true },
        { name: "Export dalam berbagai format", included: true },
        { name: "API access", included: false }
      ],
      cta: "Upgrade ke Pro",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: { monthly: 99000, annual: 990000 },
      description: "Solusi lengkap untuk tim dan perusahaan",
      popular: false,
      features: [
        { name: "Semua fitur Pro", included: true },
        { name: "Multi-user dashboard", included: true },
        { name: "Custom branding", included: true },
        { name: "API access penuh", included: true },
        { name: "Analytics tim", included: true },
        { name: "Custom integration", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "SLA 99.9% uptime", included: true },
        { name: "White-label solution", included: true }
      ],
      cta: "Hubungi Sales",
      gradient: "from-yellow-500 to-orange-500"
    }
  ]

  const faqs = [
    {
      question: "Apakah saya bisa upgrade atau downgrade kapan saja?",
      answer: "Ya! Anda dapat mengubah paket berlangganan kapan saja. Perubahan akan diterapkan pada periode billing berikutnya."
    },
    {
      question: "Apakah ada garansi uang kembali?",
      answer: "Kami menawarkan garansi 30 hari uang kembali tanpa pertanyaan untuk semua paket berbayar."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Kami menerima semua kartu kredit utama, PayPal, dan transfer bank. Pembayaran diproses dengan aman melalui Stripe."
    },
    {
      question: "Apakah data saya aman?",
      answer: "Absolut! Kami menggunakan enkripsi tingkat enterprise dan tidak menyimpan data resume Anda secara permanen."
    }
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-orange-50'}`}>
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>ResumeAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/features" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Fitur</Link>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b-2 border-violet-500`}>Harga</span>
            <Link href="/about" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Tentang</Link>
          </div>

          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>
      </nav>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className={`p-4 rounded-2xl ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white/80 hover:bg-white text-gray-800'} backdrop-blur-md border ${isDarkMode ? 'border-white/10' : 'border-white/20'} shadow-lg hover:shadow-xl transition-all duration-300 hover-lift`}>
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      <div className="relative pt-24 pb-16 px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-800 text-orange-300' : 'bg-orange-100 text-orange-700'} mb-6`}>
            <Crown className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Paket Harga</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Pilih Paket yang
            <span className="block text-orange-600">
              Tepat untuk Anda
            </span>
          </h1>

          <p className={`text-lg lg:text-xl leading-relaxed mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Mulai gratis dan upgrade sesuai kebutuhan. Semua paket dilengkapi dengan garansi 30 hari uang kembali
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? (isDarkMode ? 'text-white' : 'text-gray-900') : (isDarkMode ? 'text-gray-400' : 'text-gray-600')}`}>
              Bulanan
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-orange-500' : 'bg-gray-300'}`}
            >
              <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? (isDarkMode ? 'text-white' : 'text-gray-900') : (isDarkMode ? 'text-gray-400' : 'text-gray-600')}`}>
              Tahunan
            </span>
            {isAnnual && (
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                Hemat 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-3xl transition-all duration-500 hover-lift ${
                  plan.popular 
                    ? `${isDarkMode ? 'bg-slate-800/80 border-2 border-orange-500' : 'bg-orange-100 border-2 border-orange-400'} shadow-2xl scale-105` 
                    : `${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'} shadow-xl hover:shadow-2xl`
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Paling Populer
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${index === 0 ? 'bg-gray-500' : index === 1 ? 'bg-orange-500' : 'bg-slate-600'} mb-4 shadow-lg`}>
                    {index === 0 && <Shield className="w-8 h-8 text-white" />}
                    {index === 1 && <Rocket className="w-8 h-8 text-white" />}
                    {index === 2 && <Crown className="w-8 h-8 text-white" />}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  
                  <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    {plan.price.monthly === 0 ? (
                      <div className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Gratis
                      </div>
                    ) : (
                      <div>
                        <div className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                          Rp {(isAnnual ? Math.round(plan.price.annual / 12) : plan.price.monthly).toLocaleString('id-ID')}
                          <span className={`text-lg font-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            /bulan
                          </span>
                        </div>
                        {isAnnual && (
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Ditagih Rp {plan.price.annual.toLocaleString('id-ID')} per tahun
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <button className={`w-full py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl'
                      : isDarkMode
                        ? 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200'
                  }`}>
                    {plan.cta}
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className={`font-semibold text-sm uppercase tracking-wide ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    Yang Termasuk:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} flex-shrink-0`} />
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? (isDarkMode ? 'text-gray-300' : 'text-gray-700')
                          : (isDarkMode ? 'text-gray-500' : 'text-gray-400')
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Comparison */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Mengapa Memilih ResumeAI?
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Keunggulan yang membuat kami berbeda dari yang lain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "ROI Terbukti",
                description: "Rata-rata peningkatan callback interview hingga 3x lipat",
                color: "bg-orange-500"
              },
              {
                icon: Clock,
                title: "Hemat Waktu",
                description: "Analisis dalam hitungan detik, bukan jam atau hari",
                color: "bg-slate-500"
              },
              {
                icon: Award,
                title: "Akurasi Tinggi",
                description: "AI dengan akurasi 95%+ untuk berbagai industri",
                color: "bg-orange-600"
              },
              {
                icon: Users,
                title: "Dipercaya 50K+",
                description: "Ribuan profesional telah merasakan manfaatnya",
                color: "bg-slate-600"
              }
            ].map((item, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'} hover-lift`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.color} mb-4 shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'}`}>
                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className={`p-12 rounded-3xl ${isDarkMode ? 'bg-slate-800/80 border border-slate-700' : 'bg-orange-100 border border-orange-200'}`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Mulai Transformasi Karir Anda Hari Ini
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Bergabunglah dengan ribuan profesional yang telah menggunakan ResumeAI untuk mendapatkan pekerjaan impian mereka
            </p>
            
            <Link href="/" className="group inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Coba Gratis Sekarang
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}