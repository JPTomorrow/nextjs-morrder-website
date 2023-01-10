/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "homepage-bg-1": 'url("/homepage-bg-2.webp")',
      },
      colors: {
        transparent: "transparent",
        gray: colors.stone,
        purple1: "#430b70",
        purple2: "#580899",
        white: "ghostwhite",
        blue: "#102b3f",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
