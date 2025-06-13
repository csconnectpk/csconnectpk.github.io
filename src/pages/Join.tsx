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

// Actual Social Media Icons Components
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

const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
      <section className="py-20 bg-black text-white relative overflow-hidden pt-16">
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