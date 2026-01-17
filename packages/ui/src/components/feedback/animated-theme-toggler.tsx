"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function AnimatedThemeToggler() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="group relative inline-flex size-10 items-center justify-center rounded-lg border bg-background text-foreground transition-colors hover:bg-muted"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="dark"
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="size-5" />
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ scale: 0, opacity: 0, rotate: 90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="size-5" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
