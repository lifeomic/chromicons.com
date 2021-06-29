const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  // https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.js'],
  },
  theme: {
    extend: {
      boxShadow: {
        'dark-mode-outline': '0 0 0 3px rgba(255, 255, 225, 0.95)',
        banner: '0px 4px 40px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'accent-1': '#333',
        'super-blue': '#2CD9FF',
        'super-orange': '#F29B4A',
        'super-yellow': '#F9CD31',
        orange: colors.orange,
        teal: colors.teal,
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
        hero: ['Poppins', 'Poppins', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        limit: '80rem',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
    },
  },
  variants: {
    boxShadow: ['focus', 'hover', 'focus-visible'],
    opacity: ['focus', 'hover', 'group-hover'],
    outline: ['focus', 'hover', 'focus-visible'],
    textDecoration: ['focus', 'hover', 'focus-visible'],
  },
  plugins: [],
};
