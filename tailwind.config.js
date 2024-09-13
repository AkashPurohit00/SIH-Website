/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    fontFamily: {
      'poppins':['Poppins','Helvetica','ui-sans-serif', 'system-ui']
    },
    extend: {
      backgroundImage: {
        'QF': "url('/dist/login.png')",

      }
    },
  },
  plugins: [],
}

