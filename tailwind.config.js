/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#AF8954', // New gold color
          dark: '#2A2A2A',
        },
        hunter: {
          green: '#2A2A2A',
          brown: '#594031',
          tan: '#AF8954', // Updated to match
          sage: '#737C73',
        },
        gold: {
          light: '#C4A06C', // Lighter version
          DEFAULT: '#AF8954', // Base gold color
          dark: '#8E6D3F', // Darker version
        }
      },
      boxShadow: {
        'gold': '0 0 25px -5px rgba(175, 137, 84, 0.3)',
        'gold-lg': '0 0 50px -8px rgba(175, 137, 84, 0.4)',
        'gold-xl': '0 0 70px -15px rgba(175, 137, 84, 0.5)',
        'inner-gold': 'inset 0 0 30px rgba(175, 137, 84, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, rgba(42, 42, 42, 0.98) 0%, rgba(32, 32, 32, 0.98) 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C4A06C 0%, #AF8954 50%, #8E6D3F 100%)',
      },
      animation: {
        'shimmer': 'shimmer 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      letterSpacing: {
        'luxury': '0.25em',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'monkeys': ['Monkeys', 'sans-serif'],
      },
    },
  },
  plugins: [],
};