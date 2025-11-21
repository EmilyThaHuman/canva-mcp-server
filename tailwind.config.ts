import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canva: {
          cyan: '#00C4CC',
          purple: '#7B68EE',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;

