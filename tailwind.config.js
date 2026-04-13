/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          'colored-card': '#D85A3B',
          'cta': '#E95A2C',
          'secondary': '#F3E7D7',
          'accent-text': '#D85A3B',
          'line': '#E07A52',
          'page-bg': '#F4EEE7',
          'card-bg': '#FBF8F4',
        },
        base: {
          pure: '#07041f',
          subtle: 'rgba(7,4,31,0.6)',
          light: '#f4f4f4'
        }
      },
      fontFamily: {
        sans: ['"Golos Text"', 'sans-serif'],
        serif: ['"Nyght Serif"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.5rem',
        'pill': '100rem',
      }
    }
  },
  plugins: [],
}
