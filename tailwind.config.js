/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bice: "#006BA6",
        dodger: "#0496FF",
        xanthous: "#FFBC42",
        raspberry: "#D81159",
        quina: "#8F2D56",
        lime: "#BAFF29",
        mindaro: "#D3FF75",
        majollete: "#4D47EF",
        verdant: "#2C5F2D",
        yellow_2: "#FFE77A",
      },
      fontFamily: {
        montserrat: ["Montserrat", "cursive"],
        pt_sans: ["PT Sans", "serif"],
        raleway: ["Raleway", "sans"],
      },
    },
  },
  plugins: [],
};
