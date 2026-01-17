"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface Card {
    id: number
    content: React.ReactNode
}

export interface CardStackProps extends React.HTMLAttributes<HTMLDivElement> {
    items: Card[]
    offset?: number
    scaleFactor?: number
}

/**
 * Native CardStack - Stacked swipeable cards
 */
export const CardStack = React.forwardRef<HTMLDivElement, CardStackProps>(
    ({ items, offset = 10, scaleFactor = 0.06, className, ...props }, ref) => {
        const [cards, setCards] = React.useState<Card[]>(items)

        const removeCard = () => {
            setCards((prev) => {
                const newCards = [...prev]
                newCards.shift()
                return newCards
            })
        }

        return (
            <div ref={ref} className={cn("relative h-60 w-60 md:h-60 md:w-96", className)} {...props}>
                {cards.map((card, index) => {
                    return (
                        <motion.div
                            key={card.id}
                            className="absolute h-60 w-60 md:h-60 md:w-96 rounded-3xl bg-surface border border-border p-4 shadow-xl flex flex-col justify-between"
                            style={{
                                transformOrigin: "top center",
                            }}
                            animate={{
                                top: index * -offset,
                                scale: 1 - index * scaleFactor, // decrease scale for cards behind
                                zIndex: cards.length - index, // decrease z-index
                            }}
                        >
                            <div className="font-normal text-foreground-secondary">
                                {card.content}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        )
    }
)

CardStack.displayName = "CardStack"
