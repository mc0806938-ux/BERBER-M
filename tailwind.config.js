/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#f1f7f4',
          100: '#dcebe3',
          200: '#b9d7c7',
          300: '#8fbfa6',
          400: '#5f9f7f',
          500: '#3f8062',
          600: '#2d6649',
          700: '#22503a',
          800: '#183b2b',
          900: '#0f2e21',
          950: '#081c14',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 46, 33, 0.06), 0 8px 24px -8px rgba(15, 46, 33, 0.12)',
      },
    },
  },
  plugins: [],
};
