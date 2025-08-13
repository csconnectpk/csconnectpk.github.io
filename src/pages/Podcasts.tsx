import React, { useEffect } from "react";
import { Mail, Youtube, Users, Mic, Sparkles } from "lucide-react";
import { youtubeLink } from "../socialMediaLinks";

const Podcasts: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/60 mb-6 sm:mb-8 shadow-sm">
                            <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 mr-2" />
                            <span className="text-xs sm:text-sm font-bold text-red-700 tracking-wide">CS Connect Podcasts</span>
                        </div>

                        {/* MUCH LARGER main heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
                            Real Conversations with
                            <br />
                            <span className="relative inline-block ml-3">
                                <span className="text-blue-600">Tech Leaders</span>
                                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                            </span>
                        </h1>

                        {/* Better subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
                            Listen to inspiring stories from Pakistani professionals who've made their mark in tech
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
                            <a href="#podcasts">
                                <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                                    <Mic className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                                    Listen Now
                                </button>
                            </a>
                            
                            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                                <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                                    <Youtube className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                                    Subscribe
                                </button>
                            </a>
                        </div>

                        {/* Mission Statement */}
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                                    Our Mission
                                </h3>
                                <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed">
                                    We create authentic conversations that inspire and guide CS students through real experiences, practical advice, and genuine insights from Pakistani tech professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Our Podcasts */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black">
                                Learning from{" "}
                                <span className="text-gray-600">Real Experiences</span>
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg sm:text-lg">
                                    Our podcasts feature honest conversations with Pakistani professionals who are building their careers in tech. We focus on real stories, practical advice, and genuine insights that can help CS students navigate their own journeys.
                                </p>
                                <p className="text-lg sm:text-lg">
                                    We invite guests who have interesting experiences to share - from recent graduates landing their first jobs to seasoned professionals who've built meaningful careers. Each conversation is designed to provide practical guidance and realistic perspectives.
                                </p>
                                <p className="text-lg sm:text-lg">
                                    Every episode aims to answer the questions our community members actually ask - about skill development, career transitions, work-life balance, and building a sustainable career in Pakistan's growing tech industry.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold mb-8 text-black">Why We Do This</h3>
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-black mb-3 text-lg">Bridge the Gap</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        We connect students with professionals who've walked similar paths, sharing real experiences that textbooks can't teach.
                                    </p>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-black mb-3 text-lg">Practical Guidance</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Every conversation focuses on actionable advice - from technical skills to career decisions that actually matter.
                                    </p>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-black mb-3 text-lg">Community Building</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Each episode strengthens our community by sharing diverse perspectives and fostering genuine connections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Expect */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            What to <span className="text-gray-600">Expect</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our conversations cover the topics that matter most to CS students in Pakistan
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Career Journeys</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Real stories from professionals who started where you are now - their challenges, decisions, and lessons learned.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Skill Development</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Practical advice on building technical skills, choosing specializations, and staying current with technology.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Mic className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Industry Insights</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Understanding Pakistan's tech landscape, opportunities, and how to navigate your career effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Featured Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                        Want to Share <span className="text-gray-600">Your Story?</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        If you have an inspiring journey or valuable insights for CS students, we'd love to have you on our podcast.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-3">Email Us</h3>
                            <p className="text-gray-600 mb-6">
                                Send us your background and story. We're looking for authentic experiences that can help our community.
                            </p>
                            <a
                                href="mailto:csconnectpakistan@gmail.com?subject=Podcast Guest Application"
                                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
                            >
                                Apply as Guest
                            </a>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mx-auto mb-4">
                                <Youtube className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-3">Subscribe</h3>
                            <p className="text-gray-600 mb-6">
                                Don't miss our latest episodes. Subscribe to our YouTube channel for notifications.
                            </p>
                            <a
                                href={youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200"
                            >
                                Subscribe Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Podcasts;
