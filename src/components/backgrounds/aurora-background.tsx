"use client"

import * as React from "react"
// import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  showRadialGradient?: boolean
}

/**
 * Native AuroraBackground - Animated aurora gradients
 */
export const AuroraBackground = React.forwardRef<HTMLDivElement, AuroraBackgroundProps>(
  ({ className, children, showRadialGradient = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col items-center justify-center overflow-hidden bg-background text-foreground transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform blur-[10px]",
              showRadialGradient &&
              "mask-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
            )}
            style={{
              backgroundImage: `
                repeating-linear-gradient(100deg, hsl(var(--background)) 0%, hsl(var(--background)) 7%, transparent 10%, transparent 12%, hsl(var(--background)) 16%),
                repeating-linear-gradient(100deg, #60a5fa 10%, #e879f9 15%, #60a5fa 20%, #a855f7 25%, #60a5fa 30%)
              `,
              backgroundSize: "300%, 200%",
              backgroundPosition: "50% 50%, 50% 50%",
            }}
          >
            <div
              className="absolute inset-0 animate-aurora"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(100deg, hsl(var(--background)) 0%, hsl(var(--background)) 7%, transparent 10%, transparent 12%, hsl(var(--background)) 16%),
                  repeating-linear-gradient(100deg, #60a5fa 10%, #e879f9 15%, #60a5fa 20%, #a855f7 25%, #60a5fa 30%)
                `,
                backgroundSize: "200%, 100%",
                backgroundAttachment: "fixed",
                mixBlendMode: "color",
              }}
            />
          </div>
        </div>
        {children}
      </div>
    )
  }
)

AuroraBackground.displayName = "AuroraBackground"
