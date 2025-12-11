"use client"

import dynamic from "next/dynamic"

const MagicBento = dynamic(() => import("./magic-bento"), { ssr: false })

const aboutCards = [
  // Card 1: Founder Image (Top Left, 2 cols, 2 rows)
  {
    color: "#0a0a0a",
    title: "THARUN SAI",
    description: "Founder & CEO of CREATIVE SPARK MEDIA",
    label: "FOUNDER",
    image: "./images/tharun-image.jpg",
  },
  // Card 2: About Us (1 col, 2 rows)
  {
    color: "#0a0a0a",
    title: "Our Story",
    description:
      "CREATIVE SPARK MEDIA is a premier influencer agency dedicated to helping brands achieve their marketing goals. Our team of experts brings years of experience in influencer marketing, digital strategies, production, and branding to ensure your brand's success.",
    label: "WHO WE ARE",
  },
  // Card 3: Experience (1 col, 1 row)
  {
    color: "#0a0a0a",
    title: "Partnered with 100+ Brands & 12K Influencers",
    description: "Successfully delivered creative campaigns for brands and influencers.",
    label: "EXPERIENCE",
  },
  // Card 4: Location & Availability
  {
    color: "#0a0a0a",
    title: "Hyderabad, Telangana",
    description: "Based in Hyderabad, Telangana, India with global reach. 24/7 Support available.",
    label: "LOCATION & AVAILABILITY",
  },
  // Card 5: Another Founder Image
  {
    color: "#0a0a0a",
    title: "NAGENDRA",
    description: "Production & Creative Director",
    label: "",
    image: "./images/cam.jpg",
  },
  // Card 6: Founder Info
  {
    color: "#0a0a0a",
    title: "Our Team",
    description:
      "Together, we deliver end-to-end digital growth solutions, from brand identity and websites to marketing campaigns and high-impact visual storytelling.",
    label: "VISION",
  },
  // Card 7: Expertise
  {
    color: "#0a0a0a",
    title: "Production Shooter",
    description: "Leads the creative vision for the project, defining style, storytelling, and visual direction.",
    label: "EXPERTISE",
  },
  // Card 8: Web Designers Images
  {
    color: "#0a0a0a",
    title: ["NARASIMHA", "RAMA KRISHNA"],
    description: "WEB DESIGN TEAM",
    label: "",
    images: [
      { src: "./images/dev1.jpg" },
      { src: "./images/dev2.jpg"  },
    ],
  },
  // Card 9: Web Designing Info
  {
    color: "#0a0a0a",
    title: "Web & Graphic Design Excellence",
    description:
      "Our web design team brings creativity and technical expertise to build stunning, responsive websites that drive results and elevate your brand.",
    label: "WEBSITE & GRAPHIC DESIGN",
  },
]

export function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 md:pb-2 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">About</span> Us</h2>
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            Get to know the team behind Creative Media Spark and our commitment to excellence.
          </p>
        </div>
        <main className="min-h-screen bg-[#0a0a0a]">
          <MagicBento
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={50}
            particleCount={20}
            glowColor="255, 255, 255"
            cards={aboutCards}
          />
        </main>
      </div>
    </section>
  )
}
