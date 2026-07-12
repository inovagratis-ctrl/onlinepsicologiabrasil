/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36adf8',
          500: '#0c93e9',
          600: '#0074c7',
          700: '#015ca2',
          800: '#064f85',
          900: '#0b426e',
        },
        secondary: {
          50: '#fdf8ef',
          100: '#faefd9',
          200: '#f4dbb1',
          300: '#edc280',
          400: '#e4a14d',
          500: '#dd872c',
          600: '#ce6e21',
          700: '#ab541d',
          800: '#89431f',
          900: '#6f381c',
        },
        accent: {
          50: '#f0fdf6',
          100: '#dcfce9',
          200: '#bbf7d4',
          300: '#86efb1',
          400: '#4ade84',
          500: '#22c55e',
          600: '#16a34b',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
