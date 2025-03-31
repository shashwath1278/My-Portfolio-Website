"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function MagneticCursor() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Use motion values for smoother tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Create spring animations for smooth following
  const springConfig = { damping: 25, stiffness: 250 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Show cursor after mount to prevent SSR issues
    setIsVisible(true)
    
    // Handle mouse movement with improved performance
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values directly to improve performance
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    
    // Handle touch for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseX.set(e.touches[0].clientX)
        mouseY.set(e.touches[0].clientY)
      }
    }
    
    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    
    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [mouseX, mouseY])

  // Don't render cursor on non-client environments or touch-only devices
  if (!isVisible || typeof window === "undefined") return null
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      >
        <div className="w-6 h-6 bg-white rounded-full opacity-60" />
      </motion.div>
      
      {/* Trailing dot */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-40%",
          translateY: "-40%"
        }}
        transition={{ delay: 0.05 }}
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </motion.div>
    </>
  )
}

