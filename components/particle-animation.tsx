"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
  life: number
  maxLife: number
}

export default function ParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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

    // Initialize particles
    particlesRef.current = Array.from({ length: 50 }, () => createParticle(canvas))

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Add new particles occasionally
      if (Math.random() < 0.1) {
        particlesRef.current.push(createParticle(canvas))
      }

      // Add particles near mouse position
      if (Math.random() < 0.2) {
        const mouseX = mousePositionRef.current.x
        const mouseY = mousePositionRef.current.y
        if (mouseX > 0 && mouseY > 0) {
          particlesRef.current.push(createParticleNearMouse(mouseX, mouseY, canvas))
        }
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Apply slight gravity
        particle.vy += 0.01

        // Add some randomness to movement
        particle.vx += (Math.random() - 0.5) * 0.1
        particle.vy += (Math.random() - 0.5) * 0.1

        // Decrease life
        particle.life -= 1

        // Calculate opacity based on life
        const opacity = particle.life / particle.maxLife

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(")", `, ${opacity})`)
        ctx.fill()

        // Remove dead particles
        if (
          particle.life <= 0 ||
          particle.x < -50 ||
          particle.x > canvas.width + 50 ||
          particle.y < -50 ||
          particle.y > canvas.height + 50
        ) {
          particlesRef.current.splice(index, 1)
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [mounted, theme])

  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const colors =
      theme === "dark"
        ? ["rgba(255, 255, 255,", "rgba(200, 200, 255,", "rgba(150, 150, 255,"]
        : ["rgba(0, 0, 0,", "rgba(50, 50, 100,", "rgba(100, 100, 150,"]

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: Math.random() * 300 + 100,
      maxLife: 400,
    }
  }

  const createParticleNearMouse = (mouseX: number, mouseY: number, canvas: HTMLCanvasElement): Particle => {
    const colors =
      theme === "dark"
        ? ["rgba(255, 255, 255,", "rgba(200, 200, 255,", "rgba(150, 150, 255,"]
        : ["rgba(0, 0, 0,", "rgba(50, 50, 100,", "rgba(100, 100, 150,"]

    return {
      x: mouseX + (Math.random() - 0.5) * 20,
      y: mouseY + (Math.random() - 0.5) * 20,
      size: Math.random() * 2 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      life: Math.random() * 100 + 50,
      maxLife: 150,
    }
  }

  if (!mounted) return null

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-1] opacity-40" />
}

