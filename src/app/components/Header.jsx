'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Instagram,
  Twitter,
  Facebook,
  Camera
} from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { href: '#home', label: 'Home' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#team', label: 'Team' },
    { href: '#book-now', label: 'Book Now' },
    { href: '#blog', label: 'Blog' },
    { href: '#store', label: 'Store' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-green-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 hover:text-green-200 transition-colors duration-200">
                <Phone size={16} />
                <a href="tel:+919876543210" aria-label="Phone number">+91 9876543210</a>
              </div>
              <div className="flex items-center space-x-2 hover:text-green-200 transition-colors duration-200">
                <Mail size={16} />
                <a href="mailto:info@wildanglesafaris.com" aria-label="Email address">info@wildanglesafaris.com</a>
              </div>
              <div className="flex items-center space-x-2 hover:text-green-200 transition-colors duration-200">
                <MapPin size={16} />
                <span>Nagpur, Maharashtra</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-400" size={16} fill="currentColor" />
                <span className="font-semibold">4.9</span>
                <span className="text-green-100">| 226+ Reviews</span>
              </div>
              <div className="flex items-center space-x-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors duration-200" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors duration-200" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors duration-200" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-green-200" role="banner">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2" aria-label="Wild Angle Safaris Home">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                  <Camera className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-green-900">Wild Angle Safaris</h1>
                  <p className="text-xs font-medium text-green-700">Premium Wildlife Experiences</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2" role="navigation">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-green-800 hover:text-green-900 hover:bg-green-100/50 rounded-md"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-green-700 border border-green-700 rounded-md hover:bg-green-100 hover:text-green-900"
                aria-label="Get a custom quote"
              >
                Get Quote
              </Link>
              <Link
                href="#packages"
                className="px-6 py-2 text-sm font-medium text-white bg-green-700 rounded-md hover:bg-green-800"
                aria-label="Book safari now"
              >
                Book Safari Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-green-800 hover:text-green-900 hover:bg-green-100 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden absolute inset-x-0 top-0 bg-white border-b border-green-200 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="relative bg-white">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 border-b border-green-200">
              <Link href="/" className="flex items-center space-x-2" onClick={toggleMenu}>
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                  <Camera className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-green-900">Wild Angle Safaris</h2>
                  <p className="text-xs text-green-700">Premium Wildlife Experiences</p>
                </div>
              </Link>
              <button
                onClick={toggleMenu}
                className="p-2 text-green-800 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="p-4 border-b border-green-200 bg-green-50">
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-green-800 hover:text-green-900">
                  <Phone size={16} />
                  <a href="tel:+919876543210" aria-label="Phone number">+91 9876543210</a>
                </div>
                <div className="flex items-center space-x-2 text-green-800 hover:text-green-900">
                  <Mail size={16} />
                  <a href="mailto:info@wildanglesafaris.com" aria-label="Email address">info@wildanglesafaris.com</a>
                </div>
                <div className="flex items-center space-x-2 text-green-800">
                  <MapPin size={16} />
                  <span>Nagpur, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500" size={16} fill="currentColor" />
                  <span className="font-medium text-green-800">4.9 Rating</span>
                  <span className="text-green-700">| 226+ Reviews</span>
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-900" aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-900" aria-label="Twitter">
                    <Twitter size={16} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-900" aria-label="Facebook">
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="py-4 bg-white">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="block px-6 py-3 text-green-800 hover:text-green-900 hover:bg-green-100/50 font-medium"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="p-4 border-t border-green-200 space-y-3">
              <Link
                href="#contact"
                onClick={toggleMenu}
                className="block w-full text-center py-3 px-4 border border-green-700 text-green-700 rounded-md font-medium hover:bg-green-100 hover:text-green-900"
                aria-label="Get a custom quote"
              >
                Get Custom Quote
              </Link>
              <Link
                href="#packages"
                onClick={toggleMenu}
                className="block w-full text-center py-3 px-4 bg-green-700 text-white rounded-md font-medium hover:bg-green-800"
                aria-label="Book safari now"
              >
                Book Safari Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header