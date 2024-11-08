/** @type {import('tailwindcss').Config} */

import { Container } from 'postcss';
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Container:{
      //   center:true,
      //   padding:{
      //     default:  "1rem",
      //     sm: "2rem",
      //     lg: "4rem",
      //     xl: "5rem",
      //     "2xl":"6rem",
      //   },
      // },
    },
  },
  plugins: [tailwindScrollbar],
}

