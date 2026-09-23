/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Performance accent — electric lime
        accent: {
          DEFAULT: '#c5fb45',
          50: '#f6ffe0',
          100: '#ebffbf',
          200: '#d9ff80',
          300: '#c5fb45',
          400: '#aee020',
          500: '#8fb812',
          600: '#6d8e0c',
          700: '#4d6408',
          800: '#2f3e06',
          900: '#1a2303',
        },
        surface: {
          0: '#050608',
          50: '#0a0c10',
          100: '#101319',
          200: '#161a22',
          300: '#1c212b',
          400: '#232936',
          500: '#2b3240',
        },
        line: {
          DEFAULT: '#1f242e',
          soft: '#171b22',
          strong: '#2b3240',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '11xl': ['5.5rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(197, 251, 69, 0.35)',
        'glow-sm': '0 0 40px -15px rgba(197, 251, 69, 0.3)',
        float: '0 40px 80px -20px rgba(0,0,0,0.6), 0 20px 40px -10px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
