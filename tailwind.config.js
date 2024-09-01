import { text } from '@fortawesome/fontawesome-svg-core';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      },
      transitionTimingFunction: {
        'slide': 'ease-out',
      },
      translate: {
        '50p': '50%',
      },
      colors: {
        primary: 'rgba(55, 65, 81, 0.5)',
        secondary: '#eee',
        box: '#8882',
        dark: {
          background: '#000000',
          text: 'rgba(229, 231, 235, 0.5)',
        }
      },
      scale: {
        '101': '1.01'
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
};
