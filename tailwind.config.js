export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vb-gold': '#d4af37',
        'vb-gold-light': '#f3e5ab',
        'vb-maroon': '#800000',
        'vb-dark': '#1a1a1a',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
