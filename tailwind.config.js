/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F50057',
        secondary: '#b3b3b3',
        tertiary: '#3f3d56',
        container: "#cec8c8"
      },
      backgroundImage: {
        banner_login: "url('/src/assets/banner_login.png)",
      },
    },
  },
  plugins: [],
};
