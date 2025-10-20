'use client'

import { motion } from 'framer-motion'
import { TrendingUp, LineChart, Award } from 'lucide-react'
import Section from '@/components/Section'
import Card from '@/components/Card'

const portfolioItems = [
  {
    title: 'EA Scalping Premium M5',
    category: 'Scalping Strategy',
    description: 'EA scalping cao tần dựa trên Bollinger Bands, RSI và volume analysis. Session filter London + New York. Tối ưu cho EURUSD, GBPUSD.',
    period: '2024-2025 (12 tháng backtest)',
    stats: {
      pf: '2.15',
      winrate: '71%',
      dd: '6.8%',
      trades: '1,247',
      avgWin: '8.5 pips',
      avgLoss: '4.2 pips',
    },
    tags: ['High Frequency', 'Low DD', 'Session Filter'],
  },
  {
    title: 'EA Trend Master H4',
    category: 'Trend Following',
    description: 'Strategy theo xu hướng với EMA crossover, MACD confirmation, ATR-based dynamic SL/TP. Multi-timeframe analysis H1/H4/D1.',
    period: '2023-2025 (2 năm backtest)',
    stats: {
      pf: '2.48',
      winrate: '58%',
      dd: '11.2%',
      trades: '324',
      avgWin: '42 pips',
      avgLoss: '22 pips',
    },
    tags: ['Swing Trading', 'High Profit Factor', 'Multi-TF'],
  },
  {
    title: 'EA Gold Grid Advanced',
    category: 'Grid + DCA Strategy',
    description: 'Grid trading kết hợp DCA thông minh cho XAUUSD. Risk management chặt chẽ, auto hedge khi trend mạnh. News filter tích hợp.',
    period: '2024-2025 (18 tháng backtest)',
    stats: {
      pf: '1.89',
      winrate: '78%',
      dd: '14.5%',
      trades: '892',
      avgWin: '$12.3',
      avgLoss: '$8.7',
    },
    tags: ['Gold Specialist', 'DCA', 'News Filter'],
  },
  {
    title: 'EA News Breakout Pro',
    category: 'News Trading',
    description: 'Chiến lược bứt phá sau tin tức kinh tế quan trọng (NFP, CPI, GDP). Pending order tự động, news calendar API integration.',
    period: '2024-2025 (52 events backtest)',
    stats: {
      pf: '2.21',
      winrate: '65%',
      dd: '9.3%',
      trades: '156',
      avgWin: '35 pips',
      avgLoss: '18 pips',
    },
    tags: ['Event Trading', 'API Integration', 'High Risk-Reward'],
  },
]

export default function PortfolioSection() {
  return (
    <Section id="portfolio" background="surface">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-4">
          Portfolio & Case Studies
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Một số dự án EA tiêu biểu đã hoàn thành và backtest thành công
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="text-xs text-accent font-semibold mb-1 uppercase tracking-wide">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
                <Award className="text-accent flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
              
              {/* Description */}
              <p className="text-text-muted mb-4 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Period */}
              <div className="text-xs text-text-muted mb-4 flex items-center gap-2">
                <LineChart size={14} className="text-accent" />
                Backtest period: {item.period}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-secondary-200">
                <div className="text-center p-3 bg-surface rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp size={12} className="text-accent" />
                    <span className="text-xs text-text-muted">PF</span>
                  </div>
                  <div className="text-lg font-heading font-bold text-accent">
                    {item.stats.pf}
                  </div>
                </div>
                
                <div className="text-center p-3 bg-surface rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <LineChart size={12} className="text-accent" />
                    <span className="text-xs text-text-muted">Winrate</span>
                  </div>
                  <div className="text-lg font-heading font-bold text-accent">
                    {item.stats.winrate}
                  </div>
                </div>
                
                <div className="text-center p-3 bg-surface rounded-lg">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp size={12} className="text-accent" />
                    <span className="text-xs text-text-muted">Max DD</span>
                  </div>
                  <div className="text-lg font-heading font-bold text-text">
                    {item.stats.dd}
                  </div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="text-center p-2 bg-primary rounded-lg">
                  <div className="text-xs text-text-muted mb-0.5">Trades</div>
                  <div className="text-sm font-semibold text-text">{item.stats.trades}</div>
                </div>
                <div className="text-center p-2 bg-primary rounded-lg">
                  <div className="text-xs text-text-muted mb-0.5">Avg Win</div>
                  <div className="text-sm font-semibold text-green-400">{item.stats.avgWin}</div>
                </div>
                <div className="text-center p-2 bg-primary rounded-lg">
                  <div className="text-xs text-text-muted mb-0.5">Avg Loss</div>
                  <div className="text-sm font-semibold text-red-400">{item.stats.avgLoss}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
