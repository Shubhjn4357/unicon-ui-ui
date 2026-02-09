
import { Check, Copy, Moon, RotateCcw, Sun, Palette, Type, RefreshCw, LayoutTemplate } from "lucide-react"
import * as React from "react"
import { type ThemePreset, useThemeGenerator, type ColorFormat } from "../../hooks/use-theme-generator"
import { Safari } from "../mocks/safari"
import { Progress } from "../core/progress"
import { Button } from "../core/button"
import { Card } from "../core/card"
import { Input } from "../core/input"
import { Label } from "../core/label"
import { Slider } from "../core/slider"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../core/select"
import { useTheme } from "../../hooks/use-theme"

interface RadiusTokens {
  radius: string
  "radius-sm": string
  "radius-md": string
  "radius-lg": string
  "radius-xl": string
  "radius-2xl": string
  "radius-full": string
}

const DEFAULT_RADIUS_VALUES = {
  radius: 0.5,
  "radius-sm": 0.25,
  "radius-md": 0.5,
  "radius-lg": 0.75,
  "radius-xl": 1,
  "radius-2xl": 1.5,
}

// Helper: Parse HSL string to components
function parseHSL(hsl: string): { h: number; s: number; l: number } | null {
  const match = hsl.match(/(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%?\s+(\d+(?:\.\d+)?)%?/)
  if (match) {
    return { h: Number.parseFloat(match[1]), s: Number.parseFloat(match[2]), l: Number.parseFloat(match[3]) }
  }
  return null
}

// Helper: Convert hex to HSL
function hexToHSL(hex: string): string {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}

// Intelligent color inversion for dark/light mode
function invertColorForMode(color: string, isDarkToLight: boolean): string {
  let hsl = color

  // Convert hex to HSL if needed
  if (color.startsWith("#")) {
    hsl = hexToHSL(color)
  }

  const parsed = parseHSL(hsl)
  if (!parsed) return color

  let { h, s, l } = parsed

  if (isDarkToLight) {
    // Dark mode → Light mode: increase lightness dramatically
    l = Math.min(97, l + 80)
    // Reduce saturation slightly for softer light mode
    s = Math.max(10, s - 10)
  } else {
    // Light mode → Dark mode: decrease lightness dramatically
    l = Math.max(11, l - 80)
    // Increase saturation slightly for vibrant dark mode
    s = Math.min(50, s + 5)
  }

  return `${h} ${s}% ${l}%`
}

// Smart foreground inversion
function invertForeground(color: string, isDarkToLight: boolean): string {
  const parsed = parseHSL(color.startsWith("#") ? hexToHSL(color) : color)
  if (!parsed) return color

  const { h, s } = parsed
  // Foreground should be high contrast
  const l = isDarkToLight ? 98 : 20

  return `${h} ${Math.max(10, s - 5)}% ${l}%`
}

export function ThemeEditor() {
  const { theme } = useTheme()
  const {
    activePreset,
    customColors,
    isCustomTheme,
    // isDarkMode, // Use global theme instead
    DEFAULT_PRESETS,
    DEFAULT_DESIGN_STYLES,
    applyTheme,
    resetToPreset,
    // toggleDarkMode, // Use global toggle
    setCustomColors,
    setIsCustomTheme,
    designStyle,
    setDesignStyle,
    colorFormat,
    setColorFormat,
    font,
    setFont,
    FONTS,
    generateCSS: generateExportCSS
  } = useThemeGenerator()

  const isDarkMode = theme === "dark"

  const [activePalette, setActivePalette] = React.useState<ThemePreset["palette"] | null>(null)
  // Store radius as number for slider (rem)
  const [baseRadius, setBaseRadius] = React.useState(0.5)

  const [lightColors, setLightColors] = React.useState<Record<string, string>>({})
  const [darkColors, setDarkColors] = React.useState<Record<string, string>>({})
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const [copiedCSS, setCopiedCSS] = React.useState(false)

  // Sync state with active preset
  React.useEffect(() => {
    const preset = DEFAULT_PRESETS.find((p) => p.id === activePreset)
    if (preset) {
      // Keep full palette with all properties for activePalette
      setActivePalette({
        ...preset.palette,
        colors: { ...preset.palette.colors, ...customColors },
      })

      // Extract colors
      const colorTokens: Record<string, string> = {}
      Object.entries(preset.palette.colors).forEach(([key, value]) => {
        if (key !== 'chart' && key !== 'radius' && typeof value === 'string') {
          colorTokens[key] = value
        }
      })

      const filteredCustomColors: Record<string, string> = {}
      Object.entries(customColors).forEach(([key, value]) => {
        if (key !== 'chart' && key !== 'radius' && typeof value === 'string') {
          filteredCustomColors[key] = value
        }
      })

      // Initial load: set both light and dark to the preset defaults (or inverted)
      // Since presets are "base" colors (usually defined for light mode in standard palettes, 
      // but our presets have specific HSL values).
      // If the preset is dark-themed by nature (like "Dracula"), its values are dark.

      // For simplicity in this editor, we treat the preset values as the "current mode" values
      // and let the editor auto-generate the other mode.

      if (isDarkMode) {
        setDarkColors({ ...colorTokens, ...filteredCustomColors })
        // Auto-gen light
        const lightGen: Record<string, string> = {}
        Object.entries({ ...colorTokens, ...filteredCustomColors }).forEach(([k, v]) => {
          lightGen[k] = k.includes("foreground") ? invertForeground(v, true) : invertColorForMode(v, true)
        })
        setLightColors(lightGen)

        // Apply immediately
        const radiusMatch = preset.palette.colors.radius.match(/(\d+(?:\.\d+)?)rem/)
        const r = radiusMatch ? radiusMatch[0] : preset.palette.colors.radius

        applyTheme({
          name: preset.name,
          colors: {
            ...colorTokens,
            ...filteredCustomColors,
            radius: r,
            chart: []
          } as any
        })

      } else {
        setLightColors({ ...colorTokens, ...filteredCustomColors })
        // Auto-gen dark
        const darkGen: Record<string, string> = {}
        Object.entries({ ...colorTokens, ...filteredCustomColors }).forEach(([k, v]) => {
          darkGen[k] = k.includes("foreground") ? invertForeground(v, false) : invertColorForMode(v, false)
        })
        setDarkColors(darkGen)

        // Apply immediately
        const radiusMatch = preset.palette.colors.radius.match(/(\d+(?:\.\d+)?)rem/)
        const r = radiusMatch ? radiusMatch[0] : preset.palette.colors.radius

        applyTheme({
          name: preset.name,
          colors: {
            ...colorTokens,
            ...filteredCustomColors,
            radius: r,
            chart: []
          } as any
        })
      }

      // Parse radius for slider state
      const radiusStr = preset.palette.colors.radius
      const radiusMatch = radiusStr.match(/(\d+(?:\.\d+)?)rem/)
      if (radiusMatch) {
        setBaseRadius(parseFloat(radiusMatch[1]))
      } else if (radiusStr === "0") {
        setBaseRadius(0)
      }
    }
  }, [activePreset, customColors, DEFAULT_PRESETS, isDarkMode, applyTheme])

  // Re-apply theme when font changes
  React.useEffect(() => {
    if (activePalette) {
      applyTheme(activePalette)
    }
  }, [font, applyTheme, activePalette])

  const handleColorChange = (key: string, value: string) => {
    setIsCustomTheme(true)
    setCustomColors((prev) => ({ ...prev, [key]: value }))

    // Update local state and auto-inv
    if (isDarkMode) {
      setDarkColors((prev) => ({ ...prev, [key]: value }))
      const inverted = key.includes("foreground") ? invertForeground(value, true) : invertColorForMode(value, true)
      setLightColors((prev) => ({ ...prev, [key]: inverted }))
    } else {
      setLightColors((prev) => ({ ...prev, [key]: value }))
      const inverted = key.includes("foreground") ? invertForeground(value, false) : invertColorForMode(value, false)
      setDarkColors((prev) => ({ ...prev, [key]: inverted }))
    }

    // Apply immediately to preview
    if (activePalette) {
      const newPalette = {
        ...activePalette,
        colors: { ...activePalette.colors, [key]: value },
      }
      applyTheme(newPalette)
    }
  }

  const handleRadiusChange = (val: number[]) => {
    const newRadius = val[0]
    setBaseRadius(newRadius)
    const radiusStr = `${newRadius}rem`

    if (activePalette) {
      const newPalette = {
        ...activePalette,
        colors: { ...activePalette.colors, radius: radiusStr }
      }
      applyTheme(newPalette)
    }
  }

  const handlePresetSelect = (presetId: string) => {
    resetToPreset(presetId)
    setBaseRadius(0.5)
    // The useEffect will handle updating colors
  }

  const copyCSS = async () => {
  // Use the hook's generator which respects ColorFormat
    const activeColors = isDarkMode ? darkColors : lightColors
    const oppositeColors = isDarkMode ? lightColors : darkColors

    // Construct palettes for the generator
    const lightPalette: ThemePreset['palette'] = {
      name: "Generated",
      colors: {
        ...lightColors as any,
        radius: `${baseRadius}rem`,
        chart: []
      }
    }

    const darkPalette: ThemePreset['palette'] = {
      name: "Generated",
      colors: {
        ...darkColors as any,
        radius: `${baseRadius}rem`,
        chart: []
      }
    }

    const lightCSS = generateExportCSS(lightPalette, false)
    const darkCSS = generateExportCSS(darkPalette, true)

    const css = `/* Generated Unicorn UI Theme */
@layer base {
${lightCSS}

${darkCSS}
}`

    try {
      await navigator.clipboard.writeText(css)
      setCopiedCSS(true)
      setTimeout(() => setCopiedCSS(false), 2000)
    } catch (e) {
      console.error("Failed to copy CSS", e)
    }
  }

  const colorKeys = [
    "background",
    "foreground",
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "accent",
    "accent-foreground",
    "muted",
    "muted-foreground",
    "destructive",
    "destructive-foreground",
    "card",
    "card-foreground",
    "border",
    "input",
    "ring",
  ] as const

  const currentColors = isDarkMode ? darkColors : lightColors

  return (
    <div className="min-h-screen w-full bg-background/50">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-card border-b p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Theme Editor</h1>
          <Button variant="outline" size="sm" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 lg:gap-8">
        {/* Sidebar Controls */}
        <Card
          className={`p-6 space-y-6 ${mobileMenu ? "block" : "hidden"
            } lg:block lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] overflow-y-auto border-border/50 bg-card/50 backdrop-blur-sm`}
        >
          {/* Presets */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold flex items-center gap-2">
              <Palette className="w-4 h-4" /> Presets
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {DEFAULT_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    handlePresetSelect(preset.id)
                    setMobileMenu(false)
                  }}
                  className={`p-2 rounded-lg border text-xs transition-all flex items-center gap-2 text-left group hover:border-primary/50 relative overflow-hidden ${activePreset === preset.id && !isCustomTheme
                    ? "ring-1 ring-primary border-primary bg-primary/5"
                    : "border-border bg-card/50 hover:bg-accent"
                    }`}
                >
                  <div
                    className="w-6 h-6 rounded-full shadow-sm shrink-0 border"
                    style={{ background: preset.preview }}
                  />
                  <span className="font-medium truncate">{preset.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-border/50" />

          {/* Configuration */}
          <div className="space-y-4">
            <Label className="text-sm font-semibold flex items-center gap-2">
              Configuration
            </Label>

            <div className="grid gap-4">
              {/* Font Selector */}
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Font Family</Label>
                <Select value={font} onValueChange={setFont}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="Select Font" />
                  </SelectTrigger>
                  <SelectContent>
                    {FONTS.map((f) => (
                      <SelectItem key={f.name} value={f.value}>
                        <span style={{ fontFamily: f.value.includes("var") ? "inherit" : f.value }}>
                          {f.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Radius Slider */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label className="text-xs text-muted-foreground">Radius</Label>
                  <span className="text-xs font-mono">{baseRadius}rem</span>
                </div>
                <Slider
                  value={[baseRadius]}
                  max={2}
                  step={0.10}
                  onValueChange={handleRadiusChange}
                  className="py-2"
                />
              </div>


              {/* Design Style Selector */}
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Design Style</Label>
                <Select value={designStyle || "default"} onValueChange={(v) => {
                  setDesignStyle(v === "default" ? null : v)
                }}>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="Select Style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    {DEFAULT_DESIGN_STYLES.map((style) => (
                      <SelectItem key={style} value={style}>
                        <span className="capitalize">{style.replace("-", " ")}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Format Selector */}
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Color Format (Export)</Label>
                <Select value={colorFormat} onValueChange={(v) => setColorFormat(v as ColorFormat)}>
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hsl">HSL (Recommended)</SelectItem>
                    <SelectItem value="hex">Hex</SelectItem>
                    <SelectItem value="rgb">RGB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="h-px bg-border/50" />

          {/* Colors */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold flex items-center gap-2">
                <RefreshCw className="w-4 h-4" /> Colors
              </Label>
              {isCustomTheme && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => resetToPreset(activePreset)}
                  className="h-7 text-xs px-2"
                >
                  <RotateCcw className="w-3 h-3 mr-1" /> Reset
                </Button>
              )}
            </div>

            <div className="space-y-3">
              {colorKeys.map((key) => {
                const customColorsMap = customColors as Record<string, string>
                const value = currentColors[key] || customColorsMap[key] || ""
                return (
                  <div key={key} className="space-y-1.5">
                    <Label className="text-xs capitalize text-muted-foreground">{key.replace("-", " ")}</Label>
                    <div className="flex gap-2 items-center">
                      <div className="relative group">
                        <input
                          type="color"
                          value={
                            value && typeof value === "string" && !value.startsWith("hsl")
                              ? (value as string)
                              : "#3B82F6"
                          }
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          className="h-9 w-9 p-0.5 rounded-md border cursor-pointer bg-transparent"
                        />
                      </div>
                      <Input
                        type="text"
                        value={value as string}
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        className="flex-1 h-9 text-xs font-mono"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Copy CSS Button */}
          <div className="pt-2 sticky bottom-0 bg-background/80 backdrop-blur-sm pb-2">
            <Button
              className="w-full"
              onClick={copyCSS}
              variant={copiedCSS ? "outline" : "default"}
            >
              {copiedCSS ? (
                <>
                  <Check className="w-4 h-4 mr-2" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" /> Copy CSS
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Preview Area */}
        <div className="space-y-6">
          <Safari
            url="theme.unicorn.ui"
            className="size-full bg-background/50 backdrop-blur-xl border-border/50 p-6"
          >
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b pb-6">
                <div>
                  <h2 className="text-2xl font-bold">Preview</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    See how your theme looks on real components
                  </p>
                </div>
              </div>

            {/* Components Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Buttons */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Buttons</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Form Elements</h3>
                  <div className="space-y-3">
                    <Input placeholder="Default Input" />
                    <div className="flex gap-3">
                      <Input placeholder="Disabled" disabled className="w-1/2" />
                      <Input placeholder="Invalid" className="w-1/2 border-destructive text-destructive" />
                    </div>
                  </div>
                </div>

                {/* Cards */}
                <div className="space-y-4 md:col-span-2">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Surface & Typography</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold tracking-tight">Card Heading</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          This is a card component demonstrating the surface background color, border radius, and typography hierarchy.
                        </p>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Button size="sm">Action</Button>
                        <Button size="sm" variant="ghost">Cancel</Button>
                      </div>
                    </Card>

                    <Card className="p-6 flex flex-col justify-center space-y-6 bg-secondary/20 border-none">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                          U
                        </div>
                        <div>
                          <p className="font-semibold">Unicorn UI</p>
                          <p className="text-xs text-muted-foreground">Theming Engine</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Progress value={66} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span>66%</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

              {/* Color Swatches */}
                <div className="space-y-4 md:col-span-2 pt-6 border-t">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Palette Overview</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {["background", "primary", "secondary", "accent", "muted", "destructive"].map((color) => (
                      <div key={color} className="space-y-2 group">
                      <div
                        className="h-20 w-full rounded-xl border shadow-sm transition-transform group-hover:scale-105"
                        style={{ background: `hsl(var(--${color}))` }}
                      />
                      <div className="space-y-0.5">
                        <p className="text-xs font-semibold capitalize">{color}</p>
                        <p className="text-[10px] text-muted-foreground font-mono opacity-50">var(--{color})</p>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
            </div>
            </div>
          </Safari>
        </div>
      </div>
    </div>
  )
}

