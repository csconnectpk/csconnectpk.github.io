import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, MessageSquare, Users, Book, Mic } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      title: 'General Questions',
      icon: MessageSquare,
      color: 'bg-blue-500',
      faqs: [
        {
          question: 'What is CS Connect Pakistan?',
          answer: 'CS Connect Pakistan is the largest computer science student community in Pakistan, connecting 2,000+ students from 50+ universities. We provide networking opportunities, educational resources, mentorship, and career guidance for CS students across the country.'
        },
        {
          question: 'How can I join CS Connect Pakistan?',
          answer: 'You can join through our WhatsApp community, Discord server, or by following us on social media platforms. Membership is completely free for all Pakistani CS students. Simply click on any of our social media links or contact us through our platforms.'
        },
        {
          question: 'Is CS Connect Pakistan only for specific universities?',
          answer: 'Not at all! We welcome students from all Pakistani universities. We currently have active members from 50+ universities including FAST, NUST, GIKI, LUMS, COMSATS, ITU, UET, and many others across Pakistan.'
        },
        {
          question: 'What are the benefits of joining the community?',
          answer: 'Members get access to networking opportunities, mentorship from industry professionals, career guidance, study resources, entry test preparation, exclusive events, job/internship opportunities, and a supportive community of like-minded students.'
        }
      ]
    },
    {
      title: 'Community & Membership',
      icon: Users,
      color: 'bg-green-500',
      faqs: [
        {
          question: 'How active is the community?',
          answer: 'Very active! Our WhatsApp community has 2,000+ members with daily discussions, our Discord server has 400+ active members, and we regularly host events, sessions, and networking opportunities. There\'s always something happening in our community.'
        },
        {
          question: 'Can industry professionals join as mentors?',
          answer: 'Absolutely! We have mentors from top companies like Meta, Google, Microsoft, and local tech companies. Industry professionals are welcome to join as mentors to guide students. Please reach out to us if you\'re interested in mentoring.'
        },
        {
          question: 'Do you organize physical events?',
          answer: 'Yes, we organize both virtual and physical events. Our recent events include masterclasses, tech talks, networking sessions, and collaborative projects. We plan events across different cities to ensure maximum participation.'
        },
        {
          question: 'How can I contribute to the community?',
          answer: 'There are many ways to contribute: share knowledge and resources, help fellow students with questions, participate in discussions, attend and promote events, create content, or even join our team. We always appreciate active community members!'
        }
      ]
    },
    {
      title: 'Services & Resources',
      icon: Book,
      color: 'bg-purple-500',
      faqs: [
        {
          question: 'What services does CS Connect Pakistan offer?',
          answer: 'We offer Python programming courses, entry test preparation sessions, study tools (UniCalc and FastMock), mentorship programs, career guidance, networking opportunities, and access to educational resources and events.'
        },
        {
          question: 'Are the courses and services free?',
          answer: 'Most of our basic services and community access are free. Some specialized courses or premium mentorship programs may have fees to cover costs and ensure quality. We always try to keep things accessible for students.'
        },
        {
          question: 'What are UniCalc and FastMock tools?',
          answer: 'UniCalc (unicalc.vercel.app) is a comprehensive calculator tool for university students, and FastMock (fastmock.vercel.app) is a mock API tool for developers. Both are free tools developed by our community to help students with their academic and development needs.'
        },
        {
          question: 'How can I access the Python programming course?',
          answer: 'Our Python course has helped 50+ students build real programming skills. You can inquire about enrollment through our WhatsApp community or Discord server. The course includes practical projects and hands-on learning.'
        }
      ]
    },
    {
      title: 'Podcasts & Content',
      icon: Mic,
      color: 'bg-red-500',
      faqs: [
        {
          question: 'What podcasts does CS Connect Pakistan have?',
          answer: 'We have 4 podcast episodes featuring industry professionals and community success stories: Masters Abroad Journey, Tech Career in Ireland with Kashif Umair Liaqat, Success Stories with Nauman Anwar, and Building CS Connect Pakistan with founder Azan Waseem.'
        },
        {
          question: 'Where can I listen to the podcasts?',
          answer: 'Our podcasts are available on our website and YouTube channel. You can find all episodes in the Podcasts section of our website with detailed descriptions and direct links to listen.'
        },
        {
          question: 'Can I be featured in a podcast episode?',
          answer: 'Yes! We feature community members who have inspiring stories, unique experiences, or valuable insights to share. If you have an interesting journey in tech, career achievements, or study abroad experiences, reach out to us through our social media channels.'
        },
        {
          question: 'Do you have a blog or written content?',
          answer: 'Yes, we maintain a tech blog with articles on programming, career advice, university guides, and industry insights. Our blog features contributions from community members and covers topics relevant to CS students in Pakistan.'
        }
      ]
    }
  ];

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
              <MessageSquare className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Frequently Asked Questions</span>
            </motion.div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gray-600">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about CS Connect Pakistan and our community
            </p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={2000} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={50} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-gray-400 text-sm">Free</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Browse by <span className="text-gray-600">Category</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Questions are organized by category to help you find what you're looking for quickly
            </p>
          </motion.div>

          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">{category.title}</h3>
              </div>

              {/* FAQs in Category */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex; // Unique index for each FAQ
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                      className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-black pr-4">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Can't find what you're looking for? Join our community and ask directly!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Join WhatsApp Community
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center border border-black text-black px-8 py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQ; 