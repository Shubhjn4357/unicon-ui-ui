export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  label?: string
  badge?: string
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export const siteConfig = {
  name: "Unicorn UI",
  description:
    "150+ free and open-source animated components built with React, TypeScript, Tailwind CSS, and Framer Motion.",
  url: "https://unicorn-ui.com",
  github: "https://github.com/shubhjn/unicorn-ui",
  author: "Shubh Jain",
  links: {
    github: "https://github.com/shubhjn/unicorn-ui",
    twitter: "https://twitter.com/shubhjn",
  },
}

export const docsConfig: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Configuration", href: "/docs/configuration" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Backgrounds",
    items: [
      { title: "Animated Grid Pattern", href: "/docs/components/animated-grid-pattern" },
      { title: "Background Beams", href: "/docs/components/beams" },
      { title: "Dot Pattern", href: "/docs/components/dot-pattern" },
      { title: "Flickering Grid", href: "/docs/components/flickering-grid" },
      { title: "Grid Pattern", href: "/docs/components/grid-pattern" },
      { title: "Interactive Grid", href: "/docs/components/interactive-grid-pattern" },
      { title: "Retro Grid", href: "/docs/components/retro-grid" },
      { title: "Ripple", href: "/docs/components/ripple" },
      { title: "Striped Pattern", href: "/docs/components/striped-pattern" },
      { title: "Warp Background", href: "/docs/components/warp-background" },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Animated List", href: "/docs/components/animated-list" },
      { title: "Avatar Circles", href: "/docs/components/avatar-circles" },
      { title: "Bento Grid", href: "/docs/components/bento-grid" },
      { title: "Dotted Map", href: "/docs/components/dotted-map" },
      { title: "Globe", href: "/docs/components/globe" },
      { title: "Hero Video Dialog", href: "/docs/components/hero-video-dialog" },
      { title: "Icon Cloud", href: "/docs/components/icon-cloud" },
      { title: "Lens", href: "/docs/components/lens" },
      { title: "Marquee", href: "/docs/components/marquee" },
      { title: "Orbiting Circles", href: "/docs/components/orbiting-circles" },
      { title: "Pointer", href: "/docs/components/pointer" },
      { title: "Progressive Blur", href: "/docs/components/progressive-blur" },
      { title: "Smooth Cursor", href: "/docs/components/smooth-cursor" },
      { title: "Spotlight Card", href: "/docs/components/spotlight-card" },
      { title: "Terminal", href: "/docs/components/terminal" },
      { title: "Tweet Card", href: "/docs/components/tweet-card" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Modal / Dialog", href: "/docs/components/modal" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Smart Input", href: "/docs/components/smart-input" },
      { title: "Status Icon", href: "/docs/components/status-icon" },
      { title: "Switch", href: "/docs/components/switch" },
    ],
  },
  {
    title: "Buttons",
    items: [
      { title: "Interactive Hover Button", href: "/docs/components/interactive-hover-button" },
      { title: "Pulsating Button", href: "/docs/components/pulsating-button" },
      { title: "Rainbow Button", href: "/docs/components/rainbow-button" },
      { title: "Ripple Button", href: "/docs/components/ripple-button" },
      { title: "Shimmer Button", href: "/docs/components/shimmer-button" },
      { title: "Shiny Button", href: "/docs/components/shiny-button" },
    ],
  },
  {
    title: "Text Effects",
    items: [
      { title: "Animated Gradient Text", href: "/docs/components/animated-gradient-text" },
      { title: "Animated Shiny Text", href: "/docs/components/animated-shiny-text" },
      { title: "Aurora Text", href: "/docs/components/aurora-text" },
      { title: "Blur Fade", href: "/docs/components/blur-fade" },
      { title: "Comic Text", href: "/docs/components/comic-text" },
      { title: "Hyper Text", href: "/docs/components/hyper-text" },
      { title: "Line Shadow Text", href: "/docs/components/line-shadow-text" },
      { title: "Morphing Text", href: "/docs/components/morphing-text" },
      { title: "Number Ticker", href: "/docs/components/number-ticker" },
      { title: "Scroll Based Velocity", href: "/docs/components/scroll-based-velocity" },
      { title: "Sparkles Text", href: "/docs/components/sparkles-text" },
      { title: "Spinning Text", href: "/docs/components/spinning-text" },
      { title: "Text Animate", href: "/docs/components/text-animate" },
      { title: "Text Highlighter", href: "/docs/components/text-highlighter" },
      { title: "Text Reveal", href: "/docs/components/text-reveal" },
      { title: "Typing Animation", href: "/docs/components/typing-animation" },
      { title: "Video Text", href: "/docs/components/video-text" },
      { title: "Word Rotate", href: "/docs/components/word-rotate" },
    ],
  },
  {
    title: "Special Effects",
    items: [
      { title: "Animated Beam", href: "/docs/components/animated-beam" },
      {
        title: "Animated Circular Progress",
        href: "/docs/components/animated-circular-progress-bar",
      },
      { title: "Animated Theme Toggler", href: "/docs/components/animated-theme-toggler" },
      { title: "Border Beam", href: "/docs/components/border-beam" },
      { title: "Code Comparison", href: "/docs/components/code-comparison" },
      { title: "Command Menu", href: "/docs/components/command-menu" },
      { title: "Confetti", href: "/docs/components/confetti" },
      { title: "Cool Mode", href: "/docs/components/cool-mode" },
      { title: "File Tree", href: "/docs/components/file-tree" },
      { title: "Magic Card", href: "/docs/components/magic-card" },
      { title: "Meteors", href: "/docs/components/meteors" },
      { title: "Neon Gradient Card", href: "/docs/components/neon-gradient-card" },
      { title: "Particles", href: "/docs/components/particles" },
      { title: "Pixel Image", href: "/docs/components/pixel-image" },
      { title: "Scroll Progress", href: "/docs/components/scroll-progress" },
      { title: "Shine Border", href: "/docs/components/shine-border" },
    ],
  },
  {
    title: "Mocks",
    items: [
      { title: "Android", href: "/docs/components/android" },
      { title: "iPhone", href: "/docs/components/iphone" },
      { title: "Safari", href: "/docs/components/safari" },
    ],
  },
]

// Flatten all nav items for search
export const allNavItems = docsConfig.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    category: group.title,
  }))
)
