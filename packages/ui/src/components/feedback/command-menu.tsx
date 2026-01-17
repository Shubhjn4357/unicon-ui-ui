"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { type ReactNode, useEffect, useRef, useState } from "react"

interface CommandItem {
  id: string
  label: string
  group?: string
  onSelect: () => void
  icon?: ReactNode
  shortcut?: string
}

interface CommandMenuProps {
  items: CommandItem[]
  placeholder?: string
  onClose?: () => void
  className?: string
}

/**
 * Command Menu (Cmd+K interface) using native Dialog
 * Features keyboard navigation, fuzzy search, and grouped commands
 */
export function CommandMenu({
  items,
  placeholder = "Search...",
  onClose,
  className,
}: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Filter items based on search
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  )

  // Group filtered items
  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      const group = item.group || "Commands"
      if (!acc[group]) acc[group] = []
      acc[group].push(item)
      return acc
    },
    {} as Record<string, CommandItem[]>
  )

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Manage dialog state
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      dialog.showModal()
      inputRef.current?.focus()
    } else {
      dialog.close()
      setSearch("")
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => Math.min(prev + 1, filteredItems.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].onSelect()
        setIsOpen(false)
        onClose?.()
      }
    } else if (e.key === "Escape") {
      setIsOpen(false)
      onClose?.()
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className={cn(
        "w-full max-w-2xl",
        "rounded-2xl",
        "border border-border",
        "bg-surface-elevated",
        "p-0",
        "shadow-xl",
        "backdrop:bg-black/50 backdrop:backdrop-blur-sm",
        className
      )}
    >
      {/* Search Input */}
      <div className="border-b border-border p-4">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setSelectedIndex(0)
          }}
          onKeyDown={handleKeyDown}
          className={cn(
            "w-full",
            "bg-transparent",
            "text-lg text-foreground",
            "placeholder:text-foreground-muted",
            "outline-none"
          )}
        />
      </div>

      {/* Results */}
      <div className="max-h-96 overflow-y-auto p-2">
        {Object.entries(groupedItems).map(([group, groupItems]) => (
          <div key={group} className="mb-4">
            <div className="px-2 py-1 text-xs font-semibold uppercase text-foreground-muted">
              {group}
            </div>
            {groupItems.map((item) => {
              const globalIndex = filteredItems.indexOf(item)
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.onSelect()
                    setIsOpen(false)
                    onClose?.()
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3",
                    "rounded-lg px-3 py-2",
                    "text-left text-sm",
                    "transition-colors duration-fast",
                    globalIndex === selectedIndex
                      ? "bg-brand text-white"
                      : "text-foreground hover:bg-surface"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                    <span>{item.label}</span>
                  </div>
                  {item.shortcut && (
                    <kbd className="rounded bg-surface px-2 py-1 text-xs">{item.shortcut}</kbd>
                  )}
                </button>
              )
            })}
          </div>
        ))}

        {filteredItems.length === 0 && (
          <div className="py-12 text-center text-sm text-foreground-muted">No results found</div>
        )}
      </div>
    </dialog>
  )
}
