'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={cn(
        'bg-surface border border-secondary-200 rounded-2xl p-6 shadow-xl',
        hover && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
