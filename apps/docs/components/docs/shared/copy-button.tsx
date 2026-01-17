"use client"

import { cn } from "@unicorn-ui/ui"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface CopyButtonProps {
  text: string
  successMessage?: string
  className?: string
}

export function CopyButton({ text, successMessage = "Copied!", className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
        "bg-surface-elevated hover:bg-surface border border-border",
        "hover:border-brand/50 hover:text-brand",
        copied && "border-success/50 text-success",
        className
      )}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          <span>{successMessage}</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}
