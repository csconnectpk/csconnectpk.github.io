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
            {/* Hero Section */}
            <section className="relative bg-white overflow-hidden">
                {/* Subtle background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 text-center">
                    <div className="inline-flex items-center px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-8 sm:mb-10 shadow-sm">
                        <Users className="w-5 h-5 sm:w-5 sm:h-5 text-blue-600 mr-3" />
                        <span className="text-lg sm:text-base font-semibold text-blue-700 tracking-wide">Meet the Team</span>
                    </div>
                    
                    <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] tracking-tight">
                        <span className="block mb-2 sm:mb-1">The Students Who</span>
                        <span className="relative inline-block">
                            <span className="text-blue-600">Took Initiative</span>
                            <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                        </span>
                    </h1>
                    
                    <p className="text-xl sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-0">
                        What happens when a few Pakistani CS students decide to stop waiting and start building the community our country needed
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black">
                                From Students, <span className="text-gray-600">For Students</span>
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg sm:text-lg">
                                    CS Connect Pakistan started with a simple realization: Pakistani CS students needed a platform to connect, learn, and grow together. What began as a small WhatsApp group has evolved into a community serving students across the nation.
                                </p>
                                <p className="text-lg sm:text-lg">
                                    Our team consists entirely of students and recent graduates who understand the unique challenges of pursuing computer science education in Pakistan. We've experienced the same struggles with finding internships, navigating career paths, and building technical skills while balancing academic demands.
                                </p>
                                <p className="text-lg sm:text-lg">
                                    Every initiative we launch, every resource we share, and every connection we facilitate comes from our genuine desire to make the journey easier for fellow students. We believe in the power of peer-to-peer learning and the strength that comes from a united community.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-3xl font-bold mb-6 text-black">Community Reality</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium text-lg">WhatsApp Members</span>
                                    <span className="text-3xl font-bold text-black">2,000+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium text-lg">Universities</span>
                                    <span className="text-3xl font-bold text-black">50+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium text-lg">Discord Members</span>
                                    <span className="text-3xl font-bold text-black">400+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Team Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                            Core <span className="text-gray-600">Team</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The students who took initiative to build Pakistan's CS community
                        </p>
                    </div>

                    <div className="space-y-12">
                        {coreTeam.map((member, index) => (
                            <div key={index} className="group border-b border-gray-100 pb-12 last:border-b-0">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                                    <div className="lg:col-span-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-600 font-semibold text-lg mb-2">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-500 text-base mb-4">
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
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a
                                                    href={`https://linkedin.com/in/${member.linkedin}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                                                {member.focus}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                            Join Our <span className="text-gray-600">Mission</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Help us build Pakistan's largest CS community
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-black">Open Opportunities</h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-semibold text-black mb-3">Content Creators</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Create engaging content for our blog and social media. Share your knowledge through articles and tutorials that help fellow students.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-black mb-3">Developers</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Build and improve our platforms. Work on meaningful projects that impact thousands of students.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-black mb-3">University Ambassadors</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Represent CS Connect at your university and help us expand our reach across Pakistan.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-black mb-3">Designers</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        Shape our visual identity and create graphics that represent our community.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 text-black">Why Join Us?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-lg">
                                <div>
                                    <strong>Learning Experience:</strong> Gain real experience while contributing to something meaningful.
                                </div>
                                <div>
                                    <strong>Network Building:</strong> Connect with talented students across Pakistan's top universities.
                                </div>
                                <div>
                                    <strong>Skill Development:</strong> Work on projects that impact thousands of students.
                                </div>
                                <div>
                                    <strong>Flexible Schedule:</strong> Contribute according to your availability.
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <a
                                    href="mailto:csconnectpakistan@gmail.com"
                                    className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
