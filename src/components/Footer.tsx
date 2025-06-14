import React from "react";
import { Link } from "react-router-dom";

// Brain Icon Component for Logo
const BrainIcon: React.FC<{ className?: string }> = ({
    className = "w-6 h-6",
}) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4.2C6.5 13.5 6 15 6 16.5c0 3.5 2.5 6 6 6s6-2.5 6-6c0-1.5-.5-3-1.5-4.3C17.5 11 18 9.5 18 8c0-3.5-2.5-6-6-6zm-2 18c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm4-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
);

import { platforms } from "../socialMediaLinks";

// // Social Media Icons as SVG Components - Simple Outlined Style
// const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
//     <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
//   </svg>
// )

// const DiscordIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
//     <path d="M9.5 12h5m-5 0a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2m-5 0v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5"/>
//     <path d="M7 8.5V7a5 5 0 0 1 10 0v1.5"/>
//   </svg>
// )

// const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
//     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
//     <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"/>
//   </svg>
// )

// const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
//     <rect x="2" y="9" width="4" height="12"/>
//     <circle cx="4" cy="4" r="2"/>
//   </svg>
// )

// const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
//     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//   </svg>
// )

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: "Community",
            links: [
                { name: "About Us", path: "/about" },
                { name: "Team", path: "/team" },
                { name: "Blog", path: "/blog" },
                { name: "Join Us", path: "/join" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Podcasts", path: "/podcasts" },
                { name: "FAQ", path: "/faq" },
                { name: "UniCalc Tool", path: "https://unicalc.vercel.app" },
                { name: "FastMock Tool", path: "https://fastmock.vercel.app" },
            ],
        },
        {
            title: "Connect",
            links: [
                {
                    name: "WhatsApp Community",
                    path: "https://chat.whatsapp.com/JwQrKjYblcU6C2Rz4k3jIi",
                },
                {
                    name: "Discord Server",
                    path: "https://discord.gg/U8mNhUq4Qm",
                },
                {
                    name: "YouTube Channel",
                    path: "https://youtube.com/@csconnectpakistan",
                },
                {
                    name: "LinkedIn",
                    path: "https://linkedin.com/company/csconnectpakistan",
                },
                {
                    name: "Instagram",
                    path: "https://instagram.com/csconnectpakistan",
                },
            ],
        },
    ];

    let socialLinks = platforms;

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 text-center md:text-left">
                        <Link
                            to="/"
                            className="inline-flex md:flex items-center space-x-3 mb-4"
                        >
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <BrainIcon className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    CS Connect
                                </h2>
                                <p className="text-gray-300 text-sm font-medium">
                                    Pakistan
                                </p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
                            By the tech students, for the tech students of
                            Pakistan.
                        </p>
                    </div>

                    {/* Links Sections - Two columns on mobile */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
                        {footerSections.map((section) => (
                            <div
                                key={section.title}
                                className="text-center md:text-left"
                            >
                                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            {link.path.startsWith("http") ? (
                                                <a
                                                    href={link.path}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                                >
                                                    {link.name}
                                                </a>
                                            ) : (
                                                <Link
                                                    to={link.path}
                                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} CS Connect Pakistan. All rights
                            reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                            <span className="text-gray-400 text-sm">
                                Follow us:
                            </span>
                            <div className="flex items-center space-x-3 md:ml-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-all duration-200 ${social.HoverColor}`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
