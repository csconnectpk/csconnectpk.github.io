import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, MessageCircle, Podcast, BookOpen, Heart } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Student Community',
      description: 'Connect with CS students from FAST, NUST, LUMS, GIKI, and other universities. Share experiences, ask questions, and build genuine friendships with people who get your struggles.',
      highlight: '2,000+ Students',
      link: '/join'
    },
    {
      icon: MessageCircle,
      title: 'Daily Help & Discussions',
      description: 'Get stuck on an assignment? Need help choosing electives? Our WhatsApp groups are active 24/7 with students helping each other out - no question is too basic.',
      highlight: 'Always Active',
      link: '/join'
    },
    {
      icon: BookOpen,
      title: 'Student Resources',
      description: 'Access notes, past papers, project ideas, and study guides shared by fellow students. Real resources from real students who actually used them.',
      highlight: 'Peer Shared',
      link: '/blog'
    },
    {
      icon: Podcast,
      title: 'Learning Sessions',
      description: 'Join informal tech talks, coding sessions, and career discussions. Learn from seniors who landed internships or hear about new opportunities in the community.',
      highlight: 'Weekly Sessions',
      link: '/podcasts'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/60 mb-6 sm:mb-8 shadow-sm">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mr-2" />
            <span className="text-xs sm:text-sm font-semibold text-purple-700 tracking-wide">What We Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
            Everything You Need to
            <br />
            <span className="relative inline-block">
              <span className="text-blue-600">Succeed in CS</span>
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-2 sm:px-4 lg:px-0">
            From getting help with assignments to finding internship opportunities - 
            we're here to make your CS journey in Pakistan a little easier.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/60 hover:border-blue-300/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Icon & Highlight Badge */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 rounded-full">
                    <span className="text-xs font-semibold text-green-700">{service.highlight}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                {/* CTA Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-2 transition-all duration-300 text-sm sm:text-base"
                >
                  Explore Now
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Hover Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services 