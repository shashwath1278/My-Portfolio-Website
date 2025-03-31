"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AnimatedProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  index: number
}

export default function AnimatedProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
}: AnimatedProjectCardProps) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="aspect-video overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Added buttons */}
        <div className="flex gap-4 pt-3">
          {liveUrl && (
            <Button variant="default" size="sm" className="group" asChild>
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <span>Live Demo</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Repository
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

