"use client"

import { Button } from "@unicorn-ui/ui"
import { ArrowUp } from "lucide-react"
import * as React from "react"

export function ScrollToTop() {
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    if (!isVisible) return null

    return (
        <Button
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 z-40 h-12 w-12 rounded-full shadow-lg"
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-5 w-5" />
        </Button>
    )
}
