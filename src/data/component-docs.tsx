import * as Demos from "@/components/docs/demos"

import { HookPlaceholder } from "@/components/docs/hook-placeholder"
import {
  // Special - using demos
  AnimatedBeam,
  // Text components
  AnimatedGradientText,
  // Backgrounds - using demos
  AuroraBackground,
  Avatar,
  BlurFade,
  BorderBeam,
  Checkbox,
  FadeText,
  FlipText,
  GridPattern,
  HyperText,
  Input,
  Label,
  LetterPullup,
  MorphingText,
  NumberTicker,
  Progress,
  RadioGroup,
  ShimmerButton,
  ShootingStars,
  Slider,
  SparklesText,
  Stars,
  Switch,
  Textarea,
  TypingAnimation,
  VelocityScroll,
  WordRotate,
  // NEW IMPORTS
  RainbowButton,
  GlowButton,
  RippleButton,
  MagneticButton,
  PulsatingButton,
  ShinyButton,
  AnimatedButton,
  GooeyButton,
  InteractiveHoverButton,
  CreepyButton,
  WavyText,
  GradualSpacing,
  BoxReveal,
  TextReveal,
  SeparateAway,
  RotateText,
  SpinningText,
  FlipText3D,
  TextAnimate,
  AnimatedNumber,
  TextHighlighter,
  ComicText,
  AuroraText,
  AnimatedShinyText,
  LineShadowText,
  VideoText,
  ScrollBasedVelocity,
  Particles,
  Confetti,
  MagicCard,
  Meteors,
  Spotlight,
  ThreeDCard,
  ShineBorder,
  RippleEffect,
  GlitchEffect,
  Magnifier,
  CanvasSmudge,
  Scene3D,
  ParticleImage,
  Gravity,
} from "@unicorn-ui/ui"
import type { ComponentDoc } from "../components/docs/types"
import { docs } from "./docs-components"
import { hooks } from "./hook-docs"

