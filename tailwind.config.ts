import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#F5F0E8",
        gold: {
          primary: "#C9A84C",
          light: "#F0D080",
          muted: "#8a7a5a"
        },
        accent: "#1a1a1a"
      }
    }
  },
  plugins: []
};

export default config;
