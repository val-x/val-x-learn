"use client"

import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { GroupListSlider } from "@/components/global/group-list-slider"
import Search from "@/components/global/search"
import { motion } from "framer-motion"
import { Compass, Plus, Sparkles } from "lucide-react"
import Link from "next/link"

type ExploreHeroProps = {
  user: {
    status: number
  }
}

const ExploreHero = ({ user }: ExploreHeroProps) => {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/30 rounded-full blur-3xl opacity-70" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-200">
              Discover Amazing Communities
            </span>
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
          </motion.div>

          {/* Title */}
          <div className="space-y-6 py-4">
            <BackdropGradient>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-fuchsia-500/40 rounded-full blur-3xl" />

                <div className="relative z-10 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-2xl p-4">
                  <GradientText
                    className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-tight tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    element="H2"
                  >
                    Explore Val-X
                  </GradientText>
                </div>
              </motion.div>
            </BackdropGradient>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-lg text-gray-200"
            >
              <span>Find your community</span>
              <span className="text-gray-400">•</span>
              <Link
                href={user.status === 200 ? `/group/create` : "/sign-in"}
                className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                <span className="underline underline-offset-4">
                  Create your own
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Search and Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <BackdropGradient
              className="w-full max-w-4xl mx-auto p-6 rounded-2xl"
              container="items-center"
            >
              <Search
                placeholder="Search for anything"
                searchType="GROUPS"
                glass
                inputStyle="w-full max-w-2xl text-lg"
                className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-xl py-3 px-5 mb-6 hover:border-white/40 transition-colors focus-within:border-cyan-500/50"
              />
              <div className="w-full overflow-hidden">
                <GroupListSlider
                  overlay
                  route
                  slidesOffsetBefore={24}
                  slidesOffsetAfter={24}
                  className="px-2"
                />
              </div>
            </BackdropGradient>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}

export default ExploreHero
