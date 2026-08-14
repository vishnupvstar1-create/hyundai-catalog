/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- This is the magic word
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}