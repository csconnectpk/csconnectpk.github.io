import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Users, Crown, Heart, Gift } from 'lucide-react'

const Pricing: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const membershipTiers = [
    {
      name: 'Community Member',
      price: 'Free',
      description: 'Join our vibrant community of CS students',
      features: [
        'Access to WhatsApp groups',
        'Discord server participation',
        'Basic learning resources',
        'Community announcements',
        'University networking',
        'Peer-to-peer support',
        'Event notifications'
      ],
      popular: false,
      color: 'green',
      icon: Users
    },
    {
      name: 'Active Contributor',
      price: 'Free',
      description: 'Engaged members who contribute to the community',
      features: [
        'Everything in Community',
        'Priority event access',
        'Direct mentor interactions',
        'Project collaboration',
        'Leadership opportunities',
        'Recognition badges',
        'Content creation opportunities',
        'Early access to resources',
        'Expert session recordings'
      ],
      popular: true,
      color: 'blue',
      icon: Star
    },
    {
      name: 'Mentor/Alumni',
      price: 'Free',
      description: 'Industry professionals giving back to the community',
      features: [
        'Everything in Active',
        'Host expert sessions',
        'Direct student mentoring',
        'Industry insights sharing',
        'Exclusive mentor network',
        'Community leadership role',
        'Career guidance sessions',
        'Industry connections',
        'Special recognition',
        'Advisory board participation'
      ],
      popular: false,
      color: 'purple',
      icon: Crown
    }
  ]

  const communityServices = [
    {
      title: 'Expert Sessions',
      description: 'Live sessions with industry professionals',
      icon: '🎓',
      value: 'Free',
      details: 'Monthly sessions covering AI, DevOps, career guidance, and more'
    },
    {
      title: 'Career Mentorship',
      description: '1-on-1 guidance from industry experts',
      icon: '💼',
      value: 'Free',
      details: 'Interview prep, resume reviews, and career planning'
    },
    {
      title: 'Project Collaboration',
      description: 'Team up with fellow students on projects',
      icon: '🚀',
      value: 'Free',
      details: 'Build your portfolio with real-world projects'
    },
    {
      title: 'Learning Resources',
      description: 'Curated tutorials and educational content',
      icon: '📚',
      value: 'Free',
      details: 'AI/ML, DevOps, programming guides, and industry insights'
    },
    {
      title: 'Instagram Community',
      price: 'Free',
      description: 'Updates and community highlights on our Instagram page',
      features: [
        'Daily community updates',
        'Success story highlights',
        'Event announcements',
        'Visual content sharing',
        'Student spotlights'
      ],
      popular: false,
      members: '300+',
      cta: 'Follow on Instagram'
    },
    {
      title: 'YouTube Channel',
      price: 'Free',
      description: 'Educational videos and tech content for Pakistani CS students',
      features: [
        'Tech tutorial videos',
        'Career guidance content',
        'Podcast episodes',
        'Student interviews',
        'Coding sessions'
      ],
      popular: false,
      members: '300+',
      cta: 'Subscribe on YouTube'
    }
  ]

  const platformFeatures = [
    {
      platform: 'WhatsApp Groups',
      members: '1,200+',
      description: 'Active discussion groups by university and interests',
      features: ['Real-time discussions', 'Quick help', 'Announcements', 'Networking']
    },
    {
      platform: 'Discord Server',
      members: '800+',
      description: 'Voice chats, study rooms, and collaboration spaces',
      features: ['Voice channels', 'Study rooms', 'Screen sharing', 'Bots & tools']
    },
    {
      platform: 'Instagram',
      members: '1,500+',
      description: 'Community highlights, success stories, and updates',
      features: ['Success stories', 'Event highlights', 'Tips & tricks', 'Community news']
    },
    {
      platform: 'YouTube',
      members: '500+',
      description: 'Recorded sessions, tutorials, and educational content',
      features: ['Session recordings', 'Tutorials', 'Interviews', 'Study guides']
    }
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
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">100% Free Community</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Community <span className="text-gray-300">Membership</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join Pakistan's premier CS community. Everything is free - our mission is connecting Pakistani geeks, not profit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Membership <span className="text-gray-600">Tiers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Different levels of engagement based on your contribution and involvement in the community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gray-50 border border-gray-100 p-8 rounded-2xl relative group hover:shadow-xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-black scale-105 bg-white' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Common
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-black">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-black mb-2">{tier.price}</div>
                  <p className="text-gray-500 text-sm">Forever</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-medium transition-colors ${
                    tier.popular 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Join as {tier.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Services */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              What We <span className="text-gray-600">Offer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All services are completely free - funded by our passion for building Pakistan's CS community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-black/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <p className="text-xl font-bold text-green-600 mb-2">{service.value}</p>
                <p className="text-xs text-gray-500">{service.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Platform <span className="text-gray-600">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Active across multiple platforms to ensure you stay connected wherever you prefer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-black/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-black">{platform.platform}</h3>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {platform.members}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free? */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Gift className="w-16 h-16 text-black mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Why Everything is <span className="text-gray-600">Free?</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong className="text-black">CS Connect Pakistan</strong> was founded with a simple mission: 
                to bridge the gap between Pakistani CS students and create opportunities for everyone, 
                regardless of their financial background.
              </p>
              <p>
                We believe that knowledge, mentorship, and community support should be accessible to all. 
                Our founder <strong className="text-black">Azan Waseem</strong> and our mentors volunteer their time 
                because they're passionate about empowering the next generation of Pakistani tech leaders.
              </p>
              <p>
                Our goal isn't profit - it's impact. We're building toward becoming the official 
                national representative body for CS students in Pakistan, funded by passion and 
                supported by industry professionals who want to give back.
              </p>
            </div>
          </motion.div>
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
              Ready to Join Our Free Community?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              No hidden costs, no subscriptions, no barriers. Just a passionate community 
              of Pakistani CS students helping each other succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Join WhatsApp Group
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Join Discord Server
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Pricing 