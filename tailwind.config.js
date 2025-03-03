/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cards: "rgb(231, 229, 228 , 0.5)",
      },
    },
  },
  plugins: [],
};
