'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle2, Shield, Clock, Users, TrendingUp } from 'lucide-react'
import Section from '@/components/Section'

const trustMetrics = [
  {
    icon: Award,
    value: '5+',
    label: 'Năm kinh nghiệm',
    description: 'Chuyên sâu lập trình EA',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Thành viên cộng đồng',
    description: 'Trader đang hoạt động',
  },
  {
    icon: TrendingUp,
    value: '150+',
    label: 'EA đã phát triển',
    description: 'Đang chạy thực chiến',
  },
  {
    icon: CheckCircle2,
    value: '100+',
    label: 'Chiến lược chia sẻ',
    description: 'Trong cộng đồng',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Bảo mật tuyệt đối',
    description: 'NDA & bản quyền riêng tư',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Hỗ trợ cộng đồng',
    description: 'Telegram & Zalo',
  },
]

export default function TrustSection() {
  return (
    <Section id="trust" background="surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Cộng đồng NongDanLamBOT
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Nơi trader chia sẻ kinh nghiệm, học hỏi và phát triển cùng nhau
        </p>
      </motion.div>

      {/* Trust Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        {trustMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-primary border border-secondary-200 group-hover:border-accent/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <metric.icon className="text-accent" size={24} />
              </div>
              <div className="text-3xl font-heading font-bold bg-gradient-to-r from-accent to-accent-600 bg-clip-text text-transparent mb-1">
                {metric.value}
              </div>
              <div className="text-text font-semibold text-sm mb-1">
                {metric.label}
              </div>
              <div className="text-text-muted text-xs">
                {metric.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Guarantee Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/30 rounded-full px-8 py-4">
          <Shield className="text-accent" size={24} />
          <div className="text-left">
            <div className="text-text font-semibold">Cam kết hoàn tiền 100%</div>
            <div className="text-text-muted text-sm">Nếu EA không chạy đúng logic đã thỏa thuận</div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
