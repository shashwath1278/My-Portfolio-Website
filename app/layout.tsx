import Navbar from '@/components/navbar'
import { ThemeProvider } from "@/components/theme-provider"
import ScrollIndicator from "@/components/scroll-indicator"
import ParticleAnimation from "@/components/particle-animation"
import FloatingShapes from "@/components/floating-shapes"
import WaveAnimation from "@/components/wave-animation"
import MagneticCursor from "@/components/magnetic-cursor"
import RotatingCube from "@/components/rotating-cube"
import NoiseTexture from "@/components/noise-texture"
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'elio.dev',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <ScrollIndicator />
          <ParticleAnimation />
          <FloatingShapes />
          <WaveAnimation />
          <MagneticCursor />
          <RotatingCube />
          <NoiseTexture />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
