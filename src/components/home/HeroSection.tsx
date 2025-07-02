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
          
          {/* Smaller, refined badge for mobile */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60 mb-6 sm:mb-8 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 mr-2" />
            <span className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wide">Pakistan's Fastest Growing CS Community</span>
          </div>

          {/* Better proportioned heading for mobile */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight text-gray-900 tracking-tight">
            Connect Pakistan's
            <br />
            Brightest
            <span className="relative inline-block ml-3">
              <span className="text-blue-600">Minds</span>
              <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </span>
          </h1>

          {/* Better mobile subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Join 2,000+ CS students from 50+ universities building Pakistan's largest tech community
          </p>

                              {/* Refined mobile buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
                        <Link to="/about">
                            <button className="group flex items-center bg-blue-600 text-white px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                                <BookOpen className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                                Learn Our Story
                            </button>
                        </Link>
                        
                        <Link to="/join">
                            <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-5 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                                <Users className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                                Join Community Now
                            </button>
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