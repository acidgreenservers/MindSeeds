/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#09090a',
        surface: '#0f0f11',
        border: '#1a1a1e',
        ink: {
          DEFAULT: '#e8e6e0',
          mid: '#c8c4bc',
          dim: '#8a8880',
        },
        cogni: {
          DEFAULT: '#c8a96e',
          dim: '#7a6540',
          bg: 'rgba(200,169,110,0.06)',
        },
        lingua: {
          DEFAULT: '#6eb5a0',
          dim: '#3a6458',
          bg: 'rgba(110,181,160,0.06)',
        },
        arch: {
          DEFAULT: '#8b6fd4',
          dim: '#4a3878',
          bg: 'rgba(139,111,212,0.06)',
        },
        failure: {
          DEFAULT: '#e05a5a',
          bg: 'rgba(224,90,90,0.08)',
          border: 'rgba(224,90,90,0.2)',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.2em',
        wide: '0.12em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'toast-fade': 'toastFade 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        toastFade: {
          '0%': { opacity: '0', transform: 'translate(-50%, 5px)' },
          '15%': { opacity: '1', transform: 'translate(-50%, -5px)' },
          '80%': { opacity: '1', transform: 'translate(-50%, -5px)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -15px)' },
        },
      },
    },
  },
  plugins: [],
}
