/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-beige': '#FBE4D8',
        'rose-tint': '#DFB6B2',
        'dusty-mauve': '#854F6C',
        'plum': '#522B5B',
        'deep-violet': '#2B124C',
        'midnight': '#190019',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(43,18,76,0.12)',
        'card-hover': '0 8px 32px rgba(43,18,76,0.16)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};