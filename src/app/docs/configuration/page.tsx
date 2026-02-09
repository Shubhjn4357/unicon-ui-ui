import { ComponentPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const ConfigurationPageContent = dynamic(() => import("@/content/configuration-content").then((mod) => ({ default: mod.ConfigurationPageContent })), {
  loading: () => <ComponentPageSkeleton />,
  ssr: true,
})

export default function ConfigurationPage() {
  return <ConfigurationPageContent />
}
