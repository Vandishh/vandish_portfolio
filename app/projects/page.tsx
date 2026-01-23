import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "neural-rag",
    title: "Enterprise RAG System",
    description: "Production RAG implementation with vector search and GPU acceleration, serving 10K+ daily queries with high accuracy.",
    tags: ["RAG", "Python", "Vector DB", "FastAPI", "Redis"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Bot",
    description: "Intelligent chatbot with RAG-enhanced responses, handling 5K+ customer queries monthly with 85% resolution rate.",
    tags: ["OpenAI API", "LangChain", "React", "Node.js", "MongoDB"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "document-qa",
    title: "Document Q&A Assistant",
    description: "AI-powered document analysis tool that extracts insights from PDFs and documents with natural language queries.",
    tags: ["Python", "Streamlit", "OpenAI", "PDF Processing", "NLP"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "code-review-bot",
    title: "Code Review Assistant",
    description: "LLM-powered code analysis tool that provides automated suggestions and identifies potential issues in pull requests.",
    tags: ["GitHub API", "Python", "FastAPI", "Code Analysis", "CI/CD"],
    status: "Beta",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "smart-content-generator",
    title: "Content Generation Platform",
    description: "Marketing content generator using fine-tuned models, creating blog posts and social media content with brand consistency.",
    tags: ["Fine-tuning", "React", "PostgreSQL", "Content Strategy"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "distributed-training",
    title: "Multi-GPU Training System",
    description: "Distributed training pipeline supporting 4-8 GPU setups with optimized communication and checkpointing.",
    tags: ["PyTorch", "CUDA", "Distributed", "MLOps"],
    status: "Live",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Projects() {
  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-tight text-purple-900 dark:text-purple-100 sm:text-5xl">Projects</h1>
          <p className="mt-4 text-base text-purple-700 dark:text-purple-300 max-w-xl mx-auto">
            AI projects in GPU computing and distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block border border-purple-200 dark:border-purple-800 rounded-sm p-6 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="text-lg font-medium text-purple-900 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  {project.title}
                </h2>
                <Badge variant={project.status === "Live" ? "default" : "secondary"} className="shrink-0 text-xs">
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 px-2 py-0.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                View details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
