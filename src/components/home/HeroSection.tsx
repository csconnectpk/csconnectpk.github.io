import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Building, BookOpen, Sparkles } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[90vh] sm:min-h-screen flex items-center">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-6xl mx-auto">
          


          {/* Main Heading - Fixed Text Wrapping */}
          <h1 className="font-black mb-6 sm:mb-8 lg:mb-10 leading-[1.1] text-gray-900 tracking-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Connect Pakistan's
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-3">
              Brightest 
              <span className="relative inline-block ml-2 sm:ml-3">
                <span className="text-blue-600">Minds</span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
            Join CS students from universities across Pakistan
          </p>

          {/* Buttons - Improved Layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 max-w-md sm:max-w-none mx-auto">
            <Link to="/join" className="w-full sm:w-auto">
              <button className="group flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto min-h-[56px] touch-manipulation">
                <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span>Join Community Now</span>
              </button>
            </Link>
            
            <Link to="/about" className="w-full sm:w-auto">
              <button className="group flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-base hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 active:scale-95 w-full sm:w-auto min-h-[56px] touch-manipulation">
                <BookOpen className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span>Learn Our Story</span>
              </button>
            </Link>
          </div>

          {/* Simple Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 hover:bg-white/80 transition-all duration-300">
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Connect & Learn
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">
                With fellow students
              </div>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 hover:bg-white/80 transition-all duration-300">
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Share & Grow
              </div>
              <div className="text-gray-700 font-medium text-sm sm:text-base">
                Your knowledge
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 