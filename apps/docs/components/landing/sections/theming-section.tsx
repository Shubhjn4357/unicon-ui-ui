"use client"

import { useState } from "react"
import { Card, Button } from "@unicorn-ui/ui"

const themes = [
    { name: "Default", primary: "157 39 176", accent: "103 58 183" },
    { name: "Ocean", primary: "33 150 243", accent: "0 188 212" },
    { name: "Forest", primary: "76 175 80", accent: "139 195 74" },
    { name: "Sunset", primary: "255 152 0", accent: "255 193 7" },
]

export function ThemingSection() {
    const [activeTheme, setActiveTheme] = useState(0)

    return (
        <section className="py-24 bg-surface-elevated/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Infinitely customizable</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        Customize every aspect of your components with CSS variables
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {themes.map((theme, index) => (
                            <Button
                                key={theme.name}
                                variant={activeTheme === index ? "default" : "outline"}
                                onClick={() => setActiveTheme(index)}
                            >
                                {theme.name}
                            </Button>
                        ))}
                    </div>

                    <Card className="bg-surface border-border overflow-hidden p-0">
                        <div className="p-8">
                            <div
                                className="p-6 rounded-lg transition-colors duration-300"
                                style={{ backgroundColor: `rgba(${themes[activeTheme].primary}, 0.1)` }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className="h-12 w-12 rounded-lg transition-colors duration-300"
                                        style={{ backgroundColor: `rgb(${themes[activeTheme].primary})` }}
                                    />
                                    <div>
                                        <div className="font-medium text-foreground">Theme Preview</div>
                                        <div className="text-sm text-foreground-secondary">{themes[activeTheme].name} theme</div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        className="px-4 py-2 rounded-md text-sm font-medium text-white transition-colors duration-300"
                                        style={{ backgroundColor: `rgb(${themes[activeTheme].primary})` }}
                                    >
                                        Primary Button
                                    </button>
                                    <button
                                        className="px-4 py-2 rounded-md text-sm font-medium text-white transition-colors duration-300"
                                        style={{ backgroundColor: `rgb(${themes[activeTheme].accent})` }}
                                    >
                                        Accent Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
