/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: 'var(--yellow)',
        lightGreen: 'var(--lightGreen)',
        blue: 'var(--blue)',
        selected: 'var(--selected)',
        pink: 'var(--pink)',
        grey: 'var(--grey)',
        white: 'var(--white)',
        darkgrey: 'var(--darkgrey)',
      },
      boxShadow: {
        shadow: 'var(--shadow)',
        greyShadow: 'var(--greyShadow)',
        greyshadowHover: 'var(--greyshadow-hover)',
        cardshadow: 'var(--cardshadow)',
        shadowHover: 'var(--shadow-hover)',
        shadowHoverCard: 'var(--shadow-hover-card)',
      },
      borderRadius: {
        15: 'var(--radius)',
      },

    },
  },
  plugins: [
  
  ],
}
