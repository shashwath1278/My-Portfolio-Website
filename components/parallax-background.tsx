"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  // Transform values for parallax effect
  const y1 = useTransform(scrollY, [0, 1000], [0, -150])
  const y2 = useTransform(scrollY, [0, 1000], [0, -100])
  const y3 = useTransform(scrollY, [0, 1000], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient circles */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        style={{ y: y1, opacity }}
      />
      <motion.div
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
        style={{ y: y2, opacity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-primary/15 blur-3xl"
        style={{ y: y3, opacity }}
      />
    </div>
  )
}

