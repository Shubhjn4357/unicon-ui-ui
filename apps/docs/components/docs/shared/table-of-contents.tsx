import Link from "next/link"
import { cn } from "@/lib/utils"

interface TOCItem {
    id: string
    title: string
    level: number
}

interface TableOfContentsProps {
    items: TOCItem[]
    className?: string
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
    return (
        <nav className={cn("space-y-2", className)}>
            <p className="font-semibold text-sm mb-4">On This Page</p>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={cn(
                            "text-sm",
                            item.level === 2 && "ml-0",
                            item.level === 3 && "ml-4"
                        )}
                    >
                        <Link
                            href={`#${item.id}`}
                            className="text-foreground-secondary hover:text-foreground transition-colors"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
