// import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

// const config: Config = {
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: {
          DEFAULT: "#e9e9e9",
          100: "#2e2e2e",
          200: "#5d5d5d",
          300: "#8b8b8b",
          400: "#bababa",
          500: "#e9e9e9",
          600: "#ededed",
          700: "#f1f1f1",
          800: "#f6f6f6",
          900: "#fafafa",
        },
        platinum: {
          DEFAULT: "#d3d5d7",
          100: "#292b2d",
          200: "#51565a",
          300: "#7a8187",
          400: "#a7abb0",
          500: "#d3d5d7",
          600: "#dddee0",
          700: "#e5e7e8",
          800: "#eeefef",
          900: "#f6f7f7",
        },
        gray: {
          DEFAULT: "#7e7673",
          100: "#191717",
          200: "#322f2e",
          300: "#4c4644",
          400: "#655e5b",
          500: "#7e7673",
          600: "#98908d",
          700: "#b2acaa",
          800: "#ccc8c6",
          900: "#e5e3e3",
        },
        gunmetal: {
          DEFAULT: "#17222c",
          100: "#050709",
          200: "#090d11",
          300: "#0e141a",
          400: "#121b23",
          500: "#17222c",
          600: "#354e66",
          700: "#547ba0",
          800: "#8ba7c2",
          900: "#c5d3e0",
        },
        night: {
          DEFAULT: "#111111",
          100: "#040404",
          200: "#070707",
          300: "#0b0b0b",
          400: "#0e0e0e",
          500: "#111111",
          600: "#414141",
          700: "#717171",
          800: "#a0a0a0",
          900: "#d0d0d0",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "services-bg": "url('/img/keysBG.png')",
      },
    },
  },
  plugins: [],
});
// export default config;
