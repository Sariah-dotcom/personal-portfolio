/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'inter':['Inter', 'sans-serif']
    },

    colors:{
      'coral':'#FF7A6B',
      'black':'#000',
      'white':'#FFF',
      'dark-coral':'#fa5442'
    },

    extend: {},
  },
  plugins: [],
}

