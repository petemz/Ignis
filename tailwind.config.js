/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '1150px'},

      '-lg': {'min': '1150px'},

      'md': {'max': '1000px'},
      
      '-md': {'min': '1000px'},

      'sm': {'max': '900px'},
      
      '-sm': {'min': '900px'},

      'xs': {'max': '600px'},
      
      '-xs': {'min': '600px'},
    }
  },
  plugins: [],
}