import React from 'react'
import { CheckCircle, Users, Award, Globe, Target, Sparkles, Heart, Zap } from 'lucide-react'

const About: React.FC = () => {
  const features = [
    { icon: Users, text: 'Connect with top university students' },
    { icon: Award, text: 'Industry professional mentorship' },
    { icon: Target, text: 'Career guidance & opportunities' },
    { icon: Globe, text: 'Bridge academia and industry' }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Content Side - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/60 mb-6 sm:mb-8 shadow-sm">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-orange-700 tracking-wide">Our Story</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Connecting Pakistan's
              <br />
              <span className="relative inline-block">
                <span className="text-blue-600">Tech Innovators</span>
                <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 mb-6 sm:mb-8 lg:mb-10">
              <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-0">
                Pakistan's largest student-driven CS community. Connecting minds from FAST, NUST, LUMS, GIKI and beyond.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-8 lg:mb-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 group px-2 sm:px-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stats Side - Takes 2 columns, positioned more to the right */}
          <div className="lg:col-span-2 lg:pl-8 xl:pl-12">
            <div className="space-y-8 lg:space-y-12">
              <div className="text-center lg:text-right">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                  Connect
                </div>
                <div className="text-gray-700 font-semibold text-lg lg:text-xl mb-1">CS Students</div>
                <div className="text-gray-500 text-base">From across Pakistan</div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                  Learn
                </div>
                <div className="text-gray-700 font-semibold text-lg lg:text-xl mb-1">Together</div>
                <div className="text-gray-500 text-base">Share knowledge</div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-2">
                  24/7
                </div>
                <div className="text-gray-700 font-semibold text-lg lg:text-xl mb-1">Community Support</div>
                <div className="text-gray-500 text-base">Always here to help</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Simplified without box */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">
            From Students,
            <span className="text-blue-600"> For Students</span>
          </h3>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Built by Pakistani CS students. Join us in shaping Pakistan's tech future.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About 