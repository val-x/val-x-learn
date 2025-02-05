"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = {
  main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80",
  community1:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
  community2:
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80",
  community3:
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80",
}

const DashboardSnippet = () => {
  return (
    <div className="relative py-20">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 rounded-[50%] blur-3xl"
      />

      {/* Feature Cards */}
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {[
            {
              title: "Real-time Chat",
              description: "Instant messaging with team members",
            },
            {
              title: "File Sharing",
              description: "Share and collaborate on files",
            },
            {
              title: "Video Calls",
              description: "Face-to-face meetings with your team",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="w-64 p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-sm font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <Image
              priority
              src={images.main}
              className="object-cover"
              alt="Team Collaboration"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -right-4 bottom-4 p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 w-64 hidden md:block"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-white">Active Users</h3>
              <span className="text-xs text-emerald-400">+24%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Community Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
        >
          {[images.community1, images.community2, images.community3].map(
            (src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <Image
                  src={src}
                  alt={`Community ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardSnippet
