const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge:
    process.env.NODE_ENV === 'production'
      ? {
          enabled: true,
          content: ['./src/**/*.js'],
        }
      : false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
        hero: ['Poppins', 'Poppins',, ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'accent-1': '#333',
        'super-blue': '#2CD9FF',
        'super-orange': '#F29B4A',
        'super-yellow': '#F9CD31'
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
