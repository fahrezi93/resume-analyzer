'use client'

import { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnalysisReport } from '@/components/AnalysisReport'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FAQSection } from '@/components/FAQSection'
import { LoadingAnimation } from '@/components/LoadingAnimation'
import { 
  Upload, 
  FileText, 
  Loader2, 
  Brain, 
  CheckCircle, 
  Zap, 
  Star,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Moon,
  Sun,
  Play,
  Eye,
  Users,
  Award,
  Rocket,
  Globe,
  Layers,
  Compass,
  Camera,
  Download,
  AlertCircle
} from 'lucide-react'

interface AnalysisResult {
  contact_info: {
    name?: string | null
    email?: string | null
    phone?: string | null
  }
  analysis: {
    found_keywords: string[]
    missing_keywords: string[]
  }
  recommendations: string[]
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showAnalyzer, setShowAnalyzer] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0])
        setError(null)
        setAnalysisResult(null)
      }
    },
    onDropRejected: () => {
      setError('File format tidak didukung. Silakan upload file PDF atau DOCX.')
    }
  })

  const handleAnalyze = async () => {
    if (!file) {
      setError('Silakan pilih file terlebih dahulu.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await axios.post('http://localhost:5000/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      setAnalysisResult(response.data)
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError(`Error: ${err.response.data.error}`)
      } else if (err.code === 'ECONNREFUSED') {
        setError('Tidak dapat terhubung ke server. Pastikan server Python Flask berjalan pada port 5000.')
      } else {
        setError('Terjadi kesalahan saat menganalisis file. Silakan coba lagi.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Menggunakan teknologi NLP terdepan untuk menganalisis CV Anda secara mendalam"
    },
    {
      icon: Target,
      title: "Keyword Detection",
      description: "Identifikasi skill dan teknologi yang relevan untuk meningkatkan peluang diterima"
    },
    {
      icon: TrendingUp,
      title: "Smart Recommendations",
      description: "Dapatkan saran yang actionable untuk meningkatkan kualitas resume Anda"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Data Anda aman dan tidak disimpan. Proses analisis dilakukan secara lokal"
    }
  ]

  const stats = [
    { number: "95%", label: "Akurasi Analisis" },
    { number: "1000+", label: "CV Dianalisis" },
    { number: "4.9/5", label: "Rating Pengguna" },
    { number: "<30s", label: "Waktu Analisis" }
  ]

  if (showAnalyzer || analysisResult) {
    return (
      <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-violet-50 via-orange-50 to-rose-50'}`}>
        {isLoading && <LoadingAnimation />}
        
        {/* Floating Back Button */}
        <div className="fixed top-6 left-6 z-50">
          <button
            onClick={() => {
              setShowAnalyzer(false)
              setAnalysisResult(null)
              setFile(null)
              setError(null)
            }}
            className={`p-4 rounded-2xl ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white/80 hover:bg-white text-gray-800'} backdrop-blur-md border ${isDarkMode ? 'border-white/10' : 'border-white/20'} shadow-lg hover:shadow-xl transition-all duration-300 hover-lift`}
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-4 rounded-2xl ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-white/80 hover:bg-white'} backdrop-blur-md border ${isDarkMode ? 'border-white/10' : 'border-white/20'} shadow-lg hover:shadow-xl transition-all duration-300 hover-lift`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Modern Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-violet-100 text-violet-700'} mb-4`}>
              <Brain className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Analysis</span>
            </div>
            <h1 className={`text-3xl md:text-4xl font-display font-black mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Upload & 
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Analyze
              </span>
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Drop your resume and get instant AI-powered insights to boost your career
            </p>
          </div>

          <div className="space-y-6">
            {/* Modern Upload Card */}
            <div className={`relative p-6 rounded-2xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-white/30'} backdrop-blur-xl shadow-xl hover-lift`}>
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl opacity-20 blur-lg"></div>
              
              <div className="relative">
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-500 group ${
                    isDragActive
                      ? 'border-purple-400 bg-purple-50/50 scale-105'
                      : isDarkMode 
                        ? 'border-white/20 hover:border-purple-400 hover:bg-white/5' 
                        : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50/30'
                  }`}
                >
                  <input {...getInputProps()} />
                  
                  {isDragActive ? (
                    <div className="text-purple-600">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <Upload className="relative mx-auto h-16 w-16 animate-bounce" />
                      </div>
                      <p className="text-xl font-bold">Drop it like it's hot! 🔥</p>
                      <p className="text-purple-500 mt-2 text-sm">Release to upload your resume</p>
                    </div>
                  ) : (
                    <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <div className="relative p-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl mx-auto w-fit">
                          <Upload className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      <h3 className={`text-2xl font-display font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Drop your resume here
                      </h3>
                      <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        or click to browse files from your computer
                      </p>
                      
                      <div className="flex justify-center gap-4 mb-6">
                        <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-700">PDF</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 rounded-full">
                          <FileText className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-green-700">DOCX</span>
                        </div>
                      </div>
                      
                      <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        Maximum file size: 10MB
                      </p>
                    </div>
                  )}
                </div>

                {/* File Preview */}
                {file && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 animate-slide-up">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-green-800 text-lg">{file.name}</p>
                          <p className="text-green-600">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • Ready for AI analysis
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-600 text-sm font-medium">Ready</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <div className="mt-8">
                  <button
                    onClick={handleAnalyze}
                    disabled={!file || isLoading}
                    className="group relative w-full p-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-2xl text-white font-bold text-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          Analyzing your resume...
                          <div className="ml-3 flex space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                          Start AI Analysis
                          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-xl">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-800 text-lg mb-2">Oops! Something went wrong</h3>
                    <p className="text-red-600">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Analysis Results */}
            {analysisResult && <AnalysisReport result={analysisResult} />}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-violet-50 via-orange-50 to-rose-50'}`}>
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Modern Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>ResumeAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/features" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Fitur</Link>
            <Link href="/pricing" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Harga</Link>
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

      {/* Hero Section - Asymmetric Grid */}
      <div className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-violet-100 text-violet-700'} mb-6`}>
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Didukung AI Canggih</span>
              </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Revolusi
                <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Resume
                </span>
            </h1>

            <p className={`text-lg lg:text-xl leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-xl`}>
              Transformasikan karir Anda dengan analisis resume bertenaga AI yang melampaui biasa. 
              <span className="font-semibold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"> Temukan potensi Anda.</span>
            </p>              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => setShowAnalyzer(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl text-white font-semibold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center">
                    <Rocket className="w-5 h-5 mr-2" />
                    Mulai Analisis
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>

                <button className={`px-8 py-4 rounded-2xl font-semibold text-lg border-2 ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-all duration-300`}>
                  <Play className="w-5 h-5 mr-2 inline" />
                  Lihat Demo
                </button>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "50K+", label: "Resume Dianalisis", icon: FileText },
                  { number: "98%", label: "Tingkat Berhasil", icon: Award },
                  { number: "24/7", label: "Dukungan AI", icon: Globe }
                ].map((stat, index) => (
                  <div key={index} className={`p-4 rounded-2xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/70 border border-white/50'} backdrop-blur-sm`}>
                    <stat.icon className={`w-6 h-6 mb-2 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />
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

            {/* Right Visual */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Card */}
                <div 
                  className={`relative p-8 rounded-3xl ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-white/30'} backdrop-blur-xl shadow-2xl transform hover:rotate-2 transition-all duration-500`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Floating Action Button */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <Camera className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Upload className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Upload Pintar</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Seret, jatuh, analisis</p>
                      </div>
                    </div>

                    {/* Progress Indicators */}
                    <div className="space-y-3">
                      {['Analisis Konten', 'Pencocokan Kata Kunci', 'Pembuatan Skor'].map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-green-500' : isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
                            {index <= currentStep ? <CheckCircle className="w-4 h-4 text-white" /> : <div className="w-2 h-2 bg-gray-400 rounded-full"></div>}
                          </div>
                          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{step}</span>
                        </div>
                      ))}
                    </div>

                    {/* Live Preview */}
                    <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Eye className={`w-4 h-4 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                        <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Pratinjau Langsung</span>
                      </div>
                      <div className="h-20 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-violet-500 rounded-full mx-auto mb-2"></div>
                          <div className="h-2 bg-violet-300 rounded w-20 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 p-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white mb-2" />
                  <div className="text-white text-sm font-medium">10M+ Pengguna</div>
                </div>

                <div className="absolute -top-6 -left-8 p-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                  <Compass className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Bento Grid Style */}
      <div className="py-16 px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className={`inline-block px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-violet-100 text-violet-700'} mb-4`}>
              <span className="text-sm font-medium">Fitur Canggih</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Mengapa Pilih 
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                ResumeAI?
              </span>
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Rasakan masa depan optimisasi resume dengan teknologi AI terdepan kami
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
            {/* Large Feature Card */}
            <div className={`md:col-span-3 lg:col-span-4 p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-white/10' : 'bg-gradient-to-br from-violet-100 to-purple-100 border border-violet-200'} hover-lift hover-glow group`}>
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-display font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Analisis Bertenaga AI
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 text-sm`}>
                    Pemrosesan bahasa alami canggih menganalisis resume Anda dengan pemahaman seperti manusia
                  </p>
                </div>
              </div>
              
              {/* Interactive Demo */}
              <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-white/70'} mb-3`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Analyzing...</span>
                </div>
                <div className="space-y-1.5">
                  <div className={`h-1.5 ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                    <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-pulse" style={{width: '85%'}}></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Kecocokan Skill</span>
                    <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>85%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature Cards */}
            <div className={`md:col-span-3 lg:col-span-2 p-4 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20' : 'bg-gradient-to-br from-orange-100 to-red-100 border border-orange-200'} hover-lift group`}>
              <div className="p-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl w-fit mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className={`text-lg font-display font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Kata Kunci Pintar
              </h3>
              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                Identifikasi kata kunci yang hilang untuk meningkatkan kompatibilitas ATS
              </p>
              <div className="flex flex-wrap gap-1">
                {['React', 'Python', 'AI/ML'].map((skill) => (
                  <span key={skill} className={`text-xs px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-200 text-orange-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`md:col-span-3 lg:col-span-2 p-4 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-500/20' : 'bg-gradient-to-br from-green-100 to-teal-100 border border-green-200'} hover-lift group`}>
              <div className="p-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl w-fit mb-3">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className={`text-lg font-display font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Wawasan Skor
              </h3>
              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                Dapatkan penilaian detail dan saran perbaikan
              </p>
              <div className="flex items-center space-x-2">
                <div className={`text-2xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>92</div>
                <div className="text-xs">
                  <div className={isDarkMode ? 'text-green-400' : 'text-green-600'}>Sangat Baik</div>
                  <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>+15 dari terakhir</div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className={`md:col-span-2 lg:col-span-2 p-4 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20' : 'bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200'} hover-lift group`}>
              <div className="p-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl w-fit mb-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className={`text-base font-display font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Aman & Privat
              </h3>
              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Data Anda tetap aman dengan keamanan tingkat enterprise
              </p>
            </div>

            <div className={`md:col-span-2 lg:col-span-3 p-4 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-pink-900/30 to-rose-900/30 border border-pink-500/20' : 'bg-gradient-to-br from-pink-100 to-rose-100 border border-pink-200'} hover-lift group`}>
              <div className="p-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl w-fit mb-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className={`text-base font-display font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Secepat Kilat
              </h3>
              <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                Dapatkan analisis komprehensif dalam waktu kurang dari 30 detik
              </p>
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-0.5 ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                  <div className="w-full h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
                </div>
                <span className={`text-xs ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>Memproses...</span>
              </div>
            </div>

            <div className={`md:col-span-2 lg:col-span-1 p-4 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/20' : 'bg-gradient-to-br from-yellow-100 to-orange-100 border border-yellow-200'} hover-lift group flex flex-col items-center justify-center text-center`}>
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl mb-3">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>4.9</div>
              <div className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Penilaian</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-0 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-20 left-10 w-32 h-32 ${isDarkMode ? 'bg-purple-500/20' : 'bg-violet-200/40'} rounded-full blur-3xl animate-float`}></div>
          <div className={`absolute bottom-20 right-10 w-40 h-40 ${isDarkMode ? 'bg-pink-500/20' : 'bg-pink-200/40'} rounded-full blur-3xl animate-float`} style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative py-16">
          <div className="text-center mb-12">
            <div className={`inline-block px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-violet-100 text-violet-700'} mb-4`}>
              <span className="text-sm font-medium">Proses Sederhana</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Cara Kerja 
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Resume Analyzer
              </span>
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Tiga langkah sederhana untuk CV yang lebih baik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Upload CV",
                description: "Upload file CV Anda dalam format PDF atau DOCX dengan mudah",
                icon: Upload,
                gradient: "from-violet-500 to-purple-600"
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Sistem AI kami menganalisis konten, struktur, dan keyword dalam CV Anda",
                icon: Brain,
                gradient: "from-purple-500 to-pink-600"
              },
              {
                step: "03",
                title: "Get Insights",
                description: "Terima analisis lengkap dan rekomendasi untuk meningkatkan CV Anda",
                icon: Star,
                gradient: "from-pink-500 to-orange-600"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className={`text-center hover:shadow-xl transition-all duration-300 border-0 ${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80 border border-white/30'} backdrop-blur-xl rounded-2xl h-full p-6 hover-lift`}>
                  <div className={`text-4xl font-bold ${isDarkMode ? 'text-white/20' : 'text-gray-100'} mb-3`}>
                    {item.step}
                  </div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-2xl mb-5 -mt-6 shadow-lg`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className={`text-lg font-display font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                    {item.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm`}>
                    {item.description}
                  </p>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-purple-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection isDarkMode={isDarkMode} />

      {/* FAQ Section */}
      <FAQSection isDarkMode={isDarkMode} />

      {/* Modern CTA Section */}
      <div className="relative py-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900' : 'bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600'}`}></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Rocket className="w-4 h-4 mr-2 text-white" />
            <span className="text-white font-medium text-sm">Siap Mentransformasi Karir Anda?</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Pekerjaan Impian Anda
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Menanti Anda
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan lebih dari 50.000 profesional yang telah mentransformasi karir mereka dengan analisis resume bertenaga AI kami
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => setShowAnalyzer(true)}
              className="group relative px-8 py-4 bg-white text-purple-600 rounded-xl font-display font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center group-hover:text-white transition-colors duration-300">
                <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Mulai Analisis Gratis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            <button className="flex items-center px-6 py-4 border-2 border-white/30 text-white rounded-xl font-display font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              <Download className="mr-2 h-4 w-4" />
              Unduh Contoh
            </button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Pengguna di Seluruh Dunia" },
              { number: "98%", label: "Tingkat Keberhasilan" },
              { number: "4.9★", label: "Rating Pengguna" },
              { number: "24/7", label: "Dukungan AI" }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-3xl lg:text-4xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className={`relative py-20 px-6 ${isDarkMode ? 'bg-slate-900' : 'bg-gray-900'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ResumeAI</h3>
                  <p className="text-gray-400 text-sm">Didukung AI Canggih</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Transformasikan perjalanan karir Anda dengan analisis resume bertenaga AI. Dapatkan wawasan personal dan raih pekerjaan impian lebih cepat.
              </p>
              <div className="flex space-x-4">
                {[Globe, Users, Award].map((Icon, index) => (
                  <div key={index} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Produk</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Harga
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Tentang
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Dukungan</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@resumeai.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 ResumeAI. Semua hak dilindungi. Dibuat dengan ❤️ dan AI.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Semua sistem beroperasi</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}