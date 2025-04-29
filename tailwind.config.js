/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        '3B7FD9': '#3B7FD9', // Primary blue
        '1AC0C6': '#1AC0C6', // Secondary teal
        'FF7D3B': '#FF7D3B', // Accent orange
        success: {
          DEFAULT: '#10B981', // Success green
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B', // Warning yellow
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444', // Error red
          light: '#FEE2E2',
        },
      },
      boxShadow: {
        smooth: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};