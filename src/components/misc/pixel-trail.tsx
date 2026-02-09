"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface PixelTrailProps extends Omit<HTMLMotionProps<"div">, "color"> {
  pixelSize?: number
  fadeDuration?: number
  color?: string
  children?: React.ReactNode
}

type PixelPoint = {
  id: number
  x: number
  y: number
  createdAt: number
}

/**
 * Native PixelTrail - Mouse cursor pixel trail
 */
export const PixelTrail = React.forwardRef<HTMLDivElement, PixelTrailProps>(
  (
    {
      pixelSize = 20,
      fadeDuration = 500,
      color = "rgba(var(--color-brand, 99, 102, 241), 0.5)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement)

    const [pixels, setPixels] = React.useState<PixelPoint[]>([])
    const idRef = React.useRef(0)
    const lastPixelRef = React.useRef<{ x: number; y: number } | null>(null)

    const size = pixelSize > 0 ? pixelSize : 20
    const durationMs = fadeDuration > 0 ? fadeDuration : 500

    React.useEffect(() => {
      if (typeof window === "undefined") return

      const handleMove = (event: MouseEvent) => {
        const container = containerRef.current
        if (!container) return

        const rect = container.getBoundingClientRect()
        const localX = event.clientX - rect.left
        const localY = event.clientY - rect.top

        if (localX < 0 || localY < 0 || localX > rect.width || localY > rect.height) return

        const snappedX = Math.floor(localX / size) * size + size / 2
        const snappedY = Math.floor(localY / size) * size + size / 2

        const last = lastPixelRef.current
        if (last && last.x === snappedX && last.y === snappedY) return
        lastPixelRef.current = { x: snappedX, y: snappedY }

        const now = performance.now()
        const maxPixels = Math.max(60, Math.ceil((rect.width / size) * (rect.height / size) * 0.25))

        setPixels((prev) => {
          const next = [...prev, { id: idRef.current++, x: snappedX, y: snappedY, createdAt: now }]
          const cutoff = now - durationMs
          const filtered = next.filter((pixel) => pixel.createdAt >= cutoff)
          if (filtered.length > maxPixels) {
            return filtered.slice(filtered.length - maxPixels)
          }
          return filtered
        })
      }

      const handleLeave = () => {
        lastPixelRef.current = null
      }

      window.addEventListener("mousemove", handleMove)
      window.addEventListener("mouseleave", handleLeave)

      return () => {
        window.removeEventListener("mousemove", handleMove)
        window.removeEventListener("mouseleave", handleLeave)
      }
    }, [size, durationMs])

    React.useEffect(() => {
      if (typeof window === "undefined") return
      const interval = window.setInterval(() => {
        const now = performance.now()
        setPixels((prev) => prev.filter((pixel) => now - pixel.createdAt < durationMs))
      }, Math.min(200, durationMs))
      return () => window.clearInterval(interval)
    }, [durationMs])

    return (
      <motion.div
        ref={containerRef}
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        {...props}
      >
        {children}
        {pixels.map((pixel) => (
          <motion.span
            key={pixel.id}
            className="absolute"
            style={{
              left: pixel.x,
              top: pixel.y,
              width: size,
              height: size,
              backgroundColor: color,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0.85, scale: 1 }}
            animate={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: durationMs / 1000, ease: "easeOut" }}
          />
        ))}
      </motion.div>
    )
  }
)

PixelTrail.displayName = "PixelTrail"

// Adding a more robust implementation inline as placeholder was too simple
export const PixelTrailImpl = React.forwardRef<HTMLDivElement, PixelTrailProps>(
  ({ pixelSize = 40, fadeDuration = 500, color, className, ...props }, ref) => {
    return (
      <PixelTrail
        ref={ref}
        pixelSize={pixelSize}
        fadeDuration={fadeDuration}
        color={color}
        className={cn("fixed inset-0", className)}
        {...props}
      />
    )
  }
)
