import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật - EA MT5 Studio',
  description: 'Chính sách bảo mật thông tin khách hàng của EA MT5 Studio',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-primary text-text">
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-accent hover:text-accent-400 mb-8 inline-block">
            ← Về trang chủ
          </Link>
          
          <h1 className="text-4xl font-heading font-bold mb-8">Chính sách bảo mật</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-text-muted">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">1. Thu thập thông tin</h2>
              <p>
                Chúng tôi chỉ thu thập thông tin cần thiết để cung cấp dịch vụ: tên, email, Telegram, 
                mô tả chiến lược EA. Thông tin này được sử dụng để báo giá, tư vấn và triển khai dự án.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">2. Sử dụng thông tin</h2>
              <p>
                Thông tin của bạn được sử dụng để: liên hệ tư vấn, phát triển EA theo yêu cầu, 
                gửi báo cáo tiến độ và hỗ trợ kỹ thuật. Chúng tôi KHÔNG bán, chia sẻ hoặc tiết lộ 
                thông tin cho bên thứ ba.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">3. Bảo mật chiến lược & bản quyền</h2>
              <p>
                Chiến lược giao dịch của bạn được bảo mật tuyệt đối. Chúng tôi sẵn sàng 
                ký NDA (Non-Disclosure Agreement) nếu bạn yêu cầu. EA file .ex5 được bind với 
                tài khoản MT5 của bạn, đảm bảo bản quyền riêng tư không chia sẻ được.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">4. Cookie và tracking</h2>
              <p>
                Website có thể sử dụng cookie để cải thiện trải nghiệm người dùng và phân tích lưu lượng. 
                Bạn có thể tắt cookie trong trình duyệt nếu muốn.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">5. Quyền của bạn</h2>
              <p>
                Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân. Vui lòng liên hệ 
                qua email hoặc Telegram để được hỗ trợ.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">6. Liên hệ</h2>
              <p>
                Nếu có thắc mắc về chính sách bảo mật, liên hệ: contact@eamt5studio.com hoặc 
                Telegram @eamt5studio.
              </p>
            </section>

            <p className="text-sm text-text-muted mt-8">
              Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
