import { ComponentPageSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const InstallationPageContent = dynamic(() => import("@/content/installation-content").then((mod) => ({ default: mod.InstallationPageContent })), {
  loading: () => <ComponentPageSkeleton />,
  ssr: true,
})

export default function InstallationPage() {
  return <InstallationPageContent />
}
