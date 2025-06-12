import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaYoutube, FaInstagram, FaWhatsapp, FaDiscord } from 'react-icons/fa'
import AnimatedCounter from './AnimatedCounter'

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

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Community',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Podcasts', path: '/podcasts' },
        { name: 'Join Us', path: '/join' },
        { name: 'UniCalc Tool', path: 'https://unicalc.vercel.app' },
        { name: 'FastMock Tool', path: 'https://fastmock.vercel.app' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'WhatsApp Group', path: 'https://chat.whatsapp.com/your-group-link' },
        { name: 'Discord Server', path: 'https://discord.gg/your-server' },
        { name: 'YouTube Channel', path: 'https://youtube.com/@csconnectpakistan' },
        { name: 'LinkedIn', path: 'https://linkedin.com/company/csconnectpakistan' },
        { name: 'Instagram', path: 'https://instagram.com/csconnectpakistan' }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: FaWhatsapp, 
      url: 'https://chat.whatsapp.com/your-group-link',
      color: 'hover:text-white'
    },
    { 
      name: 'Discord', 
      icon: FaDiscord, 
      url: 'https://discord.gg/your-server',
      color: 'hover:text-white'
    },
    { 
      name: 'YouTube', 
      icon: FaYoutube, 
      url: 'https://youtube.com/@csconnectpakistan',
      color: 'hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      url: 'https://linkedin.com/company/csconnectpakistan',
      color: 'hover:text-white'
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      url: 'https://instagram.com/csconnectpakistan',
      color: 'hover:text-white'
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center md:text-left">
            <Link to="/" className="inline-flex md:flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <BrainIcon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">CS Connect</h2>
                <p className="text-gray-300 text-sm font-medium">Pakistan</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
              A student-led community connecting <AnimatedCounter value={2000} suffix="+" /> CS/IT students from <AnimatedCounter value={50} suffix="+" /> universities across Pakistan.
            </p>
          </div>

          {/* Links Sections - Two columns on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
            {footerSections.map((section) => (
              <div key={section.title} className="text-center md:text-left">
                <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.path.startsWith('http') ? (
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
              © {currentYear} CS Connect Pakistan. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex items-center space-x-3 md:ml-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-700 transition-all duration-200 ${social.color}`}
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
  )
}

export default Footer 