"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Users, Building2, Eye } from "lucide-react"
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion"

const influencers = [
  { name: "", followers: "", image: "/influencer-1.jpg" },
  { name: "", followers: "", image: "/influencer-2.JPG" },
  { name: "", followers: "", image: "/influencer-3.jpg" },
  { name: "", followers: "", image: "/influencer-4.JPG" },
  { name: "", followers: "", image: "/influencer-5.jpg" },
  { name: "", followers: "", image: "/influencer-6.JPG" },
  { name: "", followers: "", image: "/influencer-7.jpg" },
  { name: "", followers: "", image: "/influencer-8.JPG" },

  { name: "", followers: "", image: "/influencer-9.jpg" },
  { name: "", followers: "", image: "/influencer-10.jpg" },
  { name: "", followers: "", image: "/influencer-11.JPG" },
  { name: "", followers: "", image: "/influencer-12.JPG" },
  { name: "", followers: "", image: "/influencer-13.png" },
  { name: "", followers: "", image: "/influencer-14.png" },
  { name: "", followers: "", image: "/influencer-15.png" },
  { name: "", followers: "", image: "/influencer-16.png" },

  { name: "", followers: "", image: "/influencer-17.png" },
  { name: "", followers: "", image: "/influencer-18.png" },
  { name: "", followers: "", image: "/influencer-19.png" },
  { name: "", followers: "", image: "/influencer-20.png" },
  { name: "", followers: "", image: "/influencer-21.png" },
  { name: "", followers: "", image: "/influencer-22.png" },
  { name: "", followers: "", image: "/influencer-23.png" },
  { name: "", followers: "", image: "/influencer-24.png" },

  { name: "", followers: "", image: "/influencer-25.png" },
  { name: "", followers: "", image: "/influencer-26.png" },
  { name: "", followers: "", image: "/influencer-27.png" },
  { name: "", followers: "", image: "/influencer-28.png" },
  { name: "", followers: "", image: "/influencer-29.png" },
  { name: "", followers: "", image: "/influencer-30.png" },
  { name: "", followers: "", image: "/influencer-31.png" },
  { name: "", followers: "", image: "/influencer-32.png" },

  { name: "", followers: "", image: "/influencer-33.png" },
  { name: "", followers: "", image: "/influencer-34.png" },
  { name: "", followers: "", image: "/influencer-35.png" },
  { name: "", followers: "", image: "/influencer-36.png" },
  { name: "", followers: "", image: "/influencer-37.png" },
  { name: "", followers: "", image: "/influencer-38.png" },
  { name: "", followers: "", image: "/influencer-39.png" },
  { name: "", followers: "", image: "/influencer-40.png" },

  { name: "", followers: "", image: "/influencer-41.png" },
  { name: "", followers: "", image: "/influencer-42.png" },
  { name: "", followers: "", image: "/influencer-43.png" },
  { name: "", followers: "", image: "/influencer-44.png" },
  { name: "", followers: "", image: "/influencer-45.png" },

]

const brands = [
  {name:"Sri Silk India", logo: "./brands/Sri-Silk-India.jpg" },
  {name:"Adira", logo: "./brands/Adira.jpg" },
  { name: "Alchemy", logo: "./brands/alchemy.png" },
  { name: "Ekadhi", logo: "./brands/ekadhi.png" },
  { name: "Emmadi", logo: "./brands/emmadi.png" },
  { name: "Fashion Factory", logo: "./brands/fashion-factory.png" },
  { name: "Goyaz", logo: "./brands/goyaz.png" },
  { name: "Ithika Group", logo: "./brands/ithika-group.png" },
  { name: "Joyalukkas", logo: "./brands/joyalukkas.png" },
  { name: "KLM", logo: "./brands/klm.png" },
  { name: "Murugan Silks", logo: "./brands/murugan-silks.png" },
  { name: "Nathu & Sons", logo: "./brands/nathu-sons.png" },
  { name: "Poornima Prints", logo: "./brands/poornima-prints.png" },
  { name: "Ramala Collections", logo: "./brands/ramala-collections.png" },
  { name: "Royaloak", logo: "./brands/royaloak.png" },
  { name: "Sanghvi", logo: "./brands/sanghvi.png" },
  { name: "She Needs", logo: "./brands/she-needs.png" },
  { name: "Sri Krishna Silks", logo: "./brands/sri-krishna-silks.png" },
  { name: "Sri Padmavathi", logo: "./brands/sri-padmavathi.png" },
  { name: "Srih Clinic", logo: "./brands/srihclinic.png" },
  { name: "TONI & GUY", logo: "./brands/toni-guy.png" },
  { name: "Tyohaar", logo: "./brands/tyohaar.jpg" },
  { name: "VLCC", logo: "./brands/vlcc.png" },
]

const metrics = [
  { label: "Influencers", value: "12K+", icon: Users },
  { label: "Brands", value: "100+", icon: Building2 },
  { label: "Total Reach", value: "150M+", icon: Eye },
]

