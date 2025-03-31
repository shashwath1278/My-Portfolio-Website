"use client"

import { useEffect, useState, useRef } from "react"

interface TextScrambleProps {
  texts: string[]
  className?: string
}

export default function TextScramble({ texts, className = "" }: TextScrambleProps) {
  const [currentText, setCurrentText] = useState("")
  const currentIndexRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const chars = "!<>-_\\/[]{}—=+*^?#________"
    let iteration = 0
    let frameRequest: number | null = null

    const updateText = () => {
      const targetText = texts[currentIndexRef.current]

      // Calculate progress based on iteration
      const progress = Math.min(1, iteration / 20)

      // Calculate how many characters should be revealed
      const revealLength = Math.floor(targetText.length * progress)

      // Build the output text
      let outputText = ""
      for (let i = 0; i < targetText.length; i++) {
        if (i < revealLength) {
          outputText += targetText[i]
        } else {
          outputText += chars[Math.floor(Math.random() * chars.length)]
        }
      }

      setCurrentText(outputText)

      // Increment iteration
      iteration++

      // If not complete, request next frame
      if (progress < 1) {
        frameRequest = requestAnimationFrame(updateText)
      } else {
        // Move to next text after delay
        timeoutRef.current = setTimeout(() => {
          iteration = 0
          currentIndexRef.current = (currentIndexRef.current + 1) % texts.length
          frameRequest = requestAnimationFrame(updateText)
        }, 3000)
      }
    }

    frameRequest = requestAnimationFrame(updateText)

    return () => {
      if (frameRequest) cancelAnimationFrame(frameRequest)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [texts])

  return <span className={className}>{currentText}</span>
}

