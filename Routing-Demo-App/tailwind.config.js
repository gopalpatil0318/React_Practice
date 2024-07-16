/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          100: '#E5E5E5', // Lightest shade, adjust as needed
          200: '#BFBFBF', // Adjust as needed
          300: '#999999', // Adjust as needed
          400: '#737373', // Adjust as needed
          500: '#4D4D4D', // Mid shade, adjust as needed
          600: '#333333', // Adjust as needed
          700: '#1A1A1A', // Adjust as needed
          800: '#0D0D0D', // Adjust as needed
          900: '#0A0A0A', // Darkest shade
        },
      },
    },
  },
  plugins: [],
}
