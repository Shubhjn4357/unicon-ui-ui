# 🎬 Animation System Guide

## Overview

Unicorn UI includes a powerful, **multi-library animation system** that provides:
- 🎭 **Framer Motion** - High-level declarative animations
- 🎨 **GSAP** - Professional timeline-based animations
- 🌐 **Three.js + R3F** - 3D graphics and WebGL
- 🌊 **Lenis** - Smooth scroll with momentum

All libraries are **pre-configured** and work seamlessly together.

## Available Animation Libraries

### 1. Framer Motion (Primary)

**Best for:** Component animations, gestures, layout animations

**Installation:** ✅ Already included

**Usage:**
```tsx
import { motion } from 'framer-motion'

function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      Animated content
    </motion.div>
  )
}
```

**Features:**
- Declarative animation syntax
- Layout animations (automatic)
- Gesture recognition (drag, hover, tap)
- SVG path animations
- Scroll-triggered animations
- Spring physics

**Common Patterns:**

```tsx
// Hover effect
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div
      key={item}
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>

// Layout animation
<motion.div layout>
  {/* Automatically animates position/size changes */}
</motion.div>
```

### 2. GSAP (Advanced)

**Best for:** Complex timelines, professional animations, scroll effects

**Installation:** ✅ Already included

**Usage:**
```tsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Example() {
  const boxRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 100,
      rotation: 360,
      duration: 1,
      ease: 'power2.out'
    })
  }, [])
  
  return <div ref={boxRef}>Animated box</div>
}
```

**Timeline Example:**
```tsx
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section',
      start: 'top center',
      end: 'bottom center',
      scrub: 1
    }
  })
  
  tl.from('.title', { opacity: 0, y: 100, duration: 1 })
    .from('.content', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
    .to('.hero', { scale: 1.2, duration: 1 })
}, [])
```

**Easing Functions:**
```typescript
gsap.to(element, {
  x: 100,
  ease: 'power2.out'      // Power eases
  // ease: 'elastic.out'  // Elastic
  // ease: 'bounce.out'   // Bounce
  // ease: 'back.out'     // Back
})
```

### 3. Three.js + React Three Fiber (3D)

**Best for:** 3D graphics, WebGL, interactive 3D scenes

**Installation:** ✅ Already included

**Basic Scene:**
```tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial color="hotpink" />
      </Box>
      <OrbitControls />
    </Canvas>
  )
}
```

**Animated 3D:**
```tsx
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function RotatingBox() {
  const meshRef = useRef()
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.5
  })
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  )
}
```

**Using Built-in Scene3D Component:**
```tsx
import { Scene3D } from '@unicorn-ui/ui'

function App() {
  return (
    <Scene3D 
      modelUrl="/models/robot.glb"
      autoRotate
      enableZoom
    />
  )
}
```

### 4. Lenis (Smooth Scroll)

**Best for:** Smooth scrolling with momentum

**Installation:** ✅ Already included

**Usage:**
```tsx
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    
    return () => lenis.destroy()
  }, [])
  
  return <div>{/* Your content */}</div>
}
```

## Animation Presets

### Duration Tokens
```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
}
```

```tsx
// In Framer Motion
<motion.div
  transition={{ duration: 0.3 }}  // or var(--duration-normal) in CSS
/>

// In GSAP
gsap.to(element, { duration: 0.3 })
```

### Easing Tokens
```css
:root {
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-bounce: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

## Component Animation Patterns

### Entrance Animations

**Fade In:**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>
```

**Slide In:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', stiffness: 100 }}
/>
```

**Scale In:**
```tsx
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: 'spring', bounce: 0.4 }}
/>
```

### Hover Animations

**Lift Effect:**
```tsx
<motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
/>
```

**Glow Effect:**
```tsx
<motion.button
  whileHover={{ 
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' 
  }}
/>
```

### Exit Animations

```tsx
import { AnimatePresence } from 'framer-motion'

function Modal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          Modal content
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

## Pre-built Animated Components

Unicorn UI includes ready-to-use animated components:

### Text Animations
```tsx
import { 
  AnimatedGradientText,
  TypewriterEffect,
  FlipText,
  MorphingText,
  WavyText,
  SparklesText
} from '@unicorn-ui/ui'

<AnimatedGradientText>Gradient text</AnimatedGradientText>
<TypewriterEffect text="Hello World" />
<FlipText word="Amazing" />
<WavyText text="Wave effect" />
```

### Button Animations
```tsx
import { 
  ShimmerButton,
  RippleButton,
  MagneticButton,
  GlowButton 
} from '@unicorn-ui/ui'

<ShimmerButton>Shimmer</ShimmerButton>
<RippleButton>Ripple</RippleButton>
<MagneticButton>Magnetic</MagneticButton>
```

### Background Effects
```tsx
import { 
  AuroraBackground,
  BackgroundBeams,
  Meteors,
  Particles 
} from '@unicorn-ui/ui'

<AuroraBackground />
<BackgroundBeams />
<Meteors number={20} />
<Particles quantity={100} />
```

## Scroll Animations

### With Framer Motion

```tsx
import { motion, useScroll, useTransform } from 'framer-motion'

function ParallaxSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  return (
    <motion.div style={{ y }}>
      Parallax content
    </motion.div>
  )
}
```

### With GSAP ScrollTrigger

```tsx
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

useEffect(() => {
  gsap.to('.box', {
    scrollTrigger: {
      trigger: '.box',
      start: 'top center',
      end: 'bottom top',
      scrub: true,
      markers: true  // Debug mode
    },
    x: 500,
    rotation: 360
  })
}, [])
```

## Performance Best Practices

### 1. Use GPU-Accelerated Properties
```tsx
// ✅ Good - GPU accelerated
<motion.div
  animate={{ x: 100, scale: 1.2, opacity: 0.5 }}
/>

// ❌ Avoid - triggers layout reflow
<motion.div
  animate={{ width: 200, height: 200, marginLeft: 50 }}
/>
```

### 2. Use will-change for Heavy Animations
```css
.animated-element {
  will-change: transform, opacity;
}
```

### 3. Debounce Scroll Listeners
```tsx
import { useEffect } from 'react'

useEffect(() => {
  let ticking = false
  
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Animation logic
        ticking = false
      })
      ticking = true
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

### 4. Reduce Motion for Accessibility
```tsx
import { useReducedMotion } from 'framer-motion'

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      animate={{ 
        x: shouldReduceMotion ? 0 : 100 
      }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.5 
      }}
    />
  )
}
```

## Combining Libraries

You can use multiple animation libraries together:

```tsx
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function HybridAnimation() {
  const ref = useRef()
  
  // Framer Motion for component animation
  // GSAP for complex timeline
  useEffect(() => {
    gsap.timeline()
      .to(ref.current, { rotation: 360, duration: 2 })
      .to(ref.current, { scale: 1.5, duration: 1 })
  }, [])
  
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -10 }}
    >
      Combined animation
    </motion.div>
  )
}
```

## Advanced: Custom Spring Physics

```tsx
const spring = {
  type: 'spring',
  stiffness: 400,    // Higher = faster/snappier
  damping: 17,       // Higher = less bounce
  mass: 1            // Higher = more inertia
}

<motion.div
  animate={{ x: 100 }}
  transition={spring}
/>
```

## Animation Variants System

Create reusable animation configurations:

```tsx
const variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.3
    }
  }
}

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  exit="exit"
/>
```

## Further Reading

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [THEMING.md](./THEMING.md) - Animation duration/easing tokens
- [STRUCTURE.md](./STRUCTURE.md) - Component organization
