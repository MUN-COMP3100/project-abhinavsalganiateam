/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          100: "#f6f7f8",
          200: "#e3e7ea",
          300: "#c1c9d0",
          400: "#98a6b4",
          500: "#76839b",
          600: "#4e5f79",
          700: "#333f57",
          800: "#212937",
          900: "#161d24",
        },
        blue: {
          100: "#f5faff",
          200: "#d5e5f5",
          300: "#b3cced",
          400: "#8fb3e3",
          500: "#6c99d9",
          600: "#4f79b9",
          700: "#395f90",
          800: "#2c4470",
          900: "#23304f",
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
