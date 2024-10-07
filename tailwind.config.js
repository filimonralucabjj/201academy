/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'header-bg': "url('./src/assets/header-bg.jpg')",
    }
  },
  plugins: [],
}