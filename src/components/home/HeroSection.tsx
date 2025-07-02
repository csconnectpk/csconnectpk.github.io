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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Smaller, refined badge for mobile */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60 mb-6 sm:mb-8 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 mr-2" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wide">Pakistan's Fastest Growing CS Community</span>
          </div>

          {/* MUCH LARGER main heading - this is the primary text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
            Connect Pakistan's
            <br />
            Brightest
            <span className="relative inline-block ml-3">
              <span className="text-blue-600">Minds</span>
              <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </span>
          </h1>

          {/* Better mobile subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
            Join 2,000+ CS students from 50+ universities building Pakistan's largest tech community
          </p>

          {/* Buttons with smaller "Join Community Now" */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
            <Link to="/about">
              <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                <BookOpen className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                Learn Our Story
              </button>
            </Link>
            
            <Link to="/join">
              <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                <Users className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                Join Community Now
              </button>
            </Link>
          </div>

          {/* Stats Section - Clean without bubbles on mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-lg sm:max-w-2xl mx-auto">
            <div className="text-center p-3 sm:p-4 lg:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                2,000+
              </div>
              <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                Active Students
              </div>
            </div>
            
            <div className="text-center p-3 sm:p-4 lg:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
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