import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const techStack = {
  "GPU Computing & HPC": {
    description: "High-Performance Computing and GPU-Accelerated Systems",
    technologies: [
      { name: "CUDA", level: "Expert", description: "Custom kernel development and optimization" },
      { name: "A100 / H100", level: "Expert", description: "NVIDIA enterprise GPU architectures" },
      { name: "NCCL", level: "Expert", description: "Multi-GPU communication optimization" },
      { name: "TensorRT", level: "Advanced", description: "GPU inference optimization" },
      { name: "Triton", level: "Advanced", description: "GPU kernel development framework" },
      { name: "cuDNN", level: "Advanced", description: "Deep learning GPU primitives" },
    ],
  },
  "AI Infrastructure": {
    description: "Distributed AI Systems and Machine Learning Platforms",
    technologies: [
      { name: "PyTorch", level: "Expert", description: "Distributed training and inference" },
      { name: "Transformers", level: "Expert", description: "Large language model architectures" },
      { name: "Distributed Training", level: "Expert", description: "Multi-node, multi-GPU scaling" },
      { name: "Model Optimization", level: "Expert", description: "Quantization, pruning, distillation" },
      { name: "MLOps", level: "Advanced", description: "Production ML pipeline management" },
      { name: "Inference Serving", level: "Advanced", description: "High-throughput model serving" },
    ],
  },
  "Systems Programming": {
    description: "Low-level systems and performance optimization",
    technologies: [
      { name: "Rust", level: "Expert", description: "Systems programming and cryptography" },
      { name: "Python", level: "Expert", description: "AI/ML development and automation" },
      { name: "C++", level: "Advanced", description: "Performance-critical applications" },
      { name: "SPDM Protocol", level: "Advanced", description: "Hardware security attestation" },
      { name: "Cryptography", level: "Advanced", description: "ECDSA, secure protocols" },
    ],
  },
  "Cloud & Infrastructure": {
    description: "Enterprise-scale deployment and orchestration",
    technologies: [
      { name: "Kubernetes", level: "Expert", description: "GPU workload orchestration" },
      { name: "Docker", level: "Expert", description: "Containerized GPU applications" },
      { name: "AWS", level: "Advanced", description: "EC2 P4/P5 GPU instances" },
      { name: "Slurm", level: "Advanced", description: "HPC cluster management" },
      { name: "Prometheus", level: "Advanced", description: "GPU metrics and monitoring" },
    ],
  },
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-purple-600 dark:bg-purple-500 text-white"
    case "Advanced":
      return "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200"
    case "Intermediate":
      return "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
    default:
      return "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200"
  }
}

export default function Stack() {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light tracking-tight text-purple-900 dark:text-purple-100 sm:text-5xl">Stack</h1>
          <p className="mt-4 text-base text-purple-700 dark:text-purple-300 max-w-xl mx-auto">
            Technologies I use to build GPU-accelerated AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {Object.entries(techStack).map(([category, { description, technologies }]) => (
            <div key={category} className="border border-purple-200 dark:border-purple-800 rounded-sm p-6">
              <h2 className="text-lg font-medium text-purple-900 dark:text-purple-100 mb-1">{category}</h2>
              <p className="text-xs text-purple-700 dark:text-purple-300 mb-6">{description}</p>
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-start justify-between gap-3 p-3 border border-purple-200 dark:border-purple-800 rounded-sm hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-medium text-purple-900 dark:text-purple-100">{tech.name}</h3>
                        <Badge className={`${getLevelColor(tech.level)} text-xs`} variant="secondary">
                          {tech.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-purple-700 dark:text-purple-300">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
