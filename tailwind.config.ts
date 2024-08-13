import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(#ffffff11 1px, #000000 1px)"
      },
      boxShadow: {
        "glow-white": "0 0 10px #dec1e2, 0 0 10px #dec1e2, 0 0 40px #dec1e2",
        "glow-fuchsia": "0 0 5px #e856ff, 0 0 10px #e856ff, 0 0 40px #e856ff",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
export default config;
