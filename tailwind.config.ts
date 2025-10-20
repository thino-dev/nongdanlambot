import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0E27',
          50: '#1A1F3F',
          100: '#151938',
          200: '#0F1230',
          300: '#0A0E27',
          400: '#070A1D',
          500: '#040614',
        },
        accent: {
          DEFAULT: '#00D4FF',
          50: '#E6FBFF',
          100: '#CCF7FF',
          200: '#99EFFF',
          300: '#66E7FF',
          400: '#33DEFF',
          500: '#00D4FF',
          600: '#00AACC',
          700: '#008099',
          800: '#005566',
          900: '#002B33',
        },
        secondary: {
          DEFAULT: '#1A1F3A',
          50: '#3A4464',
          100: '#2F3752',
          200: '#252B46',
          300: '#1A1F3A',
          400: '#14182D',
          500: '#0E1120',
        },
        surface: '#0F1420',
        text: {
          DEFAULT: '#E8EBF7',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
