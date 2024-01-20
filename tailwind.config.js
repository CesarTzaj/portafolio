/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'yo': '#243c5a',
      },
      container: {
          sm: '315px',
          md: '760px',
          lg: '1023px',
          xl: '1240px',
          '2xl': '1536px',
        },
    },
  },
  plugins: [],
}

