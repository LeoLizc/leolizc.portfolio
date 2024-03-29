/** @type {import('tailwindcss').Config} */
import animations from 'tailwindcss-animated';
import plugin from 'tailwindcss/plugin';

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-20': {
      transform: 'rotateY(20deg)',
    },
    '.rotate-y-50': {
      transform: 'rotateY(50deg)',
    },
    '.rotate-y-80': {
      transform: 'rotateY(80deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.-rotate-y-180': {
      transform: 'rotateY(-180deg)',
    },
  })
})

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'hilight-md': '0 0 4px 0 rgba(103, 232, 249, 0.8)',
      },
      dropShadow: {
        'hilight-md': '0 0 2px rgba(103, 232, 249, 0.8)',
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
        'background-shine-sp': 'background-shine 2.5s cubic-bezier(0.47, -0.02, 0.62, 0.99) .1s infinite both',
        'scroll-blur': 'scroll-blur linear both',
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '-20% 0',
          },
          '80%, 100%': {
            backgroundPosition: '-220% 0',
          },
        },
        'scroll-blur': {
          to: {
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.1)',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
          },
        },
      },
    },
  },
  plugins: [animations, rotateY],
}
