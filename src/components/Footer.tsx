import React from "react";
import { platforms } from "../socialMediaLinks";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                
                {/* Social Media Section */}
                <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                    
                    {/* Social Links - Clean icons without boxes */}
                    <div className="flex flex-col items-center space-y-4">
                        <span className="text-gray-400 font-semibold text-sm sm:text-base">Follow Our Journey</span>
                        <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                            {platforms.map((platform) => {
                                const IconComponent = platform.icon;
                                return (
                                    <a
                                        key={platform.name}
                                        href={platform.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group transition-all duration-300 hover:scale-110"
                                        aria-label={`Follow us on ${platform.name}`}
                                    >
                                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <div className="text-xs sm:text-sm text-gray-400">
                            © {currentYear} CS Connect Pakistan. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
