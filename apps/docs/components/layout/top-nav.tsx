"use client"

import { docsConfig, siteConfig } from "@/lib/docs-config"
import { AnimatedGradientText, cn } from "@unicorn-ui/ui"
import { AnimatedThemeToggler } from "@unicorn-ui/ui"
import { AnimatePresence, motion } from "framer-motion"
import { Github, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import { DocsCommandMenu } from "../docs/navigation/command-menu-search"

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-surface/80 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/60">
        <div className="container flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <AnimatedGradientText className="inline-flex items-center justify-center transition-shadow duration-500 ease-out">
                <span className="text-xl font-bold bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent animate-gradient">
                  {siteConfig.name}
                </span>
              </AnimatedGradientText>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link
                href="/docs"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/docs")
                    ? "text-foreground font-medium"
                    : "text-foreground-secondary"
                )}
              >
                Documentation
              </Link>
              <Link
                href="/docs/components"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/docs/components")
                    ? "text-foreground font-medium"
                    : "text-foreground-secondary"
                )}
              >
                Components
              </Link>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search - Hidden on mobile */}
            <div className="hidden sm:block">
              <DocsCommandMenu />
            </div>

            {/* GitHub Link */}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground-secondary transition-colors hover:bg-surface-elevated hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>

            {/* Theme Toggle */}
            <AnimatedThemeToggler />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:bg-surface-elevated"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* Mobile Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-14 z-50 h-[calc(100vh-3.5rem)] w-full max-w-sm border-l border-border bg-surface p-6 shadow-2xl md:hidden overflow-y-auto"
            >
              {/* Search on Mobile */}
              <div className="mb-6">
                <DocsCommandMenu />
              </div>

              {/* Nav Links */}
              <div className="mb-6 flex flex-col gap-4">
                <Link
                  href="/docs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  Documentation
                </Link>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className="flex items-center gap-2 text-lg font-medium"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
              </div>

              {/* Mobile Docs Navigation */}
              <div className="space-y-4">
                {docsConfig.map((group, index) => (
                  <div key={index}>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">{group.title}</h4>
                    <div className="space-y-1">
                      {group.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm transition-colors",
                            pathname === item.href
                              ? "bg-surface-elevated text-brand font-medium"
                              : "text-foreground-secondary hover:bg-surface-elevated hover:text-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
