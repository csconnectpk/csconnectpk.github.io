import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock, Calendar, User, Headphones } from 'lucide-react'

const Podcasts: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const podcasts = [
    {
      id: 1,
      title: "Breaking into Tech: A Journey from FAST to Silicon Valley",
      description: "Join us as we chat with Ali Hassan, a FAST graduate who now works at Google. He shares his journey, challenges, and advice for Pakistani CS students.",
      host: "Ahmed Khan",
      guest: "Ali Hassan",
      duration: "45 min",
      date: "December 20, 2024",
      thumbnail: "🎯",
      category: "Career Stories",
      listeners: "2.1k"
    },
    {
      id: 2,
      title: "Mastering Data Structures & Algorithms for Pakistani Students",
      description: "A deep dive into DSA concepts with practical examples. Perfect for students preparing for technical interviews at Pakistani and international companies.",
      host: "Fatima Malik",
      guest: "Dr. Sami Ullah",
      duration: "52 min", 
      date: "December 15, 2024",
      thumbnail: "📊",
      category: "Technical Deep Dive",
      listeners: "1.8k"
    },
    {
      id: 3,
      title: "Building Startups in Pakistan's Tech Ecosystem",
      description: "Exploring the challenges and opportunities of building tech startups in Pakistan with successful entrepreneurs who've been through the journey.",
      host: "Zara Ahmed",
      guest: "Muhammad Owais",
      duration: "38 min",
      date: "December 10, 2024", 
      thumbnail: "🚀",
      category: "Entrepreneurship",
      listeners: "1.5k"
    },
    {
      id: 4,
      title: "Women in Tech Pakistan: Breaking Barriers and Building Futures",
      description: "Inspiring stories from Pakistani women making their mark in technology, from engineers to entrepreneurs, and their advice for the next generation.",
      host: "Sara Khan",
      guest: "Ayesha Tariq",
      duration: "41 min",
      date: "December 5, 2024",
      thumbnail: "👩‍💻",
      category: "Inspiration",
      listeners: "2.3k"
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              CS Connect <span className="text-purple-600">Podcasts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real conversations with Pakistani tech professionals, students, and industry leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-purple-100">Episodes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="text-purple-100">Total Listens</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Community Members</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Podcast Episodes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {podcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Thumbnail and Category */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl">{podcast.thumbnail}</div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                      {podcast.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {podcast.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {podcast.description}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">Host: {podcast.host}</span>
                      <span>Guest: {podcast.guest}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{podcast.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="mr-4">{podcast.duration}</span>
                      <Headphones className="w-4 h-4 mr-2" />
                      <span>{podcast.listeners} listeners</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    <Play className="w-5 h-5" />
                    <span>Listen Now</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">More Episodes Every Week</h2>
            <p className="text-lg text-gray-600 mb-8">
              We release new episodes every week featuring inspiring stories, technical deep-dives, and career advice from the Pakistani tech community.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-700 rounded-lg">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
              New episodes every Tuesday
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Podcasts