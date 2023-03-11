/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        Brand_orange: {
          100: '#ffe6e0',
          200: '#ffcdc1',
          300: '#ffb4a2',
          400: '#ff9b83',
          500: '#ff8264',
          600: '#cc6850',
          700: '#994e3c',
          800: '#663428',
          900: '#331a14',
        },
      },
    },
  },
  plugins: [],
};
