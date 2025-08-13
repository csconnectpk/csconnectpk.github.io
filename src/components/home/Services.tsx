import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, MessageCircle, Podcast, BookOpen, Heart } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Student Community',
      description: 'Connect with CS students from top Pakistani universities. Share experiences and build genuine connections.',
      highlight: 'Active Community',
      link: '/join'
    },
    {
      icon: MessageCircle,
      title: 'Daily Discussions',
      description: 'Get help with assignments and career questions. Active WhatsApp groups with peer support 24/7.',
      highlight: 'Always Active',
      link: '/join'
    },
    {
      icon: BookOpen,
      title: 'Study Resources',
      description: 'Access notes, past papers, and project ideas shared by fellow students.',
      highlight: 'Peer Shared',
      link: '/blog'
    },
    {
      icon: Podcast,
      title: 'Learning Sessions',
      description: 'Join tech talks, coding sessions, and career discussions with seniors and professionals.',
      highlight: 'Weekly Sessions',
      link: '/podcasts'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        
        {/* Section Header - Mobile-First */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/60 mb-4 sm:mb-6 lg:mb-8 shadow-sm">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mr-2" />
            <span className="text-xs sm:text-sm font-semibold text-purple-700 tracking-wide">What We Offer</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
            Everything You Need to
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="text-blue-600">Succeed in CS</span>
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-xl xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-2">
            From getting help with assignments to finding internship opportunities - 
            we're here to make your CS journey in Pakistan a little easier.
          </p>
        </div>

        {/* Services Grid - Mobile-First Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 touch-manipulation"
              >
                {/* Icon & Highlight Badge - Mobile Optimized */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 flex-shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 rounded-full ml-2">
                    <span className="text-xs font-semibold text-green-700 whitespace-nowrap">{service.highlight}</span>
                  </div>
                </div>
                
                {/* Content - Better Typography for Mobile */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
                  {service.description}
                </p>
                
                {/* CTA Link - Touch-Friendly */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-2 transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation active:scale-95"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Hover Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
        
        {/* Mobile CTA Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Connect with CS students from universities across Pakistan
            </p>
            <Link to="/join">
              <button className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg min-h-[56px] touch-manipulation">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Join Now
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 