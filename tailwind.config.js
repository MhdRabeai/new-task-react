module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require("@preline/strong-password"),
    require("preline/plugin"),
  ],
};
