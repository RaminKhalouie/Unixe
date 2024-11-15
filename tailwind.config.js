/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/git**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero_bg": "url('../images/bg-hero.png')",
        "logo_bg": "url(../images/lg-back.svg)"
      }
    },
  },
  plugins: [],
}

