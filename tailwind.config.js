/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero_bg": "url('../images/bg-hero.png')",
        "logo_bg": "url(../images/lg_back.svg)"
      }
    },
  },
  plugins: [],
}

