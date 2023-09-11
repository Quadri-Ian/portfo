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
        // yellow: '#FDC14C',
        offblack: '#5b7c99',
        redish: '#EDF5E1',
        lightred: '#8ee4af',
        tillgreen: '#5cdb95',
        shybrown: '#907163',
        blushpink: '#379683',
      },
    },
  },
  plugins: [],
}