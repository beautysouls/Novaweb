import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          bg: "#05060f",
          surface: "#0b0d1a",
          blue: "#3b82f6",
          indigo: "#6366f1",
          purple: "#8b5cf6",
          violet: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
      },
      backgroundImage: {
        "nova-gradient":
          "linear-gradient(135deg, #3b82f6 0%, #6366f1 45%, #a855f7 100%)",
        "nova-radial":
          "radial-gradient(1200px circle at 50% -10%, rgba(99,102,241,0.25), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99, 102, 241, 0.55)",
        "glow-lg": "0 0 80px -20px rgba(139, 92, 246, 0.6)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        shimmer: "shimmer 6s ease infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
