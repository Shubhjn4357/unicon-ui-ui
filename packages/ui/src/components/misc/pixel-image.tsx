"use client"

import type React from "react"
import { useEffect, useRef } from "react"

import { cn } from "../../lib/utils"

interface PixelImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  pixelSize?: number
}

export const PixelImage = ({ className, src, pixelSize = 10, ...props }: PixelImageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !src) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "Anonymous"
    img.src = src

    img.onload = () => {
      // 1. Calculate new dimensions based on pixelSize
      const w = img.width
      const h = img.height

      // Set canvas size to match image
      canvas.width = w
      canvas.height = h

      // 2. Turn off image smoothing
      ctx.imageSmoothingEnabled = false

      // 3. Draw small image
      const scaledW = w / pixelSize
      const scaledH = h / pixelSize

      // Draw image scaled down
      ctx.drawImage(img, 0, 0, scaledW, scaledH)

      // 4. Draw image scaled back up
      ctx.drawImage(canvas, 0, 0, scaledW, scaledH, 0, 0, w, h)
    }
  }, [src, pixelSize])

  return <canvas ref={canvasRef} className={cn("h-auto w-full", className)} {...(props as any)} />
}
