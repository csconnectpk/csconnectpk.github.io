import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Star, Code, Users, Globe, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import CountUpNumber from '../components/CountUpNumber'
import SmartNavbar from '../components/SmartNavbar'

// Real Social Media Icons
const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
  </svg>
)

const DiscordIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YouTubeIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const Home: React.FC = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const communityHighlights = [
    {
      icon: Code,
      title: 'Code Together',
      description: 'Collaborate on projects, share code, and build amazing things with fellow developers.',
      color: 'from-blue-500 to-cyan-500',
      stats: '500+ Projects'
    },
    {
      icon: BookOpen,
      title: 'Learn & Grow',
      description: 'Access exclusive learning resources, tutorials, and mentorship from industry experts.',
      color: 'from-green-500 to-emerald-500',
      stats: '100+ Resources'
    },
    {
      icon: Users,
      title: 'Network & Connect',
      description: 'Build meaningful connections with students and professionals across Pakistan.',
      color: 'from-purple-500 to-pink-500',
      stats: '2000+ Connections'
    },
    {
      icon: Globe,
      title: 'Launch Careers',
      description: 'Get access to internships, job opportunities, and career guidance.',
      color: 'from-orange-500 to-red-500',
      stats: '300+ Placements'
    }
  ]

  // Animation variants for text
  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  }

  const wordVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -45 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  }

  return (
    <>
      <SmartNavbar />
      <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            />
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 h-full flex items-center pt-8 sm:pt-12 lg:pt-16">
            {/* Hero Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                {/* Animated Main Title with Advanced Micro-animations */}
                <div className="mb-8">
                  <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                    {/* First Line - Letter by Letter Animation */}
                    <div className="block mb-2 sm:mb-4">
                      {"Where Pakistani CS Students".split("").map((char, i) => (
                        <motion.span
                          key={i}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          variants={letterVariants}
                          className="inline-block"
                          style={{ display: char === " " ? "inline" : "inline-block" }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Second Line - Word by Word with 3D Effect */}
                    <div className="block">
                      {["Connect", "&", "Grow"].map((word, i) => (
                        <motion.span
                          key={i}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          variants={wordVariants}
                          className="inline-block mr-2 sm:mr-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                          style={{ perspective: "1000px" }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4"
                >
                  Join 2000+ Pakistani CS students from 50+ universities. Connect, learn, and grow together in Pakistan's largest computer science community.
                </motion.p>

                {/* Animated Stats with Counter */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
                >
                  {[
                    { number: 2000, suffix: '+', label: 'Students' },
                    { number: 50, suffix: '+', label: 'Universities' },
                    { number: 25, suffix: '+', label: 'Podcasts' },
                    { number: 100, suffix: '+', label: 'Resources' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.5 + index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="text-center"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                        <CountUpNumber 
                          end={stat.number} 
                          suffix={stat.suffix}
                          duration={1.5}
                          delay={index * 0.1}
                          className="tabular-nums"
                        />
                      </div>
                      <div className="text-sm sm:text-base md:text-lg text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons with Enhanced Animations */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 max-w-md sm:max-w-none mx-auto"
                >
                  <Link to="/join" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Join Community
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </Link>
                  
                  <Link to="/blog" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all"
                    >
                      Explore Resources
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* University Partners Slider */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Students from <span className="text-gray-600">50+ Universities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From FAST to NUST, LUMS to GIKI - we're connecting CS students across Pakistan's top institutions
              </p>
            </motion.div>

            {/* University Slider */}
            <div className="relative overflow-hidden">
              <motion.div 
                className="flex space-x-12 text-4xl md:text-6xl font-bold text-gray-300/40"
                animate={{ 
                  x: [0, -2000]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[
                  'FAST', 'NUST', 'LUMS', 'GIKI', 'COMSATS', 'ITU', 'PUCIT', 'UET', 
                  'IBA', 'UCP', 'HABIB', 'PIEAS', 'AIR', 'BAHRIA', 'SZABIST', 'IMS',
                  'FAST', 'NUST', 'LUMS', 'GIKI', 'COMSATS', 'ITU', 'PUCIT', 'UET'
                ].map((university, index) => (
                  <div 
                    key={`${university}-${index}`}
                    className="whitespace-nowrap select-none hover:text-gray-600 transition-colors"
                  >
                    {university}
                  </div>
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
                    <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {highlight.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Testimonials Slider */}
        <section className="py-20 bg-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Community Says</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real stories from real students who've transformed their careers with CS Connect Pakistan
              </p>
            </motion.div>
          </div>

          {/* Testimonials Slider */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-8"
              animate={{ 
                x: [0, -1600]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[
                {
                  name: "Muhammad Mansoor Ali",
                  university: "FAST Islamabad",
                  quote: "CS Connect has been incredibly helpful for me as an aspiring CS student. It guided me in IT fields, entry test prep, and discussions with seniors. I was a RWP board topper but had very little CS knowledge. I'm glad to be here, learning every day."
                },
                {
                  name: "Mehreen",
                  university: "Entry Test Student",
                  quote: "This has been like a daily tech magazine for me. Being a pre-med student, I had no idea about CS but this community made it easy to explore the field and solve my problems. Super thankful for the cooperative environment."
                },
                {
                  name: "Eisha",
                  university: "Entry Test Student",
                  quote: "This community's insights and seniors' experiences helped shape my career. Especially during entry test season their mentorship really made a difference. I'm a noob person but I've learned so much. Thanks CS Connect — best support for students like me."
                },
                {
                  name: "Khadija",
                  university: "Entry Test Student",
                  quote: "This community changed my life not just in studies but spiritually too. The advice, Islamic opinions, and motivation helped me learn to balance both deen and dunya. May Allah bless your efforts. ❤️"
                },
                {
                  name: "Bareerah",
                  university: "COMSATS Lahore",
                  quote: "This community gave me access to seniors in the industry. Their support helped clear my doubts and gave me confidence to move forward professionally."
                },
                {
                  name: "Rida Fatima",
                  university: "UET",
                  quote: "I got the chance to interact with so many talented people. This community helped me realize how vast CS is and how many opportunities are out there. More power to the admins."
                },
                {
                  name: "Hassaan Amin",
                  university: "FAST Islamabad",
                  quote: "It helped me a lot especially in finding good people, making connections, and networking. So many things I discovered just by being part of it."
                },
                {
                  name: "Waleed Ahmed",
                  university: "Virtual University of Pakistan",
                  quote: "This community helped me with technical issues, guidance, motivation, and discipline. I got to connect with students from different universities which will help in the long run."
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[400px] bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.university}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Connect with Us <span className="text-gray-600">Everywhere</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated and engaged with our community across all major platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'WhatsApp', members: '2000+', description: 'Main community hub', icon: WhatsAppIcon, color: 'bg-green-500' },
                { name: 'Discord', members: '400+', description: 'Real-time discussions', icon: DiscordIcon, color: 'bg-indigo-500' },
                { name: 'Instagram', members: '150+', description: 'Community highlights', icon: InstagramIcon, color: 'bg-pink-500' },
                { name: 'YouTube', members: '160+', description: 'Educational content', icon: YouTubeIcon, color: 'bg-red-500' }
              ].map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{platform.name}</h3>
                  <p className="text-2xl font-bold text-black mb-1">{platform.members}</p>
                  <p className="text-gray-600 text-sm">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your CS Journey?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of Pakistani CS students who are already building their dream careers with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
                  >
                    Join Our Community
                  </motion.button>
                </Link>
                <div className="flex gap-4 justify-center">
                  {[
                    { name: 'WhatsApp', icon: WhatsAppIcon, href: '#' },
                    { name: 'Discord', icon: DiscordIcon, href: '#' },
                    { name: 'Instagram', icon: InstagramIcon, href: '#' }
                  ].map((platform) => (
                    <motion.a
                      key={platform.name}
                      href={platform.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                    >
                      <platform.icon className="w-5 h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home 