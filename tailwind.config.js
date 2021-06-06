let extendColors = {
  "azimuth-blue": {
    DEFAULT: "#0072FF",
    50: "#E5F1FF",
    100: "#CCE3FF",
    200: "#99C7FF",
    300: "#66AAFF",
    400: "#338EFF",
    500: "#0072FF",
    600: "#005BCC",
    700: "#004499",
    800: "#002E66",
    900: "#001733",
  },
};

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: extendColors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
