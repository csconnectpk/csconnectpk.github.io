import React, { useEffect, useState } from "react";
import { Plus, Minus, HelpCircle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "What is CS Connect Pakistan?",
            answer: "CS Connect Pakistan is a student-led community connecting CS students from universities across Pakistan. We provide a platform for networking, learning, and supporting each other's academic and career journeys through WhatsApp groups, Discord servers, YouTube content, and more.",
        },
        {
            question: "How do I join the community?",
            answer: "You can join through our various platforms - start with our WhatsApp community for daily discussions, join our Discord for technical conversations, or subscribe to our YouTube channel for educational content. All platforms are free to join and designed for CS students across Pakistan.",
        },
        {
            question: "Is there a membership fee?",
            answer: "No, CS Connect Pakistan is completely free. We believe in accessible education and community support for all CS students, regardless of their financial background. All our resources, platforms, and services are provided at no cost.",
        },
        {
            question: "Which universities are represented?",
            answer: "Our community includes students from 50+ universities across Pakistan including FAST, NUST, LUMS, GIKI, UET, COMSATS, and many others. We welcome students from all universities and colleges offering computer science programs.",
        },
        {
            question: "What kind of support can I get?",
            answer: "Our community offers academic support through study groups, career guidance from seniors and working professionals, internship and job opportunity sharing, technical discussions, project collaboration, and general peer support for the challenges of CS education.",
        },
        {
            question: "Do you provide job placement guarantees?",
            answer: "No, we don't provide job placement services or guarantees. We're a student community that shares opportunities, provides guidance, and supports each other's growth. Members often share internship and job openings they come across, but we don't have formal placement programs.",
        },
        {
            question: "How active is the community?",
            answer: "Our WhatsApp groups have daily active discussions with 2000+ members. Discord sees regular technical conversations among 400+ members. We publish podcast episodes and educational content regularly, creating multiple touchpoints for community engagement throughout the week.",
        },
        {
            question: "Can recent graduates join?",
            answer: "Absolutely! Recent graduates are valuable community members who often provide guidance and mentorship to current students. Many of our most helpful contributors are recent graduates who share their transition experiences from academia to industry.",
        },
        {
            question: "How can I contribute to the community?",
            answer: "There are many ways to contribute - share opportunities you find, help answer questions in discussions, create educational content, mentor junior students, suggest improvements, or simply be an active and supportive community member. Every positive contribution helps our community grow.",
        },
        {
            question: "What platforms do you use?",
            answer: "We're active on WhatsApp (main discussions), Discord (technical conversations), YouTube (educational content and podcasts), LinkedIn (professional networking), and our website. Each platform serves different needs of our diverse community.",
        },
        {
            question: "Do you organize events?",
            answer: "We organize virtual events, webinars, and online sessions based on community interest and volunteer availability. As a student-led community, our event schedule depends on team capacity and member demand. We announce all events across our platforms.",
        },
        {
            question: "How do I get featured on the podcast?",
            answer: "If you have an interesting journey or valuable insights to share with CS students, you can reach out to us via email. We look for authentic stories that can genuinely help our community members with their academic and career paths.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-white overflow-hidden">
                {/* Subtle background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
                    <div className="text-center max-w-6xl mx-auto">
                        
                        {/* Badge */}
                        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 mb-6 sm:mb-8 shadow-sm">
                            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mr-2" />
                            <span className="text-xs sm:text-sm font-bold text-purple-700 tracking-wide">Frequently Asked Questions</span>
                        </div>

                        {/* MUCH LARGER main heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
                            Everything You Need
                            <br />
                            <span className="relative inline-block ml-3">
                                <span className="text-blue-600">to Know</span>
                                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                            </span>
                        </h1>

                        {/* Better subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
                            Get answers to common questions about joining and participating in our CS student community
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
                            <a href="#faq">
                                <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                                    <HelpCircle className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                                    Browse FAQs
                                </button>
                            </a>
                            
                            <a href="/join">
                                <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                                    <Users className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                                    Join Community
                                </button>
                            </a>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
                            <div className="text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    12+
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    FAQs Answered
                                </div>
                            </div>
                            
                            <div className="text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    2,000+
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    Students Helped
                                </div>
                            </div>

                            <div className="col-span-2 lg:col-span-1 text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    100%
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    Free Support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6 sm:px-8">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 sm:px-8 py-6 sm:py-7 text-left flex justify-between items-start hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <h3 className="text-xl sm:text-xl font-semibold text-black pr-4 sm:pr-8 leading-relaxed">
                                        {faq.question}
                                    </h3>
                                    <div className="flex-shrink-0 mt-1">
                                        {openIndex === index ? (
                                            <Minus className="w-7 h-7 sm:w-7 sm:h-7 text-gray-600" />
                                        ) : (
                                            <Plus className="w-7 h-7 sm:w-7 sm:h-7 text-gray-600" />
                                        )}
                                    </div>
                                </button>

                                {openIndex === index && (
                                    <div className="px-6 sm:px-8 pb-6 sm:pb-7">
                                        <p className="text-gray-700 leading-relaxed text-lg sm:text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black">
                            Still Have <span className="text-blue-600">Questions?</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                            Can't find the answer you're looking for? Feel free to reach out to us directly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                        {/* Email Option */}
                        <div className="text-center lg:text-left group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Email Us</h3>
                            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                                Send us your question and we'll get back to you as soon as possible.
                            </p>
                            
                            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                                <div className="flex items-center justify-between text-sm sm:text-base">
                                    <span className="text-gray-700 font-medium">Response Time</span>
                                    <span className="font-bold text-green-600">&lt; 2 hours</span>
                                </div>
                            </div>
                            
                            <a
                                href="mailto:csconnectpakistan@gmail.com"
                                className="inline-flex items-center justify-center bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            >
                                Send Email
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Join Community Option */}
                        <div className="text-center lg:text-left group">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Join & Ask</h3>
                            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                                Join our community and ask questions directly to fellow students.
                            </p>
                            
                            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                                <div className="flex items-center justify-between text-sm sm:text-base">
                                    <span className="text-gray-700 font-medium">Community Size</span>
                                    <span className="font-bold text-blue-600">2,000+ Students</span>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => window.location.href = '/join'}
                                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            >
                                Join Community
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
