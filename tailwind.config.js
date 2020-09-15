const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      colors: {
        'accent-1': '#333',
        'super-blue': '#2CD9FF',
        'super-orange': '#F29B4A',
      },
    },
  },
  variants: {
    outline: ['focus', 'hover', 'focus-visible'],
    boxShadow: ['focus', 'hover', 'focus-visible'],
    textDecoration: ['focus', 'hover', 'focus-visible'],
  },
  plugins: [],
};
