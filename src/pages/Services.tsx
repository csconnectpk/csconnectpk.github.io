import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

import { 
  Users, 
  BookOpen, 
  Mic, 
  GraduationCap,
  MessageCircle,
  Code,
  Briefcase,
  Target,
  Globe,
  Calendar,
  Award,
  ArrowRight,
  ExternalLink,
  Instagram,
  Youtube
} from 'lucide-react'

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const communityServices = [
    {
      id: 'mentorship',
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Connect with industry professionals and senior students for career guidance, interview prep, and technical mentoring.',
      features: ['1-on-1 Sessions', 'Group Mentoring', 'Career Guidance', 'Interview Prep'],
      stats: '25+ Sessions'
    },
    {
      id: 'learning',
      icon: BookOpen,
      title: 'Python Programming Course',
      description: 'Comprehensive Python course designed for CS students, covering fundamentals to advanced concepts with real projects.',
      features: ['Basic to Advanced Python', 'Hands-on Projects', 'Weekly Sessions', 'Certificate'],
      stats: '50+ Students'
    },
    {
      id: 'networking',
      icon: MessageCircle,
      title: 'Community Networking',
      description: 'Connect with 1,600+ CS students from top Pakistani universities through our multi-platform community.',
      features: ['WhatsApp Groups', 'Discord Server', 'University Networks', 'Study Groups'],
      stats: '1,600+ Members'
    },
    {
      id: 'events',
      icon: GraduationCap,
      title: 'Entry Test Sessions',
      description: 'Comprehensive preparation sessions for university entry tests including FAST NAT, NUST NET, and other CS admission tests.',
      features: ['Mock Tests', 'Solution Sessions', 'Strategy Planning', 'Practice Materials'],
      stats: '300+ Students'
    },
    {
      id: 'opportunities',
      icon: Briefcase,
      title: 'Career Opportunities',
      description: 'Get notified about internships, job openings, and freelance opportunities shared by community members.',
      features: ['Job Postings', 'Internship Alerts', 'Freelance Gigs', 'Startup Opportunities'],
      stats: '50+ Posted'
    },
    {
      id: 'tools',
      icon: Code,
      title: 'Study Tools & Utilities',
      description: 'Custom-built tools by our community to help students with calculations and mock tests for better preparation.',
      features: ['UniCalc Calculator', 'FastMock Tests', 'Free Access', 'Regular Updates'],
      stats: '2 Live Tools'
    }
  ]

  const platforms = [
    {
      name: 'WhatsApp Groups',
      description: '1,200+ active members across focused discussion groups',
      icon: MessageCircle,
      members: '1,200+',
      color: 'bg-green-500'
    },
    {
      name: 'Discord Server',
      description: '800+ members with voice chats and collaboration rooms',
      icon: Users,
      members: '800+',
      color: 'bg-indigo-500'
    },
    {
      name: 'Instagram',
      description: '1,500+ followers for updates and community highlights',
      icon: Instagram,
      members: '1,500+',
      color: 'bg-pink-500'
    },
    {
      name: 'YouTube Channel',
      description: '500+ subscribers for educational content and sessions',
      icon: Youtube,
      members: '500+',
      color: 'bg-red-500'
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Structured learning paths designed specifically for CS/IT students in Pakistan'
    },
    {
      icon: Users,
      title: 'Peer Support',
      description: 'Learn from and collaborate with students from top universities nationwide'
    },
    {
      icon: Award,
      title: 'Industry Connections',
      description: 'Direct access to professionals working at top tech companies globally'
    },
    {
      icon: Globe,
      title: 'National Network',
      description: 'Connect with students from 50+ universities across Pakistan'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight">
              Our <span className="text-gray-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive support, resources, and opportunities for CS/IT students across Pakistan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 tracking-tight text-black">
              What We <span className="text-gray-600">Offer</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to succeed in your CS journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {communityServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-50 p-6 md:p-8 rounded-3xl hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-black/20"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 md:w-16 h-12 md:h-16 bg-black rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gray-800 transition-colors duration-300"
                >
                  <service.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-gray-700 transition-colors text-black">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  {service.description}
                </p>

                <ul className="space-y-1 md:space-y-2 mb-6 md:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 text-xs md:text-sm flex items-center">
                      <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-black rounded-full mr-2 md:mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.stats}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
              Our <span className="text-gray-600">Platforms</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Active across multiple platforms to ensure you stay connected wherever you are
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-black/20"
              >
                <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center mb-4`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{platform.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{platform.description}</p>
                <div className="text-2xl font-bold text-black">{platform.members}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Community */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 tracking-tight leading-tight text-black">
                Why Join
                <br />
                <span className="text-gray-600">Our Community?</span>
              </h2>
              <p className="text-lg md:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
                We provide the support, resources, and connections you need 
                to excel in your CS journey and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Join WhatsApp Community
                </motion.button>
                <motion.a
                  href="https://csconnect.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-black/20 text-black px-8 py-4 rounded-xl font-semibold hover:bg-black/5 transition-all duration-300 text-lg flex items-center justify-center"
                >
                  Visit csconnect.pk
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-black/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Study Tools Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
              Study <span className="text-gray-600">Tools</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom-built tools by our community to help you excel in your studies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="https://unicalc.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-black/20"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gray-700 transition-colors">
                UniCalc Calculator
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                University grade calculator for different grading systems including CGPA, GPA, and percentage calculations.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Visit UniCalc
                <ExternalLink className="ml-2 w-5 h-5" />
              </div>
            </motion.a>

            <motion.a
              href="https://fastmock.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-black/20"
            >
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gray-700 transition-colors">
                FastMock Tests
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Practice mock tests for university entry tests including FAST NAT, NUST NET, and other admission tests.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                Start Mock Test
                <ExternalLink className="ml-2 w-5 h-5" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Community in <span className="text-gray-300">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1,600+', label: 'Active Members', icon: Users },
              { number: '50+', label: 'Universities', icon: GraduationCap },
              { number: '25+', label: 'Expert Sessions', icon: Mic },
              { number: '6', label: 'Months Growth', icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services