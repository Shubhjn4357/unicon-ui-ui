"use client"

import type React from "react"
import { Footer } from "./footer"
import { TopNav } from "./top-nav"
import { ScrollToTop } from "../scroll-to-top"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-surface">
      <TopNav />
      <div className="flex-1">{children}</div>
      <ScrollToTop />
    </div>
  )
}
