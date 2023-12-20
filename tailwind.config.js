/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"#e3f1fe"
      },
      colors:{
        primary:"#e3f1fe"
      }
    },
  },
  plugins: [],
}