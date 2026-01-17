"use client"

import { type PropItem, PropsTable } from "@/components/docs/shared/props-table"
import { Badge, BlurFade, UnicornProvider } from "@unicorn-ui/ui"
import type { UserConfig } from "@unicorn-ui/ui"
import { Check, Copy, Palette } from "lucide-react"
import { useState } from "react"

const tailwindColors = [
  {
    name: "slate",
    value: "#64748b",
    shades: [
      "#f8fafc",
      "#f1f5f9",
      "#e2e8f0",
      "#cbd5e1",
      "#94a3b8",
      "#64748b",
      "#475569",
      "#334155",
      "#1e293b",
      "#0f172a",
    ],
  },
  {
    name: "gray",
    value: "#6b7280",
    shades: [
      "#f9fafb",
      "#f3f4f6",
      "#e5e7eb",
      "#d1d5db",
      "#9ca3af",
      "#6b7280",
      "#4b5563",
      "#374151",
      "#1f2937",
      "#111827",
    ],
  },
  {
    name: "red",
    value: "#ef4444",
    shades: [
      "#fef2f2",
      "#fee2e2",
      "#fecaca",
      "#fca5a5",
      "#f87171",
      "#ef4444",
      "#dc2626",
      "#b91c1c",
      "#991b1b",
      "#7f1d1d",
    ],
  },
  {
    name: "orange",
    value: "#f97316",
    shades: [
      "#fff7ed",
      "#ffedd5",
      "#fed7aa",
      "#fdba74",
      "#fb923c",
      "#f97316",
      "#ea580c",
      "#c2410c",
      "#9a3412",
      "#7c2d12",
    ],
  },
  {
    name: "amber",
    value: "#f59e0b",
    shades: [
      "#fffbeb",
      "#fef3c7",
      "#fde68a",
      "#fcd34d",
      "#fbbf24",
      "#f59e0b",
      "#d97706",
      "#b45309",
      "#92400e",
      "#78350f",
    ],
  },
  {
    name: "yellow",
    value: "#eab308",
    shades: [
      "#fefce8",
      "#fef9c3",
      "#fef08a",
      "#fde047",
      "#facc15",
      "#eab308",
      "#ca8a04",
      "#a16207",
      "#854d0e",
      "#713f12",
    ],
  },
  {
    name: "lime",
    value: "#84cc16",
    shades: [
      "#f7fee7",
      "#ecfccb",
      "#d9f99d",
      "#bef264",
      "#a3e635",
      "#84cc16",
      "#65a30d",
      "#4d7c0f",
      "#3f6212",
      "#365314",
    ],
  },
  {
    name: "green",
    value: "#22c55e",
    shades: [
      "#f0fdf4",
      "#dcfce7",
      "#bbf7d0",
      "#86efac",
      "#4ade80",
      "#22c55e",
      "#16a34a",
      "#15803d",
      "#166534",
      "#14532d",
    ],
  },
  {
    name: "emerald",
    value: "#10b981",
    shades: [
      "#ecfdf5",
      "#d1fae5",
      "#a7f3d0",
      "#6ee7b7",
      "#34d399",
      "#10b981",
      "#059669",
      "#047857",
      "#065f46",
      "#064e3b",
    ],
  },
  {
    name: "teal",
    value: "#14b8a6",
    shades: [
      "#f0fdfa",
      "#ccfbf1",
      "#99f6e4",
      "#5eead4",
      "#2dd4bf",
      "#14b8a6",
      "#0d9488",
      "#0f766e",
      "#115e59",
      "#134e4a",
    ],
  },
  {
    name: "cyan",
    value: "#06b6d4",
    shades: [
      "#ecfeff",
      "#cffafe",
      "#a5f3fc",
      "#67e8f9",
      "#22d3ee",
      "#06b6d4",
      "#0891b2",
      "#0e7490",
      "#155e75",
      "#164e63",
    ],
  },
  {
    name: "sky",
    value: "#0ea5e9",
    shades: [
      "#f0f9ff",
      "#e0f2fe",
      "#bae6fd",
      "#7dd3fc",
      "#38bdf8",
      "#0ea5e9",
      "#0284c7",
      "#0369a1",
      "#075985",
      "#0c4a6e",
    ],
  },
  {
    name: "blue",
    value: "#3b82f6",
    shades: [
      "#eff6ff",
      "#dbeafe",
      "#bfdbfe",
      "#93c5fd",
      "#60a5fa",
      "#3b82f6",
      "#2563eb",
      "#1d4ed8",
      "#1e40af",
      "#1e3a8a",
    ],
  },
  {
    name: "indigo",
    value: "#6366f1",
    shades: [
      "#eef2ff",
      "#e0e7ff",
      "#c7d2fe",
      "#a5b4fc",
      "#818cf8",
      "#6366f1",
      "#4f46e5",
      "#4338ca",
      "#3730a3",
      "#312e81",
    ],
  },
  {
    name: "violet",
    value: "#8b5cf6",
    shades: [
      "#f5f3ff",
      "#ede9fe",
      "#ddd6fe",
      "#c4b5fd",
      "#a78bfa",
      "#8b5cf6",
      "#7c3aed",
      "#6d28d9",
      "#5b21b6",
      "#4c1d95",
    ],
  },
  {
    name: "purple",
    value: "#a855f7",
    shades: [
      "#faf5ff",
      "#f3e8ff",
      "#e9d5ff",
      "#d8b4fe",
      "#c084fc",
      "#a855f7",
      "#9333ea",
      "#7e22ce",
      "#6b21a8",
      "#581c87",
    ],
  },
  {
    name: "fuchsia",
    value: "#d946ef",
    shades: [
      "#fdf4ff",
      "#fae8ff",
      "#f5d0fe",
      "#f0abfc",
      "#e879f9",
      "#d946ef",
      "#c026d3",
      "#a21caf",
      "#86198f",
      "#701a75",
    ],
  },
  {
    name: "pink",
    value: "#ec4899",
    shades: [
      "#fdf2f8",
      "#fce7f3",
      "#fbcfe8",
      "#f9a8d4",
      "#f472b6",
      "#ec4899",
      "#db2777",
      "#be185d",
      "#9d174d",
      "#831843",
    ],
  },
  {
    name: "rose",
    value: "#f43f5e",
    shades: [
      "#fff1f2",
      "#ffe4e6",
      "#fecdd3",
      "#fda4af",
      "#fb7185",
      "#f43f5e",
      "#e11d48",
      "#be123c",
      "#9f1239",
      "#881337",
    ],
  },
]

