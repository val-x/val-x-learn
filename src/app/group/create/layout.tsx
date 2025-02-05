"use client"

import BackdropGradient from "@/components/global/backdrop-gradient"
import GlassCard from "@/components/global/glass-card"
import GradientText from "@/components/global/gradient-text"
import { GROUPLE_CONSTANTS } from "@/constants"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
}

const CreateGroupLayout = ({ children }: Props) => {
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

      {/* Main Content */}
      <div className="container relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10">
        {/* Left Column - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-8"
        >
          <BackdropGradient className="w-full p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <motion.h5
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl font-bold text-white/90"
                >
                  Val-X Community
                </motion.h5>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <GradientText element="H2" className="text-5xl font-bold">
                    Create Your Set
                  </GradientText>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-300/80 leading-relaxed"
              >
                Free for 14 days, then $18/month. Cancel anytime.
                <span className="block mt-2">
                  All features. Unlimited everything. No hidden fees.
                </span>
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {GROUPLE_CONSTANTS.createGroupPlaceholder.map(
                  (placeholder, index) => (
                    <motion.div
                      key={placeholder.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors hover:border-white/20"
                    >
                      <div className="text-cyan-400">{placeholder.icon}</div>
                      <p className="text-gray-300/90 text-sm">
                        {placeholder.label}
                      </p>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </BackdropGradient>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center items-center"
        >
          <BackdropGradient
            className="w-full p-1 rounded-2xl"
            container="items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <GlassCard className="w-full max-w-md backdrop-blur-xl bg-black/40 border border-white/10 p-8 rounded-xl">
                {children}
              </GlassCard>
            </motion.div>
          </BackdropGradient>
        </motion.div>
      </div>
    </div>
  )
}

export default CreateGroupLayout
