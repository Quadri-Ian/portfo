/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      ts: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        maroon: '#ef481c',
        milk: '#efefef',
        nblack: '#36374d',
        nobel: '#ffeeee',
        tillgreen: '#00ff7b',
        blablu: '#151B1F',
        pinkish: '#ed6e5c',
        offwhite: '#919496',
      },
    },
  },
  plugins: [],
}