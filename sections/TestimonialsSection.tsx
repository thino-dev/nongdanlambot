'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Section from '@/components/Section'

const testimonials = [
  {
    name: 'Anh Minh T.',
    role: 'Professional Forex Trader',
    avatar: 'M',
    content: 'EA được code rất chặt chẽ, logic rõ ràng và backtest khớp với kỳ vọng ban đầu. Team phản hồi nhanh, support nhiệt tình, sửa ngay khi có yêu cầu điều chỉnh. Đã làm 3 EA liên tiếp và đều hài lòng.',
    rating: 5,
    project: 'EA Scalping + Grid Strategy',
  },
  {
    name: 'Chị Lan N.',
    role: 'Quỹ đầu tư',
    avatar: 'L',
    content: 'Đã thuê làm 2 EA cho quỹ, cả hai đều đạt chất lượng cao. Logic rõ ràng, tài liệu chi tiết, dễ vận hành. Giá cả hợp lý so với chất lượng nhận được. Sẽ tiếp tục hợp tác dài hạn.',
    rating: 5,
    project: 'Enterprise Package - Multi Strategy',
  },
  {
    name: 'Anh Hùng P.',
    role: 'Swing Trader',
    avatar: 'H',
    content: 'Mình không biết code nên cần outsource EA. Bên này làm đúng deadline, logic đúng y ý tưởng mình đưa ra. Backtest report rất chi tiết, dễ hiểu. Recommend cho ae trader muốn có EA riêng.',
    rating: 5,
    project: 'EA Trend Following H4',
  },
  {
    name: 'Anh Đức L.',
    role: 'Scalper',
    avatar: 'D',
    content: 'EA scalping chạy rất mượt, không lag, quản trị vốn ATR-based giúp giảm risk đáng kể. Backtest chi tiết từng trade, dễ optimize parameters. Đã profitable 4 tháng liên tiếp trên live account.',
    rating: 5,
    project: 'EA Scalping M5 Premium',
  },
  {
    name: 'Chị Thu H.',
    role: 'Copy Trading Manager',
    avatar: 'T',
    content: 'Tuyệt vời! EA có panel UI đẹp, dễ điều chỉnh settings. Support team giải thích rất kỹ từng tham số. Đặc biệt ấn tượng với tính năng news filter tự động, tránh được nhiều loss do news.',
    rating: 5,
    project: 'EA News Filter + Dashboard',
  },
  {
    name: 'Anh Khoa N.',
    role: 'Prop Firm Trader',
    avatar: 'K',
    content: 'EA pass được challenge prop firm một cách ổn định. Risk management chặt chẽ, không có lệnh nào vượt quá max loss. Code quality cao, dễ đọc, dễ customize. Worth every penny!',
    rating: 5,
    project: 'EA Prop Firm Challenge',
  },
]

export default function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Khách hàng nói gì về chúng tôi
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Phản hồi chân thực từ những khách hàng đã sử dụng dịch vụ
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative bg-surface border border-secondary-200 group-hover:border-accent/30 rounded-2xl p-6 h-full flex flex-col transition-all duration-300">
              <Quote className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors" size={48} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.7 + index * 0.1 + i * 0.05 }}
                  >
                    <Star className="text-accent fill-accent" size={16} />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-text-muted leading-relaxed mb-6 relative z-10 flex-grow text-sm">
                "{testimonial.content}"
              </p>

              {/* Project tag */}
              <div className="mb-4">
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-text font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-text-muted text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
