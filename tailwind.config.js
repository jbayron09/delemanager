/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F5F7FA',
          100: '#E4E7EB',
          200: '#CBD2D9',
          300: '#9AA5B1',
          400: '#7B8794',
          500: '#616E7C',
          600: '#52606D',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933',
        },
        orange: {
          50: '#FFE8D9',
          100: '#FFD0B5',
          200: '#FFB088',
          300: '#FF9466',
          400: '#F9703E',
          500: '#F35627',
          600: '#DE3A11',
          700: '#C52707',
          800: '#AD1D07',
          900: '#841003',
        },
      },
    },
  },
  plugins: [],
}