import { redirect } from 'react-router-dom';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#ee0181',
        'mycolor': '#01ee91'
      },
      fontFamily:{
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
  },
  plugins: [],
}}