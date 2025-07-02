import React, { useState, useEffect } from "react";
import {
    User,
    Calendar,
    Clock,
    ArrowRight,
    X,
    Share2,
    ExternalLink,
    Download,
    BookOpen,
    Sparkles,
} from "lucide-react";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    featured?: boolean;
    linkedin?: string;
}

const Blog: React.FC = () => {
    const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(
        null
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "Landing Your First Tech Internship: Complete Guide for Pakistani Students",
            excerpt:
                "Landing your first tech internship in Pakistan can feel overwhelming, but with the right strategy and preparation, you can secure a position at top companies like Careem, Daraz, Systems Limited, or exciting startups. This comprehensive guide covers everything from finding opportunities to acing interviews, based on real experiences from Pakistani students.",
            category: "Career Guide",
            author: "Muhammad Ali",
            date: "December 12, 2024",
            readTime: "15 min read",
            featured: true,
            linkedin: "muhammad-ali-cs",
        },
        {
            id: 2,
            title: "Getting Started with Computer Science in Pakistan: A Complete Guide",
            excerpt:
                "Starting your Computer Science journey in Pakistan can feel overwhelming with so many universities, career paths, and technologies to choose from. This comprehensive guide will walk you through everything you need to know to make informed decisions and set yourself up for success.",
            category: "Study Guide",
            author: "Ahmed Hassan",
            date: "December 18, 2024",
            readTime: "12 min read",
            linkedin: "ahmed-hassan-cs",
        },
        {
            id: 3,
            title: "Building a Strong GitHub Portfolio: Projects That Get You Hired",
            excerpt:
                "Your GitHub profile is often the first thing recruiters and hiring managers look at when evaluating your technical skills. In Pakistan's competitive tech job market, a well-crafted GitHub portfolio can be the difference between landing an interview at your dream company or being overlooked.",
            category: "Portfolio Guide",
            author: "Sara Ahmed",
            date: "December 10, 2024",
            readTime: "18 min read",
            linkedin: "sara-ahmed-dev",
        },
        {
            id: 4,
            title: "Top 10 Programming Languages to Learn in 2024: A Pakistani Student's Perspective",
            excerpt:
                "The programming landscape is constantly evolving, and choosing the right languages to learn can significantly impact your career trajectory in Pakistan's growing tech industry. After analyzing job market trends, salary data, and talking to hiring managers at top Pakistani tech companies, here are the 10 programming languages that will give you the best opportunities in 2024.",
            category: "Tech Trends",
            author: "Fatima Khan",
            date: "December 15, 2024",
            readTime: "10 min read",
            linkedin: "fatima-khan-tech",
        },
    ];

    const openArticle = (article: BlogPost) => {
        setSelectedArticle(article);
        document.body.style.overflow = "hidden";
    };

    const closeArticle = () => {
        setSelectedArticle(null);
        document.body.style.overflow = "unset";
    };

    const shareArticle = (article: BlogPost, platform: string) => {
        const url = `https://csconnect.pk/blog/${article.id}`;
        const text = `Check out this article: ${article.title}`;

        switch (platform) {
            case "twitter":
                window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        text
                    )}&url=${encodeURIComponent(url)}`
                );
                break;
            case "linkedin":
                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        url
                    )}`
                );
                break;
            case "whatsapp":
                window.open(
                    `https://wa.me/?text=${encodeURIComponent(
                        `${text} ${url}`
                    )}`
                );
                break;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="relative bg-white overflow-hidden">
                {/* Subtle background elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 text-center">
                    <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-6 sm:mb-8 shadow-sm">
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
                        <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">Knowledge Hub</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight text-gray-900">
                        CS Connect
                        <br />
                        <span className="relative inline-block">
                            <span className="text-blue-600">Blog & Resources</span>
                            <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                        </span>
                    </h1>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                        Insights, tutorials, and success stories from Pakistan's brightest computer science students and industry professionals
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                    <section key={post.id} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                                <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-6 sm:mb-8 shadow-sm">
                                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
                                    <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">Featured Article</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
                                    Latest from our community
                                </h2>
                            </div>

                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer max-w-4xl mx-auto"
                                onClick={() => openArticle(post)}
                            >
                                <div className="p-6 sm:p-8 lg:p-12">
                                    <div className="mb-4 sm:mb-6">
                                        <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-500 mb-6 sm:mb-8">
                                        <div className="flex items-center">
                                            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Read More Button */}
                                    <button className="group inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        <span>Read Full Article</span>
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

            {/* All Blog Posts */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
                            All Articles
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                            Explore our collection of guides, tutorials, and insights from Pakistan's tech community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {blogPosts
                            .filter((post) => !post.featured)
                            .map((post, index) => (
                                <div
                                    key={post.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer"
                                    onClick={() => openArticle(post)}
                                >
                                    <div className="p-6 sm:p-8">
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold">
                                                {post.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                                            <div className="flex items-center">
                                                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Read More Button */}
                                        <button className="group inline-flex items-center bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                            <span>Read Article</span>
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Article Modal */}
            {selectedArticle && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-3 sm:p-4 lg:p-6">
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl relative">
                        {/* Modal Header */}
                        <div className="p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                            <div className="flex items-start justify-between">
                                <div className="flex-1 mr-3 sm:mr-4">
                                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                                        {selectedArticle.category}
                                    </span>
                                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight mb-2 sm:mb-3">
                                        {selectedArticle.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                            <span>{selectedArticle.author}</span>
                                        </div>
                                        {selectedArticle.linkedin && (
                                            <a
                                                href={`https://linkedin.com/in/${selectedArticle.linkedin}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-700 flex items-center transition-colors duration-300"
                                            >
                                                <ExternalLink className="w-3 h-3 mr-1" />
                                                LinkedIn
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <button
                                    onClick={closeArticle}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center flex-shrink-0"
                                    aria-label="Close article"
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(95vh - 200px)' }}>
                            <div className="p-4 sm:p-6">
                                <div className="max-w-none">
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                        {selectedArticle.excerpt}
                                    </p>
                                    
                                    <div className="bg-blue-50 border border-blue-200/60 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                                        <h3 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">Coming Soon!</h3>
                                        <p className="text-blue-800 text-xs sm:text-sm lg:text-base leading-relaxed">
                                            This article is currently being written by our community experts. 
                                            Join our WhatsApp community to get notified when it's published!
                                        </p>
                                    </div>

                                    {/* Article metadata */}
                                    <div className="border-t border-gray-200 pt-4 sm:pt-6 mt-4 sm:mt-6">
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                                <span>{selectedArticle.date}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                                <span>{selectedArticle.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                                <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                                    Share this article:
                                </div>
                                <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-3">
                                    <button
                                        onClick={() =>
                                            shareArticle(selectedArticle, "whatsapp")
                                        }
                                        className="px-3 py-2 sm:px-4 sm:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-xs sm:text-sm font-semibold min-h-[36px] flex items-center justify-center"
                                    >
                                        WhatsApp
                                    </button>
                                    <button
                                        onClick={() =>
                                            shareArticle(selectedArticle, "linkedin")
                                        }
                                        className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-xs sm:text-sm font-semibold min-h-[36px] flex items-center justify-center"
                                    >
                                        LinkedIn
                                    </button>
                                    <button
                                        onClick={() =>
                                            shareArticle(selectedArticle, "twitter")
                                        }
                                        className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-xs sm:text-sm font-semibold min-h-[36px] flex items-center justify-center"
                                    >
                                        Twitter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;
