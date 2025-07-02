import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface SmartNavbarProps {
    className?: string;
}

const SmartNavbar: React.FC<SmartNavbarProps> = ({ className = "" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Team", path: "/team" },
        { name: "Podcasts", path: "/podcasts" },
        { name: "Blog", path: "/blog" },
        { name: "FAQ", path: "/faq" },
    ];

    const isActive = (path: string) => location.pathname === path;

    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-sm ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-17 lg:h-18">
                    <Link
                        to="/"
                        onClick={handleNavClick}
                        className="group flex items-center space-x-2 sm:space-x-3 flex-shrink-0 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="white_logo.png"
                                alt="CS Connect Pakistan"
                                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-base sm:text-lg lg:text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                CS Connect
                            </span>
                            <span className="text-xs sm:text-sm text-gray-600 font-semibold -mt-0.5 sm:-mt-1">
                                Pakistan
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={handleNavClick}
                                className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold transition-all duration-300 rounded-lg hover:bg-gray-50 ${
                                    isActive(item.path)
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                }`}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                                )}
                            </Link>
                        ))}

                        <div className="ml-3 lg:ml-6">
                            <Link to="/join" onClick={handleNavClick}>
                                <button className="group inline-flex items-center bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Join Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 sm:p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200/60 bg-white/95 backdrop-blur-md">
                        <div className="px-2 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-1 sm:space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={`block px-3 sm:px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 min-h-[44px] flex items-center ${
                                        isActive(item.path)
                                            ? "text-blue-600 bg-blue-50 border border-blue-200/60"
                                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2 sm:pt-4">
                                <Link
                                    to="/join"
                                    onClick={handleNavClick}
                                    className="group flex items-center justify-center w-full bg-blue-600 text-white px-3 sm:px-4 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg min-h-[44px]"
                                >
                                    Join Our Community
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default SmartNavbar;
