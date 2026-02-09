import * as React from "react"
import { useTheme } from "./use-theme"
import { useDesignStyle } from "./use-design-style"

export type ColorFormat = "hsl" | "rgb" | "hex"

export interface ThemeMode {
  light: {
    primary: string
    secondary: string
    accent: string
    muted: string
    destructive: string
    background: string
    foreground: string
    card: string
    border: string
    input: string
    ring: string
  }
  dark: {
    primary: string
    secondary: string
    accent: string
    muted: string
    destructive: string
    background: string
    foreground: string
    card: string
    border: string
    input: string
    ring: string
  }
}

export interface ColorPalette {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    muted: string
    destructive: string
    background: string
    foreground: string
    card: string
    border: string
    input: string
    ring: string
    radius: string
    chart: string[]
  }
}

export interface ThemePreset {
  id: string
  name: string
  description: string
  preview: string
  palette: ColorPalette
}

const DEFAULT_PRESETS: ThemePreset[] = [
  {
    id: "default",
    name: "Default",
    description: "A balanced theme for general use",
    preview: "linear-gradient(135deg, hsl(210 100% 50%) 0%, hsl(210 100% 50%) 100%)",
    palette: {
      name: "Default",
      colors: {
        primary: "hsl(210 100% 50%)",
        secondary: "hsl(210 30% 96%)",
        accent: "hsl(210 100% 50%)",
        muted: "hsl(210 15% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(210 20% 98%)",
        foreground: "hsl(210 50% 10%)",
        card: "hsl(210 20% 100%)",
        border: "hsl(210 15% 90%)",
        input: "hsl(210 20% 94%)",
        ring: "hsl(210 100% 50%)",
        radius: "0.5rem",
        chart: ["#3b82f6", "#f59e0b", "#eab308", "#22c55e", "#10b981"],
      },
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "A calm blue theme inspired by ocean colors",
    preview: "linear-gradient(135deg, #0077b6 0%, #00d9ff 100%)",
    palette: {
      name: "Ocean",
      colors: {
        primary: "hsl(201 100% 36%)",
        secondary: "hsl(196 100% 50%)",
        accent: "hsl(186 100% 50%)",
        muted: "hsl(210 15% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(210 20% 98%)",
        foreground: "hsl(210 50% 10%)",
        card: "hsl(210 20% 100%)",
        border: "hsl(210 15% 90%)",
        input: "hsl(210 20% 94%)",
        ring: "hsl(201 100% 36%)",
        radius: "0.5rem",
        chart: ["#0077b6", "#00d9ff", "#10b981", "#f59e0b", "#ef4444"],
      },
    },
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "A warm theme inspired by sunset colors",
    preview: "linear-gradient(135deg, hsl(38 92% 50%) 0%, hsl(0 84% 60%) 100%)",
    palette: {
      name: "Sunset",
      colors: {
        primary: "hsl(38 92% 50%)",
        secondary: "hsl(45 96% 56%)",
        accent: "hsl(45 96% 56%)",
        muted: "hsl(51 96% 90%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(48 96% 89%)",
        foreground: "hsl(215 28% 17%)",
        card: "hsl(48 100% 96%)",
        border: "hsl(45 96% 56%)",
        input: "hsl(215 28% 17%)",
        ring: "hsl(38 92% 50%)",
        radius: "0.5rem",
        chart: ["hsl(38 92% 50%)", "hsl(45 96% 56%)", "hsl(0 84% 60%)", "hsl(215 28% 17%)"],
      },
    },
  },
  {
    id: "forest",
    name: "Forest",
    description: "A natural green theme",
    preview: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    palette: {
      name: "Forest",
      colors: {
        primary: "hsl(142 76% 36%)",
        secondary: "hsl(142 70% 96%)",
        accent: "hsl(142 76% 36%)",
        muted: "hsl(142 20% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(142 30% 98%)",
        foreground: "hsl(142 50% 10%)",
        card: "hsl(142 30% 100%)",
        border: "hsl(142 20% 90%)",
        input: "hsl(142 25% 94%)",
        ring: "hsl(142 76% 36%)",
        radius: "0.5rem",
        chart: ["#10b981", "#34d399", "#059669", "#047857", "#065f46"],
      },
    },
  },
  {
    id: "lavender",
    name: "Lavender",
    description: "A soft purple theme",
    preview: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    palette: {
      name: "Lavender",
      colors: {
        primary: "hsl(262 83% 58%)",
        secondary: "hsl(262 70% 96%)",
        accent: "hsl(262 83% 58%)",
        muted: "hsl(262 20% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(262 30% 99%)",
        foreground: "hsl(262 50% 10%)",
        card: "hsl(262 30% 100%)",
        border: "hsl(262 20% 90%)",
        input: "hsl(262 25% 94%)",
        ring: "hsl(262 83% 58%)",
        radius: "0.75rem",
        chart: ["#8b5cf6", "#a78bfa", "#7c3aed", "#6d28d9", "#5b21b6"],
      },
    },
  },
  {
    id: "rose",
    name: "Rose",
    description: "A romantic pink theme",
    preview: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
    palette: {
      name: "Rose",
      colors: {
        primary: "hsl(343 87% 56%)",
        secondary: "hsl(343 70% 96%)",
        accent: "hsl(343 87% 56%)",
        muted: "hsl(343 20% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(343 30% 99%)",
        foreground: "hsl(343 50% 10%)",
        card: "hsl(343 30% 100%)",
        border: "hsl(343 20% 90%)",
        input: "hsl(343 25% 94%)",
        ring: "hsl(343 87% 56%)",
        radius: "1rem",
        chart: ["#f43f5e", "#fb7185", "#e11d48", "#be123c", "#9f1239"],
      },
    },
  },
  {
    id: "slate",
    name: "Slate",
    description: "A professional grey theme",
    preview: "linear-gradient(135deg, #64748b 0%, #475569 100%)",
    palette: {
      name: "Slate",
      colors: {
        primary: "hsl(215 25% 27%)",
        secondary: "hsl(215 25% 96%)",
        accent: "hsl(215 25% 27%)",
        muted: "hsl(215 20% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(215 20% 98%)",
        foreground: "hsl(215 25% 10%)",
        card: "hsl(215 20% 100%)",
        border: "hsl(215 15% 90%)",
        input: "hsl(215 20% 94%)",
        ring: "hsl(215 25% 27%)",
        radius: "0.25rem",
        chart: ["#64748b", "#94a3b8", "#475569", "#334155", "#1e293b"],
      },
    },
  },
  {
    id: "orange-pop",
    name: "Orange Pop",
    description: "A vibrant orange theme",
    preview: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    palette: {
      name: "Orange Pop",
      colors: {
        primary: "hsl(24.6 95% 53.1%)",
        secondary: "hsl(24.6 95% 95%)",
        accent: "hsl(24.6 95% 53.1%)",
        muted: "hsl(24.6 30% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(24.6 40% 98%)",
        foreground: "hsl(24.6 50% 10%)",
        card: "hsl(24.6 40% 100%)",
        border: "hsl(24.6 30% 90%)",
        input: "hsl(24.6 30% 94%)",
        ring: "hsl(24.6 95% 53.1%)",
        radius: "0.5rem",
        chart: ["#f97316", "#fb923c", "#ea580c", "#c2410c", "#9a3412"],
      },
    },
  },
  {
    id: "mint",
    name: "Mint",
    description: "A fresh minty theme",
    preview: "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)",
    palette: {
      name: "Mint",
      colors: {
        primary: "hsl(168 76% 36%)",
        secondary: "hsl(168 70% 96%)",
        accent: "hsl(168 76% 36%)",
        muted: "hsl(168 20% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(168 30% 98%)",
        foreground: "hsl(168 50% 10%)",
        card: "hsl(168 30% 100%)",
        border: "hsl(168 20% 90%)",
        input: "hsl(168 25% 94%)",
        ring: "hsl(168 76% 36%)",
        radius: "1rem",
        chart: ["#2dd4bf", "#5eead4", "#14b8a6", "#0d9488", "#115e59"],
      },
    },
  },
  {
    id: "indigo",
    name: "Indigo",
    description: "A deep indigo theme",
    preview: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
    palette: {
      name: "Indigo",
      colors: {
        primary: "hsl(243 75% 59%)",
        secondary: "hsl(243 70% 96%)",
        accent: "hsl(243 75% 59%)",
        muted: "hsl(243 20% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(243 30% 99%)",
        foreground: "hsl(243 50% 10%)",
        card: "hsl(243 30% 100%)",
        border: "hsl(243 20% 90%)",
        input: "hsl(243 25% 94%)",
        ring: "hsl(243 75% 59%)",
        radius: "0.5rem",
        chart: ["#6366f1", "#818cf8", "#4f46e5", "#4338ca", "#3730a3"],
      },
    },
  },
  {
    id: "monochrome",
    name: "Monochrome",
    description: "A high contrast black & white theme",
    preview: "linear-gradient(135deg, #000000 0%, #333333 100%)",
    palette: {
      name: "Monochrome",
      colors: {
        primary: "hsl(0 0% 0%)",
        secondary: "hsl(0 0% 90%)",
        accent: "hsl(0 0% 0%)",
        muted: "hsl(0 0% 96%)",
        destructive: "hsl(0 0% 40%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(0 0% 0%)",
        card: "hsl(0 0% 100%)",
        border: "hsl(0 0% 85%)",
        input: "hsl(0 0% 90%)",
        ring: "hsl(0 0% 0%)",
        radius: "0rem",
        chart: ["#000000", "#333333", "#666666", "#999999", "#cccccc"],
      },
    },
  },
  {
    id: "candy",
    name: "Candy",
    description: "A sweet pink and purple theme",
    preview: "linear-gradient(135deg, #ec4899 0%, #d946ef 100%)",
    palette: {
      name: "Candy",
      colors: {
        primary: "hsl(330 81% 60%)",
        secondary: "hsl(292 84% 95%)",
        accent: "hsl(330 81% 60%)",
        muted: "hsl(292 20% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(300 30% 99%)",
        foreground: "hsl(300 50% 10%)",
        card: "hsl(300 30% 100%)",
        border: "hsl(300 20% 90%)",
        input: "hsl(300 25% 94%)",
        ring: "hsl(330 81% 60%)",
        radius: "1.5rem",
        chart: ["#ec4899", "#f472b6", "#d946ef", "#c026d3", "#a21caf"],
      },
    },
  },
  {
    id: "coffee",
    name: "Coffee",
    description: "A warm earthy theme",
    preview: "linear-gradient(135deg, #78350f 0%, #451a03 100%)",
    palette: {
      name: "Coffee",
      colors: {
        primary: "hsl(25 76% 31%)",
        secondary: "hsl(25 40% 95%)",
        accent: "hsl(25 76% 31%)",
        muted: "hsl(25 20% 94%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(30 30% 98%)",
        foreground: "hsl(25 50% 10%)",
        card: "hsl(30 30% 100%)",
        border: "hsl(25 20% 85%)",
        input: "hsl(25 20% 90%)",
        ring: "hsl(25 76% 31%)",
        radius: "0.25rem",
        chart: ["#78350f", "#92400e", "#b45309", "#d97706", "#f59e0b"],
      },
    },
  },
  {
    id: "corporate",
    name: "Corporate",
    description: "A standard enterprise blue",
    preview: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
    palette: {
      name: "Corporate",
      colors: {
        primary: "hsl(222 47% 31%)",
        secondary: "hsl(222 40% 96%)",
        accent: "hsl(222 47% 31%)",
        muted: "hsl(222 20% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(222 30% 99%)",
        foreground: "hsl(222 50% 10%)",
        card: "hsl(222 30% 100%)",
        border: "hsl(222 20% 90%)",
        input: "hsl(222 25% 94%)",
        ring: "hsl(222 47% 31%)",
        radius: "0.375rem",
        chart: ["#1e3a8a", "#1e40af", "#1d4ed8", "#2563eb", "#3b82f6"],
      },
    },
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    description: "Neon yellow and futuristic",
    preview: "linear-gradient(135deg, #facc15 0%, #eab308 100%)",
    palette: {
      name: "Cyberpunk",
      colors: {
        primary: "hsl(48 96% 53%)",
        secondary: "hsl(48 96% 10%)",
        accent: "hsl(48 96% 53%)",
        muted: "hsl(48 20% 15%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(240 10% 3.9%)",
        foreground: "hsl(0 0% 98%)",
        card: "hsl(240 10% 10%)",
        border: "hsl(240 10% 20%)",
        input: "hsl(240 10% 20%)",
        ring: "hsl(48 96% 53%)",
        radius: "0",
        chart: ["#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e"],
      },
    },
  },
  {
    id: "retro",
    name: "Retro",
    description: "Warm beige and orange",
    preview: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    palette: {
      name: "Retro",
      colors: {
        primary: "hsl(32 95% 44%)",
        secondary: "hsl(42 30% 90%)",
        accent: "hsl(32 95% 44%)",
        muted: "hsl(42 20% 85%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(42 40% 96%)",
        foreground: "hsl(32 50% 10%)",
        card: "hsl(42 30% 98%)",
        border: "hsl(42 20% 80%)",
        input: "hsl(32 20% 90%)",
        ring: "hsl(32 95% 44%)",
        radius: "0.5rem",
        chart: ["#d97706", "#b45309", "#92400e", "#78350f", "#fff7ed"],
      },
    },
  },
  {
    id: "dracula",
    name: "Dracula",
    description: "A famous dark theme",
    preview: "linear-gradient(135deg, #bd93f9 0%, #ff79c6 100%)",
    palette: {
      name: "Dracula",
      colors: {
        primary: "hsl(265 89% 78%)",
        secondary: "hsl(326 100% 74%)",
        accent: "hsl(265 89% 78%)",
        muted: "hsl(232 14% 31%)",
        destructive: "hsl(0 100% 67%)",
        background: "hsl(231 15% 18%)",
        foreground: "hsl(60 30% 96%)",
        card: "hsl(231 15% 22%)",
        border: "hsl(232 14% 31%)",
        input: "hsl(232 14% 31%)",
        ring: "hsl(265 89% 78%)",
        radius: "0.5rem",
        chart: ["#bd93f9", "#ff79c6", "#8be9fd", "#50fa7b", "#ffb86c"],
      },
    },
  },
  {
    id: "nord",
    name: "Nord",
    description: "An arctic, north-bluish color palette",
    preview: "linear-gradient(135deg, #88c0d0 0%, #81a1c1 100%)",
    palette: {
      name: "Nord",
      colors: {
        primary: "hsl(193 43% 67%)",
        secondary: "hsl(213 32% 52%)",
        accent: "hsl(193 43% 67%)",
        muted: "hsl(220 16% 36%)",
        destructive: "hsl(354 42% 56%)",
        background: "hsl(220 16% 22%)",
        foreground: "hsl(218 27% 92%)",
        card: "hsl(220 16% 26%)",
        border: "hsl(220 16% 36%)",
        input: "hsl(220 16% 36%)",
        ring: "hsl(193 43% 67%)",
        radius: "0.25rem",
        chart: ["#88c0d0", "#81a1c1", "#5e81ac", "#bf616a", "#d08770"],
      },
    },
  },
]

const FONTS = [
  { name: "Inter", value: "var(--font-sans)" },
  { name: "Roboto", value: "'Roboto', sans-serif" },
  { name: "Outfit", value: "'Outfit', sans-serif" },
  { name: "Playfair Display", value: "'Playfair Display', serif" },
  { name: "JetBrains Mono", value: "'JetBrains Mono', monospace" }
]

export function useThemeGenerator() {
  const { setTheme: setGlobalTheme, theme: globalTheme } = useTheme()
  
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [activePreset, setActivePreset] = React.useState("default")
  const [customColors, setCustomColors] = React.useState<Partial<ColorPalette["colors"]>>({})
  const [isCustomTheme, setIsCustomTheme] = React.useState(false)
  const [designStyle, setDesignStyle] = React.useState<string | null>(null)

  const [colorFormat, setColorFormat] = React.useState<ColorFormat>("hsl")
  const [font, setFont] = React.useState("var(--font-sans)")

  const DEFAULT_DESIGN_STYLES = ["clay", "glass", "skeu", "minimal", "liquid-glass"]

  // --- Converters ---

  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100
    const a = s * Math.min(l, 1 - l) / 100
    const f = (n: number) => {
      const k = (n + h / 30) % 12
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
      return Math.round(255 * color).toString(16).padStart(2, '0')
    }
    return `#${f(0)}${f(8)}${f(4)}`
  }

  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100
    l /= 100
    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs((h / 60) % 2 - 1))
    const m = l - c / 2
    let r = 0, g = 0, b = 0

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x
    }
    return `${Math.round((r + m) * 255)} ${Math.round((g + m) * 255)} ${Math.round((b + m) * 255)}`
  }

  // Input: "h s% l%" string (CSS variable format) or HSL string
  // Output: Formatted string based on selected format
  const formatColor = (hslString: string, format: ColorFormat): string => {
    // Normalize to h,s,l
    const parts = hslString.replace(/hsl\(|\)|%|,/gi, " ").split(/\s+/).filter(Boolean).map(parseFloat)
    if (parts.length < 3) return hslString // Fallback

    const [h, s, l] = parts

    switch (format) {
      case "hex": return hslToHex(h, s, l)
      case "rgb": return hslToRgb(h, s, l)
      case "hsl": return `${h} ${s}% ${l}%`
    }
  }

  // --- Theme Logic ---

  const buildToken = (name: string, value: string) => {
    // Generate the CSS variable line based on the selected format
    // Note: Tailwind/shadcn convention often expects "h s% l%" for HSL variables to use with opacity modifier.
    // However, if user selects Hex/RGB, we might break the opacity convention unless we handle it carefully.
    // For specific requested "format choice", we will output exactly what they asked for in the copyable code,
    // but internally we MUST assume HSL (space separated) for the app runtime to work if it relies on `hsl(var(--primary))`
    // If the user selects Hex, we might output `--primary: #aabbcc;` but our tailwind config expects `<alpha-value>`.

    // To safe guard, we will return the display value for copy-paste use,
    // but the `css` generation logic for the *app preview* technically needs to stay compatible with existing Tailwind classes.
    // BUT the user specifically asked for "generated color use hsl it stil gnerate # code".
    // So we will support transforming the output text.

    // Convert current value (assumed HSL string from preset/picker) to requested format
    const formatted = formatColor(value, colorFormat)
    return `    --${name}: ${formatted};`
  }

  // Generate CSS for export
  const generateCSS = React.useCallback((palette: ColorPalette, dark = false) => {
    const names = [
      "primary", "secondary", "accent", "muted", "destructive",
      "background", "foreground", "card", "border", "input", "ring"
    ] as const

    const lines = names.map((n) => {
      const val = (palette.colors as any)[n]
      return buildToken(n, val)
    })

    // Add radius (not affected by color format)
    lines.push(`    --radius: ${palette.colors.radius};`)

    const start = dark ? "  .dark {\n" : "  :root {\n"
    const end = "  }\n"

    return start + lines.join("\n") + "\n" + end
  }, [colorFormat]) // buildToken depends on colorFormat, which is state

  const applyTheme = React.useCallback((palette: ColorPalette) => {
    const styleId = "dynamic-theme-css"
    const existingStyle = document.getElementById(styleId)
    if (existingStyle) existingStyle.remove()

    // For the LIVE preview in the app, we force HSL because the existing tailwind config likely expects it
    const tokenLine = (name: string, val: string) => `  --${name}: ${formatColor(val, 'hsl')};`

    const names = [
      "primary", "secondary", "accent", "muted", "destructive",
      "background", "foreground", "card", "border", "input", "ring"
    ] as const

    const lines = names.map(n => tokenLine(n, (palette.colors as any)[n]))
    lines.push(`  --radius: ${palette.colors.radius};`)

    // Font injection: We must override the variable AND the property to be safe
    const fontValue = font.includes("var") ? "Inter" : font
    lines.push(`  --font-sans: ${fontValue};`)

    // Determine selector based on global theme to ensure we override the correct scope
    const selector = globalTheme === "dark" ? ".dark" : ":root"

    const cssContent = `${selector} {\n${lines.join("\n")}\n}`

    const style = document.createElement("style")
    style.id = styleId
    style.textContent = cssContent
    document.head.appendChild(style)

    if (designStyle) {
      document.body.setAttribute("data-design-style", designStyle)
    }

    // Also set style on document element as a fallback/force
    if (!font.includes("var")) {
      document.documentElement.style.fontFamily = font
    } else {
      document.documentElement.style.removeProperty("font-family")
    }
  }, [font, globalTheme, designStyle]) // Dependencies

  const toggleDarkMode = React.useCallback((dark: boolean) => {
    setGlobalTheme(dark ? "dark" : "light")
  }, [setGlobalTheme])

  // Custom setter to expose
  const setFontFamily = React.useCallback((f: string) => {
    setFont(f)
    if (!f.includes("var")) {
      document.documentElement.style.fontFamily = f
    } else {
      document.documentElement.style.removeProperty("font-family")
    }
  }, [])

  const resetToPreset = React.useCallback((presetId: string) => {
    const preset = DEFAULT_PRESETS.find(p => p.id === presetId)
    if (preset) {
      setActivePreset(presetId)
      setIsCustomTheme(false)
      setCustomColors({})
    }
  }, [DEFAULT_PRESETS])

  const downloadTheme = React.useCallback((palette: ColorPalette, name: string) => {
    const css = generateCSS(palette, globalTheme === 'dark')
    const blob = new Blob([css], { type: "text/css" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${name.toLowerCase().replace(/\s+/g, "-")}-theme.css`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [generateCSS, globalTheme])

  const handleSetDesignStyle = React.useCallback((s: string | null) => {
    setDesignStyle(s)
    if (s) document.body.setAttribute("data-design-style", s)
    else document.body.removeAttribute("data-design-style")
  }, [])

  return {
    activePreset,
    customColors,
    isCustomTheme,
    isDarkMode: globalTheme === 'dark',
    isGenerating,
    colorFormat,
    font,
    FONTS,
    DEFAULT_PRESETS,
    DEFAULT_DESIGN_STYLES,
    generateCSS,
    applyTheme,
    downloadTheme,
    resetToPreset,
    toggleDarkMode,
    setCustomColors,
    setActivePreset,
    setIsCustomTheme,
    setIsGenerating,
    setColorFormat,
    setFont: setFontFamily,
    designStyle,
    setDesignStyle: handleSetDesignStyle
  }
}
