"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import CallToAction from "./_components/call-to-action"
import DashboardSnippet from "./_components/dashboard-snippet"

const PricingSection = dynamic(
  () =>
    import("./_components/pricing").then(
      (component) => component.PricingSection,
    ),
  { ssr: true },
)

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black/95 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-20 flex flex-col gap-36"
        >
          <div className="space-y-20">
            <CallToAction />
            <DashboardSnippet />
          </div>
          <PricingSection />
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
    </main>
  )
}
