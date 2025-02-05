"use client"

import BackdropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "Unlimited Team Members",
    description: "Build your community without limits",
  },
  {
    title: "Real-time Chat & Messaging",
    description: "Stay connected with instant communication",
  },
  {
    title: "Video Conferencing",
    description: "Face-to-face meetings in HD quality",
  },
  {
    title: "File Sharing & Storage",
    description: "Share and store files securely",
  },
  {
    title: "Custom Branding",
    description: "Make your community uniquely yours",
  },
  {
    title: "Priority Support 24/7",
    description: "We're here when you need us",
  },
]

export const PricingSection = () => {
  return (
    <div className="w-full pt-20 relative" id="pricing">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center space-y-12 relative z-10"
      >
        {/* Header */}
        <BackdropGradient className="p-8 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-200">Start Your Journey</span>
            </motion.div>

            <GradientText
              className="text-4xl md:text-5xl font-bold mb-4"
              element="H2"
            >
              Simple, Transparent Pricing
            </GradientText>
            <p className="text-lg text-gray-300/80 max-w-2xl mx-auto">
              Everything you need to build and grow your community. No hidden
              fees, no surprises.
            </p>
          </motion.div>
        </BackdropGradient>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500"
              >
                <span className="px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-sm font-medium text-white">
                  Most Popular
                </span>
              </motion.div>
            </div>

            {/* Card Content */}
            <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex justify-center items-baseline mb-2">
                  <span className="text-6xl font-bold text-white relative">
                    <span className="absolute inset-0 blur-lg bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 opacity-50" />
                    <span className="relative">$18</span>
                  </span>
                  <span className="text-xl text-gray-300 ml-2">/month</span>
                </div>
                <p className="text-gray-300/60">Billed monthly</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-gray-200 font-medium">
                        {feature.title}
                      </span>
                      <span className="text-sm text-gray-400">
                        {feature.description}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="space-y-4"
              >
                <Link href="/sign-in" className="block">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-all duration-300" />
                    <Button
                      size="lg"
                      className="relative w-full h-14 rounded-xl bg-black text-white text-lg font-medium border via-violet-500 hover:via-violet-500"
                    >
                      Get Started Now
                    </Button>
                  </div>
                </Link>
                <p className="text-sm text-gray-300/60 text-center">
                  14-day free trial, no credit card required
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />
    </div>
  )
}
