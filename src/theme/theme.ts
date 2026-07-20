export const theme = {
  colors: {
    background: "#050816",
    surface: "#0B1120",
    card: "#111827",

    primary: "#76A7FF",
    primaryHover: "#8CB8FF",
    secondary: "#A6C8FF",

    text: "#F8FAFC",
    body: "#CBD5E1",
    muted: "#94A3B8",

    border: "rgba(255,255,255,0.08)",

    glass: "rgba(17,24,39,.45)",

    grid: "rgba(255,255,255,.03)",

    glow: "rgba(79,140,255,.35)",

    success: "#22C55E",
  },

  radius: {
    sm: "12px",
    md: "18px",
    lg: "24px",
    xl: "32px",
  },

  shadow: {
    glass: "0 20px 60px rgba(0,0,0,.45)",
    glow: "0 0 40px rgba(79,140,255,.25)",
  },

  fonts: {
    heading: "Space Grotesk",
    body: "Inter",
    mono: "JetBrains Mono",
  },

  animation: {
    fast: ".2s",
    normal: ".35s",
    slow: ".7s",
  },
};

export type Theme = typeof theme;