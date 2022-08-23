/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#6366f1",
        primary2: "#1E87F0",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        yanone: ["Yanone Kaffeesatz", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
