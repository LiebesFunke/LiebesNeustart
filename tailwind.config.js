Ctrl+A → Delete → вставить → Ctrl+S

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:,
        serif:,
      },
      colors: {
        background: 'hsl(180 40% 97%)',
        foreground: 'hsl(180 30% 12%)',
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(180 30% 12%)',
        },
        primary: {
          DEFAULT: 'hsl(180 75% 32%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(180 30% 92%)',
          foreground: 'hsl(180 30% 12%)',
        },
        muted: {
          DEFAULT: 'hsl(180 25% 93%)',
          foreground: 'hsl(180 15% 38%)',
        },
        accent: {
          DEFAULT: 'hsl(170 60% 42%)',
          foreground: 'hsl(0 0% 100%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 72% 50%)',
          foreground: 'hsl(0 0% 100%)',
        },
        border: 'hsl(180 25% 88%)',
        ring: 'hsl(180 75% 32%)',
      },
      boxShadow: {
        soft: '0 2px 8px -2px hsl(180 30% 12% / 0.08)',
        medium: '0 8px 24px -4px hsl(180 30% 12% / 0.12)',
        large: '0 16px 48px -8px hsl(180 30% 12% / 0.16)',
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
