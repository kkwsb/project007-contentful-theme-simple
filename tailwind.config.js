let extendColors = {
  // Quotation marks & button outlines & non-hovered buttons:  #0072ff (->500)
  // Light gray footer text:  #999fb3 (->slate-200)
  // Button hover on a gradient background:  #cce7ff (bg starts white w/ text that says 0072ff) (->100)
  // Button hover on a light background:  #328eff (->400)
  // Button hover on a dark background:  #0864d7 (->600)
  // Button hover-text on a dark background:  #d4d5d7 (normal = white; light-bg button is & stays white) (->fs-200)
  // Linear gradient to right:  linear-gradient(to right, #0072ff, #00c6ff) (->tl-400)
  // Footer dark color:  #2c2f3b (->sl-800)
    "azimuth-blue": {
    DEFAULT: "#0072FF",
    100: "#cce7ff",
    200: "#99C7FF",
    300: "#66AAFF",
    400: "#328eff",
    500: "#0072FF",
    600: "#0864d7",
    700: "#004499",
    800: "#002E66",
    900: "#001733",
  },
  "azimuth-teal": {
    400: "#00c6ff",
  },
  "azimuth-slate": {
    200: "#d4d5d7",
    800: "#2c2f3b",
  },
  "azimuth-fieldstone": {
    200: "#d4d5d7",
  }
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
