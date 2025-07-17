/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azulejo: "var(--azulejo-blue)",
        "azulejo-light": "var(--azulejo-light-blue)",
      },
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
        philosopher: ["var(--font-philosopher)", "serif"],
      },
    },
  },
  plugins: [],
};
