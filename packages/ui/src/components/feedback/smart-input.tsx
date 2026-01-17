"use client"

import { cn } from "@/lib/utils"
import React, { type ReactNode } from "react"

interface SmartInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  leading?: ReactNode
  trailing?: ReactNode
  isLoading?: boolean
  error?: string
}

/**
 * Smart Input with slots for icons, loading states, and actions
 * Perfect for AI interactions and agentic interfaces
 */
export const SmartInput = React.forwardRef<HTMLInputElement, SmartInputProps>(
  ({ className, leading, trailing, isLoading, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <div
          className={cn(
            "flex items-center gap-3",
            "rounded-xl",
            "border border-border",
            "bg-surface-elevated",
            "px-4 py-3",
            "transition-all duration-fast",
            "focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20",
            error && "border-error",
            className
          )}
        >
          {/* Leading Icon/Content */}
          {leading && <div className="shrink-0 text-foreground-secondary">{leading}</div>}

          {/* Input Field */}
          <input
            ref={ref}
            className={cn(
              "flex-1",
              "bg-transparent",
              "text-foreground",
              "placeholder:text-foreground-muted",
              "outline-none"
            )}
            {...props}
          />

          {/* Loading Spinner */}
          {isLoading && (
            <div className="shrink-0">
              <svg
                className="h-5 w-5 animate-spin text-brand"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          )}

          {/* Trailing Action/Icon */}
          {!isLoading && trailing && (
            <div className="shrink-0 text-foreground-secondary">{trailing}</div>
          )}
        </div>

        {/* Error Message */}
        {error && <p className="mt-2 text-sm text-error">{error}</p>}
      </div>
    )
  }
)

SmartInput.displayName = "SmartInput"
