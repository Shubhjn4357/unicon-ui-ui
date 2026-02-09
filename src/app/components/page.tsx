import { ComponentsListSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const ComponentsPageContent = dynamic(() => import("@/content/components-content").then((mod) => ({ default: mod.ComponentsPageContent })), {
  loading: () => <ComponentsListSkeleton />,
  ssr: true,
})

export default function ComponentsPage() {
  return <ComponentsPageContent />
}
