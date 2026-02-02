"use client"

import React, { useState, createContext, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../../lib/utils"

// --- Context ---

interface TooltipContextProps {
    open: boolean
    setOpen: (open: boolean) => void
    delay: number
}

const TooltipContext = createContext<TooltipContextProps | undefined>(undefined)

const useTooltip = () => {
    const context = useContext(TooltipContext)
    if (!context) throw new Error("useTooltip must be used within a Tooltip")
    return context
}

// --- Components ---

export function TooltipProvider({ children, delayDuration = 0 }: { children: React.ReactNode, delayDuration?: number }) {
    return <div className="contents">{children}</div>
}

export function Tooltip({ children, delayDuration = 0.2 }: { children: React.ReactNode, delayDuration?: number }) {
    const [open, setOpen] = useState(false)
    return (
        <TooltipContext.Provider value={{ open, setOpen, delay: delayDuration }}>
            <div className="relative inline-flex items-center justify-center">
                {children}
            </div>
        </TooltipContext.Provider>
    )
}

export function TooltipTrigger({ children, asChild }: { children: React.ReactNode, asChild?: boolean }) {
    const { setOpen, delay } = useTooltip()
    const timeoutRef = React.useRef<NodeJS.Timeout>(null)

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setOpen(true), delay * 1000)
    }

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setOpen(false)
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            {children}
        </div>
    )
}

export function TooltipContent({ children, className, side = "top" }: { children: React.ReactNode, className?: string, side?: "top" | "bottom" | "left" | "right" }) {
    const { open } = useTooltip()

    const positions = {
        top: { top: -10, left: "50%", x: "-50%", y: "-100%" },
        bottom: { bottom: -10, left: "50%", x: "-50%", y: "100%" },
        left: { left: -10, top: "50%", x: "-100%", y: "-50%" },
        right: { right: -10, top: "50%", x: "100%", y: "-50%" },
    }

    const animations = {
        top: { y: 10, opacity: 0 },
        bottom: { y: -10, opacity: 0 },
        left: { x: 10, opacity: 0 },
        right: { x: -10, opacity: 0 },
    }

    const getPositionStyle = () => {
        const pos = positions[side]
        return {
            top: "top" in pos ? pos.top : "auto",
            bottom: "bottom" in pos ? pos.bottom : "auto",
            left: "left" in pos ? pos.left : "auto",
            right: "right" in pos ? pos.right : "auto",
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ ...animations[side], scale: 0.9 }}
                    animate={{ x: positions[side].x, y: positions[side].y, opacity: 1, scale: 1 }}
                    exit={{ ...animations[side], scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{ position: 'absolute', ...getPositionStyle() }}
                    className={cn(
                        "z-50 px-3 py-1.5 text-xs text-primary-foreground bg-primary rounded-md shadow-xl whitespace-nowrap",
                        className
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
