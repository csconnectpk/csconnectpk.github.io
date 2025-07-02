import React, { useEffect } from "react";
import {
    Users,
    GraduationCap,
    Heart,
    Sparkles,
    Target,
    Globe,
    MessageCircle,
    Rocket,
    Star,
    Calendar,
    Zap,
    BookOpen,
    Lightbulb,
    Play,
    Network,
    Briefcase,
    Trophy,
    CheckCircle
} from "lucide-react";
import { FaWhatsapp, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { icon: Users, label: "Active Students", value: "2,000+", description: "From top universities" },
        { icon: GraduationCap, label: "Universities", value: "50+", description: "Across Pakistan" },
        { icon: MessageCircle, label: "Daily Messages", value: "500+", description: "Knowledge sharing" },
        { icon: Target, label: "Success Stories", value: "300+", description: "Jobs & internships" },
    ];

    const milestones = [
        {
            date: "October 2023",
            title: "The Spark",
            description: "Started as a simple WhatsApp group for CS students to connect and share knowledge.",
            participants: "10",
            icon: Lightbulb
        },
        {
            date: "December 2023", 
            title: "Growing Community",
            description: "Expanded to multiple WhatsApp groups and launched our Discord server for technical discussions.",
            participants: "100+",
            icon: Users
        },
        {
            date: "February 2024",
            title: "YouTube Channel",
            description: "Launched educational content and student success stories to help the broader CS community.",
            participants: "500+", 
            icon: Play
        },
        {
            date: "March 2024",
            title: "Cross-University Network",
            description: "Connected students from FAST, NUST, LUMS, GIKI, and 20+ universities across Pakistan.",
            participants: "1,000+",
            icon: Network
        },
        {
            date: "May 2024",
            title: "Industry Partnerships",
            description: "Partnered with tech companies to provide internship opportunities and career guidance.",
            participants: "1,500+",
            icon: Briefcase
        },
        {
            date: "Today",
            title: "Thriving Ecosystem", 
            description: "Supporting 2,000+ students with peer learning, career opportunities, and a strong support network.",
            participants: "2,000+",
            icon: Trophy
        }
    ];

    const initiatives = [
        {
            icon: FaWhatsapp,
            title: "WhatsApp Community",
            description: "Multiple focused groups for different topics - from algorithm discussions to career guidance",
            metric: "2,000+ active members",
            color: "from-green-50 to-emerald-50 border-green-200/60"
        },
        {
            icon: FaDiscord,
            title: "Discord Server", 
            description: "Voice study rooms, coding sessions, and real-time collaboration spaces for deeper engagement",
            metric: "400+ active members",
            color: "from-purple-50 to-violet-50 border-purple-200/60"
        },
        {
            icon: FaInstagram,
            title: "Social Presence",
            description: "Instagram for community highlights and YouTube for educational content and expert interviews",
            metric: "300+ followers",
            color: "from-blue-50 to-cyan-50 border-blue-200/60"
        },
        {
            icon: GraduationCap,
            title: "University Network",
            description: "Direct connections with students from Pakistan's most prestigious CS programs and institutions",
            metric: "50+ universities",
            color: "from-orange-50 to-amber-50 border-orange-200/60"
        },
        {
            icon: Target,
            title: "Expert Mentorship",
            description: "Guidance from industry professionals working at global tech companies and successful local startups",
            metric: "20+ mentors",
            color: "from-pink-50 to-rose-50 border-pink-200/60"
        },
        {
            icon: Rocket,
            title: "Future Vision",
            description: "Working towards becoming the official platform representing CS students across all Pakistani universities",
            metric: "National scope",
            color: "from-indigo-50 to-purple-50 border-indigo-200/60"
        }
    ];

    const quickStats = [
        { icon: Users, label: "Community Growth", value: "2,000+", description: "Active CS students" },
        { icon: Globe, label: "University Reach", value: "50+", description: "Universities connected" },
        { icon: BookOpen, label: "Daily Activity", value: "24/7", description: "Community support" },
    ];

    const impactMetrics = [
        {
            title: "WhatsApp Community",
            metric: "2,000+ members",
            description: "Daily discussions, help, and networking among CS students",
            bgColor: "from-green-50 to-emerald-50",
            iconColor: "text-green-600",
            icon: FaWhatsapp
        },
        {
            title: "Discord Server",
            metric: "400+ active users",
            description: "Technical discussions, study groups, and collaborative learning",
            bgColor: "from-blue-50 to-indigo-50",
            iconColor: "text-blue-600",
            icon: FaDiscord
        },
        {
            title: "YouTube Channel",
            metric: "300+ subscribers",
            description: "Educational content, tech talks, and career guidance videos",
            bgColor: "from-red-50 to-pink-50",
            iconColor: "text-red-600",
            icon: FaYoutube
        },
        {
            title: "Cross-Platform Reach",
            metric: "Multiple platforms",
            description: "Instagram, LinkedIn, and website connecting Pakistani CS students",
            bgColor: "from-purple-50 to-violet-50",
            iconColor: "text-purple-600",
            icon: FaInstagram
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section - Optimized for mobile */}
            <section className="relative bg-white overflow-hidden">
                {/* Subtle background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 text-center">
                    {/* Smaller badge for mobile */}
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/60 mb-3 sm:mb-4 lg:mb-6 shadow-sm">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 mr-2" />
                        <span className="text-xs sm:text-sm font-semibold text-orange-700 tracking-wide">Our Journey</span>
                    </div>

                    {/* Better proportioned heading for mobile */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 lg:mb-6 leading-tight text-gray-900">
                        From a Simple Idea to
                        <br />
                        <span className="relative inline-block">
                            <span className="text-blue-600">Pakistan's Largest</span>
                            <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                        </span>
                        <span className="text-black"> CS Community</span>
                    </h1>

                    {/* Better mobile subtitle */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
                        Connecting 2,000+ brilliant minds across 50+ universities to shape Pakistan's tech future.
                    </p>

                    {/* Optimized Quick Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-gray-900 mb-0.5 sm:mb-1">2,000+</div>
                            <div className="text-gray-700 font-semibold text-xs sm:text-sm">Active Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-gray-900 mb-0.5 sm:mb-1">50+</div>
                            <div className="text-gray-700 font-semibold text-xs sm:text-sm">Universities</div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 text-center">
                            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-gray-900 mb-0.5 sm:mb-1">24/7</div>
                            <div className="text-gray-700 font-semibold text-xs sm:text-sm">Community Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section - More compact on mobile */}
            <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
                            Our <span className="text-blue-600">Vision</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Building Pakistan's largest student-driven tech community where brilliant minds connect, learn, and create together.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                        <div>
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-900">
                                From Students, For Students
                            </h3>
                            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                                    CS Connect Pakistan started with a simple realization: Pakistani CS students needed a platform to connect, learn, and grow together. What began as a small WhatsApp group has evolved into a community serving students across the nation.
                                </p>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                                    We believe in the power of peer-to-peer learning and the strength that comes from a united community. Every initiative we launch comes from our genuine desire to make the journey easier for fellow students.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl border border-gray-200">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm sm:text-base lg:text-lg text-gray-900">{stat.value}</div>
                                            <div className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</div>
                                            <div className="text-gray-500 text-xs sm:text-sm">{stat.description}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey - Mobile optimized timeline */}
            <section className="py-8 sm:py-12 lg:py-16 bg-white">
                <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
                            Our <span className="text-blue-600">Journey</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            From 10 students to 2,000+ - here's how we built Pakistan's largest CS community
                        </p>
                    </div>

                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        {milestones.map((milestone, index) => {
                            const IconComponent = milestone.icon;
                            return (
                                <div key={index} className="flex gap-3 sm:gap-4 lg:gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                        </div>
                                        {index < milestones.length - 1 && (
                                            <div className="w-0.5 h-6 sm:h-8 lg:h-12 bg-gray-300 mt-2"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 pb-4 sm:pb-6 lg:pb-8">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 sm:mb-2">
                                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{milestone.title}</h3>
                                            <div className="flex items-center space-x-2 sm:space-x-3 mt-0.5 sm:mt-0">
                                                <span className="text-xs sm:text-sm text-gray-500 font-medium">{milestone.date}</span>
                                                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">{milestone.participants}</span>
                                            </div>
                                        </div>
                                        <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Initiatives - Clean list design */}
            <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
                    <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
                            Our <span className="text-blue-600">Initiatives</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Multiple platforms and programs designed to support Pakistani CS students
                        </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                        {initiatives.map((initiative, index) => {
                            const IconComponent = initiative.icon;
                            return (
                                <div key={index} className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 sm:mb-2">
                                                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{initiative.title}</h3>
                                                <span className="text-xs sm:text-sm lg:text-base font-bold text-blue-600 mt-0.5 sm:mt-0">{initiative.metric}</span>
                                            </div>
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{initiative.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section - Mobile optimized */}
            <section className="py-8 sm:py-12 lg:py-16 bg-white">
                <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
                        Ready to <span className="text-blue-600">Join Us?</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto">
                        Become part of Pakistan's largest CS student community and connect with brilliant minds across the country.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                        <Link
                            to="/join"
                            className="inline-flex items-center bg-blue-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <Sparkles className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                            Join Community
                        </Link>
                        <Link
                            to="/team"
                            className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300"
                        >
                            Meet Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
