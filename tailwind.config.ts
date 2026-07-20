import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        background: "#050816",
        surface: "#0B1120",

        card: "#111827",

        primary: "#76A7FF",
        secondary: "#A6C8FF",

        body: "#CBD5E1",

        muted: "#94A3B8",

      },

      fontFamily: {
        heading: ["Space Grotesk"],
        body: ["Inter"],
        mono: ["JetBrains Mono"],
      },

      boxShadow: {

        glass: "0 20px 60px rgba(0,0,0,.45)",

        glow: "0 0 40px rgba(79,140,255,.25)",

      },

    },
  },

  plugins: [],
} satisfies Config;