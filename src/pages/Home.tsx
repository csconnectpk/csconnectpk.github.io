import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Mic, GraduationCap, Globe, Star } from 'lucide-react'
import CountUpNumber from '../components/CountUpNumber'
import { FaWhatsapp, FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa'

const Home: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Simple Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Pakistan's Largest CS Community
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block">CS Connect</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Pakistan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Connecting Pakistani CS students with opportunities, mentorship, and community
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                <CountUpNumber end={2000} suffix="+" className="text-white" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                <CountUpNumber end={50} suffix="+" className="text-white" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Universities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                <CountUpNumber end={25} suffix="+" className="text-white" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Sessions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                <CountUpNumber end={4} className="text-white" />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Platforms</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/join">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors group flex items-center"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:border-white/50 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Simple Features Section */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What We're All About</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            A student-led community built by students, for students
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Student Community', stats: 2000, description: 'CS students from different universities' },
              { icon: Mic, title: 'Student Sessions', stats: 25, description: 'Learning sessions and workshops' },
              { icon: GraduationCap, title: 'Universities', stats: 50, description: 'Universities represented in our community' },
              { icon: Globe, title: 'Platforms', stats: 4, description: 'Different platforms to connect on' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-2">
                  <CountUpNumber end={feature.stats} suffix="+" className="text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Join Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of Pakistan's most active CS student community.
          </p>
          
          <Link to="/join">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl group"
            >
              Join CS Connect Pakistan
              <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 