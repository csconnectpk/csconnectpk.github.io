import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Mic, GraduationCap, Globe, Star, Quote, MessageCircle, Trophy, Rocket, Code, BookOpen, Heart } from 'lucide-react'
import CountUpNumber from '../components/CountUpNumber'
import { FaWhatsapp, FaDiscord, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'

const Home: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      university: 'FAST NUCES',
      year: '3rd Year CS',
      content: 'CS Connect has been a game-changer for me. I found my internship through the community and made lifelong friends. The senior guidance is invaluable!',
      avatar: '👨‍💻'
    },
    {
      name: 'Fatima Khan',
      university: 'NUST',
      year: '2nd Year CS',
      content: 'The study groups and project collaborations here are amazing. I learned more in 6 months here than I did in my entire first year!',
      avatar: '👩‍💻'
    },
    {
      name: 'Muhammad Ali',
      university: 'LUMS',
      year: '4th Year CS',
      content: 'From getting help with assignments to finding teammates for hackathons, this community has everything a CS student needs.',
      avatar: '🧑‍💻'
    },
    {
      name: 'Zara Ahmed',
      university: 'GIKI',
      year: 'Recent Graduate',
      content: 'The mentorship I received helped me land my dream job at a tech startup. Forever grateful to this amazing community!',
      avatar: '👩‍🎓'
    },
    {
      name: 'Hassan Malik',
      university: 'COMSATS',
      year: '3rd Year CS',
      content: 'The technical sessions and workshops have boosted my skills tremendously. The community genuinely cares about each other\'s growth.',
      avatar: '👨‍🎓'
    }
  ]

  const communityHighlights = [
    {
      icon: Code,
      title: 'Code Together',
      description: 'Collaborate on projects, share code, and build amazing things together',
      color: 'from-blue-500 to-cyan-500',
      stat: '500+ Projects'
    },
    {
      icon: BookOpen,
      title: 'Learn & Grow',
      description: 'Access study materials, attend workshops, and accelerate your learning',
      color: 'from-green-500 to-emerald-500',
      stat: '100+ Resources'
    },
    {
      icon: Users,
      title: 'Network & Connect',
      description: 'Meet peers, find mentors, and build your professional network',
      color: 'from-purple-500 to-pink-500',
      stat: '2000+ Connections'
    },
    {
      icon: Rocket,
      title: 'Launch Careers',
      description: 'Get internships, job referrals, and career guidance from seniors',
      color: 'from-orange-500 to-red-500',
      stat: '300+ Placements'
    }
  ]

  const platforms = [
    { name: 'WhatsApp', icon: FaWhatsapp, members: '2000+', description: 'Daily discussions & quick help', color: 'text-green-500' },
    { name: 'Discord', icon: FaDiscord, members: '400+', description: 'Voice chats & study rooms', color: 'text-indigo-500' },
    { name: 'Instagram', icon: FaInstagram, members: '150+', description: 'Updates & community highlights', color: 'text-pink-500' },
    { name: 'YouTube', icon: FaYoutube, members: '160+', description: 'Educational content & sessions', color: 'text-red-500' }
  ]

  const universities = [
    'FAST NUCES', 'NUST', 'LUMS', 'GIKI', 'COMSATS', 'ITU', 'PUCIT', 'UET',
    'IBA Karachi', 'UCP', 'Habib University', 'PIEAS', 'AIR University',
    'Bahria University', 'SZABIST', 'IMS Sciences', 'Karachi University',
    'Punjab University', 'Sindh University', 'University of Sargodha',
    'BZU Multan', 'UMT', 'Superior University', 'GIFT University', 'NCBA&E',
    'Iqra University', 'Mohammad Ali Jinnah University', 'Sir Syed University',
    'NED University', 'Dawood University', 'Ziauddin University', 'Greenwich University',
    'PAF KIET', 'Indus University', 'Hamdard University', 'Textile Institute of Pakistan',
    'University of Lahore', 'GC University', 'FC College', 'Kinnaird College',
    'Forman Christian College', 'University of Peshawar', 'University of Balochistan',
    'Quaid-i-Azam University', 'HITEC University', 'CIIT', 'Virtual University',
    'Preston University', 'Riphah International University', 'International Islamic University',
    'Allama Iqbal Open University', 'University of Central Punjab'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-6xl mx-auto">
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

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2"
                >
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Where Pakistani
                  </motion.span>
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    CS Students
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    Connect & Grow
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4"
                >
                  Join 2000+ Pakistani CS students from 50+ universities. Connect, learn, and grow together in Pakistan's largest computer science community.
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
                >
                  {[
                    { number: '2000+', label: 'Students' },
                    { number: '50+', label: 'Universities' },
                    { number: '25+', label: 'Podcasts' },
                    { number: '100+', label: 'Resources' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl"
                  >
                    Join Community
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all"
                  >
                    Explore Resources
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* University Partners Slider */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-gray-900"
          >
            Trusted by Students from <span className="text-blue-600">50+ Universities</span>
          </motion.h2>
          
          <div className="relative">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="flex gap-6 sm:gap-8 whitespace-nowrap"
            >
              {/* First set */}
              {universities.map((uni, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-gray-700 font-medium text-sm sm:text-base border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  {uni}
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {universities.map((uni, index) => (
                <motion.div
                  key={`dup-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-gray-700 font-medium text-sm sm:text-base border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  {uni}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why CS Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Love Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              More than just a community - we're your partner in building an amazing tech career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{highlight.description}</p>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{highlight.stat}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-gray-900"
          >
            What Our <span className="text-purple-600">Community</span> Says
          </motion.h2>
          
          <div className="relative">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="flex gap-4 sm:gap-6"
            >
              {/* First set */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-72 sm:w-80 p-4 sm:p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3 text-left">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.university} • {testimonial.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">"{testimonial.content}"</p>
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`dup-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-72 sm:w-80 p-4 sm:p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3 text-left">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.university} • {testimonial.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-left">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 text-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Connect on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Every Platform</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Choose your favorite way to connect - we're everywhere our students are
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gray-50 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className={`w-8 h-8 ${platform.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <div className="text-2xl font-bold mb-2 text-gray-800">{platform.members}</div>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Your CS Journey <span className="text-yellow-300">Starts Here</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Don't navigate your CS career alone. Join Pakistan's most supportive and active CS student community today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/join">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl group"
                >
                  Join CS Connect Pakistan
                  <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-white/80 text-sm">Follow us:</span>
                <div className="flex space-x-3">
                  {[FaInstagram, FaYoutube, FaLinkedin, FaGithub].map((Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 