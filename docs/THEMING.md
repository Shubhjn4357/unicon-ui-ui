# 🎨 Theme Customization Guide

## Overview

Unicorn UI provides a comprehensive, **CSS variable-based theming system** that allows complete customization of:
- 🎨 **Colors** - Primary, secondary, accent palettes
- 📏 **Sizes** - Component dimensions (xs, sm, md, lg, xl, 2xl)
- 🔲 **Radius** - Border radius values (sm, md, lg, xl, full)
- ✨ **Design Styles** - Clay, Glass, Liquid, Skeu, Minimal
- 🎬 **Animations** - Duration and easing functions
- 📝 **Typography** - Font families and sizes

All theming is **runtime-dynamic** - change variables and see instant updates across your entire application.

## Quick Start

### 1. Import Styles

```tsx
// app/layout.tsx
import '@unicorn-ui/ui/dist/styles.css'
```

### 2. Customize Variables

```css
/* app/globals.css */
:root {
  /* Override default colors */
  --primary: 220 90% 56%;
  --radius: 1rem;
}
```

### 3. Use Design Styles

```tsx
import { DesignStyleProvider } from '@unicorn-ui/ui'

export default function RootLayout({ children }) {
  return (
    <DesignStyleProvider defaultStyle="glass">
      {children}
    </DesignStyleProvider>
  )
}
```

## CSS Variables Reference

### Color Tokens

All colors use HSL format for easy manipulation:

```css
:root {
  /* Base Colors */
  --background: 0 0% 100%;        /* Page background */
  --foreground: 0 0% 3.9%;        /* Main text color */
  
  /* Component Colors */
  --card: 0 0% 100%;              /* Card backgrounds */
  --card-foreground: 0 0% 3.9%;   /* Card text */
  --popover: 0 0% 100%;           /* Popover background */
  --popover-foreground: 0 0% 3.9%;
  
  /* Brand Colors */
  --primary: 0 0% 9%;             /* Primary brand color */
  --primary-foreground: 0 0% 98%; /* Text on primary */
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  
  /* Semantic Colors */
  --destructive: 0 84.2% 60.2%;   /* Error/danger */
  --destructive-foreground: 0 0% 98%;
  --muted: 0 0% 96.1%;            /* Muted elements */
  --muted-foreground: 0 0% 45.1%;
  
  /* UI Elements */
  --border: 0 0% 89.8%;           /* Border color */
  --input: 0 0% 89.8%;            /* Input borders */
  --ring: 0 0% 3.9%;              /* Focus rings */
}

.dark {
  /* Dark mode overrides */
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... other dark mode values */
}
```

### Size Tokens

```css
:root {
  --size-xs: 0.5rem;    /* 8px */
  --size-sm: 0.75rem;   /* 12px */
  --size-md: 1rem;      /* 16px */
  --size-lg: 1.25rem;   /* 20px */
  --size-xl: 1.5rem;    /* 24px */
  --size-2xl: 2rem;     /* 32px */
}
```

### Radius Tokens

```css
:root {
  --radius: 0.5rem;         /* Default radius */
  --radius-sm: 0.25rem;     /* 4px */
  --radius-md: 0.5rem;      /* 8px */
  --radius-lg: 0.75rem;     /* 12px */
  --radius-xl: 1rem;        /* 16px */
  --radius-2xl: 1.5rem;     /* 24px */
  --radius-full: 9999px;    /* Fully rounded */
}
```

### Animation Tokens

```css
:root {
  /* Duration */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* Easing Functions */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-bounce: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

## Design System Styles

Unicorn UI includes 5 global design styles that transform the look of all components.

### 1. Claymorphism (Clay)

Soft, extruded 3D effects with shadows:

```tsx
import { useDesignStyle } from '@unicorn-ui/ui'

function App() {
  const { setDesignStyle } = useDesignStyle()
  
  return (
    <button onClick={() => setDesignStyle('clay')}>
      Enable Clay Style
    </button>
  )
}
```

**CSS Variables:**
```css
:root {
  --clay-shadow-md: 10px 10px 20px rgba(0, 0, 0, 0.1), 
                    -10px -10px 20px rgba(255, 255, 255, 0.7);
  --clay-inset-md: inset 6px 6px 12px rgba(0, 0, 0, 0.1), 
                   inset -6px -6px 12px rgba(255, 255, 255, 0.7);
}
```

### 2. Glassmorphism (Glass)

Frosted glass with backdrop blur:

```tsx
<DesignStyleProvider defaultStyle="glass">
  <App />
