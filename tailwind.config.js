/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Work Sans', 'sans-serif'], // For titles, headers
        body: ['Lato', 'sans-serif'],    // For paragraphs, body text
      },
    },
  },
  plugins: [],
}
