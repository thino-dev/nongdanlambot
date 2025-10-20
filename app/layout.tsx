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
  title: 'EA MT5 Studio - Thuê viết bot EA Forex MT5 theo yêu cầu',
  description: 'Dịch vụ thiết kế và lập trình Expert Advisor (EA) cho MetaTrader 5 theo chiến lược của bạn. Backtest chi tiết, tối ưu rủi ro, bản quyền gắn tài khoản MT5.',
  keywords: ['EA MT5', 'Expert Advisor', 'Forex bot', 'thuê viết EA', 'lập trình EA', 'MetaTrader 5', 'trading bot'],
  authors: [{ name: 'EA MT5 Studio' }],
  openGraph: {
    title: 'EA MT5 Studio - Thuê viết bot EA Forex MT5 theo yêu cầu',
    description: 'Dịch vụ thiết kế và lập trình Expert Advisor (EA) cho MetaTrader 5 theo chiến lược của bạn.',
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
