import { Navbar } from "@/components/landing/sections/navbar"
import { HeroSectionNew } from "@/components/landing/sections/hero-section-new"
import { ComponentShowcaseNew } from "@/components/landing/sections/component-showcase-new"
import { FeaturesSection } from "@/components/landing/sections/features-section"
import { FooterSection } from "@/components/landing/sections/footer"
import { Particles } from "@unicorn-ui/ui"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-foreground font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <HeroSectionNew />

        {/* Features (Bento Grid) */}
        <FeaturesSection />

        {/* Component Showcase (Marquee) */}
        <ComponentShowcaseNew />

        {/* Global Particles (Subtle) */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <Particles quantity={30} className="opacity-30" />
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
