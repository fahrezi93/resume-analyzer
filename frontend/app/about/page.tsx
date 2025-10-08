'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Brain, 
  ArrowRight,
  Sparkles,
  Users,
  Globe,
  Award,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Moon,
  Sun,
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const teamMembers = [
    {
      name: "Fahrezi Ahmad",
      role: "Founder & CEO",
      description: "Visioner teknologi dengan pengalaman 8+ tahun di industri AI dan pengembangan produk",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Kim",
      role: "Head of AI",
      description: "Spesialis machine learning dengan latar belakang dari Google dan Microsoft",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b434?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Lead Developer",
      description: "Full-stack developer berpengalaman dengan keahlian dalam sistem scalable",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Fokus pada Hasil",
      description: "Kami berkomitmen memberikan hasil nyata yang dapat meningkatkan peluang karir Anda",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Peduli Pengguna",
      description: "Setiap fitur dirancang dengan mempertimbangkan kebutuhan dan pengalaman pengguna",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkelanjutan",
      description: "Terus mengembangkan teknologi AI terdepan untuk memberikan solusi terbaik",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Kepercayaan & Keamanan",
      description: "Menjaga data pengguna dengan standar keamanan tertinggi dan transparansi penuh",
      gradient: "from-green-500 to-teal-500"
    }
  ]

  const milestones = [
    {
      year: "2023",
      title: "Didirikan",
      description: "ResumeAI lahir dari visi untuk memdemokratisasi akses ke analisis resume berkualitas tinggi"
    },
    {
      year: "2023",
      title: "MVP Launch", 
      description: "Peluncuran produk pertama dengan fitur analisis AI dasar untuk 1000 pengguna pertama"
    },
    {
      year: "2024",
      title: "10K+ Pengguna",
      description: "Mencapai 10.000 pengguna aktif dengan tingkat kepuasan 98%"
    },
    {
      year: "2024",
      title: "AI Engine v2.0",
      description: "Peluncuran engine AI generasi kedua dengan akurasi 95% dan dukungan multi-industri"
    },
    {
      year: "2025",
      title: "50K+ Pengguna",
      description: "Bergabung dengan komunitas global 50.000+ profesional yang telah terbantu"
    }
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-violet-50 via-orange-50 to-rose-50'}`}>
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>ResumeAI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/features" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Fitur</Link>
            <Link href="/pricing" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Harga</Link>
            <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b-2 border-violet-500`}>Tentang</span>
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
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className={`inline-flex items-center px-4 py-2 rounded-full ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-violet-100 text-violet-700'} mb-6`}>
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Tentang Kami</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Membantu Anda Mencapai
            <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Karir Impian
            </span>
          </h1>

          <p className={`text-lg lg:text-xl leading-relaxed mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            ResumeAI adalah platform analisis resume bertenaga AI yang didedikasikan untuk membantu profesional di seluruh dunia mengoptimalkan resume mereka dan meningkatkan peluang karir
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "50K+", label: "Pengguna Aktif", icon: Users },
              { number: "98%", label: "Tingkat Kepuasan", icon: Award },
              { number: "95%", label: "Akurasi AI", icon: Brain },
              { number: "3x", label: "Peningkatan Callback", icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className={`p-6 rounded-2xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-white/50'} backdrop-blur-sm text-center`}>
                <stat.icon className={`w-6 h-6 mb-3 mx-auto ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />
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

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Misi Kami
              </h2>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Kami percaya bahwa setiap orang berhak mendapatkan pekerjaan yang sesuai dengan potensi mereka. Dengan teknologi AI terdepan, kami membantu menghilangkan hambatan dalam proses pencarian kerja dan memberikan wawasan yang actionable untuk setiap pengguna.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Visi kami adalah menciptakan dunia di mana kualitas resume tidak lagi menjadi penghalang untuk mendapatkan pekerjaan impian, melainkan menjadi jembatan yang menghubungkan talenta dengan peluang yang tepat.
              </p>
            </div>
            <div className={`p-8 rounded-3xl ${isDarkMode ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10' : 'bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200'} backdrop-blur-xl`}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Global Reach", desc: "Melayani pengguna di 50+ negara" },
                  { icon: Clock, title: "24/7 Available", desc: "Akses kapan saja, di mana saja" },
                  { icon: Shield, title: "Secure & Private", desc: "Data terlindungi dengan aman" },
                  { icon: CheckCircle, title: "Proven Results", desc: "Hasil terbukti dan terukur" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className={`w-8 h-8 mx-auto mb-3 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                    <h3 className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Nilai-Nilai Kami
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Prinsip-prinsip yang mendasari setiap keputusan dan inovasi yang kami buat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`group p-8 rounded-3xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-white/30'} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift`}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${value.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {value.title}
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Perjalanan Kami
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Milestone penting dalam pengembangan ResumeAI
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg`}>
                  {milestone.year}
                </div>
                <div className={`flex-1 p-6 rounded-2xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-white/50'} backdrop-blur-sm`}>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {milestone.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Tim Kami
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Bertemu dengan orang-orang hebat di balik ResumeAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`group text-center p-8 rounded-3xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-white/30'} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift`}>
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-purple-600 p-1 shadow-lg">
                    <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                </h3>
                
                <div className={`text-sm font-medium mb-4 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`}>
                  {member.role}
                </div>
                
                <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {member.description}
                </p>

                <div className="flex justify-center space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const Icon = platform === 'linkedin' ? Linkedin : platform === 'twitter' ? Twitter : Github
                    return (
                      <a key={platform} href={url} className={`p-2 rounded-lg ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors duration-300`}>
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className={`p-12 rounded-3xl ${isDarkMode ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-white/10' : 'bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-200'} backdrop-blur-xl text-center`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Mari Terhubung
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Punya pertanyaan, saran, atau ingin berkolaborasi? Kami dengan senang hati mendengar dari Anda
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Mail, title: "Email", value: "hello@resumeai.com" },
                { icon: MapPin, title: "Lokasi", value: "Jakarta, Indonesia" },
                { icon: Phone, title: "Telepon", value: "+62 123 456 7890" }
              ].map((contact, index) => (
                <div key={index} className={`p-4 rounded-xl ${isDarkMode ? 'bg-white/10' : 'bg-white/70'} backdrop-blur-sm`}>
                  <contact.icon className={`w-6 h-6 mx-auto mb-2 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                  <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {contact.title}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Coba ResumeAI Sekarang
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}