/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        background: 'hsl(180 45% 97%)',
        foreground: 'hsl(184 42% 12%)',
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(184 42% 12%)',
        },
        primary: {
          DEFAULT: 'hsl(178 76% 34%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(181 36% 91%)',
          foreground: 'hsl(184 42% 12%)',
        },
        muted: {
          DEFAULT: 'hsl(181 30% 92%)',
          foreground: 'hsl(185 18% 38%)',
        },
        accent: {
          DEFAULT: 'hsl(169 68% 43%)',
          foreground: 'hsl(0 0% 100%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 72% 50%)',
          foreground: 'hsl(0 0% 100%)',
        },
        border: 'hsl(181 28% 86%)',
        ring: 'hsl(178 76% 34%)',
      },
      boxShadow: {
        soft: '0 2px 8px -2px hsl(184 42% 12% / 0.08)',
        medium: '0 8px 24px -4px hsl(184 42% 12% / 0.12)',
        large: '0 16px 48px -8px hsl(184 42% 12% / 0.16)',
      },
      keyframes: {
        'live-count-pop': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'live-count-pop': 'live-count-pop 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
      screens: {
        xs: '380px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins:,
};
