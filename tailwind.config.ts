import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    },
  },
  plugins: [],
};
export default config;
