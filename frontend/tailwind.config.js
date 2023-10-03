/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
        screens: {
          'sm': '393px',
          // => @media (min-width: 992px) { ... }
        },
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: "class"
}

