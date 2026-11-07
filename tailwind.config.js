/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",          // pega todos os .html na raiz do projeto (index.html, contato.html, etc.)
    "./**/*.html",       // pega .html em subpastas, se houver
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3B45",
        "background-light": "#FFFFFF",
        "background-dark": "#0F1115",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
