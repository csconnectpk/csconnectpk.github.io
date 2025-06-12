import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, MessageSquare, BookOpen, Award, TrendingUp, Star, Check, ArrowRight, 
  Heart, Target, Youtube, Instagram, Linkedin, Code, Mic, Palette, 
  Camera, Globe, Calendar, Clock, ChevronRight
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'

// Social Media Icons Components
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        university: '',
        graduationYear: '',
        role: 'Campus Ambassador',
        experience: '',
        motivation: '',
        skills: [] as string[]
      })
    }, 3000)
  }

  const socialMedia = [
    {
      name: 'WhatsApp',
      members: '1,200+',
      description: 'Main community hub for daily discussions and opportunities',
      icon: WhatsAppIcon,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      link: 'https://chat.whatsapp.com/your-group-link'
    },
    {
      name: 'Discord',
      members: '800+',
      description: 'Technical discussions, study groups, and voice chats',
      icon: DiscordIcon,
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
      link: 'https://discord.gg/your-server'
    },
    {
      name: 'YouTube',
      members: '5K+',
      description: 'Podcasts, tutorials, and tech talks',
      icon: Youtube,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      link: 'https://youtube.com/@csconnectpakistan'
    },
    {
      name: 'LinkedIn',
      members: '3K+',
      description: 'Professional networking and career updates',
      icon: Linkedin,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      link: 'https://linkedin.com/company/csconnectpakistan'
    },
    {
      name: 'Instagram',
      members: '2K+',
      description: 'Behind the scenes and community highlights',
      icon: Instagram,
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
              <Heart className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-sm font-medium">Join Our Community</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Be Part of <span className="text-gray-300">Something Bigger</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join Pakistan's most supportive CS student community and help others succeed while growing yourself
            </p>

            {/* Live Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter value={0} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter value={0} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter value={0} suffix="%" />
                </div>
                <div className="text-gray-400 text-sm">Impact Made</div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-400 mb-8"
            >
              Volunteer with us and make a real difference in the CS community
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Join Our Community */}
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
              Join Our <span className="text-gray-600">Community</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with Pakistan's largest CS student community across multiple platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialMedia.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 ${platform.color} ${platform.hoverColor} rounded-full flex items-center justify-center text-white transition-colors duration-300 group-hover:scale-110`}>
                    <platform.icon className="w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2 text-center">
                  {platform.name}
                </h3>
                
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">
                    {platform.members}
                  </span>
                  <span className="text-gray-600 ml-1">members</span>
                </div>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="mt-6 text-center">
                  <span className="inline-flex items-center text-sm font-semibold text-gray-700 group-hover:text-black transition-colors">
                    Join Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Available Roles */}
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
              Ways to <span className="text-gray-600">Get Involved</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a role that matches your interests and help build something amazing together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-black/20 transition-all duration-300 cursor-pointer ${
                  selectedRole === role.title ? 'ring-2 ring-black' : ''
                }`}
                onClick={() => setSelectedRole(role.title)}
              >
                <div className={`w-16 h-16 ${role.color} rounded-xl flex items-center justify-center mb-4`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{role.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{role.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-semibold text-black">Key Responsibilities:</h4>
                  {role.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {resp}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {role.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
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
              Why <span className="text-gray-600">Volunteer?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Volunteering with CS Connect Pakistan offers incredible opportunities for growth and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 md:py-32 bg-gray-50" id="volunteer-form">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Ready to <span className="text-gray-600">Make a Difference?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Apply to become a volunteer and help shape the future of CS education in Pakistan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Application Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in volunteering with CS Connect Pakistan. We'll review your application and get back to you within 3-5 business days.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>What's Next?</strong><br />
                    1. We'll review your application<br />
                    2. Conduct a brief interview call<br />
                    3. Welcome you to the team!
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-black mb-2">
                      University *
                    </label>
                    <select
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="">Select your university</option>
                      {universities.map((uni) => (
                        <option key={uni} value={uni}>{uni}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="graduationYear" className="block text-sm font-medium text-black mb-2">
                      Expected Graduation Year *
                    </label>
                    <select
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="">Select year</option>
                      {[2024, 2025, 2026, 2027, 2028, 2029, 2030].map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                      <option value="Already Graduated">Already Graduated</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Preferred Role *
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {roles.map((role) => (
                      <label
                        key={role.title}
                        className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${
                          formData.role === role.title
                            ? 'bg-black text-white border-black'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={role.title}
                          checked={formData.role === role.title}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <role.icon className="w-5 h-5 mr-2" />
                        <span className="font-medium text-sm">{role.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Relevant Skills (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {allSkills.map((skill) => (
                      <label
                        key={skill}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                          formData.skills.includes(skill)
                            ? 'bg-black text-white border-black'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.skills.includes(skill)}
                          onChange={() => handleSkillToggle(skill)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-black mb-2">
                    Relevant Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="Tell us about any relevant experience, projects, or activities..."
                  />
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-black mb-2">
                    Why do you want to volunteer with us? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="Share your motivation and what you hope to contribute..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Submitting Application...
                    </div>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-gray-600">
                  By applying, you agree to dedicate at least 5 hours per week to your volunteer role.
                  All volunteer positions are unpaid but offer valuable experience and recognition.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              Stories from Our <span className="text-gray-600">Volunteers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students who've grown their skills and made an impact through volunteering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-black/20 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.university}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.message}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Target className="w-16 h-16 mx-auto mb-6 text-gray-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Journey Starts Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join hundreds of students who are already building their skills, expanding their networks, 
              and making a real difference in Pakistan's CS community.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8"
            >
              <h3 className="text-xl font-bold mb-4">Ready to make an impact?</h3>
              <p className="text-gray-300 mb-6">
                Choose from multiple volunteer roles, connect with like-minded students, 
                and help build the strongest CS community in Pakistan.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">Flexible</div>
                  <div className="text-gray-400">Time commitment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Real</div>
                  <div className="text-gray-400">Impact & experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-gray-400">Always</div>
                </div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
              onClick={() => document.querySelector('#volunteer-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now - It's Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Join 