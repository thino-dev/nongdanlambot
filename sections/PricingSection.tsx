'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Section from '@/components/Section'
import Button from '@/components/Button'

const pricingPlans = [
  {
    name: 'Starter',
    price: '3.500.000',
    description: 'Phù hợp cho EA đơn giản, logic cơ bản',
    badge: 'Tiết kiệm',
    features: [
      'EA 1 strategy đơn giản (1-2 điều kiện)',
      '1-2 chỉ báo kỹ thuật cơ bản',
      'Quản trị vốn cơ bản (fixed SL/TP)',
      '2 lần chỉnh sửa miễn phí',
      'Backtest 1 cặp tiền, 1 khung thời gian',
      'Báo cáo backtest cơ bản (PDF)',
      'Bàn giao trong 5-7 ngày làm việc',
      'Hỗ trợ kỹ thuật 15 ngày',
      'File .ex5 gắn 1 tài khoản',
    ],
    popular: false,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Professional',
    price: '8.500.000',
    description: 'EA nâng cao, tính năng đầy đủ, phổ biến nhất',
    badge: 'Khuyến nghị',
    features: [
      'EA phức tạp, multi-timeframe confirmation',
      'Nhiều chỉ báo & điều kiện logic phức tạp',
      'Quản trị vốn nâng cao (ATR, RR, DCA, Martingale)',
      'Session filter (London/NY/Asia) & news filter',
      'Trailing stop, breakeven tự động',
      '4 lần chỉnh sửa miễn phí',
      'Backtest đa cặp tiền + optimization chi tiết',
      'Báo cáo backtest chuyên sâu (HTML + Statistics)',
      'Bàn giao trong 7-10 ngày làm việc',
      'Hỗ trợ kỹ thuật 30 ngày',
      'File .ex5 gắn 3 tài khoản',
      'Panel settings UI (tùy chọn)',
    ],
    popular: true,
    color: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    name: 'Enterprise',
    price: 'Liên hệ',
    description: 'Giải pháp tùy chỉnh hoàn toàn cho tổ chức',
    badge: 'Cao cấp',
    features: [
      'EA theo yêu cầu đặc biệt, không giới hạn độ phức tạp',
      'Multi-strategy với switch tự động',
      'Hedging, grid, arbitrage strategies',
      'Dashboard & control panel nâng cao',
      'Tích hợp API bên ngoài (Telegram, Discord, REST)',
      'Risk management module chuyên nghiệp',
      'Chỉnh sửa không giới hạn cho đến khi hài lòng',
      'Backtest, forward test, walk-forward analysis',
      'Báo cáo backtest chuyên gia (Monte Carlo, stress test)',
      'Thời gian linh hoạt theo dự án',
      'Hỗ trợ ưu tiên 24/7 trong 60 ngày',
      'Đào tạo sử dụng & tư vấn chiến lược',
      'File .ex5 gắn không giới hạn tài khoản',
      'Bảo trì & nâng cấp dài hạn (thỏa thuận)',
    ],
    popular: false,
    color: 'from-purple-500/20 to-pink-500/20',
  },
]

export default function PricingSection() {
  return (
    <Section id="pricing" background="surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Bảng giá dịch vụ
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Chọn gói phù hợp với nhu cầu và ngân sách của bạn
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
          >
            {/* Animated border glow */}
            {plan.popular && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse" />
            )}
            
            <div className={`relative bg-primary border-2 rounded-2xl p-8 h-full flex flex-col ${
              plan.popular 
                ? 'border-cyan-500 shadow-2xl shadow-cyan-500/30' 
                : 'border-secondary-200 hover:border-cyan-500/50'
            } transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-primary text-sm font-bold px-6 py-1.5 rounded-full shadow-lg animate-pulse">
                    ⭐ {plan.badge}
                  </div>
                </div>
              )}
              
              {!plan.popular && (
                <div className="absolute -top-3 left-6">
                  <div className="bg-surface border border-accent/30 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6 pt-2">
                <h3 className="text-2xl font-heading font-bold text-text mb-2">
                  {plan.name}
                </h3>
                <p className="text-text-muted text-sm mb-4 min-h-[40px]">
                  {plan.description}
                </p>
                <div className="flex items-end justify-center gap-1">
                  {plan.price !== 'Liên hệ' && (
                    <span className="text-text-muted text-lg">₫</span>
                  )}
                  <span className={`text-4xl font-heading font-bold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent' 
                      : 'text-accent'
                  }`}>
                    {plan.price}
                  </span>
                </div>
                {plan.price !== 'Liên hệ' && (
                  <p className="text-text-muted text-xs mt-1">Trọn gói, không phí ẩn</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-accent' : 'text-accent/70'
                    }`} size={18} />
                    <span className="text-text-muted text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                size="md"
                className="w-full group-hover:scale-105 transition-transform"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {plan.price === 'Liên hệ' ? 'Tư vấn miễn phí' : 'Đặt làm gói này'}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
