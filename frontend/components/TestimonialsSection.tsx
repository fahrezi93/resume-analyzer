import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote, ArrowLeft, ArrowRight, Award, TrendingUp, Users } from 'lucide-react'

interface TestimonialProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

interface ModernTestimonialProps extends TestimonialProps {
  avatar: string
  improvement: string
  badge: string
}

const modernTestimonials: ModernTestimonialProps[] = [
  {
    name: "Sarah Kim",
    role: "Senior Software Engineer", 
    company: "Google",
    content: "ResumeAI transformed my career trajectory completely! The keyword optimization suggestions helped me land interviews at FAANG companies.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b434?w=400&h=400&fit=crop&crop=face",
    improvement: "+40% interviews",
    badge: "Top Performer"
  },
  {
    name: "Marcus Johnson",
    role: "Data Science Manager",
    company: "Netflix", 
    content: "The detailed analytics gave me clear direction on how to improve. Within 2 weeks of optimization, I got my dream job offer!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    improvement: "2x salary boost",
    badge: "Success Story"
  },
  {
    name: "Emily Chen",
    role: "Product Director",
    company: "Spotify",
    content: "The AI recommendations were incredibly smart and personalized. I loved how it understood industry-specific requirements perfectly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    improvement: "90% response rate",
    badge: "AI Enthusiast"
  }
]

export function TestimonialsSection() {
  return (
    <div className="py-16 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Apa Kata Pengguna Kami?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ribuan profesional telah meningkatkan karir mereka dengan Resume Analyzer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modernTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-5">
                  <Quote className="absolute -top-1 -left-1 h-6 w-6 text-blue-200" />
                  <p className="text-gray-700 italic leading-relaxed pl-5 text-sm">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}