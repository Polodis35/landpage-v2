import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // OSMX marka paleti — KORUNDU
        bg: "#1a1b13",
        "bg-elevated": "#232520",
        surface: "#2a2c26",
        "surface-strong": "#3a3d36",
        olive: "#38501d",
        ebony: "#59584c",
        text: "#c7c1aa",
        accent: {
          DEFAULT: "#93c93c",
          bright: "#a8dc4f",
        },
        // pale oak ile sınırlandırılmış border
        border: {
          DEFAULT: "rgba(199,193,170,0.10)",
          strong: "rgba(199,193,170,0.22)",
          accent: "rgba(147,201,60,0.30)",
          "accent-strong": "rgba(147,201,60,0.55)",
        },
        muted: "rgba(199,193,170,0.62)",
        dim: "rgba(199,193,170,0.38)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Tip scale — disiplinli ve kasıtlı
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        mono: "0.15em",
        "mono-wide": "0.2em",
      },
      maxWidth: {
        prose: "65ch", // ~65-75 karakter aralığı
        "prose-wide": "75ch",
      },
      transitionTimingFunction: {
        "ease-out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.85)" },
        },
        draw: {
          from: { strokeDashoffset: "100%" },
          to: { strokeDashoffset: "0%" },
        },
      },
      animation: {
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;