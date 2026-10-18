export const tokens = {
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    muted: {
      light: "rgba(0,0,0,0.06)",
      dark: "rgba(255,255,255,0.08)",
    },
    border: {
      light: "rgba(0,0,0,0.08)",
      dark: "rgba(255,255,255,0.145)",
    },
    hover: {
      dark: "#383838",
      light: "#cccccc",
      subtle: "rgba(0,0,0,0.04)",
      subtleDark: "#1a1a1a",
    },
    accent: "#FF6B00",
    zinc: {
      50: "#fafafa",
      400: "#a1a1aa",
      600: "#52525b",
      950: "#09090b",
    },
  },
  fonts: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
    sfPro: "'SF Pro', system-ui, sans-serif",
    sfProRounded: "'SF Pro Rounded', system-ui, sans-serif",
    sfMono: "'SF Mono', monospace",
  },
  fontSizes: {
    sm: "0.9em",
    base: "1rem",
    lg: "1.125rem",
    "3xl": "1.875rem",
  },
  lineHeights: {
    base: "2rem",
    relaxed: "2.5rem",
  },
  spacing: {
    px16: "1rem",
    py32: "2rem",
  },
  radii: {
    sm: "0.25rem",
    full: "9999px",
  },
  sizes: {
    button: {
      height: "3rem",
      width: "158px",
      paddingY: "0.55rem",
      paddingX: "1.2rem",
    },
    iconBtn: {
      paddingY: "0.55rem",
      paddingX: "0.7rem",
    },
    logo: {
      width: "100px",
      height: "20px",
    },
    maxContent: "48rem",
    navbar: {
      height: "60px",
      paddingX: "2.2rem",
      paddingXMobile: "1.2rem",
    },
  },
} as const;

export type Tokens = typeof tokens;
