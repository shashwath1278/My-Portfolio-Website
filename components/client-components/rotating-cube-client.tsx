"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useTheme } from "next-themes"

export default function RotatingCubeClient() {
  const { resolvedTheme } = useTheme()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Set default dimensions - we're only using these client-side so it's safe
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  
  // Smooth spring physics for rotation
  const springConfig = { damping: 20, stiffness: 100 }
  
  // Create transforms using the dimensions state
  const rotateXTransform = useTransform(mouseY, [0, dimensions.height], [15, -15])
  const rotateYTransform = useTransform(mouseX, [0, dimensions.width], [-15, 15])
  
  // Springs for smooth animation
  const rotateX = useSpring(rotateXTransform, springConfig)
  const rotateY = useSpring(rotateYTransform, springConfig)

  useEffect(() => {
    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    // Window resize handler
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [mouseX, mouseY])

  const cubeSize = 100
  const theme = resolvedTheme || 'light'
  const faceColor = theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
  const borderColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"

  return (
    <div className="fixed bottom-20 right-20 pointer-events-none z-[-1] hidden md:block">
      <motion.div
        className="relative preserve-3d"
        style={{
          width: cubeSize,
          height: cubeSize,
          rotateX,
          rotateY,
          rotate: 45,
        }}
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          rotateZ: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
      >
        {/* Front face */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            backgroundColor: faceColor,
            border: `1px solid ${borderColor}`,
            transform: `translateZ(${cubeSize / 2}px)`,
          }}
        />

        {/* Back face */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            backgroundColor: faceColor,
            border: `1px solid ${borderColor}`,
            transform: `translateZ(-${cubeSize / 2}px) rotateY(180deg)`,
          }}
        />

        {/* Left face */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            backgroundColor: faceColor,
            border: `1px solid ${borderColor}`,
            transform: `translateX(-${cubeSize / 2}px) rotateY(-90deg)`,
          }}
        />

        {/* Right face */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            backgroundColor: faceColor,
            border: `1px solid ${borderColor}`,
            transform: `translateX(${cubeSize / 2}px) rotateY(90deg)`,
          }}
        />

        {/* Top face */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            backgroundColor: faceColor,
            border: `1px solid ${borderColor}`,
            transform: `translateY(-${cubeSize / 2}px) rotateX(90deg)`,
          }}
        />

        {/* Bottom face */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            backgroundColor: faceColor,
            border: `1px solid ${borderColor}`,
            transform: `translateY(${cubeSize / 2}px) rotateX(-90deg)`,
          }}
        />
      </motion.div>
    </div>
  )
}
