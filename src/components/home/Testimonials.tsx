import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Real testimonials from CS Connect Pakistan members
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Mansoor Ali",
      university: "FAST Islamabad",
      content: "CS Connect has been incredibly helpful for me as an aspiring CS student. It guided me in IT fields, entry test prep, and discussions with seniors. I was a RWP board topper but had very little CS knowledge. I'm glad to be here, learning every day.",
      avatar: "MA"
    },
    {
      id: 2,
      name: "Mehreen",
      university: "Entry Test Student",
      content: "This has been like a daily tech magazine for me. Being a pre-med student, I had no idea about CS but this community made it easy to explore the field and solve my problems. Super thankful for the cooperative environment.",
      avatar: "M"
    },
    {
      id: 3,
      name: "Eisha",
      university: "Entry Test Student",
      content: "This community's insights and seniors' experiences helped shape my career. Especially during entry test season their mentorship really made a difference. I'm a noob person but I've learned so much. Thanks CS Connect — best support for students like me.",
      avatar: "E"
    },
    {
      id: 4,
      name: "Khadija",
      university: "Entry Test Student",
      content: "This community changed my life not just in studies but spiritually too. The advice, Islamic opinions, and motivation helped me learn to balance both deen and dunya. May Allah bless your efforts. ❤️",
      avatar: "K"
    },
    {
      id: 5,
      name: "Bareerah",
      university: "COMSATS Lahore",
      content: "This community gave me access to seniors in the industry. Their support helped clear my doubts and gave me confidence to move forward professionally.",
      avatar: "B"
    },
    {
      id: 6,
      name: "Rida Fatima",
      university: "UET",
      content: "I got the chance to interact with so many talented people. This community helped me realize how vast CS is and how many opportunities are out there. More power to the admins.",
      avatar: "RF"
    },
    {
      id: 7,
      name: "Hassaan Amin",
      university: "FAST Islamabad",
      content: "It helped me a lot especially in finding good people, making connections, and networking. So many things I discovered just by being part of it.",
      avatar: "HA"
    },
    {
      id: 8,
      name: "Waleed Ahmed",
      university: "Virtual University of Pakistan",
      content: "This community helped me with technical issues, guidance, motivation, and discipline. I got to connect with students from different universities which will help in the long run.",
      avatar: "WA"
    },
    {
      id: 9,
      name: "Amna Rajput",
      university: "Entry Test Student",
      content: "It opened my mind and showed me how little I knew about everything. Grateful to be a part of it.",
      avatar: "AR"
    },
    {
      id: 10,
      name: "Madiha Zaeem Dar",
      university: "ITU",
      content: "I'm new here but even in this short time I can see how helpful and kind everyone is. Excited to explore and grow with this community.",
      avatar: "MD"
    },
    {
      id: 11,
      name: "Abdul Hadi",
      university: "Govt. College Peshawar",
      content: "It helped me clear my vision and decide which field of Computer Science I want to study. Simple but important help.",
      avatar: "AH"
    },
    {
      id: 12,
      name: "Azka Waqas",
      university: "Entry Test Student",
      content: "I'm an intermediate student with no guidance. Being introverted made it worse. This group helped a lot. I love how only authentic info is shared. Notes are helpful and seniors guide us positively. I'm thankful to the creators.",
      avatar: "AW"
    }
  ]

  // Continuous auto-play without interruption
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Changed to 4 seconds for better pacing

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
            What Pakistani Students
            <br />
            <span className="relative inline-block">
              <span className="text-blue-600">Say About Us</span>
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Real experiences from students across Pakistan's universities
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Container */}
          <div className="relative min-h-[250px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Simple Clean Box Design */}
                <div className="w-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100">
                  <div className="text-center space-y-6">
                    {/* Message */}
                    <blockquote className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed font-medium">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="font-bold text-gray-900 text-lg sm:text-xl mb-1">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-blue-600 font-medium text-base sm:text-lg">
                        {testimonials[currentIndex].university}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 lg:-left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 lg:-right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8 sm:mt-10 lg:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 