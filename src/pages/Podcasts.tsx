import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock, Calendar, User, Headphones, Mail, Youtube, Users, Mic } from 'lucide-react'

const Podcasts: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const recentPodcasts = [
    {
      id: 1,
      title: "How to Do CS Without Losing Inner Peace in a Fast-Paced World",
      host: "Azan Waseem",
      guest: "Sami Ullah Shah",
      uploadDate: "June 15, 2025"
    },
    {
      id: 2,
      title: "Nauman Anwar: FAST, Telecom, Harvard, Business & Energy",
      host: "Azan Waseem", 
      guest: "Nauman Anwar",
      uploadDate: "May 20, 2025"
    },
    {
      id: 3,
      title: "From Pakistan to Ireland: The Journey of a Senior SWE",
      host: "Azan Waseem",
      guest: "Kashif Umair Liaqat",
      uploadDate: "April 28, 2025"
    },
    {
      id: 4,
      title: "Should CS Undergrads Pursue a Master's?",
      host: "Talha Asghar",
      guest: "Hamza Azhar",
      uploadDate: "March 10, 2025"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-black text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CS Connect <span className="text-gray-300">Podcasts</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real conversations with Pakistani tech professionals, students, and industry leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Our Podcasts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Connecting You with <span className="text-gray-600">Industry Leaders</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our podcasts feature in-depth conversations with successful professionals from both 
                  academia and industry who are excelling in their tech careers and serve as excellent 
                  mentors for the next generation of Pakistani computer scientists.
                </p>
                <p>
                  We invite people who have built remarkable careers, started successful companies, 
                  or are making significant contributions to the tech ecosystem. Our goal is to extract 
                  valuable insights, practical advice, and inspiring stories that can guide CS students 
                  in their academic and professional journeys.
                </p>
                <p>
                  Each episode is carefully crafted to ask the right questions that our community wants 
                  answers to - from technical career guidance to personal development, from startup 
                  stories to corporate success strategies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-black">Podcast Format</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-black">Platform: Google Meet</p>
                    <p className="text-gray-600 text-sm">High-quality video interviews with our guests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-black">Duration: 30-60 minutes</p>
                    <p className="text-gray-600 text-sm">Comprehensive discussions covering career journeys</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-black">Published on YouTube</p>
                    <p className="text-gray-600 text-sm">Available for the entire community to watch and learn</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Featured Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Want to Get Featured?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              If you want to get featured on our podcast or know someone who would be a great guest, 
              we'd love to hear from you! We're always looking for inspiring stories and valuable insights 
              to share with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:csconnectpakistan@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                csconnectpakistan@gmail.com
              </motion.a>
              <motion.a
                href="https://youtube.com/@csconnectpakistan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe to Our Channel
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-black mb-2">25+</div>
              <div className="text-gray-600">Episodes</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-black mb-2">10k+</div>
              <div className="text-gray-600">Total Views</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-black mb-2">500+</div>
              <div className="text-gray-600">YouTube Subscribers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6"
            >
              <div className="text-3xl font-bold text-black mb-2">20+</div>
              <div className="text-gray-600">Industry Guests</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Podcasts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Recent <span className="text-gray-600">Episodes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out our latest conversations with industry professionals and successful alumni
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-8">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-black group-hover:text-gray-700 transition-colors leading-tight">
                    {podcast.title}
                  </h3>

                  {/* Host and Guest */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <Mic className="w-4 h-4 mr-2" />
                      <span className="font-medium">Host:</span>
                      <span className="ml-1">{podcast.host}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-medium">Guest:</span>
                      <span className="ml-1">{podcast.guest}</span>
                    </div>
                  </div>

                  {/* Upload Date */}
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{podcast.uploadDate}</span>
                  </div>

                  {/* Listen Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 group/btn"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    <span>Listen Now</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Never Miss an Episode</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our YouTube channel and get notified whenever we release new episodes
            </p>
            <motion.a
              href="https://youtube.com/@csconnectpakistan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe on YouTube
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Podcasts