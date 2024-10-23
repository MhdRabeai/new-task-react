module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require("preline/plugin"),
  ],
};
