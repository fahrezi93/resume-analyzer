import React from 'react'
import { Loader2, Brain, Sparkles } from 'lucide-react'

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-ping"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full inline-block">
            <Brain className="h-8 w-8 text-white animate-pulse" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Menganalisis CV Anda
        </h3>
        
        <p className="text-gray-600 mb-6">
          AI sedang memproses dan menganalisis konten CV Anda...
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Ekstraksi teks</span>
            <span className="text-green-600 font-semibold">✓ Selesai</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Analisis NLP</span>
            <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Generasi rekomendasi</span>
            <span className="text-gray-400">Menunggu...</span>
          </div>
        </div>
        
        <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
        </div>
        
        <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
          <Sparkles className="h-4 w-4 mr-1" />
          Proses ini biasanya memakan waktu 15-30 detik
        </div>
      </div>
    </div>
  )
}