import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Users, Globe, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import CountUpNumber from "../components/CountUpNumber";
import { platform } from "os";
import { FaWhatsapp, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { platforms } from "../socialMediaLinks";


const Home: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const communityHighlights = [
        {
            icon: Code,
            title: "Code Together",
            description:
                "Collaborate on projects, share code, and build amazing things with fellow developers.",
            color: "from-blue-500 to-cyan-500",
            stats: "500+ Projects",
        },
        {
            icon: BookOpen,
            title: "Learn & Grow",
            description:
                "Access exclusive learning resources, tutorials, and mentorship from industry experts.",
            color: "from-green-500 to-emerald-500",
            stats: "100+ Resources",
        },
        {
            icon: Users,
            title: "Network & Connect",
            description:
                "Build meaningful connections with students and professionals across Pakistan.",
            color: "from-purple-500 to-pink-500",
            stats: "2000+ Connections",
        },
        {
            icon: Globe,
            title: "Launch Careers",
            description:
                "Get access to internships, job opportunities, and career guidance.",
            color: "from-orange-500 to-red-500",
            stats: "300+ Placements",
        },
    ];

    // Animation variants for text
    const letterVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.03,
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
            },
        }),
    };

    const wordVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateX: -45 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
            },
        }),
    };

    return (
        <div className="min-h-screen">
            {/* Modern Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0">
                    {/* Gradient Mesh */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
                    
                    {/* Floating Geometric Shapes */}
                    <motion.div
                        className="absolute top-20 left-10 w-32 h-32 border border-blue-400/20 rounded-lg rotate-45"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [45, 75, 45],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-40 right-20 w-24 h-24 border border-purple-400/20 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                    <motion.div
                        className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg"
                        animate={{
                            x: [0, 30, 0],
                            y: [0, -15, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm text-gray-300">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                Pakistan's Largest CS Community
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 px-4"
                        >
                            <motion.span 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="block mb-2"
                            >
                                Build Your
                            </motion.span>
                            <motion.span 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                            >
                                Tech Future
                            </motion.span>
                            <motion.span 
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="block mt-2"
                            >
                                with Pakistan's Top CS Community
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed px-6"
                        >
                            Where CS students from FAST, NUST, LUMS, and 50+ universities share knowledge, 
                            land internships, and build careers together. Real connections, real growth.
                        </motion.p>

                        {/* Interactive Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-5xl mx-auto px-4"
                        >
                            {[
                                { 
                                    number: 2000, 
                                    suffix: "+", 
                                    label: "CS Students", 
                                    color: "from-blue-400 to-cyan-400" 
                                },
                                { 
                                    number: 50, 
                                    suffix: "+", 
                                    label: "Universities", 
                                    color: "from-purple-400 to-pink-400" 
                                },
                                { 
                                    number: 300, 
                                    suffix: "+", 
                                    label: "Job Placements", 
                                    color: "from-green-400 to-blue-400" 
                                },
                                { 
                                    number: 150, 
                                    suffix: "+", 
                                    label: "Study Resources", 
                                    color: "from-orange-400 to-red-400" 
                                },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1 + index * 0.15,
                                        type: "spring",
                                        bounce: 0.4
                                    }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        y: -8,
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                                        rotate: [0, 1, -1, 0]
                                    }}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group cursor-pointer hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1.2 + index * 0.15, duration: 0.5, type: "spring" }}
                                        className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                                    >
                                        <CountUpNumber
                                            end={stat.number}
                                            suffix={stat.suffix}
                                            duration={2}
                                            delay={1.4 + index * 0.15}
                                        />
                                    </motion.div>
                                    <div className="text-sm sm:text-base text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Call-to-Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4"
                        >
                            <Link to="/join">
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 2 }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                                        y: -2
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-xl overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Join 2000+ Students
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.button>
                            </Link>
                            
                            <Link to="/blog">
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 2.2 }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                                        borderColor: "rgba(255, 255, 255, 0.3)",
                                        y: -2
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    Browse Resources
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* University Partners Slider */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            Students from{" "}
                            <span className="text-gray-600">
                                50+ Universities
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From FAST to NUST, LUMS to GIKI - we're connecting
                            CS students across Pakistan's top institutions
                        </p>
                    </motion.div>

                    {/* University Slider */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex space-x-12 text-4xl md:text-6xl font-bold text-gray-300/40"
                            animate={{
                                x: [0, -2000],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {[
                                "FAST",
                                "NUST",
                                "LUMS",
                                "GIKI",
                                "COMSATS",
                                "ITU",
                                "PUCIT",
                                "UET",
                                "IBA",
                                "UCP",
                                "HABIB",
                                "PIEAS",
                                "AIR",
                                "BAHRIA",
                                "SZABIST",
                                "IMS",
                                "FAST",
                                "NUST",
                                "LUMS",
                                "GIKI",
                                "COMSATS",
                                "ITU",
                                "PUCIT",
                                "UET",
                            ].map((university, index) => (
                                <div
                                    key={`${university}-${index}`}
                                    className="whitespace-nowrap select-none hover:text-gray-600 transition-colors"
                                >
                                    {university}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Community Highlights */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white text-black">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Why CS Students{" "}
                            <span className="text-gray-600">Love Us</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            More than just a community - we're your partner in
                            building an amazing tech career
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {communityHighlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                                    <div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <highlight.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {highlight.description}
                                    </p>
                                    <div className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                                        {highlight.stats}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Testimonials Slider */}
            <section className="py-20 bg-black text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            What Our{" "}
                            <span className="text-gray-600">
                                Community Says
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Real stories from real students who've transformed
                            their careers with CS Connect Pakistan
                        </p>
                    </motion.div>
                </div>

                {/* Testimonials Slider */}
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex space-x-8"
                        animate={{
                            x: [0, -2400],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[
                            {
                                name: "Muhammad Mansoor Ali",
                                university: "FAST Islamabad",
                                quote: "CS Connect has been incredibly helpful for me as an aspiring CS student. It guided me in IT fields, entry test prep, and discussions with seniors. I was a RWP board topper but had very little CS knowledge. I'm glad to be here, learning every day.",
                            },
                            {
                                name: "Mehreen",
                                university: "Entry Test Student",
                                quote: "This has been like a daily tech magazine for me. Being a pre-med student, I had no idea about CS but this community made it easy to explore the field and solve my problems. Super thankful for the cooperative environment.",
                            },
                            {
                                name: "Eisha",
                                university: "Entry Test Student",
                                quote: "This community's insights and seniors' experiences helped shape my career. Especially during entry test season their mentorship really made a difference. I'm a noob person but I've learned so much. Thanks CS Connect — best support for students like me.",
                            },
                            {
                                name: "Khadija",
                                university: "Entry Test Student",
                                quote: "This community changed my life not just in studies but spiritually too. The advice, Islamic opinions, and motivation helped me learn to balance both deen and dunya. May Allah bless your efforts. ❤️",
                            },
                            {
                                name: "Bareerah",
                                university: "COMSATS Lahore",
                                quote: "This community gave me access to seniors in the industry. Their support helped clear my doubts and gave me confidence to move forward professionally.",
                            },
                            {
                                name: "Rida Fatima",
                                university: "UET",
                                quote: "I got the chance to interact with so many talented people. This community helped me realize how vast CS is and how many opportunities are out there. More power to the admins.",
                            },
                            {
                                name: "Hassaan Amin",
                                university: "FAST Islamabad",
                                quote: "It helped me a lot especially in finding good people, making connections, and networking. So many things I discovered just by being part of it.",
                            },
                            {
                                name: "Waleed Ahmed",
                                university: "Virtual University of Pakistan",
                                quote: "This community helped me with technical issues, guidance, motivation, and discipline. I got to connect with students from different universities which will help in the long run.",
                            },
                            {
                                name: "Faizan Naeem",
                                university: "GCU Lahore",
                                quote: "This community helped me in many ways. My communication skills improved and I got the chance to learn from elder seniors. Maybe tone down the sarcasm sometimes. We could also add some financial guidance just a suggestion.",
                            },
                            {
                                name: "Amna Rajput",
                                university: "Entry Test Student",
                                quote: "It opened my mind and showed me how little I knew about everything. Grateful to be a part of it.",
                            },
                            {
                                name: "Murtaza",
                                university: "COMSATS Lahore",
                                quote: "I needed help with assignments and presentations and they helped properly. Great experience.",
                            },
                            {
                                name: "Madiha Zaeem Dar",
                                university: "ITU",
                                quote: "I'm new here but even in this short time I can see how helpful and kind everyone is. Excited to explore and grow with this community.",
                            },
                            {
                                name: "Abdul Hadi",
                                university: "Govt. College Peshawar",
                                quote: "It helped me clear my vision and decide which field of Computer Science I want to study. Simple but important help.",
                            },
                            {
                                name: "Azka Waqas",
                                university: "Entry Test Student",
                                quote: "I'm an intermediate student with no guidance. Being introverted made it worse. This group helped a lot. I love how only authentic info is shared. Notes are helpful and seniors guide us positively. I'm thankful to the creators.",
                            },
                            {
                                name: "Subayyal Saad",
                                university: "Entry Test Student",
                                quote: "Helpful anyway",
                            },
                            {
                                name: "Ayesha Khan",
                                university: "LUMS",
                                quote: "Being part of CS Connect opened doors I never knew existed. The mentorship and career guidance helped me land my first internship at a top tech company. Forever grateful!",
                            },
                            {
                                name: "Ahmed Hassan",
                                university: "NUST",
                                quote: "The coding challenges and project collaborations in this community pushed me to become a better programmer. Now I'm confident in my skills and ready for the industry.",
                            },
                            {
                                name: "Fatima Malik",
                                university: "PU",
                                quote: "As a girl in CS, I found amazing support here. The community celebrates diversity and provides equal opportunities for everyone to grow and succeed.",
                            },
                            {
                                name: "Bilal Ahmed",
                                university: "COMSATS Wah",
                                quote: "The resume reviews and interview prep sessions were game-changers for me. Got placed at my dream company thanks to the guidance from seniors here.",
                            },
                            {
                                name: "Sana Tariq",
                                university: "UCP",
                                quote: "From web development to AI/ML, this community covers everything. The resources shared here are better than many paid courses. Highly recommend to all CS students!",
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="min-w-[400px] bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-lg">
                                            {testimonial.name[0]}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            {testimonial.university}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            Connect with Us{" "}
                            <span className="text-gray-600">Everywhere</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stay updated and engaged with our community across
                            all major platforms
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {platforms.map((platform, index) => (
                            <motion.a
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                href={platform.link}
                                target="_blank"
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
                            >
                                <div
                                    className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                                >
                                    <platform.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">
                                    {platform.name}
                                </h3>
                                <p className="text-2xl font-bold text-black mb-1">
                                    {platform.members}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {platform.description}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
            {/* Final CTA */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your CS Journey?
                        </h2>
                        <p className="text-xl mb-8 text-gray-300">
                            Join thousands of Pakistani CS students who are
                            already building their dream careers with us.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/Join">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
                                >
                                    Join Our Community
                                </motion.button>
                            </Link>
                            {/* <div className="flex gap-4 justify-center">
                                {platforms.map((platform) => (
                                    <motion.a
                                        key={platform.name}
                                        href={platform.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                                    >
                                        <platform.icon className="w-5 h-5 text-white" />
                                    </motion.a>
                                ))}
                            </div> */}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
