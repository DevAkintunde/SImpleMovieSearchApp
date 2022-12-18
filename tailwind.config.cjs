/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      pro: "320px", //max of 834
      desktop: "834px" //max of 1440
    },
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar::-webkit-scrollbar": {
          display: "none"
        }
      });
    }),
  ],
}
