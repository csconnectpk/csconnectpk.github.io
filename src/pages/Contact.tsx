import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle, User, GraduationCap, Hash, MessageCircle, Users, Heart, Star, ArrowRight, Sparkles, Target, Globe } from 'lucide-react'

const Contact: React.FC = () => {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("Sending....")
    
    const formData = new FormData(event.target as HTMLFormElement)
    formData.append("access_key", "6e8b6992-223d-4d0e-9a2e-4d015c0fa15d")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Application submitted successfully! We'll get back to you soon.")
        ;(event.target as HTMLFormElement).reset()
      } else {
        console.log("Error", data)
        setResult(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      setResult("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  }

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      description: 'Join our vibrant community of 2000+ students sharing knowledge, opportunities, and support',
      members: '2000+ Members',
      icon: MessageCircle,
      link: 'https://whatsapp.com/channel/0029VaF5kJwEawdmcFLmJP1a',
      stats: 'Daily discussions, job alerts, study groups'
    },
    {
      name: 'Discord',
      description: 'Real-time conversations, voice study sessions, and collaborative coding spaces',
      members: '400+ Active',
      icon: Users,
      link: 'https://discord.gg/csconnectpakistan',
      stats: 'Voice channels, screen sharing, bot assistance'
    },
    {
      name: 'LinkedIn',
      description: 'Professional networking, career opportunities, and industry connections',
      members: '1000+ Professionals',
      icon: Users,
      link: 'https://linkedin.com/company/csconnectpakistan',
      stats: 'Job postings, industry insights, mentorship'
    },
    {
      name: 'Instagram',
      description: 'Behind-the-scenes content, success stories, and community highlights',
      members: '800+ Followers',
      icon: Heart,
      link: 'https://instagram.com/csconnectpakistan',
      stats: 'Stories, reels, community events'
    },
    {
      name: 'YouTube',
      description: 'Educational content, tech talks, podcast episodes, and tutorials',
      members: '500+ Subscribers',
      icon: Star,
      link: 'https://youtube.com/@csconnectpakistan',
      stats: 'Tutorials, interviews, career guidance'
    },
    {
      name: 'Email',
      description: 'Direct communication for partnerships, podcast features, and inquiries',
      members: 'Contact Us',
      icon: Mail,
      link: 'mailto:csconnectpakistan@gmail.com',
      stats: 'Business inquiries, podcast bookings'
    }
  ]

  return (
    <div className="min-h-screen pt-20 lg:pt-28 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Start Your Journey Today
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Your Tech Career
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Starts Here
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Join Pakistan's most vibrant community of computer science students. 
              Connect with peers, learn from experts, and build the career you've always dreamed of.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: '2000+', label: 'Students Connected' },
                { number: '50+', label: 'Universities Represented' },
                { number: '300+', label: 'Career Placements' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 mr-3 text-black" />
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Story</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-tight">
                Born from a Simple
                <span className="block text-gray-600">Belief</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  We believe that every Pakistani CS student deserves access to opportunities, 
                  mentorship, and a supportive community that accelerates their growth.
                </p>
                
                <p>
                  What started as a small WhatsApp group among university friends has grown into 
                  Pakistan's largest computer science community. We've witnessed thousands of 
                  students transform their careers, land dream jobs, and build lasting connections.
                </p>
                
                <p>
                  Today, we're not just a community—we're a movement. A movement towards creating 
                  equal opportunities for every CS student, regardless of their background or university.
                </p>
              </div>

              {/* Mission Points */}
              <div className="mt-8 space-y-4">
                {[
                  'Connect students across Pakistan\'s top universities',
                  'Provide equal access to opportunities and resources',
                  'Foster collaborative learning and growth',
                  'Bridge the gap between students and industry'
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-black rounded-3xl p-8 text-white">
                <Globe className="w-12 h-12 mb-6 text-white" />
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span>Students Helped</span>
                    <span className="font-bold">2000+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span>Universities Connected</span>
                    <span className="font-bold">50+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span>Career Placements</span>
                    <span className="font-bold">300+</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span>Years of Impact</span>
                    <span className="font-bold">3+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
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
              Choose your preferred platform to stay connected, get updates, and engage with our thriving community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 h-full hover:shadow-xl">
                  {/* Icon & Title */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                        {platform.name}
                      </h3>
                      <span className="text-sm font-medium text-gray-500">
                        {platform.members}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {platform.description}
                  </p>

                  {/* Stats */}
                  <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg mb-4">
                    {platform.stats}
                  </div>

                  {/* Action */}
                  <div className="flex items-center text-black font-medium group-hover:text-gray-700 transition-colors">
                    <span className="mr-2">
                      {platform.name === 'Email' ? 'Contact Us' : `Join ${platform.name}`}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Ready to <span className="text-gray-600">Join Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards transforming your CS journey. Fill out this form and become part of something bigger.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-black">Application Form</h3>
                <p className="text-gray-600 mb-8">Help us get to know you better so we can provide the best community experience and opportunities.</p>
                
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div variants={inputVariants}>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <motion.input
                      whileFocus="focus"
                      initial="blur"
                      animate="blur"
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 focus:bg-white text-black placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  {/* University Field */}
                  <motion.div variants={inputVariants}>
                    <label htmlFor="university" className="block text-sm font-semibold text-gray-900 mb-3">
                      <GraduationCap className="w-4 h-4 inline mr-2" />
                      University *
                    </label>
                    <motion.select
                      whileFocus="focus"
                      initial="blur"
                      animate="blur"
                      id="university"
                      name="university"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 focus:bg-white text-black"
                    >
                      <option value="">Select your university</option>
                      <option value="FAST NUCES">FAST NUCES</option>
                      <option value="NUST">NUST</option>
                      <option value="LUMS">LUMS</option>
                      <option value="GIKI">GIKI</option>
                      <option value="COMSATS">COMSATS</option>
                      <option value="ITU">ITU</option>
                      <option value="PUCIT">PUCIT</option>
                      <option value="UET">UET</option>
                      <option value="IBA Karachi">IBA Karachi</option>
                      <option value="UCP">UCP</option>
                      <option value="Habib University">Habib University</option>
                      <option value="PIEAS">PIEAS</option>
                      <option value="AIR University">AIR University</option>
                      <option value="Bahria University">Bahria University</option>
                      <option value="SZABIST">SZABIST</option>
                      <option value="Other">Other</option>
                    </motion.select>
                  </motion.div>

                  {/* Semester Field */}
                  <motion.div variants={inputVariants}>
                    <label htmlFor="semester" className="block text-sm font-semibold text-gray-900 mb-3">
                      <Hash className="w-4 h-4 inline mr-2" />
                      Current Semester *
                    </label>
                    <motion.select
                      whileFocus="focus"
                      initial="blur"
                      animate="blur"
                      id="semester"
                      name="semester"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 focus:bg-white text-black"
                    >
                      <option value="">Select your semester</option>
                      <option value="1st Semester">1st Semester</option>
                      <option value="2nd Semester">2nd Semester</option>
                      <option value="3rd Semester">3rd Semester</option>
                      <option value="4th Semester">4th Semester</option>
                      <option value="5th Semester">5th Semester</option>
                      <option value="6th Semester">6th Semester</option>
                      <option value="7th Semester">7th Semester</option>
                      <option value="8th Semester">8th Semester</option>
                      <option value="Recent Graduate">Recent Graduate</option>
                      <option value="Professional">Working Professional</option>
                    </motion.select>
                  </motion.div>

                  {/* WhatsApp Number */}
                  <motion.div variants={inputVariants}>
                    <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-900 mb-3">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      WhatsApp Number *
                    </label>
                    <motion.input
                      whileFocus="focus"
                      initial="blur"
                      animate="blur"
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 focus:bg-white text-black placeholder-gray-500"
                      placeholder="+92 300 1234567"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={inputVariants}>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <motion.input
                      whileFocus="focus"
                      initial="blur"
                      animate="blur"
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 focus:bg-white text-black placeholder-gray-500"
                      placeholder="your.email@gmail.com"
                    />
                  </motion.div>

                  {/* Reason for Joining */}
                  <motion.div variants={inputVariants}>
                    <label htmlFor="reason" className="block text-sm font-semibold text-gray-900 mb-3">
                      Why do you want to join CS Connect Pakistan? *
                    </label>
                    <motion.textarea
                      whileFocus="focus"
                      initial="blur"
                      animate="blur"
                      id="reason"
                      name="reason"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 focus:bg-white text-black placeholder-gray-500"
                      placeholder="Tell us what you hope to gain from our community (networking, learning, mentorship, career opportunities, etc.)"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Message */}
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-4 rounded-xl ${
                        result.includes('successfully') 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {result.includes('successfully') ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm font-medium">{result}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Side Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Why Join Us */}
              <div className="bg-black text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Join Us?</h3>
                <div className="space-y-4">
                  {[
                    'Connect with 2000+ passionate CS students',
                    'Access exclusive job and internship opportunities',
                    'Get mentorship from industry professionals',
                    'Join collaborative projects and study groups',
                    'Attend exclusive workshops and tech talks',
                    'Build a network that lasts a lifetime'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">What Happens Next?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-gray-700 text-sm">We review your application</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-gray-700 text-sm">You receive WhatsApp group links</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-gray-700 text-sm">Access to all community platforms</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  <strong>Response time:</strong> 24-48 hours
                </p>
              </div>

              {/* Stats */}
              <div className="bg-white border border-gray-100 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Community Impact</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-black">2000+</div>
                    <div className="text-gray-600 text-sm">Active Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">50+</div>
                    <div className="text-gray-600 text-sm">Universities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">300+</div>
                    <div className="text-gray-600 text-sm">Job Placements</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">100%</div>
                    <div className="text-gray-600 text-sm">Free Always</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 