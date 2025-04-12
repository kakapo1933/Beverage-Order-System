/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FBE8A6', /* light yellow/cream */
          100: '#FBE8A6', /* light yellow/cream */
          200: '#FBE8A6', /* light yellow/cream */
          300: '#F4976C', /* peach/orange */
          400: '#F4976C', /* peach/orange */
          500: '#F4976C', /* peach/orange */
          600: '#F4976C', /* peach/orange */
          700: '#F4976C', /* peach/orange */
          800: '#F4976C', /* peach/orange */
          900: '#F4976C', /* peach/orange */
          950: '#F4976C', /* peach/orange */
        },
        secondary: {
          50: '#D2FDFF', /* very light cyan */
          100: '#D2FDFF', /* very light cyan */
          200: '#B4DFE5', /* light blue */
          300: '#B4DFE5', /* light blue */
          400: '#B4DFE5', /* light blue */
          500: '#303C6C', /* dark blue */
          600: '#303C6C', /* dark blue */
          700: '#303C6C', /* dark blue */
          800: '#303C6C', /* dark blue */
          900: '#303C6C', /* dark blue */
          950: '#303C6C', /* dark blue */
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}