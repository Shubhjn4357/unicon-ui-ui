# Component Documentation Guide

## Overview
This guide explains the component documentation system and how to add new components.

## Documentation Files

### `component-docs.tsx`
Main documentation registry containing **all** component definitions. Each entry includes:
- `slug`: URL-friendly identifier
- `title`: Display name
- `category`: Component category (Core, Buttons, Text, etc.)
- `description`: Brief explanation
- `component`: Demo component reference
- `props`: Array of prop definitions with types and controls
- `stories`: Example configurations

### `supplementary-docs.tsx` NEW!
Contains **50+ additional component entries** ready to be merged into `component-docs.tsx`.

**Components included:**
- **Button Variants (11):** ShimmerButton, RainbowButton, MagneticButton, PulsatingButton, ShinyButton, GooeyButton, Interactive HoverButton, CreepyButton, GlowButton, RippleButton, AnimatedButton
- **Text Effects (20):** WavyText, GradualSpacing, LetterPullup, BoxReveal, TextReveal, SeparateAway, Rotate Text, SpinningText, FlipText3D, TextAnimate, AnimatedNumber, TextHighlighter, ComicText, AuroraText, AnimatedShinyText, BlurFade, LineShadowText, VideoText, ScrollBasedVelocity
- **Special Effects (17):** Particles, Confetti, BorderBeam, MagicCard, Meteors, Spotlight, AnimatedBeam, 3DCard, ShineBorder, RippleEffect, GlitchEffect, Magnifier, CanvasSmudge, Scene3D, ParticleImage, Gravity

## How to Merge Supplementary Docs

### Option 1: Automatic Merge (Recommended)
```bash
# Run the merge script (to be created)
pnpm merge-docs
```

### Option 2: Manual Merge
1. Open `src/data/supplementary-docs.tsx`
2. Copy the `supplementaryComponents` array content
3. Open `src/data/component-docs.tsx`
4. Find the `export const components: ComponentDoc[] = [` array
5. Insert the copied entries before the closing `]`
6. Organize by category (Core, Buttons, Text, Backgrounds, Special, etc.)

### Option 3: Import and Spread
In `component-docs.tsx`:
```typescript
import { supplementaryComponents } from './supplementary-docs'

export const components: ComponentDoc[] = [
  // ... existing components
  ...supplementaryComponents, // Add all supplementary docs
]
```

## Component Categories

| Category | Description | Count |
|----------|-------------|-------|
| Core | Essential UI components | 20 |
| Buttons | Button variants with effects | 11 |
| Text | Typography and text animations | 30+ |
| Backgrounds | Animated backgrounds | 14 |
| Layout | Layout components and utilities | 29 |
| Special | Advanced effects and 3D | 20+ |
| Feedback | User feedback components | 7 |
| Interaction | Interactive components | 3 |
| Animation | Animation primitives | 3 |

**Total: 131+ Components**

## Adding New Components

### Step 1: Create Component File
```typescript
// src/components/buttons/new-button.tsx
export interface NewButtonProps {
  children: React.ReactNode
  className?: string
  // ... other props
}

export const NewButton: React.FC<NewButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={cn("base-styles", className)} {...props}>
      {children}
    </button>
  )
}
```

### Step 2: Export from Index
```typescript
// src/index.ts
export { NewButton } from "./components/buttons/new-button"
```

### Step 3: Add Documentation Entry
```typescript
// src/data/component-docs.tsx
{
  slug: "new-button",
  title: "New Button",
  category: "Buttons",
  description: "Button with new amazing effect",
  component: () => null, // Or reference Demo component
  props: [
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "New Button",
      control: { type: "text" }
    },
    {
      name: "className",
      type: "string",
      defaultValue: "",
      control: { type: "text" }
    },
  ],
  stories: [
    { name: "Default", args: { children: "New Button" } },
    { name: "Custom", args: { children: "Custom", className: "custom-class" } },
  ],
},
```

### Step 4: Create Demo (Optional)
```typescript
// src/data/demos.tsx
export function NewButtonDemo() {
  return <NewButton>Demo Button</NewButton>
}
```

## Documentation Best Practices

### 1. **Props Definition**
- Include ALL component props
- Specify accurate TypeScript types
- Provide sensible default values
- Use appropriate control types:
  - `text` - String inputs
  - `number` - Numeric values
  - `boolean` - Toggles
  - `select` - Dropdowns
  - `color` - Color pickers

### 2. **Stories**
- Create at least 2-3 stories per component
- Cover common use cases
- Demonstrate key features
- Show variant differences

### 3. **Descriptions**
- Keep concise (< 100 characters)
- Explain the primary purpose
- Mention key features
- Use action-oriented language

### 4. **Categories**
Assign components to the correct category:
- **Core**: Buttons, Inputs, Cards, Dialogs
- **Buttons**: Special button variants
- **Text**: Typography and text effects
- **Backgrounds**: Animated backgrounds/patterns
- **Layout**: Structural components
- **Special**: 3D, particles, advanced effects
- **Feedback**: Toasts, loaders, skeletons
- **Interaction**: Cursors, drag-drop, gestures
- **Animation**: Animation primitives

## Current Status

✅ **Documented:** ~80 components in component-docs.tsx
✅ **Ready to Merge:** 50+ components in supplementary-docs.tsx
📊 **Total Available:** 131+ components

## Next Steps

1. ✅ Merge supplementary-docs.tsx into component-docs.tsx
2. Create demo components for undocumented entries
3. Test all documentation pages
4. Verify search functionality
5. Deploy documentation site

## Verification

```bash
# Type check
pnpm typecheck

# Build package
pnpm build:package

# Build docs
pnpm build:docs

# Run dev server
pnpm dev
```

## Resources

- [Component Docs Source](./component-docs.tsx)
- [Supplementary Docs Source](./supplementary-docs.tsx)
- [Main Documentation](/docs)
- [CLI Documentation](/docs/cli)
- [Theming Guide](../../docs/THEMING.md)
- [Animation Guide](../../docs/ANIMATIONS.md)

---

**Package:** @unicorn-ui/ui  
**Version:** 0.2.0  
**License:** MIT
