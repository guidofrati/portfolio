/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetch: ["Chakra Petch", "sans-serif"],
      },
      colors: {
        fondo: "#11151C",
        letra: "#D66853",
        bordo: "#7D4E57",
        gris: "#aeaeae",
        carta: "#212D40",
        blanco: "#FEFEFE",
      },
    },
  },
  plugins: [],
};
