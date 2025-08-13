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
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8 shadow-lg">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">Join the Movement</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight">
            Ready to Connect with
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Pakistan's Brightest Minds?
              </span>
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </span>
          </h2>
          

          
          {/* Stats Cards */}
          <div className="space-y-4 max-w-sm mx-auto px-4">
            
            <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all duration-300 flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-lg sm:text-xl font-black text-white mb-1">Connect</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-semibold">Active Community</div>
                  <div className="text-xs text-gray-400">Students helping students</div>
                </div>
              </div>
            </div>
            
            <div className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 via-transparent to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-300 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <div className="text-lg sm:text-xl font-black text-white mb-1">Support</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-semibold">Always Available</div>
                  <div className="text-xs text-gray-400">Peer-to-peer help</div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default CTA 