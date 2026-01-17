# 🦄 Unicorn UI

A 2026-native component library built with **zero external UI dependencies**. Leverages modern browser APIs (Popover API, Dialog Element, CSS Anchor Positioning) for maximum performance and minimal bundle size.

## ✨ Features

- **🌐 Native Browser APIs**: Uses Popover API, Dialog element, and modern CSS features
- **⚡ Zero Runtime Overhead**: Tailwind CSS v4 with Rust-based compilation
- **🎨 Beautiful by Default**: "Nature Distilled" theme with dark mode support
- **♿ Accessible**: Built with ARIA best practices and keyboard navigation
- **📦 Tree-shakeable**: Import only what you need
- **🎯 Type-safe**: Full TypeScript support

## 🚀 Quick Start

### Installation

```bash
pnpm add @unicorn-ui/ui framer-motion lucide-react
```

### Usage

```tsx
import { PopoverTrigger, PopoverContent, ThemeToggle } from '@unicorn-ui/ui';
import '@unicorn-ui/ui/styles';

function App() {
  return (
    <>
      <ThemeToggle />

      <PopoverTrigger targetId='my-popover'>Click me</PopoverTrigger>

      <PopoverContent id='my-popover'>
        Hello from native Popover API!
      </PopoverContent>
    </>
  );
}
```

## 📦 Components

### Core Primitives

- **Popover** - Native Popover API with automatic positioning
- **Modal** - Native Dialog element with focus trapping
- **StatusIcon** - Lucide icon wrapper with status indicators

### Layout Components

- **BentoGrid** - Modern grid layout with subgrid support
- **Marquee** - Infinite scrolling with GPU acceleration
- **SpotlightCard** - Interactive card with cursor-tracking gradient

### Agentic Components

- **CommandMenu** - Cmd+K interface with keyboard navigation
- **SmartInput** - Input with loading states and action slots
- **ThemeToggle** - Animated theme switcher with View Transitions API

### Animation

- **FadeIn** - Declarative animations with spring physics

## 🎨 Theming

```css
:root {
  --color-brand: hsl(142 76% 36%);
  --color-surface: hsl(30 12% 96%);
  --color-foreground: hsl(120 10% 10%);
}
```

Toggle dark mode programmatically or use the `ThemeToggle` component.

## 🏗️ Monorepo Structure

```
unicorn-ui/
├── packages/
│   └── ui/              # Core component library
└── apps/
    └── docs/            # Next.js documentation site
```

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start docs site
pnpm dev

# Build library
cd packages/ui
pnpm build
```

## Browser Support

- ✅ Chrome/Edge 114+
- ✅ Safari 17+
- ✅ Firefox 125+
- ⚠️ CSS Anchor Positioning: Chrome 127+, Safari 26.1+ (Firefox fallback included)

## 📝 License

MIT © 2026

## 🙏 Credits

Built with:

- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Biome](https://biomejs.dev)
