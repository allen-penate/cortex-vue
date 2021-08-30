module.exports = {
  prefix: 'tw-',
  important: true, // overpower reset css and make work inside bs scope
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
