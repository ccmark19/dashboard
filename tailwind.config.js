module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      greenDark: '#194536',
      greenRegular: '#349072',
      pink: '#BF334A',
      orange: '#C06351',
      purple: '#533490',
      blue: '#345390',
      grey: '#C7C9C7',
      green1: {
        100: '#D9F1E9',
        200: '#B2E3D3',
        300: '#8CD5BD',
        400: '#65C8A7',
        500: '#42B790',
        600: '#349072',
        700: '#266A53',
        800: '#194536',
        900: '#153B2E',
        1000: '#123328',
        1100: '#0F2A21',
        1200: '#0C221B',
        1300: '#091914',
        1400: '#06110D',
        1500: '#030807',
      },
      green2: {
        100: '#E2F5EE',
        200: '#C5EADE',
        300: '#A8E0CD',
        400: '#8BD5BC',
        500: '#6ECBAC',
        600: '#51C09B',
        700: '#3EAB87',
        800: '#349072',
        900: '#2D7D62',
        1000: '#276B54',
        1100: '#205946',
        1200: '#1A4738',
        1300: '#13352A',
        1400: '#0D241C',
        1500: '#06120E',
      },
      pink1: {
        100: '#F8E4E8',
        200: '#F1CAD0',
        300: '#EAAFB9',
        400: '#E394A1',
        500: '#DC7A8A',
        600: '#D45F72',
        700: '#CD445B',
        800: '#BF334A',
        900: '#A62C40',
        1000: '#8E2637',
        1100: '#761F2E',
        1200: '#5F1925',
        1300: '#47131C',
        1400: '#2F0D12',
        1500: '#180609',
      },
      orange1: {
        100: '#F7ECE9',
        200: '#EFD8D4',
        300: '#E8C5BE',
        400: '#E0B2A9',
        500: '#D89F93',
        600: '#D08B7E',
        700: '#C97868',
        800: '#C06351',
        900: '#B15340',
        1000: '#984737',
        1100: '#7F3B2E',
        1200: '#652F24',
        1300: '#4C231B',
        1400: '#331812',
        1500: '#190C09',
      },
      purple1: {
        100: '#E8E2F5',
        200: '#D1C5EA',
        300: '#BAA8E0',
        400: '#A48BD5',
        500: '#8D6ECB',
        600: '#7651C0',
        700: '#623EAB',
        800: '#533490',
        900: '#482D7D',
        1000: '#3D276B',
        1100: '#332059',
        1200: '#291A47',
        1300: '#1F1335',
        1400: '#140D24',
        1500: '#0A0612',
      },
      blue1: {
        100: '#E2E8F5',
        200: '#C5D1EA',
        300: '#A8BAE0',
        400: '#8BA4D5',
        500: '#6E8DCB',
        600: '#5176C0',
        700: '#3E62AB',
        800: '#345390',
        900: '#2D487D',
        1000: '#273D6B',
        1100: '#203359',
        1200: '#1A2947',
        1300: '#131F35',
        1400: '#0D1424',
        1500: '#060A12',
      },
      grey1: {
        100: '#F8F8F8',
        200: '#F1F1F1',
        300: '#EAEAEA',
        400: '#E2E4E2',
        500: '#DBDDDB',
        600: '#D4D6D4',
        700: '#CDCFCD',
        800: '#C7C9C7',
        900: '#ACB0AC',
        1000: '#939793',
        1100: '#7A7F7A',
        1200: '#616561',
        1300: '#494C49',
        1400: '#313331',
        1500: '#181918',
      },
    },
    extend: {
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeOut: {
          '0%': {backgroundColor: theme('colors.red.300')},
          '100%': {backgroundColor: theme('colors.transparent')},
        },
      }),
    },
  },
  plugins: [require('daisyui')],
};
