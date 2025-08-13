import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Complete online store with payment integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      category: 'E-commerce',
      tech: ['React', 'Node.js', 'Stripe'],
      client: 'Fashion Brand Pakistan'
    },
    {
      id: 2,
      title: 'Food Delivery App',
      description: 'Mobile app connecting restaurants with customers',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600',
      category: 'Mobile App',
      tech: ['React Native', 'Firebase'],
      client: 'Restaurant Chain'
    },
    {
      id: 3,
      title: 'Healthcare Portal',
      description: 'Patient management system for medical centers',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600',
      category: 'Web Platform',
      tech: ['Next.js', 'PostgreSQL'],
      client: 'Medical Center'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container-apple">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Our Portfolio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-sf-display mb-6">
            Featured 
            <span className="block text-gradient">Projects</span>
          </h2>
          
          <p className="text-body max-w-3xl mx-auto">
            Explore some of our most successful projects that have helped Pakistani 
            businesses achieve digital excellence and market leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-apple overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-apple-gray-700 text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-apple-blue-600 font-medium mb-2">
                    {project.client}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-apple-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-apple-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-apple-gray-100 text-apple-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link to="/about" className="btn-primary px-8 py-4 text-lg">
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 