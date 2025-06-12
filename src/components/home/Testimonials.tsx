import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      id: 1,
      name: 'Muhammad Ahmed',
      role: 'CEO, TechVenture Pakistan',
      company: 'E-commerce Startup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      content: 'Premium Agency transformed our vision into a reality. Their web development team delivered an outstanding e-commerce platform that increased our sales by 300% in just 6 months.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Fatima Malik',
      role: 'Founder, StyleHub',
      company: 'Fashion Brand',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100',
      content: 'The mobile app they developed for our fashion brand is simply amazing. The user experience is flawless, and our customers love the seamless shopping experience.',
      rating: 5,
      project: 'Mobile Application'
    },
    {
      id: 3,
      name: 'Dr. Ali Hassan',
      role: 'Director, MediCare Center',
      company: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      content: 'Their healthcare portal has revolutionized our patient management system. The team understood our complex requirements and delivered beyond expectations.',
      rating: 5,
      project: 'Healthcare Portal'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-apple">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
            Client Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-sf-display mb-6">
            What Our Clients 
            <span className="block text-gradient">Say About Us</span>
          </h2>
          
          <p className="text-body max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients across 
            Pakistan have to say about our digital solutions and services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-apple p-8 h-full hover:scale-105 transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-apple-blue-200 group-hover:text-apple-blue-300 transition-colors">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-apple-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-apple-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-apple-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-apple-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-auto">
                  <span className="inline-flex items-center px-3 py-1 bg-apple-blue-100 text-apple-blue-700 text-sm rounded-full">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join 150+ Satisfied Clients</h3>
            <p className="text-apple-gray-600 mb-6">
              Ready to transform your business? Let's discuss your project and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 text-lg"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 