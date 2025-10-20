'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle2, Shield, Clock, Users, TrendingUp } from 'lucide-react'
import Section from '@/components/Section'

const trustMetrics = [
  {
    icon: Award,
    value: '5+',
    label: 'Năm kinh nghiệm',
    description: 'Chuyên sâu lập trình EA MT5',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Khách hàng tin dùng',
    description: 'Từ trader cá nhân đến quỹ',
  },
  {
    icon: TrendingUp,
    value: '150+',
    label: 'Dự án hoàn thành',
    description: 'EA đang chạy thực chiến',
  },
  {
    icon: CheckCircle2,
    value: '98%',
    label: 'Tỷ lệ hài lòng',
    description: 'Khách quay lại sử dụng',
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
    label: 'Hỗ trợ nhanh chóng',
    description: 'Telegram & Email',
  },
]

const certifications = [
  { name: 'MQL5 Certified Programmer', status: 'Verified' },
  { name: 'Algorithmic Trading Expert', status: 'Specialized' },
  { name: 'Financial Risk Management', status: 'Certified' },
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
          Được tin tưởng bởi cộng đồng Traders
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Con số và thành tích nói lên cam kết chất lượng của chúng tôi
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

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-primary border border-accent/20 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="text-accent" size={24} />
            <h3 className="text-xl font-heading font-semibold text-text">
              Chứng nhận & Chuyên môn
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 bg-surface rounded-xl p-4"
              >
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-text font-semibold text-sm">
                    {cert.name}
                  </div>
                  <div className="text-accent text-xs">
                    {cert.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Guarantee Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9 }}
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
