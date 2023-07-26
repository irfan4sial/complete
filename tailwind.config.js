/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary: {
          DEFAULT: "#202327",
          light: "#686B6E",
          dark: "#363A3D",
        },
        nobel: {
          DEFAULT: "#9B9C9E",
          light: "#CDCECF",
          dark: "#1A1D21",
        },
        secondary: {
          DEFAULT: "#B6F09C",
          light: "#D9F5C5",
          dark: "#74AD62",
        },

        nobelblue: "#0C1132",
      },

      backgroundImage: {
        "gradient-tech":
          "linear-gradient(10deg, #4D62E5 0%, #4D62E5 5%, #87DDEE 67%, #B6F09C 100%)",
        "gradient-links": "linear-gradient(45deg, #82DBF7 0%, #B6F09C 100%)",
      },
    },
  },
  plugins: [],
};
