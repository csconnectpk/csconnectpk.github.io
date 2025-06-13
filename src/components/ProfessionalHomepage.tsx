import React, { useEffect, Suspense, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  Mic, 
  Globe, 
  GraduationCap,
  ArrowRight,
  Trophy,
  Briefcase,
  MessageCircle,
  Instagram,
  Youtube,
  ExternalLink,
  Sparkles,
  Linkedin,
  User
} from 'lucide-react';

// Social Media Icons as SVG Components - Simple Outlined Style
const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const DiscordIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M9.5 12h5m-5 0a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2m-5 0v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5"/>
    <path d="M7 8.5V7a5 5 0 0 1 10 0v1.5"/>
  </svg>
)

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"/>
  </svg>
)

// Optimized 3D Scene Component
const Spline3DScene: React.FC = () => {
  const [showFallback, setShowFallback] = React.useState(true);

  React.useEffect(() => {
    // Hide fallback after 3 seconds to prevent indefinite loading
    const timer = setTimeout(() => {
      setShowFallback(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
          {showFallback && (
            <div className="flex space-x-2 z-10">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200"></div>
            </div>
          )}
        </div>
      }>
        <div className="relative w-full h-full">
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* 3D Scene */}
          <iframe 
            src="https://my.spline.design/untitled-bfecbd8a9e5f12d3b4fde5776e3a1d69/"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ background: 'transparent' }}
            className="pointer-events-none opacity-30 absolute inset-0"
            title="3D Background Scene"
            onLoad={() => {}}
            loading="lazy"
          />
        </div>
      </Suspense>
    </div>
  );
};

// Improved animated counter
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / 60;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-bold">
      {count}{suffix}
    </span>
  );
};

// What we actually do for students
const features = [
  { 
    icon: Users, 
    title: 'Student Community',
    description: 'A place where 2,000+ CS students from different universities hang out, help each other, and make friends',
    stats: '2,000+'
  },
  { 
    icon: Mic, 
    title: 'Student Sessions',
    description: 'Seniors share their experiences, juniors ask questions, and we all learn from each other',
    stats: '25+'
  },
  { 
    icon: GraduationCap, 
    title: 'All Universities Welcome',
    description: 'Whether you\'re from FAST, NUST, or any other university in Pakistan - you belong here',
    stats: '50+'
  },
  { 
    icon: Globe, 
    title: 'Where We Hang Out',
    description: 'Find us on WhatsApp for daily chats, Discord for study sessions, and YouTube for learning content',
    stats: '4'
  },
  { 
    icon: BookOpen, 
    title: 'Study Together',
    description: 'Share assignments help, project ideas, and learn programming together',
    stats: '100+'
  },
  { 
    icon: Briefcase, 
    title: 'Help Each Other',
    description: 'Share internship openings, help with interview prep, and guide each other through career decisions',
    stats: '50+'
  }
];

// Core team members (only 4 as requested) - removed photos, added descriptions and social links
const teamMembers = [
  {
    name: 'Azan Waseem',
    role: 'Community Lead',
    university: 'FAST Islamabad',
    description: 'CS student at FAST Islamabad and community lead with main roles in development, podcasting, and leading the community. Built Pakistan\'s largest CS community from a simple WhatsApp community.',
    github: 'https://github.com/azannw',
    linkedin: 'https://linkedin.com/in/azanw'
  },
  {
    name: 'Maryam Ahmed',
    role: 'Design Lead',
    description: 'The creative force behind CS Connect Pakistan who leads all designing initiatives and handles graphics for our community.',
    linkedin: 'maryam-a-24114733a'
  },
  {
    name: 'Siraj Qazi',
    role: 'Technical Mentor',
    university: 'NUST Graduate',
    description: 'EE graduate from NUST working as a Data Scientist with Seeloz. Serves as technical mentor and advisor for the community, helping students navigate career transitions.',
    github: 'https://github.com/qazi0',
    linkedin: 'https://linkedin.com/in/siraj-qazi'
  },
  {
    name: 'Talha Asghar',
    role: 'Technical Advisor',
    university: 'NUST Graduate',
    description: 'MS graduate from NUST working as a Backend Engineer. Technical advisor and senior who helps with technical guidance and mentorship for community members.',
    github: 'https://github.com/iamtalhaasghar',
    linkedin: 'https://linkedin.com/in/iamtalhaasghar'
  },
  {
    name: 'Khawaja Owais',
    role: 'Community Manager',
    university: 'FAST Graduate',
    description: 'Data Science graduate from FAST who helps in managing community operations and activities. Focuses on maintaining engagement and supporting student initiatives.',
    github: 'https://github.com/the-muhammad-owais',
    linkedin: 'https://linkedin.com/in/the-muhammad-owais'
  }
];

