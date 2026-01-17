export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@unicorn-ui/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-brand)",
        "brand-hover": "var(--color-brand-hover)",
        "brand-light": "var(--color-brand-light)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        border: "var(--color-border)",
        foreground: "var(--color-foreground)",
        "foreground-secondary": "var(--color-foreground-secondary)",
        "foreground-muted": "var(--color-foreground-muted)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
      },
      backdropBlur: {
        glass: "var(--glass-blur)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
}
