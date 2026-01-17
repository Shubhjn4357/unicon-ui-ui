"use client"

import { cn } from "@unicorn-ui/ui"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface CodePreviewProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodePreview({
  code,
  language = "tsx",
  filename,
  showLineNumbers = false,
  className,
}: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split("\n")

  return (
    <div className={cn("rounded-lg border border-border bg-surface overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-xs font-medium text-foreground-secondary">{filename}</span>
          )}
          <span className="rounded bg-surface px-2 py-0.5 text-xs font-mono text-foreground-secondary">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors hover:bg-surface"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-success" />
              <span className="text-success">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto p-4">
        <pre className="text-sm font-mono">
          <code>
            {showLineNumbers
              ? lines.map((line, index) => (
                  <div key={index} className="table-row">
                    <span className="table-cell pr-4 text-right text-foreground-secondary select-none">
                      {index + 1}
                    </span>
                    <span className="table-cell">{line}</span>
                  </div>
                ))
              : code}
          </code>
        </pre>
      </div>
    </div>
  )
}
