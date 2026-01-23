import Link from "next/link"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import TechMarquee from "@/components/TechMarquee"

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-light tracking-tight text-purple-900 dark:text-purple-100 sm:text-6xl lg:text-7xl">
            Vandish Chauhan
          </h1>
          <p className="mt-6 text-lg font-light text-purple-700 dark:text-purple-300 sm:text-xl">
            AI Infrastructure & GPU Computing Technical Lead
          </p>
          <p className="mt-8 text-base text-purple-600 dark:text-purple-400 max-w-xl mx-auto leading-relaxed">
            Building reliable, scalable AI solutions with GPU-accelerated computing and distributed systems.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-sm bg-purple-600 dark:bg-purple-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/projects" 
              className="text-sm font-medium text-purple-900 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 border-t border-purple-200 dark:border-purple-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TechMarquee />
        </div>
      </section>
    </div>
  )
}
