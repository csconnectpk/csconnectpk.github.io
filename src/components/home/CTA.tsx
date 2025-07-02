import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, MessageCircle, Sparkles, Star, Zap } from 'lucide-react'

const CTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-green-500/10 rounded-full blur-2xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8 lg:mb-10 shadow-lg">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">Join the Movement</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-0">
            Ready to Connect with
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Pakistan's Brightest Minds?
              </span>
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-12 lg:mb-16 leading-relaxed max-w-4xl mx-auto font-medium px-2 sm:px-4 lg:px-0">
            Join 2,000+ computer science students from across Pakistan's top universities. Share knowledge, 
            build connections, find opportunities, and shape the future of tech together.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            <Link 
              to="/join" 
              className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Sparkles className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              Join WhatsApp Community
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/about" 
              className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 border-2 border-white/30 text-white rounded-xl hover:border-white/50 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-semibold text-base sm:text-lg"
            >
              Discover Our Story
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
            
            <div className="group relative p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative flex items-center justify-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                  <Users className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">2,000+</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-semibold">Active Students</div>
                  <div className="text-xs text-gray-400">Growing every day</div>
                </div>
              </div>
            </div>
            
            <div className="group relative p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 via-transparent to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative flex items-center justify-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-semibold">Active Support</div>
                  <div className="text-xs text-gray-400">Always here to help</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="inline-flex items-center space-x-2 text-gray-400 px-4 sm:px-0">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <span className="text-xs sm:text-sm font-medium text-center">Trusted by students from FAST, NUST, LUMS, GIKI & 50+ universities</span>
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA 