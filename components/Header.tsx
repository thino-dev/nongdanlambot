'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-2xl border-b border-secondary-200' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#hero')
            }}
            className="text-2xl font-heading font-bold text-accent hover:text-accent-400 transition-colors"
          >
            EA MT5 Studio
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="text-text-muted hover:text-accent transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="primary"
              size="sm"
            >
              Liên hệ ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-text p-2 hover:bg-surface rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden bg-surface border-t border-secondary-200"
          >
            <nav className="container-custom py-6 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-text hover:text-accent transition-colors py-2 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="primary"
                size="md"
                className="w-full"
              >
                Liên hệ ngay
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
