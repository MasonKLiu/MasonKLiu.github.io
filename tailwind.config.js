/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Noto Sans TC"', "system-ui", "sans-serif"],
        sans: ['"Noto Sans TC"', '"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "ui-monospace", "monospace"],
      },
      colors: {
        void: "#040814",
        abyss: "#070E20",
        panel: "#0B152C",
        elevated: "#112042",
        line: "#1A2E57",
        cyber: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#00D4FF",
          600: "#0284C7",
        },
        cobalt: {
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#1E3A8A",
        },
        ice: {
          50: "#F0F6FF",
          200: "#C8DBF5",
          400: "#8BA3C7",
          600: "#587299",
        },
      },
      backgroundImage: {
        "cyber-radial":
          "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(0, 212, 255, 0.18) 0%, rgba(37, 99, 235, 0.10) 45%, rgba(4, 8, 20, 0) 78%)",
        "blueprint-grid":
          "linear-gradient(to right, rgba(37, 99, 235, 0.11) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.11) 1px, transparent 1px)",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "15%": { opacity: "0.7" },
          "85%": { opacity: "0.7" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "pulse-node": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 212, 255, 0.55)" },
          "50%": { boxShadow: "0 0 0 8px rgba(0, 212, 255, 0)" },
        },
      },
      animation: {
        shine: "shine var(--duration, 12s) infinite linear",
        "scan-line": "scan-line 9s linear infinite",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
