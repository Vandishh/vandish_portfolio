"use client"

const technologies = [
  "CUDA",
  "PyTorch",
  "TensorRT",
  "A100",
  "H100",
  "Rust",
  "Python",
  "Distributed Systems",
  "NCCL",
  "Triton",
  "cuDNN",
  "OpenAI",
  "Transformers",
  "HPC",
  "Docker",
  "Kubernetes",
  "AWS",
  "SPDM",
]

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, index) => (
          <span
            key={index}
            className="mx-8 text-lg font-medium text-purple-700 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
