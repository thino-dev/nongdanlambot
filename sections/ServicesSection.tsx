'use client'

import { motion } from 'framer-motion'
import { Code, Lightbulb, Settings, Shield, FileText, BarChart3 } from 'lucide-react'
import Section from '@/components/Section'
import Card from '@/components/Card'

const services = [
  {
    icon: Code,
    title: 'Viết EA theo yêu cầu',
    description: 'Dịch vụ viết EA MT5 theo chiến lược của bạn. Backtest chi tiết, tối ưu rủi ro, bản quyền gắn tài khoản.',
  },
  {
    icon: Lightbulb,
    title: 'Tư vấn chiến lược',
    description: 'Chia sẻ kinh nghiệm, tư vấn phát triển ý tưởng thành EA hoàn chỉnh phù hợp phong cách trading.',
  },
  {
    icon: Settings,
    title: 'Tối ưu & nâng cấp EA',
    description: 'Refactor, tối ưu hiệu suất, bổ sung tính năng cho EA hiện có của bạn.',
  },
  {
    icon: Shield,
    title: 'Quản trị vốn nâng cao',
    description: 'Tích hợp SL/TP động, ATR-based sizing, DCA, hedging, session filter chuyên nghiệp.',
  },
  {
    icon: BarChart3,
    title: 'Backtest & Optimization',
    description: 'Báo cáo backtest chi tiết trên MT5: profit factor, winrate, max DD, equity curve.',
  },
  {
    icon: FileText,
    title: 'Cộng đồng chia sẻ',
    description: 'Tham gia nhóm cộng đồng, chia sẻ kinh nghiệm, học hỏi từ trader khác trong cộng đồng.',
  },
]

export default function ServicesSection() {
  return (
    <Section id="services" background="surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Cộng đồng & Dịch vụ
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Nơi chia sẻ kiến thức EA MT5 và dịch vụ viết EA theo yêu cầu chuyên nghiệp
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-text mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
