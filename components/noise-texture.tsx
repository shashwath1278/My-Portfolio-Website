"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create noise
    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      const intensity = theme === "dark" ? 10 : 5

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.floor(Math.random() * intensity)
        data[i] = value
        data[i + 1] = value
        data[i + 2] = value
        data[i + 3] = 10 // Alpha (transparency)
      }

      return imageData
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.putImageData(createNoise(), 0, 0)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [mounted, theme])

  if (!mounted) return null

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-3] opacity-30 mix-blend-overlay" />
}

