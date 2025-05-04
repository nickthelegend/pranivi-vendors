"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Procurement Director, Techlify Inc.",
      content:
        "Pranivi has completely transformed our procurement operations. We've reduced processing time by 65% and improved our supplier relationships significantly.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      position: "Operations Manager, GlobalTrade",
      content:
        "The analytics dashboard gives us insights we never had before. Our team can now make data-driven decisions that have resulted in 30% cost savings.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Jennifer Williams",
      position: "CFO, Innovate Solutions",
      content:
        "The ROI on Pranivi was evident within the first quarter. The platform paid for itself through efficiency gains and better contract negotiations.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover why procurement professionals trust Pranivi to streamline their operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <Card className="p-2 border-none shadow-xl">
                  <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl">
                    <Quote className="h-12 w-12 text-blue-200 mb-6" />
                    <p className="text-slate-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-slate-500 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-blue-600" : "bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-slate-50"
            aria-label="Next testimonial"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
