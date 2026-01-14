/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#72471c',
          dark: '#4a2f14',
        },
        secondary: {
          DEFAULT: '#a59069',
          light: '#d4a574',
        },
        cream: {
          DEFAULT: '#f5f1e8',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-lora)', 'serif'],
      },
    },
  },
  plugins: [],
}
