'use client'

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
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
  Shield
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
      <>
        {isLoading && <LoadingAnimation />}
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="text-center mb-8">
              <Button 
                variant="ghost" 
                onClick={() => {
                  setShowAnalyzer(false)
                  setAnalysisResult(null)
                  setFile(null)
                  setError(null)
                }}
                className="mb-4"
              >
                ← Kembali ke Home
              </Button>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Resume Analyzer
              </h1>
              <p className="text-gray-600">
                Upload CV dan dapatkan analisis mendalam dengan AI
              </p>
            </div>

            <div className="space-y-8">
              {/* File Upload Card */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-3">
                    <Upload className="h-6 w-6" />
                    Upload Resume Anda
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Pilih file CV dalam format PDF atau DOCX untuk analisis AI
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
                      isDragActive
                        ? 'border-blue-400 bg-blue-50 scale-105'
                        : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                    }`}
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <div className="text-blue-600">
                        <Upload className="mx-auto h-16 w-16 mb-4 animate-bounce" />
                        <p className="text-xl font-semibold">Drop file di sini...</p>
                      </div>
                    ) : (
                      <div className="text-gray-500">
                        <Upload className="mx-auto h-16 w-16 mb-6 text-gray-400" />
                        <p className="text-xl font-semibold mb-2 text-gray-700">
                          Drag & drop CV Anda di sini
                        </p>
                        <p className="text-gray-500 mb-4">atau klik untuk memilih file</p>
                        <div className="flex justify-center gap-4 text-sm">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">PDF</span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">DOCX</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {file && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-green-600" />
                        <div>
                          <p className="font-semibold text-green-800">{file.name}</p>
                          <p className="text-sm text-green-600">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • Ready for analysis
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8">
                    <Button
                      onClick={handleAnalyze}
                      disabled={!file || isLoading}
                      className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                          Menganalisis CV Anda...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-3 h-5 w-5" />
                          Analisis dengan AI
                          <ArrowRight className="ml-3 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Error Display */}
              {error && (
                <Card className="border-red-200 bg-red-50 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-red-800">
                      <p className="font-semibold text-lg">Terjadi Kesalahan</p>
                      <p className="mt-2">{error}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Analysis Results */}
              {analysisResult && <AnalysisReport result={analysisResult} />}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl">
                  <Brain className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Resume Analyzer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tingkatkan peluang karir Anda dengan analisis CV yang didukung 
              <span className="font-semibold text-blue-600"> Artificial Intelligence</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => setShowAnalyzer(true)}
                className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Mulai Analisis CV
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="h-14 px-8 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Resume Analyzer?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platform terdepan untuk mengoptimalkan CV Anda dengan teknologi AI terbaru
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cara Kerja Resume Analyzer
            </h2>
            <p className="text-xl text-gray-600">
              Tiga langkah sederhana untuk CV yang lebih baik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload CV",
                description: "Upload file CV Anda dalam format PDF atau DOCX dengan mudah",
                icon: Upload
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Sistem AI kami menganalisis konten, struktur, dan keyword dalam CV Anda",
                icon: Brain
              },
              {
                step: "03",
                title: "Get Insights",
                description: "Terima analisis lengkap dan rekomendasi untuk meningkatkan CV Anda",
                icon: Star
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-6xl font-bold text-blue-100 mb-4">
                      {item.step}
                    </div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 -mt-8">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Meningkatkan CV Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan profesional yang telah meningkatkan peluang karir mereka
          </p>
          <Button 
            onClick={() => setShowAnalyzer(true)}
            className="h-14 px-8 text-lg bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Zap className="mr-2 h-5 w-5" />
            Analisis CV Sekarang
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-blue-400 mr-3" />
              <span className="text-xl font-bold text-white">Resume Analyzer</span>
            </div>
            <div className="text-gray-400">
              © 2024 Resume Analyzer. Powered by AI.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}