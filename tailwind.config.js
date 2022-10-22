const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,css,scss}",
    "./components/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        pops: ["Poppins"],
      },
      colors: {
        zeddblue: "#007de8",
        zeddfaint: "#fafafa",
        zeddgreen: " #00E8BE",
        zeddblack: "#121212",
        zeddgray: "#31353A",
      },
    },
  },
  plugins: [],
};
