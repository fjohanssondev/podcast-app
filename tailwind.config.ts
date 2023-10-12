import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.stories.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(230, 30%, 15%)'
      }
    },
  },
  plugins: [],
}
export default config
