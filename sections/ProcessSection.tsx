'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Section from '@/components/Section'

const processSteps = [
  {
    number: '01',
    title: 'Thu thập yêu cầu',
    description: 'Trao đổi chi tiết về chiến lược, logic giao dịch, quản trị vốn và mục tiêu backtest của bạn.',
  },
  {
    number: '02',
    title: 'Phác thảo logic',
    description: 'Thiết kế sơ đồ thuật toán, xác nhận điều kiện vào/ra lệnh, TP/SL, filter và các tham số.',
  },
  {
    number: '03',
    title: 'Lập trình & Unit test',
    description: 'Lập trình EA trên MQL5, kiểm tra từng module, đảm bảo logic chính xác không lỗi.',
  },
  {
    number: '04',
    title: 'Backtest & tối ưu',
    description: 'Chạy backtest trên MT5, phân tích kết quả, fine-tune tham số để đạt hiệu suất tối ưu.',
  },
  {
    number: '05',
    title: 'Bàn giao & hỗ trợ',
    description: 'Giao file .ex5 gắn tài khoản MT5, tài liệu hướng dẫn, báo cáo backtest và hỗ trợ 30 ngày.',
  },
]

export default function ProcessSection() {
  return (
    <Section id="process">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Quy trình làm việc
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          5 bước minh bạch, chuyên nghiệp để mang đến EA đúng ý bạn
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0"
          >
            {/* Timeline line */}
            {index < processSteps.length - 1 && (
              <div className="absolute left-3.5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-accent to-secondary-200" />
            )}
            
            {/* Step indicator */}
            <div className="absolute left-0 top-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30">
              <CheckCircle2 size={18} className="text-primary" />
            </div>
            
            <div className="bg-surface border border-secondary-200 rounded-xl p-6 ml-4">
              <div className="flex items-start gap-4">
                <div className="text-5xl font-heading font-bold text-accent/20">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
