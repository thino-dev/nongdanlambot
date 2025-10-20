'use client'

import { motion } from 'framer-motion'
import { Hash, Shield, Zap, Target, Clock, RefreshCw, Globe, TrendingUp } from 'lucide-react'
import Section from '@/components/Section'

const features = [
  { icon: Hash, title: 'MagicNumber', description: 'Quản lý lệnh riêng biệt' },
  { icon: Shield, title: 'Anti-duplicate', description: 'Kiểm tra trùng lệnh thông minh' },
  { icon: Target, title: 'RR & ATR SL/TP', description: 'Quản trị vốn tự động' },
  { icon: Clock, title: 'Session Filter', description: 'London, NY, Asia, custom' },
  { icon: Zap, title: 'News Filter', description: 'Tránh biến động mạnh (tuỳ chọn)' },
  { icon: RefreshCw, title: 'Trailing & BE', description: 'Trailing stop, breakeven tự động' },
  { icon: Globe, title: 'Multi-symbol', description: 'Hỗ trợ nhiều cặp tiền' },
  { icon: TrendingUp, title: 'Logs & Debug', description: 'Nhật ký chi tiết, dễ troubleshoot' },
]

export default function FeaturesSection() {
  return (
    <Section id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Tính năng EA nổi bật
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Các module chuyên nghiệp được tích hợp trong EA của chúng tôi
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-surface border border-secondary-200 rounded-xl p-6 text-center hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
          >
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <feature.icon className="text-accent" size={24} />
            </div>
            <h3 className="text-text font-semibold mb-2 text-sm">
              {feature.title}
            </h3>
            <p className="text-text-muted text-xs">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
