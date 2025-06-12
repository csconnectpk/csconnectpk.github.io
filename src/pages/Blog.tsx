import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Computer Science in Pakistan: A Comprehensive Guide",
      excerpt: "Everything you need to know about pursuing CS education in Pakistan, from choosing the right university to building your first portfolio.",
      author: "Ahmed Hassan",
      date: "December 15, 2024",
      readTime: "8 min read",
      content: `
        Starting your Computer Science journey in Pakistan can be overwhelming with so many universities and career paths to choose from. This comprehensive guide will walk you through everything you need to know.

        **Choosing the Right University**
        Pakistan offers excellent CS programs across various institutions. FAST NUCES, NUST, LUMS, and GIKI are among the top choices, each with unique strengths. Consider factors like faculty expertise, industry connections, and campus culture when making your decision.

        **Essential Skills to Develop**
        - Programming fundamentals (Python, Java, C++)
        - Data structures and algorithms
        - Web development (HTML, CSS, JavaScript)
        - Database management
        - Problem-solving and logical thinking

        **Building Your Portfolio**
        Start building projects from day one. Create a GitHub profile, contribute to open source, and showcase your work. Pakistani tech companies value practical skills as much as academic credentials.

        **Networking and Community**
        Join communities like CS Connect Pakistan to connect with peers, find mentors, and stay updated with industry trends. Networking is crucial for internships and job opportunities.
      `,
      slug: "getting-started-cs-pakistan"
    },
    {
      id: 2,
      title: "Top 10 Programming Languages Every CS Student Should Learn in 2024",
      excerpt: "From Python to JavaScript, discover the most in-demand programming languages that will boost your career prospects in Pakistan's tech industry.",
      author: "Fatima Khan",
      date: "December 10, 2024",
      readTime: "6 min read",
      content: `
        The programming landscape is constantly evolving, and choosing the right languages to learn can significantly impact your career trajectory. Here are the top 10 languages every CS student should consider in 2024.

        **1. Python**
        Perfect for beginners, widely used in AI/ML, data science, and web development. High demand in Pakistani startups and tech companies.

        **2. JavaScript**
        Essential for web development, both frontend and backend (Node.js). Critical for modern web applications.

        **3. Java**
        Enterprise-level applications, Android development, and widely taught in Pakistani universities.

        **4. C++**
        System programming, competitive programming, and performance-critical applications.

        **5. SQL**
        Database management is crucial for any software application. Essential for backend development.

        **6. React/React Native**
        Frontend frameworks with high demand in the job market, especially for mobile app development.

        **7. Go**
        Growing popularity for cloud computing and microservices architecture.

        **8. Kotlin**
        Modern Android development and increasingly popular for backend services.

        **9. Swift**
        iOS development, though niche in Pakistan, offers high-paying opportunities.

        **10. Rust**
        System programming with a focus on safety and performance. Growing adoption in Pakistani tech scene.

        Start with Python or JavaScript, then expand based on your interests and career goals.
      `,
      slug: "top-programming-languages-2024"
    },
    {
      id: 3,
      title: "How to Land Your First Tech Internship as a CS Student in Pakistan",
      excerpt: "Practical tips and strategies to secure internships at top tech companies in Pakistan, from application to interview preparation.",
      author: "Muhammad Ali",
      date: "December 5, 2024",
      readTime: "10 min read",
      content: `
        Landing your first tech internship in Pakistan requires strategy, preparation, and persistence. Here's a comprehensive guide to help you succeed.

        **When to Start Applying**
        Begin your search 3-4 months before your desired start date. Most Pakistani companies start their internship programs in summer (May-August) and winter (December-February).

        **Where to Apply**
        - Tech Giants: Systems Limited, NetSol, Teradata, IBM Pakistan
        - Startups: Careem, Foodpanda, Daraz, Tez Financial Services
        - E-commerce: Daraz, OLX Pakistan, PakWheels
        - Fintech: Tez, JazzCash, EasyPaisa, Oraan

        **Building Your Application**
        1. **Resume**: Keep it one page, highlight projects and technical skills
        2. **Portfolio**: Showcase 2-3 projects with live demos and GitHub links
        3. **Cover Letter**: Customize for each company, show genuine interest

        **Technical Preparation**
        - Practice coding problems on LeetCode, HackerRank
        - Review data structures and algorithms
        - Build projects relevant to the company's domain
        - Prepare for system design basics (for senior positions)

        **Soft Skills Matter**
        Pakistani companies value communication skills, teamwork, and cultural fit. Practice explaining technical concepts in simple terms.

        **Interview Process**
        Most companies follow: Application → Phone Screen → Technical Round → Final Interview
        Be prepared for both technical and behavioral questions.

        **Networking Tips**
        - Attend tech meetups in Karachi, Lahore, Islamabad
        - Connect with professionals on LinkedIn
        - Join CS Connect Pakistan for peer support and opportunities
        - Participate in hackathons and coding competitions

        Remember, rejection is part of the process. Learn from each experience and keep improving.
      `,
      slug: "first-tech-internship-pakistan"
    },
    {
      id: 4,
      title: "The Future of AI and Machine Learning in Pakistan's Tech Ecosystem",
      excerpt: "Exploring the growing AI/ML landscape in Pakistan, emerging opportunities, and how CS students can prepare for this exciting field.",
      author: "Dr. Sara Ahmed",
      date: "November 30, 2024",
      readTime: "12 min read",
      content: `
        Pakistan's AI and Machine Learning ecosystem is experiencing unprecedented growth, creating exciting opportunities for the next generation of computer scientists.

        **Current State of AI in Pakistan**
        Pakistan ranks among the top countries for AI development talent globally. Companies like Mindbridge, Afiniti, and local startups are leveraging AI for various applications.

        **Key Sectors Adopting AI**
        - **Healthcare**: Diagnostic imaging, drug discovery, telemedicine
        - **Finance**: Fraud detection, algorithmic trading, credit scoring
        - **Agriculture**: Crop monitoring, precision farming, yield prediction
        - **E-commerce**: Recommendation systems, price optimization
        - **Telecommunications**: Network optimization, customer service automation

        **Emerging Opportunities**
        1. **Natural Language Processing**: Urdu language processing, chatbots
        2. **Computer Vision**: Security systems, autonomous vehicles
        3. **Predictive Analytics**: Business intelligence, market forecasting
        4. **Robotics**: Industrial automation, service robots

        **Skills to Develop**
        - **Mathematics**: Statistics, linear algebra, calculus
        - **Programming**: Python, R, TensorFlow, PyTorch
        - **Data Handling**: Pandas, NumPy, SQL, data visualization
        - **Cloud Platforms**: AWS, Google Cloud, Azure ML services
        - **Domain Knowledge**: Understanding of business applications

        **Educational Resources**
        - Online courses: Coursera, edX, Udacity
        - Local bootcamps: Data Science Pakistan, AI Pakistan
        - University programs: LUMS, FAST, NUST offer specialized AI tracks
        - Research opportunities: Join lab projects, publish papers

        **Building Your AI Portfolio**
        1. Start with simple projects (house price prediction, image classification)
        2. Participate in Kaggle competitions
        3. Contribute to open-source AI projects
        4. Create end-to-end ML applications
        5. Document your learning journey

        **Career Paths**
        - Data Scientist
        - Machine Learning Engineer
        - AI Research Scientist
        - Product Manager (AI/ML)
        - AI Consultant

        **Challenges and Solutions**
        While Pakistan faces challenges like limited datasets and research funding, the government's Digital Pakistan initiative and growing startup ecosystem are creating new opportunities.

        **Getting Started**
        Begin with Andrew Ng's Machine Learning course, practice with real datasets, and join AI communities. The field is vast, but with dedication and the right resources, Pakistani CS students can become global AI leaders.

        The future is bright for AI in Pakistan. Start your journey today!
      `,
      slug: "future-ai-ml-pakistan"
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
              CS Connect <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and stories from Pakistan's CS community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="mr-2">Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">More Articles Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're constantly adding new content to help CS students succeed. Stay tuned for more tutorials, career guides, and industry insights.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-lg">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              New articles published weekly
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog 