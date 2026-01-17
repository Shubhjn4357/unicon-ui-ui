/**
 * Themed Demo Example
 * Showcases UnicornProvider with multiple custom theme configurations
 */

"use client"

import { Badge, Button, Input, UnicornProvider } from "@unicorn-ui/ui"
import type { UserConfig } from "@unicorn-ui/ui"
import { Palette, Sparkles, Zap } from "lucide-react"

// Corporate Professional Theme
const corporateTheme: UserConfig = {
  colors: {
    primary: {
      DEFAULT: "#1e40af", // Blue-800
      50: "#eff6ff",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      900: "#1e3a8a",
    },
    success: { DEFAULT: "#059669" },
    error: { DEFAULT: "#dc2626" },
  },
  radius: {
    md: "0.375rem", // Professional, subtle rounding
  },
  shadows: {
    md: "0 2px 4px 0 rgb(0 0 0 / 0.08)",
  },
}

// Vibrant E-commerce Theme
const ecommerceTheme: UserConfig = {
  colors: {
    primary: {
      DEFAULT: "#ec4899", // Pink-500
      50: "#fdf2f8",
      500: "#ec4899",
      600: "#db2777",
    },
    accent: {
      DEFAULT: "#8b5cf6", // Purple-500
    },
    warning: { DEFAULT: "#f59e0b" },
  },
  radius: {
    md: "0.75rem", // Bold, friendly curves
    lg: "1rem",
  },
  transitions: {
    duration: {
      fast: "100ms",
      normal: "200ms",
    },
  },
}

// Accessibility-Focused Theme (WCAG AAA)
const accessibleTheme: UserConfig = {
  colors: {
    primary: {
      DEFAULT: "#0369a1", // High contrast blue
    },
    success: { DEFAULT: "#047857" },
    error: { DEFAULT: "#b91c1c" },
  },
  spacing: {
    md: "1.25rem", // Larger touch targets
    lg: "1.75rem",
  },
}

function ThemeShowcase({
  title,
  theme,
  icon: Icon,
}: {
  title: string
  theme: UserConfig
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <UnicornProvider config={theme}>
      <div className="rounded-xl border border-border bg-surface p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Icon className="h-5 w-5 text-brand" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Button>Primary Button</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>

          <Input placeholder="Input field example" />
        </div>

        <div className="text-xs text-foreground-secondary mt-4 pt-4 border-t border-border">
          <p>Primary: {theme.colors?.primary?.DEFAULT}</p>
          <p>Radius: {theme.radius?.md}</p>
        </div>
      </div>
    </UnicornProvider>
  )
}

export default function ThemedDemo() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Theme Customization Demo</h1>
          <p className="text-lg text-foreground-secondary">
            See how UnicornProvider transforms the same components with different configs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ThemeShowcase title="Corporate Professional" theme={corporateTheme} icon={Palette} />
          <ThemeShowcase title="Vibrant E-commerce" theme={ecommerceTheme} icon={Sparkles} />
          <ThemeShowcase title="Accessibility First" theme={accessibleTheme} icon={Zap} />
        </div>

        <div className="rounded-lg border border-brand/20 bg-brand/5 p-6 mt-8">
          <h3 className="text-lg font-semibold mb-3">💡 How It Works</h3>
          <ul className="space-y-2 text-sm text-foreground-secondary">
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Each section is wrapped in a separate UnicornProvider with custom config</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Components automatically use the provided theme values</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>No component code changes needed - pure CSS variable magic ✨</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
