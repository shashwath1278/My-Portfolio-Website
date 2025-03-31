"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  children: ReactNode
  className?: string
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold inline-block relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
        <motion.span
          className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
          initial={{ width: 0, left: "50%" }}
          whileInView={{ width: "100%", left: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true, margin: "-100px" }}
        />
      </motion.h2>
    </div>
  )
}

