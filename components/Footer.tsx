'use client'

import { Send, Mail } from 'lucide-react'

const footerLinks = {
  navigation: [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Dịch vụ', href: '#services' },
    { label: 'Quy trình', href: '#process' },
    { label: 'Bảng giá', href: '#pricing' },
  ],
  resources: [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Chính sách', href: '/privacy' },
    { label: 'Điều khoản', href: '/terms' },
  ],
}

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = href
    }
  }

  return (
    <footer className="bg-surface border-t border-secondary-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-accent mb-4">
              NongDanLamBOT
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Cộng đồng EA MT5 - Nơi chia sẻ kiến thức, chiến lược và dịch vụ viết EA theo yêu cầu. 
              Chuyên nghiệp, uy tín, chất lượng.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-text font-semibold mb-4">Điều hướng</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-text-muted hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-text font-semibold mb-4">Tài nguyên</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }
                    }}
                    className="text-text-muted hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text font-semibold mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <a
                href="https://t.me/z2idon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-text-muted hover:text-accent text-sm transition-colors"
              >
                <Send size={16} className="mr-2" />
                Telegram
              </a>
              <a
                href="mailto:contact@nongdanlambot.com"
                className="flex items-center text-text-muted hover:text-accent text-sm transition-colors"
              >
                <Mail size={16} className="mr-2" />
                contact@nongdanlambot.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-secondary-200">
          <p className="text-center text-text-muted text-sm">
            © {new Date().getFullYear()} NongDanLamBOT. Mọi quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
