import { ThemeGeneratorSkeleton } from "@/components/skeletons"
import dynamic from "next/dynamic"

const ThemeGeneratorPage = dynamic(() => import("@/components/docs/theme-generator-page"), {
  loading: () => <ThemeGeneratorSkeleton />,
  ssr: true,
})

export default function Page() {
  return <ThemeGeneratorPage />
}
