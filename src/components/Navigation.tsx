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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' }
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? '80%' : '100%',
          maxWidth: scrolled ? '900px' : '100%',
          borderRadius: scrolled ? '50px' : '0px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          boxShadow: scrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
            : '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
          y: scrolled ? 20 : 0,
          x: scrolled ? '0%' : '0%'
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          type: "tween"
        }}
        className={`fixed top-0 z-50 hidden lg:block ${
          scrolled 
            ? 'left-1/2 -translate-x-1/2' 
            : 'left-0 right-0'
        }`}
      >
        <div className={`${scrolled ? 'px-6 py-3' : 'max-w-7xl mx-auto px-6 py-4'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              animate={{
                scale: scrolled ? 0.9 : 1
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CS</span>
                </div>
                <span className={`font-bold text-lg transition-colors duration-600 ${
                  scrolled ? 'text-black' : 'text-black'
                }`}>
                  CS Connect Pakistan
                </span>
              </Link>
            </motion.div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive(item.path)
                      ? scrolled 
                        ? 'text-white bg-black' 
                        : 'text-white bg-black'
                      : scrolled
                        ? 'text-black hover:text-gray-600 hover:bg-white/20'
                        : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Join Us Button */}
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`ml-2 px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    scrolled
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Join Us
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          boxShadow: scrolled 
            ? '0 4px 24px rgba(0, 0, 0, 0.1)' 
            : '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden border-b border-gray-200/50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="font-bold text-lg text-black">CS Connect</span>
            </Link>

            {/* Mobile Menu Button */}
            <div className="flex items-center justify-center w-10 h-10">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-black hover:bg-gray-100 transition-colors duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'bg-black text-white'
                          : 'text-gray-800 hover:bg-gray-50 hover:text-black'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Join Us Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200"
                    >
                      Join Us
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 