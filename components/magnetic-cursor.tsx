"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function MagneticCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Add magnetic effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')

    const handleMouseEnter = (e: Event) => {
      const element = e.currentTarget as HTMLElement
      element.style.transition = "transform 0.3s ease"

      const handleElementMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY

        const maxDistance = 15 // Maximum pixels to move
        const moveX = (distanceX / rect.width) * maxDistance
        const moveY = (distanceY / rect.height) * maxDistance

        element.style.transform = `translate(${moveX}px, ${moveY}px)`
      }

      const handleElementMouseLeave = () => {
        element.style.transform = "translate(0, 0)"
        element.removeEventListener("mousemove", handleElementMouseMove)
      }

      element.addEventListener("mousemove", handleElementMouseMove)
      element.addEventListener("mouseleave", handleElementMouseLeave, { once: true })
    }

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
    })

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
      })
    }
  }, [mounted])

  if (!mounted || typeof window === "undefined" || window.innerWidth < 768) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 800,
          damping: 20,
          opacity: { duration: 0.2 },
        }}
      >
        <div className="relative w-8 h-8">
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.05,
          stiffness: 1000,
          damping: 20,
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`w-2 h-2 rounded-full ${theme === "dark" ? "bg-white" : "bg-black"}`} />
      </motion.div>
    </>
  )
}

