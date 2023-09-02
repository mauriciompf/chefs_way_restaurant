/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pri-red": "#7F1637",
        "pri-yellow": "#FFC857",
        "pri-brown": "#825C3A",
        "pri-blue": "#03071e",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        playFair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
