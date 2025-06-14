import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

    // const socialMedia = [
    //   {
    //     name: 'WhatsApp',
    //     members: 2000,
    //     suffix: '+',
    //     description: 'Main community hub for daily discussions and opportunities',
    //     icon: WhatsAppIcon,
    //     color: 'bg-green-500',
    //     hoverColor: 'hover:bg-green-600',
    //     link: 'https://chat.whatsapp.com/JwQrKjYblcU6C2Rz4k3jIi'
    //   },
    //   {
    //     name: 'Discord',
    //     members: 800,
    //     suffix: '+',
    //     description: 'Technical discussions, study groups, and voice chats',
    //     icon: DiscordIcon,
    //     color: 'bg-indigo-500',
    //     hoverColor: 'hover:bg-indigo-600',
    //     link: 'https://discord.gg/U8mNhUq4Qm'
    //   },
    //   {
    //     name: 'YouTube',
    //     members: 5000,
    //     suffix: '+',
    //     description: 'Podcasts, tutorials, and tech talks',
    //     icon: YouTubeIcon,
    //     color: 'bg-red-500',
    //     hoverColor: 'hover:bg-red-600',
    //     link: 'https://youtube.com/@csconnectpakistan'
    //   },
    //   {
    //     name: 'LinkedIn',
    //     members: 3000,
    //     suffix: '+',
    //     description: 'Professional networking and career updates',
    //     icon: LinkedInIcon,
    //     color: 'bg-blue-600',
    //     hoverColor: 'hover:bg-blue-700',
    //     link: 'https://linkedin.com/company/csconnectpakistan'
    //   },
    //   {
    //     name: 'Instagram',
    //     members: 2000,
    //     suffix: '+',
    //     description: 'Behind the scenes and community highlights',
    //     icon: InstagramIcon,
    //     color: 'bg-pink-500',
    //     hoverColor: 'hover:bg-pink-600',
    //     link: 'https://instagram.com/csconnectpakistan'
    //   }
    // ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-black text-white relative overflow-hidden pt-28">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-8"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Join Pakistan's Largest CS Community
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            Connect, Learn &
                            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Grow Together
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                        >
                            Join thousands of CS students from universities
                            across Pakistan. Connect, learn, and build your
                            future in tech together.
                        </motion.p>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                        >
                            {[
                                {
                                    label: "Student-Led Community",
                                    description: "By students, for students",
                                },
                                {
                                    label: "All Universities Welcome",
                                    description: "From FAST to local colleges",
                                },
                                {
                                    label: "Completely Free",
                                    description: "No fees, no barriers",
                                },
                            ].map((value, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-lg md:text-xl font-bold text-white mb-2">
                                        {value.label}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {value.description}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Join Our Community Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            Where We{" "}
                            <span className="text-gray-600">Connect</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            CS Connect Pakistan exists across multiple
                            platforms, each serving a unique purpose in our
                            community ecosystem. We believe in meeting students
                            where they already are, making it easy for everyone
                            to participate and contribute.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-12"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-black">
                                    Our Digital Home Across Pakistan
                                </h3>
                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p>
                                        What started as a simple WhatsApp group
                                        has evolved into a comprehensive digital
                                        ecosystem that serves thousands of CS
                                        students across Pakistan. Each platform
                                        we use has been carefully chosen to
                                        serve specific needs of our community.
                                    </p>
                                    <p>
                                        From quick daily discussions on WhatsApp
                                        to in-depth technical conversations on
                                        Discord, from professional networking on
                                        LinkedIn to educational content on
                                        YouTube, we ensure that every student
                                        finds their preferred way to engage and
                                        learn.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {platforms.map((platform, index) => {
                                    const IconComponent = platform.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={platform.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.6,
                                                delay: index * 0.1,
                                            }}
                                            className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                                        >
                                            <div
                                                className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}
                                            >
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-black group-hover:text-gray-700 transition-colors">
                                                    {platform.name}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    {platform.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            Get in <span className="text-gray-600">Touch</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Have questions? Want to collaborate? or need
                            guidance? We're here to help you succeed.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gray-50 rounded-2xl p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        <User className="w-4 h-4 inline mr-2" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        <Mail className="w-4 h-4 inline mr-2" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="university"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        <GraduationCap className="w-4 h-4 inline mr-2" />
                                        University
                                    </label>
                                    <input
                                        type="text"
                                        id="university"
                                        name="university"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                        placeholder="Your university name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        <Hash className="w-4 h-4 inline mr-2" />
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                                    >
                                        <option value="">
                                            Select a subject
                                        </option>
                                        <option value="general">
                                            General Inquiry
                                        </option>
                                        <option value="join">
                                            Want to Join
                                        </option>
                                        <option value="collaboration">
                                            Collaboration
                                        </option>
                                        <option value="podcast">
                                            Podcast Feature
                                        </option>
                                        <option value="mentorship">
                                            Mentorship
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    <MessageSquare className="w-4 h-4 inline mr-2" />
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-3" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg flex items-center ${
                                        result.includes("success") ||
                                        result.includes("sent")
                                            ? "bg-green-50 text-green-800 border border-green-200"
                                            : "bg-red-50 text-red-800 border border-red-200"
                                    }`}
                                >
                                    {result.includes("success") ||
                                    result.includes("sent") ? (
                                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                                    )}
                                    <span className="text-sm">{result}</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                            Why Join{" "}
                            <span className="text-gray-600">
                                CS Connect Pakistan?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We're not just another student group. We're a
                            movement of Pakistani CS students who believe in
                            collective growth, shared knowledge, and building
                            each other up in the tech industry.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-black flex items-center">
                                <Users className="w-8 h-8 mr-3 text-blue-600" />
                                Community & Networking
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Being part of CS Connect Pakistan means
                                    you're never alone in your journey. Whether
                                    you're struggling with a difficult
                                    algorithm, looking for project partners, or
                                    need advice on career decisions, there's
                                    always someone ready to help.
                                </p>
                                <p className="font-medium text-black">
                                    What you get:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Direct access to students from top
                                            universities across Pakistan
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Study groups and collaborative
                                            learning opportunities
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Peer-to-peer mentorship and
                                            knowledge sharing
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Lifelong friendships with
                                            like-minded individuals
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-black flex items-center">
                                <Award className="w-8 h-8 mr-3 text-purple-600" />
                                Career & Growth
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Your career in tech doesn't start after
                                    graduation—it starts now. CS Connect
                                    Pakistan provides you with the resources,
                                    connections, and opportunities to build a
                                    strong foundation for your professional
                                    journey.
                                </p>
                                <p className="font-medium text-black">
                                    Career benefits:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Exclusive internship and job
                                            opportunities shared within the
                                            community
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Interview preparation sessions and
                                            mock interviews
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Resume reviews and portfolio
                                            building guidance
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Direct connections with industry
                                            professionals and alumni
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-black text-white rounded-3xl p-8 lg:p-12"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                                    Learning & Skill Development
                                </h3>
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        The tech industry evolves rapidly, and
                                        staying updated can be challenging when
                                        you're studying alone. Our community
                                        ensures you're always learning the
                                        latest technologies and best practices.
                                    </p>
                                    <p>
                                        From beginner-friendly tutorials to
                                        advanced technical discussions, from
                                        coding competitions to project
                                        collaborations, we provide multiple
                                        avenues for continuous learning and
                                        growth.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xl font-semibold mb-4 text-white">
                                    Learning opportunities:
                                </h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        "Weekly coding challenges and competitions",
                                        "Technical workshops and webinars",
                                        "Open source project collaborations",
                                        "Study materials and resource sharing",
                                        "Peer code reviews and feedback",
                                        "Industry trend discussions and insights",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-300">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Join;
