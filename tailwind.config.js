/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#ccc',
      },
      fontFamily:{
        Inter:'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}