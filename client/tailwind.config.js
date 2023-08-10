/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        votosPink: "#efc0b4",
        votosGreen: "#4c5444",
        votosBlue: "#2f707f",
        votosRed: "#a85d5d",
        votosBlack: "#222022",
      },
    },
  },
  plugins: [],
};
