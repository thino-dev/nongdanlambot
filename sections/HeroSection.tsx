'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Sparkles, Shield, Zap } from 'lucide-react'
import Button from '@/components/Button'
import Section from '@/components/Section'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export default function HeroSection() {
  const { openPopup } = useContactPopup()
  
  return (
    <Section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-primary to-secondary/30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100
          const randomDuration = Math.random() * 10 + 10
          const randomDelay = Math.random() * 5
          const randomDistance = Math.random() * 500
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              initial={{ 
                opacity: 0
              }}
              animate={{
                y: [-randomDistance, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: 'linear',
                delay: randomDelay,
              }}
            />
          )
        })}
      </div>
      
      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm shadow-lg shadow-cyan-500/10"
            >
              <Sparkles className="text-cyan-400 mr-2 animate-pulse" size={18} />
              <span className="text-cyan-400 text-sm font-semibold tracking-wide">
                Cộng Đồng EA MT5 • 5+ Năm Kinh Nghiệm
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text mb-6 leading-tight">
              Nông Dân Làm BOT {' '}
              <span className="text-cyan-400">Chia sẻ & Phát triển cùng nhau</span>
            </h1>
            
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Cộng đồng chia sẻ kiến thức, chiến lược trading và dịch vụ viết EA MT5 theo yêu cầu. 
              Backtest chi tiết, tối ưu rủi ro, bản quyền gắn tài khoản MT5 của bạn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={openPopup}
              >
                Tham gia cộng đồng ngay
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Dịch vụ viết EA
              </Button>
            </div>
            
            {/* Enhanced Stats with icons */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-cyan-500/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="text-cyan-400" size={20} />
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">500+</div>
                  </div>
                  <div className="text-sm text-text-muted">Thành viên cộng đồng</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-cyan-400" size={20} />
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">150+</div>
                  </div>
                  <div className="text-sm text-text-muted">EA đã phát triển</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-cyan-400" size={20} />
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">5+</div>
                  </div>
                  <div className="text-sm text-text-muted">Năm kinh nghiệm</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* SVG Chart Illustration */}
              <svg
                viewBox="0 0 600 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-2xl"
              >
                {/* Background grid */}
                <g opacity="0.15" stroke="#00D4FF" strokeWidth="1">
                  {[...Array(8)].map((_, i) => (
                    <line key={`h${i}`} x1="50" y1={50 + i * 50} x2="550" y2={50 + i * 50} />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <line key={`v${i}`} x1={50 + i * 50} y1="50" x2={50 + i * 50} y2="350" />
                  ))}
                </g>
                
                {/* Candlesticks */}
                <g>
                  {/* Green candles */}
                  <rect x="80" y="180" width="30" height="80" fill="#10B981" opacity="0.8" />
                  <line x1="95" y1="160" x2="95" y2="260" stroke="#10B981" strokeWidth="2" />
                  
                  <rect x="180" y="140" width="30" height="100" fill="#10B981" opacity="0.8" />
                  <line x1="195" y1="120" x2="195" y2="240" stroke="#10B981" strokeWidth="2" />
                  
                  <rect x="380" y="120" width="30" height="90" fill="#10B981" opacity="0.8" />
                  <line x1="395" y1="100" x2="395" y2="210" stroke="#10B981" strokeWidth="2" />
                  
                  {/* Red candles */}
                  <rect x="280" y="150" width="30" height="70" fill="#EF4444" opacity="0.8" />
                  <line x1="295" y1="130" x2="295" y2="220" stroke="#EF4444" strokeWidth="2" />
                  
                  <rect x="480" y="140" width="30" height="60" fill="#EF4444" opacity="0.8" />
                  <line x1="495" y1="120" x2="495" y2="200" stroke="#EF4444" strokeWidth="2" />
                </g>
                
                {/* Trend line */}
                <path
                  d="M 50 250 Q 200 200, 350 150 T 550 100"
                  stroke="#00D4FF"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.7"
                  strokeDasharray="5,5"
                />
                
                {/* Accent glow */}
                <circle cx="395" cy="150" r="60" fill="#00D4FF" opacity="0.08" />
                <circle cx="395" cy="150" r="40" fill="#00D4FF" opacity="0.15" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
