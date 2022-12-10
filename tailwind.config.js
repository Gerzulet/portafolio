/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['"Inconsolata"' ]
      },
      animation : {
           'fadein' : 'fadein 1.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
      },
      keyframes: {
        fadein: {
        '0%' : { opacity: 0 },
        '100%' : {opacity: 1},
        }
      }
    },
  },
  plugins: [],
}

