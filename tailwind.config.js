/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero_bg": "url('../images/bg-hero.png')"
      }
    },
  },
  plugins: [],
}

