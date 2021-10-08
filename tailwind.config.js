// tailwind.config.js
const colors = require('tailwindcss/colors')
// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  
      theme: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          gray: colors.trueGray,
          indigo: colors.indigo,
          red: colors.rose,
          yellow: colors.amber,
          "azulito": "#009eeb",
        }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }