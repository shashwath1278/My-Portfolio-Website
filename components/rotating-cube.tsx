"use client"

import dynamic from "next/dynamic"

// This is a simple placeholder component that will be rendered during SSR
function RotatingCubePlaceholder() {
  return null
}

// Using a completely client-side component with dynamic import
// This ensures there are no hydration issues with this component
const RotatingCube = dynamic(
  () => import('./client-components/rotating-cube-client'),
  {
    ssr: false,
    loading: RotatingCubePlaceholder
  }
)

export default RotatingCube

