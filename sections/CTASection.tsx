'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import Button from '@/components/Button'
import Section from '@/components/Section'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export default function CTASection() {
  const { openPopup } = useContactPopup()
  
  return (
    <Section id="cta" className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary to-secondary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * 400,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="text-accent mr-2 animate-pulse" size={18} />
            <span className="text-accent text-sm font-semibold">
              Ưu đãi đặc biệt khi đặt hàng ngay hôm nay
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-6"
          >
            Sẵn sàng biến chiến lược của bạn<br />
            thành <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">EA tự động chuyên nghiệp?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Đừng để ý tưởng trading tuyệt vời của bạn chỉ nằm trên giấy. 
            Hãy để chúng tôi biến nó thành EA hoàn chỉnh, backtest rõ ràng, sẵn sàng triển khai.
          </motion.p>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              'Tư vấn miễn phí trong 24h',
              'Báo giá chi tiết & minh bạch',
              'Demo trước khi thanh toán',
              'Bảo hành 30-60 ngày'
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 bg-surface/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2"
              >
                <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                <span className="text-text text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={openPopup}
              className="shadow-2xl shadow-accent/30 hover:shadow-accent/50 group"
            >
              <span>Nhận tư vấn & báo giá miễn phí</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <a
              href="https://t.me/z2idon"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="outline" size="lg">
                <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="currentColor"/>
                </svg>
                Chat Telegram ngay
              </Button>
            </a>
          </motion.div>

          {/* Trust badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 text-text-muted text-sm"
          >
            🔒 Cam kết bảo mật 100% • ⚡ Phản hồi trong 24h • ✅ Hoàn tiền nếu không hài lòng
          </motion.p>
        </motion.div>
      </div>
    </Section>
  )
}
