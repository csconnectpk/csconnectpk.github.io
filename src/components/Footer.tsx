import React from "react";
import { platforms } from "../socialMediaLinks";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                
                {/* Enhanced Layout */}
                <div className="flex flex-col items-center space-y-8">
                    
                    {/* All Social Media Icons */}
                    <div className="flex items-center justify-center gap-6 sm:gap-8">
                        {platforms.map((platform) => {
                            const IconComponent = platform.icon;
                            return (
                                <a
                                    key={platform.name}
                                    href={platform.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 transition-all duration-300 touch-manipulation hover:scale-110 ${platform.Hovercolor || platform.HoverColor || 'hover:text-white'}`}
                                    aria-label={`Follow us on ${platform.name}`}
                                >
                                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Larger Page Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-base sm:text-lg">
                        <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                            About
                        </a>
                        <a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                            Blog
                        </a>
                        <a href="/join" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                            Join Us
                        </a>
                        <a href="/podcasts" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                            Podcasts
                        </a>
                        <a href="/team" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                            Team
                        </a>
                    </div>

                    {/* Larger Copyright */}
                    <div className="text-center text-sm sm:text-base text-gray-500 font-medium">
                        © {currentYear} CS Connect Pakistan
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
