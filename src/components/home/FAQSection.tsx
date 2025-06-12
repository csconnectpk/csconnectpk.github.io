import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Why should you choose us?",
      answer: "Unlike many providers in Pakistan who charge premium rates for basic quality work, we've identified this market gap and offer professional, high-quality development services at fair prices. Our team combines international standards with local expertise, ensuring you get exceptional value without compromising on quality. We believe in transparent pricing, clear communication, and delivering results that exceed expectations."
    },
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive web development, mobile app development, UI/UX design, e-commerce solutions, and custom software development. Our expertise spans across modern technologies including React, Node.js, Python, and mobile platforms."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We follow industry best practices including code reviews, automated testing, and continuous integration. Our development process includes regular client updates, milestone tracking, and thorough QA testing before delivery."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on complexity and requirements. We provide detailed project schedules during initial consultation, typically ranging from 4-12 weeks for standard projects. We pride ourselves on meeting agreed deadlines."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, updates, security patches, and ongoing optimization to ensure your solution continues to perform optimally."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain clear communication through dedicated project managers, regular progress updates, and scheduled check-ins. We use professional project management tools and provide direct access to our team throughout the development process."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our services, process, and commitment to quality
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white border-t">
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 