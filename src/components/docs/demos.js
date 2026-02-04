"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { 
// Core
Accordion, Alert, AlertDescription, AlertTitle, Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, InView, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Input, Label, Progress, RadioGroup, RadioGroupItem, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, Slider, Switch, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ToastProvider, useToast, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, cn, 
// Hooks
useTheme, useWindowSize, useCopyToClipboard, useAsync, useClickOutside, useMouse, useScrollProgress, 
// Layout
AnimatedList, AvatarCircles, BentoCard, BentoGrid, CollapsibleSidebar, Dock, DockIcon, DottedMap, ExpandableBentoCard, GlassDock, Globe, GlowBorderCard, HorizontalScroll, IconCloud, Lens, Marquee, OrbitingCircles, PerspectiveMenu, PixelImage, ResizablePanel, Sidebar, SidebarItem, StaggeredGrid, Timeline, TweetCard, SidebarHeader, SidebarSection, FileTree, 
// Text
AnimatedGradientText, AnimatedNumber, AnimatedShinyText, AuroraText, BlurFade, BoxReveal, ComicText, FadeText, FlipText, FlipText3D, GradualSpacing, HyperText, LetterPullup, LineShadowText, MorphingText, NumberTicker, RotateText, ScrollBasedVelocity, SeparateAway, SparklesText, SpinningText, TextAnimate, TextHighlighter, TextReveal, TypingAnimation, VelocityScroll, VideoText, WavyText, WordRotate, 
// Backgrounds
AnimatedGridPattern, AuroraBackground, BackgroundBeams, DotPattern, FlickeringGrid, GridPattern, InteractiveGridPattern, RetroGrid, Ripple, ShootingStars, Stars, StripedPattern, WarpBackground, 
// Buttons
AnimatedButton, CreepyButton, GlowButton, GooeyButton, InteractiveHoverButton, MagneticButton, PulsatingButton, RainbowButton, RippleButton, ShimmerButton, ShinyButton, SocialFlipButton, 
// Interaction
AnimatedCircularProgressBar, CardStack, CustomCursor, Safari, HoverRevealCard, MagneticWrapper, NeonGradientCard, NoiseOverlay, ParallaxImage, ScrollProgress, 
// Special/Misc
AnimatedBeam, BorderBeam, CanvasSmudge, Confetti, ConfettiSideCannons, CoolMode, GlitchEffect, Gravity, MagicCard, Magnifier, Meteors, OrbitingDots, ParticleImage, Particles, RippleEffect, Scene3D, ShineBorder, Snow, Spotlight, SpotlightNew, ThreeDCard, 
// Feedback
CommandMenu, PercentLoader, RevealLoader, Skeleton, SmartInput, StatusIcon, ThemeToggle, 
// Skeletons
ComponentPageSkeleton, FadeIn, CodeComparison, AnimatedThemeToggler, } from "@unicorn-ui/ui";
import { motion } from "framer-motion";
import { useState } from "react";
// Utils
import { Home, Settings, User } from "lucide-react";
export function AccordionDemo(props) {
    return (_jsx(Accordion, { type: "single", collapsible: true, className: "w-full", items: [
            {
                id: "item-1",
                title: "Is it accessible?",
                content: "Yes. It adheres to the WAI-ARIA design pattern.",
            },
            {
                id: "item-2",
                title: "Is it styled?",
                content: "Yes. It comes with default styles that matches the other components' aesthetic.",
            },
            {
                id: "item-3",
                title: "Is it animated?",
                content: "Yes. It's animated by default, but you can disable it if you prefer.",
            },
        ], ...props }));
}
export function AlertDemo({ children, ...props }) {
    return (_jsxs(Alert, { ...props, children: [_jsx(AlertTitle, { children: "Heads up!" }), _jsx(AlertDescription, { children: children })] }));
}
export function AvatarDemo() {
    return (_jsxs(Avatar, { children: [_jsx(AvatarImage, { src: "https://github.com/shadcn.png", alt: "@Unicorn-ui" }), _jsx(AvatarFallback, { children: "UI" })] }));
}
export function BadgeDemo(props) {
    return _jsx(Badge, { ...props });
}
export function ButtonDemo(props) {
    return _jsx(Button, { ...props });
}
export function CardDemo({ children, className, ...props }) {
    return (_jsxs(Card, { className: className, ...props, children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Create project" }), _jsx(CardDescription, { children: "Deploy your new project in one-click." })] }), _jsx(CardContent, { children: children }), _jsxs(CardFooter, { className: "flex justify-between", children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { children: "Deploy" })] })] }));
}
export function CheckboxDemo(props) {
    return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Checkbox, { id: "terms", ...props }), _jsx(Label, { htmlFor: "terms", children: "Accept terms and conditions" })] }));
}
export function DialogDemo() {
    return (_jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Edit Profile" }) }), _jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Edit profile" }), _jsx(DialogDescription, { children: "Make changes to your profile here. Click save when you're done." })] }), _jsxs("div", { className: "grid gap-4 py-4", children: [_jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [_jsx(Label, { htmlFor: "name", className: "text-right", children: "Name" }), _jsx(Input, { id: "name", defaultValue: "Pedro Duarte", className: "col-span-3" })] }), _jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [_jsx(Label, { htmlFor: "username", className: "text-right", children: "Username" }), _jsx(Input, { id: "username", defaultValue: "@peduarte", className: "col-span-3" })] })] }), _jsx(DialogFooter, { children: _jsx(Button, { type: "submit", children: "Save changes" }) })] })] }));
}
export function DropdownMenuDemo() {
    return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Menu" }) }), _jsxs(DropdownMenuContent, { className: "w-56", children: [_jsx(DropdownMenuLabel, { children: "My Account" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "Profile" }), _jsx(DropdownMenuItem, { children: "Billing" }), _jsx(DropdownMenuItem, { children: "Team" }), _jsx(DropdownMenuItem, { children: "Subscription" })] })] }));
}
export function InputDemo(props) {
    return _jsx(Input, { type: "email", placeholder: "Email", ...props });
}
export function LabelDemo() {
    return (_jsxs("div", { className: "grid w-full max-w-sm items-center gap-1.5", children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { type: "email", id: "email", placeholder: "Email" })] }));
}
export function ProgressDemo(props) {
    return _jsx(Progress, { className: "w-[60%]", ...props });
}
export function RadioGroupDemo() {
    return (_jsxs(RadioGroup, { defaultValue: "option-one", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-one", id: "option-one" }), _jsx(Label, { htmlFor: "option-one", children: "Option One" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(RadioGroupItem, { value: "option-two", id: "option-two" }), _jsx(Label, { htmlFor: "option-two", children: "Option Two" })] })] }));
}
export function SelectDemo() {
    return (_jsxs(Select, { children: [_jsx(SelectTrigger, { className: "w-[180px]", children: _jsx(SelectValue, { placeholder: "Select a fruit" }) }), _jsx(SelectContent, { children: _jsxs(SelectGroup, { children: [_jsx(SelectLabel, { children: "Fruits" }), _jsx(SelectItem, { value: "apple", children: "Apple" }), _jsx(SelectItem, { value: "banana", children: "Banana" }), _jsx(SelectItem, { value: "blueberry", children: "Blueberry" }), _jsx(SelectItem, { value: "grapes", children: "Grapes" }), _jsx(SelectItem, { value: "pineapple", children: "Pineapple" })] }) })] }));
}
export function SheetDemo() {
    return (_jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open Sheet" }) }), _jsxs(SheetContent, { children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Edit profile" }), _jsx(SheetDescription, { children: "Make changes to your profile here. Click save when you're done." })] }), _jsx("div", { className: "grid gap-4 py-4", children: _jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [_jsx(Label, { htmlFor: "name", className: "text-right", children: "Name" }), _jsx(Input, { id: "name", value: "Pedro Duarte", className: "col-span-3" })] }) }), _jsx(DialogFooter, { children: _jsx(Button, { type: "submit", children: "Save changes" }) })] })] }));
}
export function SliderDemo(props) {
    // Handle both controlled and uncontrolled scenarios or just pass props
    // ensure value is passed if it exists in props to make it controlled
    return _jsx(Slider, { className: "w-[60%]", ...props });
}
export function SwitchDemo(props) {
    return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Switch, { id: "airplane-mode", ...props }), _jsx(Label, { htmlFor: "airplane-mode", children: "Airplane Mode" })] }));
}
export function TableDemo() {
    return (_jsxs(Table, { children: [_jsx(TableCaption, { children: "A list of your recent invoices." }), _jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { className: "w-[100px]", children: "Invoice" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Method" }), _jsx(TableHead, { className: "text-right", children: "Amount" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "INV-001" }), _jsx(TableCell, { children: "Paid" }), _jsx(TableCell, { children: "Credit Card" }), _jsx(TableCell, { className: "text-right", children: "$250.00" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "INV-002" }), _jsx(TableCell, { children: "Pending" }), _jsx(TableCell, { children: "PayPal" }), _jsx(TableCell, { className: "text-right", children: "$150.00" })] })] })] }));
}
export function TabsDemo() {
    return (_jsxs(Tabs, { defaultValue: "account", className: "w-[400px]", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "account", children: "Account" }), _jsx(TabsTrigger, { value: "password", children: "Password" })] }), _jsx(TabsContent, { value: "account", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Account" }), _jsx(CardDescription, { children: "Make changes to your account here. Click save when you're done." })] }), _jsx(CardContent, { className: "space-y-2", children: _jsxs("div", { className: "space-y-1", children: [_jsx(Label, { htmlFor: "name", children: "Name" }), _jsx(Input, { id: "name", defaultValue: "Pedro Duarte" })] }) }), _jsx(CardFooter, { children: _jsx(Button, { children: "Save changes" }) })] }) }), _jsx(TabsContent, { value: "password", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Password" }), _jsx(CardDescription, { children: "Change your password here. After saving, you'll be logged out." })] }), _jsxs(CardContent, { className: "space-y-2", children: [_jsxs("div", { className: "space-y-1", children: [_jsx(Label, { htmlFor: "current", children: "Current password" }), _jsx(Input, { id: "current", type: "password" })] }), _jsxs("div", { className: "space-y-1", children: [_jsx(Label, { htmlFor: "new", children: "New password" }), _jsx(Input, { id: "new", type: "password" })] })] }), _jsx(CardFooter, { children: _jsx(Button, { children: "Save password" }) })] }) })] }));
}
export function TextareaDemo(props) {
    return _jsx(Textarea, { placeholder: "Type your message here.", ...props });
}
export function ToastDemo() {
    const { addToast } = useToast();
    return (_jsx(Button, { onClick: () => addToast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
        }), children: "Add to calendar" }));
}
// Wrapper for ToastDemo to include provider
export function ToastDemoWrapper(props) {
    return (_jsx(ToastProvider, { children: _jsx(ToastDemo, { ...props }) }));
}
export function TooltipDemo() {
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Hover" }) }), _jsx(TooltipContent, { children: _jsx("p", { children: "Add to library" }) })] }) }));
}
export function BentoGridDemo() {
    return (_jsx(BentoGrid, { className: "max-w-4xl mx-auto md:auto-rows-auto", children: [1, 2, 3, 4, 5, 6].map((i) => (_jsx(BentoCard, { title: `Item ${i}`, description: "A sleek bento grid item.", background: _jsx("div", { className: "flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-purple-500 to-pink-600" }), className: i === 3 || i === 6 ? "md:col-span-2" : "", cta: "Learn More", href: "https://shubham-jain.vercel.app", Icon: Home, name: `Item ${i}` }, i))) }));
}
export function DockDemo() {
    return (_jsx("div", { className: "relative h-[150px] w-full flex items-center justify-center", children: _jsxs(Dock, { className: "mb-0", children: [_jsx(DockIcon, { children: _jsx(Home, { className: "h-6 w-6" }) }), _jsx(DockIcon, { children: _jsx(User, { className: "h-6 w-6" }) })] }) }));
}
export function ResizablePanelDemo() {
    return (_jsx("div", { className: "h-[300px] w-full border rounded-lg overflow-hidden flex", children: _jsx(ResizablePanel, { minWidth: 150, maxWidth: 400, className: "p-4", children: _jsx("span", { className: "font-semibold", children: "Sidebar" }) }) }));
}
export function ThreeDCardDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-10", children: _jsx(ThreeDCard, { className: "w-full max-w-sm", children: _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("h1", { className: "font-bold text-xl text-foreground", children: "Make things float in air" }), _jsx("p", { className: "text-muted-foreground", children: "Hover over this card to unleash the power of CSS perspective" }), _jsx("div", { className: "h-40 w-full bg-blue-500 rounded-xl mt-4 shadow-xl" })] }) }) }));
}
export function FileTreeDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(FileTree, { data: [
                {
                    name: "src",
                    type: "folder",
                    children: [
                        { name: "index.ts", type: "file" },
                        { name: "styles.css", type: "file" },
                        {
                            name: "components",
                            type: "folder",
                            children: [
                                { name: "button.tsx", type: "file" },
                                { name: "input.tsx", type: "file" },
                            ],
                        },
                    ],
                },
                { name: "package.json", type: "file" },
                { name: "README.md", type: "file" },
            ] }) }));
}
export function TimelineDemo() {
    const data = [
        { title: "2024", content: _jsx("p", { children: "Built the library" }) },
        { title: "2023", content: _jsx("p", { children: "Started the project" }) },
    ];
    return _jsx(Timeline, { data: data });
}
export function SidebarDemo() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (_jsxs("div", { className: "h-[300px] border rounded-md overflow-hidden flex", children: [_jsxs(Sidebar, { className: "h-full border-r", children: [_jsx(SidebarItem, { icon: _jsx(Home, { className: "h-5 w-5" }), children: "Home" }), _jsx(SidebarItem, { icon: _jsx(User, { className: "h-5 w-5" }), children: "Profile" })] }), _jsx("div", { className: "flex-1 p-4 bg-background", children: "Content goes here" })] }));
}
// --- Hook Demos ---
export function UseThemeDemo() {
    const { theme, setTheme } = useTheme();
    return (_jsxs("div", { className: "flex flex-col gap-2", children: [_jsxs("p", { children: ["Current Theme: ", theme] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { onClick: () => setTheme("light"), variant: "outline", children: "Light" }), _jsx(Button, { onClick: () => setTheme("dark"), variant: "outline", children: "Dark" })] })] }));
}
export function UseWindowSizeDemo() {
    const { width, height } = useWindowSize();
    return (_jsxs("div", { className: "p-4 border rounded bg-muted/50 text-center", children: [width, "px x ", height, "px"] }));
}
export function UseCopyToClipboardDemo() {
    const [text, setText] = useState("Copy me!");
    const [copied, copy] = useCopyToClipboard();
    return (_jsxs("div", { className: "flex gap-2 max-w-sm", children: [_jsx(Input, { value: text, onChange: (e) => setText(e.target.value) }), _jsx(Button, { onClick: () => copy(text), children: copied ? "Copied!" : "Copy" })] }));
}
export function UseAsyncDemo() {
    const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return "Success! Data loaded.";
    };
    const { execute, data, error, loading } = useAsync(fetchData);
    return (_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Button, { onClick: () => execute(), disabled: loading, children: loading ? "Loading..." : "Fetch Data" }), data && _jsx("div", { className: "text-green-500", children: data }), error && _jsxs("div", { className: "text-red-500", children: ["Error: ", error?.message] })] }));
}
export function UseClickOutsideDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside(() => setIsOpen(false));
    return (_jsxs("div", { className: "relative", children: [_jsx(Button, { onClick: () => setIsOpen(true), children: "Open Modal" }), isOpen && (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50", children: _jsx("div", { ref: ref, className: "bg-background p-8 rounded-lg shadow-xl", children: "Click outside to close" }) }))] }));
}
export function UseMouseDemo() {
    const { x, y } = useMouse();
    return (_jsxs("div", { className: "p-4 border rounded bg-muted/50 text-center flex flex-col items-center gap-2", children: [_jsx("p", { children: "Move your mouse around" }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("span", { className: "p-2 border rounded", children: ["X: ", _jsx(motion.span, { children: x })] }), _jsxs("span", { className: "p-2 border rounded", children: ["Y: ", _jsx(motion.span, { children: y })] })] })] }));
}
export function UseScrollProgressDemo() {
    const { scrollYProgress } = useScrollProgress();
    return (_jsx("div", { className: "w-full h-4 bg-muted rounded-full overflow-hidden", children: _jsx(motion.div, { className: "h-full bg-primary", style: { scaleX: scrollYProgress, transformOrigin: 0 } }) }));
}
// --- Utils Demos ---
export function InViewDemo() {
    return (_jsxs("div", { className: "h-[200px] overflow-auto border rounded p-4", children: [_jsx("div", { className: "h-[300px] flex items-center justify-center text-muted-foreground", children: "Scroll down..." }), _jsx(InView, { children: _jsx("div", { className: "p-6 bg-primary text-primary-foreground rounded-lg shadow-lg text-center", children: "I'm in view!" }) }), _jsx("div", { className: "h-[300px]" })] }));
}
export function MeteorsDemo({ number = 30, ...props }) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(Meteors, { number: number, ...props }), _jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Meteors" })] }));
}
export function ParticlesDemo({ quantity = 100, color = "#000000", ...props }) {
    // Use current color if no color prop is passed (or handle dark mode in parent)
    const theme = useTheme();
    const effectiveColor = color === "#000000" && theme.theme === 'dark' ? "#ffffff" : color;
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(Particles, { className: "absolute inset-0", quantity: quantity, ease: 80, color: effectiveColor, refresh: true, ...props }), _jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Particles" })] }));
}
export function MagicCardDemo(props) {
    return (_jsxs("div", { className: "flex h-[300px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row", children: [_jsx(MagicCard, { className: "cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl", ...props, children: "Magic" }), _jsx(MagicCard, { className: "cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl", ...props, children: "Card" })] }));
}
export function CoolModeDemo() {
    return (_jsx("div", { className: "relative flex h-full w-full items-center justify-center py-12", children: _jsx(CoolMode, { children: _jsx(Button, { children: "Click Me!" }) }) }));
}
export function OrbitingCirclesDemo() {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Orbiting Circles" }), _jsx(OrbitingCircles, { className: "size-[30px] border-none bg-transparent", duration: 20, delay: 20, radius: 80, children: _jsx("div", { className: "h-full w-full bg-red-500 rounded-full" }) }), _jsx(OrbitingCircles, { className: "size-[30px] border-none bg-transparent", duration: 20, delay: 10, radius: 80, children: _jsx("div", { className: "h-full w-full bg-blue-500 rounded-full" }) })] }));
}
export function CollapsibleSidebarDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsxs(CollapsibleSidebar, { className: "w-full h-full border-none", children: [_jsx(SidebarHeader, { className: "px-4 py-4", children: _jsxs("div", { className: "flex items-center gap-2 font-bold", children: [_jsx("div", { className: "h-6 w-6 rounded-md bg-primary" }), _jsx("span", { children: "Unicorn" })] }) }), _jsxs(SidebarSection, { title: "Main", children: [_jsx(SidebarItem, { icon: _jsx(Home, { className: "h-4 w-4" }), children: "Dashboard" }), _jsx(SidebarItem, { icon: _jsx(User, { className: "h-4 w-4" }), children: "Profile" })] }), _jsx(SidebarSection, { title: "Settings", children: _jsx(SidebarItem, { icon: _jsx(Settings, { className: "h-4 w-4" }), children: "General" }) })] }) }));
}
export function MarqueeDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(Marquee, { pauseOnHover: true, className: "[--duration:20s]", children: [1, 2, 3, 4, 5].map((i) => (_jsxs("div", { className: "mx-2 h-full w-32 rounded-lg border bg-card p-4", children: ["Card ", i] }, i))) }) }));
}
export function AnimatedGridPatternDemo(props) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(AnimatedGridPattern, { ...props }), _jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Grid Pattern" })] }));
}
export function RetroGridDemo(props) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(RetroGrid, { ...props }), _jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Retro Grid" })] }));
}
export function RippleDemo() {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("p", { className: "z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground", children: "Ripple" }), _jsx(Ripple, {})] }));
}
export const SplitLayoutDemo = ResizablePanelDemo;
export function AnimatedNumberDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(AnimatedNumber, { value: 100 }) }));
}
export function AuroraTextDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(AuroraText, { children: "Aurora Text" }) }));
}
export function AnimatedShinyTextDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(AnimatedShinyText, { children: "Shiny Text" }) }));
}
export function LineShadowTextDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(LineShadowText, { shadowColor: "black", children: "Line Shadow" }) }));
}
export function VideoTextDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(VideoText, { text: "VIDEO", videoSrc: "https://cdn.coverr.co/videos/coverr-surfers-at-sunset-4386/1080p.mp4" }) }));
}
export function ScrollBasedVelocityDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(ScrollBasedVelocity, { text: "Scroll Velocity" }) }));
}
export function BlurFadeDemo() {
    return (_jsx("div", { className: "h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl p-4", children: _jsx(BlurFade, { delay: 0.25, children: _jsx("span", { className: "text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none", children: "Blur Fade" }) }) }));
}
export function MorphingTextDemo() {
    return (_jsx("div", { className: "h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl", children: _jsx(MorphingText, { texts: ["Morphing", "Text", "Animation"] }) }));
}
export function NumberTickerDemo() {
    return (_jsx("div", { className: "h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl", children: _jsx("p", { className: "whitespace-pre-wrap text-8xl font-medium tracking-tighter text-foreground", children: _jsx(NumberTicker, { value: 100 }) }) }));
}
export function SparklesTextDemo() {
    return (_jsx("div", { className: "h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl", children: _jsx(SparklesText, { text: "Sparkles Text" }) }));
}
export function TypingAnimationDemo() {
    return (_jsx("div", { className: "h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl", children: _jsx(TypingAnimation, { className: "text-4xl font-bold text-foreground", text: "Typing Animation" }) }));
}
export function LetterPullupDemo() {
    return (_jsx("div", { className: "h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl", children: _jsx(LetterPullup, { text: "Letter Pull Up", delay: 0.05 }) }));
}
export function WordRotateDemo() {
    return (_jsx("div", { className: "h-[300px] w-full flex items-center justify-center border rounded-lg bg-background md:shadow-xl", children: _jsx(WordRotate, { words: ["Rotate", "Words", "Animation"] }) }));
}
export function AuroraBackgroundDemo(props) {
    return (_jsx("div", { className: "h-[300px] w-full overflow-hidden rounded-lg border md:shadow-xl relative", children: _jsx(AuroraBackground, { ...props, children: _jsx("div", { className: "relative flex flex-col items-center justify-center gap-4 px-4", children: _jsx("div", { className: "text-3xl font-bold dark:text-white md:text-7xl", children: "Aurora" }) }) }) }));
}
export function GridPatternDemo() {
    return (_jsxs("div", { className: "relative h-[300px] w-full overflow-hidden rounded-lg border bg-background md:shadow-xl flex items-center justify-center", children: [_jsx("p", { className: "z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground", children: "Grid Pattern" }), _jsx(GridPattern, { width: 30, height: 30, x: -1, y: -1, strokeDasharray: "4 2", className: cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]") })] }));
}
export function ShootingStarsDemo() {
    return (_jsxs("div", { className: "relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-slate-900", children: [_jsx("h2", { className: "relative z-10 text-3xl font-bold text-center text-white md:text-5xl", children: "Shooting Stars" }), _jsx(ShootingStars, {}), _jsx(Stars, {})] }));
}
export function StarsDemo() {
    return (_jsxs("div", { className: "relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-black", children: [_jsx("span", { className: "pointer-events-none z-10 whitespace-pre-wrap bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent", children: "Stars" }), _jsx(Stars, {})] }));
}
export function VelocityScrollDemo() {
    return (_jsx("div", { className: "relative h-[300px] w-full flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(VelocityScroll, { text: "Velocity Scroll", defaultVelocity: 5, className: "font-display text-center text-4xl font-bold tracking-[-0.02em] text-foreground drop-shadow-sm md:text-7xl md:leading-20" }) }));
}
export function HyperTextDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(HyperText, { text: "Hyper Text" }) }));
}
export function FadeTextDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(FadeText, { text: "Fade Text", direction: "up" }) }));
}
export function FlipTextDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(FlipText, { word: "Flip Text" }) }));
}
export function AnimatedGradientTextDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(AnimatedGradientText, { children: _jsx("span", { className: "inline animate-gradient bg-linear-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent", children: "Animated Gradient Text" }) }) }));
}
export function StripedPatternDemo(props) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(StripedPattern, { className: "opacity-50", ...props }), _jsx("p", { className: "z-10 text-5xl font-medium tracking-tighter text-black dark:text-white", children: "Striped Pattern" })] }));
}
export function WarpBackgroundDemo(props) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border md:shadow-xl", children: [_jsx(WarpBackground, { ...props }), _jsx(Card, { className: "z-50 w-80", children: _jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Warp Background" }), _jsx(CardDescription, { children: "A background that warps the grid behind it." })] }) })] }));
}
export function InteractiveGridPatternDemo(props) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(InteractiveGridPattern, { ...props }), _jsx("p", { className: "z-10 text-5xl font-medium tracking-tighter text-black dark:text-white", children: "Interactive Grid" })] }));
}
export function FlickeringGridDemo(props) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(FlickeringGrid, { ...props }), _jsx("p", { className: "z-10 text-5xl font-medium tracking-tighter text-black dark:text-white", children: "Flickering Grid" })] }));
}
// --- New Button Demos ---
export function ShimmerButtonDemo(props) {
    return (_jsx("div", { className: "z-10 flex h-80 items-center justify-center", children: _jsx(ShimmerButton, { className: "shadow-2xl", ...props, children: _jsx("span", { className: "whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg", children: "Shimmer Button" }) }) }));
}
export function RainbowButtonDemo(props) {
    return _jsx(RainbowButton, { ...props, children: "Get Unlimited Access" });
}
export function GlowButtonDemo(props) {
    return _jsx(GlowButton, { ...props, children: "Glow Button" });
}
export function RippleButtonDemo(props) {
    return (_jsx("div", { className: "flex items-center justify-center h-full", children: _jsx(RippleButton, { ...props, children: "Ripple Button" }) }));
}
export function MagneticButtonDemo() {
    return (_jsx(MagneticButton, { children: _jsx(Button, { children: "Magnetic Button" }) }));
}
export function PulsatingButtonDemo(props) {
    return _jsx(PulsatingButton, { ...props, children: "Pulsating Button" });
}
export function ShinyButtonDemo(props) {
    return _jsx(ShinyButton, { ...props, children: "Shiny Button" });
}
export function AnimatedButtonDemo(props) {
    return _jsx(AnimatedButton, { ...props, children: "Animated Button" });
}
export function GooeyButtonDemo(props) {
    return _jsx(GooeyButton, { ...props, children: "Gooey Button" });
}
export function InteractiveHoverButtonDemo({ text = "Hover Me", ...props }) {
    return _jsx(InteractiveHoverButton, { ...props, children: text });
}
export function CreepyButtonDemo(props) {
    return _jsx(CreepyButton, { ...props, children: "Creepy Button" });
}
export function SocialFlipButtonDemo() {
    return (_jsxs("div", { className: "flex flex-col gap-4 items-center justify-center h-80", children: [_jsx(SocialFlipButton, { frontText: "GitHub", backText: "Follow @unicorn-ui" }), _jsx(SocialFlipButton, { frontText: "Twitter", backText: "Follow @unicorn_ui" })] }));
}
// --- Special Effects Demos ---
export function ConfettiDemo() {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Confetti" }), _jsx(Confetti, {})] }));
}
export function ConfettiSideCannonsDemo() {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(ConfettiSideCannons, {}), _jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Cannons" })] }));
}
export function SpotlightDemo() {
    return (_jsxs("div", { className: "h-80 w-full rounded-md flex md:items-center md:justify-center bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden", children: [_jsx(Spotlight, { className: "-top-40 left-0 md:left-60 md:-top-20" }), _jsx("div", { className: " p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0", children: _jsxs("h1", { className: "text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50", children: ["Spotlight ", _jsx("br", {}), " is the new trend."] }) })] }));
}
export function BorderBeamDemo() {
    return (_jsxs("div", { className: "relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Border Beam" }), _jsx(BorderBeam, { size: 250, duration: 12, delay: 9 })] }));
}
export function ShineBorderDemo(props) {
    return (_jsx("div", { className: "flex items-center justify-center h-[200px]", children: _jsx(ShineBorder, { className: "text-center text-2xl font-bold capitalize", color: ["#A07CFE", "#FE8FB5", "#FFBE7B"], ...props, children: "Shine Border" }) }));
}
export function RippleEffectDemo(props) {
    return (_jsxs("div", { className: "flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(RippleEffect, { ...props }), _jsx("p", { className: "z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-foreground", children: "Ripple Effect" })] }));
}
export function GlitchEffectDemo() {
    return (_jsx("div", { className: "flex h-[200px] w-full items-center justify-center", children: _jsx(GlitchEffect, { text: "GLITCH" }) }));
}
export function CanvasSmudgeDemo(props) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx(CanvasSmudge, { ...props }), _jsx("p", { className: "pointer-events-none z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white", children: "Smudge" })] }));
}
export function Scene3DDemo() {
    return (_jsx("div", { className: "relative h-[300px] w-full overflow-hidden rounded-lg border", children: _jsx(Scene3D, {}) }));
}
export function GravityDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(Gravity, { items: [
                _jsx("div", { className: "text-4xl font-bold bg-white p-4 rounded-xl text-black", children: "Gravity" }, "1"),
                _jsx("div", { className: "text-2xl font-bold bg-white p-2 rounded-xl text-black", children: "Physics" }, "2"),
                _jsx("div", { className: "text-xl font-bold bg-white p-2 rounded-xl text-black", children: "Matter" }, "3")
            ] }) }));
}
// --- Background Demos ---
export function StarsDemo() {
    return (_jsxs("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Stars" }), _jsx(Stars, {})] }));
}
export function DotPatternDemo() {
    return (_jsxs("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("p", { className: "z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white", children: "Dot Pattern" }), _jsx(DotPattern, { width: 20, height: 20, cx: 1, cy: 1, cr: 1, className: cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]") })] }));
}
export function StripedPatternDemo() {
    return (_jsxs("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("p", { className: "z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white", children: "Striped Pattern" }), _jsx(StripedPattern, {})] }));
}
export function WarpBackgroundDemo() {
    return (_jsxs("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("span", { className: "pointer-events-none z-10 whitespace-pre-wrap bg-linear-to-b from-[#ffaa40] to-[#9c40ff] bg-clip-text text-center text-7xl font-bold leading-none text-transparent", children: "Warp Speed" }), _jsx(WarpBackground, {})] }));
}
export function FlickeringGridDemo() {
    return (_jsxs("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: [_jsx("span", { className: "pointer-events-none z-10 whitespace-pre-wrap bg-linear-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none text-transparent", children: "Flickering Grid" }), _jsx(FlickeringGrid, { className: "z-0 absolute inset-0 size-full", squareSize: 4, gridGap: 6, color: "#6B7280", maxOpacity: 0.5, flickerChance: 0.1, height: 800, width: 800 })] }));
}
export function BackgroundBeamsDemo(props) {
    return (_jsxs("div", { className: "h-80 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased", children: [_jsx("div", { className: "max-w-2xl mx-auto p-4", children: _jsx("h1", { className: "relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold", children: "Background Beams" }) }), _jsx(BackgroundBeams, { ...props })] }));
}
export function OrbitingDotsDemo(props) {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(OrbitingDots, { ...props }) }));
}
export function SnowDemo(props) {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-slate-950 md:shadow-xl", children: [_jsx(Snow, { ...props }), _jsx("p", { className: "z-10 text-5xl font-medium tracking-tighter text-white", children: "Let it Snow" })] }));
}
export function HoverRevealCardDemo() {
    return (_jsx("div", { className: "flex h-80 w-full items-center justify-center", children: _jsx(HoverRevealCard, { title: "Hover me", subtitle: "I reveal secret content when you hover over me.", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", children: _jsx("h2", { className: "text-2xl font-bold", children: "Secret Content Revealed!" }) }) }));
}
export function MagneticWrapperDemo(props) {
    return (_jsx("div", { className: "flex h-80 w-full items-center justify-center", children: _jsx(MagneticWrapper, { ...props, children: _jsx(Button, { children: "Magnetic Wrapper" }) }) }));
}
export function NeonGradientCardDemo() {
    return (_jsx("div", { className: "flex h-80 w-full items-center justify-center", children: _jsx(NeonGradientCard, { className: "items-center justify-center text-center", children: _jsx("span", { className: "pointer-events-none z-10 h-full whitespace-pre-wrap bg-linear-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]", children: "Neon Gradient" }) }) }));
}
export function MagnifierDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(Magnifier, { imgSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" }) }));
}
export function ParticleImageDemo() {
    return (_jsx("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(ParticleImage, { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop" }) }));
}
export function SpotlightNewDemo() {
    return (_jsxs("div", { className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-slate-950", children: [_jsx(SpotlightNew, {}), _jsx("p", { className: "z-10 text-5xl font-medium tracking-tighter text-foreground", children: "Spotlight New" })] }));
}
export function AvatarCirclesDemo() {
    return (_jsx("div", { className: "flex h-40 w-full items-center justify-center", children: _jsx(AvatarCircles, { avatars: [
                { name: "User 1", src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" },
                { name: "User 2", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                { name: "User 3", src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop" },
                { name: "User 4", src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" },
                { name: "User 5", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
            ] }) }));
}
export function AnimatedBeamDemo({ curvature = 20, pathColor = "hsl(var(--primary))", pathWidth = 2, pathOpacity = 0.2, duration = 3, ...props }) {
    const containerRef = React.useRef(null);
    const fromRef = React.useRef(null);
    const toRef = React.useRef(null);
    return (_jsxs("div", { ref: containerRef, className: "relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-10", children: [_jsx("div", { className: "flex size-full flex-col items-stretch justify-between gap-10", children: _jsxs("div", { className: "flex flex-row items-center justify-between", children: [_jsx("div", { ref: fromRef, className: "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]", children: _jsx(User, { className: "h-6 w-6 text-black" }) }), _jsx("div", { ref: toRef, className: "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]", children: _jsx(Globe, { className: "h-6 w-6 text-black" }) })] }) }), _jsx(AnimatedBeam, { containerRef: containerRef, fromRef: fromRef, toRef: toRef, curvature: curvature, pathColor: pathColor, pathWidth: pathWidth, pathOpacity: pathOpacity, duration: duration, ...props })] }));
}
export function BoxRevealDemo({ boxColor = "hsl(var(--primary))", duration = 0.5, width = "fit-content", children = "Box Reveal Animation", ...props }) {
    return (_jsxs("div", { className: "h-full w-full max-w-lg items-center justify-center overflow-hidden pt-8", children: [_jsx(BoxReveal, { boxColor: boxColor, duration: duration, width: width, ...props, children: _jsxs("p", { className: "text-[3.5rem] font-semibold", children: ["Unicorn UI", _jsx("span", { className: "text-[hsl(var(--primary))]", children: "." })] }) }), _jsx(BoxReveal, { boxColor: boxColor, duration: duration, width: width, ...props, children: _jsx("h2", { className: "mt-[.5rem] text-[1rem]", children: children }) })] }));
}
export function ComicTextDemo({ children = "Comic Text", ...props }) {
    return (_jsx("div", { className: "flex h-40 w-full items-center justify-center", children: _jsx(ComicText, { className: "text-6xl", ...props, children: children }) }));
}
export function FlipText3DDemo({ children = "Flip Text 3D", ...props }) {
    return (_jsx("div", { className: "flex h-40 w-full items-center justify-center", children: _jsx(FlipText3D, { className: "text-6xl font-black", ...props, children: children }) }));
}
export function GradualSpacingDemo({ text = "Gradual Spacing", ...props }) {
    return (_jsx("div", { className: "flex h-40 w-full items-center justify-center", children: _jsx(GradualSpacing, { text: text, className: "text-4xl font-bold tracking-tighter", ...props }) }));
}
export function RotateTextDemo({ words = ["Rotate", "Text", "Animation"], ...props }) {
    return (_jsxs("div", { className: "flex h-40 w-full items-center justify-center text-4xl font-bold", children: [_jsx("span", { className: "mr-2", children: "I am" }), _jsx(RotateText, { words: words, className: "text-primary", ...props })] }));
}
export function SeparateAwayDemo({ upperText = "Separate", lowerText = "Away", ...props }) {
    return (_jsx("div", { className: "flex h-60 w-full items-center justify-center", children: _jsx(SeparateAway, { upperText: upperText, lowerText: lowerText, className: "text-8xl font-black", ...props, children: _jsx("div", { className: "text-2xl font-bold text-primary", children: "REVEALED" }) }) }));
}
export function SpinningTextDemo({ children = "SPINNING TEXT • ", ...props }) {
    return (_jsx("div", { className: "flex h-60 w-full items-center justify-center", children: _jsx(SpinningText, { className: "text-xl font-bold", ...props, children: children }) }));
}
export function TextAnimateDemo({ text = "Text Animate", ...props }) {
    return (_jsx("div", { className: "flex h-40 w-full items-center justify-center", children: _jsx(TextAnimate, { text: text, className: "text-5xl font-bold", ...props }) }));
}
export function TextRevealDemo({ text = "Text Reveal Animation", ...props }) {
    return (_jsxs("div", { className: "h-[400px] w-full overflow-auto border rounded-lg p-4 bg-background", children: [_jsx("div", { className: "h-[200px] flex items-center justify-center text-muted-foreground", children: "Scroll down to reveal..." }), _jsx(TextReveal, { text: text, className: "text-6xl font-bold py-20", ...props }), _jsx("div", { className: "h-[300px]" })] }));
}
export function WavyTextDemo({ text = "Wavy Text", ...props }) {
    return (_jsx("div", { className: "flex h-40 w-full items-center justify-center", children: _jsx(WavyText, { text: text, className: "text-5xl font-bold", ...props }) }));
}
export function TextHighlighterDemo({ text = "This is a text highlighter demo highlighting important words.", highlight = "highlighter", ...props }) {
    return (_jsx("div", { className: "flex h-40 w-full items-center justify-center px-10", children: _jsx(TextHighlighter, { text: text, highlight: highlight, className: "text-2xl font-medium leading-relaxed", highlightClassName: "bg-yellow-200 dark:bg-yellow-800 rounded px-1", ...props }) }));
}
export function StatusIconDemo(props) {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(StatusIcon, { status: "success", ...props }) }));
}
// --- Feedback Demos ---
export function SkeletonDemo() {
    return (_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Skeleton, { className: "h-12 w-12 rounded-full" }), _jsxs("div", { className: "space-y-2", children: [_jsx(Skeleton, { className: "h-4 w-[250px]" }), _jsx(Skeleton, { className: "h-4 w-[200px]" })] })] }));
}
export function ThemeToggleDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(ThemeToggle, {}) }));
}
export function CommandMenuDemo() {
    return (_jsxs("div", { className: "flex items-center justify-center p-8 text-sm text-muted-foreground", children: ["Press ", _jsxs("kbd", { className: "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100", children: [_jsx("span", { className: "text-xs", children: "\u2318" }), "J"] }), " to open command menu", _jsx(CommandMenu, {})] }));
}
export function PercentLoaderDemo(props) {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(PercentLoader, { ...props }) }));
}
export function RevealLoaderDemo(props) {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(RevealLoader, { text: "Loading...", ...props }) }));
}
export function SmartInputDemo() {
    return (_jsx("div", { className: "flex w-full max-w-sm items-center justify-center p-8", children: _jsx(SmartInput, { placeholder: "Type something smart..." }) }));
}
// --- Special & Misc Demos ---
export function NoiseOverlayDemo() {
    return (_jsxs("div", { className: "relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg border bg-card p-8", children: [_jsx("p", { className: "z-10 text-xl font-bold", children: "Noise Overlay" }), _jsx(NoiseOverlay, {})] }));
}
export function ParallaxImageDemo() {
    return (_jsx("div", { className: "relative h-64 w-full overflow-hidden rounded-lg", children: _jsx(ParallaxImage, { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", alt: "Parallax" }) }));
}
export function AnimatedCircularProgressBarDemo(props) {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(AnimatedCircularProgressBar, { max: 100, min: 0, value: 66, gaugePrimaryColor: "hsl(var(--primary))", gaugeSecondaryColor: "hsl(var(--muted))", ...props }) }));
}
// --- Layout Demos ---
export function AnimatedListDemo() {
    return (_jsx("div", { className: "relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg", children: _jsx(AnimatedList, { children: Array.from({ length: 5 }).map((_, idx) => (_jsxs("div", { className: "mb-4 flex items-center space-x-4 rounded-md border p-4 shadow-sm", children: [_jsx("div", { className: "h-10 w-10 rounded-full bg-primary/20" }), _jsxs("div", { className: "space-y-1", children: [_jsxs("p", { className: "text-sm font-medium leading-none", children: ["Notification ", idx + 1] }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Something happened in the system." })] })] }, idx))) }) }));
}
export function ExpandableBentoCardDemo() {
    return (_jsx("div", { className: "h-[500px] w-full max-w-3xl", children: _jsx(ExpandableBentoCard, {}) }));
}
export function GlassDockDemo() {
    return (_jsx("div", { className: "relative h-[300px] w-full flex items-end justify-center pb-12 bg-black/5 dark:bg-white/5 rounded-xl overflow-hidden", children: _jsx(GlassDock, { items: [
                { label: "Home", icon: (_jsx("div", { children: "\uD83C\uDFE0" })), href: "#" },
                { label: "Products", icon: (_jsx("div", { children: "\uD83D\uDECD\uFE0F" })), href: "#" },
                { label: "Settings", icon: (_jsx("div", { children: "\u2699\uFE0F" })), href: "#" },
            ] }) }));
}
export function GlobeDemo() {
    return (_jsxs("div", { className: "relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl", children: [_jsx("span", { className: "pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10", children: "Globe" }), _jsx(Globe, { className: "top-28" }), _jsx("div", { className: "pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" })] }));
}
export function GlowBorderCardDemo() {
    return (_jsx("div", { className: "relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsxs(GlowBorderCard, { className: "flex flex-col items-center justify-center p-4", children: [_jsx("span", { className: "text-xl font-bold", children: "Glow Border" }), _jsx("span", { className: "text-xs text-muted-foreground", children: "Hover to see magic" })] }) }));
}
export function HorizontalScrollDemo() {
    return (_jsx(HorizontalScroll, { children: Array.from({ length: 10 }).map((_, i) => (_jsx("div", { className: "flex h-40 w-60 shrink-0 items-center justify-center rounded-lg border bg-card shadow-sm mx-2", children: _jsxs("span", { className: "font-semibold", children: ["Item ", i + 1] }) }, i))) }));
}
export function IconCloudDemo() {
    const icons = [
        _jsx("span", { className: "text-4xl", children: "\u269B\uFE0F" }, "1"),
        _jsx("span", { className: "text-4xl", children: "\uD83D\uDCBB" }, "2"),
        _jsx("span", { className: "text-4xl", children: "\uD83D\uDE80" }, "3"),
        _jsx("span", { className: "text-4xl", children: "\uD83C\uDFA8" }, "4"),
        _jsx("span", { className: "text-4xl", children: "\uD83D\uDD27" }, "5"),
        _jsx("span", { className: "text-4xl", children: "\uD83D\uDCF1" }, "6"),
        _jsx("span", { className: "text-4xl", children: "\uD83C\uDF10" }, "7"),
        _jsx("span", { className: "text-4xl", children: "\uD83D\uDD25" }, "8"),
        _jsx("span", { className: "text-4xl", children: "\u26A1" }, "9"),
        _jsx("span", { className: "text-4xl", children: "\uD83C\uDF08" }, "10"),
    ];
    return (_jsx("div", { className: "relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ", children: _jsx(IconCloud, { icons: icons }) }));
}
export function LensDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-20 bg-slate-50 dark:bg-slate-900 rounded-lg", children: _jsx(Lens, { children: _jsx("img", { src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop", alt: "Lens Demo", className: "rounded-2xl w-64 h-64 object-cover" }) }) }));
}
export function PerspectiveMenuDemo() {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("div", { className: "relative flex items-center justify-center p-20 bg-slate-950 rounded-lg h-[400px]", children: [_jsx("button", { onClick: () => setIsOpen(true), className: "px-4 py-2 bg-primary text-primary-foreground rounded-md z-10", children: "Open Menu" }), _jsx(PerspectiveMenu, { isOpen: isOpen, onClose: () => setIsOpen(false), items: [
                    { label: "Home", href: "#" },
                    { label: "About", href: "#" },
                    { label: "Work", href: "#" },
                    { label: "Contact", href: "#" },
                ] })] }));
}
export function ImagePixelDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-8 bg-black", children: _jsx(PixelImage, { src: "/placeholder.png" }) }));
}
export function CardStackDemo() {
    return (_jsx("div", { className: "flex h-60 items-center justify-center w-full", children: _jsx(CardStack, { items: [
                { id: 1, name: "Card 1", designation: "Designer", content: _jsx("p", { children: "Review the design mocks" }) },
                { id: 2, name: "Card 2", designation: "Developer", content: _jsx("p", { children: "Implement the feature" }) },
                { id: 3, name: "Card 3", designation: "Manager", content: _jsx("p", { children: "Plan the next sprint" }) },
            ] }) }));
}
export function ComponentPageSkeletonDemo() {
    return (_jsx("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(ComponentPageSkeleton, {}) }));
}
export function TweetCardDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-8 bg-background", children: _jsx(TweetCard, { id: "1668466632709664771" }) }));
}
export function DottedMapDemo() {
    return (_jsx("div", { className: "relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(DottedMap, {}) }));
}
export function AnimatedThemeTogglerDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(AnimatedThemeToggler, {}) }));
}
export function FadeInDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-8 bg-background", children: _jsx(FadeIn, { children: _jsx("div", { className: "text-4xl font-bold", children: "Fade In Animation" }) }) }));
}
export function CodeComparisonDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-8 bg-background w-full", children: _jsx(CodeComparison, { beforeCode: "console.log('Hello World')", afterCode: "console.log('Hello Unicorn UI')", language: "typescript", filename: "example.ts" }) }));
}
export function ScrollProgressDemo() {
    return (_jsxs("div", { className: "relative w-full h-96 overflow-y-scroll bg-background border rounded-lg", children: [_jsx(ScrollProgress, { className: "top-0" }), _jsx("div", { className: "h-[1000px] p-8", children: _jsx("p", { children: "Scroll down to see progress..." }) })] }));
}
export function DeviceMockupsDemo() {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(Safari, { src: "https://ui.shadcn.com", className: "size-full" }) }));
}
export function CustomCursorDemo() {
    return (_jsxs("div", { className: "relative h-[300px] w-full bg-background border rounded-lg flex items-center justify-center overflow-hidden", children: [_jsx(CustomCursor, {}), _jsx("p", { children: "Hover here to see custom cursor" })] }));
}
export function StaggeredGridDemo() {
    return (_jsx("div", { className: "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl", children: _jsx(StaggeredGrid, { columns: 4, gap: 4, className: "p-4", children: Array.from({ length: 8 }).map((_, i) => (_jsxs("div", { className: "h-40 w-full rounded-lg bg-primary/10 border flex items-center justify-center", children: ["Item ", i + 1] }, i))) }) }));
}
