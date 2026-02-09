import { ComponentPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const TemplatesPageContent = dynamic(() => import("@/content/templates-content").then((mod) => ({ default: mod.default })), {
  loading: () => <ComponentPageSkeleton />,
  ssr: true,
})

export default function TemplatesPage() {
  return <TemplatesPageContent />
}
