import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Điều khoản dịch vụ - NongDanLamBOT',
  description: 'Điều khoản và điều kiện sử dụng dịch vụ của NongDanLamBOT',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-primary text-text">
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-accent hover:text-accent-400 mb-8 inline-block">
            ← Về trang chủ
          </Link>
          
          <h1 className="text-4xl font-heading font-bold mb-8">Điều khoản dịch vụ</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-text-muted">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">1. Phạm vi dịch vụ</h2>
              <p>
                NongDanLamBOT cung cấp dịch vụ thiết kế, lập trình Expert Advisor (EA) cho MetaTrader 5 
                theo yêu cầu khách hàng. Dịch vụ bao gồm: tư vấn chiến lược, lập trình, backtest, 
                bàn giao file .ex5 gắn tài khoản và hỗ trợ kỹ thuật.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">2. Trách nhiệm khách hàng</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cung cấp mô tả chiến lược rõ ràng, đầy đủ</li>
                <li>Phản hồi yêu cầu xác nhận logic, tham số trong quá trình phát triển</li>
                <li>Thanh toán đúng hạn theo thỏa thuận</li>
                <li>Không sử dụng EA cho mục đích vi phạm pháp luật</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">3. Trách nhiệm của chúng tôi</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lập trình EA đúng logic đã thỏa thuận</li>
                <li>Cung cấp file .ex5 gắn tài khoản, tài liệu hướng dẫn</li>
                <li>Thực hiện backtest và gửi báo cáo</li>
                <li>Hỗ trợ kỹ thuật trong thời gian bảo hành</li>
                <li>Bảo mật thông tin và chiến lược khách hàng</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">4. Bảo hành và hỗ trợ</h2>
              <p>
                Bảo hành kỹ thuật 30 ngày (gói Pro) hoặc 60 ngày (gói Enterprise) kể từ ngày bàn giao. 
                Bảo hành bao gồm: fix bug, lỗi logic đã thỏa thuận. KHÔNG bao gồm: thay đổi logic mới, 
                nâng cấp tính năng ngoài phạm vi ban đầu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">5. Thanh toán</h2>
              <p>
                Thanh toán 50% đặt cọc trước khi bắt đầu, 50% khi bàn giao. Nếu khách hàng hủy dự án 
                sau khi đã bắt đầu code, khoản đặt cọc không được hoàn lại.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">6. Bản quyền và license</h2>
              <p>
                File .ex5 được bind (gắn) với số tài khoản MT5 của khách hàng đã thanh toán đầy đủ. 
                Khách hàng chỉ được sử dụng trên tài khoản đã đăng ký. Không được chia sẻ, 
                copy hoặc reverse-engineer. Nếu cần thêm license cho tài khoản khác, vui lòng liên hệ.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">7. Từ chối trách nhiệm</h2>
              <p>
                EA được cung cấp &quot;nguyên trạng&quot;. Chúng tôi KHÔNG chịu trách nhiệm về: lợi nhuận/lỗ 
                khi giao dịch thực, thay đổi điều kiện thị trường, lỗi từ broker/MT5, 
                sử dụng sai tham số hoặc không tuân thủ hướng dẫn.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-text mb-4">8. Giải quyết tranh chấp</h2>
              <p>
                Mọi tranh chấp sẽ được giải quyết thông qua thương lượng thiện chí. Nếu không đạt được 
                thỏa thuận, áp dụng pháp luật Việt Nam.
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
