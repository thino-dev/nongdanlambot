# EA MT5 Studio - Landing Page

Website one-page giới thiệu dịch vụ thuê viết bot EA Forex MT5 chuyên nghiệp.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Form**: React Hook Form + Zod
- **Toast**: Sonner

## 🎨 Theme Colors (Deep Ocean Preset)

- **Primary**: #0A0E27 (Deep Navy)
- **Accent**: #00D4FF (Cyan Bright)
- **Secondary**: #1A1F3A (Medium Navy)
- **Surface**: #0F1420
- **Text**: #E6E8EE

Để thay đổi theme, chỉnh sửa `tailwind.config.ts` trong phần `colors`.

## 📦 Installation

```bash
# Clone repository
git clone <repo-url>
cd landing

# Install dependencies (khuyến nghị dùng pnpm)
pnpm install
# hoặc
npm install
```

## 🏃 Development

```bash
# Chạy development server
pnpm dev
# hoặc
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## 🏗️ Build for Production

```bash
# Build
pnpm build
# hoặc
npm run build

# Start production server
pnpm start
# hoặc
npm start
```

## 📁 Project Structure

```
landing/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── robots.ts          # SEO robots
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Section.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/              # Page sections
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProcessSection.tsx
│   ├── WhyUsSection.tsx
│   ├── FeaturesSection.tsx
│   ├── PricingSection.tsx
│   ├── PortfolioSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   └── ContactSection.tsx
├── lib/                   # Utilities
│   └── utils.ts
├── public/                # Static assets
│   └── favicon.svg
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## ⚙️ Configuration

### Đổi theme màu

Chỉnh sửa `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#YourColor',
    // ...
  },
  accent: {
    DEFAULT: '#YourAccentColor',
    // ...
  },
}
```

### Tùy chỉnh nội dung

Tất cả nội dung được hard-coded trong các sections tương ứng. Tìm và chỉnh sửa trong thư mục `sections/`.

### Form submission

Hiện tại form chỉ log ra console. Để kết nối backend/email:

1. Mở `sections/ContactSection.tsx`
2. Tìm hàm `onSubmit`
3. Thay thế logic mock bằng API call thực

```typescript
const onSubmit = async (data: ContactFormData) => {
  // Gửi đến API của bạn
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  })
  // ...
}
```

## 🎯 Features

✅ Responsive 100% (mobile-first)  
✅ SEO optimized (meta tags, sitemap, robots)  
✅ Accessibility (semantic HTML, ARIA labels)  
✅ Smooth animations (Framer Motion)  
✅ Form validation (React Hook Form + Zod)  
✅ Toast notifications  
✅ Clean, maintainable code  
✅ TypeScript strict mode  

## 📊 Lighthouse Score Target

- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

## 📄 License

MIT License - Tự do sử dụng cho dự án cá nhân/thương mại.

## 📞 Contact

- Email: contact@eamt5studio.com
- Telegram: [@eamt5studio](https://t.me/eamt5studio)

---

Made with ❤️ by EA MT5 Studio
# nongdanlambot
