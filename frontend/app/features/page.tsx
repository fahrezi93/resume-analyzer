'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Users,
  Globe,
  Clock,
  Eye,
  Award,
  FileText,
  Download,
  Upload,
  Search,
  BarChart3,
  Layers,
  Moon,
  Sun,
  ArrowLeft
} from 'lucide-react'

export default function FeaturesPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const mainFeatures = [
    {
      icon: Brain,
      title: "Analisis AI Canggih",
      description: "Teknologi NLP terdepan yang menganalisis resume Anda dengan pemahaman seperti manusia",
      benefits: [
        "Deteksi otomatis skill dan pengalaman",
        "Analisis struktur dan format resume", 
        "Identifikasi kekuatan dan kelemahan",
        "Rekomendasi peningkatan berbasis AI"
      ],
      gradient: "orange-500"
    },
    {
      icon: Target,
      title: "Optimisasi Kata Kunci",
      description: "Sistem pintar yang mengidentifikasi kata kunci penting untuk meningkatkan peluang lolos ATS",
      benefits: [
        "Database kata kunci industri terbaru",
        "Analisis tingkat kecocokan dengan job posting",
        "Saran kata kunci yang relevan",
        "Optimisasi untuk berbagai industri"
      ],
      gradient: "orange-600"
    },
    {
      icon: TrendingUp,
      title: "Scoring & Analytics",
      description: "Dapatkan skor detail dan analitik mendalam tentang performa resume Anda",
      benefits: [
        "Skor keseluruhan dan per kategori",
        "Perbandingan dengan standar industri",
        "Tracking progress improvement",
        "Visualisasi data yang mudah dipahami"
      ],
      gradient: "slate-500"
    },
    {
      icon: Shield,
      title: "Keamanan Enterprise",
      description: "Data Anda terlindungi dengan standar keamanan tingkat enterprise",
      benefits: [
        "Enkripsi end-to-end",
        "Tidak ada penyimpanan data permanen",
        "Compliance dengan GDPR dan SOC 2",
        "Audit keamanan berkala"
      ],
      gradient: "slate-600"
    },
    {
      icon: Zap,
      title: "Pemrosesan Cepat",
      description: "Analisis komprehensif dalam hitungan detik, bukan menit",
      benefits: [
        "Pemrosesan paralel untuk kecepatan maksimal",
        "Cloud infrastructure yang scalable",
        "Response time < 30 detik",
        "Uptime 99.9% guaranteed"
      ],
      gradient: "orange-700"
    },
    {
      icon: Users,
      title: "Multi-Industry Support",
      description: "Dukungan khusus untuk berbagai industri dan level karir",
      benefits: [
        "Template untuk 50+ industri",
        "Customization untuk entry-level hingga C-level",
        "Best practices per industri",
        "Regional customization"
      ],
      gradient: "slate-700"
    }
  ]

  const additionalFeatures = [
    {
      icon: FileText,
      title: "Multi-Format Support",
      description: "PDF, DOCX, dan format populer lainnya"
    },
    {
      icon: Download,
      title: "Export & Download", 
      description: "Download hasil analisis dalam berbagai format"
    },
    {
      icon: Search,
      title: "Job Matching",
      description: "Matching otomatis dengan lowongan kerja"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor peningkatan skor dari waktu ke waktu"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Dukungan untuk bahasa Indonesia dan Inggris"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Akses kapan saja, di mana saja"
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
            <Link href="/" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'} transition-colors border-b-2 border-transparent hover:border-orange-500`}>Beranda</Link>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b-2 border-orange-500`}>Fitur</span>
            <Link href="/pricing" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'} transition-colors border-b-2 border-transparent hover:border-orange-500`}>Harga</Link>
            <Link href="/about" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'} transition-colors border-b-2 border-transparent hover:border-orange-500`}>Tentang</Link>
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
        <Link href="/" className={`group flex items-center space-x-2 px-4 py-3 rounded-xl ${isDarkMode ? 'bg-slate-800/90 hover:bg-slate-700 text-white border-slate-700' : 'bg-white/90 hover:bg-orange-50 text-gray-800 border-orange-200'} backdrop-blur-md border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
          <ArrowLeft className="w-4 h-4 group-hover:text-orange-500 transition-colors" />
          <span className="text-sm font-medium group-hover:text-orange-500 transition-colors">Kembali</span>
        </Link>
      </div>

      <div className="relative pt-24 pb-16 px-6">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-800 text-orange-300' : 'bg-orange-100 text-orange-700'} mb-6`}>
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Fitur Canggih</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Fitur yang Membuat
            <span className="block text-orange-600">
              Perbedaan
            </span>
          </h1>

          <p className={`text-lg lg:text-xl leading-relaxed mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Jelajahi teknologi AI terdepan yang dirancang khusus untuk mengoptimalkan resume Anda dan meningkatkan peluang karir
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "95%", label: "Akurasi AI", icon: Brain },
              { number: "<30s", label: "Waktu Analisis", icon: Clock },
              { number: "50+", label: "Industri", icon: Globe },
              { number: "99.9%", label: "Uptime", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className={`p-6 rounded-2xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-white/50'} backdrop-blur-sm text-center`}>
                <stat.icon className={`w-6 h-6 mb-3 mx-auto ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                  {stat.number}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`group p-8 rounded-3xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-white/30'} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift`}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'} flex-shrink-0`} />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Fitur Tambahan
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Berbagai fitur pendukung untuk pengalaman yang lebih lengkap
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className={`group p-6 rounded-2xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-white/50'} backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover-lift`}>
                <feature.icon className={`w-8 h-8 mb-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className={`p-12 rounded-3xl ${isDarkMode ? 'bg-slate-800 border border-white/10' : 'bg-orange-100 border border-orange-200'} backdrop-blur-xl`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Siap Mengoptimalkan Resume Anda?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Bergabunglah dengan ribuan profesional yang telah meningkatkan karir mereka dengan ResumeAI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="group px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Mulai Analisis Gratis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link href="/pricing" className={`px-8 py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-300 ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                Lihat Harga
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}