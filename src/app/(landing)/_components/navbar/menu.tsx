"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useNavigation } from "@/hooks/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"

type MenuProps = {
  orientation: "mobile" | "desktop"
}

const Menu = ({ orientation }: MenuProps) => {
  const { section, onSetSection } = useNavigation()

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  const MenuItem = ({ item, index }: { item: any; index: number }) => (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={menuItemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={item.path}
        {...(item.section && {
          onClick: () => onSetSection(item.path),
        })}
        className={cn(
          "relative rounded-full flex items-center gap-2 py-2 px-6 transition-all duration-300",
          section === item.path
            ? "text-white bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm border border-white/10"
            : "text-gray-400 hover:text-white",
          orientation === "mobile" ? "text-base py-3" : "text-sm",
        )}
      >
        <span
          className={cn(
            "transition-colors duration-300",
            section === item.path ? "text-cyan-400" : "text-gray-400",
          )}
        >
          {item.icon}
        </span>
        <span>{item.label}</span>
        {section === item.path && (
          <motion.div
            layoutId="activeBackground"
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-full -z-10"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Link>
    </motion.div>
  )

  switch (orientation) {
    case "desktop":
      return (
        <Card className="bg-black/40 border-white/10 backdrop-blur-xl p-2 lg:flex hidden rounded-full">
          <CardContent className="p-0 flex gap-2">
            {GROUPLE_CONSTANTS.landingPageMenu.map((menuItem, index) => (
              <MenuItem key={menuItem.id} item={menuItem} index={index} />
            ))}
          </CardContent>
        </Card>
      )

    case "mobile":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 mt-10 px-4"
        >
          {GROUPLE_CONSTANTS.landingPageMenu.map((menuItem, index) => (
            <MenuItem key={menuItem.id} item={menuItem} index={index} />
          ))}
        </motion.div>
      )
    default:
      return null
  }
}

export default Menu
