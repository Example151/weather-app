/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB'
        },
        gray: {
          50: '#F9FAFB',
          200: '#E5E7EB',
          400: '#9CA3AF',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937'
        },
        yellow: {
          400: '#FBBF24'
        },
        red: {
          50: '#FEF2F2',
          500: '#EF4444'
        }
      }
    },
  },
  plugins: [],
}