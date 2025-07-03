/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        funnel: ['Funnel Sans', 'sans-serif'], 
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
      colors: {
        "blue-bg": "#0c0e29",
      },
    },
  },
  plugins: [],
};
