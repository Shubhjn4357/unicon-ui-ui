"use client"

import { cn } from "@unicorn-ui/ui"
import type * as React from "react"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "center" | "start" | "end"
  code?: string
}

export function ComponentPreview({
  children,
  className,
  align = "center",
  code,
  ...props
}: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "group relative my-4 flex min-h-[350px] w-full items-center justify-center rounded-xl border border-border bg-surface-elevated p-10",
        align === "start" && "items-start",
        align === "end" && "items-end",
        className
      )}
      {...props}
    >
      <div className="grid place-items-center gap-4">{children}</div>
      {code && (
        <div className="mt-4 w-full rounded-lg bg-surface border border-border p-4">
          <pre className="overflow-x-auto text-xs font-mono text-foreground-secondary">
            <code>{code}</code>
          </pre>
        </div>
      )}
      <div className="absolute bottom-4 right-4 text-xs font-medium text-foreground-muted opacity-0 transition-opacity group-hover:opacity-100">
        Preview
      </div>
    </div>
  )
}
