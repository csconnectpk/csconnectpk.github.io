import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar, User, ArrowRight, BookOpen } from 'lucide-react'

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Computer Science in Pakistan: A Complete Guide",
      excerpt: "Everything you need to know about pursuing computer science in Pakistan, from choosing the right university to building your first project. This comprehensive guide covers admission requirements, curriculum expectations, and career prospects.",
      author: "Ahmed Hassan",
      date: "December 18, 2024",
      readTime: "8 min read",
      category: "Career Guide",
      featured: true,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
      slug: "getting-started-cs-pakistan"
    },
    {
      id: 2,
      title: "Top 10 Programming Languages to Learn in 2024: A Pakistani Student's Perspective",
      excerpt: "Discover which programming languages are most valuable for Pakistani CS students. We analyze market demand, salary prospects, and learning resources available locally to help you make the right choice for your career.",
      author: "Fatima Khan",
      date: "December 15, 2024", 
      readTime: "6 min read",
      category: "Programming",
      featured: false,
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=400&fit=crop",
      slug: "top-programming-languages-2024"
    },
    {
      id: 3,
      title: "Landing Your First Tech Internship: Complete Guide for Pakistani Students",
      excerpt: "From building your resume to acing technical interviews, this guide covers everything you need to secure your first internship at top Pakistani tech companies like Careem, Daraz, and emerging startups.",
      author: "Muhammad Ali",
      date: "December 12, 2024",
      readTime: "10 min read", 
      category: "Internships",
      featured: false,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      slug: "first-tech-internship-guide"
    },
    {
      id: 4,
      title: "Building a Strong GitHub Portfolio: Projects That Get You Hired",
      excerpt: "Learn how to showcase your skills through meaningful projects that catch recruiters' attention. Includes project ideas, best practices for documentation, and examples from successful Pakistani developers.",
      author: "Sara Ahmed",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Portfolio", 
      featured: false,
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=600&h=400&fit=crop",
      slug: "github-portfolio-guide"
    }
  ]

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Header */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CS Connect <span className="text-gray-300">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Insights, guides, and stories from Pakistan's computer science community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold mb-4">
                Featured Article
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Latest from our community
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BookOpen className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Featured Article Image</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 group/btn"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* All Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              All Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of guides, tutorials, and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BookOpen className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">Article Image</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-gray-700 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed" style={{
                    display:'-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all duration-200 group/btn"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog 