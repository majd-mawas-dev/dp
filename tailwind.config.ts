import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        gold: "#C6A15B",
        ivory: "#F5F1E8",
        muted: "#999999",
        panel: "#101010",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.14em",
      },
      boxShadow: {
        "gold-line": "0 0 0 1px rgba(198, 161, 91, 0.35)",
        "soft-black": "0 30px 80px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "fine-grid":
          "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
