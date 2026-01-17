/**
 * Example unicorn.config.js
 * Copy this file to your project root and customize as needed
 */

/** @type {import('@unicorn-ui/ui').UserConfig} */
module.exports = {
  colors: {
    // Customize your primary brand color
    primary: {
      DEFAULT: "#6366f1", // Indigo-500
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },

    // Customize secondary color
    secondary: {
      DEFAULT: "#8b5cf6", // Violet-500
    },

    // Customize your success, warning, error colors
    success: {
      DEFAULT: "#10b981",
      light: "#34d399",
      dark: "#059669",
    },
  },

  // Customize spacing scale
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  // Customize border radius
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  // Customize shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  },

  // Customize typography
  typography: {
    fontFamily: {
      sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
      mono: '"Fira Code", ui-monospace, monospace',
    },
  },

  // Customize transitions
  transitions: {
    duration: {
      fast: "100ms",
      normal: "200ms",
      slow: "400ms",
    },
  },
}
