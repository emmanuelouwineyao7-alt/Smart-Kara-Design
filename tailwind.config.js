/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skd: {
          dark: '#0B0F19',
          card: '#111827',
          cardLight: '#1F2937',
          blue: '#1A73E8',
          blueHover: '#1557B0',
          blueLight: '#3B82F6',
          accent: '#00F0FF',
          wood: '#D97706',
          gold: '#F59E0B',
          textMuted: '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        script: ['Caveat', 'Dancing Script', 'cursive'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #1A73E8 0%, #00F0FF 100%)',
        'dark-glow': 'radial-gradient(circle at 50% 0%, rgba(26, 115, 232, 0.15) 0%, rgba(11, 15, 25, 0) 70%)',
      }
    },
  },
  plugins: [],
}
