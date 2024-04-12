/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#eb8d59",
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

