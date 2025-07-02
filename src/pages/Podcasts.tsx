import React, { useEffect } from "react";
import { Play, Calendar, Mail, Youtube, Users, Mic, Sparkles } from "lucide-react";
import { youtubeLink } from "../socialMediaLinks";

const Podcasts: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const recentPodcasts = [
        {
            id: 1,
            title: "How to Do CS Without Losing Inner Peace in a Fast-Paced World",
            host: "Azan Waseem",
            guest: "Sami Ullah Shah",
            uploadDate: "June 15, 2025",
            link: "https://youtu.be/NhPQtc92lus?si=y1E1C_r6k71WV1q1",
        },
        {
            id: 2,
            title: "Nauman Anwar: FAST, Telecom, Harvard, Business & Energy",
            host: "Azan Waseem",
            guest: "Nauman Anwar",
            uploadDate: "May 20, 2025",
            link: "https://youtu.be/iSq15mG1hTc?si=p3zLTGVoPaqMxMBn",
        },
        {
            id: 3,
            title: "From Pakistan to Ireland: The Journey of a Senior SWE",
            host: "Azan Waseem",
            guest: "Kashif Umair Liaqat",
            uploadDate: "April 28, 2025",
            link: "https://youtu.be/Uy6LhfnALzw?si=LSYpgdgUZZOLyKF5",
        },
        {
            id: 4,
            title: "Should CS Undergrads Pursue a Master's?",
            host: "Talha Asghar",
            guest: "Hamza Azhar",
            uploadDate: "March 10, 2025",
            link: "https://youtu.be/X1G7GZIz-ag?si=S11gBP9P7wUPU3hH",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="relative bg-white overflow-hidden">
                {/* Subtle background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 text-center">
                    <div>
                        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-red-50 to-pink-50 border border-red-200/60 mb-6 sm:mb-8 shadow-sm">
                            <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 mr-2" />
                            <span className="text-xs sm:text-sm font-semibold text-red-700 tracking-wide">CS Connect Podcasts</span>
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                            <span className="block mb-1 sm:mb-2">Real Conversations with</span>
                            <span className="relative inline-block">
                                <span className="text-blue-600">Tech Leaders</span>
                                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                            </span>
                        </h1>
                        
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                            Listen to inspiring stories from Pakistani professionals who've made their mark in tech
                        </p>
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
                            <h3 className="text-3xl font-bold mb-8 text-black">Podcast Stats</h3>
                            <div className="space-y-8">
                                <div className="border-b border-gray-200 pb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium text-lg">WhatsApp Members</span>
                                        <span className="text-4xl font-bold text-black">2,000+</span>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 pb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium text-lg">Universities</span>
                                        <span className="text-4xl font-bold text-black">50+</span>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 pb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700 font-medium text-lg">Discord Members</span>
                                        <span className="text-4xl font-bold text-black">400+</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-12 pt-8 border-t border-gray-300">
                                <h4 className="font-bold text-black mb-4 text-xl">How We Record</h4>
                                <div className="space-y-4 text-base text-gray-700">
                                    <div className="flex justify-between items-center">
                                        <strong>Platform:</strong> 
                                        <span>Google Meet</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <strong>Duration:</strong> 
                                        <span>30-45 minutes</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <strong>Format:</strong> 
                                        <span>YouTube</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Podcasts */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            Recent <span className="text-gray-600">Episodes</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Check out our latest conversations with professionals and alumni
                        </p>
                    </div>

                    <div className="space-y-8">
                        {recentPodcasts.map((podcast, index) => (
                            <div
                                key={podcast.id}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                                    <div className="lg:col-span-3">
                                        <h3 className="text-2xl lg:text-2xl font-bold mb-4 text-black leading-tight">
                                            {podcast.title}
                                        </h3>
                                        
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center text-base text-gray-600">
                                                <Mic className="w-4 h-4 mr-2" />
                                                <span className="font-medium">Host:</span>
                                                <span className="ml-1">{podcast.host}</span>
                                            </div>
                                            <div className="flex items-center text-base text-gray-600">
                                                <Users className="w-4 h-4 mr-2" />
                                                <span className="font-medium">Guest:</span>
                                                <span className="ml-1">{podcast.guest}</span>
                                            </div>
                                            <div className="flex items-center text-base text-gray-600">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span className="font-medium">Released:</span>
                                                <span className="ml-1">{podcast.uploadDate}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-1 flex lg:justify-end">
                                        <a
                                            href={podcast.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-red-600 text-white px-6 py-3 sm:py-3 rounded-lg font-semibold text-lg sm:text-base hover:bg-red-700 transition-all duration-200"
                                        >
                                            <Play className="w-5 h-5 mr-2" />
                                            Watch Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
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
