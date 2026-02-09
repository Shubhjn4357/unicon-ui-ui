"use client"

import { cn } from "@/index"
import {LenisOptions} from "lenis"
import { ReactLenis } from "lenis/react"
import type React from "react"

export const SmoothScroll = ({
  children,
  root=true,
  options={
    allowNestedScroll:true
  },
  className
}: {
  children: React.ReactNode
  className?:string
  root?: boolean
    options?:LenisOptions
}) => {
  const {content,...props}=options
  return (
    <ReactLenis root={root} {...props} className={cn("h-full",className)}>
      {children}
    </ReactLenis>
  )
}
SmoothScroll.displayName = "SmoothScroll"
