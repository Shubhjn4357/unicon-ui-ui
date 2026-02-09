import { ComponentsListSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const HooksPageContent = dynamic(() => import("@/content/hooks-content").then((mod) => ({ default: mod.HooksPageContent })), {
  loading: () => <ComponentsListSkeleton />,
  ssr: true,
})

export default function HooksPage() {
  return <HooksPageContent />
}
