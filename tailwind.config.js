/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-gothamRounded)'],
      },
      colors: {
        gray: {
          100: '#E1E1E1',
          150: '#F5F7F7',
          250: '#AAAAAA',
          350: '#9E9E9E',
        },
        green: {
          250: '#7BCC29',
        },
        yellow: {
          650: '#FFDC00',
        },
        orange: {
          350: '#FCB813',
        },
      },
    },
  },
}
