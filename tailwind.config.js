/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fiesta-blue': '#4D92D0',
        'fiesta-red': '#C2384C',
        'fiesta-light': '#F4F4F4',
        'fiesta-dark': '#333333',
        'fiesta-teal': '#2F7C7D',
      },
      fontFamily: {
        'montserrat': ['Outfit', 'sans-serif'],
        'inter': ['Rubik', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(77, 146, 208, 0.5)',
        'glow-red': '0 0 20px rgba(194, 56, 76, 0.5)',
      }
    },
  },
  plugins: [],
}
