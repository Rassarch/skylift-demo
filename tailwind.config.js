/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        sk: {
          bg:       '#0e0e0d',
          bg2:      '#161614',
          bg3:      '#1e1e1b',
          bg4:      '#252522',
          orange:   '#E8571A',
          orangeDim:'#c04810',
          orangePale:'#ff7a3d',
          concrete: '#8a8880',
          light:    '#d6d4ce',
          white:    '#f0ede8',
          border:   'rgba(255,255,255,0.07)',
          border2:  'rgba(255,255,255,0.12)',
        }
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(232,87,26,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(232,87,26,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '52px 52px',
      },
      animation: {
        'ticker': 'ticker 25s linear infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'pulse-orange': 'pulseOrange 4s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        pulseOrange: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.35' },
        }
      }
    },
  },
  plugins: [],
}
