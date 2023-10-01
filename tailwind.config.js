/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/app.vue',
    './src/views/**/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#161525',
        secondary: '#1D1E33',
        darkSecondary: '#19182A',
        darkPrimary: '#12111E',
        neutral: '#242333',
        light: '#D7D8DA',
        red: '#F51A0F'
      },
      fontFamily: {
      },
      fontSize: {
      },
      width: {
      }
    }
  },
  plugins: []
}
