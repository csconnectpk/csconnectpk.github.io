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
      <section className="relative bg-white overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 mb-6 sm:mb-8 shadow-sm">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
              <span className="text-xs sm:text-sm font-bold text-green-700 tracking-wide">100% Free Community</span>
            </div>

            {/* MUCH LARGER main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
              Community
              <br />
              <span className="relative inline-block ml-3">
                <span className="text-blue-600">Membership</span>
                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </span>
            </h1>

            {/* Better subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              Join Pakistan's premier CS community. Everything is free - our mission is connecting Pakistani students, not profit.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
              <a href="#membership">
                <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                  <Crown className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                  View Membership
                </button>
              </a>
              
              <a href="/join">
                <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                  <Users className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                  Join Now
                </button>
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
              <div className="text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Free Forever
                </div>
              </div>
              
              <div className="text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  2,000+
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Active Members
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1 text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  24/7
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Community Support
                </div>
              </div>
            </div>
          </div>
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
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
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
            <Gift className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-black mx-auto mb-6" />
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