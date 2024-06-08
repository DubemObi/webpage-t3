/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: {
        1: "#BDBDBD",
        2: "#F3F3F3",
        3: "#FBFBFB",
        4: "#F2F2F2",
      },
      black: "#333333",
      white: "#FFFFFF",
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
