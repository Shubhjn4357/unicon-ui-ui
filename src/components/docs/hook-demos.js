"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, Input, useAsync, useClickOutside, useCopyToClipboard, useMouse, useResponsive, useScrollProgress, useTheme, useWindowSize, } from "@unicorn-ui/ui";
import { motion } from "framer-motion";
import { Check, Copy, Monitor, Moon, MousePointer2, Smartphone, Sun, Tablet } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";
// 1. useTheme Demo
export function UseThemeDemo() {
    const { theme, setTheme } = useTheme();
    return (_jsxs("div", { className: "flex flex-col items-center gap-4", children: [_jsxs("div", { className: "text-sm font-medium text-muted-foreground uppercase tracking-wider", children: ["Current Theme: ", _jsx("span", { className: "text-foreground font-bold", children: theme })] }), _jsxs("div", { className: "flex items-center gap-2 bg-muted p-1 rounded-full border", children: [_jsxs(Button, { variant: theme === "light" ? "default" : "ghost", size: "sm", onClick: () => setTheme("light"), className: "rounded-full", children: [_jsx(Sun, { className: "w-4 h-4 mr-2" }), " Light"] }), _jsxs(Button, { variant: theme === "dark" ? "default" : "ghost", size: "sm", onClick: () => setTheme("dark"), className: "rounded-full", children: [_jsx(Moon, { className: "w-4 h-4 mr-2" }), " Dark"] })] })] }));
}
// 2. useWindowSize Demo
export function UseWindowSizeDemo() {
    const { width, height } = useWindowSize();
    return (_jsxs("div", { className: "flex flex-col items-center justify-center p-8 border rounded-xl bg-muted/20 relative overflow-hidden group", children: [_jsx("div", { className: "absolute inset-0 bg-grid-white/[0.05] mask-[linear-gradient(0deg,transparent,black)]" }), _jsxs("div", { className: "relative z-10 text-center space-y-2", children: [_jsx(Monitor, { className: "w-12 h-12 mx-auto text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" }), _jsxs("div", { className: "text-4xl font-bold tracking-tighter", children: [width, " ", _jsx("span", { className: "text-muted-foreground text-2xl", children: "x" }), " ", height] }), _jsx("p", { className: "text-sm text-muted-foreground uppercase tracking-widest", children: "Window Dimensions" })] })] }));
}
// 3. useCopyToClipboard Demo
export function UseCopyToClipboardDemo() {
    const [text, setText] = useState("Hello, Unicorn UI!");
    const [copied, copy] = useCopyToClipboard();
    return (_jsxs("div", { className: "flex w-full max-w-sm items-center space-x-2", children: [_jsx(Input, { type: "text", value: text, onChange: (e) => setText(e.target.value), placeholder: "Type something..." }), _jsxs(Button, { onClick: () => copy(text), disabled: !text, children: [copied ? _jsx(Check, { className: "w-4 h-4 mr-2" }) : _jsx(Copy, { className: "w-4 h-4 mr-2" }), copied ? "Copied!" : "Copy"] })] }));
}
// 4. useAsync Demo
const fakeApiCall = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (Math.random() > 0.7)
        throw new Error("Random API failure simulation");
    return "Data successfully fetched from API";
};
export function UseAsyncDemo() {
    const { execute, data, loading, error } = useAsync(fakeApiCall);
    return (_jsxs("div", { className: "flex flex-col items-center gap-4 w-full max-w-sm mx-auto", children: [_jsx(Button, { onClick: () => execute(), disabled: loading, className: "w-full", variant: error ? "destructive" : "default", children: loading
                    ? "Fetching Data..."
                    : error
                        ? "Try Again"
                        : data
                            ? "Refetch Data"
                            : "Start Async Request" }), _jsxs(Card, { className: "w-full p-4 h-24 flex items-center justify-center text-center bg-muted/50 border-dashed", children: [!loading && !data && !error && _jsx("span", { className: "text-muted-foreground", children: "Ready to fetch" }), loading && (_jsxs("div", { className: "flex items-center gap-2 text-primary", children: [_jsx("div", { className: "w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" }), "Loading..."] })), error && _jsx("span", { className: "text-destructive font-medium", children: error.message }), data && _jsx("span", { className: "text-green-500 font-medium", children: data })] })] }));
}
// 5. useClickOutside Demo
export function UseClickOutsideDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside(() => setIsOpen(false));
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-[200px]", children: [_jsx(Button, { onClick: () => setIsOpen(true), variant: "outline", children: "Open Modal" }), isOpen && (_jsx("div", { className: "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4", children: _jsx(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, ref: ref, children: _jsxs(Card, { className: "w-full max-w-md p-6 space-y-4 shadow-xl border-primary/20", children: [_jsx("h3", { className: "text-xl font-bold", children: "Click Outside Me" }), _jsx("p", { className: "text-muted-foreground", children: "This modal will close if you click anywhere outside of this card box." }), _jsx(Button, { className: "w-full", variant: "secondary", onClick: () => setIsOpen(false), children: "Close (or click outside)" })] }) }) }))] }));
}
// 6. useMouse Demo
export function UseMouseDemo() {
    const ref = useRef(null);
    const { x, y } = useMouse();
    return (_jsxs("div", { ref: ref, className: "relative w-full h-[300px] border rounded-xl overflow-hidden bg-muted/10 group cursor-crosshair flex items-center justify-center", children: [_jsx("div", { className: "absolute inset-0 pointer-events-none grid place-items-center opacity-20", children: _jsx(MousePointer2, { className: "w-24 h-24" }) }), _jsx(motion.div, { className: "absolute w-4 h-4 bg-primary rounded-full blur-sm pointer-events-none transition-out", style: {
                    x,
                    y,
                    translateX: "-50%",
                    translateY: "-50%",
                } })] }));
}
// 7. useResponsive Demo
export function UseResponsiveDemo() {
    const { isMobile, isTablet, isDesktop } = useResponsive();
    return (_jsxs("div", { className: "grid grid-cols-3 gap-4 w-full", children: [_jsxs(Card, { className: cn("p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-300", isMobile ? "bg-primary text-primary-foreground" : "opacity-30"), children: [_jsx(Smartphone, { className: "w-8 h-8" }), _jsx("span", { className: "font-bold", children: "Mobile" })] }), _jsxs(Card, { className: cn("p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-300", isTablet ? "bg-primary text-primary-foreground" : "opacity-30"), children: [_jsx(Tablet, { className: "w-8 h-8" }), _jsx("span", { className: "font-bold", children: "Tablet" })] }), _jsxs(Card, { className: cn("p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-300", isDesktop ? "bg-primary text-primary-foreground" : "opacity-30"), children: [_jsx(Monitor, { className: "w-8 h-8" }), _jsx("span", { className: "font-bold", children: "Desktop" })] })] }));
}
// 8. useScrollProgress Demo
export function UseScrollProgressDemo() {
    const { scrollYProgress } = useScrollProgress();
    return (_jsxs("div", { className: "h-[200px] w-full overflow-y-scroll border rounded-xl relative p-4 bg-muted/10", children: [_jsx(motion.div, { className: "fixed top-0 left-0 right-0 h-2 bg-primary z-50 origin-left", style: { scaleX: scrollYProgress } }), _jsx("div", { className: "absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono border z-10", children: "Scroll Page to see Global Progress" }), _jsx("div", { className: "space-y-4", children: [...Array(10)].map((_, i) => (_jsxs("div", { className: "p-4 rounded-lg bg-card border shadow-sm", children: [_jsxs("h4", { className: "font-bold mb-2", children: ["Section ", i + 1] }), _jsx("p", { className: "text-muted-foreground text-sm", children: "Scroll down to keep moving the progress bar at the top of the viewport. This hook tracks the global window scroll progress." })] }, i))) })] }));
}
