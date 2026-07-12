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
          50: '#f0f7fa',
          100: '#daedf3',
          200: '#b5dbe8',
          300: '#82c3d9',
          400: '#4da8c7',
          500: '#4a90a4',
          600: '#3d7a8e',
          700: '#356475',
          800: '#2f5360',
          900: '#2a4651',
        },
        secondary: {
          50: '#f4f7f4',
          100: '#e5ece5',
          200: '#ccdacc',
          300: '#a8bfa8',
          400: '#8b9d83',
          500: '#6e8166',
          600: '#586952',
          700: '#465342',
          800: '#3a4437',
          900: '#32392f',
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
        },
        warm: {
          50: '#fdfcfa',
          100: '#f9f7f4',
          200: '#f5f3ef',
          300: '#ece8e1',
          400: '#ddd7cc',
          500: '#c9c1b4',
          600: '#b0a696',
          700: '#938a7a',
          800: '#7a7266',
          900: '#655e54',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
