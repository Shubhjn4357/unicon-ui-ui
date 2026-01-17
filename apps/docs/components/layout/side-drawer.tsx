"use client"

import { cn } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

// Define structure for navigation items
interface NavItem {
  title: string
  href: string
  disabled?: boolean
  label?: string
}

interface NavGroup {
  title: string
  items: NavItem[]
}

const docsConfig: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Bento Grid", href: "/docs/components/bento-grid" },
      { title: "Marquee", href: "/docs/components/marquee" },
      { title: "Retro Grid", href: "/docs/components/retro-grid" },
      { title: "Flickering Grid", href: "/docs/components/flickering-grid" },
      { title: "Animated Grid Pattern", href: "/docs/components/animated-grid-pattern" },
      { title: "Grid Pattern", href: "/docs/components/grid-pattern" },
      { title: "Dot Pattern", href: "/docs/components/dot-pattern" },
      { title: "Ripple", href: "/docs/components/ripple" },
      { title: "Striped Pattern", href: "/docs/components/striped-pattern" },
      { title: "Interactive Grid", href: "/docs/components/interactive-grid-pattern" },
      { title: "Background Beams", href: "/docs/components/beams" },
      { title: "Warp Background", href: "/docs/components/warp-background" },
      { title: "Terminal", href: "/docs/components/terminal" },
      { title: "Hero Video Dialog", href: "/docs/components/hero-video-dialog" },
      { title: "Animated List", href: "/docs/components/animated-list" },
      { title: "Globe", href: "/docs/components/globe" },
      { title: "Tweet Card", href: "/docs/components/tweet-card" },
      { title: "Orbiting Circles", href: "/docs/components/orbiting-circles" },
      { title: "Avatar Circles", href: "/docs/components/avatar-circles" },
      { title: "Icon Cloud", href: "/docs/components/icon-cloud" },
      { title: "Lens", href: "/docs/components/lens" },
      { title: "Pointer", href: "/docs/components/pointer" },
      { title: "Smooth Cursor", href: "/docs/components/smooth-cursor" },
      { title: "Progressive Blur", href: "/docs/components/progressive-blur" },
      { title: "Dotted Map", href: "/docs/components/dotted-map" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Animated Beam", href: "/docs/components/animated-beam" },
      { title: "Border Beam", href: "/docs/components/border-beam" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Rainbow Button", href: "/docs/components/rainbow-button" },
      { title: "Shimmer Button", href: "/docs/components/shimmer-button" },
      { title: "Ripple Button", href: "/docs/components/ripple-button" },
      { title: "Shiny Button", href: "/docs/components/shiny-button" },
      { title: "Pulsating Button", href: "/docs/components/pulsating-button" },
      { title: "Interactive Hover Button", href: "/docs/components/interactive-hover-button" },
      { title: "Dialog / Modal", href: "/docs/components/modal" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Smart Input", href: "/docs/components/smart-input" },
      { title: "Hyper Text", href: "/docs/components/hyper-text" },
      { title: "Meteors", href: "/docs/components/meteors" },
      { title: "Shine Border", href: "/docs/components/shine-border" },
      { title: "Magic Card", href: "/docs/components/magic-card" },
      { title: "Confetti", href: "/docs/components/confetti" },
      { title: "Particles", href: "/docs/components/particles" },
      { title: "File Tree", href: "/docs/components/file-tree" },
      { title: "Code Comparison", href: "/docs/components/code-comparison" },
      { title: "Scroll Progress", href: "/docs/components/scroll-progress" },
      { title: "Neon Gradient Card", href: "/docs/components/neon-gradient-card" },
      { title: "Comic Text", href: "/docs/components/comic-text" },
      { title: "Cool Mode", href: "/docs/components/cool-mode" },
      { title: "Pixel Image", href: "/docs/components/pixel-image" },
      {
        title: "Animated Circular Progress",
        href: "/docs/components/animated-circular-progress-bar",
      },
      { title: "Animated Theme Toggler", href: "/docs/components/animated-theme-toggler" },
      { title: "Spotlight Card", href: "/docs/components/spotlight-card" },
      { title: "Status Icon", href: "/docs/components/status-icon" },
      { title: "Typing Animation", href: "/docs/components/typing-animation" },
      { title: "Blur Fade", href: "/docs/components/blur-fade" },
      { title: "Text Animate", href: "/docs/components/text-animate" },
      { title: "Number Ticker", href: "/docs/components/number-ticker" },
      { title: "Animated Shiny Text", href: "/docs/components/animated-shiny-text" },
      { title: "Animated Gradient Text", href: "/docs/components/animated-gradient-text" },
      { title: "Word Rotate", href: "/docs/components/word-rotate" },
      { title: "Scroll Based Velocity", href: "/docs/components/scroll-based-velocity" },
      { title: "Text Reveal", href: "/docs/components/text-reveal" },
      { title: "Sparkles Text", href: "/docs/components/sparkles-text" },
      { title: "Text Highlighter", href: "/docs/components/text-highlighter" },
      { title: "Line Shadow Text", href: "/docs/components/line-shadow-text" },
      { title: "Aurora Text", href: "/docs/components/aurora-text" },
      { title: "Video Text", href: "/docs/components/video-text" },
      { title: "Morphing Text", href: "/docs/components/morphing-text" },
      { title: "Spinning Text", href: "/docs/components/spinning-text" },
      { title: "Command Menu", href: "/docs/components/command-menu" },
      { title: "Safari", href: "/docs/components/safari" },
      { title: "iPhone", href: "/docs/components/iphone" },
      { title: "Android", href: "/docs/components/android" },
    ],
  },
]

export function SideDrawer() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-border/40 bg-surface/50 backdrop-blur-xl md:sticky md:block md:w-64 lg:w-72">
      <div className="h-full py-6 pr-6 pl-8 lg:py-8">
        <div className="w-full">
          {docsConfig.map((group, index) => (
            <div key={index} className="pb-8">
              <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
                {group.title}
              </h4>
              <div className="grid grid-flow-row auto-rows-max text-sm relative border-l border-border/50 ml-2 pl-2">
                {group.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 transition-colors hover:text-foreground",
                      item.disabled && "cursor-not-allowed opacity-60",
                      pathname === item.href
                        ? "font-medium text-brand"
                        : "text-foreground-secondary"
                    )}
                  >
                    {pathname === item.href && (
                      <motion.div
                        layoutId="active-nav-item"
                        className="absolute left-0 w-[2px] h-4 bg-brand rounded-r-full -ml-[9px] shadow-[0_0_8px_0_var(--color-brand)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
