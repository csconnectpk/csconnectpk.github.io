import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Brain Icon Component for Logo
const BrainIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4.2C6.5 13.5 6 15 6 16.5c0 3.5 2.5 6 6 6s6-2.5 6-6c0-1.5-.5-3-1.5-4.3C17.5 11 18 9.5 18 8c0-3.5-2.5-6-6-6zm-2 18c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm4-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>
)

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  // Determine if we're on homepage
  const isHomepage = location.pathname === '/'

  return (
    <>
      {/* Full Navbar - Always visible at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -20 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed w-full z-40 ${isScrolled ? 'pointer-events-none' : ''}`}
      >
        <div className={`${isHomepage ? 'bg-transparent pt-8 pb-4' : 'bg-white/80 backdrop-blur-lg shadow-lg py-4'}`}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo and branding */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link to="/" className="flex items-center space-x-4 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ${
                      isHomepage 
                        ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/30' 
                        : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700'
                    } backdrop-blur-lg border rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <BrainIcon className={`w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${
                        isHomepage ? 'text-white' : 'text-white'
                      }`} />
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="flex flex-col"
                  >
                    <span className={`text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 leading-tight ${
                      isHomepage ? 'text-white' : 'text-gray-900'
                    } group-hover:opacity-80`}>
                      CS Connect Pakistan
                    </span>
                    <span className={`text-xs md:text-sm font-medium ${
                      isHomepage ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      Connecting Pakistani Geeks
                    </span>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desktop Navigation and Join Button */}
              <div className="hidden lg:flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  {navItems.slice(1).map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`relative px-4 py-2 rounded-2xl transition-all duration-300 font-medium text-sm ${
                        isActive(item.path)
                          ? isHomepage
                            ? 'text-white bg-white/20 backdrop-blur-sm'
                            : 'text-gray-900 bg-gray-200/80 backdrop-blur-sm'
                          : isHomepage
                            ? 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 backdrop-blur-sm'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Link to="/join">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: isHomepage 
                          ? "0 12px 32px rgba(255, 255, 255, 0.2)"
                          : "0 12px 32px rgba(0, 0, 0, 0.1)",
                        y: -2 
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm shadow-lg group ${
                        isHomepage
                          ? 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      } backdrop-blur-sm`}
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                        Join Us
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-3 rounded-2xl ${
                    isHomepage
                      ? 'bg-white/20 text-white border-white/30'
                      : 'bg-gray-100 text-gray-900 border-gray-200'
                  } backdrop-blur-sm border shadow-lg`}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile navigation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`lg:hidden mt-4 rounded-2xl ${
                    isHomepage
                      ? 'bg-white/20 border-white/30'
                      : 'bg-white/90 border-gray-200'
                  } backdrop-blur-xl border`}
                >
                  <div className="py-4 space-y-2 px-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-3 rounded-2xl font-medium transition-all backdrop-blur-sm ${
                          isActive(item.path)
                            ? isHomepage
                              ? 'text-white bg-white/30'
                              : 'text-gray-900 bg-gray-200/80'
                            : isHomepage
                              ? 'text-white/90 hover:bg-white/20'
                              : 'text-gray-700 hover:bg-gray-100/80'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to="/join"
                      className={`block px-4 py-3 rounded-2xl font-medium transition-all backdrop-blur-sm ${
                        isHomepage
                          ? 'bg-white/30 text-white hover:bg-white/40'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      } text-center`}
                      onClick={() => setIsOpen(false)}
                    >
                      Join Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Compact Scrolled Navbar - Only buttons */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-4 py-2 shadow-2xl">
              {/* Desktop compact nav */}
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-3 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                      isActive(item.path)
                        ? 'text-white bg-white/30 backdrop-blur-sm'
                        : 'text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/join">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm bg-white/30 text-white hover:bg-white/40 backdrop-blur-sm ml-2"
                  >
                    Join Us
                  </motion.button>
                </Link>
              </div>

              {/* Mobile compact nav */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl bg-white/20 text-white backdrop-blur-sm"
                >
                  {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden"
                    >
                      <div className="py-2 space-y-1 px-2">
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`block px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                              isActive(item.path)
                                ? 'text-white bg-white/30'
                                : 'text-white/90 hover:bg-white/20'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <Link
                          to="/join"
                          className="block px-3 py-2 rounded-lg font-medium transition-all text-sm bg-white/30 text-white hover:bg-white/40 text-center"
                          onClick={() => setIsOpen(false)}
                        >
                          Join Us
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 