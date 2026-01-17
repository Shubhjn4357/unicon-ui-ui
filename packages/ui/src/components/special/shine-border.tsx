"use client"

import { cn } from "../../lib/utils"

interface ShineBorderProps {
  className?: string
  children: React.ReactNode
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: string | string[]
}

export function ShineBorder({
  children,
  className,
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": borderRadius,
        } as React.CSSProperties
      }
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-(--border-radius) bg-surface p-3 text-foreground",
        className
      )}
    >
      <div
        style={
          {
            "--border-width": borderWidth,
            "--border-radius": borderRadius,
            "--border-color": color,
            "--shine-pulse-duration": duration,
          } as React.CSSProperties
        }
        className={cn(
          "before:absolute before:inset-0 before:rounded-(--border-radius) before:p-(--border-width) before:will-change-[background-position] before:content-[''] before:[-webkit-mask-composite:xor]! before:bg-[linear-gradient(var(--border-color),var(--border-color)),linear-gradient(var(--border-color),var(--border-color))] before:[background-origin:padding-box,border-box] before:bg-position-[50%_50%,50%_50%] before:[background-repeat:no-repeat,no-repeat] before:bg-size-[200%_100%,200%_100%] before:[-webkit-mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] before:mask-exclude!",
          "motion-safe:before:animate-shine-pulse"
        )}
      />
      {children}
    </div>
  )
}