function CodeBlock({ code, language = "javascript" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border border-border bg-surface overflow-hidden my-4">
      <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2">
        <span className="text-xs font-medium text-foreground-secondary">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors hover:bg-surface"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

export default function ConfigurationPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <BlurFade delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 id="overview" className="text-4xl font-bold tracking-tight md:text-5xl">
              Configuration
            </h1>
            <Badge>Customization</Badge>
          </div>
          <p className="text-lg text-foreground-secondary">
            Customize every aspect of Unicorn UI with a powerful theming system. Define your brand
            colors, spacing, typography, and more in one central config file.
          </p>
        </div>
      </BlurFade>

      {/* Quick Start */}
      <BlurFade delay={0.2}>
        <div className="space-y-4">
          <h2 id="quick-start" className="text-2xl font-bold tracking-tight">
            Quick Start
          </h2>

          <div className="space-y-4">
            <h3 id="step-1" className="text-xl font-semibold">
              1. Create Config File
            </h3>
            <p className="text-foreground-secondary">
              Create a{" "}
              <code className="px-2 py-1 rounded bg-surface-elevated text-sm">
                unicorn.config.js
              </code>{" "}
              file in your project root:
            </p>
            <CodeBlock
              code={`/** @type {import('@unicorn-ui/ui').UserConfig} */
module.exports = {
  colors: {
    primary: {
      DEFAULT: '#6366f1', // Your brand color
    },
  },
  radius: {
    md: '0.5rem', // Default border radius
  },
}`}
            />
          </div>

          <div className="space-y-4">
            <h3 id="step-2" className="text-xl font-semibold">
              2. Wrap Your App
            </h3>
            <p className="text-foreground-secondary">
              Import your config and wrap your app with{" "}
              <code className="px-2 py-1 rounded bg-surface-elevated text-sm">UnicornProvider</code>
              :
            </p>
            <CodeBlock
              language="tsx"
              code={`import { UnicornProvider } from '@unicorn-ui/ui'
import config from './unicorn.config'

export default function App() {
  return (
    <UnicornProvider config={config}>
      {/* Your app */}
    </UnicornProvider>
  )
}`}
            />
          </div>
        </div>
      </BlurFade>

      {/* Available Options */}
      <BlurFade delay={0.3}>
        <div className="space-y-6">
          <h2 id="options" className="text-2xl font-bold tracking-tight">
            Configuration Options
          </h2>

          {/* Colors */}
          <div className="space-y-4">
            <h3 id="colors" className="text-xl font-semibold flex items-center gap-2">
              <Palette className="h-5 w-5 text-brand" />
              Colors
            </h3>
            <p className="text-foreground-secondary">
              Define your color palette with full Tailwind-style color scales:
            </p>
            <CodeBlock
              code={`colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... 200-900
    DEFAULT: '#3b82f6', // Used as primary color
  },
  secondary: {
    DEFAULT: '#64748b',
  },
  success: {
    DEFAULT: '#10b981',
    light: '#34d399',
    dark: '#059669',
  },
  warning: { DEFAULT: '#f59e0b' },
  error: { DEFAULT: '#ef4444' },
  info: { DEFAULT: '#3b82f6' },
}`}
            />
          </div>

          {/* Spacing */}
          <div className="space-y-4">
            <h3 id="spacing" className="text-xl font-semibold">
              Spacing Scale
            </h3>
            <p className="text-foreground-secondary">
              Customize spacing values for padding, margin, and gaps:
            </p>
            <CodeBlock
              code={`spacing: {
  xs: '0.5rem',   // 8px
  sm: '0.75rem',  // 12px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
}`}
            />
            <div className="rounded-lg border border-border bg-surface-elevated p-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold mb-3">Preview:</p>
                {["xs", "sm", "md", "lg", "xl"].map((size) => (
                  <div key={size} className="flex items-center gap-4">
                    <span className="text-xs font-mono w-8">{size}</span>
                    <div
                      className={`h-2 bg-brand rounded`}
                      style={{
                        width: `var(--unicorn-spacing-${size}, ${size === "xs" ? "0.5rem" : size === "sm" ? "0.75rem" : size === "md" ? "1rem" : size === "lg" ? "1.5rem" : "2rem"})`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Border Radius */}
          <div className="space-y-4">
            <h3 id="radius" className="text-xl font-semibold">
              Border Radius
            </h3>
            <CodeBlock
              code={`radius: {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  full: '9999px',
}`}
            />
            <div className="rounded-lg border border-border bg-surface-elevated p-6">
              <div className="grid grid-cols-4 gap-4">
                {["sm", "md", "lg", "xl"].map((size) => (
                  <div key={size} className="text-center">
                    <div
                      className="w-16 h-16 bg-brand mx-auto mb-2"
                      style={{
                        borderRadius: `var(--unicorn-radius-${size}, ${size === "sm" ? "0.125rem" : size === "md" ? "0.375rem" : size === "lg" ? "0.5rem" : "0.75rem"})`,
                      }}
                    />
                    <span className="text-xs font-mono">{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shadows */}
          <div className="space-y-4">
            <h3 id="shadows" className="text-xl font-semibold">
              Shadows
            </h3>
            <CodeBlock
              code={`shadows: {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
}`}
            />
            <div className="rounded-lg border border-border bg-surface-elevated p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["sm", "md", "lg", "xl"].map((size) => (
                  <div key={size} className="text-center">
                    <div
                      className="w-16 h-16 bg-surface-elevated rounded-lg mx-auto mb-2"
                      style={{ boxShadow: `var(--unicorn-shadow-${size})` }}
                    />
                    <span className="text-xs font-mono">{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-4">
            <h3 id="typography" className="text-xl font-semibold">
              Typography
            </h3>
            <CodeBlock
              code={`typography: {
  fontFamily: {
    sans: '"Inter", ui-sans-serif, system-ui',
    serif: 'ui-serif, Georgia',
    mono: '"Fira Code", monospace',
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    // ... lg, xl, 2xl, etc.
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
}`}
            />
          </div>

          {/* Transitions */}
          <div className="space-y-4">
            <h3 id="transitions" className="text-xl font-semibold">
              Transitions
            </h3>
            <CodeBlock
              code={`transitions: {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  timing: {
    linear: 'linear',
    ease: 'ease',
    easeInOut: 'ease-in-out',
  },
}`}
            />
          </div>
        </div>
      </BlurFade>

      {/* Tailwind Colors */}
      <BlurFade delay={0.4}>
        <div className="space-y-4">
          <h2 id="tailwind-colors" className="text-2xl font-bold tracking-tight">
            Tailwind Color Palette
          </h2>
          <p className="text-foreground-secondary">
            Use any of Tailwind's built-in colors in your config. Here are all available colors:
          </p>

          <div className="space-y-4">
            {tailwindColors.map((color) => (
              <div key={color.name} className="rounded-lg border border-border overflow-hidden">
                <div className="bg-surface-elevated px-4 py-2 border-b border-border">
                  <span className="text-sm font-semibold capitalize">{color.name}</span>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-10 gap-2">
                    {color.shades.map((shade, idx) => (
                      <div key={idx} className="group relative">
                        <div
                          className="h-12 rounded-lg cursor-pointer transition-transform hover:scale-110"
                          style={{ backgroundColor: shade }}
                          title={`${color.name}-${(idx + 1) * 100}`}
                        />
                        <span className="text-[10px] text-center block mt-1 text-foreground-secondary">
                          {(idx + 1) * 100}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Complete Example */}
      <BlurFade delay={0.5}>
        <div className="space-y-4">
          <h2 id="complete-example" className="text-2xl font-bold tracking-tight">
            Complete Example
          </h2>
          <p className="text-foreground-secondary">
            Here's a full example config with all options:
          </p>
          <CodeBlock
            code={`/** @type {import('@unicorn-ui/ui').UserConfig} */
module.exports = {
  colors: {
    primary: {
      DEFAULT: '#6366f1',
      50: '#eef2ff',
      500: '#6366f1',
      900: '#312e81',
    },
    secondary: { DEFAULT: '#64748b' },
    accent: { DEFAULT: '#8b5cf6' },
    success: { DEFAULT: '#10b981' },
    warning: { DEFAULT: '#f59e0b' },
    error: { DEFAULT: '#ef4444' },
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  typography: {
    fontFamily: {
      sans: '"Inter", system-ui, sans-serif',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  transitions: {
    duration: {
      fast: '150ms',
      normal: '300ms',
    },
  },
  opacity: {
    50: '0.5',
    75: '0.75',
  },
}`}
          />
        </div>
      </BlurFade>

      {/* Best Practices */}
      <BlurFade delay={0.6}>
        <div className="rounded-lg border border-brand/20 bg-brand/5 p-6">
          <h3 className="text-lg font-semibold mb-3">💡 Best Practices</h3>
          <ul className="space-y-2 text-sm text-foreground-secondary">
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Start with Tailwind's color palette for consistency and accessibility</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>
                Use semantic naming (primary, secondary) instead of color names (blue, red)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Keep your spacing scale consistent (use multiples of 4 or 8)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Test your theme in both light and dark modes</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Ensure sufficient color contrast for accessibility (WCAG AA minimum)</span>
            </li>
          </ul>
        </div>
      </BlurFade>
    </div>
  )
}
