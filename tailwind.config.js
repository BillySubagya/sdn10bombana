/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        school: {
          navy: '#17365D',
          blue: '#2878D0',
          sky: '#EAF5FF',
          yellow: '#FFD166',
          green: '#2E9D72',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 54, 93, 0.10)',
      },
    },
  },
  plugins: [],
}