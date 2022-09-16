/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'white-desktop': "url('./image/bg-desktop-light.jpg')",
        'white-mobile': "url('./image/bg-mobile-light.jpg')",
        'dark-desktop': "url('./image/bg-desktop-dark.jpg')",
        'dark-mobile': "url('./image/bg-mobile-dark.jpg')",
      }
    },
  },
  plugins: [],
}
