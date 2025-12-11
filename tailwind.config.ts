import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb"
      },
      borderRadius: {
        DEFAULT: "0.75rem"
      }
    }
  },
  plugins: []
};
export default config;


