/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./components/*.{html,js,jsx}"
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1496px',
    },
    extend: {
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

