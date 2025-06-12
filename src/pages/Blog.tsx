import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Star, Clock, Eye, Share2, TrendingUp } from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Career Guidance', 'Programming', 'AI & Machine Learning', 'University Life', 'Industry Insights', 'Community Updates']

  const blogPosts = [
    {
      id: 1,
      title: 'From FAST to Meta: A Pakistani Developer\'s Journey to Silicon Valley',
      excerpt: 'How Siraj Qazi, one of our mentors, navigated from FAST NUCES to landing a software engineer role at Meta. Insights on interview preparation, visa process, and cultural adaptation.',
      content: 'Full detailed story about the journey...',
      author: 'Siraj Qazi',
      authorRole: 'Senior Mentor - Meta (Facebook)',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      authorLinkedin: 'https://linkedin.com/in/siraj-qazi',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'Career Guidance',
      tags: ['Career', 'Silicon Valley', 'Meta', 'FAST NUCES'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
      featured: true,
      views: 2840,
      likes: 186
    },
    {
      id: 2,
      title: 'AI & DevOps Session Recap: Key Takeaways from Sami Ullah Shah',
      excerpt: 'Comprehensive recap of our recent expert session with FAST lecturer Sami Ullah Shah, covering cutting-edge AI trends, DevOps best practices, and real-world project insights.',
      content: 'Detailed session recap...',
      author: 'Azan Waseem',
      authorRole: 'Founder & CEO',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      authorLinkedin: 'https://linkedin.com/in/azan-waseem',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'DevOps', 'Expert Session', 'FAST'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      featured: false,
      views: 1920,
      likes: 124
    },
    {
      id: 3,
      title: 'Complete Guide to NUST, FAST, and GIKI Admissions for CS Students',
      excerpt: 'Everything you need to know about getting into Pakistan\'s top CS programs. Admission requirements, test preparation, interviews, and insider tips from current students.',
      content: 'Comprehensive admission guide...',
      author: 'Muhammad Owais',
      authorRole: 'Technical Advisor - Google',
      authorImage: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400',
      authorLinkedin: 'https://linkedin.com/in/muhammad-owais',
      publishDate: '2025-01-10',
      readTime: '12 min read',
      category: 'University Life',
      tags: ['Admissions', 'NUST', 'FAST', 'GIKI', 'University Guide'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      featured: true,
      views: 3450,
      likes: 298
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 5)

  const BlogCard: React.FC<{ post: any }> = ({ post }) => {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
      >
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-white hover:text-white/90 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Author and Date */}
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-6 h-6 rounded-full"
              />
              <span>{post.author}</span>
            </div>
            <span>{post.publishDate}</span>
          </div>

          {/* Read More Link */}
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium"
          >
            Read Article
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.div>
        </div>
      </motion.article>
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
              <BookOpen className="w-5 h-5 mr-3 text-white" />
              <span className="text-base font-medium">CS Connect Blog</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            >
              <span className="block">Knowledge</span>
              <span className="block text-gray-400">Hub</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16"
            >
              Insights, tutorials, and career guidance from Pakistan's premier CS community
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-3xl mx-auto"
            >
              {[
                { value: 10, label: 'Total Articles', suffix: 'K+' },
                { value: 3, label: 'Featured Posts', suffix: '' },
                { value: 500, label: 'Blog Readers', suffix: '+' },
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

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 backdrop-blur-sm"
                />
                <BookOpen className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
              Featured <span className="text-gray-600">Articles</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Hand-picked articles featuring the most valuable insights for Pakistani CS students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-black/20"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    <AnimatedCounter value={post.likes} />
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold text-black mb-3 leading-snug group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Eye className="w-3 h-3 mr-1" />
                      <AnimatedCounter value={post.views} />
                    </div>
                    <button className="text-black font-medium text-sm hover:text-gray-700 transition-colors flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & All Posts */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
              Browse by <span className="text-gray-600">Category</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* All Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Posts Sidebar */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
                  Latest <span className="text-gray-600">Updates</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Stay updated with the latest from our community, including career insights, 
                  technical tutorials, and success stories from Pakistani CS students.
                </p>
                
                <div className="grid gap-6">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-black/20"
                    >
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-black mb-2 leading-snug">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.publishDate}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-6 text-black flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Popular Articles
                </h3>
                
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={post.id} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-black text-sm leading-snug mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Eye className="w-3 h-3 mr-1" />
                          {post.views.toLocaleString()} views
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-black text-white p-6 rounded-2xl mt-8"
              >
                <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Get weekly updates on new articles, community events, and career opportunities.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                  />
                  <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Contribute to Our Blog?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Share your knowledge, experiences, and insights with 1,600+ Pakistani CS students. 
              Help build our knowledge hub together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Submit Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-lg flex items-center justify-center"
              >
                Join Community
                <Share2 className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Blog 