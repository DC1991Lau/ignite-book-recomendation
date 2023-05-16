/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        green: {
          300: "#0A313C",
          200: "#255D6A",
          100: "#50B2C0",
        },
        purple: {
          200: "#2A2879",
          100: "#8381D9",
        },
        grayscale: {
          800: "#0E1116",
          700: "#181C2A",
          600: "#252D4A",
          500: "#303F73",
          400: "#8D95AF",
          300: "#D1D6E4",
          200: "#E6E8F2",
          100: "#F8F9FC",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
