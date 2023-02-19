/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#AD5D4E",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 14.53%, #Fc59ff 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        person1: "url('./assets/KevinTorres.jpeg')",
        brush: "url('./assets/brush.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
