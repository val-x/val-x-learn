"use client"
import { useAppSelector } from "@/redux/store"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import ExploreSlider from "./explore-slider"
import GroupList from "./group-list"

type Props = {
  layout: "SLIDER" | "LIST"
  category?: string
}

const SearchGroups = dynamic(
  () =>
    import("./searched-groups").then((components) => components.SearchGroups),
  {
    ssr: false,
  },
)

const ExplorePageContent = ({ layout, category }: Props) => {
  const { isSearching, data, status, debounce } = useAppSelector(
    (state) => state.searchReducer,
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const categories = [
    {
      label: "Fitness",
      text: "Join fitness enthusiasts and transform together",
      query: "fitness",
      gradient: "from-cyan-500/20 to-violet-500/20",
    },
    {
      label: "Lifestyle",
      text: "Connect with people who share your passions",
      query: "lifestyle",
      gradient: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      label: "Music",
      text: "Discover and share your musical journey",
      query: "music",
      gradient: "from-fuchsia-500/20 to-cyan-500/20",
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col space-y-8"
    >
      {isSearching || debounce ? (
        <motion.div variants={itemVariants}>
          <SearchGroups
            searching={isSearching as boolean}
            data={data!}
            query={debounce}
          />
        </motion.div>
      ) : (
        status !== 200 &&
        (layout === "SLIDER" ? (
          <>
            {categories.map((category, index) => (
              <motion.div
                key={category.query}
                variants={itemVariants}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-10`} />
                <div className="relative backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  <ExploreSlider
                    label={category.label}
                    text={category.text}
                    query={category.query}
                  />
                </div>
              </motion.div>
            ))}
          </>
        ) : (
          <motion.div variants={itemVariants}>
            <GroupList category={category as string} />
          </motion.div>
        ))
      )}
    </motion.div>
  )
}

export default ExplorePageContent
