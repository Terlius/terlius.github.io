/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secundary: "#ff9900",
      
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    
    },
  },
  plugins: [],
}

