import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Globe, Calendar, MessageCircle, GraduationCap, Rocket } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Users, label: 'Active Members', value: 2000, suffix: '+' },
    { icon: GraduationCap, label: 'Universities', value: 50, suffix: '+' },
    { icon: Calendar, label: 'Months Growth', value: 6, suffix: '' },
    { icon: Globe, label: 'Platforms', value: 5, suffix: '' }
  ]

  const milestones = [
    {
      date: 'Late 2024',
      title: 'The Beginning',
      description: 'Azan Waseem founded CS Connect Pakistan as a simple WhatsApp group to bridge IT and CS students across Pakistan.'
    },
    {
      date: 'Early 2025',
      title: 'Rapid Growth',
      description: 'Expanded to include students from FAST, NUST, GIKI, LUMS, COMSATS, ITU, PUCIT and 40+ other universities.'
    },
    {
      date: 'March 2025',
      title: 'Multi-Platform',
      description: 'Launched on Discord, Instagram, YouTube, and began planning the official website csconnect.pk.'
    },
    {
      date: 'June 2025',
      title: 'Expert Sessions',
      description: 'Hosted AI & DevOps masterclass with FAST lecturer Sami Ullah Shah, attracting 200+ attendees.'
    },
    {
      date: 'Present',
      title: 'National Vision',
      description: 'Working towards becoming the official national representative body for CS students in Pakistan.'
    }
  ]

  const initiatives = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Groups',
      description: '2,000+ active members across multiple focused discussion groups',
      stats: { value: 2000, suffix: '+' }
    },
    {
      icon: Users,
      title: 'Discord Server',
      description: '400+ members with voice chats, study rooms, and real-time collaboration',
      stats: { value: 400, suffix: '+' }
    },
    {
      icon: Globe,
      title: 'Social Media',
      description: 'Active presence on Instagram (150+) and YouTube (160+) with regular updates',
      stats: { value: 310, suffix: '+' }
    },
    {
      icon: GraduationCap,
      title: 'University Network',
      description: 'Connecting students from Pakistan\'s most prestigious institutions',
      stats: { value: 50, suffix: '+' }
    },
    {
      icon: Target,
      title: 'Expert Mentorship',
      description: 'Senior mentors including Talha A. Khawaja, Muhammad Owais, and Siraj Qazi',
      stats: { value: 4, suffix: '' }
    },
    {
      icon: Rocket,
      title: 'Future Vision',
      description: 'Building Pakistan\'s national representative body for CS students',
      stats: { value: 1, suffix: '' }
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              How This <span className="text-gray-300">Started</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From a simple WhatsApp group to <AnimatedCounter value={2000} suffix="+" /> CS students across Pakistan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-black">
                How It All <span className="text-gray-600">Began</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-base md:text-lg">
                  Back in late 2024, <strong className="text-black">Azan Waseem</strong> from FAST Islamabad 
                  started a WhatsApp group because he noticed CS students across Pakistan weren't really connected. 
                  It was just meant to be a simple group where students could help each other out.
                </p>
                <p className="text-base md:text-lg">
                  Fast forward to today - we've got more than <strong className="text-black"><AnimatedCounter value={2000} suffix="+" /> students</strong> from{' '}
                  <strong className="text-black"><AnimatedCounter value={50} suffix="+" /> universities</strong> (FAST, NUST, GIKI, LUMS, COMSATS, 
                  ITU, PUCIT and tons more) hanging out across WhatsApp, Discord, Instagram, YouTube, and this website.
                </p>
                <p className="text-base md:text-lg">
                  What we love most is that it's still just students helping students. Senior guys like 
                  Talha A. Khawaja, Muhammad Owais, and Siraj Qazi jump in to share their experiences, 
                  and we all learn from each other. No fancy corporate stuff - just genuine student community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-4 md:p-6 rounded-2xl text-center border border-gray-100 hover:border-black/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-black mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 text-xs md:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              Our <span className="text-gray-600">Purpose</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What drives us and where we're heading
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                To create Pakistan's most supportive and inclusive CS student community where every student can find mentorship, 
                resources, and genuine connections regardless of their university or background.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Connect CS students across all Pakistani universities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Provide mentorship from industry professionals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Share opportunities and resources freely
                </li>
              </ul>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                To become the official national representative body for CS students in Pakistan, 
                bridging the gap between academia and industry while fostering the next generation of tech leaders.
              </p>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  National recognition as the premier CS student body
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Direct partnerships with tech companies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Influence policy for CS education in Pakistan
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Beyond <span className="text-gray-300">Networking</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-white/20 rounded-full"></div>
            <div className="pl-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                What started as a simple idea to connect Pakistani CS students has evolved into something extraordinary. 
                <span className="text-white font-semibold"> We're not just another student group</span> – we're a 
                catalyst for change in Pakistan's tech education landscape.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
                Our community represents the <span className="text-white font-semibold">brightest minds</span> from 
                institutions like FAST, NUST, GIKI, and LUMS, all united by a shared vision: to elevate Pakistan's 
                position in the global tech ecosystem. Every day, we witness students transforming their careers, 
                launching startups, and securing positions at companies like Google, Meta, and Microsoft.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                But our true impact lies in the <span className="text-white font-semibold">ripple effect</span> we create. 
                When one of our members lands their dream job, they become mentors for the next generation. When someone 
                launches a startup, they hire from our community. We're building an ecosystem where 
                <span className="text-white font-semibold"> Pakistani talent doesn't just compete globally – it leads.</span>
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1,600+</div>
              <div className="text-gray-400 text-sm">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400 text-sm">Expert Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Free Forever</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* University Partners */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Partner <span className="text-gray-600">Universities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students from Pakistan's top computer science programs
            </p>
          </motion.div>

          {/* University Slider */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex space-x-12 text-6xl md:text-8xl font-bold text-gray-300/30"
              animate={{ 
                x: [0, -2000]
              }}
              transition={{
                duration: 30,
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
                  className="whitespace-nowrap select-none"
                >
                  {university}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              Our <span className="text-gray-600">Journey</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a simple idea to a thriving community of <AnimatedCounter value={2000} suffix="+" /> students
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-md transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300">
                      <div className="text-sm font-medium text-gray-500 mb-2">{milestone.date}</div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              What We <span className="text-gray-600">Do</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platforms and initiatives connecting CS students across Pakistan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <initiative.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-3">{initiative.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{initiative.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-black">
                    <AnimatedCounter value={initiative.stats.value} suffix={initiative.stats.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Active</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gray-300">Join Us?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Become part of Pakistan's largest CS student community and connect with <AnimatedCounter value={2000} suffix="+" /> like-minded peers
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Join CS Connect Pakistan
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About 