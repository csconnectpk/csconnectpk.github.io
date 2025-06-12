import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, Users, Rocket, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Team: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreTeam = [
    {
      name: 'Azan Waseem',
      role: 'Founder & Community Lead',
      university: 'FAST NUCES Islamabad',
      year: '3rd Year CS',
      bio: 'Started CS Connect Pakistan from his dorm room because he believed Pakistani CS students deserved a space to connect and grow together.',
      skills: ['Community Building', 'Leadership', 'Event Management'],
      github: 'https://github.com/azanwaseem',
      linkedin: 'https://linkedin.com/in/azanwaseem',
      highlight: 'The one who started it all'
    },
    {
      name: 'Siraj Qazi',
      role: 'Technical Mentor & Advisor',
      university: 'Industry Professional',
      year: 'Software Engineer',
      bio: 'Senior developer who guides our community with real-world industry insights and helps students navigate their tech careers.',
      skills: ['Software Development', 'Mentorship', 'Career Guidance'],
      github: 'https://github.com/sirajqazi',
      linkedin: 'https://linkedin.com/in/sirajqazi',
      highlight: 'Our industry connection'
    },
    {
      name: 'Talha Asghar',
      role: 'Content & Strategy Lead',
      university: 'FAST NUCES',
      year: '4th Year CS',
      bio: 'Manages our content strategy and helps shape the direction of our community initiatives. Always thinking about what students actually need.',
      skills: ['Content Strategy', 'Project Management', 'Community Growth'],
      github: 'https://github.com/talhaasghar',
      linkedin: 'https://linkedin.com/in/talhaasghar',
      highlight: 'The strategist behind our growth'
    },
    {
      name: 'Khawaja Owais',
      role: 'Operations & Outreach',
      university: 'NUST Islamabad',
      year: '3rd Year CS',
      bio: 'Handles our day-to-day operations and university outreach. He makes sure every student feels welcome in our community.',
      skills: ['Operations', 'University Relations', 'Student Outreach'],
      github: 'https://github.com/khawajaowais',
      linkedin: 'https://linkedin.com/in/khawajaowais',
      highlight: 'Our connection to universities'
    }
  ]

  const openRoles = [
    {
      title: 'Social Media Manager',
      description: 'Help us grow our Instagram, LinkedIn, and YouTube presence. Perfect for someone creative who understands student culture.',
      time: '5-10 hours/week',
      skills: ['Content Creation', 'Social Media', 'Design']
    },
    {
      title: 'University Ambassadors',
      description: 'Represent CS Connect Pakistan at your university. Help us connect with more students and organize local meetups.',
      time: 'Flexible',
      skills: ['Communication', 'Event Planning', 'Networking']
    },
    {
      title: 'Technical Content Writer',
      description: 'Write blogs about programming, career advice, and student life. Share your knowledge with the community.',
      time: '3-5 hours/week',
      skills: ['Technical Writing', 'Programming', 'Communication']
    },
    {
      title: 'Event Coordinator',
      description: 'Help organize our webinars, workshops, and community events. Great for someone who loves bringing people together.',
      time: '5-8 hours/week',
      skills: ['Event Planning', 'Coordination', 'Communication']
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

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">The Team</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Students Who <span className="text-gray-300">Took Initiative</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              What happens when a few CS students decide to stop waiting and start building the community Pakistan needed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branded Story Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">
              Why We <span className="text-gray-600">Started This</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">The Problem</h3>
              <p className="text-gray-600 leading-relaxed">
                Pakistani CS students were isolated. Everyone was grinding alone, missing out on opportunities, 
                and struggling without proper guidance or community support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">The Initiative</h3>
              <p className="text-gray-600 leading-relaxed">
                Instead of waiting for someone else to solve it, we decided to take action. 
                Started with a simple WhatsApp group and grew it into Pakistan's largest CS student community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">The Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Build a thriving ecosystem where every CS student in Pakistan has access to opportunities, 
                mentorship, and a supportive community that helps them succeed.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white p-8 md:p-12 rounded-3xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Join the Team That's Building the Future
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We believe that when students take initiative, incredible things happen. 
              If you want to be part of building Pakistan's tech future, we want you on our team.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-lg font-semibold">Ready to make an impact?</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Meet the <span className="text-gray-600">Core Team</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The students who turned an idea into Pakistan's largest CS community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-black/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                    <p className="text-gray-600 font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-2">{member.university} • {member.year}</p>
                    <p className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block">
                      {member.highlight}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Want to <span className="text-gray-600">Join Us?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're always looking for passionate students who want to make a difference. 
              Here are some ways you can contribute to our mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-black/20 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-black mb-3">{role.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Time Commitment: {role.time}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black text-white p-8 md:p-12 rounded-3xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Join the Team?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Send us an email telling us about yourself, what role interests you, 
              and why you want to be part of CS Connect Pakistan.
            </p>
            
            <motion.a
              href="mailto:csconnectpakistan@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              csconnectpakistan@gmail.com
            </motion.a>
            
            <p className="text-gray-400 text-sm mt-4">
              Include "Join Team" in your subject line
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Team 