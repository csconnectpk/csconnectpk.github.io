import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";

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

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link
                        to="/"
                        className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                          <img
                            src="logo.png" // Update the path to the correct location of your image
                            alt="Logo"
                            className="w-9 h-9 sm:w-9 sm:h-9"
                          />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-base sm:text-lg text-gray-900">
                                CS Connect
                            </span>
                            <span className="text-xs sm:text-sm text-green-600 font-medium">
                                Pakistan
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive(item.path)
                                        ? "text-green-600 border-b-2 border-green-600"
                                        : "text-gray-700 hover:text-green-600"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Join Us Button */}
                        <Link to="/join">
                            <button className="bg-green-600 text-white px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 text-sm">
                                Join Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                                        isActive(item.path)
                                            ? "text-green-600 bg-green-50"
                                            : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/join"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full text-center bg-green-600 text-white px-3 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 mt-4"
                            >
                                Join Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default SmartNavbar;
