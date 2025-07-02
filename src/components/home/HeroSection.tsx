import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Building, BookOpen, Sparkles } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Status Badge - Smaller on mobile */}
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 mb-8 sm:mb-10 lg:mb-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse" />
            <span className="text-sm sm:text-base font-semibold text-green-700 tracking-wide">Pakistan's Fastest Growing CS Community</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] tracking-tight px-0">
            <span className="block mb-2 sm:mb-1">Where Pakistan's</span>
            <span className="block">
              <span className="text-blue-600">Brightest</span>
              <span className="relative inline-block ml-2 sm:ml-3">
                <span className="text-blue-600">Minds</span>
                {/* Blue underline only under "Minds" */}
                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </span>
            </span>
            <span className="block mt-2 sm:mt-1">Connect & Create</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-xl lg:text-2xl xl:text-2xl text-gray-600 mb-10 sm:mb-12 lg:mb-16 leading-relaxed max-w-4xl mx-auto font-medium px-6 sm:px-0">
            <span className="block sm:inline">Join 2,000+ computer science students from</span>
            <span className="block sm:inline"> FAST, NUST, LUMS, GIKI, and 50+ universities across Pakistan.</span>
            <span className="block mt-2"> Share knowledge, build projects, find opportunities,</span>
            <span className="block sm:inline"> and shape the future of tech in Pakistan.</span>
          </p>

          {/* CTA Buttons - Smaller on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center mb-16 sm:mb-20 lg:mb-24 px-6 sm:px-0">
            <Link
              to="/join"
              className="group inline-flex items-center justify-center w-auto px-6 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Sparkles className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
              Join Community Now
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/about"
              className="group inline-flex items-center justify-center w-auto px-6 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 border-2 border-gray-300 text-gray-700 rounded-2xl hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 font-semibold text-lg sm:text-xl"
            >
              Learn Our Story
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-6 sm:px-0">
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                2,000+
              </div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                Active Students
              </div>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 shadow-lg">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                50+
              </div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                Universities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 