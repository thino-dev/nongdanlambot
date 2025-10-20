'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, Lock, Clock, HeartHandshake } from 'lucide-react'
import Section from '@/components/Section'
import Card from '@/components/Card'

const reasons = [
  {
    icon: Shield,
    title: 'Uy tín & Chất lượng đã kiểm chứng',
    description: 'Hơn 150+ dự án EA hoàn thành với tỷ lệ hài lòng 98%. Code clean, logic rõ ràng, tuân thủ best practices.',
    highlight: '150+ EA delivered',
  },
  {
    icon: Zap,
    title: 'Tốc độ & Hiệu suất vượt trội',
    description: 'Phản hồi tư vấn trong 24h, bàn giao đúng deadline 99% dự án. Code tối ưu, không lag, low CPU usage.',
    highlight: '99% on-time',
  },
  {
    icon: Users,
    title: 'Minh bạch & Quy trình chuyên nghiệp',
    description: 'Trao đổi rõ ràng mỗi bước, báo cáo tiến độ thường xuyên, demo trước khi bàn giao. Không phát sinh chi phí ẩn.',
    highlight: '100% transparent',
  },
  {
    icon: Lock,
    title: 'Bảo mật cấp ngân hàng',
    description: 'Chiến lược của bạn được bảo mật tuyệt đối. Ký NDA khi cần. Bản quyền gắn tài khoản riêng biệt.',
    highlight: 'NDA available',
  },
  {
    icon: Clock,
    title: 'Hỗ trợ tận tâm & Lâu dài',
    description: 'Bảo hành kỹ thuật 30-60 ngày, hỗ trợ qua Telegram/Email nhanh chóng. Team sẵn sàng giải đáp 24/7.',
    highlight: '24/7 support',
  },
  {
    icon: HeartHandshake,
    title: 'Đối tác dài hạn, không chỉ vendor',
    description: 'Không bỏ đi sau khi bán EA. Tư vấn optimize, upgrade khi cần. 70% khách hàng quay lại làm thêm dự án.',
    highlight: '70% return rate',
  },
]

export default function WhyUsSection() {
  return (
    <Section id="why-us" background="surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Tại sao chọn chúng tôi?
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          6 lý do khiến hàng chục khách hàng tin tưởng và quay lại
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-accent/20 to-accent/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <reason.icon className="text-accent" size={28} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-accent font-semibold mb-1 uppercase tracking-wide">
                    {reason.highlight}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text group-hover:text-accent transition-colors">
                    {reason.title}
                  </h3>
                </div>
              </div>
              <p className="text-text-muted leading-relaxed">
                {reason.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
