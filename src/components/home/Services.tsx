import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Smartphone, Brain, Link as LinkIcon, TrendingUp, Palette } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies and best practices',
      price: 'From PKR 50,000',
      link: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experience',
      price: 'From PKR 150,000',
      link: '/services/mobile-apps'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and machine learning implementations for business growth',
      price: 'From PKR 300,000',
      link: '/services/ai-solutions'
    },
    {
      icon: LinkIcon,
      title: 'Blockchain',
      description: 'Decentralized applications and smart contract development with security focus',
      price: 'From PKR 400,000',
      link: '/services/blockchain'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies specifically designed for Pakistani businesses',
      price: 'From PKR 25,000/mo',
      link: '/services/digital-marketing'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Professional brand identity and user experience design that converts visitors',
      price: 'From PKR 75,000',
      link: '/services/creative-design'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-black rounded-full mr-2" />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Digital 
            <span className="block text-black">Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end digital solutions tailored 
            specifically for Pakistani businesses and international market needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 h-full rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-black mb-2">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-black hover:text-gray-700 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link 
            to="/services" 
            className="bg-black text-white px-8 py-4 text-lg rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 