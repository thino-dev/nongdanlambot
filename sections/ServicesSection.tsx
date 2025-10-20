'use client'

import { motion } from 'framer-motion'
import { Code, Lightbulb, Settings, Shield, FileText, BarChart3 } from 'lucide-react'
import Section from '@/components/Section'
import Card from '@/components/Card'

const services = [
  {
    icon: Code,
    title: 'Viết EA theo chiến lược sẵn có',
    description: 'Chuyển đổi chiến lược trading của bạn thành EA hoàn chỉnh với logic rõ ràng và tối ưu.',
  },
  {
    icon: Lightbulb,
    title: 'Chuyển ý tưởng thành EA',
    description: 'Tư vấn và phát triển EA từ ý tưởng ban đầu, phù hợp với phong cách giao dịch của bạn.',
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
    title: 'Bản quyền gắn tài khoản',
    description: 'EA file .ex5 gắn với tài khoản MT5 của bạn. Bảo mật tuyệt đối, không chia sẻ được.',
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
          Dịch vụ của chúng tôi
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Giải pháp toàn diện cho mọi nhu cầu phát triển Expert Advisor trên MT5
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
