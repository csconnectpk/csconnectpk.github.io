import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

interface SmartNavbarProps {
    className?: string;
}

const SmartNavbar: React.FC<SmartNavbarProps> = ({ className = "" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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

    // Track scroll for mobile navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleNavClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-sm' 
                    : 'bg-white/90 backdrop-blur-sm'
            } ${className}`}>
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                    <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
                        {/* Logo - Optimized for mobile */}
                        <Link
                            to="/"
                            onClick={handleNavClick}
                            className="group flex items-center space-x-2 sm:space-x-3 flex-shrink-0 hover:scale-105 transition-transform duration-300 min-h-[44px] min-w-[44px] -ml-1 pl-1"
                        >
                            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-gray-100 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src="black_logo.png"
                                    alt="CS Connect Pakistan"
                                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-sm sm:text-base lg:text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    CS Connect Pakistan
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
                                    className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold transition-all duration-300 rounded-lg hover:bg-gray-50 min-h-[44px] flex items-center ${
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
                                    <button className="group inline-flex items-center bg-blue-600 text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-h-[44px]">
                                        Join Us
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button - Enhanced */}
                        <button
                            onClick={handleMenuToggle}
                            className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 group min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMenuOpen}
                        >
                            <div className="relative w-6 h-6">
                                <Menu className={`absolute inset-0 w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                                <X className={`absolute inset-0 w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Full Screen */}
            <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu Panel */}
                <div className={`absolute top-14 sm:top-16 left-0 right-0 bg-white border-b border-gray-200/60 shadow-xl transition-all duration-300 ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}>
                    <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={handleNavClick}
                                className={`group flex items-center justify-between px-4 py-4 text-base font-semibold rounded-xl transition-all duration-300 min-h-[56px] touch-manipulation ${
                                    isActive(item.path)
                                        ? "text-blue-600 bg-blue-50 border border-blue-200/60"
                                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100"
                                }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span>{item.name}</span>
                                <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                                    isActive(item.path) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1'
                                }`} />
                            </Link>
                        ))}
                        
                        {/* Mobile CTA Button */}
                        <div className="pt-4 sm:pt-6 border-t border-gray-200">
                            <Link
                                to="/join"
                                onClick={handleNavClick}
                                className="group flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px] touch-manipulation"
                            >
                                Join Our Community
                                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmartNavbar;
