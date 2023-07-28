/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowPrimary: "#f3b42e",
        yellowSecondary: "#cf9822",
        greenPrimary: "#82BF56",
        greenSecondary: "#5e8d3d",
        redPrimary: "#E74C3C",
        redSecondary: "#b83a2c",
        shadow: "[0px 2px 4px rgba(0, 0, 0, 0.25)]",
      },
    },
  },
  plugins: [],
};
