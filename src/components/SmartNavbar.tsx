import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Brain } from 'lucide-react'

interface NavItem {
  name: string
  path: string
}

interface SmartNavbarProps {
  items?: NavItem[]
  className?: string
}

const SmartNavbar: React.FC<SmartNavbarProps> = ({ 
  items = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
  ],
  className = ''
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  const location = useLocation()
  const navRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => location.pathname === path

  // Detect background color and scroll
  useEffect(() => {
    const detectBackgroundColor = () => {
      const scrollY = window.scrollY
      
      // Determine if we're on a dark background based on scroll position
      if (location.pathname === '/') {
        setIsDarkBackground(scrollY < 600) // Hero section is dark
      } else {
        setIsDarkBackground(false)
      }
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 100)
      detectBackgroundColor()
    }

    // Initial detection
    detectBackgroundColor()
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Logo component
  const Logo = () => (
    <Link to="/" className="flex items-center space-x-2 group">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isDarkBackground 
            ? 'bg-white/10 text-white group-hover:bg-white/20' 
            : 'bg-black/10 text-black group-hover:bg-black/20'
        }`}
      >
        <Brain className="w-5 h-5" />
      </motion.div>
      <span className={`font-bold text-lg transition-colors duration-300 ${
        isDarkBackground ? 'text-white' : 'text-black'
      }`}>
        CS Connect
      </span>
    </Link>
  )

  // Dynamic styles based on background
  const getNavStyles = () => {
    if (isDarkBackground) {
      return {
        background: 'rgba(255, 255, 255, 0.08)',
        border: 'rgba(255, 255, 255, 0.15)',
        text: 'text-white',
        textSecondary: 'text-white/80',
        textHover: 'hover:text-white',
        activeText: 'text-white',
        activeBg: 'bg-white/15',
        button: 'bg-white/15 text-white hover:bg-white/25 border-white/20',
        mobileMenu: 'bg-black/90 backdrop-blur-xl border-white/10'
      }
    } else {
      return {
        background: 'rgba(255, 255, 255, 0.85)',
        border: 'rgba(0, 0, 0, 0.08)',
        text: 'text-black',
        textSecondary: 'text-black/70',
        textHover: 'hover:text-black',
        activeText: 'text-black',
        activeBg: 'bg-black/8',
        button: 'bg-black text-white hover:bg-black/90 border-black/10',
        mobileMenu: 'bg-white/95 backdrop-blur-xl border-black/10'
      }
    }
  }

  const styles = getNavStyles()

  return (
    <>
      {/* Fixed Logo - Always visible */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-6 left-6 z-50"
      >
        <Logo />
      </motion.div>

      {/* Scrolled Navbar - Appears when scrolling */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            ref={navRef}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 ${className}`}
          >
            <div 
              className="backdrop-blur-xl rounded-2xl px-6 py-3 shadow-2xl transition-all duration-500 border"
              style={{ 
                backgroundColor: styles.background,
                borderColor: styles.border
              }}
            >
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                      isActive(item.path)
                        ? `${styles.activeText} ${styles.activeBg} backdrop-blur-sm`
                        : `${styles.textSecondary} ${styles.textHover} hover:bg-black/5 hover:backdrop-blur-sm`
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-xl bg-current opacity-10"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
                <Link to="/join">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${styles.button} backdrop-blur-sm ml-2 shadow-lg border`}
                  >
                    Join Us
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Navigation */}
              <div className="lg:hidden flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Brain className={`w-6 h-6 ${styles.text}`} />
                  <span className={`font-bold ${styles.text}`}>CS Connect</span>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-lg ${styles.textSecondary} ${styles.textHover} transition-colors duration-200`}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`lg:hidden mt-2 py-4 px-2 rounded-2xl ${styles.mobileMenu} border shadow-2xl`}
                >
                  <div className="space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? `${styles.activeText} ${styles.activeBg}`
                            : `${styles.textSecondary} ${styles.textHover} hover:bg-black/5`
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to="/join"
                      className={`block mx-2 mt-4 px-4 py-3 rounded-xl font-semibold text-center ${styles.button} border`}
                    >
                      Join Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default SmartNavbar 