</DesignStyleProvider>
```

**CSS Variables:**
```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  --glass-blur: 16px;
}
```

### 3. Liquid Glass

Animated gradient blobs with blur:

```tsx
setDesignStyle('liquid-glass')
```

### 4. Skeuomorphism (Skeu)

Realistic 3D with gradients and highlights:

```tsx
setDesignStyle('skeu')
```

**CSS Variables:**
```css
:root {
  --skeu-highlight: rgba(255, 255, 255, 0.9);
  --skeu-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
```

### 5. Minimalism (Minimal)

Clean, flat design with sharp borders:

```tsx
setDesignStyle('minimal')
```

## Complete Customization Example

```css
/* app/globals.css */
@import '@unicorn-ui/ui/dist/styles.css';

:root {
  /* === BRAND COLORS === */
  --primary: 262 83% 58%;          /* Purple */
  --primary-foreground: 0 0% 100%;
  --secondary: 220 14% 96%;
  --accent: 340 82% 52%;           /* Pink accent */
  
  /* === RADIUS === */
  --radius: 1.25rem;               /* More rounded */
  
  /* === SIZES === */
  --size-md: 1.125rem;             /* Slightly larger */
  
  /* === ANIMATIONS === */
  --duration-normal: 400ms;        /* Slower animations */
  --ease-in-out: cubic-bezier(0.68, -0.6, 0.32, 1.6);  /* Bounce */
  
  /* === CUSTOM DESIGN TOKENS === */
  --success: 142 71% 45%;
  --warning: 38 92% 50%;
  --info: 199 89% 48%;
}

.dark {
  --primary: 262 83% 68%;          /* Lighter in dark mode */
  --background: 222 47% 11%;       /* Dark blue background */
  --card: 222 47% 15%;
}

/* === CUSTOM UTILITY CLASSES === */
.success {
  background: hsl(var(--success));
  color: white;
}

.warning {
  background: hsl(var(--warning));
  color: white;
}
```

## Component-Specific Theming

### Buttons

```tsx
<Button 
  variant="default"    // default, destructive, outline, ghost
  size="md"           // sm, md, lg
  className="rounded-full"  // Override radius
>
  Click me
</Button>
```

### Cards

```tsx
<Card className="unicorn-card glass">
  {/* .unicorn-card applies design style */}
  {/* .glass applies glassmorphism */}
</Card>
```

### Inputs

```tsx
<Input 
  size="lg"
  className="rounded-xl border-2"
/>
```

## Dark Mode

### Using next-themes

```tsx
// app/providers.tsx
import { ThemeProvider } from 'next-themes'
import { DesignStyleProvider } from '@unicorn-ui/ui'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <DesignStyleProvider defaultStyle="glass">
        {children}
      </DesignStyleProvider>
    </ThemeProvider>
  )
}
```

### Toggle Dark Mode

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle {theme}
    </button>
  )
}
```

## Semantic Classes

All components support semantic classes that hook into the design system:

- `.unicorn-card` - Card-like components (Card, Dialog, Popover, Sheet)
- `.unicorn-button` - Button elements (Button, Badge)
- `.unicorn-input` - Input fields (Input, Textarea, Select)
- `.unicorn-switch` - Toggle switches
- `.unicorn-slider` - Range sliders
- `.unicorn-tabs-*` - Tab components

```tsx
<div className="unicorn-card">
  {/* Automatically adapts to active design style */}
</div>
```

## Advanced: Creating Custom Design Styles

You can extend the design system with your own styles:

```css
/* Custom "Neon" style */
body[data-design-style="neon"] .unicorn-card {
  background: rgba(0, 0, 0, 0.9);
  border: 2px solid hsl(var(--primary));
  box-shadow: 
    0 0 20px hsl(var(--primary) / 0.5),
    inset 0 0 20px hsl(var(--primary) / 0.1);
}

body[data-design-style="neon"] .unicorn-button {
  background: transparent;
  border: 2px solid hsl(var(--primary));
  color: hsl(var(--primary));
  text-shadow: 0 0 10px hsl(var(--primary));
  transition: all 0.3s;
}

body[data-design-style="neon"] .unicorn-button:hover {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  box-shadow: 0 0 30px hsl(var(--primary));
}
```

Then use it:

```tsx
const { setDesignStyle } = useDesignStyle()
setDesignStyle('neon')
```

## Responsive Theming

Use CSS custom properties with media queries:

```css
:root {
  --radius: 0.5rem;
}

@media (min-width: 768px) {
  :root {
    --radius: 1rem;  /* Larger radius on desktop */
  }
}
```

## Performance Tips

1. **Minimize rerenders**: Design style changes trigger CSS updates, not React rerenders
2. **Use semantic classes**: Let CSS handle styling instead of JavaScript
3. **Avoid inline styles**: Use CSS variables instead of dynamic inline styles
4. **Leverage caching**: CSS variables are cached by the browser

## Color Palette Generator

Generate HSL values from hex:

```typescript
function hexToHSL(hex: string) {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  
  // Calculate HSL
  // ... conversion logic
  
  return `${h} ${s}% ${l}%`
}

// Usage
const primary = hexToHSL('#7C3AED')  // => "262 83% 58%"
```

## TypeScript Support

Theme types are fully typed:

```typescript
import type { DesignStyle } from '@unicorn-ui/ui'

const style: DesignStyle = 'glass'  // 'clay' | 'glass' | 'liquid-glass' | 'skeu' | 'minimal' | 'none'
```

## Further Reading

- [STRUCTURE.md](./STRUCTURE.md) - Package organization
- [ANIMATIONS.md](./ANIMATIONS.md) - Animation system
- [design-system.css](../src/styles/design-system.css) - Source CSS
