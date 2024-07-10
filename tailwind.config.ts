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
        "rich-blue": {
          bg: "#0C0F23",
          bgDark: "#080D51",
          border: "#194EEF",
          lightLine:"#7BE5E1",
        },
        primary: {
          heading: "#EBFF00",
        },
      },
    },
  },
  plugins: [],
};
export default config;
