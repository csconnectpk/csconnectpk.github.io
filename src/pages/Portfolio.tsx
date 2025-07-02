import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, GraduationCap, ExternalLink, Code, Mic, Globe } from 'lucide-react'

const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      title: "Community Growth",
      description: "From 0 to 1,600+ members in just 6 months",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
      stats: "1,600+ Members",
      icon: Users,
      date: "2024-2025"
    },
    {
      title: "Multi-Platform Presence",
      description: "Active community across WhatsApp, Discord, Instagram, YouTube, and csconnect.pk",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600",
      stats: "5 Platforms",
      icon: Globe,
      date: "2025"
    },
    {
      title: "University Network",
      description: "Students from Pakistan's top 50+ universities including FAST, NUST, GIKI, LUMS",
      image: "https://images.unsplash.com/photo-1523050854-b33ff0c44a43?w=600",
      stats: "50+ Universities",
      icon: GraduationCap,
      date: "2025"
    },
    {
      title: "Expert Sessions",
      description: "AI masterclass with FAST lecturer Sami Ullah Shah",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600",
      stats: "200+ Attendees",
      icon: Mic,
      date: "June 2025"
    }
  ];

  const studentProjects = [
    {
      title: "AI-Powered Study Assistant",
      author: "Ahmed Khan - FAST NUCES",
      description: "Machine learning project helping students with personalized study recommendations",
      tech: ["Python", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600"
    },
    {
      title: "University Hub App",
      author: "Fatima Ali - LUMS",
      description: "Mobile app connecting students across different universities in Pakistan",
      tech: ["React Native", "Firebase", "Node.js"],
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600"
    },
    {
      title: "CS Career Portal",
      author: "Hassan Shah - NUST",
      description: "Web platform for CS internships and job opportunities in Pakistan",
      tech: ["Next.js", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
    },
    {
      title: "Code Collaboration Tool",
      author: "Zara Ahmed - GIKI",
      description: "Real-time code sharing and review platform for student teams",
      tech: ["Vue.js", "Socket.io", "Express"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600"
    }
  ];

  const communityImpact = [
    { label: "Members Connected", value: "1,600+", icon: Users },
    { label: "Universities Reached", value: "50+", icon: GraduationCap },
    { label: "Expert Sessions", value: "25+", icon: Mic },
    { label: "Student Projects", value: "100+", icon: Code },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden pt-16">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 mb-6 sm:mb-8 shadow-sm">
              <Code className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mr-2" />
              <span className="text-xs sm:text-sm font-bold text-purple-700 tracking-wide">Our Impact</span>
            </div>

            {/* MUCH LARGER main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
              Showcasing Community
              <br />
              <span className="relative inline-block ml-3">
                <span className="text-blue-600">Growth & Impact</span>
                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </span>
            </h1>

            {/* Better subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              Celebrating the incredible growth, projects, and achievements of CS Connect Pakistan's thriving community
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
              <a href="#impact">
                <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                  <Code className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                  View Projects
                </button>
              </a>
              
              <a href="/join">
                <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                  <Users className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                  Join Community
                </button>
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
              <div className="text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  2,000+
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Members Connected
                </div>
              </div>
              
              <div className="text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Universities
                </div>
              </div>

              <div className="col-span-2 lg:col-span-1 text-center p-3 sm:p-4 lg:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                  100+
                </div>
                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                  Student Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Stats */}
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
              Our Impact <span className="text-gray-600">in Numbers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityImpact.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-black/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-black mb-2">{item.value}</div>
                <div className="text-gray-600 text-sm font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Achievements */}
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
              Major <span className="text-gray-600">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Milestones that define our journey from a WhatsApp group to Pakistan's premier CS community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                    {achievement.date}
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects Showcase */}
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
              Student <span className="text-gray-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative projects created by our community members across different universities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {studentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-black/20"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">{project.author}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Showcase Your Project?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join our community and share your amazing projects with 1,600+ CS students across Pakistan
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Join WhatsApp Community
              </motion.button>
              <motion.a
                href="https://csconnect.pk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-lg flex items-center justify-center"
              >
                Visit csconnect.pk
                <ExternalLink className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Portfolio