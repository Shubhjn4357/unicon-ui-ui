import { ComponentPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const ExamplesPageContent = dynamic(() => import("@/content/examples-content").then((mod) => ({ default: mod.ExamplesPageContent })), {
  loading: () => <ComponentPageSkeleton />,
  ssr: true,
})

export default function ExamplesPage() {
  return <ExamplesPageContent />
}
