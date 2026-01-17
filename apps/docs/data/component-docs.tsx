import { CORE_COMPONENTS } from "./components/core"
import { LAYOUT_COMPONENTS } from "./components/layout"
import { TEXT_COMPONENTS } from "./components/text-effects"
import { SPECIAL_COMPONENTS } from "./components/special-effects"
import { BACKGROUND_COMPONENTS } from "./components/backgrounds"
import { BUTTON_VARIANTS } from "./components/button-variants"
import { MISC_COMPONENTS } from "./components/misc"
import { FEEDBACK_COMPONENTS } from "./components/feedback"

// Component metadata type
export interface ComponentMetadata {
    slug: string
    data: {
        title: string
        category: string
        description: string
        importStatement: string
        examples: Array<{
            id: string
            title: string
            code: string
            preview?: () => React.ReactNode
        }>
        props: Array<{
            name: string
            type: string
            default?: string
            required: boolean
            description: string
        }>
        bestPractices: {
            dos: string[]
            donts: string[]
        }
    }
}

// All components - 93 total
export const COMPONENT_DOCS: ComponentMetadata[] = [
    ...CORE_COMPONENTS,        // 17 components
    ...LAYOUT_COMPONENTS,      // 18 components
    ...TEXT_COMPONENTS,        // 18 components
    ...SPECIAL_COMPONENTS,     // 9 components
    ...BACKGROUND_COMPONENTS,  // 11 components
    ...BUTTON_VARIANTS,        // 6 components
    ...MISC_COMPONENTS,        // 10 components
    ...FEEDBACK_COMPONENTS,    // 4 components
]

// Category exports for navigation
export const COMPONENT_CATEGORIES = {
    Core: CORE_COMPONENTS,
    Layout: LAYOUT_COMPONENTS,
    "Text Effects": TEXT_COMPONENTS,
    "Special Effects": SPECIAL_COMPONENTS,
    Backgrounds: BACKGROUND_COMPONENTS,
    "Button Variants": BUTTON_VARIANTS,
    Misc: MISC_COMPONENTS,
    Feedback: FEEDBACK_COMPONENTS,
} as const

// Get component by slug
export function getComponentBySlug(slug: string): ComponentMetadata | undefined {
    return COMPONENT_DOCS.find((comp) => comp.slug === slug)
}

// Get all slugs for static generation
export function getAllComponentSlugs(): string[] {
    return COMPONENT_DOCS.map((comp) => comp.slug)
}