// Platform stats with updated member counts
const platformStats = [
  { platform: 'WhatsApp', members: '2,000+', icon: WhatsAppIcon },
  { platform: 'Discord', members: '400+', icon: DiscordIcon },
  { platform: 'Instagram', members: '150+', icon: InstagramIcon },
  { platform: 'YouTube', members: '160+', icon: YouTubeIcon },
];

// Student reviews for the slider - Real testimonials from CS Connect Pakistan members
const studentReviews = [
  {
    name: 'Muhammad Mansoor Ali',
    university: 'FAST Islamabad',
    review: 'CS Connect has been incredibly helpful for me as an aspiring CS student. It guided me in IT fields, entry test prep, and discussions with seniors. I was a RWP board topper but had very little CS knowledge. I\'m glad to be here, learning every day.'
  },
  {
    name: 'Mehreen',
    university: 'Entry Test Student',
    review: 'This has been like a daily tech magazine for me. Being a pre-med student, I had no idea about CS but this community made it easy to explore the field and solve my problems. Super thankful for the cooperative environment.'
  },
  {
    name: 'Eisha',
    university: 'Entry Test Student',
    review: 'This community\'s insights and seniors\' experiences helped shape my career. Especially during entry test season their mentorship really made a difference. I\'m a noob person but I\'ve learned so much. Thanks CS Connect — best support for students like me.'
  },
  {
    name: 'Khadija',
    university: 'Entry Test Student',
    review: 'This community changed my life not just in studies but spiritually too. The advice, Islamic opinions, and motivation helped me learn to balance both deen and dunya. May Allah bless your efforts. ❤️'
  },
  {
    name: 'Bareerah',
    university: 'COMSATS Lahore',
    review: 'This community gave me access to seniors in the industry. Their support helped clear my doubts and gave me confidence to move forward professionally.'
  },
  {
    name: 'Rida Fatima',
    university: 'UET',
    review: 'I got the chance to interact with so many talented people. This community helped me realize how vast CS is and how many opportunities are out there. More power to the admins.'
  },
  {
    name: 'Hassaan Amin',
    university: 'FAST Islamabad',
    review: 'It helped me a lot especially in finding good people, making connections, and networking. So many things I discovered just by being part of it.'
  },
  {
    name: 'Waleed Ahmed',
    university: 'Virtual University of Pakistan',
    review: 'This community helped me with technical issues, guidance, motivation, and discipline. I got to connect with students from different universities which will help in the long run.'
  },
  {
    name: 'Faizan Naeem',
    university: 'GCU Lahore',
    review: 'This community helped me in many ways. My communication skills improved and I got the chance to learn from elder seniors. Maybe tone down the sarcasm sometimes. We could also add some financial guidance just a suggestion.'
  },
  {
    name: 'Amna Rajput',
    university: 'Entry Test Student',
    review: 'It opened my mind and showed me how little I knew about everything. Grateful to be a part of it.'
  },
  {
    name: 'Murtaza',
    university: 'COMSATS Lahore',
    review: 'I needed help with assignments and presentations and they helped properly. Great experience.'
  },
  {
    name: 'Madiha Zaeem Dar',
    university: 'ITU',
    review: 'I\'m new here but even in this short time I can see how helpful and kind everyone is. Excited to explore and grow with this community.'
  },
  {
    name: 'Abdul Hadi',
    university: 'Govt. College Peshawar',
    review: 'It helped me clear my vision and decide which field of Computer Science I want to study. Simple but important help.'
  },
  {
    name: 'Azka Waqas',
    university: 'Entry Test Student',
    review: 'I\'m an intermediate student with no guidance. Being introverted made it worse. This group helped a lot. I love how only authentic info is shared. Notes are helpful and seniors guide us positively. I\'m thankful to the creators.'
  },
  {
    name: 'Subayyal Saad',
    university: 'Entry Test Student',
    review: 'Helpful anyway'
  }
];

