'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Section from '@/components/Section'

const faqs = [
  {
    question: 'Thời gian hoàn thành EA trung bình là bao lâu?',
    answer: 'Tùy độ phức tạp: EA đơn giản 5-7 ngày, EA nâng cao 7-10 ngày, dự án phức tạp 10-14 ngày. Chúng tôi sẽ báo rõ timeline ngay sau khi phân tích yêu cầu.',
  },
  {
    question: 'Tôi có nhận được file mã nguồn .mq5 không?',
    answer: 'Không. Chúng tôi chỉ cung cấp file .ex5 (đã compile) gắn với tài khoản MT5 của bạn. Điều này đảm bảo bản quyền và bảo mật chiến lược cho cả hai bên. Bạn vẫn có thể sử dụng EA đầy đủ chức năng, chỉnh settings thoải mái.',
  },
  {
    question: 'Backtest được thực hiện như thế nào?',
    answer: 'Chúng tôi backtest trên MT5 Strategy Tester với dữ liệu lịch sử chất lượng cao, mô phỏng spread/slippage thực tế. Báo cáo bao gồm equity curve, profit factor, winrate, max drawdown.',
  },
  {
    question: 'Tôi cần cung cấp những thông tin gì?',
    answer: 'Mô tả chiến lược (entry/exit rules), quản trị vốn (SL/TP, lot sizing), khung thời gian, cặp tiền, các filter (session, news...), và mục tiêu backtest.',
  },
  {
    question: 'Chính sách bảo hành ra sao?',
    answer: 'Hỗ trợ kỹ thuật 30 ngày (gói Pro) hoặc 60 ngày (gói Enterprise). Fix bug miễn phí nếu phát sinh trong thời gian bảo hành. Chỉnh sửa logic mới tính phí riêng.',
  },
  {
    question: 'Bản quyền EA hoạt động như thế nào?',
    answer: 'File .ex5 được bind (gắn) với số tài khoản MT5 của bạn. Chỉ tài khoản đó mới chạy được EA. Bạn không thể copy sang tài khoản khác hoặc chia sẻ. Nếu cần thêm tài khoản, vui lòng liên hệ để mua thêm license.',
  },
  {
    question: 'Thanh toán như thế nào?',
    answer: 'Thanh toán 50% đặt cọc, 50% khi bàn giao. Hỗ trợ chuyển khoản ngân hàng, Momo, hoặc thỏa thuận khác.',
  },
  {
    question: 'Tôi có thể yêu cầu chỉnh sửa sau khi nhận EA?',
    answer: 'Có. Gói Starter được 2 lần, gói Pro được 4 lần chỉnh sửa miễn phí. Sau đó tính phí theo đơn giá chỉnh sửa.',
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-surface border border-secondary-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-text font-semibold pr-8">{question}</span>
        <ChevronDown
          className={`text-accent flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="px-6 pb-4 text-text-muted leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <Section id="faq" background="surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Câu hỏi thường gặp
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Giải đáp những thắc mắc phổ biến về dịch vụ của chúng tôi
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
        ))}
      </div>
    </Section>
  )
}
