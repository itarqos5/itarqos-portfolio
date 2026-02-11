/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        secondary: {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