// Modern Reviews Slider Component
const ReviewsSlider: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-infinite-scroll space-x-6">
        {/* First set */}
        {studentReviews.map((review, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0 w-80 md:w-96 bg-white border border-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="mb-4">
              <h4 className="text-lg font-bold text-black">{review.name}</h4>
              <p className="text-gray-500 text-sm">{review.university}</p>
            </div>
            <p className="text-gray-600 leading-relaxed italic">
              "{review.review}"
            </p>
          </motion.div>
        ))}
        {/* Second set for continuous loop */}
        {studentReviews.map((review, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0 w-80 md:w-96 bg-white border border-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="mb-4">
              <h4 className="text-lg font-bold text-black">{review.name}</h4>
              <p className="text-gray-500 text-sm">{review.university}</p>
            </div>
            <p className="text-gray-600 leading-relaxed italic">
              "{review.review}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProfessionalHomepage: React.FC = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <Spline3DScene />
        </div>

        {/* Enhanced 3D Floating Elements - Hidden on mobile for better performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          {/* Animated geometric shapes */}
          <motion.div
            className="absolute top-20 left-20 w-16 h-16 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm"
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 5, -5, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute top-40 right-32 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
            animate={{
              x: [0, 15, -15, 0],
              y: [0, -10, 0],
              scale: [1, 1.1, 0.9, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute bottom-40 left-24 w-10 h-10 border border-white/20 bg-white/10 backdrop-blur-sm"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            animate={{
              rotateZ: [0, 360],
              y: [0, -25, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />

          {/* Floating particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        {/* Enhanced background effects */}
        <div className="absolute inset-0 opacity-30">
          {/* Animated mesh background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-50"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          
          {/* Lightning effects */}
          <div className="absolute top-20 left-10 w-1 h-32 bg-gradient-to-b from-blue-400/50 to-transparent opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-24 bg-gradient-to-b from-purple-400/50 to-transparent opacity-60 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-28 bg-gradient-to-b from-pink-400/50 to-transparent opacity-60 animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10 pt-32 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 md:mb-8"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-300" />
              <span className="text-sm md:text-base font-medium">Student Initiative Since 2024</span>
            </motion.div>

            <div className="mb-6 md:mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight mb-2 md:mb-3 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3)',
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  CS Connect
                </motion.span>
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight text-gray-300 mb-2"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  Pakistan
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6"
            >
              By the tech students, for the tech students of Pakistan.
              <br className="hidden md:block" />
              What started as a simple WhatsApp community is now connecting CS minds across universities nationwide.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 text-xs sm:text-sm md:text-base"
            >
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-full border border-white/10">
                <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Active Community</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-full border border-white/10">
                <GraduationCap className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">All Universities</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-full border border-white/10">
                <Mic className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Weekly Podcasts</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 max-w-lg mx-auto"
          >
            <Link to="/join" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-5 md:px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group w-full text-sm md:text-base"
              >
                <span>Join the Community</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/20 text-white px-5 md:px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group w-full text-sm md:text-base"
              >
                <span>How It Started</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Main Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pt-6 md:pt-8 border-t border-white/10 max-w-4xl mx-auto"
          >
            {[
              { number: 2000, label: 'Student Members', suffix: '+', icon: Users },
              { number: 50, label: 'Universities', suffix: '+', icon: GraduationCap },
              { number: 4, label: 'Events/Podcasts', suffix: '', icon: Mic },
              { number: 100, label: 'Blog Readers', suffix: '+', icon: BookOpen },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-blue-300" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <motion.div style={{ y: y2 }} className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Why We <span className="text-gray-600">Exist</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Because CS students in Pakistan needed a space to connect, learn, and grow together
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-black/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-black">
                    {feature.title}
                  </h3>
                  <span className="text-xl font-bold text-gray-600">
                    {feature.stats}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Who We <span className="text-gray-600">Are</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Just regular CS students who wanted to bring our community together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white border border-gray-100 p-6 rounded-2xl hover:border-black/20 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-gray-200 transition-colors duration-300">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-gray-600 mb-1">{member.role}</p>
                <p className="text-xs text-gray-500 mb-3">{member.university}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{member.description}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <GitHubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Stats Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              Community <span className="text-gray-600">Reach</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Growing across multiple platforms to connect students everywhere
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platformStats.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100 hover:border-black/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <platform.icon className={`w-6 h-6 text-white`} />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{platform.platform}</h3>
                <div className="text-2xl font-bold text-gray-600">{platform.members}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews Slider Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
              What Our <span className="text-gray-600">Community Says</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real testimonials from CS Connect Pakistan members about their experience
            </p>
          </motion.div>

          <ReviewsSlider />
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
              Want to Hang Out With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Jump into our WhatsApp community, Discord server, or any of our platforms. 
              We're just a bunch of CS students helping each other out - and you're welcome to join!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/join">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
                >
                  Join the Group
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-lg flex items-center justify-center"
                >
                  How It Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  )
}

export default ProfessionalHomepage 