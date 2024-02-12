/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#ffffff",
        primaryBgDark: "#0C0A00",
        secondaryBgDark: "#0E0E0E",

        primaryHighlight: "#59BC6C",

        primaryGreenText: "#A1D9AC",
        secondaryTextGrey: "#CCCCCC",
        ternaryTextGrey: "#626262",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      gradientColorStops: (theme) => ({
        "blue-green": [theme("colors.blue.500"), theme("colors.green.500")],
      }),
      keyframes: {
        wiggle: {
          "0%, 100% ": {
            transform: "translateY()",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "spin-slow-stop": "spin 0.5s linear",
        wiggle: "wiggle 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
