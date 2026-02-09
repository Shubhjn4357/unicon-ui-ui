"use client"

import { Check, Eye, Lock, Moon, Sun } from "lucide-react"
import * as React from "react"
import { useTheme } from "../../hooks/use-theme"
import { BackgroundBeams } from "../backgrounds/background-beams"
import { SpotlightCard } from "../layout/spotlight-card"
import { ThemeEditor } from "./theme-editor"
import { Button } from "../core/button"

export default function ThemeGeneratorPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b bg-background/50 backdrop-blur-xl">
        <BackgroundBeams className="opacity-20" />
        <div className="container mx-auto py-12 px-4 relative z-10">
        <SpotlightCard className="">
      {/* Theme Toggle */}
      
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 bg-background/50 backdrop-blur-md border border-border/50 hover:bg-accent"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-primary" />
            ) : (
                <Sun className="w-5 h-5 text-orange-500" />
            )}
          </Button>
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Theme Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Create beautiful, accessible themes for your Unicorn UI components. Choose from our
              curated presets or build your own custom palette.
            </p>
          </div>
        </SpotlightCard>
        </div>
      </div>

      {/* Main Editor Section */}
      <div className="container mx-auto py-8 px-4">
        <ThemeEditor />
      </div>

     

      {/* Footer */}
      <div className="container mx-auto py-12 px-4 text-center border-t mt-12">
        <p className="text-muted-foreground">
          Powered by Unicorn UI - The complete component system
        </p>
      </div>
    </div>
  )
}

