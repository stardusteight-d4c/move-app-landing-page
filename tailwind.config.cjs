/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: '640px',
      md: '768px',
      mmd: '900px',
      lg: '1024px',
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
      },
    },
  },
  plugins: [],
}