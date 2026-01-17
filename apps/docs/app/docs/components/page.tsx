"use client"

import { MagicCard } from "@unicorn-ui/ui"
import Link from "next/link"

const components = [
  {
    title: "Animated Beam",
    href: "/docs/components/animated-beam",
    description: "A beam of light that travels along a path.",
  },
  {
    title: "Border Beam",
    href: "/docs/components/border-beam",
    description: "A beam of light that travels along the border of a container.",
  },
  {
    title: "Button",
    href: "/docs/components/button",
    description: "Interactive button component.",
  },
  {
    title: "Marquee",
    href: "/docs/components/marquee",
    description: "Infinite scrolling text or content.",
  },
  {
    title: "Bento Grid",
    href: "/docs/components/bento-grid",
    description: "Grid layout for displaying content.",
  },
  {
    title: "Particles",
    href: "/docs/components/particles",
    description: "Interactive background particles.",
  },
  {
    title: "Meteors",
    href: "/docs/components/meteors",
    description: "Meteor shower background effect.",
  },
  { title: "Dock", href: "/docs/components/dock", description: "macOS-like dock component." },
  { title: "Globe", href: "/docs/components/globe", description: "Interactive 3D globe." },
  { title: "Ripple", href: "/docs/components/ripple", description: "Water ripple click effect." },
  {
    title: "Shimmer Button",
    href: "/docs/components/shimmer-button",
    description: "Button with shimmer effect.",
  },
  {
    title: "Magic Card",
    href: "/docs/components/magic-card",
    description: "Card with spotlight effect.",
  },
  {
    title: "Number Ticker",
    href: "/docs/components/number-ticker",
    description: "Animated number counter.",
  },
  {
    title: "Word Rotate",
    href: "/docs/components/word-rotate",
    description: "Rotating words animation.",
  },
  {
    title: "Blur Fade",
    href: "/docs/components/blur-fade",
    description: "Blur fade in animation.",
  },
  {
    title: "Typing Animation",
    href: "/docs/components/typing-animation",
    description: "Typewriter effect for text.",
  },
]

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-10 py-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Components</h1>
        <p className="text-xl text-foreground-secondary">
          Here you can find all the components available in the library.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link key={component.href} href={component.href} className="group block h-full">
            <MagicCard
              className="h-full p-6 transition-all hover:scale-[1.02] flex flex-col justify-between"
              gradientColor="#D9D9D955"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">
                  {component.title}
                </h3>
                <p className="text-sm text-foreground-secondary">{component.description}</p>
              </div>
            </MagicCard>
          </Link>
        ))}
      </div>
    </div>
  )
}
