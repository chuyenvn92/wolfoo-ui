/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "jadestone": "#02a99e",
      "bus-yellow": "#fad900",
      "corn-field": "#fff7bd",
      "slate-blue": "#7471f4",
      "royal-blue": "#5679eb",
      "white": "#fff",
      "caribbean-green": "#13d69c",
      "selective-yellow": "#ffbc00",
      "illusion": "#f79bb4",
      "shamrock": "#1cd29b",
      "mellow-apricot": "#ffb973"
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('/src/assets/header-bg.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    backgroundSize: {
      "130%": "130%",
    },
  },
  plugins: [],
};
