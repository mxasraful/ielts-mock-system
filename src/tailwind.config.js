/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // 👈 this line must include all your files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
