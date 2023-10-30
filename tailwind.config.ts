import type { Config } from 'tailwindcss'
import radixThemePlugin from "radix-ui-themes-with-tailwind";

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
        dark: {
          primary: "#0A0A0A",
          secondary: "#161616",
        }
      }
    },
  },
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true,
      useTailwindRadiusNames: true,
      mapMissingTailwindColors: true,
    }),
  ],
}
export default config
