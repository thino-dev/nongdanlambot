'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Section from '@/components/Section'

const faqs = [
  {
    question: 'Cộng đồng NongDanLamBOT là gì?',
    answer: 'NongDanLamBOT là cộng đồng EA MT5 với hơn 500+ thành viên đang hoạt động. Nơi trader chia sẻ kinh nghiệm, chiến lược, học hỏi lẫn nhau về trading tự động và Expert Advisor. Cộng đồng cũng cung cấp dịch vụ viết EA theo yêu cầu chuyên nghiệp.',
  },
  {
    question: 'Làm sao để tham gia cộng đồng?',
    answer: 'Hoàn toàn miễn phí! Chỉ cần liên hệ qua Zalo (0942982993) hoặc Telegram (@z2idon) để được thêm vào nhóm cộng đồng. Bạn sẽ được tiếp cận các tài liệu, chiến lược EA, và trao đổi trực tiếp với các trader có kinh nghiệm.',
  },
  {
    question: 'Cộng đồng có những hoạt động gì?',
    answer: 'Chia sẻ 100+ chiến lược EA, trao đổi kinh nghiệm trading, tư vấn tối ưu EA, review backtest, hỗ trợ kỹ thuật MT5, và cập nhật xu hướng thị trường. Thành viên cũng được ưu tiên khi sử dụng dịch vụ viết EA của cộng đồng.',
  },
  {
    question: 'Có mất phí gì khi tham gia cộng đồng không?',
    answer: 'Hoàn toàn miễn phí! Bạn chỉ mất phí khi sử dụng dịch vụ viết EA theo yêu cầu. Tất cả tài liệu, chiến lược chia sẻ trong cộng đồng đều free. Chúng tôi tin vào giá trị của việc chia sẻ và học hỏi cùng nhau.',
  },
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
      className="bg-surface border border-secondary-200 rounded-xl overflow-hidden h-full flex flex-col"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-start justify-between text-left hover:bg-secondary/30 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-text font-semibold pr-4 text-sm leading-snug">{question}</span>
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
            <div className="px-5 pb-4 text-text-muted leading-relaxed text-sm">
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
          Giải đáp về cộng đồng và dịch vụ viết EA của NongDanLamBOT
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
        ))}
      </div>
    </Section>
  )
}
