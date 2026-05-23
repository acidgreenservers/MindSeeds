/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          mid: 'rgb(var(--ink-mid) / <alpha-value>)',
          dim: 'rgb(var(--ink-dim) / <alpha-value>)',
        },
        cogni: {
          DEFAULT: 'rgb(var(--cogni) / <alpha-value>)',
          dim: 'rgb(var(--cogni-dim) / <alpha-value>)',
          bg: 'rgb(var(--cogni) / 0.06)',
        },
        lingua: {
          DEFAULT: 'rgb(var(--lingua) / <alpha-value>)',
          dim: 'rgb(var(--lingua-dim) / <alpha-value>)',
          bg: 'rgb(var(--lingua) / 0.06)',
        },
        arch: {
          DEFAULT: 'rgb(var(--arch) / <alpha-value>)',
          dim: 'rgb(var(--arch-dim) / <alpha-value>)',
          bg: 'rgb(var(--arch) / 0.06)',
        },
        failure: {
          DEFAULT: 'rgb(var(--failure) / <alpha-value>)',
          bg: 'rgb(var(--failure) / 0.08)',
          border: 'rgb(var(--failure) / 0.2)',
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
