# 📁 Package Structure

## Overview

Unicorn UI is organized as a **dual-purpose repository**:
- **Package** (`src/`) - Published to npm as `@unicorn-ui/ui`
- **Documentation** (`app/`) - Next.js site for interactive demos

## Directory Structure

```
unicorn-ui/
├── src/                    # 📦 Published Package Source
│   ├── components/         # All UI components
│   │   ├── core/          # Basic components (Button, Input, Card, etc.)
│   │   ├── animation/     # Animation wrappers
│   │   ├── backgrounds/   # Background effects (Aurora, Grid, Beams, etc.)
│   │   ├── buttons/       # Button variants (Shimmer, Rainbow, Glow, etc.)
│   │   ├── feedback/      # Feedback components (Loaders, Toggles, etc.)
│   │   ├── layout/        # Layout components (Dock, Marquee, Grid, etc.)
│   │   ├── text/          # Text effects (Gradient, Animated, Morphing, etc.)
│   │   └── special/       # 3D, particles, effects (Confetti, Meteors, etc.)
│   ├── hooks/             # React hooks (useDesignStyle, useMediaQuery, etc.)
│   ├── lib/               # Utilities (cn for classname merging)
│   ├── styles/            # Global styles & design system
│   │   ├── design-system.css    # Theme variables & design tokens
│   │   └── globals.css          # Base styles
│   ├── cli/               # CLI tools for component installation
│   ├── registry/          # Component metadata & registry
│   └── index.ts           # Main entry point (all exports)
│
├── app/                    # 📚 Documentation Site (Next.js)
│   ├── components/        # Doc-specific components
│   ├── docs/              # Documentation pages
│   ├── showcase/          # Component showcase pages
│   ├── layout.tsx         # App layout
│   └── page.tsx           # Homepage
│
├── scripts/                # 🛠️ Development Scripts
│   ├── create-component.js    # Scaffold new components
│   ├── update-exports.js      # Update index.ts exports
│   ├── verify-build.js        # Verify build output
│   └── generate-docs.js       # Generate documentation
│
├── public/                 # Static assets
├── dist/                   # 📤 Build Output (gitignored)
│   ├── index.js           # CommonJS bundle
│   ├── index.mjs          # ES Module bundle
│   ├── index.d.ts         # TypeScript declarations
│   └── styles.css         # Bundled styles
│
└── [Config Files]          # Root configuration files
```

## What Gets Published to npm?

When you install `@unicorn-ui/ui`, you get:

```
@unicorn-ui/ui/
├── dist/
│   ├── index.js           # CommonJS entry
│   ├── index.mjs          # ESM entry
│   ├── index.d.ts         # TypeScript types
│   ├── styles.css         # All styles
│   └── cli/               # CLI tools
├── README.md
└── CHANGELOG.md
```

**Bundle Sizes:**
- ESM: ~236 KB (gzipped)
- CJS: ~251 KB (gzipped)
- CSS: ~59 KB

## Component Organization

### Core Components (16)
Essential building blocks for any UI:
- `Button`, `Card`, `Input`, `Badge`, `Switch`, `Slider`
- `Dialog`, `Popover`, `Tabs`, `Accordion`, `Select`, `Table`
- `Checkbox`, `RadioGroup`, `Progress`, `Avatar`

### Animation Components (1)
- `FadeIn` - Fade-in animation wrapper

### Background Components (14)
Visual effects for backgrounds:
- `AuroraBackground`, `GridPattern`, `DotPattern`
- `BackgroundBeams`, `ShootingStars`, `Meteors`
- `RetroGrid`, `Ripple`, `FlickeringGrid`

### Button Variants (12)
Enhanced button styles:
- `ShimmerButton`, `RainbowButton`, `GlowButton`
- `RippleButton`, `MagneticButton`, `PulsatingButton`
- `ShinyButton`, `AnimatedButton`, `GooeyButton`

### Text Effects (30+)
Animated and styled text:
- `AnimatedGradientText`, `TypewriterEffect`, `FlipText`
- `MorphingText`, `GradualSpacing`, `SparklesText`
- `NumberTicker`, `BlurText`, `WavyText`

