// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},

    colors: {
      primary: {
        DEFAULT: '#1E1F1F',
        light: '#282929',
        lighter: '#323434',
      },

      secondary: '#EAEBEB',
      tertiary: '#B1FBD7',
    },

    container: {
      center: true,

      padding: {
        DEFAULT: '2rem',
        md: '4rem',
        lg: '6rem',
        xl: '8rem',
      },
    },

    fontFamily: {
      'heading': ['Raleway', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
  },

  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
  ],
};
