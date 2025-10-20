'use client'

import { ContactPopupProvider } from '@/contexts/ContactPopupContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import ProcessSection from '@/sections/ProcessSection'
import WhyUsSection from '@/sections/WhyUsSection'
import FeaturesSection from '@/sections/FeaturesSection'
import PricingSection from '@/sections/PricingSection'
import PortfolioSection from '@/sections/PortfolioSection'
import TrustSection from '@/sections/TrustSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import FAQSection from '@/sections/FAQSection'
import CTASection from '@/sections/CTASection'
import ContactSection from '@/sections/ContactSection'

export default function HomePage() {
  return (
    <ContactPopupProvider>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <WhyUsSection />
        <FeaturesSection />
        <PricingSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
    </ContactPopupProvider>
  )
}
