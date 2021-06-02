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
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
        hero: ['Comfortaa', 'Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'accent-1': '#333',
        'super-blue': '#2CD9FF',
        'super-orange': '#F29B4A',
        orange: colors.orange,
        teal: colors.teal,
      },
      maxWidth: {
        limit: '80rem',
      },
      boxShadow: {
        'dark-mode-outline': '0 0 0 3px rgba(255, 255, 225, 0.95)',
        banner: '0px 4px 40px rgba(0, 0, 0, 0.05)',
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
