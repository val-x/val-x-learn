"use client"

import Skeleton from "@/components/global/skeleton"
import { Slider } from "@/components/global/slider"
import { useExploreSlider, useGroupList } from "@/hooks/groups"
import { useAppSelector } from "@/redux/store"
import { motion } from "framer-motion"
import { SwiperSlide } from "swiper/react"
import GroupCard from "./group-card"

type Props = {
  query: string
  label: string
  text: string
}

const ExploreSlider = ({ label, query, text }: Props) => {
  const { groups, status } = useGroupList(query)
  const {
    refetch,
    isFetching,
    data: fetchedData,
    onLoadSlider,
  } = useExploreSlider(query, groups && groups.length)

  const { data } = useAppSelector((state) => state.infiniteScrollReducer)

  return (
    status === 200 &&
    groups.length > 0 &&
    onLoadSlider && (
      <div className="flex flex-col py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col px-6 md:px-8 lg:px-12 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {label}
          </h2>
          <p className="text-gray-300/80 mt-2">{text}</p>
        </motion.div>

        <Slider
          freeMode
          className="flex"
          spaceBetween={20}
          autoHeight
          onReachEnd={() => refetch()}
          breakpoints={{
            200: {
              slidesPerView: 1.2,
              slidesOffsetBefore: 24,
              slidesOffsetAfter: 24,
            },
            640: {
              slidesPerView: 2.2,
              slidesOffsetBefore: 24,
              slidesOffsetAfter: 24,
            },
            1024: {
              slidesPerView: 3.2,
              slidesOffsetBefore: 48,
              slidesOffsetAfter: 48,
            },
            1280: {
              slidesPerView: 4.2,
              slidesOffsetBefore: 48,
              slidesOffsetAfter: 48,
            },
            1536: {
              slidesPerView: 5.2,
              slidesOffsetBefore: 48,
              slidesOffsetAfter: 48,
            },
          }}
        >
          {groups.map((group, index) => (
            <SwiperSlide key={group.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <GroupCard {...group} />
              </motion.div>
            </SwiperSlide>
          ))}
          {fetchedData?.status === 200 &&
            data.map((group: any, index: number) => (
              <SwiperSlide key={group.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <GroupCard {...group} />
                </motion.div>
              </SwiperSlide>
            ))}
          {isFetching && (
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Skeleton element="CARD" />
              </motion.div>
            </SwiperSlide>
          )}
        </Slider>
      </div>
    )
  )
}

export default ExploreSlider
