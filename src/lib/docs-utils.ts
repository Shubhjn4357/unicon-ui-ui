
import { HookPlaceholder } from "@/components/docs/placeholder"
import { components } from "@/data/component-docs"
import { hooks } from "@/data/hook-docs"

const docs: {
  title: string
  slug: string
  description: string
}[] = []
export function getComponentBySlug(slug: string) {
  const component = components.find((c) => c.slug === slug)
  if (component) return component

  const doc = docs.find((d) => d.slug === slug)
  if (doc) {
    return {
      ...doc,
      category: "Docs",
      props: [],
      stories: [],
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
      props: hook.data.props
        ? hook.data.props.map((p) => ({
          name: p.name,
          type: p.type,
          defaultValue: p.default,
          description: p.description,
          control: { type: "text" } as const,
        }))
        : [],
      stories: [
        {
          name: "Usage",
          args: {
            example: hook.data.examples[0],
          },
        },
      ],
    }
  }

  return undefined
}
export function getAllComponentSlugs() {
  return [
    ...components.map((c) => c.slug),
    ...docs.map((d) => d.slug),
    ...hooks.map((h) => h.slug),
  ]
}

export function getSidebarData() {
  const categories: Record<string, { title: string; slug: string; description: string }[]> = {}

  // Process components
  components.forEach((c) => {
    if (!categories[c.category]) {
      categories[c.category] = []
    }
    categories[c.category].push({ title: c.title, slug: c.slug, description: c.description })
  })

  // Process docs
  docs.forEach((d) => {
    const cat = "Docs"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push({ title: d.title, slug: d.slug, description: d.description })
  })

  // Process hooks
  hooks.forEach((h) => {
    const cat = "Hooks"
    if (!categories[cat]) categories[cat] = []
    categories[cat].push({ title: h.title, slug: h.slug, description: h.description })
  })

  // Order categories
  const order = [
    "Docs",
    "Core",
    "Layout",
    "Text",
    "Backgrounds",
    "Buttons",
    "Special",
    "Feedback",
    "Interaction",
    "Utils",
    "Hooks",
    "Skeletons",
    "Animations",
  ]

  return Object.entries(categories)
    .sort((a, b) => {
      const indexA = order.indexOf(a[0])
      const indexB = order.indexOf(b[0])
      // If both are in order list, sort by index
      if (indexA !== -1 && indexB !== -1) return indexA - indexB
      // If only A is in list, A comes first
      if (indexA !== -1) return -1
      // If only B is in list, B comes first
      if (indexB !== -1) return 1
      // Otherwise sort alphabetically
      return a[0].localeCompare(b[0])
    })
    .map(([name, items]) => ({
      name,
      items: items.sort((a, b) => a.title.localeCompare(b.title)),
    }))
}
export function getHookBySlug(slug: string) {
  return hooks.find((h) => h.slug === slug)
}

export function getAllHookSlugs() {
  return hooks.map((h) => h.slug)
}
