import React from 'react'
import { motion } from 'framer-motion'
import CountUpNumber, { StudentCount, FollowerCount, PercentageCount } from '../components/CountUpNumber'

const Demo: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-16">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/60 mb-6 sm:mb-8 shadow-sm">
              <span className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-2"></span>
              <span className="text-xs sm:text-sm font-bold text-indigo-700 tracking-wide">Component Demo</span>
            </div>

            {/* MUCH LARGER main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
              Smart UI
              <br />
              <span className="relative inline-block ml-3">
                <span className="text-blue-600">Components</span>
                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </span>
            </h1>

            {/* Better subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              Background-aware navbar and animated counters showcasing responsive design patterns
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
              <a href="#demo">
                <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                  <span className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-white/20 rounded group-hover:scale-110 transition-transform duration-300"></span>
                  View Demo
                </button>
              </a>
              
              <a href="/">
                <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                  <span className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded group-hover:scale-110 transition-transform duration-300"></span>
                  Back Home
                </button>
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
              <div className="text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  5+
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Components
                </div>
              </div>
              
              <div className="text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Responsive
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1 text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  24/7
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Interactive
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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