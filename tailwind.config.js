const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/wbox-forms-tailwindcss/**/*.{js,jsx,ts,tsx}',
    './node_modules/wbox-forms-tailwindcss/**/safelist.txt'
  ],

  theme: {
    colors: {
      ...colors,
      primary: colors.indigo,
      secondary: colors.green,
      error: colors.red,
      warning: colors.amber,
      transparent: '#0000',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}