function InfiniteCarousel({
  items,
  direction = "left",
  renderItem,
}: {
  items: any[]
  direction?: "left" | "right"
  renderItem: (item: any, index: number, isHovered: boolean, onHover: (idx: number | null) => void) => React.ReactNode
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // We need enough duplicates to ensure smooth looping
  // 3 copies is usually enough if the container isn't excessively wide compared to content
  const duplicatedItems = [...items, ...items, ...items, ...items]

  const baseVelocity = direction === "left" ? 0.05 : -0.05 // Speed in % per frame roughly

  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Speed control
  const speedFactor = useRef(1)
  const targetSpeedFactor = useRef(1)

  useAnimationFrame((time, delta) => {
    // Smoothly interpolate current speed towards target speed
    const diff = targetSpeedFactor.current - speedFactor.current
    if (Math.abs(diff) > 0.001) {
      speedFactor.current += diff * 0.05 // Adjust 0.05 for smoothness (lower = smoother/slower stop)
    } else {
      speedFactor.current = targetSpeedFactor.current
    }

    let moveBy = baseVelocity * speedFactor.current * (delta / 200)

    // Direction handling (if we want to support right-to-left with positive logic)
    // Actually baseVelocity handles the sign.

    let newX = x.get() - moveBy

    // Wrapping logic
    // We assume 4 sets of items. When we've scrolled past the first set (25%), we reset.
    // If wrapping right (negative velocity -> getting more positive x? No, standard is moving left means x decreases)
    // Moving Left: x goes 0 -> -25% -> 0
    // Moving Right: x goes 0 -> 25% -> 0

    // We'll work in percentages for simplicity if width is unknown, 
    // BUT we need to know where the wrap point is. 
    // Let's assume the container allows scrolling freely.
    // Best interaction for infinite scroll often relies on exact pixel measurements or percentage of total width

    // Let's use % of the TOTAL duplicated content width.
    // One set is 1/4 of the total list (since we have 4 copies)
    // If direction is left, we move negative.
    if (direction === "left") {
      if (newX <= -25) {
        newX += 25
      }
    } else {
      // Moving right (positive velocity potentially? or start at -25 and go up)
      // If direction is right, baseVelocity is negative (wait, standard scroll left is negative x)
      // If we want to move right, x should INCREASE.
      // So baseVelocity should be negative? 
      // Let's stick to:
      // Left move: x decreases. Base: 0.02

      // Wait, current CSS uses `animate-scroll-left` which usually does `transform: translateX(-50%)`

      if (newX >= 0 && direction === "right") {
        newX -= 25 // Snap back to -25% to scroll towards 0 again
      } else if (direction === "right" && x.get() === 0) {
        // Initial state for right scroll could be tricky, assume we start at -25% so we can scroll right to 0?
        // Or just let it loop: 0 -> 25 -> 0
        if (newX >= 0) newX = -25;
      }
    }

    // Simpler wrapping logic: just keep it within -25% and 0% for Left
    // fast wrap check
    if (newX <= -25) newX = 0;
    if (newX > 0) newX = -25; // For right scroll logic if slightly off

    x.set(newX)
  })

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => {
        targetSpeedFactor.current = 0
        // setIsPaused(true) // No longer needed
      }}
      onMouseLeave={() => {
        targetSpeedFactor.current = 1
        setHoveredIndex(null)
      }}
    >
      <motion.div
        ref={containerRef}
        className="flex gap-4 md:gap-6"
        style={{
          x: useTransform(x, value => `${value}%`), // Map our internal value to percentage
          width: "fit-content",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index}>{renderItem(item, index, hoveredIndex === index, setHoveredIndex)}</div>
        ))}
      </motion.div>
    </div>
  )
}

export function OurWork() {
  return (
    <section id="work" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Work</span></h2>
            <div className="hidden md:block w-24 h-px bg-white/20"></div>
          </div>
        </div>

        {/* Influencers Carousel - Left to Right */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl font-medium mb-6 md:mb-8 text-white/80"><span className=" text-lg md:text-xl font-medium mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Influencers</span> We've Worked With</h3>
          <InfiniteCarousel
            items={influencers}
            direction="left"
            renderItem={(influencer, index, isHovered, onHover) => (
              <div
                className="relative w-48 h-70 md:w-64 md:h-90 flex-shrink-0 overflow-hidden cursor-pointer group transition-all duration-500"
                onMouseEnter={() => onHover(index)}
                onMouseLeave={() => onHover(null)}
              >
                <Image
                  src={influencer.image || "/placeholder.svg"}
                  alt={influencer.name}
                  fill
                  className={`object-cover transition-all duration-500 ${isHovered ? "scale-105" : "grayscale"}`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-lg md:text-xl font-bold text-white">{influencer.name}</p>
                  <p className="text-white/80 mt-1 text-sm md:text-base">{influencer.followers}</p>
                </div>
              </div>
            )}
          />
        </div>

        {/* Brands Carousel - Right to Left */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl font-medium mb-6 md:mb-8 text-white/80"><span className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Brands</span> We've Partnered With</h3>
          <InfiniteCarousel
            items={brands}
            direction="right"
            renderItem={(brand, index, isHovered, onHover) => (
              <div
                className="relative w-36 h-30 md:w-48 md:h-40 flex-shrink-0 bg-[#1a1a1a] flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-500"
                onMouseEnter={() => onHover(index)}
                onMouseLeave={() => onHover(null)}
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className={`object-contain transition-all duration-500 w-20 md:w-[120px] ${isHovered ? "blur-sm opacity-30" : "opacity-70"}`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-lg md:text-xl font-bold text-white">{brand.name}</p>
                </div>
              </div>
            )}
          />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 md:p-6 bg-[#1a1a1a] group hover:bg-[#222] transition-colors"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2a2a2a] flex items-center justify-center group-hover:scale-110 transition-transform">
                <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">{metric.value}</p>
                <p className="text-white/60 text-xs md:text-sm">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

