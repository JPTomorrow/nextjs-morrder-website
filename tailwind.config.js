/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "homepage-bg-1": 'url("/homepage-bg-1.jpg")',
      },
      colors: {
        transparent: "transparent",
        gray: colors.stone,
        white: "ghostwhite",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
