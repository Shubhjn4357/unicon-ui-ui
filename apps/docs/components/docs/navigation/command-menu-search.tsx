"use client"

import { allNavItems } from "@/lib/docs-config"
import { CommandMenu } from "@unicorn-ui/ui"
import { Box, FileText, Hash } from "lucide-react"
import { useRouter } from "next/navigation"
import * as React from "react"

export function DocsCommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-foreground-secondary transition-colors hover:bg-surface-elevated hover:text-foreground"
      >
        <span className="hidden sm:inline-flex">Search documentation...</span>
        <span className="sm:hidden">Search...</span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-border bg-surface-elevated px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Command Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%]">
            <div className="rounded-xl border border-border bg-surface shadow-2xl">
              <div className="border-b border-border p-4">
                <input
                  type="text"
                  placeholder="Search components, docs..."
                  className="w-full bg-transparent text-lg outline-none placeholder:text-foreground-secondary"
                  autoFocus
                />
              </div>

              <div className="max-h-[400px] overflow-y-auto p-2">
                {/* Group by category */}
                {Object.entries(
                  allNavItems.reduce(
                    (acc, item) => {
                      const category = item.category || "Other"
                      if (!acc[category]) acc[category] = []
                      acc[category].push(item)
                      return acc
                    },
                    {} as Record<string, typeof allNavItems>
                  )
                ).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <div className="mb-2 px-2 text-xs font-semibold text-foreground-secondary">
                      {category}
                    </div>
                    {items.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleSelect(item.href)}
                        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-surface-elevated"
                      >
                        <Box className="h-4 w-4 text-foreground-secondary" />
                        <span>{item.title}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              <div className="border-t border-border p-3">
                <div className="flex items-center justify-between text-xs text-foreground-secondary">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="rounded bg-surface-elevated px-1.5 py-0.5">↑↓</kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="rounded bg-surface-elevated px-1.5 py-0.5">↵</kbd>
                      Select
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-surface-elevated px-1.5 py-0.5">ESC</kbd>
                    Close
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
