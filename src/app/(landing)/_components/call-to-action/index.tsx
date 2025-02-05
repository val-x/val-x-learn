"use client"

import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BadgePlus, Play } from "lucide-react"
import Link from "next/link"

const CallToAction = () => {
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-sm text-gray-300">
              🚀 Launching Soon - Join the Waitlist
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <GradientText
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
              element="H1"
            >
              Bringing Communities
              <br />
              Together
            </GradientText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300/80 max-w-3xl mx-auto"
            >
              Val-X Community is a vibrant online community platform that
              empowers people to connect, collaborate, and cultivate meaningful
              relationships
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link href="/sign-in">
              <Button
                size="lg"
                className="rounded-full text-base px-8 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 hover:opacity-90 transition-opacity"
              >
                <BadgePlus className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base px-8 bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16"
          >
            {[
              { label: "Active Communities", value: "10K+" },
              { label: "Daily Active Users", value: "50K+" },
              { label: "Messages Sent", value: "1M+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-300/80 mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default CallToAction
