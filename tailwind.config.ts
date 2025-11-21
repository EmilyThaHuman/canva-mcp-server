import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
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

