"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadClick = () => {
    // In a real app, this would trigger the download
    console.log("Download clicked")
  }

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            className={`max-w-2xl transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
              Transforming Procurement Management
            </h1>
            <p className="text-slate-700 text-lg md:text-xl mb-8 max-w-xl">
              Pranivi streamlines your procurement process with powerful tools for supplier management, order tracking,
              and financial control, all in one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleDownloadClick}
                className="download-button group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SeoPyrC4xayiBswOs7uUVRvTRDendF.png"
                  width={500}
                  height={550}
                  alt="Pranivi Mobile App Interface"
                  className="rounded-xl shadow-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
