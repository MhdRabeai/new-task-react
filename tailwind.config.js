module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require("@preline/strong-password"),
    require("flowbite/plugin"),
    require("preline/plugin"),
  ],
};
if (typeof self !== "undefined") {
  require("@preline/strong-password");
}
