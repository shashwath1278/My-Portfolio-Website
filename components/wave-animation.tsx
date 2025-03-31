"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function WaveAnimation() {
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

    // Wave properties
    const waves = [
      {
        y: canvas.height * 0.2,
        length: 0.01,
        amplitude: 50,
        speed: 0.003,
        color: theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)",
      },
      {
        y: canvas.height * 0.4,
        length: 0.008,
        amplitude: 70,
        speed: 0.002,
        color: theme === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)",
      },
      {
        y: canvas.height * 0.6,
        length: 0.006,
        amplitude: 90,
        speed: 0.001,
        color: theme === "dark" ? "rgba(255, 255, 255, 0.01)" : "rgba(0, 0, 0, 0.01)",
      },
      {
        y: canvas.height * 0.8,
        length: 0.004,
        amplitude: 110,
        speed: 0.0015,
        color: theme === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)",
      },
    ]

    let time = 0

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.length + time * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        ctx.fillStyle = wave.color
        ctx.fill()
      })

      time += 1
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [mounted, theme])

  if (!mounted) return null

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-2]" />
}

