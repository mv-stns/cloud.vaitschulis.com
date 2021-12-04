const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      warmGray: colors.warmGray,
      trueGray: colors.trueGray,
      gray: colors.gray,
      coolGray: colors.coolGray,
      blueGray: colors.blueGray,
    },
    extend: {
      colors: {
        deepred: '#ff0000',
      },
    },
    fontFamily: {
      'metropolis': ['Metropolis'],
      'metropolis-extra': ['Metropolis Extra'],
      'metropolis-semi': ['Metropolis Semi'],
      'sharp-sans': ['Sharp Sans'],
    },
  },
  variants: {
    display: ['responsive'],
    extend: {
      backgroundColor: ['active'],
      fill: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-border-gradients'),
  ],
}
