import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin', 'vietnamese'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NongDanLamBOT - Cộng Đồng EA MT5 | Dịch vụ viết EA theo yêu cầu',
  description: 'Cộng đồng EA MT5 NongDanLamBOT - Chia sẻ kiến thức, chiến lược trading và dịch vụ viết Expert Advisor (EA) MT5 theo yêu cầu. Backtest chi tiết, tối ưu rủi ro, bản quyền gắn tài khoản.',
  keywords: ['NongDanLamBOT', 'cộng đồng EA MT5', 'EA MT5', 'Expert Advisor', 'Forex bot', 'viết EA theo yêu cầu', 'lập trình EA', 'MetaTrader 5', 'trading bot', 'cộng đồng forex'],
  authors: [{ name: 'NongDanLamBOT' }],
  openGraph: {
    title: 'NongDanLamBOT - Cộng Đồng EA MT5 | Dịch vụ viết EA theo yêu cầu',
    description: 'Cộng đồng EA MT5 NongDanLamBOT - Chia sẻ kiến thức, chiến lược trading và dịch vụ viết EA MT5 theo yêu cầu.',
    type: 'website',
    locale: 'vi_VN',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
