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
      'light-grey': '#FAFAFA',
      silver: '#EBEBEB',
      red: '#FF6C6C'
    },
    fontFamily: {
      'display': "'Neue Metana Next Outline', Arial, sans-serif",
      'caption': "'Neue Metana Next', Arial, sans-serif",
      'body': 'Gilroy, Arial, sans-serif',
    },
    fontSize: {
      '12px': '0.75rem',
      '14px': '0.875rem',
      '16px': '1rem',
      '18px': '1.125rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '32px': '2rem',
      '40px': '2.5rem',
      '64px': '4rem',
      '106px': '6.784rem',
      '240px': '15rem',
    },
    extend: {
      spacing: {
        '75': '18.75rem', // 300px
        '100': '25rem', // 400px
        '107.5': '26.875rem', // 430px
        '112.5': '28.125rem', // 450px
        '115': '28.75rem', // 460px
        '122.5': '30.625rem', // 490px
        '165': '41.25rem', // 660px
        '170': '42.5rem', // 680px
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
