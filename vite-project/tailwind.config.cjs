/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      transparent: 'transparent',
      'grey-900': '#121214',
      'grey-800': '#202024',
      'grey-400': '#7C7C8A',
      'grey-200': '#7C7C8A3',
      'grey-100': '#E1E1E6',
      'cyan-500': '#61DAFB',
      'cyan-400': '#A1EBFF',
      'black': '#000',
      'white': '#FFF'
    },
    extend: {
      'fontFamily': 'Inter, sans-serif'
    },
  },
  plugins: [],
}
