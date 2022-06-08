module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        darkPrimary: "var(--color-dark-primary)",
        darkSecondary: "var(--color-dark-secondary)",
      },
    },
  },
  plugins: [],
};
