"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DecorativeAnimations() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating arrows on the right */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="space-y-4"
        >
          <div
            className={`w-6 h-6 border-r-2 border-b-2 ${theme === "dark" ? "border-white/30" : "border-black/30"} transform rotate-45`}
          ></div>
          <div
            className={`w-6 h-6 border-r-2 border-b-2 ${theme === "dark" ? "border-white/30" : "border-black/30"} transform rotate-45`}
          ></div>
        </motion.div>
      </div>

      {/* Animated corner decorations */}
      <motion.div
        className={`absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 ${theme === "dark" ? "border-white/20" : "border-black/20"} hidden md:block`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 ${theme === "dark" ? "border-white/20" : "border-black/20"} hidden md:block`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Animated dots */}
      <div className="absolute bottom-8 left-8 hidden md:block">
        <motion.div
          className="flex space-x-2"
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className={`w-2 h-2 ${theme === "dark" ? "bg-white/40" : "bg-black/40"} rounded-full`}></div>
          <div className={`w-2 h-2 ${theme === "dark" ? "bg-white/40" : "bg-black/40"} rounded-full`}></div>
          <div className={`w-2 h-2 ${theme === "dark" ? "bg-white/40" : "bg-black/40"} rounded-full`}></div>
        </motion.div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]" />
    </div>
  )
}

