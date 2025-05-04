"use client"

import { useRef, useEffect, useState } from "react"
import type React from "react"

interface MarqueeProps {
  children: React.ReactNode
  direction?: "left" | "right"
  pauseOnHover?: boolean
  speed?: number
}

export function Marquee({ children, direction = "left", pauseOnHover = false, speed = 20 }: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseEnter = () => {
      if (pauseOnHover) setIsPaused(true)
    }

    const handleMouseLeave = () => {
      setIsPaused(false)
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [pauseOnHover])

  return (
    <div
      ref={containerRef}
      className="flex overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      }}
    >
      <div
        className="flex min-w-full shrink-0 gap-4 py-4 animate-marquee"
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationPlayState: isPaused ? "paused" : "running",
          animationDuration: `${30 / speed}s`,
        }}
      >
        {children}
      </div>
      <div
        className="flex min-w-full shrink-0 gap-4 py-4 animate-marquee"
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationPlayState: isPaused ? "paused" : "running",
          animationDuration: `${30 / speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
