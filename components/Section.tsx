'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  background?: 'default' | 'surface' | 'secondary'
}

export default function Section({ id, className, children, background = 'default' }: SectionProps) {
  const backgrounds = {
    default: 'bg-primary',
    surface: 'bg-surface',
    secondary: 'bg-secondary',
  }

  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', backgrounds[background], className)}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}
