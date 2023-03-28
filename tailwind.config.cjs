/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: '640px',
      md: '768px',
      mdd: '800px',
      mmd: '900px',
      lg: '1024px',
      llg: '1065px',
      xl: '1280px',
      '2xl': '1536px',
    },

    fontFamily: {
      manrope: 'Manrope, sans-serif',
    },
    extend: {
      backgroundSize: {
        '100%': '100% 100%',
      },
      backgroundImage: {
        'hero-desktop': "url('/hero-bg-desktop.jpg')",
        'hero-tablet': "url('/hero-bg-tablet.png')",
        'hero-mobile': "url('/hero-bg-mobile.png')",
        'card-1': "url('/card1.jpg')",
        'card-2': "url('/card2.jpg')",
        'card-3': "url('/card3.jpg')",
      },
    },
  },
  plugins: [],
}
