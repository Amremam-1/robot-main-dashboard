/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-text": "var(--primary-text)",
        "main-bg": "var(--main-bg)",
      },
    },
  },
  plugins: [],
}
