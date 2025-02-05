"use client"

import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { motion } from "framer-motion"
import ExplorePageContent from "./explore-content"

const ExploreLayout = () => {
  return (
    <div className="min-h-screen bg-black/95 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header Section */}
          <BackdropGradient className="p-8 rounded-2xl mb-12">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GradientText
                  element="H1"
                  className="text-4xl md:text-5xl font-bold"
                >
                  Explore Communities
                </GradientText>
                <p className="text-gray-300/80 mt-4 max-w-2xl mx-auto">
                  Discover vibrant communities that match your interests and
                  connect with like-minded people from around the world.
                </p>
              </motion.div>
            </div>
          </BackdropGradient>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <ExplorePageContent layout="SLIDER" />
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
    </div>
  )
}

export default ExploreLayout