export const components: ComponentDoc[] = [
  // --- Core ---
  {
    slug: "button",
    title: "Button",
    category: "Core",
    description: "Interactive actions with multiple variants and loading states.",
    component: Demos.ButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Button", control: { type: "text" } },
      {
        name: "variant",
        type: "enum",
        defaultValue: "default",
        control: {
          type: "select",
          options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
        },
      },
      {
        name: "size",
        type: "enum",
        defaultValue: "default",
        control: { type: "select", options: ["default", "sm", "lg", "icon"] },
      },
      { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "isLoading", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [
      { name: "Default", args: { children: "Button", variant: "default" } },
      { name: "Secondary", args: { children: "Secondary", variant: "secondary" } },
      { name: "Destructive", args: { children: "Destructive", variant: "destructive" } },
      { name: "Outline", args: { children: "Outline", variant: "outline" } },
      { name: "Ghost", args: { children: "Ghost", variant: "ghost" } },
      { name: "Loading", args: { children: "Loading", isLoading: true } },
    ],
  },
  {
    slug: "badge",
    title: "Badge",
    category: "Core",
    description: "Informational labels for status, categories, or notifications.",
    component: Demos.BadgeDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Badge", control: { type: "text" } },
      {
        name: "variant",
        type: "enum",
        defaultValue: "default",
        control: { type: "select", options: ["default", "secondary", "destructive", "outline"] },
      },
    ],
    stories: [
      { name: "Default", args: { children: "New", variant: "default" } },
      { name: "Secondary", args: { children: "Updated", variant: "secondary" } },
      { name: "Destructive", args: { children: "Error", variant: "destructive" } },
      { name: "Outline", args: { children: "Outline", variant: "outline" } },
    ],
  },
  {
    slug: "alert",
    title: "Alert",
    category: "Core",
    description: "Displays a callout for user attention with various intensities.",
    component: Demos.AlertDemo,
    props: [
      {
        name: "variant",
        type: "enum",
        defaultValue: "default",
        control: { type: "select", options: ["default", "destructive", "success", "warning"] },
      },
      {
        name: "children",
        type: "ReactNode",
        defaultValue: "Alert Content",
        control: { type: "text" },
      },
    ],
    stories: [{ name: "Default", args: { variant: "default", children: "Heads up!" } }],
  },
  {
    slug: "card",
    title: "Card",
    category: "Core",
    description: "Content containers that support design styles like Glassmorphism.",
    component: Demos.CardDemo,
    props: [
      {
        name: "children",
        type: "ReactNode",
        defaultValue: "Card Content",
        control: { type: "text" },
      },
      {
        name: "className",
        type: "string",
        defaultValue: "w-[350px] p-6",
        control: { type: "text" },
      },
    ],
    stories: [{ name: "Default", args: { className: "w-[350px] p-6", children: "Card Content" } }],
  },
  {
    slug: "select",
    title: "Select",
    category: "Core",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
    component: Demos.SelectDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "dropdown-menu",
    title: "Dropdown Menu",
    category: "Core",
    description:
      "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
    component: Demos.DropdownMenuDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "dialog",
    title: "Dialog",
    category: "Core",
    description: "A window overlaid on either the primary window or another dialog window.",
    component: Demos.DialogDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "label",
    title: "Label",
    category: "Core",
    description: "Renders an accessible label associated with controls.",
    component: Label,
    props: [{ name: "children", type: "string", defaultValue: "Label", control: { type: "text" } }],
    stories: [{ name: "Default", args: { children: "Your Email Address" } }],
  },
  {
    slug: "radio-group",
    title: "Radio Group",
    category: "Core",
    description:
      "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    component: RadioGroup,
    props: [
      {
        name: "defaultValue",
        type: "string",
        defaultValue: "option-one",
        control: { type: "text" },
      },
    ],
    stories: [{ name: "Default", args: { defaultValue: "option-one" } }],
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    category: "Core",
    description: "A control that allows the user to toggle between checked and not checked.",
    component: Checkbox,
    props: [
      { name: "checked", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } },
    ],
    stories: [{ name: "Default", args: { checked: true } }],
  },
  {
    slug: "switch",
    title: "Switch",
    category: "Core",
    description: "A control that allows the user to toggle between checked and not checked.",
    component: Switch,
    props: [
      { name: "checked", type: "boolean", defaultValue: false, control: { type: "boolean" } },
      { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } },
    ],
    stories: [{ name: "Default", args: { checked: true } }],
  },
  {
    slug: "slider",
    title: "Slider",
    category: "Core",
    description: "An input where the user selects a value from within a given range.",
    component: Slider,
    props: [
      { name: "value", type: "number[]", defaultValue: [50], control: { type: "object" } },
      { name: "max", type: "number", defaultValue: 100, control: { type: "number" } },
      { name: "step", type: "number", defaultValue: 1, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { value: [33], max: 100, step: 1 } }],
  },
  {
    slug: "progress",
    title: "Progress",
    category: "Core",
    description: "Displays an indicator showing the completion progress of a task.",
    component: Progress,
    props: [
      {
        name: "value",
        type: "number",
        defaultValue: 33,
        control: { type: "number", min: 0, max: 100 },
      },
    ],
    stories: [{ name: "Default", args: { value: 60 } }],
  },
  {
    slug: "textarea",
    title: "Textarea",
    category: "Core",
    description: "Displays a form textarea or a component that looks like a textarea.",
    component: Textarea,
    props: [
      {
        name: "placeholder",
        type: "string",
        defaultValue: "Type your message here.",
        control: { type: "text" },
      },
    ],
    stories: [{ name: "Default", args: { placeholder: "Type your details here." } }],
  },
  {
    slug: "input",
    title: "Input",
    category: "Core",
    description: "Displays a form input field or a component that looks like an input field.",
    component: Input,
    props: [
      {
        name: "type",
        type: "enum",
        defaultValue: "text",
        control: { type: "select", options: ["text", "email", "password", "number"] },
      },
      { name: "placeholder", type: "string", defaultValue: "Email", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { type: "email", placeholder: "Email" } }],
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    category: "Core",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    component: Demos.TooltipDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "sheet",
    title: "Sheet",
    category: "Core",
    description:
      "Extends the Dialog component to display content that complements the main screen content.",
    component: Demos.SheetDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "toast",
    title: "Toast",
    category: "Feedback",
    description: "A succinct message that is displayed temporarily.",
    component: Demos.ToastDemoWrapper,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "in-view",
    title: "In View",
    category: "Utils",
    description: "Component that tracks when it enters or leaves the viewport.",
    component: Demos.InViewDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "table",
    title: "Table",
    category: "Core",
    description: "A responsive table component.",
    component: Demos.TableDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  // Layout
  {
    slug: "tabs",
    title: "Tabs",
    category: "Layout",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    component: Demos.TabsDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "avatar-circles",
    title: "Avatar Circles",
    category: "Layout",
    description: "Stacked circular avatars.",
    component: Demos.AvatarCirclesDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "bento-grid",
    title: "Bento Grid",
    category: "Layout",
    description: "A grid layout for displaying content in a bento box style.",
    component: Demos.BentoGridDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "collapsible-sidebar",
    title: "Collapsible Sidebar",
    category: "Layout",
    description: "A sidebar that can be collapsed to save space.",
    component: Demos.CollapsibleSidebarDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "dock",
    title: "Dock",
    category: "Layout",
    description: "A macOS-style dock for application navigation.",
    component: Demos.DockDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "file-tree",
    title: "File Tree",
    category: "Layout",
    description: "A hierarchical file system visualization.",
    component: Demos.FileTreeDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "marquee",
    title: "Marquee",
    category: "Layout",
    description: "An infinite scrolling component for announcements or logos.",
    component: Demos.MarqueeDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "sidebar",
    title: "Sidebar",
    category: "Layout",
    description: "A standard navigation sidebar layout.",
    component: Demos.SidebarDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "split-layout",
    title: "Split Layout",
    category: "Layout",
    description: "A resizeable panel group for split-screen layouts.",
    component: Demos.SplitLayoutDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "timeline",
    title: "Timeline",
    category: "Layout",
    description: "A vertical list of events in chronological order.",
    component: Demos.TimelineDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "animated-list",
    title: "Animated List",
    category: "Layout",
    description: "A list of items that animates when rendered.",
    component: Demos.AnimatedListDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "avatar",
    title: "Avatar",
    category: "Core",
    description: "An image element with a fallback for representing the user.",
    component: Avatar,
    props: [
      {
        name: "src",
        type: "string",
        defaultValue: "https://github.com/shadcn.png",
        control: { type: "text" },
      },
      { name: "alt", type: "string", defaultValue: "@shadcn", control: { type: "text" } },
      { name: "fallback", type: "string", defaultValue: "CN", control: { type: "text" } },
    ],
    stories: [
      {
        name: "Default",
        args: { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      },
    ],
  },
  // Text
  {
    slug: "animated-gradient-text",
    category: "Text",
    title: "Animated Gradient Text",
    description: "Text that animates a gradient background.",
    component: AnimatedGradientText,
    props: [],
    stories: [{ name: "Default", args: { children: "Gradient Text" } }],
  },
  {
    slug: "blur-text",
    category: "Text",
    title: "Blur Text",
    description: "Text that fades in with a blur effect.",
    component: BlurFade,
    props: [],
    stories: [{ name: "Default", args: { children: "Blur Text" } }],
  },
  {
    slug: "fade-text",
    category: "Text",
    title: "Fade Text",
    description: "Text that fades in and out.",
    component: FadeText,
    props: [],
    stories: [{ name: "Default", args: { text: "Fade Text" } }],
  },
  {
    slug: "flip-text",
    category: "Text",
    title: "Flip Text",
    description: "Text that flips to reveal new content.",
    component: FlipText,
    props: [],
    stories: [{ name: "Default", args: { children: "Flip Text" } }],
  },
  {
    slug: "hyper-text",
    category: "Text",
    title: "Hyper Text",
    description: "Text that cycles through characters on hover.",
    component: HyperText,
    props: [],
    stories: [{ name: "Default", args: { text: "Hyper Text" } }],
  },
  {
    slug: "morphing-text",
    category: "Text",
    title: "Morphing Text",
    description: "Text that morphs between different strings.",
    component: MorphingText,
    props: [],
    stories: [{ name: "Default", args: { texts: ["Morphing", "Text"] } }],
  },
  {
    slug: "number-ticker",
    category: "Text",
    title: "Number Ticker",
    description: "Animated number counter.",
    component: NumberTicker,
    props: [],
    stories: [{ name: "Default", args: { value: 100 } }],
  },
  {
    slug: "sparkles-text",
    category: "Text",
    title: "Sparkles Text",
    description: "Text with sparkling animation effects.",
    component: SparklesText,
    props: [],
    stories: [{ name: "Default", args: { text: "Sparkles" } }],
  },
  {
    slug: "typing-text",
    category: "Text",
    title: "Typing Text",
    description: "Text that appears as if being typed.",
    component: TypingAnimation,
    props: [],
    stories: [{ name: "Default", args: { text: "Typing..." } }],
  },
  {
    slug: "word-pull-up",
    category: "Text",
    title: "Word Pull Up",
    description: "Words that animate up into view.",
    component: LetterPullup,
    props: [],
    stories: [{ name: "Default", args: { words: "Pull Up" } }],
  },
  {
    slug: "word-rotate",
    category: "Text",
    title: "Word Rotate",
    description: "Words that rotate in place.",
    component: WordRotate,
    props: [],
    stories: [{ name: "Default", args: { words: ["Rotate", "Words"] } }],
  },
  // Backgrounds
  {
    slug: "animated-grid-pattern",
    title: "Animated Grid Pattern",
    category: "Backgrounds",
    description: "A customizable animated grid background with pulsing squares.",
    component: Demos.AnimatedGridPatternDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "retro-grid",
    title: "Retro Grid",
    category: "Backgrounds",
    description: "An 80s-inspired retro grid background with perspective motion.",
    component: Demos.RetroGridDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "ripple",
    title: "Ripple",
    category: "Backgrounds",
    description: "Interactive or static ripple effect for background depth.",
    component: Demos.RippleDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "dot-pattern",
    title: "Dot Pattern",
    category: "Backgrounds",
    description: "A classic SVG dot pattern background for subtle texture.",
    component: Demos.DotPatternDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "aurora-background",
    category: "Backgrounds",
    title: "Aurora Background",
    description: "A mesmerizing aurora borealis background effect.",
    component: AuroraBackground,
    props: [],
    stories: [{ name: "Default", args: { children: <div>Aurora</div> } }],
  },
  {
    slug: "grid-pattern",
    category: "Backgrounds",
    title: "Grid Pattern",
    description: "A simple geometric grid pattern background.",
    component: GridPattern,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "shooting-stars",
    category: "Backgrounds",
    title: "Shooting Stars",
    description: "Animated shooting stars effect.",
    component: ShootingStars,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "stars",
    category: "Backgrounds",
    title: "Stars",
    description: "Static or twinkling stars background.",
    component: Stars,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  // Special
  {
    slug: "meteors",
    title: "Meteors",
    category: "Special",
    description: "Animated meteor shower effect for cosmic background storytelling.",
    component: Demos.MeteorsDemo,
    props: [{ name: "number", type: "number", defaultValue: 20, control: { type: "number" } }],
    stories: [{ name: "Default", args: { number: 20 } }],
  },
  {
    slug: "particles",
    title: "Particles",
    category: "Special",
    description: "Highly performant interactive particle backgrounds.",
    component: Demos.ParticlesDemo,
    props: [
      { name: "quantity", type: "number", defaultValue: 100, control: { type: "number" } },
      { name: "color", type: "color", defaultValue: "#000000", control: { type: "color" } },
    ],
    stories: [{ name: "Default", args: { quantity: 100, color: "#000000" } }],
  },
  {
    slug: "magic-card",
    title: "Magic Card",
    category: "Special",
    description: "A card with a spotlight hover effect and interactive glass styles.",
    component: Demos.MagicCardDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "3d-card",
    category: "Special",
    title: "3D Card",
    description: "A card with 3D depth and hover effects.",
    component: Demos.ThreeDCardDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "animated-beam",
    category: "Special",
    title: "Animated Beam",
    description: "A beam of light traveling along a path.",
    component: AnimatedBeam,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "border-beam",
    category: "Special",
    title: "Border Beam",
    description: "An animated beam of light traveling around a container's border.",
    component: BorderBeam,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "cool-mode",
    category: "Special",
    title: "Cool Mode",
    description: "A fun particle effect when clicking elements.",
    component: Demos.CoolModeDemo,
    props: [],
    stories: [{ name: "Default", args: { children: "Cool Mode" } }],
  },
  {
    slug: "orbiting-circles",
    category: "Special",
    title: "Orbiting Circles",
    description: "Circles orbiting around a central point.",
    component: Demos.OrbitingCirclesDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },

  {
    slug: "velocity-scroll",
    category: "Special",
    title: "Velocity Scroll",
    description: "Text that scrolls based on scroll velocity.",
    component: VelocityScroll,
    props: [],
    stories: [{ name: "Default", args: { text: "Velocity Scroll" } }],
  },

  // === NEW SUPPLEMENTARY COMPONENTS ===

  // === BUTTON VARIANTS ===
  {
    slug: "shimmer-button",
    title: "Shimmer Button (Variant)",
    category: "Buttons",
    description: "Button with animated shimmer effect that creates a shiny moving gradient",
    component: Demos.ShimmerButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Shimmer Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
      { name: "shimmerColor", type: "string", defaultValue: "#ffffff", control: { type: "color" } },
      { name: "shimmerSize", type: "string", defaultValue: "0.05em", control: { type: "text" } },
    ],
    stories: [
      { name: "Default", args: { children: "Shimmer Button" } },
      { name: "Custom Color", args: { children: "Custom Shimmer", shimmerColor: "#ff00ff" } },
    ],
  },
  {
    slug: "rainbow-button",
    title: "Rainbow Button",
    category: "Buttons",
    description: "Button with animated rainbow gradient border effect",
    component: Demos.RainbowButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Rainbow Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Rainbow Button" } }],
  },
  {
    slug: "glow-button",
    title: "Glow Button",
    category: "Buttons",
    description: "Button with glowing hover effect and neon-style appearance",
    component: Demos.GlowButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Glow Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Glow Button" } }],
  },
  {
    slug: "ripple-button",
    title: "Ripple Button",
    category: "Buttons",
    description: "Button with Material Design-style ripple click effect",
    component: Demos.RippleButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Ripple Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Ripple Button" } }],
  },
  {
    slug: "magnetic-button",
    title: "Magnetic Button",
    category: "Buttons",
    description: "Button that magnetically follows the cursor with smooth animation",
    component: Demos.MagneticButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Magnetic Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Magnetic Button" } }],
  },
  {
    slug: "pulsating-button",
    title: "Pulsating Button",
    category: "Buttons",
    description: "Button with pulsating ring animation effect",
    component: Demos.PulsatingButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Pulsating Button", control: { type: "text" } },
      { name: "pulseColor", type: "string", defaultValue: "#3b82f6", control: { type: "color" } },
      { name: "duration", type: "string", defaultValue: "1.5s", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [
      { name: "Default", args: { children: "Pulsating Button" } },
      { name: "Custom Color", args: { children: "Custom Pulse", pulseColor: "#ef4444" } },
    ],
  },
  {
    slug: "shiny-button",
    title: "Shiny Button",
    category: "Buttons",
    description: "Button with shiny metallic reflection effect",
    component: Demos.ShinyButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Shiny Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Shiny Button" } }],
  },
  {
    slug: "animated-button",
    title: "Animated Button",
    category: "Buttons",
    description: "Button with customizable entry and hover animations",
    component: Demos.AnimatedButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Animated Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Animated Button" } }],
  },
  {
    slug: "gooey-button",
    title: "Gooey Button",
    category: "Buttons",
    description: "Button with gooey SVG filter morphing effect",
    component: Demos.GooeyButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Gooey Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Gooey Button" } }],
  },
  {
    slug: "interactive-hover-button",
    title: "Interactive Hover Button",
    category: "Buttons",
    description: "Button with text that splits and animates on hover",
    component: Demos.InteractiveHoverButtonDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Hover Me", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [
      { name: "Default", args: { text: "Hover Me" } },
      { name: "Custom Text", args: { text: "Interactive" } },
    ],
  },
  {
    slug: "creepy-button",
    title: "Creepy Button",
    category: "Buttons",
    description: "Button with creepy/spookyhovering shadow effect",
    component: Demos.CreepyButtonDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Creepy Button", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Creepy Button" } }],
  },

  // === ADVANCED TEXT EFFECTS ===
  {
    slug: "wavy-text",
    title: "Wavy Text",
    category: "Text",
    description: "Text with wavy motion animation effect",
    component: Demos.WavyTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Wavy Text", control: { type: "text" } },
      { name: "delay", type: "number", defaultValue: 0.05, control: { type: "number" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [
      { name: "Default", args: { text: "Wavy Text" } },
      { name: "Slow Wave", args: { text: "Slow Wavy", delay: 0.1 } },
    ],
  },
  {
    slug: "gradual-spacing",
    title: "Gradual Spacing",
    category: "Text",
    description: "Text with gradually increasing letter spacing animation",
    component: Demos.GradualSpacingDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Gradual Spacing", control: { type: "text" } },
      { name: "duration", type: "number", defaultValue: 0.5, control: { type: "number" } },
      { name: "delayMultiple", type: "number", defaultValue: 0.04, control: { type: "number" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Gradual Spacing" } }],
  },
  // LetterPullup already exists in core but adding duplicate for completeness/variants
  {
    slug: "box-reveal",
    title: "Box Reveal",
    category: "Text",
    description: "Text revealed with animated box overlay",
    component: Demos.BoxRevealDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Box Reveal", control: { type: "text" } },
      { name: "boxColor", type: "string", defaultValue: "#5046e6", control: { type: "color" } },
      { name: "duration", type: "number", defaultValue: 0.5, control: { type: "number" } },
    ],
    stories: [
      { name: "Default", args: { children: "Box Reveal" } },
      { name: "Custom Color", args: { children: "Custom Box", boxColor: "#ef4444" } },
    ],
  },
  {
    slug: "text-reveal",
    title: "Text Reveal",
    category: "Text",
    description: "Text reveal animation triggered on scroll",
    component: Demos.TextRevealDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Text Reveal", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Text Reveal" } }],
  },
  {
    slug: "separate-away",
    title: "Separate Away",
    category: "Text",
    description: "Text characters separate on hover with spring animation",
    component: Demos.SeparateAwayDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Separate Away", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Separate Away" } }],
  },
  {
    slug: "rotate-text",
    title: "Rotate Text",
    category: "Text",
    description: "Text with 3D rotation transform effect",
    component: Demos.RotateTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Rotate Text", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Rotate Text" } }],
  },
  {
    slug: "spinning-text",
    title: "Spinning Text",
    category: "Text",
    description: "Circular text with continuous spinning animation",
    component: Demos.SpinningTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Spinning • Text • Effect • ", control: { type: "text" } },
      { name: "radius", type: "number", defaultValue: 80, control: { type: "number" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Spinning • Text • Effect •" } }],
  },
  {
    slug: "flip-text-3d",
    title: "Flip Text 3D",
    category: "Text",
    description: "3D flip animation for text with perspective transform",
    component: Demos.FlipText3DDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Flip Text 3D", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Flip Text 3D" } }],
  },
  {
    slug: "text-animate",
    title: "Text Animate",
    category: "Text",
    description: "Text with customizable animation presets",
    component: Demos.TextAnimateDemo,
    props: [
      { name: "children", type: "string", defaultValue: "Text Animate", control: { type: "text" } },
      { name: "type", type: "string", defaultValue: "fadeIn", control: { type: "select", options: ["fadeIn", "slideUp", "slideDown", "scale", "rotate"] } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [
      { name: "Fade In", args: { children: "Fade In", type: "fadeIn" } },
      { name: "Slide Up", args: { children: "Slide Up", type: "slideUp" } },
    ],
  },
  {
    slug: "animated-number",
    title: "Animated Number",
    category: "Text",
    description: "Number counter with smooth animation",
    component: Demos.AnimatedNumberDemo,
    props: [
      { name: "value", type: "number", defaultValue: 100, control: { type: "number" } },
      { name: "duration", type: "number", defaultValue: 2, control: { type: "number" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [
      { name: "Default", args: { value: 100 } },
      { name: "Large Number", args: { value: 10000, duration: 3 } },
    ],
  },
  {
    slug: "text-highlighter",
    title: "Text Highlighter",
    category: "Text",
    description: "Text with animated highlight effect",
    component: Demos.TextHighlighterDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Highlight this text", control: { type: "text" } },
      { name: "highlightColor", type: "string", defaultValue: "#ffeb3b", control: { type: "color" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Highlight this text" } }],
  },
  {
    slug: "comic-text",
    title: "Comic Text",
    category: "Text",
    description: "Comic book style text with outline effect",
    component: Demos.ComicTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "POW!", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "POW!" } }],
  },
  {
    slug: "aurora-text",
    title: "Aurora Text",
    category: "Text",
    description: "Text with aurora borealis gradient effect",
    component: Demos.AuroraTextDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Aurora Text", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Aurora Text" } }],
  },
  {
    slug: "animated-shiny-text",
    title: "Animated Shiny Text",
    category: "Text",
    description: "Text with shiny gradient animation",
    component: Demos.AnimatedShinyTextDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Shiny Text", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Shiny Text" } }],
  },
  // BlurFade already exists
  {
    slug: "line-shadow-text",
    title: "Line Shadow Text",
    category: "Text",
    description: "Text with animated line shadow effect",
    component: Demos.LineShadowTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Line Shadow", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Line Shadow" } }],
  },
  {
    slug: "video-text",
    title: "Video Text",
    category: "Text",
    description: "Text with video background fill",
    component: Demos.VideoTextDemo,
    props: [
      { name: "text", type: "string", defaultValue: "VIDEO", control: { type: "text" } },
      { name: "videoSrc", type: "string", defaultValue: "/video.mp4", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "VIDEO" } }],
  },
  {
    slug: "scroll-based-velocity",
    title: "Scroll Based Velocity",
    category: "Text",
    description: "Text animation based on scroll velocity",
    component: Demos.ScrollBasedVelocityDemo,
    props: [
      { name: "text", type: "string", defaultValue: "Scroll Velocity", control: { type: "text" } },
      { name: "defaultVelocity", type: "number", defaultValue: 5, control: { type: "number" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { text: "Scroll Velocity" } }],
  },

  // === SPECIAL EFFECTS ===
  // Particles, Confetti, BorderBeam, MagicCard, Meteors, Spotlight, AnimatedBeam, 3DCard, ShineBorder, OrbitingCircles already exist

  {
    slug: "ripple-effect",
    title: "Ripple Effect",
    category: "Special",
    description: "Expanding ripple animation effect",
    component: Demos.RippleEffectDemo,
    props: [
      { name: "mainCircleSize", type: "number", defaultValue: 210, control: { type: "number" } },
      { name: "mainCircleOpacity", type: "number", defaultValue: 0.24, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "glitch-effect",
    title: "Glitch Effect",
    category: "Special",
    description: "Digital glitch distortion effect",
    component: Demos.GlitchEffectDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Glitch", control: { type: "text" } },
      { name: "className", type: "string", defaultValue: "", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Glitch Effect" } }],
  },
  {
    slug: "magnifier",
    title: "Magnifier",
    category: "Special",
    description: "Image magnifier lens effect",
    component: Demos.MagnifierDemo,
    props: [
      { name: "src", type: "string", defaultValue: "/image.jpg", control: { type: "text" } },
      { name: "zoomFactor", type: "number", defaultValue: 2.5, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { src: "/placeholder.jpg" } }],
  },
  {
    slug: "canvas-smudge",
    title: "Canvas Smudge",
    category: "Special",
    description: "Interactive canvas smudge effect",
    component: Demos.CanvasSmudgeDemo,
    props: [
      { name: "children", type: "ReactNode", defaultValue: "Smudge Me", control: { type: "text" } },
    ],
    stories: [{ name: "Default", args: { children: "Smudge Me" } }],
  },
  {
    slug: "scene-3d",
    title: "Scene 3D",
    category: "Special",
    description: "3D scene using React Three Fiber",
    component: Demos.Scene3DDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
  {
    slug: "particle-image",
    title: "Particle Image",
    category: "Special",
    description: "Image composed of interactive particles",
    component: Demos.ParticleImageDemo,
    props: [
      { name: "src", type: "string", defaultValue: "/image.jpg", control: { type: "text" } },
      { name: "density", type: "number", defaultValue: 4, control: { type: "number" } },
    ],
    stories: [{ name: "Default", args: { src: "/placeholder.jpg" } }],
  },
  {
    slug: "gravity",
    title: "Gravity",
    category: "Special",
    description: "Physics-based gravity animation effect",
    component: Demos.GravityDemo,
    props: [],
    stories: [{ name: "Default", args: {} }],
  },
]

export function getComponentBySlug(slug: string) {
  const component = components.find((c) => c.slug === slug)
  if (component) return component

  const doc = docs.find((d) => d.slug === slug)
  if (doc) {
    return {
      ...doc,
      category: "Docs",
      props: [],
      stories: [],
    }
  }

  const hook = hooks.find((h) => h.slug === slug)
  if (hook) {
    return {
      slug: hook.slug,
      title: hook.title,
      category: "Hooks",
      description: hook.description,
      component: HookPlaceholder,
      props: hook.data.props
        ? hook.data.props.map((p) => ({
            name: p.name,
            type: p.type,
            defaultValue: p.default,
            description: p.description,
            control: { type: "text" } as const,
          }))
        : [],
      stories: [
        {
          name: "Usage",
          args: {
            example: hook.data.examples[0],
          },
        },
      ],
    }
  }

  return undefined
}

export function getAllComponentSlugs() {
  return [...components.map((c) => c.slug), ...docs.map((d) => d.slug), ...hooks.map((h) => h.slug)]
}

export function getSidebarData() {
  const categories: Record<string, { title: string; slug: string }[]> = {}

  // Process components
  components.forEach((c) => {
    if (!categories[c.category]) {
      categories[c.category] = []
    }
    categories[c.category].push({ title: c.title, slug: c.slug })
  })

  // Process docs
  docs.forEach((d) => {
    const cat = "Docs"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push({ title: d.title, slug: d.slug })
  })

  // Process hooks
  hooks.forEach((h) => {
    const cat = "Hooks"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push({ title: h.title, slug: h.slug })
  })

  const titleCase = (str: string) => str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

  // Convert to array and sort keys if needed (though Object.entries order is not guaranteed stable across all environments, it's usually insertion order)
  // We might want to enforce a specific order: Docs, Core, ...
  const order = ["Docs", "Core", "Layout", "Text", "Backgrounds", "Buttons", "Special", "Feedback", "Interaction", "Utils", "Hooks"]

  return Object.entries(categories)
    .sort((a, b) => {
      const indexA = order.indexOf(a[0])
      const indexB = order.indexOf(b[0])
      // If both are in order list, sort by index
      if (indexA !== -1 && indexB !== -1) return indexA - indexB
      // If only A is in list, A comes first
      if (indexA !== -1) return -1
      // If only B is in list, B comes first
      if (indexB !== -1) return 1
      // Otherwise sort alphabetically
      return a[0].localeCompare(b[0])
    })
    .map(([name, items]) => ({
      name,
      items: items.sort((a, b) => a.title.localeCompare(b.title)),
    }))
}
