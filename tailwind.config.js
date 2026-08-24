/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fiesta-cream': '#F2F1EC',
        'fiesta-ink': '#0E1116',
        'fiesta-panel': '#171B22',
        'fiesta-red': '#C8143C',
        'fiesta-blue': '#63ADE2',
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 60%': { opacity: 1 },
          '61%, 100%': { opacity: .25 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        floaty: 'floaty 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
