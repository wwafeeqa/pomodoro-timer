/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'gotham': ['Gotham', 'sans-serif'],
        'gotham-bold': ['Gotham-Bold', 'sans-serif'],
        'gotham-italic': ['Gotham-Italic', 'sans-serif'],

      }
    },
    colors: {
      'this-white': '#f0f0f0',
      'purple': '#5d15d2',
      'yellow': '#d7de21',
      'this-black': '#1f1f1f',
      'light-purple': '#c686f3',
    }
  },
  plugins: [],
  darkMode: "class"
}

