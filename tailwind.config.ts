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
        "navbar-gradient": 'linear-gradient(180deg, #ffffff 0%, #e2edff 100%)',
      },
      colors: {
        hover: '#ffcccc',
        black: '#000000',
        white: '#ffffff',
        primary:"rgb(239 68 68)"
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      perspective: {
        '2000': '2000px',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  plugins: [],
};
export default config;
