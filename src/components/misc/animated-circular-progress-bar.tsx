"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface AnimatedCircularProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  showValue?: boolean
  gaugePrimaryColor?: string
  gaugeSecondaryColor?: string
}

export const AnimatedCircularProgressBar = React.forwardRef<
  HTMLDivElement,
  AnimatedCircularProgressBarProps
>(
  (
    {
      value,
      max = 100,
      size = 120,
      strokeWidth = 10,
      showValue = true,
      gaugePrimaryColor,
      gaugeSecondaryColor,
      className,
      ...props
    },
    ref
  ) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const percentage = (value / max) * 100
    const offset = circumference - (percentage / 100) * circumference

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex items-center justify-center", className)}
        {...props}
      >
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={gaugeSecondaryColor ?? "currentColor"}
            strokeWidth={strokeWidth}
            className={gaugeSecondaryColor ? undefined : "text-surface-elevated"}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={gaugePrimaryColor ?? "currentColor"}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            className={gaugePrimaryColor ? undefined : "text-[hsl(var(--primary))]"}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-semibold">{Math.round(percentage)}%</span>
          </div>
        )}
      </div>
    )
  }
)

AnimatedCircularProgressBar.displayName = "AnimatedCircularProgressBar"
