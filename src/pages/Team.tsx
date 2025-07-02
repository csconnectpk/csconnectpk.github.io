import React, { useEffect } from "react";
import { Mail, Users, Rocket, Heart, Github, Linkedin, ExternalLink, Sparkles } from "lucide-react";

const Team: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const coreTeam = [
        {
            name: "Azan Waseem",
            role: "Community Lead",
            bio: "CS student at FAST Islamabad and community lead with main roles in development, podcasting, and leading the community. Built Pakistan's largest CS community from a simple WhatsApp community.",
            github: "azannw",
            linkedin: "azanw",
            university: "FAST Islamabad",
            focus: "Community Building & Development"
        },
        {
            name: "Maryam Ahmed",
            role: "Design Lead",
            bio: "The creative force behind CS Connect Pakistan who leads all designing initiatives and handles graphics for our community. A crucial person who brings visual identity to our brand.",
            linkedin: "maryam-a-24114733a",
            university: "FAST Islamabad",
            focus: "Visual Design & Branding"
        },
        {
            name: "Siraj Qazi",
            role: "Technical Mentor",
            bio: "EE graduate from NUST working as a Data Scientist with Seeloz. Serves as technical mentor and advisor for the community, helping students navigate career transitions.",
            github: "qazi0",
            linkedin: "siraj-qazi",
            university: "NUST Islamabad",
            focus: "Data Science & Career Guidance"
        },
        {
            name: "Talha Asghar",
            role: "Technical Advisor",
            bio: "MS graduate from NUST working as a Backend Engineer. Technical advisor and senior who helps with technical guidance and mentorship for community members.",
            github: "iamtalhaasghar",
            linkedin: "iamtalhaasghar",
            university: "NUST Islamabad",
            focus: "Backend Engineering & Mentorship"
        },
        {
            name: "Khawaja Owais",
            role: "Community Manager",
            bio: "Data Science graduate from FAST who helps in managing community operations and activities. Focuses on maintaining engagement and supporting student initiatives.",
            github: "the-muhammad-owais",
            linkedin: "the-muhammad-owais",
            university: "FAST Islamabad",
            focus: "Community Management & Operations"
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section - Mobile optimized */}
            <section className="relative bg-white overflow-hidden">
                {/* Subtle background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 text-center">
                    {/* Smaller badge for mobile */}
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-4 sm:mb-6 shadow-sm">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
                        <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">Meet the Team</span>
                    </div>
                    
                    {/* Better mobile heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                        <span className="block mb-1 sm:mb-2">The Students Who</span>
                        <span className="relative inline-block">
                            <span className="text-blue-600">Took Initiative</span>
                            <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                        </span>
                    </h1>
                    
                    {/* Better mobile subtitle */}
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                        What happens when a few Pakistani CS students decide to stop waiting and start building the community our country needed
                    </p>
                </div>
            </section>

            {/* Our Story Section - Refined mobile layout */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black">
                                From Students, <span className="text-gray-600">For Students</span>
                            </h2>
                            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-sm sm:text-base lg:text-lg">
                                    CS Connect Pakistan started with a simple realization: Pakistani CS students needed a platform to connect, learn, and grow together. What began as a small WhatsApp group has evolved into a community serving students across the nation.
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg">
                                    Our team consists entirely of students and recent graduates who understand the unique challenges of pursuing computer science education in Pakistan. We've experienced the same struggles with finding internships, navigating career paths, and building technical skills while balancing academic demands.
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg">
                                    Every initiative we launch, every resource we share, and every connection we facilitate comes from our genuine desire to make the journey easier for fellow students. We believe in the power of peer-to-peer learning and the strength that comes from a united community.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black">Community Reality</h3>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">WhatsApp Members</span>
                                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">2,000+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">Universities</span>
                                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">50+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">Discord Members</span>
                                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">400+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Team Section - Mobile optimized */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black">
                            Core <span className="text-gray-600">Team</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                            The students who took initiative to build Pakistan's CS community
                        </p>
                    </div>

                    <div className="space-y-8 sm:space-y-12">
                        {coreTeam.map((member, index) => (
                            <div key={index} className="group bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
                                    <div className="lg:col-span-1">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-600 font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-500 text-sm sm:text-base mb-3 sm:mb-4">
                                            {member.university}
                                        </p>
                                        <div className="flex space-x-3">
                                            {member.github && (
                                                <a
                                                    href={`https://github.com/${member.github}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                                                >
                                                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a
                                                    href={`https://linkedin.com/in/${member.linkedin}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3">
                                        <div className="mb-3 sm:mb-4">
                                            <span className="inline-block px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full">
                                                {member.focus}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team Section - Mobile optimized */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-black">
                            Join Our <span className="text-gray-600">Mission</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Help us build Pakistan's largest CS community and make a difference in the lives of thousands of students
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 sm:p-8 lg:p-10 rounded-2xl text-center">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                            Interested in Contributing?
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                            We're always looking for passionate students who want to help build and grow our community. Whether you're interested in content creation, technical development, design, or community management, there's a place for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="mailto:csconnectpakistan@gmail.com"
                                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                Get in Touch
                            </a>
                            <a
                                href="/join"
                                className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300"
                            >
                                Join Community First
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
