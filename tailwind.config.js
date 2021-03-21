module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',
        darkblue: 'hsl(234, 12%, 34%)',
        grayblue: 'hsl(229, 6%, 66%)',
        lightgray: 'hsl(0, 0%, 98%)', 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
