import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        text: '#0C0000',
        primary: '#3F4AAB',
        headerBg: '#E5FCC8'
      },
      screens: {
        tablet: '970px'
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(88.53deg, #3F4AAB 23.87%, rgba(229, 252, 200, 0.6) 98.36%)'
      }
    }
  },
  plugins: []
};
export default config;