### Layout Components (29)
Complex layout patterns:
- `BentoGrid`, `Marquee`, `Dock`, `Sheet`
- `AnimatedList`, `Terminal`, `TweetCard`
- `SpotlightCard`, `ExpandableCard`

### Special Components (16)
3D, particles, and unique effects:
- `Scene3D`, `Confetti`, `Particles`
- `BorderBeam`, `MagicCard`, `Spotlight`
- `Meteors`, `RippleEffect`, `GlitchEffect`

## Import Pattern

```tsx
// Named imports (recommended for tree-shaking)
import { Button, Card, AnimatedGradientText } from '@unicorn-ui/ui'

// Import styles once in your root layout
import '@unicorn-ui/ui/dist/styles.css'
```

## Source Code Organization

### Component Structure
Each component follows this pattern:

```tsx
// src/components/[category]/component-name.tsx
"use client"  // If uses client-side features

import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface ComponentProps {
  // Props with full TypeScript types
}

export function Component({ ...props }: ComponentProps) {
  // Implementation
}
```

### Hook Structure
```tsx
// src/hooks/use-feature.tsx
export function useFeature() {
  // Hook implementation
}
```

## CLI Tools

The package includes CLI tools accessible via `npx`:

```bash
# Add a component to your project
npx @unicorn-ui/ui add button

# List available components
npx @unicorn-ui/ui list
```

## Development Structure

### Scripts Directory
- `create-component.js` - Scaffolds new components with boilerplate
- `update-exports.js` - Auto-updates `src/index.ts` with new exports
- `verify-build.js` - Validates build output
- `generate-docs.js` - Generates component documentation

### Registry System
Component metadata stored in `src/registry/`:
- `component-metadata.json` - Props, types, dependencies
- `enhanced-registry.ts` - Client-side registry API
- `registry-types.ts` - TypeScript types

## Build Process

```bash
# Development
pnpm dev              # Run docs + watch package
pnpm dev:package      # Watch package only

# Production
pnpm build:package    # Build npm package → dist/
pnpm build:docs       # Build documentation → .next/

# Publishing
pnpm release          # Build + publish to npm
```

## Configuration Files

### TypeScript
- `tsconfig.json` - Main TypeScript config
- `tsconfig.build.json` - Build-specific config (excludes tests, docs)

### Build Tools
- `tsup.config.ts` - Package bundler (ESM + CJS + types)
- `next.config.mjs` - Next.js config for docs
- `tailwind.config.ts` - Tailwind CSS configuration

### Quality
- `biome.json` - Linter & formatter config
- `vitest.config.ts` - Test runner config

### Versioning
- `.changeset/` - Changesets for semantic versioning
- `CHANGELOG.md` - Auto-generated version history

## Best Practices

### Adding a New Component
1. Create component file: `src/components/[category]/my-component.tsx`
2. Run `pnpm update-exports` to add to `index.ts`
3. Add to registry: `src/registry/component-metadata.json`
4. Build: `pnpm build:package`

### Importing Components
```tsx
// ✅ Good - Tree-shakeable
import { Button, Card } from '@unicorn-ui/ui'

// ❌ Avoid - Imports everything
import * as UI from '@unicorn-ui/ui'
```

### Styling
```tsx
// Use Tailwind + design system classes
<Button className="unicorn-button bg-primary">
  Click me
</Button>
```

## Package vs Documentation

| Feature | Package (`src/`) | Docs (`app/`) |
|---------|-----------------|---------------|
| Purpose | Published to npm | Interactive demos |
| Build | `tsup` → `dist/` | `next build` → `.next/` |
| Deploy | npm registry | GitHub Pages/Vercel |
| Users | Developers | Everyone |

## Further Reading

- [THEMING.md](./THEMING.md) - Theme customization guide
- [ANIMATIONS.md](./ANIMATIONS.md) - Animation system guide
- [README.md](../README.md) - Main documentation
- [DEPLOYMENT.md](../DEPLOYMENT.md) - Publishing guide
