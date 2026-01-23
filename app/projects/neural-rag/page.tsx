import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Brain, Search, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "Python", "FastAPI", "Vector DB", "Redis", "LangChain", "Transformers", "PostgreSQL", "Docker"
]

const features = [
  {
    icon: Brain,
    title: "Multi-modal Embeddings",
    description: "Advanced embedding models for text, images, and documents with GPU-accelerated processing"
  },
  {
    icon: Search,
    title: "Vector Search at Scale",
    description: "Sub-millisecond vector similarity search across millions of embeddings using optimized CUDA kernels"
  },
  {
    icon: Zap,
    title: "Real-time Knowledge Synthesis",
    description: "Dynamic knowledge graph construction and real-time context assembly for precise AI responses"
  }
]

export default function NeuralRAG() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href="/projects" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-light tracking-tight text-purple-900 dark:text-purple-100 sm:text-5xl mb-4">
            Enterprise RAG System
          </h1>
          <p className="text-base text-purple-700 dark:text-purple-300 max-w-2xl">
            Production-ready RAG implementation with vector search optimization,
            serving 10K+ daily queries for enterprise knowledge management.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 border border-purple-200 dark:border-purple-800 rounded-sm">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-purple-100 dark:bg-purple-900/50">
                <feature.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-2">{feature.title}</h3>
              <p className="text-xs text-purple-700 dark:text-purple-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-lg font-medium text-purple-900 dark:text-purple-100 mb-4">Technical Implementation</h2>
            <p className="text-sm text-purple-700 dark:text-purple-300 mb-6">
              Built a scalable RAG system using modern vector databases and efficient retrieval algorithms
              to support enterprise knowledge management with reliable performance and accuracy.
            </p>

            <h3 className="text-base font-medium text-purple-900 dark:text-purple-100 mb-3">Key Features</h3>
            <ul className="list-disc pl-5 text-sm text-purple-700 dark:text-purple-300 space-y-1.5 mb-6">
              <li>92% accuracy on internal knowledge retrieval tasks</li>
              <li>Sub-200ms query response times for typical use cases</li>
              <li>Support for 100K+ document corpus with regular updates</li>
              <li>Multi-format document processing (PDF, Word, text)</li>
            </ul>

            <h3 className="text-base font-medium text-purple-900 dark:text-purple-100 mb-3">Architecture Components</h3>
            <ul className="list-disc pl-5 text-sm text-purple-700 dark:text-purple-300 space-y-1.5 mb-6">
              <li>FastAPI backend with async request handling</li>
              <li>Redis caching layer for frequently accessed embeddings</li>
              <li>Automated document processing pipeline</li>
              <li>Vector database optimization for similarity search</li>
              <li>Configurable chunking strategies for different content types</li>
            </ul>

            <h3 className="text-base font-medium text-purple-900 dark:text-purple-100 mb-3">Production Metrics</h3>
            <ul className="list-disc pl-5 text-sm text-purple-700 dark:text-purple-300 space-y-1.5">
              <li>Daily queries: 10K+ with 99.5% uptime</li>
              <li>Document processing: 5,000 documents/hour</li>
              <li>Response time: P95 under 200ms</li>
              <li>Cost efficiency: 30% reduction vs previous system</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-lg font-medium text-purple-900 dark:text-purple-100 mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 px-2 py-1 rounded-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}