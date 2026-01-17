"use client"

import type React from "react"

import { cn } from "../../lib/utils"

interface ComicTextProps {
  children: React.ReactNode
  className?: string
}

export function ComicText({ children, className }: ComicTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block font-black uppercase text-foreground transition-transform hover:-translate-y-1 hover:translate-x-1",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-1 before:translate-y-1 before:bg-black before:transition-transform hover:before:translate-x-2 hover:before:translate-y-2",
        "after:absolute after:inset-0 after:-z-20 after:translate-x-2 after:translate-y-2 after:bg-primary after:transition-transform hover:after:translate-x-3 hover:after:translate-y-3",
        className
      )}
    >
      {children}
    </span>
  )
}
