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
        purple: '#633CFF',
        purpleHover: '#BEADFF',
        lightPurple: '#EFEBFF',
        darkGrey: '#333333',
        grey: '#737373',
        border: '#D9D9D9',
        lightGrey: '#FAFAFA',
        white: '#FFFFFF',
        red: '#FF3939'
      }
    }
  },
  plugins: []
};
export default config;
