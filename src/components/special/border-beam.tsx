"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"
import { COLOR_TOKENS } from "../../constants/color-tokens"

export interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  duration?: number
  borderWidth?: number
  anchor?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

export const BorderBeam = React.forwardRef<HTMLDivElement, BorderBeamProps>(
  (
    {
      className,
      size = 200,
      duration = 15,
      anchor = 100,
      borderWidth = 1.5,
      colorFrom = COLOR_TOKENS.BEAM_START,
      colorTo = COLOR_TOKENS.BEAM_END,
      delay = 0,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent",
          // Mask styles to hide the center and show only the border
          "[mask-clip:padding-box,border-box]! mask-intersect! [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
          className
        )}
        style={{
          borderWidth: borderWidth,
        }}
        {...props}
      >
        <motion.div
          className="absolute aspect-square"
          style={{
            width: size,
            offsetPath: "inset(0)", // This is the key fix. It traces the container edge.
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          }}
          initial={{ offsetDistance: `${anchor}%`, opacity: 0 }}
          animate={{
            offsetDistance: [`${anchor}%`, `${anchor + 100}%`],
            opacity: 1,
          }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            delay: delay,
          }}
        />
      </div>
    )
  }
)

BorderBeam.displayName = "BorderBeam"