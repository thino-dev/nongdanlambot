'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'
import Section from '@/components/Section'
import Button from '@/components/Button'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export default function ContactSection() {
  const { showPopup, openPopup, closePopup } = useContactPopup()

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
            Bắt đầu dự án của bạn
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Liên hệ với chúng tôi để nhận báo giá và tư vấn miễn phí trong 24h
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-surface border border-secondary-200 rounded-2xl p-12 text-center">
          <MessageCircle size={64} className="mx-auto mb-6 text-accent" />
          <h3 className="text-2xl font-heading font-bold text-text mb-4">
            Chọn cách liên hệ phù hợp với bạn
          </h3>
          <p className="text-text-muted mb-8">
            Chúng tôi sẵn sàng tư vấn và báo giá chi tiết cho dự án EA của bạn
          </p>
          
          <Button
            variant="primary"
            size="lg"
            onClick={openPopup}
            className="text-lg px-8">
            Liên hệ ngay
            <Send className="ml-2" size={20} />
          </Button>
        </motion.div>

        <AnimatePresence>
          {showPopup && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closePopup}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}>
                <div className="bg-primary border-2 border-accent/30 rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
                  <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 text-text-muted hover:text-text transition-colors">
                    <X size={24} />
                  </button>

                  <h3 className="text-2xl font-heading font-bold text-text mb-2 text-center">
                    Chọn cách liên hệ
                  </h3>
                  <p className="text-text-muted text-center mb-8">
                    Chúng tôi sẵn sàng hỗ trợ bạn 24/7
                  </p>

                  <div className="space-y-4">
                    <a href="tel:0942982993" className="block">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-3">
                          <svg className="w-8 h-8 mr-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="12" fill="white"/>
                            <path d="M24 8C15.163 8 8 14.837 8 23.296c0 4.745 2.267 8.97 5.808 11.848.128 1.526-.537 5.122-.663 5.795-.03.163.08.317.245.337.054.006.108.006.162-.005 1.046-.186 6.017-3.542 7.06-4.15C21.394 37.481 22.678 37.6 24 37.6c8.837 0 16-6.845 16-15.304S32.837 8 24 8z" fill="#0068FF"/>
                          </svg>
                          <span className="text-2xl font-bold text-white">Zalo</span>
                        </div>
                        <p className="text-white/90 text-sm mb-2">Gọi trực tiếp hoặc nhắn tin</p>
                        <p className="text-white font-semibold text-xl tracking-wider">0942 982 993</p>
                      </motion.div>
                    </a>

                    <a href="https://t.me/z2idon" target="_blank" rel="noopener noreferrer" className="block">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 text-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-center mb-3">
                          <Send className="w-8 h-8 mr-3 text-white" />
                          <span className="text-2xl font-bold text-white">Telegram</span>
                        </div>
                        <p className="text-white/90 text-sm mb-2">Chat trực tiếp qua Telegram</p>
                        <p className="text-white font-semibold text-lg">@z2idon</p>
                      </motion.div>
                    </a>
                  </div>

                  <p className="text-text-muted text-center text-sm mt-6">
                    Thời gian phản hồi: <span className="text-accent font-semibold">24/7</span>
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}
