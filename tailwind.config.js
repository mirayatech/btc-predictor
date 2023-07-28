/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowPrimary: "#f3b42e",
        yellowSecondary: "#cf9822",
      },
    },
  },
  plugins: [],
};
