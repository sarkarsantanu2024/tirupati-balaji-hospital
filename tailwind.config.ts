import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#fbe8e9',
          100: '#f6d2d3',
          200: '#eda5a7',
          300: '#e4787b',
          400: '#db4b4f',
          500: '#C51D22',
          600: '#b01a1e',
          700: '#8a1418',
          800: '#630e11',
          900: '#3d090b',
          DEFAULT: '#C51D22',
        },
        secondary: {
          50:  '#f4e7e7',
          100: '#e9cfd0',
          200: '#d39fa1',
          300: '#bd6f72',
          400: '#a73f43',
          500: '#7A1417',
          600: '#6b1214',
          700: '#550e10',
          800: '#3f0a0c',
          900: '#290608',
          DEFAULT: '#7A1417',
        },
        accent: {
          50:  '#fbe8e9',
          100: '#f6d2d3',
          200: '#eda5a7',
          300: '#e4787b',
          400: '#db4b4f',
          500: '#C51D22',
          600: '#b01a1e',
          700: '#8a1418',
          800: '#630e11',
          900: '#3d090b',
          DEFAULT: '#C51D22',
        },
        royal: {
          50:  '#e9eaf5',
          100: '#d3d5ea',
          200: '#a7abd5',
          300: '#7b81c0',
          400: '#4f57ab',
          500: '#252985',
          600: '#20246f',
          700: '#191c56',
          800: '#12143d',
          900: '#0b0c24',
          DEFAULT: '#252985',
        },
        neutral: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(135deg, rgba(37,41,133,0.92) 0%, rgba(18,20,61,0.85) 100%)",
      },
      boxShadow: {
        'card': '0 4px 24px rgba(197,29,34,0.10)',
        'card-hover': '0 8px 40px rgba(197,29,34,0.18)',
        'button': '0 4px 16px rgba(197,29,34,0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}

export default config
