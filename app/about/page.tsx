import { Code, Lightbulb, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const timeline = [
  {
    year: "2021",
    title: "Junior Developer Beginnings",
    description:
      "I started my career as a Junior Developer, building strong fundamentals in programming, debugging, and software development while working on real-world applications.",
  },
  {
    year: "2022",
    title: "Systems & Platform Engineering Growth",
    description:
      "As my experience grew, I focused on system and platform engineering, strengthening architectures with an emphasis on scalability, performance, and reliability.",
  },
  {
    year: "2023",
    title: "GPU Computing & Performance Optimization",
    description:
      "I specialized in high-performance GPU computing, using CUDA to optimize parallel workloads and accelerate compute-intensive processes for AI and data-driven systems.",
  },
  {
    year: "2024",
    title: "AI Platforms, MLOps & DevOps",
    description:
      "I led and delivered multiple projects involving AI platforms, MLOps, and DevOps, enabling automated ML pipelines, production deployments, and robust infrastructure.",
  },
  {
    year: "2025",
    title: "Founding, AlgoTells",
    description:
      "In November 2025, I founded AlgoTells, focusing on AI infrastructure, GPU optimization, and innovative technology solutions while driving technical strategy and product development.",
  },
]

const values = [
  {
    icon: Code,
    title: "Performance at scale",
    description: "Architecting systems that handle massive computational workloads with optimal resource utilization.",
  },
  {
    icon: Target,
    title: "Technical excellence",
    description: "Deep expertise in GPU computing, distributed systems, and AI infrastructure optimization.",
  },
  {
    icon: Lightbulb,
    title: "Innovation leadership",
    description: "Driving breakthrough solutions in GPU-accelerated computing and secure AI systems.",
  },
]

export default function About() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight text-purple-900 dark:text-purple-100 sm:text-5xl">About</h1>
          <p className="mt-4 text-base text-purple-700 dark:text-purple-300 max-w-xl mx-auto">
            Technical leader building GPU-accelerated AI infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16 space-y-8">
          {timeline.map((item, index) => (
            <div key={item.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-purple-600 dark:bg-purple-500 text-white font-medium text-xs">
                  {item.year.slice(-2)}
                </div>
                {index < timeline.length - 1 && <div className="mt-2 h-12 w-px bg-purple-300 dark:bg-purple-700" />}
              </div>
              <div className="flex-1 pb-6">
                <h3 className="text-base font-medium text-purple-900 dark:text-purple-100">{item.title}</h3>
                <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dev Values */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 border border-purple-200 dark:border-purple-800 rounded-sm">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-purple-100 dark:bg-purple-900/50">
                  <value.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-2">{value.title}</h3>
                <p className="text-xs text-purple-700 dark:text-purple-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Note */}
        <div className="border-t border-purple-200 dark:border-purple-800 pt-12">
          <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed text-center max-w-2xl mx-auto">
            Leading technical teams in GPU-accelerated AI infrastructure, from distributed training systems
            to secure hardware attestation. Expertise in CUDA optimization, multi-GPU architectures, and
            production-ready AI systems that scale to enterprise demands.
          </p>
        </div>
      </div>
    </div>
  )
}
