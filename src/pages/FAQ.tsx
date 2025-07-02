import React, { useEffect, useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
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
                
                <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 text-center">
                    <div>
                        <div className="inline-flex items-center px-5 py-3 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 mb-8 sm:mb-10 shadow-sm">
                            <HelpCircle className="w-5 h-5 sm:w-5 sm:h-5 text-purple-600 mr-3" />
                            <span className="text-lg sm:text-base font-semibold text-purple-700 tracking-wide">Frequently Asked Questions</span>
                        </div>
                        
                        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] tracking-tight">
                            <span className="block mb-2 sm:mb-1">Everything You Need</span>
                            <span className="relative inline-block">
                                <span className="text-blue-600">to Know</span>
                                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                            </span>
                        </h1>
                        
                        <p className="text-xl sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-0">
                            Get answers to common questions about joining and participating in our CS student community
                        </p>
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
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
                    <div>
                        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-black">
                            Still Have <span className="text-gray-600">Questions?</span>
                        </h2>
                        <p className="text-xl sm:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                            Can't find the answer you're looking for? Feel free to reach out to us directly.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
                            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
                                <h3 className="text-xl sm:text-xl font-semibold text-black mb-3 sm:mb-4">Email Us</h3>
                                <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-base leading-relaxed">
                                    Send us your question and we'll get back to you as soon as possible.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 text-base sm:text-base">Response Time</span>
                                        <span className="font-bold text-black text-base sm:text-base">&lt; 2 hours</span>
                                    </div>
                                    <a
                                        href="mailto:csconnectpakistan@gmail.com"
                                        className="inline-block w-auto bg-black text-white px-6 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:bg-gray-800 transition-all duration-200"
                                    >
                                        Send Email
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
                                <h3 className="text-xl sm:text-xl font-semibold text-black mb-3 sm:mb-4">Join & Ask</h3>
                                <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-base leading-relaxed">
                                    Join our community and ask questions directly to fellow students.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 text-base sm:text-base">Community Size</span>
                                        <span className="font-bold text-black text-base sm:text-base">2,000+ Students</span>
                                    </div>
                                    <button
                                        onClick={() => window.location.href = '/join'}
                                        className="inline-block w-auto border border-gray-300 text-black px-6 py-4 sm:py-4 rounded-xl font-semibold text-lg sm:text-lg hover:bg-black hover:text-white transition-all duration-200"
                                    >
                                        Join Community
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
