/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google' : 'Manrope, sans-serif'
      },
      colors: {
        'custom' : '#C58940'
      }
    },
  },
  plugins: [require("daisyui")],
}