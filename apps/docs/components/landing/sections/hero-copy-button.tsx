"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@unicorn-ui/ui"

export function HeroCopyButton() {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("npx unicorn-ui@latest init")
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Button variant="ghost" className="h-8 w-8" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 text-brand" /> : <Copy className="h-4 w-4" />}
        </Button>
    )
}
