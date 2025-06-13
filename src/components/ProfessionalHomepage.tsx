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

// Social Media Icons as SVG Components
const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const DiscordIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/>
  </svg>
)

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
)

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
    role: 'Founder & CEO',
    university: 'FAST Islamabad',
    description: 'CS student at FAST Islamabad who built Pakistan\'s largest CS community from a simple WhatsApp group. Passionate about connecting students with industry opportunities and fostering tech education.',
    github: 'https://github.com/azan-waseem',
    linkedin: 'https://linkedin.com/in/azan-waseem'
  },
  {
    name: 'Siraj Qazi',
    role: 'Industry Mentor',
    university: 'NUST Graduate',
    description: 'Data Scientist and NUST EE graduate providing guidance on tech career transitions. Helps students navigate from academic learning to industry-ready skills with real-world insights.',
    github: 'https://github.com/siraj-qazi',
    linkedin: 'https://linkedin.com/in/siraj-qazi'
  },
  {
    name: 'Talha Asghar',
    role: 'Technical Advisor',
    university: 'NUST MS Student',
    description: 'MS student at NUST and software engineer offering technical mentorship and guidance. Specializes in helping students with complex programming concepts and project development.',
    github: 'https://github.com/talha-asghar',
    linkedin: 'https://linkedin.com/in/talha-asghar'
  },
  {
    name: 'Owais Raza',
    role: 'Industry Advisor',
    university: 'FAST Graduate',
    description: 'FAST graduate working in the tech industry, helping bridge the gap between academic knowledge and professional requirements. Focuses on career development and industry best practices.',
    github: 'https://github.com/owais-raza',
    linkedin: 'https://linkedin.com/in/owais-raza'
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
              What started as a simple WhatsApp group is now connecting CS minds across universities nationwide.
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
              Jump into our WhatsApp group, Discord server, or any of our platforms. 
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