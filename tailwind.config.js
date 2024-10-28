/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: { min: "320px", max: "480px" },
        sm: { min: "481px", max: "994px" },
        md: { min: "995px", max: "1001px" },
        lg: { min: "1002px", max: "1599px" },
        xl: { min: "1600px", max: "1999px" }, 
        "2xl": { min: "2000px" },
        // fold: { min: "660px", max: "690px" },
      },//Breakpoints for screens
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}