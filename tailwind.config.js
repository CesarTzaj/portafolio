/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'yo': '#243c5a',
      },
      container: {
        center: true,
        },
    },
  },
  plugins: [],
}

