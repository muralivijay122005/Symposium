/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        funnel: ['Funnel Sans', 'sans-serif'],
      },
      scrollBehavior: ['responsive'],
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
      },
      colors: {
        "blue-bg": "#0c0e29",
      },
    },
  },
  plugins: [],
};
