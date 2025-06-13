import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, MessageSquare, BookOpen, Award, TrendingUp, Star, Check, ArrowRight, 
  Heart, Target, Youtube, Instagram, Linkedin, Code, Mic, Palette, 
  Camera, Globe, Calendar, Clock, ChevronRight,
  Mail, Send, CheckCircle, AlertCircle, User, GraduationCap, Hash, Sparkles
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import CountUpNumber from '../components/CountUpNumber'

// Actual Social Media Icons Components - Simple Outlined Style
const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

const DiscordIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9.5 12h5m-5 0a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2m-5 0v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5"/>
    <path d="M7 8.5V7a5 5 0 0 1 10 0v1.5"/>
  </svg>
)

const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const YouTubeIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"/>
  </svg>
)

const Join: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('Campus Ambassador')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    graduationYear: '',
    role: 'Campus Ambassador',
    experience: '',
    motivation: '',
    skills: [] as string[]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [result, setResult] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult("Sending....")
    
    const formData = new FormData(e.target as HTMLFormElement)
    formData.append("access_key", "6e8b6992-223d-4d0e-9a2e-4d015c0fa15d")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully! We'll get back to you soon.")
        ;(e.target as HTMLFormElement).reset()
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

  const socialMedia = [
    {
      name: 'WhatsApp',
      members: 2000,
      suffix: '+',
      description: 'Main community hub for daily discussions and opportunities',
      icon: WhatsAppIcon,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      link: 'https://chat.whatsapp.com/JwQrKjYblcU6C2Rz4k3jIi'
    },
    {
      name: 'Discord',
      members: 800,
      suffix: '+',
      description: 'Technical discussions, study groups, and voice chats',
      icon: DiscordIcon,
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
      link: 'https://discord.gg/U8mNhUq4Qm'
    },
    {
      name: 'YouTube',
      members: 5000,
      suffix: '+',
      description: 'Podcasts, tutorials, and tech talks',
      icon: YouTubeIcon,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      link: 'https://youtube.com/@csconnectpakistan'
    },
    {
      name: 'LinkedIn',
      members: 3000,
      suffix: '+',
      description: 'Professional networking and career updates',
      icon: LinkedInIcon,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      link: 'https://linkedin.com/company/csconnectpakistan'
    },
    {
      name: 'Instagram',
      members: 2000,
      suffix: '+',
      description: 'Behind the scenes and community highlights',
      icon: InstagramIcon,
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
      link: 'https://instagram.com/csconnectpakistan'
    }
  ]

  const roles = [
    {
      title: 'Campus Ambassador',
      description: 'Represent CS Connect Pakistan at your university',
      responsibilities: ['Organize meetups', 'Recruit new members', 'Share opportunities', 'Host events'],
      icon: Users,
      color: 'bg-blue-500',
      skills: ['Leadership', 'Communication', 'Event Planning']
    },
    {
      title: 'Podcast Host',
      description: 'Host our weekly podcast and interview guests',
      responsibilities: ['Conduct interviews', 'Research topics', 'Prepare questions', 'Engage audience'],
      icon: Mic,
      color: 'bg-purple-500',
      skills: ['Public Speaking', 'Research', 'Communication']
    },
    {
      title: 'Content Creator',
      description: 'Create engaging content for our social media',
      responsibilities: ['Write blog posts', 'Create graphics', 'Make videos', 'Manage social media'],
      icon: Camera,
      color: 'bg-green-500',
      skills: ['Writing', 'Design', 'Video Editing']
    },
    {
      title: 'Web Developer',
      description: 'Help build and maintain our website and platform',
      responsibilities: ['Frontend development', 'Backend development', 'Bug fixes', 'New features'],
      icon: Code,
      color: 'bg-orange-500',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB']
    },
    {
      title: 'Designer',
      description: 'Create visual designs for our brand and content',
      responsibilities: ['UI/UX design', 'Brand graphics', 'Social media assets', 'Website design'],
      icon: Palette,
      color: 'bg-pink-500',
      skills: ['Figma', 'Photoshop', 'Illustrator', 'UI/UX']
    },
    {
      title: 'Community Manager',
      description: 'Manage our online communities and engagement',
      responsibilities: ['Moderate discussions', 'Engage members', 'Plan activities', 'Handle support'],
      icon: MessageSquare,
      color: 'bg-indigo-500',
      skills: ['Communication', 'Moderation', 'Community Building']
    }
  ]

  const achievements = [
    {
      icon: Users,
      title: 'Growing Community',
      description: 'Join our rapidly expanding network of CS students',
      color: 'bg-blue-500'
    },
    {
      icon: Award,
      title: 'Recognition & Skills',
      description: 'Build your portfolio while gaining real experience',
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Network with industry professionals and alumni',
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      title: 'Make an Impact',
      description: 'Help fellow students succeed in their CS journey',
      color: 'bg-red-500'
    }
  ]

  const universities = [
    'FAST-NUCES', 'NUST', 'GIKI', 'LUMS', 'COMSATS', 'ITU', 'PUCIT', 'UET', 
    'IBA Karachi', 'NUST H-12', 'UCP', 'Habib University', 'PIEAS', 'Air University',
    'Bahria University', 'SZABIST', 'IMS Sciences', 'Other'
  ]

  const allSkills = [
    'React', 'Node.js', 'Python', 'Java', 'Machine Learning', 'UI/UX Design',
    'Content Writing', 'Video Editing', 'Public Speaking', 'Event Planning',
    'Social Media Marketing', 'Graphic Design', 'Project Management', 'Leadership'
  ]

  const testimonials = [
    {
      name: 'Fatima Ahmed',
      university: 'FAST NUCES',
      role: 'Campus Ambassador',
      message: 'Being a campus ambassador has been incredible! I\'ve organized 3 successful meetups and connected with amazing people.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400'
    },
    {
      name: 'Ahmad Hassan',
      university: 'LUMS',
      role: 'Podcast Host',
      message: 'Hosting the podcast improved my communication skills tremendously. I\'ve interviewed 10+ industry professionals!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      name: 'Sara Khan',
      university: 'NUST',
      role: 'Web Developer',
      message: 'Contributing to the platform helped me land my first internship. The real-world experience is invaluable.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden pt-28">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Join Pakistan's Largest CS Community
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Connect, Learn &
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Grow Together
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Join thousands of CS students from universities across Pakistan. 
              Connect, learn, and build your future in tech together.
            </motion.p>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { label: 'Student-Led Community', description: 'By students, for students' },
                { label: 'All Universities Welcome', description: 'From FAST to local colleges' },
                { label: 'Completely Free', description: 'No fees, no barriers' }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg md:text-xl font-bold text-white mb-2">
                    {value.label}
                </div>
                  <div className="text-sm text-gray-400">{value.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Where We <span className="text-gray-600">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              CS Connect Pakistan exists across multiple platforms, each serving a unique purpose in our community ecosystem. 
              We believe in meeting students where they already are, making it easy for everyone to participate and contribute.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-black">
                  Our Digital Home Across Pakistan
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    What started as a simple WhatsApp group has evolved into a comprehensive digital ecosystem 
                    that serves thousands of CS students across Pakistan. Each platform we use has been carefully 
                    chosen to serve specific needs of our community.
                  </p>
                  <p>
                    From quick daily discussions on WhatsApp to in-depth technical conversations on Discord, 
                    from professional networking on LinkedIn to educational content on YouTube, we ensure 
                    that every student finds their preferred way to engage and learn.
                  </p>
                </div>
                </div>

              <div className="space-y-6">
                {socialMedia.map((platform, index) => {
                  const IconComponent = platform.icon
                  return (
                    <motion.a
                      key={index}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-black group-hover:text-gray-700 transition-colors">
                          {platform.name}
                        </h4>
                        <p className="text-sm text-gray-600">{platform.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  )
                })}
              </div>
                </div>
              </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Get in <span className="text-gray-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Want to collaborate? or need guidance? We're here to help you succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    />
                  </div>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    University
                  </label>
                        <input
                    type="text"
                    id="university"
                    name="university"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    placeholder="Your university name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    <Hash className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="join">Want to Join</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="podcast">Podcast Feature</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                </div>

                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  rows={6}
                    required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                    />
                    Sending...
                  </>
                  ) : (
                    <>
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                    </>
                  )}
                </motion.button>

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center ${
                    result.includes('success') || result.includes('sent') 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {result.includes('success') || result.includes('sent') ? (
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  )}
                  <span className="text-sm">{result}</span>
                </motion.div>
              )}
              </form>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Why Join <span className="text-gray-600">CS Connect Pakistan?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just another student group. We're a movement of Pakistani CS students who believe in 
              collective growth, shared knowledge, and building each other up in the tech industry.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-black flex items-center">
                <Users className="w-8 h-8 mr-3 text-blue-600" />
                Community & Networking
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Being part of CS Connect Pakistan means you're never alone in your journey. Whether you're 
                  struggling with a difficult algorithm, looking for project partners, or need advice on career 
                  decisions, there's always someone ready to help.
                </p>
                <p className="font-medium text-black">What you get:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Direct access to students from top universities across Pakistan</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Study groups and collaborative learning opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Peer-to-peer mentorship and knowledge sharing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lifelong friendships with like-minded individuals</span>
                  </li>
                </ul>
                  </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-black flex items-center">
                <Award className="w-8 h-8 mr-3 text-purple-600" />
                Career & Growth
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Your career in tech doesn't start after graduation—it starts now. CS Connect Pakistan provides 
                  you with the resources, connections, and opportunities to build a strong foundation for your 
                  professional journey.
                </p>
                <p className="font-medium text-black">Career benefits:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Exclusive internship and job opportunities shared within the community</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Interview preparation sessions and mock interviews</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Resume reviews and portfolio building guidance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Direct connections with industry professionals and alumni</span>
                  </li>
                </ul>
                </div>
              </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white rounded-3xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  Learning & Skill Development
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    The tech industry evolves rapidly, and staying updated can be challenging when you're studying alone. 
                    Our community ensures you're always learning the latest technologies and best practices.
                  </p>
                  <p>
                    From beginner-friendly tutorials to advanced technical discussions, from coding competitions 
                    to project collaborations, we provide multiple avenues for continuous learning and growth.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4 text-white">Learning opportunities:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Weekly coding challenges and competitions',
                    'Technical workshops and webinars',
                    'Open source project collaborations',
                    'Study materials and resource sharing',
                    'Peer code reviews and feedback',
                    'Industry trend discussions and insights'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                </div>
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

export default Join 