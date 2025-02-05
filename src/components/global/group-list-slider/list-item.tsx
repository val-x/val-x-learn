"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type GroupListItemProps = {
  icon: JSX.Element
  label: string
  path?: string
  selected?: string
}

export const GroupListItem = ({
  icon,
  label,
  path,
  selected,
}: GroupListItemProps) => {
  const isSelected = selected === path

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex gap-3 items-center py-2 px-6 rounded-xl cursor-pointer transition-all duration-300",
        isSelected
          ? "bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 border border-white/10 backdrop-blur-sm"
          : "bg-black/20 border border-white/5 hover:border-white/20",
      )}
    >
      <span
        className={cn(
          "transition-colors duration-300",
          isSelected ? "text-cyan-400" : "text-gray-400",
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          "text-sm font-medium transition-colors duration-300",
          isSelected ? "text-white" : "text-gray-300",
        )}
      >
        {label}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeHighlight"
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-xl -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.div>
  )
}
