"use client"
import Image from "next/image"
import { X } from "lucide-react"

interface TechDetailModalProps {
  tech: {
    name: string
    description: string
    logo: string
    usage: string
    features: string[]
    category: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export function TechDetailModal({ tech, isOpen, onClose }: TechDetailModalProps) {
  if (!isOpen || !tech) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">{tech.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-background/80 rounded transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Logo/Image */}
          <div className="relative h-48 rounded-lg overflow-hidden bg-background/50 border border-border/50">
            <Image
              src={tech.logo || "/placeholder.svg"}
              alt={tech.name}
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Category Badge */}
          <div>
            <span className="inline-block px-3 py-1 text-sm bg-accent/20 text-accent border border-accent/30 rounded-full">
              {tech.category}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
          </div>

          {/* Usage in Project */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-2">How It's Used in This Project</h3>
            <p className="text-muted-foreground leading-relaxed">{tech.usage}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-accent mb-3">Key Features</h3>
            <ul className="space-y-2">
              {tech.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold">★</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
