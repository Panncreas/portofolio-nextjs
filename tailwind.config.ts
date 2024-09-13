import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '330px', 'max': '630px'},
      'md': {'min': '640px', 'max': '1023px'},
      'lg': {'min': '1050px', 'max': '1279px'},
      'xl': {'min': '1300px', 'max': '1440px'},

    },
    extend: {
      backgroundImage: {
        "home" : "url(/home.avif)"
       },
      dropShadow:{
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        kumar: ['Kumar One', 'serif'],
        playfair: ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
};
export default config;
