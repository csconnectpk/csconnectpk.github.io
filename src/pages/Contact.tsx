import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Users, Globe, ExternalLink } from 'lucide-react'
import { FaWhatsapp, FaDiscord, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import AnimatedCounter from '../components/AnimatedCounter'

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialPlatforms = [
    {
      name: 'WhatsApp Group',
      handle: 'CS Connect Pakistan',
      memberCount: 2000,
      memberSuffix: '+',
      memberLabel: 'Members',
      description: 'Main community hub for daily discussions, networking, and sharing opportunities',
      icon: FaWhatsapp,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      link: '#'
    },
    {
      name: 'Discord Server',
      handle: 'CS Connect Pakistan',
      memberCount: 400,
      memberSuffix: '+',
      memberLabel: 'Members',
      description: 'Technical discussions, study groups, voice chats, and collaborative projects',
      icon: FaDiscord,
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
      link: '#'
    },
    {
      name: 'Instagram',
      handle: '@csconnectpakistan',
      memberCount: 150,
      memberSuffix: '+',
      memberLabel: 'Followers',
      description: 'Community highlights, success stories, and event updates',
      icon: FaInstagram,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600',
      link: 'https://instagram.com/csconnectpakistan'
    },
    {
      name: 'YouTube',
      handle: 'CS Connect Pakistan',
      memberCount: 160,
      memberSuffix: '+',
      memberLabel: 'Subscribers',
      description: 'Educational content, podcast episodes, and tech tutorials',
      icon: FaYoutube,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      link: 'https://youtube.com/@csconnectpakistan'
    },
    {
      name: 'LinkedIn',
      handle: 'CS Connect Pakistan',
      memberCount: 70,
      memberSuffix: '+',
      memberLabel: 'Followers',
      description: 'Career opportunities, industry insights, and professional networking',
      icon: FaLinkedin,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      link: 'https://linkedin.com/company/csconnectpakistan'
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 md:pt-24 lg:pt-28"
    >
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Connect With Us</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gray-300">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              We're all over the place! Find us wherever you like to hang out online
            </p>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={2000} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={50} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={4} />
                </div>
                <div className="text-gray-400 text-sm">Podcast Episodes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={5} />
                </div>
                <div className="text-gray-400 text-sm">Platforms</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              Where to <span className="text-gray-600">Find Us</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We're pretty much everywhere! Jump into whichever platform you're most comfortable with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${platform.color} ${platform.hoverColor} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                      <platform.icon className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {platform.name}
                  </h3>
                  <p className="text-gray-700 font-semibold mb-2 text-lg">{platform.handle}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 group-hover:bg-white rounded-full mb-4 transition-colors duration-300">
                    <Users className="w-4 h-4 text-gray-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">
                      <AnimatedCounter value={platform.memberCount} suffix={platform.memberSuffix} /> {platform.memberLabel}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {platform.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gray-200 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              Community <span className="text-gray-600">Guidelines</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              To maintain a positive and productive environment for everyone
            </p>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -100] }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-6 w-max"
            >
              {[
                {
                  title: 'Be Respectful',
                  description: 'Treat all community members with respect and kindness'
                },
                {
                  title: 'Stay On Topic',
                  description: 'Keep discussions relevant to CS, tech, and career development'
                },
                {
                  title: 'Help Others',
                  description: 'Share knowledge and help fellow students grow'
                },
                {
                  title: 'No Spam',
                  description: 'Avoid promotional content and irrelevant messages'
                },
                {
                  title: 'Ask Questions',
                  description: 'Don\'t hesitate to ask for help - we\'re all here to learn'
                },
                {
                  title: 'Share Resources',
                  description: 'Found something cool? Share it with the community'
                },
                {
                  title: 'Be Patient',
                  description: 'Everyone is at different learning stages - be supportive'
                },
                {
                  title: 'No Hate Speech',
                  description: 'Zero tolerance for discrimination or offensive content'
                }
              ].concat([
                {
                  title: 'Be Respectful',
                  description: 'Treat all community members with respect and kindness'
                },
                {
                  title: 'Stay On Topic',
                  description: 'Keep discussions relevant to CS, tech, and career development'
                },
                {
                  title: 'Help Others',
                  description: 'Share knowledge and help fellow students grow'
                },
                {
                  title: 'No Spam',
                  description: 'Avoid promotional content and irrelevant messages'
                }
              ]).map((guideline, index) => (
                <div
                  key={`${guideline.title}-${index}`}
                  className="bg-white p-6 rounded-2xl border border-gray-200 text-center flex-shrink-0 w-64"
                >
                  <h3 className="text-lg font-bold text-black mb-3">{guideline.title}</h3>
                  <p className="text-gray-600 text-sm">{guideline.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Jump In!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              The WhatsApp group is usually the best place to start - that's where most of us hang out daily
            </p>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Join the WhatsApp Group
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact 