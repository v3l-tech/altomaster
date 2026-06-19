/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'am-orange': '#F97316',
        'am-orange-dark': '#EA580C',
        'am-black': '#0A0A0A',
        'am-card': '#1A1A1A',
        'am-separator': '#2D2D2D',
        'am-muted': '#9CA3AF',
        'am-off-white': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'slide-left': 'slideLeft 0.7s ease-out forwards',
        'ping-slow': 'ping 2.5s ease-in-out infinite',
        'timeline-fill': 'timelineFill 1.2s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'toast-in': 'toastIn 0.4s ease-out forwards',
        'toast-out': 'toastOut 0.3s ease-in forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        timelineFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        toastIn: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        toastOut: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
