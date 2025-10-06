import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  User, 
  Mail, 
  Phone, 
  Code, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  Star,
  TrendingUp,
  Award,
  Target,
  Sparkles
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

interface AnalysisReportProps {
  result: AnalysisResult
}

export function AnalysisReport({ result }: AnalysisReportProps) {
  const { contact_info, analysis, recommendations } = result

  // Calculate overall score
  const totalKeywords = analysis.found_keywords.length + analysis.missing_keywords.length
  const foundPercentage = totalKeywords > 0 ? Math.round((analysis.found_keywords.length / totalKeywords) * 100) : 0
  const overallScore = Math.min(Math.max(foundPercentage + (contact_info.email ? 10 : 0) + (contact_info.phone ? 10 : 0), 0), 100)

  return (
    <div className="space-y-8">
      {/* Overall Score Card */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Skor Keseluruhan CV</h2>
              <p className="text-gray-600">Berdasarkan analisis AI komprehensif</p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {overallScore}
              </div>
              <div className="text-gray-600 font-medium">dari 100</div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${overallScore}%` }}
            ></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold">Keywords</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">{analysis.found_keywords.length}</div>
              <div className="text-sm text-gray-600">Ditemukan</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <User className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-semibold">Kontak</span>
              </div>
              <div className="text-2xl font-bold text-green-600">
                {(contact_info.email ? 1 : 0) + (contact_info.phone ? 1 : 0) + (contact_info.name ? 1 : 0)}
              </div>
              <div className="text-sm text-gray-600">dari 3</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Lightbulb className="h-5 w-5 text-orange-600 mr-2" />
                <span className="font-semibold">Saran</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">{recommendations.length}</div>
              <div className="text-sm text-gray-600">Rekomendasi</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information Card */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-3">
            <User className="h-6 w-6" />
            Informasi Kontak
          </CardTitle>
          <CardDescription className="text-emerald-100">
            Data kontak yang berhasil terdeteksi dari CV Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                <User className="h-4 w-4" />
                Nama Lengkap
              </div>
              {contact_info.name ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p className="text-lg font-medium text-gray-900">{contact_info.name}</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <p className="text-gray-500 italic">Tidak terdeteksi</p>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                <Mail className="h-4 w-4" />
                Email
              </div>
              {contact_info.email ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p className="text-lg font-medium text-gray-900 break-all">{contact_info.email}</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <p className="text-gray-500 italic">Tidak terdeteksi</p>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                <Phone className="h-4 w-4" />
                Nomor Telepon
              </div>
              {contact_info.phone ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p className="text-lg font-medium text-gray-900">{contact_info.phone}</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <p className="text-gray-500 italic">Tidak terdeteksi</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Keyword Analysis Card */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-3">
            <Code className="h-6 w-6" />
            Analisis Keywords & Skills
          </CardTitle>
          <CardDescription className="text-purple-100">
            Skill dan teknologi yang ditemukan dalam CV Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Skills Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {analysis.found_keywords.length}
                </div>
                <div className="text-green-700 font-semibold">Skills Ditemukan</div>
                <div className="text-sm text-green-600 mt-1">Bagus! Anda memiliki skill yang relevan</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {analysis.missing_keywords.length}
                </div>
                <div className="text-orange-700 font-semibold">Potensi Peningkatan</div>
                <div className="text-sm text-orange-600 mt-1">Skills yang bisa ditambahkan</div>
              </div>
            </div>

            {/* Found Keywords */}
            {analysis.found_keywords.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800">
                    Skills yang Ditemukan ({analysis.found_keywords.length})
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {analysis.found_keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Star className="h-3 w-3 mr-2" />
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Missing Keywords */}
            {analysis.missing_keywords.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-orange-800">
                    Skills yang Bisa Ditambahkan ({analysis.missing_keywords.length})
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {analysis.missing_keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:from-orange-400 hover:to-orange-500"
                    >
                      <Target className="h-3 w-3 mr-2" />
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm text-orange-700">
                    💡 <strong>Tips:</strong> Pertimbangkan untuk menambahkan skills ini jika relevan dengan posisi yang Anda lamar
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations Card */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6" />
            Rekomendasi AI untuk CV Anda
          </CardTitle>
          <CardDescription className="text-amber-100">
            Saran cerdas dari AI untuk meningkatkan daya tarik CV Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            {recommendations.map((recommendation, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                        Rekomendasi #{index + 1}
                      </span>
                      {recommendation.includes('Baik!') && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                          <Award className="h-3 w-3 mr-1" />
                          Positif
                        </span>
                      )}
                    </div>
                    <p className="text-gray-800 leading-relaxed font-medium">
                      {recommendation}
                    </p>
                  </div>
                </div>
                
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            ))}
          </div>

          {/* Summary Footer */}
          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                <Star className="h-4 w-4 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Ringkasan Analisis</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              CV Anda telah dianalisis menggunakan teknologi AI terdepan. Skor keseluruhan <strong>{overallScore}/100</strong> menunjukkan {
                overallScore >= 80 ? 'CV yang sangat baik' :
                overallScore >= 60 ? 'CV yang cukup baik dengan ruang untuk peningkatan' :
                'CV yang perlu beberapa perbaikan untuk hasil optimal'
              }. Implementasikan rekomendasi di atas untuk meningkatkan peluang Anda diterima kerja.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}