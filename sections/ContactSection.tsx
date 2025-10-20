'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { Send, Mail, User, MessageSquare, DollarSign } from 'lucide-react'
import Section from '@/components/Section'
import Button from '@/components/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  telegram: z.string().optional(),
  strategy: z.string().min(20, 'Vui lòng mô tả chiến lược chi tiết hơn (ít nhất 20 ký tự)'),
  budget: z.string().min(1, 'Vui lòng chọn ngân sách dự kiến'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form data:', data)
    
    toast.success('Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ bạn trong 24h.')
    
    reset()
    setIsSubmitting(false)
  }

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
            Bắt đầu dự án của bạn
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Điền form dưới đây để nhận báo giá và tư vấn miễn phí trong 24h
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-surface border border-secondary-200 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-text font-medium mb-2">
                Họ và tên <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full bg-primary border border-secondary-200 rounded-lg pl-12 pr-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-text font-medium mb-2">
                Email <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full bg-primary border border-secondary-200 rounded-lg pl-12 pr-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Telegram */}
            <div>
              <label htmlFor="telegram" className="block text-text font-medium mb-2">
                Telegram (không bắt buộc)
              </label>
              <div className="relative">
                <Send className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <input
                  {...register('telegram')}
                  type="text"
                  id="telegram"
                  className="w-full bg-primary border border-secondary-200 rounded-lg pl-12 pr-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                  placeholder="@username"
                />
              </div>
            </div>

            {/* Strategy */}
            <div>
              <label htmlFor="strategy" className="block text-text font-medium mb-2">
                Mô tả chiến lược EA <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-text-muted" size={20} />
                <textarea
                  {...register('strategy')}
                  id="strategy"
                  rows={5}
                  className="w-full bg-primary border border-secondary-200 rounded-lg pl-12 pr-4 py-3 text-text focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Mô tả chiến lược, logic vào lệnh, quản trị vốn, filter cần thiết..."
                />
              </div>
              {errors.strategy && (
                <p className="text-red-400 text-sm mt-1">{errors.strategy.message}</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-text font-medium mb-2">
                Ngân sách dự kiến <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
                <select
                  {...register('budget')}
                  id="budget"
                  className="w-full bg-primary border border-secondary-200 rounded-lg pl-12 pr-4 py-3 text-text focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Chọn mức ngân sách</option>
                  <option value="under-3m">Dưới 3 triệu</option>
                  <option value="3-7m">3-7 triệu (gói Pro)</option>
                  <option value="7-10m">7-10 triệu</option>
                  <option value="above-10m">Trên 10 triệu (Enterprise)</option>
                  <option value="flexible">Linh hoạt, tùy báo giá</option>
                </select>
              </div>
              {errors.budget && (
                <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu ngay'}
              {!isSubmitting && <Send className="ml-2" size={20} />}
            </Button>
          </form>
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 pt-12 border-t border-secondary-200"
        >
          <p className="text-text-muted mb-4">
            Hoặc liên hệ trực tiếp qua Telegram để được tư vấn nhanh hơn
          </p>
          <a
            href="https://t.me/eamt5studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent-400 font-medium transition-colors"
          >
            <Send size={18} className="mr-2" />
            @eamt5studio
          </a>
        </motion.div>
      </div>
    </Section>
  )
}
