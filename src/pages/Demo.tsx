import React from 'react'
import { motion } from 'framer-motion'
import SmartNavbar from '../components/SmartNavbar'
import CountUpNumber, { StudentCount, FollowerCount, PercentageCount } from '../components/CountUpNumber'

const Demo: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Smart Navbar */}
      <SmartNavbar />

      {/* Hero Section - Light Background */}
      <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Smart UI Components
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12"
          >
            Background-aware navbar and animated counters
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <StudentCount count={2000} className="text-4xl font-bold text-gray-900 block mb-2" />
              <p className="text-sm text-gray-600 uppercase tracking-wider">Students</p>
            </div>
            <div className="text-center">
              <FollowerCount count={15000} className="text-4xl font-bold text-gray-900 block mb-2" />
              <p className="text-sm text-gray-600 uppercase tracking-wider">Followers</p>
            </div>
            <div className="text-center">
              <PercentageCount percentage={98.5} className="text-4xl font-bold text-gray-900 block mb-2" />
              <p className="text-sm text-gray-600 uppercase tracking-wider">Satisfaction</p>
            </div>
            <div className="text-center">
              <CountUpNumber 
                end={50} 
                suffix="+" 
                className="text-4xl font-bold text-gray-900 block mb-2"
                duration={2.2}
              />
              <p className="text-sm text-gray-600 uppercase tracking-wider">Projects</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Dark Background Detection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Watch the navbar adapt its colors automatically
          </motion.p>

          {/* Different Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <CountUpNumber 
                end={1250000} 
                className="text-5xl font-bold text-white block mb-3"
                duration={3}
              />
              <p className="text-gray-400 uppercase tracking-wider">Total Views</p>
            </div>
            <div className="text-center">
              <CountUpNumber 
                end={99.9} 
                suffix="%" 
                className="text-5xl font-bold text-white block mb-3"
                duration={2.5}
              />
              <p className="text-gray-400 uppercase tracking-wider">Uptime</p>
            </div>
            <div className="text-center">
              <CountUpNumber 
                end={24} 
                suffix="/7" 
                className="text-5xl font-bold text-white block mb-3"
                duration={1.8}
              />
              <p className="text-gray-400 uppercase tracking-wider">Support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Gradient Backgrounds
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-12"
          >
            Smart detection works with gradients too
          </motion.p>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CountUpNumber 
                end={150} 
                suffix="K+" 
                className="text-3xl font-bold text-white block mb-2"
                duration={2.8}
              />
              <p className="text-white/70 text-sm">Downloads</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CountUpNumber 
                end={89} 
                suffix="%" 
                className="text-3xl font-bold text-white block mb-2"
                duration={2.3}
              />
              <p className="text-white/70 text-sm">Performance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CountUpNumber 
                end={42} 
                className="text-3xl font-bold text-white block mb-2"
                duration={2.1}
              />
              <p className="text-white/70 text-sm">Countries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CountUpNumber 
                end={365} 
                className="text-3xl font-bold text-white block mb-2"
                duration={2.6}
              />
              <p className="text-white/70 text-sm">Days Active</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Light Section Again */}
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Back to Light
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12"
          >
            Seamless transitions between different backgrounds
          </motion.p>

          {/* Custom Formatted Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="text-center">
              <CountUpNumber 
                end={2500000} 
                className="text-6xl font-bold text-gray-900 block mb-3"
                duration={3.5}
              />
              <p className="text-gray-600 uppercase tracking-wider">Revenue Generated</p>
            </div>
            <div className="text-center">
              <CountUpNumber 
                end={999} 
                suffix=" ms" 
                className="text-6xl font-bold text-gray-900 block mb-3"
                duration={2.2}
              />
              <p className="text-gray-600 uppercase tracking-wider">Response Time</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Smart UI Components</h3>
          <p className="text-gray-400">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Demo 