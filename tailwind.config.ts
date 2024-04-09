import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'sm': {max:"1200px"},


      //1440
      // 'desktop':
      // => @media (min-width: 640px) { ... }
    },
    fontFamily: {
      'poppins': ['"poppins"', 'serif'] // Ensure fonts with spaces have " " surrounding it.

    },
    fontWeight: {
      100 : '100',
      700:"700"
    }

  },
  plugins: [],
};
export default config;
