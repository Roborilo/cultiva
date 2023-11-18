import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'cultiva-black': '#141414',
        'cultiva-main': '#242424',
        'dropdown-menu-dark': '#202020',
      },
      textColor: {
        'cultiva-color': '#42FF00',
      },
    },
  },
  plugins: [
    require('tailwindcss-radix'),
  ],
}
export default config
