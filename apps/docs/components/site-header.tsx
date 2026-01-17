"use client"

import { CommandMenu, Button, ThemeToggle } from "@unicorn-ui/ui"
import { Github, Search } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function SiteHeader() {
  const router = useRouter()

  const commandItems = [
    {
      id: "home",
      label: "Home",
      group: "Pages",
      icon: <span className="i-lucide-home" />,
      onSelect: () => router.push("/"),
      shortcut: "H",
    },
    {
      id: "docs",
      label: "Documentation",
      group: "Pages",
      icon: <span className="i-lucide-book" />,
      onSelect: () => router.push("/docs"),
      shortcut: "D",
    },
    {
      id: "components",
      label: "Components",
      group: "Pages",
      icon: <span className="i-lucide-box" />,
      onSelect: () => router.push("/docs/components"),
      shortcut: "C",
    },
    {
      id: "github",
      label: "GitHub",
      group: "Links",
      icon: <Github className="h-4 w-4" />,
      onSelect: () => window.open("https://github.com", "_blank"),
    }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="container flex h-14 items-center px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold bg-linear-to-r from-brand to-brand-light bg-clip-text text-transparent">
              Unicorn UI
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Docs
            </Link>
            <Link
              href="/docs/components"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="outline"
              className="relative h-9 w-full justify-start rounded-lg bg-surface text-sm font-normal text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
              onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
            >
              <span className="hidden lg:inline-flex">Search documentation...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <CommandMenu items={commandItems} />
          </div>
          <nav className="flex items-center gap-2">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface hover:bg-surface-elevated focus:outline-none focus:ring-2 focus:ring-brand"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
