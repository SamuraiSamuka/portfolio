import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "cinza-100": "#f5f3f0",
        "cinza-200": "#EDEBE8",
        "cinza-300": "#CDCBCB",
        "cinza-400": "#a1a1a1",
        "cinza-600": "#494949",
        "cinza-700": "#434040",
        "cinza-750": "#5a5a5ad5",
        "cinza-800": "#232121",
        "cinza-900": "#171717",

        transparente: "#00000000",
      },
    },
  },
  plugins: [],
};
export default config;
