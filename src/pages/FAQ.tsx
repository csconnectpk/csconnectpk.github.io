import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What is CS Connect Pakistan?",
      answer: "CS Connect Pakistan is the largest computer science student community in Pakistan, connecting 2000+ students from 50+ universities. We provide networking opportunities, mentorship, career guidance, and resources to help CS students succeed in their academic and professional journeys."
    },
    {
      question: "How can I join CS Connect Pakistan?",
      answer: "You can join our community through multiple platforms: WhatsApp (2000+ members), Discord (400+ members), Instagram, and YouTube. Simply visit our contact page or click on any of our social media links to get started. Membership is completely free and open to all CS students in Pakistan."
    },
    {
      question: "Who can join this community?",
      answer: "CS Connect Pakistan is open to all computer science students, recent graduates, and professionals in Pakistan. Whether you're from FAST, NUST, LUMS, GIKI, COMSATS, or any other university, you're welcome to join our community. We also welcome students from related fields like software engineering, data science, and IT."
    },
    {
      question: "What benefits do I get from joining?",
      answer: "Members get access to: networking with 2000+ students from top universities, mentorship from industry professionals, exclusive job and internship opportunities, study groups and project collaborations, technical workshops and sessions, career guidance, and access to our resource library with tutorials and materials."
    },
    {
      question: "Is there any membership fee?",
      answer: "No! CS Connect Pakistan is completely free to join and participate in. We believe in accessible education and networking opportunities for all Pakistani CS students, regardless of their financial background. All our services, resources, and events are provided at no cost."
    },
    {
      question: "What kind of events do you organize?",
      answer: "We organize various events including: technical workshops on programming languages and frameworks, career guidance sessions with industry professionals, podcast recordings with successful alumni, study groups for exam preparation, hackathons and coding competitions, networking meetups in major cities, and guest lectures from tech industry leaders."
    },
    {
      question: "How can I get featured on your podcast?",
      answer: "We invite students, alumni, and professionals who have interesting stories or expertise to share. If you've achieved something notable in tech, started a successful career, or have valuable insights for CS students, email us at csconnectpakistan@gmail.com with your background and story. We're always looking for inspiring voices for our community."
    },
    {
      question: "Do you help with job placements?",
      answer: "While we don't directly place students in jobs and haven't facilitated any placements yet, we provide extensive career support including: sharing job and internship opportunities, connecting students with industry professionals, resume and interview preparation guidance, referrals through our alumni network, and career counseling sessions. We're focused on building the foundation and resources to support our members' career journeys."
    },
    {
      question: "What universities are part of your community?",
      answer: "Our community includes students from 50+ universities across Pakistan, including top institutions like FAST NUCES, NUST, LUMS, GIKI, COMSATS, ITU, PUCIT, UET, IBA Karachi, UCP, Habib University, PIEAS, AIR University, Bahria University, and many more. We welcome students from all accredited computer science programs."
    },
    {
      question: "How can I contribute to the community?",
      answer: "There are many ways to contribute: share job opportunities and resources, mentor junior students, participate in discussions and help answer questions, organize or speak at events, write blog posts or create educational content, refer talented individuals to the community, and help moderate our platforms. We value every member's contribution to making our community better."
    },
    {
      question: "Are there any community guidelines?",
      answer: "Yes, we maintain a respectful and professional environment. Our guidelines include: be respectful and supportive to all members, keep discussions relevant to CS and tech careers, no spam or excessive self-promotion, help others when you can, maintain professional language, respect privacy and confidentiality, and follow platform-specific rules. These help us maintain a positive learning environment for everyone."
    },
    {
      question: "How can I stay updated with community activities?",
      answer: "Follow us on all our platforms: join our WhatsApp group for daily updates and discussions, follow our Instagram for community highlights and announcements, subscribe to our YouTube channel for educational content and podcasts, join our Discord server for real-time chat and study groups, and check our website regularly for blog posts and event updates."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-black text-white pt-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gray-300">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about CS Connect Pakistan
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <span className="text-lg font-semibold text-black pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
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

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find the answer you're looking for? We're here to help.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 