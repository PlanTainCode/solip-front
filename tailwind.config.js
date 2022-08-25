/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      green: '#5C5E4E',
      grey: '#9C9C9C',
      silver: '#EBEBEB',
    },
    fontFamily: {
      'display': "'Neue Metana Next Outline', Arial, sans-serif",
      'caption': "'Neue Metana Next', Arial, sans-serif",
      'body': 'Gilroy, Arial, sans-serif',
    },
    fontSize: {
      '12px': '0.75rem',
      '18px': '1.125rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '40px': '2.5rem',
      '64px': '4rem',
      '106px': '6.784rem',
      '240px': '15rem',
    },
    extend: {},
  },
  plugins: [],
}
