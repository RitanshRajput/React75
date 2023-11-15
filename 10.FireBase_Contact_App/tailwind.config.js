/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      black: "#0a0a0a",
      white: "#f8fafc",
      slateBlack: "#020617",
      darkBlue: "#3490dc",
      lightBlue: "#60a5fa"
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './styles/tailwind.config.js',
};
