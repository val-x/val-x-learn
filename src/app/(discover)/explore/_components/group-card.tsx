"use client"

import { Card } from "@/components/ui/card"
import { truncateString } from "@/lib/utils"
import { motion } from "framer-motion"
import { Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
  id: string
  name: string
  category: string
  createdAt: Date
  userId: string
  thumbnail: string | null
  description: string | null
  privacy: "PUBLIC" | "PRIVATE"
  preview?: string
}

const GroupCard = ({
  id,
  userId,
  thumbnail,
  name,
  category,
  description,
  privacy,
  preview,
}: Props) => {
  return (
    <Link href={`/about/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-full"
      >
        <Card className="h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
          <div className="relative aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <Image
              src={preview || `https://ucarecdn.com/${thumbnail}/`}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/10 text-white">
                {category}
              </span>
            </div>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-lg font-semibold text-white/90 line-clamp-1">
              {name}
            </h3>
            {description && (
              <p className="text-sm text-gray-300/80 line-clamp-2">
                {truncateString(description, 120)}
              </p>
            )}
            <div className="flex items-center gap-2 text-gray-300/60">
              <Users className="w-4 h-4" />
              <span className="text-xs">
                {privacy === "PUBLIC" ? "Public Group" : "Private Group"}
              </span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}

export default GroupCard
