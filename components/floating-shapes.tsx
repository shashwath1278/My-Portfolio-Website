"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface ShapeProps {
  theme: string | undefined
  index: number
}

const Circle = ({ theme, index }: ShapeProps) => {
  const size = Math.random() * 60 + 20
  const duration = Math.random() * 20 + 10
  const delay = index * 0.5

  return (
    <motion.div
      className={`absolute rounded-full ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
        y: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
        scale: [1, Math.random() * 0.5 + 0.8, Math.random() * 0.5 + 0.8, 1],
        rotate: [0, Math.random() * 180, Math.random() * -180, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  )
}

const Square = ({ theme, index }: ShapeProps) => {
  const size = Math.random() * 60 + 20
  const duration = Math.random() * 20 + 10
  const delay = index * 0.5

  return (
    <motion.div
      className={`absolute ${theme === "dark" ? "bg-white/5" : "bg-black/5"}`}
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
        y: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
        rotate: [0, 90, 180, 270, 360],
        scale: [1, Math.random() * 0.5 + 0.8, Math.random() * 0.5 + 0.8, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  )
}

const Triangle = ({ theme, index }: ShapeProps) => {
  const size = Math.random() * 60 + 20
  const duration = Math.random() * 20 + 10
  const delay = index * 0.5

  return (
    <motion.div
      className="absolute"
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid ${theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
        y: [0, Math.random() * 100 - 50, Math.random() * -100 + 50, 0],
        rotate: [0, Math.random() * 360, Math.random() * -360, 0],
        scale: [1, Math.random() * 0.5 + 0.8, Math.random() * 0.5 + 0.8, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  )
}

export default function FloatingShapes() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [shapes, setShapes] = useState<JSX.Element[]>([])

  useEffect(() => {
    setMounted(true)

    const newShapes = []
    // Create 5 circles
    for (let i = 0; i < 5; i++) {
      newShapes.push(<Circle key={`circle-${i}`} theme={theme} index={i} />)
    }

    // Create 5 squares
    for (let i = 0; i < 5; i++) {
      newShapes.push(<Square key={`square-${i}`} theme={theme} index={i + 5} />)
    }

    // Create 5 triangles
    for (let i = 0; i < 5; i++) {
      newShapes.push(<Triangle key={`triangle-${i}`} theme={theme} index={i + 10} />)
    }

    setShapes(newShapes)
  }, [theme])

  if (!mounted) return null

  return <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">{shapes}</div>
}

