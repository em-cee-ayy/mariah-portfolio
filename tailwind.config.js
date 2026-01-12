// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // this tells tailwind to look in your html file
    "./index.html",
    // this tells tailwind to look in ALL your JS/JSX/TS/TSX files inside the src folder
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}