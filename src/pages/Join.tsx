import React, { useEffect, useState } from "react";
import {
    Users,
    MessageSquare,
    Award,
    Check,
    ArrowRight,
    Mail,
    Send,
    CheckCircle,
    AlertCircle,
    User,
    GraduationCap,
    Hash,
    Sparkles,
    BookOpen,
} from "lucide-react";
import { platforms } from "../socialMediaLinks";

const Join: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", "6e8b6992-223d-4d0e-9a2e-4d015c0fa15d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult(
                    "Message sent successfully! We'll get back to you soon."
                );
                (e.target as HTMLFormElement).reset();
            } else {
                console.log("Error", data);
                setResult(
                    data.message || "Something went wrong. Please try again."
                );
            }
        } catch (error) {
            console.error("Error:", error);
            setResult(
                "Network error. Please check your connection and try again."
            );
        } finally {
            setIsSubmitting(false);
        }
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
                        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60 mb-6 sm:mb-8 shadow-sm">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-2" />
                            <span className="text-xs sm:text-sm font-bold text-green-700 tracking-wide">Join Our Community</span>
                        </div>

                        {/* MUCH LARGER main heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 lg:mb-10 leading-tight text-gray-900 tracking-tight">
                            Connect with CS Students
                            <br />
                            <span className="relative inline-block ml-3">
                                <span className="text-blue-600">Across Pakistan</span>
                                <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                            </span>
                        </h1>

                        {/* Better subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
                            Join a growing community of CS students from universities across Pakistan. Learn together, share knowledge, and support each other's journey in tech.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12">
                            <a href="#platforms">
                                <button className="group flex items-center bg-blue-600 text-white px-6 py-3 sm:px-7 sm:py-4 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto min-w-[200px] sm:min-w-0">
                                    <Users className="mr-2 w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300" />
                                    View Platforms
                                </button>
                            </a>
                            
                            <a href="/about">
                                <button className="group flex items-center border-2 border-gray-300 text-gray-700 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto max-w-[180px] sm:max-w-none">
                                    <BookOpen className="mr-1.5 w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                                    Our Story
                                </button>
                            </a>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
                            <div className="text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    2,000+
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    Students
                                </div>
                            </div>
                            
                            <div className="text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    50+
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    Universities
                                </div>
                            </div>

                            <div className="col-span-2 lg:col-span-1 text-center p-3 sm:p-4 lg:p-6">
                                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-1 sm:mb-2">
                                    100%
                                </div>
                                <div className="text-gray-700 font-semibold text-xs sm:text-sm lg:text-base">
                                    Free to Join
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Community Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black">
                                A Community Built{" "}
                                <span className="text-gray-600">for Learning</span>
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg sm:text-lg">
                                    CS Connect Pakistan started as a simple WhatsApp group and has grown into a community where Pakistani CS students connect, share knowledge, and support each other's academic and career journeys.
                                </p>
                                <p className="text-lg sm:text-lg">
                                    We're a student-led community focused on creating genuine connections between CS students across Pakistan. Whether you need help with coursework, want to find study partners, or are looking for career guidance, you'll find supportive peers here.
                                </p>
                                <p className="text-lg sm:text-lg">
                                    Our community operates across multiple platforms to serve different needs - from daily discussions on WhatsApp to technical conversations on Discord, from educational content on YouTube to professional networking.
                                </p>
                                <p className="text-lg sm:text-lg">
                                    What makes us different is our genuine focus on helping each other succeed. We share opportunities, provide guidance, and celebrate each other's achievements as we build our careers in Pakistan's growing tech industry.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-3xl font-bold mb-6 text-black">Community Overview</h3>
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

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-black mb-3 text-lg">What We Offer</h4>
                                <div className="space-y-2 text-base text-gray-700">
                                    <p><strong>Free Community:</strong> No membership fees, ever</p>
                                    <p><strong>Peer Learning:</strong> Study groups and academic support</p>
                                    <p><strong>Career Guidance:</strong> Advice from seniors and professionals</p>
                                    <p><strong>Opportunity Sharing:</strong> Internships and job openings shared by community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            Where We <span className="text-gray-600">Connect</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're active across multiple platforms, each serving a unique purpose in our community
                        </p>
                    </div>

                    <div className="space-y-8">
                        {platforms.map((platform, index) => {
                            const IconComponent = platform.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${platform.color} rounded-xl flex items-center justify-center`}>
                                                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-black">{platform.name}</h3>
                                                    <p className="text-gray-600 font-medium">{platform.description}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                                                {platform.description}
                                            </p>
                                            <div className="flex items-center space-x-4">
                                                <span className="text-lg font-medium text-blue-600">Active Community</span>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a
                                                href={platform.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
                                            >
                                                Join Now
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                                Get in <span className="text-gray-600">Touch</span>
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Have questions about joining our community? Want to collaborate with us or need guidance about your CS journey? We're here to help and support you.
                                </p>
                                <p>
                                    Whether you're a current student looking for study partners, someone interested in contributing to the community, or just want to learn more about what we do, feel free to reach out.
                                </p>
                                <p>
                                    Our community is built on helping each other succeed. We're always happy to connect with fellow CS students and answer any questions you might have.
                                </p>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-4 text-black">What Our Members Value</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Authentic peer connections from universities across Pakistan</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Honest sharing of internship and learning opportunities</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Supportive environment for academic and career questions</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">Community-driven learning and knowledge sharing</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-black">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                {/* Mobile-first: Stack on mobile, grid on larger screens */}
                                <div className="space-y-4 sm:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                                    <div>
                                        <label htmlFor="name" className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700 mb-2 sm:mb-3">
                                            <User className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 align-text-bottom" />
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            autoComplete="name"
                                            className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg min-h-[48px] sm:min-h-[56px] touch-manipulation bg-white"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700 mb-2 sm:mb-3">
                                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 align-text-bottom" />
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            autoComplete="email"
                                            className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg min-h-[48px] sm:min-h-[56px] touch-manipulation bg-white"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="university" className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700 mb-2 sm:mb-3">
                                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 align-text-bottom" />
                                        University/Institution
                                    </label>
                                    <input
                                        type="text"
                                        id="university"
                                        name="university"
                                        required
                                        autoComplete="organization"
                                        className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg min-h-[48px] sm:min-h-[56px] touch-manipulation bg-white"
                                        placeholder="e.g., FAST NUCES, NUST, LUMS, GIKI"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="year" className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700 mb-2 sm:mb-3">
                                        <Hash className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 align-text-bottom" />
                                        Current Year of Study
                                    </label>
                                    <select
                                        id="year"
                                        name="year"
                                        required
                                        className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg min-h-[48px] sm:min-h-[56px] touch-manipulation appearance-none bg-white text-gray-900"
                                    >
                                        <option value="">Select your year</option>
                                        <option value="1st">1st Year</option>
                                        <option value="2nd">2nd Year</option>
                                        <option value="3rd">3rd Year</option>
                                        <option value="4th">4th Year</option>
                                        <option value="graduate">Recent Graduate</option>
                                        <option value="masters">Masters Student</option>
                                        <option value="phd">PhD Student</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm sm:text-base lg:text-lg font-medium text-gray-700 mb-2 sm:mb-3">
                                        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 align-text-bottom" />
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-y text-base sm:text-lg min-h-[120px] sm:min-h-[140px] touch-manipulation bg-white"
                                        placeholder="Tell us about yourself and how we can help you..."
                                    ></textarea>
                                </div>

                                {/* Enhanced submit button for mobile */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-4 py-4 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-base sm:text-lg min-h-[56px] sm:min-h-[64px] flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-none touch-manipulation"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                {result && (
                                    <div
                                        className={`p-4 rounded-xl flex items-start ${
                                            result.includes("success")
                                                ? "bg-green-50 text-green-700 border border-green-200"
                                                : "bg-red-50 text-red-700 border border-red-200"
                                        }`}
                                    >
                                        {result.includes("success") ? (
                                            <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                                        )}
                                        <span className="text-base sm:text-base">{result}</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Join;
