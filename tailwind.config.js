module.exports = {
  theme: {
    extend: {
      spacing: {
        "56": "14rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
    container: {
      center: true,
    },
    boxShadow: {
      outline: "0 0 0 3px rgba(255, 191, 71, 1)",
    },
    colors: {
      black: "#000000",
      lightPurple: "#FBF2FF",
      teal: "#aedecd",
      lightGreen: "#dcffe1",
      lightRed: "#fcd9d7",
      white: "#ffffff",
      lightYellow: "#fff2c0",
      pink: "#fab67e",
      blue: "#E5EFFB",
      darkGray: "#686868",
      lightGray: "#a5a5a5",
      contactForm: "#f7f7f7",
    },
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "450px",
      md: "550px",
      lg: "768px",
      xl: "1024px",
    },
  },
  purge: {
    content: ["./src/**/*.html"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
