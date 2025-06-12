import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Play, Calendar, Users, ExternalLink, Youtube, Clock, Star, ArrowRight } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'

const Events: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      title: 'Masters Abroad Journey: Learning & Growth Beyond Borders',
      description: 'An inspiring conversation between Talha Asghar and a student pursuing masters abroad, discussing challenges, opportunities, and experiences of international education.',
      host: 'Talha Asghar',
      guest: 'International Masters Student',
      date: 'January 15, 2025',
      duration: '45 min',
      viewers: '3.2K',
      tags: ['Education', 'International', 'Masters', 'Career'],
      coverImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800',
      youtubeUrl: 'https://youtube.com/watch?v=example1',
      featured: true,
      gradient: 'from-gray-900 to-black'
    },
    {
      id: 2,
      title: 'Tech Career in Ireland: Kashif Umair Liaqat\'s Software Engineering Journey',
      description: 'Exclusive interview with Kashif Umair Liaqat about building a successful software engineering career in Ireland, from Pakistan to European tech scene.',
      host: 'Azan Waseem',
      guest: 'Kashif Umair Liaqat',
      date: 'January 12, 2025',
      duration: '52 min',
      viewers: '2.9K',
      tags: ['Career', 'Europe', 'Software Engineering', 'Immigration'],
      coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      youtubeUrl: 'https://youtube.com/watch?v=example2',
      featured: false,
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      id: 3,
      title: 'Success Stories with Nauman Anwar: Building Excellence in Tech',
      description: 'Inspiring conversation with Nauman Anwar, a highly successful tech professional sharing insights on career growth, leadership, and achieving excellence.',
      host: 'Talha Asghar',
      guest: 'Nauman Anwar',
      date: 'January 10, 2025',
      duration: '38 min',
      viewers: '4.1K',
      tags: ['Leadership', 'Success', 'Tech Industry', 'Mentorship'],
      coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      youtubeUrl: 'https://youtube.com/watch?v=example3',
      featured: true,
      gradient: 'from-black to-gray-800'
    },
    {
      id: 4,
      title: 'Building CS Connect Pakistan: From Vision to 2000+ Community',
      description: 'Behind-the-scenes conversation with founder Azan Waseem about building Pakistan\'s largest CS community, reaching 2000+ members from 50+ universities.',
      host: 'Talha Asghar',
      guest: 'Azan Waseem',
      date: 'January 5, 2025',
      duration: '42 min',
      viewers: '3.8K',
      tags: ['Community Building', 'Entrepreneurship', 'Student Leadership', 'Pakistan'],
      coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      youtubeUrl: 'https://youtube.com/watch?v=example4',
      featured: false,
      gradient: 'from-gray-900 to-black'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const PodcastCard: React.FC<{ event: any; index: number; setHoveredCard: (index: number | null) => void }> = ({ 
    event, 
    index, 
    setHoveredCard 
  }) => {
    return (
      <motion.div
        variants={itemVariants}
        onHoverStart={() => setHoveredCard(index)}
        onHoverEnd={() => setHoveredCard(null)}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${event.gradient} border border-white/10 group`}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video">
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-white/90 transition-colors">
            {event.title}
          </h3>

          {/* Host and Guest */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Users className="w-4 h-4" />
            <span>{event.host}</span>
            <span className="text-gray-500">•</span>
            <span>{event.guest}</span>
          </div>

          {/* Date and Duration */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{event.duration}</span>
            </div>
          </div>

          {/* Watch Button */}
          <a
            href={event.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white group/link"
          >
            <Youtube className="w-4 h-4" />
            Watch on YouTube
            <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* Floating Particles */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-colors duration-300"
            >
              <Play className="w-5 h-5 mr-3 text-white" />
              <span className="text-base font-medium">CS Connect Podcasts</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            >
              <span className="block">Inspiring</span>
              <span className="block text-gray-400">Conversations</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16"
            >
              Connecting Pakistani CS students with industry leaders through authentic stories and career insights
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-3xl mx-auto"
            >
              {[
                { value: 14, label: 'Total Views', suffix: 'K+' },
                { value: 4, label: 'Podcasts', suffix: '' },
                { value: 160, label: 'Subscribers', suffix: '+' },
                { value: 2000, label: 'Community', suffix: '+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="https://youtube.com/@csconnectpakistan"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-100 shadow-2xl hover:shadow-white/20"
            >
              <Youtube className="w-6 h-6 mr-3" />
              Watch Our Podcasts
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Podcasts Section */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 text-black">
              Our <span className="text-gray-600">Podcasts</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deep conversations with successful Pakistani professionals sharing their journey from Pakistan to global success
            </p>
          </motion.div>

          {/* Podcasts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {events.map((event, index) => (
              <PodcastCard key={event.id} event={event} index={index} setHoveredCard={setHoveredCard} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Join Our Growing <span className="text-gray-600">Community</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Subscribe to our YouTube channel and be part of Pakistan's largest CS community. 
              Never miss inspiring conversations with industry leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://youtube.com/@csconnectpakistan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-800 shadow-xl"
              >
                <Youtube className="w-6 h-6 mr-3" />
                Subscribe Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              
              <motion.a
                href="/join"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-transparent text-black border-2 border-black rounded-full font-bold text-lg transition-all duration-300 hover:bg-black hover:text-white"
              >
                <Users className="w-6 h-6 mr-3" />
                Join Community
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Events