"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Transform background colors based on scroll position
  const backgroundColor1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    theme === "dark"
      ? ["hsl(240, 10%, 3.9%)", "hsl(250, 15%, 5%)", "hsl(260, 20%, 6%)", "hsl(270, 25%, 7%)", "hsl(280, 30%, 8%)"]
      : ["hsl(0, 0%, 100%)", "hsl(210, 20%, 98%)", "hsl(220, 20%, 97%)", "hsl(230, 20%, 96%)", "hsl(240, 20%, 95%)"],
  )

  const backgroundColor2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    theme === "dark"
      ? ["hsl(240, 10%, 5%)", "hsl(250, 15%, 7%)", "hsl(260, 20%, 9%)", "hsl(270, 25%, 11%)", "hsl(280, 30%, 13%)"]
      : ["hsl(0, 0%, 98%)", "hsl(210, 20%, 96%)", "hsl(220, 20%, 94%)", "hsl(230, 20%, 92%)", "hsl(240, 20%, 90%)"],
  )

  if (!mounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen z-[-1] opacity-70"
      style={{
        background: `linear-gradient(135deg, ${backgroundColor1}, ${backgroundColor2})`,
      }}
    />
  )
}

