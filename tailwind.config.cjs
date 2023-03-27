/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    fontFamily: {
      manrope: 'Manrope, sans-serif',
    },
    extend: {
      backgroundImage: {
        'hero': "url('/hero.jpg')",
      }
    },
  },
  plugins: [],
}

