import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
    { name: 'Contact', path: '/contact' },
  ],
  className = ''
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(false)
  const location = useLocation()
  const navRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => location.pathname === path

  // Detect background color based on scroll position
  useEffect(() => {
    const detectBackgroundColor = () => {
      if (!navRef.current) return

      const navRect = navRef.current.getBoundingClientRect()
      const navCenterY = navRect.top + navRect.height / 2

      // Get all elements at the navbar's center position
      const elementsBelow = document.elementsFromPoint(window.innerWidth / 2, navCenterY)
      
      // Check each element's computed background color
      for (const element of elementsBelow) {
        if (element === navRef.current) continue
        
        const computedStyle = window.getComputedStyle(element)
        const bgColor = computedStyle.backgroundColor
        const bgImage = computedStyle.backgroundImage
        
        // Parse background color
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const isDark = isColorDark(bgColor)
          setIsDarkBackground(isDark)
          return
        }
        
        // Check for background images or gradients
        if (bgImage && bgImage !== 'none') {
          // Assume dark background for images/gradients unless specified
          setIsDarkBackground(true)
          return
        }
        
        // Check for common dark/light class names
        const classList = element.classList
        if (classList.contains('bg-black') || classList.contains('bg-gray-900') || 
            classList.contains('bg-gray-800') || classList.contains('dark')) {
          setIsDarkBackground(true)
          return
        }
        if (classList.contains('bg-white') || classList.contains('bg-gray-50') || 
            classList.contains('bg-gray-100') || classList.contains('light')) {
          setIsDarkBackground(false)
          return
        }
      }
      
      // Default based on page
      setIsDarkBackground(location.pathname === '/')
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      detectBackgroundColor()
    }

    // Initial detection
    detectBackgroundColor()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', detectBackgroundColor)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', detectBackgroundColor)
    }
  }, [location.pathname])

  // Helper function to determine if a color is dark
  const isColorDark = (color: string): boolean => {
    // Handle rgb/rgba colors
    const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
    if (rgbMatch) {
      const [, r, g, b] = rgbMatch.map(Number)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000
      return brightness < 128
    }
    return false
  }

  // Dynamic styles based on background
  const getNavStyles = () => {
    if (isDarkBackground) {
      return {
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.2)',
        text: 'text-white',
        textSecondary: 'text-white/80',
        button: 'bg-white/20 text-white hover:bg-white/30',
        activeButton: 'bg-white/30 text-white',
        mobileMenu: 'bg-white/10 border-white/20'
      }
    } else {
      return {
        background: 'rgba(255, 255, 255, 0.8)',
        border: 'rgba(0, 0, 0, 0.1)',
        text: 'text-gray-900',
        textSecondary: 'text-gray-700',
        button: 'bg-gray-900 text-white hover:bg-gray-800',
        activeButton: 'bg-gray-200 text-gray-900',
        mobileMenu: 'bg-white/90 border-gray-200'
      }
    }
  }

  const styles = getNavStyles()

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          ref={navRef}
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${className}`}
        >
          <div 
            className="backdrop-blur-lg rounded-2xl px-4 py-2 shadow-2xl transition-all duration-300"
            style={{ 
              backgroundColor: styles.background,
              borderColor: styles.border,
              border: '1px solid'
            }}
          >
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {items.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                    isActive(item.path)
                      ? `${styles.activeButton} backdrop-blur-sm`
                      : `${styles.textSecondary} hover:${styles.text} hover:bg-black/5 hover:backdrop-blur-sm`
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
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${styles.button} backdrop-blur-sm ml-2 shadow-lg`}
                >
                  Join Us
                </motion.button>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl ${styles.button.split(' ').slice(0, 2).join(' ')} backdrop-blur-sm transition-colors`}
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    className={`absolute top-full left-0 right-0 mt-2 backdrop-blur-xl border rounded-xl overflow-hidden shadow-2xl`}
                    style={{ 
                      backgroundColor: styles.background,
                      borderColor: styles.border
                    }}
                  >
                    <div className="py-2 space-y-1 px-2">
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                            isActive(item.path)
                              ? styles.activeButton
                              : `${styles.textSecondary} hover:bg-black/5`
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        to="/join"
                        className={`block px-3 py-2 rounded-lg font-medium transition-all text-sm ${styles.button} text-center shadow-sm`}
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
  )
}

export default SmartNavbar 