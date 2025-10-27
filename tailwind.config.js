/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Georgia Pro', 'sans-serif'], // For titles, headers
        body: ['Georgia Pro', 'sans-serif'],    // For paragraphs, body text
      },
    },
  },
  plugins: [],
}
