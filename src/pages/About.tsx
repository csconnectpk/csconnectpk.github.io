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
            icon: MessageCircle,
            title: "WhatsApp Community",
            description: "Multiple focused groups for different topics - from algorithm discussions to career guidance",
            metric: "2,000+ active members",
            color: "from-green-50 to-emerald-50 border-green-200/60"
        },
        {
            icon: Users,
            title: "Discord Server", 
            description: "Voice study rooms, coding sessions, and real-time collaboration spaces for deeper engagement",
            metric: "400+ active members",
            color: "from-purple-50 to-violet-50 border-purple-200/60"
        },
        {
            icon: Globe,
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
            iconColor: "text-green-600"
        },
        {
            title: "Discord Server",
            metric: "400+ active users",
            description: "Technical discussions, study groups, and collaborative learning",
            bgColor: "from-blue-50 to-indigo-50",
            iconColor: "text-blue-600"
        },
        {
            title: "YouTube Channel",
            metric: "300+ subscribers",
            description: "Educational content, tech talks, and career guidance videos",
            bgColor: "from-red-50 to-pink-50",
            iconColor: "text-red-600"
        },
        {
            title: "Cross-Platform Reach",
            metric: "Multiple platforms",
            description: "Instagram, LinkedIn, and website connecting Pakistani CS students",
            bgColor: "from-purple-50 to-violet-50",
            iconColor: "text-purple-600"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-white overflow-hidden">
                {/* Subtle background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 text-center">
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/60 mb-8 lg:mb-10 shadow-sm">
                        <Heart className="w-4 h-4 text-orange-600 mr-3" />
                        <span className="text-sm font-semibold text-orange-700 tracking-wide">Our Journey</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-tight text-gray-900">
                        From a Simple Idea to
                        <br />
                        <span className="relative inline-block">
                            <span className="text-blue-600">Pakistan's Largest</span>
                            <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                        </span>
                        <span className="text-black"> CS Community</span>
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 lg:mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
                        Connecting 2,000+ brilliant minds across 50+ universities to shape Pakistan's tech future.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">2,000+</div>
                            <div className="text-gray-700 font-semibold text-base lg:text-lg">Active Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">50+</div>
                            <div className="text-gray-700 font-semibold text-base lg:text-lg">Universities</div>
                        </div>
                        <div className="text-center col-span-2 lg:col-span-1">
                            <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">24/7</div>
                            <div className="text-gray-700 font-semibold text-base lg:text-lg">Community Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Timeline */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 lg:mb-20">
                        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-8 shadow-sm">
                            <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-sm font-semibold text-blue-700 tracking-wide">Timeline</span>
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            How We
                            <span className="relative inline-block mx-3">
                                <span className="text-blue-600">Built This</span>
                                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                            </span>
                            Movement
                        </h2>
                        
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            Every great community starts with a simple idea. Here's how CS Connect Pakistan grew from 
                            one student's vision to a nationwide movement.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                        
                        <div className="space-y-12 lg:space-y-16">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} ml-12 lg:ml-0`}>
                                        <div className="group bg-white p-6 lg:p-8 rounded-2xl border border-gray-200/60 transition-all duration-300">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-sm font-bold text-blue-600 px-3 py-1 bg-blue-50 rounded-full">{milestone.date}</span>
                                                <span className="text-xs font-semibold text-green-700 px-2 py-1 bg-green-50 border border-green-200/60 rounded-full flex items-center">
                                                    <CheckCircle className="w-3 h-3 mr-1" />
                                                    {milestone.participants}
                                                </span>
                                            </div>
                                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What We've Built */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 lg:mb-20">
                        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/60 mb-8 shadow-sm">
                            <Rocket className="w-4 h-4 text-purple-600 mr-2" />
                            <span className="text-sm font-semibold text-purple-700 tracking-wide">Our Impact</span>
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            What We've
                            <span className="relative inline-block mx-3">
                                <span className="text-blue-600">Accomplished</span>
                                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                            </span>
                            Together
                        </h2>
                        
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            Key achievements and platforms transforming the CS student experience in Pakistan.
                        </p>
                    </div>

                    <div className="space-y-8 lg:space-y-12">
                        {initiatives.map((initiative, index) => {
                            const IconComponent = initiative.icon;
                            return (
                                <div key={index} className="border-b border-gray-200 pb-8 lg:pb-12 last:border-b-0">
                                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
                                        <div className="lg:col-span-1">
                                            <div className="flex items-center mb-4">
                                                <div className={`w-12 h-12 bg-gradient-to-br ${initiative.color} rounded-xl flex items-center justify-center mr-4`}>
                                                    <IconComponent className="w-6 h-6 text-blue-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                                                        {initiative.title}
                                                    </h3>
                                                    <span className="text-sm font-medium text-green-600">
                                                        {initiative.metric}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="lg:col-span-3">
                                            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                                {initiative.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 mb-8 shadow-sm">
                            <Sparkles className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm font-semibold text-green-700 tracking-wide">Join the Movement</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                            Ready to Be Part of
                            <span className="text-blue-600"> Pakistan's Tech Future?</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Join 2,000+ brilliant CS students who are already shaping the future of technology in Pakistan. 
                            Connect, learn, grow, and succeed together.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/join" 
                                className="group inline-flex items-center justify-center px-8 lg:px-10 py-4 lg:py-5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <Sparkles className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                Join Our Community
                            </Link>
                            <Link 
                                to="/team" 
                                className="group inline-flex items-center justify-center px-8 lg:px-10 py-4 lg:py-5 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 font-semibold text-lg"
                            >
                                Meet Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
