import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, ChevronDown } from 'lucide-react'

const Testimonials: React.FC = () => {
  const [showMore, setShowMore] = useState(false)

  // Real testimonials from CS Connect Pakistan members
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Mansoor Ali",
      university: "FAST Islamabad",
      content: "CS Connect has been incredibly helpful for me as an aspiring CS student. It guided me in IT fields, entry test prep, and discussions with seniors.",
      rating: 5
    },
    {
      id: 2,
      name: "Mehreen",
      university: "Entry Test Student",
      content: "This has been like a daily tech magazine for me. Being a pre-med student, I had no idea about CS but this community made it easy to explore the field.",
      rating: 5
    },
    {
      id: 3,
      name: "Eisha",
      university: "Entry Test Student",
      content: "This community's insights and seniors' experiences helped shape my career. Especially during entry test season their mentorship really made a difference.",
      rating: 5
    },
    {
      id: 4,
      name: "Bareerah",
      university: "COMSATS Lahore",
      content: "This community gave me access to seniors in the industry. Their support helped clear my doubts and gave me confidence to move forward professionally.",
      rating: 5
    },
    {
      id: 5,
      name: "Rida Fatima",
      university: "UET",
      content: "I got the chance to interact with so many talented people. This community helped me realize how vast CS is and how many opportunities are out there.",
      rating: 5
    },
    {
      id: 6,
      name: "Hassaan Amin",
      university: "FAST Islamabad",
      content: "It helped me a lot especially in finding good people, making connections, and networking. So many things I discovered just by being part of it.",
      rating: 5
    }
  ]

  const visibleTestimonials = showMore ? testimonials : testimonials.slice(0, 3)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
            What Pakistani Students
            <span className="block text-blue-600">Say About Us</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real experiences from students across Pakistan's universities
          </p>
        </div>

                 {/* Testimonials Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
                             className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-blue-600 opacity-20" />
                
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-base sm:text-lg">
                  {testimonial.name}
                </div>
                <div className="text-blue-600 text-sm sm:text-base font-medium">
                  {testimonial.university}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button - Perfect Mobile Center */}
        {testimonials.length > 3 && (
          <div className="flex justify-center mt-8 lg:mt-12 px-4">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center justify-center px-4 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-medium min-h-[44px] touch-manipulation"
            >
              {showMore ? 'Show Less' : 'Show More Reviews'}
              <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials 