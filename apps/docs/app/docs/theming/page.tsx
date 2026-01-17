"use client"

import { AnimatedThemeToggler, Badge, BlurFade, NeonGradientCard } from "@unicorn-ui/ui"
import { Code, Moon, Palette, Sun } from "lucide-react"
import { useState } from "react"

function ColorSwatch({
  name,
  variable,
  className,
}: { name: string; variable: string; className: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-3">
      <div className={`h-12 w-12 rounded-md ${className} border border-border/50`} />
      <div className="flex-1">
        <p className="text-sm font-medium">{name}</p>
        <code className="text-xs text-foreground-secondary">{variable}</code>
      </div>
    </div>
  )
}

export default function ThemingPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <BlurFade delay={0.1}>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Theming</h1>
          <p className="text-lg text-foreground-secondary">
            Customize Unicorn UI to match your brand with CSS variables and Tailwind configuration.
          </p>
        </div>
      </BlurFade>

      {/* Theme Toggle Demo */}
      <BlurFade delay={0.2}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Dark Mode Support</h2>
          <p className="text-foreground-secondary">
            All components support dark mode out of the box. Try switching themes:
          </p>

          <NeonGradientCard className="p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <Sun className="h-6 w-6 text-foreground-secondary" />
                <AnimatedThemeToggler />
                <Moon className="h-6 w-6 text-foreground-secondary" />
              </div>
              <p className="text-center text-sm text-foreground-secondary">
                Theme changes are instantly applied to all components
              </p>
            </div>
          </NeonGradientCard>
        </div>
      </BlurFade>

      {/* Color Palette */}
      <BlurFade delay={0.3}>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Palette className="h-6 w-6 text-brand" />
            <h2 className="text-2xl font-bold tracking-tight">Color Palette</h2>
          </div>
          <p className="text-foreground-secondary">
            Unicorn UI uses CSS variables for theming. Here are the default colors:
          </p>

          <div className="space-y-6">
            {/* Primary Colors */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Primary Colors
                <Badge variant="outline" className="text-xs">
                  Core
                </Badge>
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <ColorSwatch name="Brand" variable="--color-brand" className="bg-brand" />
                <ColorSwatch
                  name="Brand Light"
                  variable="--color-brand-light"
                  className="bg-brand-light"
                />
              </div>
            </div>

            {/* Surface Colors */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Surface Colors
                <Badge variant="outline" className="text-xs">
                  Backgrounds
                </Badge>
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <ColorSwatch
                  name="Background"
                  variable="--color-background"
                  className="bg-background"
                />
                <ColorSwatch name="Surface" variable="--color-surface" className="bg-surface" />
                <ColorSwatch
                  name="Surface Elevated"
                  variable="--color-surface-elevated"
                  className="bg-surface-elevated"
                />
              </div>
            </div>

            {/* Text Colors */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Text Colors
                <Badge variant="outline" className="text-xs">
                  Typography
                </Badge>
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <ColorSwatch
                  name="Foreground"
                  variable="--color-foreground"
                  className="bg-foreground"
                />
                <ColorSwatch
                  name="Foreground Secondary"
                  variable="--color-foreground-secondary"
                  className="bg-foreground-secondary"
                />
              </div>
            </div>

            {/* Border Color */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Border Color
                <Badge variant="outline" className="text-xs">
                  Outlines
                </Badge>
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <ColorSwatch name="Border" variable="--color-border" className="bg-border" />
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* CSS Variables */}
      <BlurFade delay={0.4}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Code className="h-6 w-6 text-brand" />
            <h2 className="text-2xl font-bold tracking-tight">Customization</h2>
          </div>
          <p className="text-foreground-secondary">
            Override the default theme by adding CSS variables to your global CSS file:
          </p>

          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="border-b border-border bg-surface-elevated px-4 py-2">
              <span className="text-xs font-medium text-foreground-secondary">globals.css</span>
            </div>
            <div className="p-4">
              <pre className="overflow-x-auto text-sm">
                <code>{`@layer base {
  :root {
    /* Customize your brand colors */
    --color-brand: 168 85% 50%;
    --color-brand-light: 168 75% 60%;
    
    /* Override surface colors */
    --color-background: 0 0% 100%;
    --color-surface: 0 0% 98%;
    --color-surface-elevated: 0 0% 96%;
    
    /* Customize text colors */
    --color-foreground: 0 0% 10%;
    --color-foreground-secondary: 0 0% 45%;
    
    /* Border color */
    --color-border: 0 0% 90%;
  }

  .dark {
    /* Dark mode colors */
    --color-brand: 168 85% 55%;
    --color-brand-light: 168 75% 65%;
    
    --color-background: 0 0% 7%;
    --color-surface: 0 0% 10%;
    --color-surface-elevated: 0 0% 14%;
    
    --color-foreground: 0 0% 98%;
    --color-foreground-secondary: 0 0% 65%;
    
    --color-border: 0 0% 20%;
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Tailwind Config */}
      <BlurFade delay={0.5}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Tailwind Configuration</h2>
          <p className="text-foreground-secondary">
            To use the theme colors in your own components, extend your Tailwind config:
          </p>

          <div className="rounded-lg border border-border bg-surface overflow-hidden">
            <div className="border-b border-border bg-surface-elevated px-4 py-2">
              <span className="text-xs font-medium text-foreground-secondary">
                tailwind.config.js
              </span>
            </div>
            <div className="p-4">
              <pre className="overflow-x-auto text-sm">
                <code>{`module.exports = {
  theme: {
    extend: {
      colors: {
        brand: 'hsl(var(--color-brand))',
        'brand-light': 'hsl(var(--color-brand-light))',
        background: 'hsl(var(--color-background))',
        surface: 'hsl(var(--color-surface))',
        'surface-elevated': 'hsl(var(--color-surface-elevated))',
        foreground: 'hsl(var(--color-foreground))',
        'foreground-secondary': 'hsl(var(--color-foreground-secondary))',
        border: 'hsl(var(--color-border))',
      },
    },
  },
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Best Practices */}
      <BlurFade delay={0.6}>
        <div className="rounded-lg border border-brand/20 bg-brand/5 p-6">
          <h3 className="text-lg font-semibold mb-3">💡 Best Practices</h3>
          <ul className="space-y-2 text-sm text-foreground-secondary">
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Use HSL color format for better dark mode support</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Keep contrast ratios accessible (WCAG AA minimum)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Test your theme in both light and dark modes</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand">•</span>
              <span>Use semantic color names instead of literal colors</span>
            </li>
          </ul>
        </div>
      </BlurFade>
    </div>
  )
}
