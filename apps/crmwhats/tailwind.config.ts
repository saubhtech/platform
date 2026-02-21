import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        surface: '#13131A',
        surface2: '#1C1C27',
        primary: '#7C3AED',
        secondary: '#EC4899',
        accent: '#F97316',
        'text-main': '#F8F8FF',
        'text-muted': '#6B7280',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        glass: '16px',
      },
      backdropBlur: {
        glass: '12px',
      },
      keyframes: {
        skeleton: {
          '0%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '0.4' },
        },
      },
      animation: {
        skeleton: 'skeleton 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
