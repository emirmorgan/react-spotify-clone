/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1db954",
        backdrop: "#121212",
        link: "#b3b3b3",
        footer: "#181818",
      },
    },
  },
  plugins: [],
};
