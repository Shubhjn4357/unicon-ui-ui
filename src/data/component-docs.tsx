import { ComponentDoc } from "../components/docs/types"
import * as Demos from "@/components/docs/demos"
import {
    Avatar,
    Checkbox,
    Input,
    Label,
    Progress,
    RadioGroup,
    Slider,
    Switch,
    Textarea,
    // Text components
    AnimatedGradientText,
    BlurFade,
    FadeText,
    FlipText,
    HyperText,
    MorphingText,
    NumberTicker,
    SparklesText,
    TypingAnimation,
    LetterPullup,
    WordRotate,
    // Backgrounds - using demos
    AuroraBackground,
    GridPattern,
    ShootingStars,
    Stars,
    // Special - using demos
    AnimatedBeam,
    BorderBeam,
    VelocityScroll,
    ShimmerButton,
} from "@unicorn-ui/ui"
import { docs } from "./docs-components"
import { hooks } from "./hook-docs"
import { HookPlaceholder } from "@/components/docs/hook-placeholder"

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
            { name: "variant", type: "enum", defaultValue: "default", control: { type: "select", options: ["default", "destructive", "outline", "secondary", "ghost", "link"] } },
            { name: "size", type: "enum", defaultValue: "default", control: { type: "select", options: ["default", "sm", "lg", "icon"] } },
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
        ]
    },
    {
        slug: "badge",
        title: "Badge",
        category: "Core",
        description: "Informational labels for status, categories, or notifications.",
        component: Demos.BadgeDemo,
        props: [
            { name: "children", type: "ReactNode", defaultValue: "Badge", control: { type: "text" } },
            { name: "variant", type: "enum", defaultValue: "default", control: { type: "select", options: ["default", "secondary", "destructive", "outline"] } }
        ],
        stories: [
            { name: "Default", args: { children: "New", variant: "default" } },
            { name: "Secondary", args: { children: "Updated", variant: "secondary" } },
            { name: "Destructive", args: { children: "Error", variant: "destructive" } },
            { name: "Outline", args: { children: "Outline", variant: "outline" } }
        ]
    },
    {
        slug: "alert",
        title: "Alert",
        category: "Core",
        description: "Displays a callout for user attention with various intensities.",
        component: Demos.AlertDemo,
        props: [
            { name: "variant", type: "enum", defaultValue: "default", control: { type: "select", options: ["default", "destructive", "success", "warning"] } },
            { name: "children", type: "ReactNode", defaultValue: "Alert Content", control: { type: "text" } }
        ],
        stories: [{ name: "Default", args: { variant: "default", children: "Heads up!" } }]
    },
    {
        slug: "card",
        title: "Card",
        category: "Core",
        description: "Content containers that support design styles like Glassmorphism.",
        component: Demos.CardDemo,
        props: [
            { name: "children", type: "ReactNode", defaultValue: "Card Content", control: { type: "text" } },
            { name: "className", type: "string", defaultValue: "w-[350px] p-6", control: { type: "text" } }
        ],
        stories: [{ name: "Default", args: { className: "w-[350px] p-6", children: "Card Content" } }]
    },
    {
        slug: "select",
        title: "Select",
        category: "Core",
        description: "Displays a list of options for the user to pick from—triggered by a button.",
        component: Demos.SelectDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "dropdown-menu",
        title: "Dropdown Menu",
        category: "Core",
        description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button.",
        component: Demos.DropdownMenuDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "dialog",
        title: "Dialog",
        category: "Core",
        description: "A window overlaid on either the primary window or another dialog window.",
        component: Demos.DialogDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "label",
        title: "Label",
        category: "Core",
        description: "Renders an accessible label associated with controls.",
        component: Label,
        props: [{ name: "children", type: "string", defaultValue: "Label", control: { type: "text" } }],
        stories: [{ name: "Default", args: { children: "Your Email Address" } }]
    },
    {
        slug: "radio-group",
        title: "Radio Group",
        category: "Core",
        description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
        component: RadioGroup,
        props: [{ name: "defaultValue", type: "string", defaultValue: "option-one", control: { type: "text" } }],
        stories: [{ name: "Default", args: { defaultValue: "option-one" } }]
    },
    {
        slug: "checkbox",
        title: "Checkbox",
        category: "Core",
        description: "A control that allows the user to toggle between checked and not checked.",
        component: Checkbox,
        props: [
            { name: "checked", type: "boolean", defaultValue: false, control: { type: "boolean" } },
            { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } }
        ],
        stories: [{ name: "Default", args: { checked: true } }]
    },
    {
        slug: "switch",
        title: "Switch",
        category: "Core",
        description: "A control that allows the user to toggle between checked and not checked.",
        component: Switch,
        props: [
            { name: "checked", type: "boolean", defaultValue: false, control: { type: "boolean" } },
            { name: "disabled", type: "boolean", defaultValue: false, control: { type: "boolean" } }
        ],
        stories: [{ name: "Default", args: { checked: true } }]
    },
    {
        slug: "slider",
        title: "Slider",
        category: "Core",
        description: "An input where the user selects a value from within a given range.",
        component: Slider,
        props: [
            { name: "defaultValue", type: "number[]", defaultValue: [50], control: { type: "object" } },
            { name: "max", type: "number", defaultValue: 100, control: { type: "number" } },
            { name: "step", type: "number", defaultValue: 1, control: { type: "number" } },
        ],
        stories: [{ name: "Default", args: { defaultValue: [33], max: 100, step: 1 } }]
    },
    {
        slug: "progress",
        title: "Progress",
        category: "Core",
        description: "Displays an indicator showing the completion progress of a task.",
        component: Progress,
        props: [
            { name: "value", type: "number", defaultValue: 33, control: { type: "number", min: 0, max: 100 } }
        ],
        stories: [{ name: "Default", args: { value: 60 } }]
    },
    {
        slug: "textarea",
        title: "Textarea",
        category: "Core",
        description: "Displays a form textarea or a component that looks like a textarea.",
        component: Textarea,
        props: [
            { name: "placeholder", type: "string", defaultValue: "Type your message here.", control: { type: "text" } },
        ],
        stories: [{ name: "Default", args: { placeholder: "Type your details here." } }]
    },
    {
        slug: "input",
        title: "Input",
        category: "Core",
        description: "Displays a form input field or a component that looks like an input field.",
        component: Input,
        props: [
            { name: "type", type: "enum", defaultValue: "text", control: { type: "select", options: ["text", "email", "password", "number"] } },
            { name: "placeholder", type: "string", defaultValue: "Email", control: { type: "text" } },
        ],
        stories: [{ name: "Default", args: { type: "email", placeholder: "Email" } }]
    },
    {
        slug: "tooltip",
        title: "Tooltip",
        category: "Core",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        component: Demos.TooltipDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "sheet",
        title: "Sheet",
        category: "Core",
        description: "Extends the Dialog component to display content that complements the main screen content.",
        component: Demos.SheetDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },

    {
        slug: "toast",
        title: "Toast",
        category: "Feedback",
        description: "A succinct message that is displayed temporarily.",
        component: Demos.ToastDemoWrapper,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "in-view",
        title: "In View",
        category: "Utils",
        description: "Component that tracks when it enters or leaves the viewport.",
        component: Demos.InViewDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "table",
        title: "Table",
        category: "Core",
        description: "A responsive table component.",
        component: Demos.TableDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    // Layout
    {
        slug: "tabs",
        title: "Tabs",
        category: "Layout",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        component: Demos.TabsDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "avatar-circles",
        title: "Avatar Circles",
        category: "Layout",
        description: "Stacked circular avatars.",
        component: Demos.AvatarCirclesDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "bento-grid",
        title: "Bento Grid",
        category: "Layout",
        description: "A grid layout for displaying content in a bento box style.",
        component: Demos.BentoGridDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "collapsible-sidebar",
        title: "Collapsible Sidebar",
        category: "Layout",
        description: "A sidebar that can be collapsed to save space.",
        component: Demos.CollapsibleSidebarDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "dock",
        title: "Dock",
        category: "Layout",
        description: "A macOS-style dock for application navigation.",
        component: Demos.DockDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "file-tree",
        title: "File Tree",
        category: "Layout",
        description: "A hierarchical file system visualization.",
        component: Demos.FileTreeDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "marquee",
        title: "Marquee",
        category: "Layout",
        description: "An infinite scrolling component for announcements or logos.",
        component: Demos.MarqueeDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "sidebar",
        title: "Sidebar",
        category: "Layout",
        description: "A standard navigation sidebar layout.",
        component: Demos.SidebarDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "split-layout",
        title: "Split Layout",
        category: "Layout",
        description: "A resizeable panel group for split-screen layouts.",
        component: Demos.SplitLayoutDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "timeline",
        title: "Timeline",
        category: "Layout",
        description: "A vertical list of events in chronological order.",
        component: Demos.TimelineDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "animated-list",
        title: "Animated List",
        category: "Layout",
        description: "A list of items that animates when rendered.",
        component: Demos.AnimatedListDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "avatar",
        title: "Avatar",
        category: "Core",
        description: "An image element with a fallback for representing the user.",
        component: Avatar,
        props: [
            { name: "src", type: "string", defaultValue: "https://github.com/shadcn.png", control: { type: "text" } },
            { name: "alt", type: "string", defaultValue: "@shadcn", control: { type: "text" } },
            { name: "fallback", type: "string", defaultValue: "CN", control: { type: "text" } }
        ],
        stories: [
            { name: "Default", args: { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" } }
        ]
    },
    // Text
    { slug: "animated-gradient-text", category: "Text", title: "Animated Gradient Text", description: "Text that animates a gradient background.", component: AnimatedGradientText, props: [], stories: [{ name: "Default", args: { children: "Gradient Text" } }] },
    { slug: "blur-text", category: "Text", title: "Blur Text", description: "Text that fades in with a blur effect.", component: BlurFade, props: [], stories: [{ name: "Default", args: { children: "Blur Text" } }] },
    { slug: "fade-text", category: "Text", title: "Fade Text", description: "Text that fades in and out.", component: FadeText, props: [], stories: [{ name: "Default", args: { text: "Fade Text" } }] },
    { slug: "flip-text", category: "Text", title: "Flip Text", description: "Text that flips to reveal new content.", component: FlipText, props: [], stories: [{ name: "Default", args: { children: "Flip Text" } }] },
    { slug: "hyper-text", category: "Text", title: "Hyper Text", description: "Text that cycles through characters on hover.", component: HyperText, props: [], stories: [{ name: "Default", args: { text: "Hyper Text" } }] },
    { slug: "morphing-text", category: "Text", title: "Morphing Text", description: "Text that morphs between different strings.", component: MorphingText, props: [], stories: [{ name: "Default", args: { texts: ["Morphing", "Text"] } }] },
    { slug: "number-ticker", category: "Text", title: "Number Ticker", description: "Animated number counter.", component: NumberTicker, props: [], stories: [{ name: "Default", args: { value: 100 } }] },
    { slug: "sparkles-text", category: "Text", title: "Sparkles Text", description: "Text with sparkling animation effects.", component: SparklesText, props: [], stories: [{ name: "Default", args: { text: "Sparkles" } }] },
    { slug: "typing-text", category: "Text", title: "Typing Text", description: "Text that appears as if being typed.", component: TypingAnimation, props: [], stories: [{ name: "Default", args: { text: "Typing..." } }] },
    { slug: "word-pull-up", category: "Text", title: "Word Pull Up", description: "Words that animate up into view.", component: LetterPullup, props: [], stories: [{ name: "Default", args: { words: "Pull Up" } }] },
    { slug: "word-rotate", category: "Text", title: "Word Rotate", description: "Words that rotate in place.", component: WordRotate, props: [], stories: [{ name: "Default", args: { words: ["Rotate", "Words"] } }] },
    // Backgrounds
    {
        slug: "animated-grid-pattern",
        title: "Animated Grid Pattern",
        category: "Backgrounds",
        description: "A customizable animated grid background with pulsing squares.",
        component: Demos.AnimatedGridPatternDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "retro-grid",
        title: "Retro Grid",
        category: "Backgrounds",
        description: "An 80s-inspired retro grid background with perspective motion.",
        component: Demos.RetroGridDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "ripple",
        title: "Ripple",
        category: "Backgrounds",
        description: "Interactive or static ripple effect for background depth.",
        component: Demos.RippleDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    {
        slug: "dot-pattern",
        title: "Dot Pattern",
        category: "Backgrounds",
        description: "A classic SVG dot pattern background for subtle texture.",
        component: Demos.DotPatternDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    { slug: "aurora-background", category: "Backgrounds", title: "Aurora Background", description: "A mesmerizing aurora borealis background effect.", component: AuroraBackground, props: [], stories: [{ name: "Default", args: { children: <div>Aurora</div> } }] },
    { slug: "grid-pattern", category: "Backgrounds", title: "Grid Pattern", description: "A simple geometric grid pattern background.", component: GridPattern, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "shooting-stars", category: "Backgrounds", title: "Shooting Stars", description: "Animated shooting stars effect.", component: ShootingStars, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "stars", category: "Backgrounds", title: "Stars", description: "Static or twinkling stars background.", component: Stars, props: [], stories: [{ name: "Default", args: {} }] },
    // Special
    {
        slug: "meteors",
        title: "Meteors",
        category: "Special",
        description: "Animated meteor shower effect for cosmic background storytelling.",
        component: Demos.MeteorsDemo,
        props: [{ name: "number", type: "number", defaultValue: 20, control: { type: "number" } }],
        stories: [{ name: "Default", args: { number: 20 } }]
    },
    {
        slug: "particles",
        title: "Particles",
        category: "Special",
        description: "Highly performant interactive particle backgrounds.",
        component: Demos.ParticlesDemo,
        props: [
            { name: "quantity", type: "number", defaultValue: 100, control: { type: "number" } },
            { name: "color", type: "color", defaultValue: "#000000", control: { type: "color" } }
        ],
        stories: [{ name: "Default", args: { quantity: 100, color: "#000000" } }]
    },
    {
        slug: "magic-card",
        title: "Magic Card",
        category: "Special",
        description: "A card with a spotlight hover effect and interactive glass styles.",
        component: Demos.MagicCardDemo,
        props: [],
        stories: [{ name: "Default", args: {} }]
    },
    { slug: "3d-card", category: "Special", title: "3D Card", description: "A card with 3D depth and hover effects.", component: Demos.ThreeDCardDemo, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "animated-beam", category: "Special", title: "Animated Beam", description: "A beam of light traveling along a path.", component: AnimatedBeam, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "border-beam", category: "Special", title: "Border Beam", description: "An animated beam of light traveling around a container's border.", component: BorderBeam, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "cool-mode", category: "Special", title: "Cool Mode", description: "A fun particle effect when clicking elements.", component: Demos.CoolModeDemo, props: [], stories: [{ name: "Default", args: { children: "Cool Mode" } }] },
    { slug: "orbiting-circles", category: "Special", title: "Orbiting Circles", description: "Circles orbiting around a central point.", component: Demos.OrbitingCirclesDemo, props: [], stories: [{ name: "Default", args: {} }] },
    { slug: "shimmer-button", category: "Special", title: "Shimmer Button", description: "A button with a shimmering light effect.", component: ShimmerButton, props: [], stories: [{ name: "Default", args: { children: "Shimmer" } }] },
    { slug: "velocity-scroll", category: "Special", title: "Velocity Scroll", description: "Text that scrolls based on scroll velocity.", component: VelocityScroll, props: [], stories: [{ name: "Default", args: { text: "Velocity Scroll" } }] },
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
            stories: []
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
            props: hook.data.props ? hook.data.props.map((p) => ({
                name: p.name,
                type: p.type,
                defaultValue: p.default,
                description: p.description,
                control: { type: "text" } as const
            })) : [],
            stories: [
                {
                    name: "Usage",
                    args: {
                        example: hook.data.examples[0]
                    }
                }
            ]
        }
    }

    return undefined
}

export function getAllComponentSlugs() {
    return [
        ...components.map((c) => c.slug),
        ...docs.map((d) => d.slug),
        ...hooks.map((h) => h.slug)
    ]
}

export function getSidebarData() {
    const categories: Record<string, string[]> = {}

    // Process components
    components.forEach((c) => {
        if (!categories[c.category]) {
            categories[c.category] = []
        }
        categories[c.category].push(c.slug)
    })

    // Process docs
    docs.forEach((d) => {
        const cat = "Docs"
        if (!categories[cat]) categories[cat] = []
        categories[cat].push(d.slug)
    })

    // Process hooks
    hooks.forEach((h) => {
        const cat = "Hooks"
        if (!categories[cat]) categories[cat] = []
        categories[cat].push(h.slug)
    })

    const titleCase = (str: string) => str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

    return Object.keys(categories).map(name => ({
        name,
        items: categories[name].map(slug => {
            const comp = components.find(c => c.slug === slug)
            if (comp) return { title: comp.title, slug }
            const doc = docs.find(d => d.slug === slug)
            if (doc) return { title: doc.title, slug }
            const hook = hooks.find(h => h.slug === slug)
            if (hook) return { title: hook.title, slug }
            return { title: titleCase(slug), slug }
        }).sort((a, b) => a.title.localeCompare(b.title))
    })).sort((a, b) => {
        const order = ["Core", "Layout", "Text", "Backgrounds", "Special", "Feedback", "Utils", "Docs", "Hooks"]
        return order.indexOf(a.name) - order.indexOf(b.name)
    })
}
