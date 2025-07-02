import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechCorp Solutions",
    rating: 5,
    text: "QuirkyDock delivered exceptional quality at a fraction of the cost. Their attention to detail and professionalism exceeded our expectations.",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Digital Innovations",
    rating: 5,
    text: "Working with QuirkyDock was a game-changer for our business. They transformed our ideas into a beautiful, functional application.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "StartupXYZ",
    rating: 5,
    text: "Incredible value for money! The team delivered a world-class product that rivals solutions costing 3x more from other agencies.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Wilson",
    company: "E-commerce Plus",
    rating: 5,
    text: "Fast delivery, excellent communication, and outstanding results. QuirkyDock is now our go-to development partner.",
    avatar: "DW"
  },
  {
    id: 5,
    name: "Lisa Zhang",
    company: "FinTech Ventures",
    rating: 5,
    text: "Their technical expertise combined with competitive pricing makes QuirkyDock the perfect choice for quality software development.",
    avatar: "LZ"
  }
];

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-3 sm:mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black/60 max-w-3xl mx-auto">
            Trusted by businesses worldwide for quality, reliability, and exceptional value
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Cards */}
          <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-[280px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
              >
                {/* Mobile Design - Clean layout */}
                <div className="block sm:hidden w-full max-w-lg mx-auto">
                  <div className="text-center space-y-4 px-2">
                    {/* Quote */}
                    <blockquote className="text-base leading-relaxed text-black/80 font-medium px-2">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="text-center space-y-2 pt-2">
                      <div className="font-semibold text-black text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-black/60 text-base">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Design */}
                <div className="hidden sm:block bg-white border border-black/10 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg shadow-black/5 max-w-4xl mx-auto">
                  <div className="text-center">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-black/80 mb-8 leading-relaxed font-medium">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-black">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-black/60">
                          {testimonials[currentIndex].company}
                        </div>
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
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white border border-black/10 rounded-full flex items-center justify-center hover:bg-black/5 transition-all duration-300 shadow-lg shadow-black/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white border border-black/10 rounded-full flex items-center justify-center hover:bg-black/5 transition-all duration-300 shadow-lg shadow-black/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-black scale-125'
                  : 'bg-black/30 hover:bg-black/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider; 